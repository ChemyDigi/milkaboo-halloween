"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Eye, EyeOff, RotateCcw, Timer } from "lucide-react";
import { useDeviceTier, useReducedMotion } from "@/hooks/useDeviceTier";
import { useSounds, type SfxName } from "@/hooks/useSounds";
import MuteButton from "@/components/MuteButton";
import Casper, { ARRIVAL_SECONDS, CASPER_SRC } from "./Casper";

/** the animated night behind the puzzle; 3D, so it loads on its own after the puzzle is up */
const CustardNight = dynamic(() => import("./CustardNight"), { ssr: false });

/** The Casper Custard poster, cut into COLS × ROWS classic jigsaw pieces. */
const IMAGE = { src: "/games/casper-custard/Milka%20Boo%20Vanilla%20Ghost%20Bubble%20Tea.png", width: 1024, height: 1536 };
const COLS = 3;
const ROWS = 4;
const PIECE_W = IMAGE.width / COLS;
const PIECE_H = IMAGE.height / ROWS;
/** tab sizes scale with this, so tabs look the same on every edge */
const TAB = Math.min(PIECE_W, PIECE_H);
/** room around each piece for its tabs (image units) */
const MARGIN = TAB * 0.3;
/** a piece dropped this close to its spot snaps in (image units) */
const SNAP = TAB * 0.2;
const ACCENT = "#fed778";

/** −1/1: which way a shared edge's tab points; 0: a straight border edge */
type Edge = -1 | 0 | 1;

interface Piece {
  id: number;
  col: number;
  row: number;
  /** the piece's outline, in image coordinates */
  path: string;
  /** where its cell's top-left corner is now, in image units relative to the board's top-left */
  x: number;
  y: number;
  placed: boolean;
}

interface Layout {
  /** the play area, in px */
  width: number;
  height: number;
  /** screen px per image unit */
  scale: number;
  boardLeft: number;
  boardTop: number;
  /** where loose pieces get scattered (container px; each rect is where a piece's cell may start) */
  trays: { x: number; y: number; w: number; h: number }[];
}

/**
 * One edge from (x0, y0) to (x1, y1), with a tab bulging outward (sign 1), a blank cut inward (−1), or
 * straight (0). The tab is drawn from a fixed template around the edge's midpoint, in TAB units.
 */
function edgePath(x0: number, y0: number, x1: number, y1: number, sign: Edge) {
  if (sign === 0) return `L ${ x1 } ${ y1 } `;
  const len = Math.hypot(x1 - x0, y1 - y0);
  const ux = (x1 - x0) / len;
  const uy = (y1 - y0) / len;
  // outward, for a piece traced clockwise (screen y points down)
  const vx = uy * sign;
  const vy = -ux * sign;
  const mx = (x0 + x1) / 2;
  const my = (y0 + y1) / 2;
  const p = (along: number, out: number) =>
    `${ (mx + (ux * along + vx * out) * TAB).toFixed(1) } ${ (my + (uy * along + vy * out) * TAB).toFixed(1) } `;
  return [
    `L ${ p(-0.12, 0) } `,
    `C ${ p(-0.08, 0) } ${ p(-0.06, 0.06) } ${ p(-0.1, 0.12) } `,
    `C ${ p(-0.16, 0.22) } ${ p(-0.05, 0.28) } ${ p(0, 0.28) } `,
    `C ${ p(0.05, 0.28) } ${ p(0.16, 0.22) } ${ p(0.1, 0.12) } `,
    `C ${ p(0.06, 0.06) } ${ p(0.08, 0) } ${ p(0.12, 0) } `,
    `L ${ x1 } ${ y1 } `,
  ].join(" ");
}

/** A fresh puzzle: random tabs on every shared edge, every piece loose (positions are set by `scatter`). */
function makePieces(): Piece[] {
  const flip = (): Edge => (Math.random() < 0.5 ? -1 : 1);
  // horizontal[r][c]: the edge under row r (1 = the tab points down); vertical[r][c]: right of column c (1 = right)
  const horizontal = Array.from({ length: ROWS - 1 }, () => Array.from({ length: COLS }, flip));
  const vertical = Array.from({ length: ROWS }, () => Array.from({ length: COLS - 1 }, flip));
  const pieces: Piece[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const x0 = col * PIECE_W;
      const y0 = row * PIECE_H;
      const x1 = x0 + PIECE_W;
      const y1 = y0 + PIECE_H;
      const top: Edge = row === 0 ? 0 : (-horizontal[row - 1][col] as Edge);
      const right: Edge = col === COLS - 1 ? 0 : vertical[row][col];
      const bottom: Edge = row === ROWS - 1 ? 0 : horizontal[row][col];
      const left: Edge = col === 0 ? 0 : (-vertical[row][col - 1] as Edge);
      const path = [
        `M ${ x0 } ${ y0 } `,
        edgePath(x0, y0, x1, y0, top),
        edgePath(x1, y0, x1, y1, right),
        edgePath(x1, y1, x0, y1, bottom),
        edgePath(x0, y1, x0, y0, left),
        "Z",
      ].join(" ");
      pieces.push({ id: row * COLS + col, col, row, path, x: 0, y: 0, placed: false });
    }
  }
  return pieces;
}

function computeLayout(width: number, height: number): Layout {
  // Adaptive top and bottom margins to fit safe areas, title and controls
  const top = Math.max(96, Math.min(124, Math.round(height * 0.12)));
  const bottom = Math.max(68, Math.min(84, Math.round(height * 0.09)));
  const playH = Math.max(height - top - bottom, 200);

  // Near-square and portrait aspect ratios (e.g. iPad portrait 3:4, square screens, phones)
  // place the tray below the board so pieces have plenty of room
  const portrait = width < height * 1.05;

  if (portrait) {
    // Reserve at least enough vertical room for loose pieces to scatter cleanly
    const trayMinH = Math.max(200, Math.min(380, Math.round(playH * 0.42)));
    const maxBoardH = playH - trayMinH;
    const scale = Math.min((width - 40) / IMAGE.width, maxBoardH / IMAGE.height);
    const boardW = IMAGE.width * scale;
    const boardH = IMAGE.height * scale;
    const boardLeft = (width - boardW) / 2;
    const trayTop = top + boardH + 16;
    const pieceW = PIECE_W * scale;
    const pieceH = PIECE_H * scale;

    return {
      width,
      height,
      scale,
      boardLeft,
      boardTop: top,
      trays: [
        {
          x: 16,
          y: trayTop,
          w: Math.max(width - 32 - pieceW, 40),
          h: Math.max(height - bottom - trayTop - pieceH, 60),
        },
      ],
    };
  }

  // Landscape mode (wider tablets e.g. 1024x768, 1280x800, desktops):
  // Trays on left and right sides. Guarantee each tray has ample width for loose pieces.
  const minTrayW = Math.max(140, Math.round(width * 0.22));
  const maxBoardW = Math.max(220, width - 2 * minTrayW - 48);
  const scale = Math.min(maxBoardW / IMAGE.width, playH / IMAGE.height);
  const boardW = IMAGE.width * scale;
  const boardLeft = (width - boardW) / 2;
  const pieceW = PIECE_W * scale;
  const pieceH = PIECE_H * scale;
  const side = Math.max(boardLeft - 24 - pieceW, 40);
  const trayH = Math.max(playH - pieceH, 60);

  return {
    width,
    height,
    scale,
    boardLeft,
    boardTop: top,
    trays: [
      { x: 16, y: top, w: side, h: trayH },
      { x: boardLeft + boardW + 8, y: top, w: side, h: trayH },
    ],
  };
}

const TIME_LIMIT_SECONDS = 35;
const TIME_LIMIT_MS = TIME_LIMIT_SECONDS * 1000;
const MAX_MOVES = 50;
/** this little time or this few moves left, and Casper's ghost starts laughing at you */
const DANGER_MS = 10000;
const DANGER_MOVES = 10;
/** besides the music, only the evil laugh: when you start running out, and louder when the game is lost */
const SOUNDS: readonly SfxName[] = ["laugh"];

const formatCountdown = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${ Math.floor(s / 60) }:${ String(s % 60).padStart(2, "0") } `;
};

const formatElapsed = (ms: number) => {
  const s = Math.floor(ms / 1000);
  return `${ Math.floor(s / 60) }:${ String(s % 60).padStart(2, "0") } `;
};

interface Props {
  /** back to the flavours */
  onExit: () => void;
}

/**
 * "Piece Casper back together": a 12-piece jigsaw of the Casper Custard poster. Drag the loose pieces onto
 * the board; each one snaps in when it's dropped near its spot. Limited to 35 seconds and 50 moves.
 */
export default function JigsawPuzzle({ onExit }: Props) {
  const uid = useId().replace(/:/g, "");
  const container = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<Layout | null>(null);
  const [pieces, setPieces] = useState<Piece[]>(makePieces);
  /** draw order of the loose pieces: the last one is on top */
  const [order, setOrder] = useState<number[]>(() => pieces.map((p) => p.id));
  const [scattered, setScattered] = useState(false);
  /** goes up on every shuffle: Casper flies in again and the pieces are tossed out again */
  const [round, setRound] = useState(0);
  const [peek, setPeek] = useState(false);
  const isPeekingRef = useRef(false);
  const pointerDownAt = useRef<number>(0);
  const wasHoldingRef = useRef<boolean>(false);
  const peekTimeout = useRef<NodeJS.Timeout | null>(null);
  const peekStartedAt = useRef<number>(0);

  const clearPeekTimer = useCallback(() => {
    if (peekTimeout.current) {
      clearTimeout(peekTimeout.current);
      peekTimeout.current = null;
    }
  }, []);

  const hidePeek = useCallback(() => {
    clearPeekTimer();
    isPeekingRef.current = false;
    setPeek(false);
  }, [clearPeekTimer]);

  const triggerPeek = useCallback((durationMs = 3000) => {
    clearPeekTimer();
    isPeekingRef.current = true;
    peekStartedAt.current = Date.now();
    setPeek(true);
    peekTimeout.current = setTimeout(() => {
      hidePeek();
    }, durationMs);
  }, [clearPeekTimer, hidePeek]);
  const [moves, setMoves] = useState(0);
  const [phase, setPhase] = useState<"intro" | "playing">("intro");
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const [finishedIn, setFinishedIn] = useState<number | null>(null);
  const drag = useRef<{ id: number; pointer: number; startX: number; startY: number; fromX: number; fromY: number } | null>(null);
  const rafMove = useRef<number | null>(null);
  const pendingMove = useRef<{ id: number; x: number; y: number } | null>(null);
  const [draggingId, setDraggingId] = useState<number | null>(null);

  const won = finishedIn !== null;
  const elapsed = finishedIn ?? (startedAt === null ? 0 : Math.min(TIME_LIMIT_MS, Math.max(0, now - startedAt)));
  const timeLeftMs = Math.max(0, TIME_LIMIT_MS - elapsed);
  const movesLeft = Math.max(0, MAX_MOVES - moves);

  const isTimeUp = startedAt !== null && !won && timeLeftMs <= 0;
  const isMovesUp = !won && moves >= MAX_MOVES;
  const lost = !won && (isTimeUp || isMovesUp);
  const lostReason = isTimeUp ? "time" : isMovesUp ? "moves" : null;

  const danger = startedAt !== null && !won && !lost && (timeLeftMs <= DANGER_MS || movesLeft <= DANGER_MOVES);

  const placedCount = pieces.filter((p) => p.placed).length;
  const tier = useDeviceTier();
  const reducedMotion = useReducedMotion();
  const { muted, toggleMute, unlock, play, setAmbience } = useSounds(SOUNDS);

  // the music starts with the game: the tap that opened it lets the browser play sound
  useEffect(() => unlock(), [unlock]);
  useEffect(() => {
    if (danger) play("laugh");
  }, [danger, play]);
  useEffect(() => {
    if (!lost) return;
    // the music drops back and the ghost laughs louder than ever
    setAmbience(0.35);
    play("laugh", true);
  }, [lost, play, setAmbience]);

  /** throws every loose piece somewhere in the trays */
  const scatter = useCallback((list: Piece[], l: Layout) => {
    return list.map((p) => {
      if (p.placed) return p;
      const tray = l.trays[Math.floor(Math.random() * l.trays.length)];
      const px = tray.x + Math.random() * tray.w;
      const py = tray.y + Math.random() * tray.h;
      return { ...p, x: (px - l.boardLeft) / l.scale, y: (py - l.boardTop) / l.scale };
    });
  }, []);

  // measure the play area when it first appears and whenever it changes size,
  // and put the loose pieces back where they can be reached
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      const l = computeLayout(el.clientWidth, el.clientHeight);
      setLayout(l);
      setPieces((list) => scatter(list, l));
      setScattered(true);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [scatter]);

  // the clock ticks from the first touch until the game is won or lost
  useEffect(() => {
    if (startedAt === null || won || lost) return;
    const timer = setInterval(() => setNow(performance.now()), 100);
    return () => clearInterval(timer);
  }, [startedAt, won, lost]);

  // cancel any ongoing drag if time runs out or moves are exhausted
  useEffect(() => {
    if (lost && drag.current) {
      drag.current = null;
      setDraggingId(null);
    }
  }, [lost]);

  // Clean up peek timer on unmount, or when game ends
  useEffect(() => {
    if (won || lost) {
      hidePeek();
    }
    return () => {
      clearPeekTimer();
    };
  }, [won, lost, hidePeek, clearPeekTimer]);

  const handlePeekPointerDown = useCallback((e: ReactPointerEvent<HTMLButtonElement>) => {
    if (won || lost) return;
    pointerDownAt.current = Date.now();
    wasHoldingRef.current = false;
    if (!isPeekingRef.current) {
      isPeekingRef.current = true;
      peekStartedAt.current = Date.now();
      setPeek(true);
    }
  }, [won, lost]);

  const handlePeekPointerUp = useCallback(() => {
    if (won || lost) return;
    const heldMs = Date.now() - pointerDownAt.current;
    if (heldMs >= 600) {
      // Held deliberately: release immediately hides peek
      wasHoldingRef.current = true;
      hidePeek();
    } else {
      // Short tap/click: auto-hide after 3 seconds
      clearPeekTimer();
      peekTimeout.current = setTimeout(() => {
        hidePeek();
      }, 3000);
    }
  }, [won, lost, hidePeek, clearPeekTimer]);

  const handlePeekPointerCancel = useCallback(() => {
    if (wasHoldingRef.current || isPeekingRef.current) {
      hidePeek();
    }
  }, [hidePeek]);

  const handlePeekClick = useCallback(() => {
    if (won || lost) return;
    if (wasHoldingRef.current) {
      wasHoldingRef.current = false;
      return;
    }
    if (!isPeekingRef.current) {
      triggerPeek(3000);
    } else if (Date.now() - peekStartedAt.current > 300) {
      // Second click while active: dismiss peek early
      hidePeek();
    }
  }, [won, lost, triggerPeek, hidePeek]);

  const restart = () => {
    hidePeek();
    setAmbience(1);
    const fresh = makePieces();
    setPieces(layout ? scatter(fresh, layout) : fresh);
    setOrder(fresh.map((p) => p.id));
    setMoves(0);
    setStartedAt(null);
    setNow(0);
    setFinishedIn(null);
    setDraggingId(null);
    drag.current = null;
    setRound((r) => r + 1);
    setPhase("playing");
  };

  const onPointerDown = (e: ReactPointerEvent<SVGGElement>, piece: Piece) => {
    if (phase !== "playing" || piece.placed || won || lost || drag.current) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { id: piece.id, pointer: e.pointerId, startX: e.clientX, startY: e.clientY, fromX: piece.x, fromY: piece.y };
    setDraggingId(piece.id);
    setOrder((o) => [...o.filter((id) => id !== piece.id), piece.id]);
    if (startedAt === null) {
      const t = performance.now();
      setStartedAt(t);
      setNow(t);
    }
  };

  useEffect(() => {
    return () => {
      if (rafMove.current !== null) cancelAnimationFrame(rafMove.current);
    };
  }, []);

  const onPointerMove = (e: ReactPointerEvent<SVGGElement>) => {
    if (lost || won) return;
    const d = drag.current;
    if (!d || d.pointer !== e.pointerId || !layout) return;
    const x = d.fromX + (e.clientX - d.startX) / layout.scale;
    const y = d.fromY + (e.clientY - d.startY) / layout.scale;
    pendingMove.current = { id: d.id, x, y };

    if (rafMove.current === null) {
      rafMove.current = requestAnimationFrame(() => {
        rafMove.current = null;
        if (pendingMove.current) {
          const { id, x: px, y: py } = pendingMove.current;
          setPieces((list) => list.map((p) => (p.id === id ? { ...p, x: px, y: py } : p)));
        }
      });
    }
  };

  const onPointerUp = (e: ReactPointerEvent<SVGGElement>) => {
    const d = drag.current;
    if (!d || d.pointer !== e.pointerId) return;
    if (rafMove.current !== null) {
      cancelAnimationFrame(rafMove.current);
      rafMove.current = null;
    }
    const finalX = pendingMove.current?.id === d.id ? pendingMove.current.x : d.fromX + (e.clientX - d.startX) / (layout?.scale ?? 1);
    const finalY = pendingMove.current?.id === d.id ? pendingMove.current.y : d.fromY + (e.clientY - d.startY) / (layout?.scale ?? 1);
    pendingMove.current = null;
    drag.current = null;
    setDraggingId(null);
    if (lost || won) return;

    setMoves((m) => m + 1);
    const next = pieces.map((p) => {
      if (p.id !== d.id) return p;
      const homeX = p.col * PIECE_W;
      const homeY = p.row * PIECE_H;
      return Math.abs(finalX - homeX) < SNAP && Math.abs(finalY - homeY) < SNAP ? { ...p, x: homeX, y: homeY, placed: true } : { ...p, x: finalX, y: finalY };
    });
    setPieces(next);
    // the last piece is in: stop the clock
    if (next.every((p) => p.placed)) {
      setFinishedIn(performance.now() - (startedAt ?? performance.now()));
    }
  };

  // stacking: placed pieces underneath, then the loose ones in their draw order. It's done with z-index
  // rather than DOM order, so picking a piece up never moves its node (which would restart its toss-in
  // animation and drop the pointer capture mid-drag)
  const stack = useMemo(() => new Map(order.map((id, i) => [id, i + 1])), [order]);

  const k = layout?.scale ?? 0;
  const pieceBox = { w: (PIECE_W + MARGIN * 2) * k, h: (PIECE_H + MARGIN * 2) * k };

  return (
    <div ref={container} className="relative h-full w-full touch-none select-none overflow-hidden bg-[#120a1f]">
      <style>{`
        @keyframes casper-toss {
          0% {
            opacity: 0;
            pointer-events: none;
            transform: translateY(-36px) scale(0.25) rotate(-22deg);
          }
          65% {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(6px) scale(1.08) rotate(4deg);
          }
          100% {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }
      `}</style>
      {/* the night behind everything: a dim, blurred copy of the poster shows until the animated night has loaded over it */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center opacity-20 blur-2xl"
          style={{ backgroundImage: `url("${IMAGE.src}")` }}
        />
        <div className="absolute inset-0">
          <CustardNight progress={placedCount / pieces.length} snaps={placedCount} won={won} tier={tier} reducedMotion={reducedMotion} />
        </div>
        {/* darker at the top and bottom, so the title and the buttons read */}
        <div className="absolute inset-0 bg-linear-to-t from-[#120a1f]/70 via-transparent to-[#120a1f]/55" />
      </div>

      <MuteButton muted={muted} onToggle={toggleMute} />

      {/* title and stats */}
      <div className="absolute inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-20 flex flex-col items-center gap-1.5 px-14 sm:px-16 pointer-events-none">
        <h2
          className="font-creepster text-center text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider"
          style={{ color: ACCENT, textShadow: "0 0 24px rgba(254, 215, 120, 0.7), 0 2px 10px rgba(0,0,0,0.9)" }}
        >
          Piece Casper Back Together
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 rounded-full border border-white/20 bg-black/70 px-5 py-2 text-sm sm:text-base md:text-lg font-bold text-white shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <span
            className={`flex items-center gap-2 transition-colors ${
              timeLeftMs <= 10000 && startedAt !== null ? "text-[#ff5c7a] font-black animate-pulse" : ""
            }`}
          >
            <Timer className="h-5 w-5" style={{ color: timeLeftMs <= 10000 && startedAt !== null ? "#ff5c7a" : ACCENT }} />
            {formatCountdown(timeLeftMs)}
          </span>
          <span className="font-extrabold">
            {placedCount}/{pieces.length} pieces
          </span>
          <span className={`transition-colors font-extrabold ${movesLeft <= 10 ? "text-[#ff5c7a] font-black" : ""}`}>
            {movesLeft} moves left
          </span>
        </div>
      </div>

      {layout && (
        <>
          {/* the board: the outline of every piece's slot, and the faint picture when peeking */}
          <div
            data-board
            className="absolute rounded-xl border border-[#fed778]/25 bg-black/40 shadow-[0_0_60px_rgba(254,215,120,0.18)] backdrop-blur-[2px]"
            style={{ left: layout.boardLeft, top: layout.boardTop, width: IMAGE.width * k, height: IMAGE.height * k }}
          >
            <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${IMAGE.width} ${IMAGE.height}`} aria-hidden>
              <image href={IMAGE.src} width={IMAGE.width} height={IMAGE.height} opacity={peek ? 0.38 : 0} style={{ transition: "opacity 0.25s ease-in-out" }} />
              {pieces.map((p) => (
                <path key={p.id} d={p.path} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth={3} strokeDasharray="12 10" />
              ))}
            </svg>
          </div>

          {/* Casper: in front of everything while he flies, behind the pieces once he settles; keyed by the
              round so a shuffle brings him flying in again */}
          <Casper
            key={round}
            width={layout.width}
            height={layout.height}
            board={{ left: layout.boardLeft, top: layout.boardTop, width: IMAGE.width * k, height: IMAGE.height * k }}
            snaps={placedCount}
            won={won}
            reducedMotion={reducedMotion}
          />

          {/* the pieces: each pops out as Casper flies past it (the key replays that on every shuffle) */}
          {scattered &&
            pieces.map((p) => {
              const dragging = draggingId === p.id;
              const left = layout.boardLeft + (p.x - MARGIN) * k;
              const top = layout.boardTop + (p.y - MARGIN) * k;

              const isPortrait = layout.width < layout.height * 0.9;
              const isLeftTray = left < layout.boardLeft + (IMAGE.width * k) / 2;
              const normY = Math.max(0, Math.min(1, (top - layout.boardTop) / Math.max(layout.height - layout.boardTop, 1)));

              // Casper flies:
              // ~0.4s-1.3s up the left side,
              // ~1.4s-1.8s across the top,
              // ~1.9s-2.8s down the right side.
              const delay = p.placed
                ? 0
                : isPortrait
                  ? 0.45 + Math.max(0, Math.min(1, left / layout.width)) * 2.0 + (p.id % 4) * 0.08
                  : isLeftTray
                    ? 0.4 + (1 - normY) * 0.85 + (p.id % 3) * 0.08
                    : 1.95 + normY * 0.85 + (p.id % 3) * 0.08;

              return (
                <svg
                  key={`${round}-${p.id}`}
                  className="pointer-events-none absolute"
                  style={{
                    left,
                    top,
                    width: pieceBox.w,
                    height: pieceBox.h,
                    zIndex: p.placed ? 0 : stack.get(p.id) ?? 1,
                    animation: reducedMotion || p.placed ? undefined : "casper-toss 0.65s cubic-bezier(0.2, 0.9, 0.3, 1.25) both",
                    animationDelay: reducedMotion || p.placed ? undefined : `${delay.toFixed(2)}s`,
                    transformOrigin: "center center",
                    filter: p.placed
                      ? "none"
                      : dragging
                        ? "drop-shadow(0 14px 18px rgba(0,0,0,0.6))"
                        : "drop-shadow(0 4px 6px rgba(0,0,0,0.5))",
                    willChange: dragging ? "left, top" : undefined,
                    transition: p.placed ? "left 0.15s ease-out, top 0.15s ease-out" : undefined,
                  }}
                  viewBox={`${p.col * PIECE_W - MARGIN} ${p.row * PIECE_H - MARGIN} ${PIECE_W + MARGIN * 2} ${PIECE_H + MARGIN * 2}`}
                  aria-label={p.placed ? undefined : `Puzzle piece ${p.id + 1}`}
                >
                  <defs>
                    <clipPath id={`${uid}-piece-${p.id}`}>
                      <path d={p.path} />
                    </clipPath>
                  </defs>
                  <g
                    clipPath={`url(#${uid}-piece-${p.id})`}
                    style={{ pointerEvents: p.placed || won || lost ? "none" : "auto", cursor: dragging ? "grabbing" : "grab" }}
                    onPointerDown={(e) => onPointerDown(e, p)}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                  >
                    <image href={IMAGE.src} width={IMAGE.width} height={IMAGE.height} />
                  </g>
                  {/* a bevel so loose pieces read as pieces; it fades out once they're in place */}
                  <path
                    d={p.path}
                    fill="none"
                    stroke={p.placed ? "rgba(255,255,255,0.08)" : "rgba(255,240,200,0.75)"}
                    strokeWidth={p.placed ? 2 : 4}
                    pointerEvents="none"
                  />
                </svg>
              );
            })}
        </>
      )}

      {/* peek and restart */}
      {phase === "playing" && (
        <div className="absolute inset-x-0 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-20 flex justify-center gap-3 sm:gap-4 px-4">
          <button
            type="button"
            onPointerDown={handlePeekPointerDown}
            onPointerUp={handlePeekPointerUp}
            onPointerCancel={handlePeekPointerCancel}
            onPointerLeave={handlePeekPointerCancel}
            onClick={handlePeekClick}
            disabled={won || lost}
            className={`flex min-w-[125px] sm:min-w-[140px] items-center justify-center gap-2 rounded-full border px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-extrabold backdrop-blur-md transition-all active:scale-95 disabled:opacity-40 cursor-pointer shadow-lg select-none ${
              peek
                ? "border-[#fed778] bg-black/90 text-[#fed778]"
                : "border-white/25 bg-black/70 text-white hover:bg-black/90 hover:scale-103"
            }`}
          >
            <Eye className={`h-4.5 w-4.5 ${peek ? "text-[#fed778]" : "text-white"}`} />
            {peek ? "Peeking..." : "Peek"}
          </button>
          <button
            type="button"
            onClick={restart}
            className="flex items-center gap-2 rounded-full border border-white/25 bg-black/70 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-extrabold text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-103 cursor-pointer shadow-lg"
          >
            <RotateCcw className="h-4.5 w-4.5" />
            Shuffle
          </button>
        </div>
      )}

      {/* how to play intro modal */}
      <AnimatePresence>
        {phase === "intro" && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/80 p-4 py-8 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl rounded-3xl border border-white/20 bg-[#190d2e]/98 px-6 pb-6 pt-16 sm:pt-20 text-center shadow-2xl backdrop-blur-md"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <motion.div
                className="pointer-events-none absolute -top-24 sm:-top-28 left-1/2 size-36 sm:size-44 md:size-48 -translate-x-1/2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={CASPER_SRC} alt="Casper, the custard ghost" fill sizes="200px" priority className="object-contain" />
              </motion.div>
              <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-[#fed778]/90">
                The Friendly Sprite&apos;s
              </p>
              <h3
                className="font-creepster mt-1 text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-[#fed778]"
              >
                Casper&apos;s Jigsaw
              </h3>
              <p className="mt-3 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Casper got spooked and his puzzle pieces scattered across the castle! Drag every piece onto the board to piece him back together before the clock runs out.
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2.5 text-left text-sm sm:text-base min-[360px]:grid-cols-2">
                <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                  <span className="text-2xl">🧩</span>
                  <span className="min-w-0 leading-tight">
                    <span className="block font-bold text-white">
                      12 Pieces <span className="font-black text-[#fed778]">to fit</span>
                    </span>
                    <span className="block text-xs text-[#fed778]/80">Drag onto board</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                  <span className="text-2xl">⏱️</span>
                  <span className="min-w-0 leading-tight">
                    <span className="block font-bold text-white">
                      35 Seconds <span className="font-black text-[#fed778]">clock</span>
                    </span>
                    <span className="block text-xs text-[#fed778]/80">Beat the countdown</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                  <span className="text-2xl">🎯</span>
                  <span className="min-w-0 leading-tight">
                    <span className="block font-bold text-white">
                      50 Moves <span className="font-black text-[#ff8ab2]">limit</span>
                    </span>
                    <span className="block text-xs text-[#ff8ab2]/80">Place each carefully</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                  <span className="text-2xl">👁️</span>
                  <span className="min-w-0 leading-tight">
                    <span className="block font-bold text-white">
                      Peek Mode <span className="font-black text-[#4ade80]">guide</span>
                    </span>
                    <span className="block text-xs text-[#4ade80]/80">Tap to peek at the picture</span>
                  </span>
                </li>
              </ul>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm md:text-base font-bold text-[#fed778]">
                <span className="flex items-center gap-1.5">
                  <Timer className="h-4 w-4" style={{ color: "#fed778" }} /> 35s on the clock
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-sm">🎯</span> 50 moves max
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-sm">🧩</span> 12 puzzle pieces
                </span>
              </div>

              <button
                type="button"
                onClick={() => setPhase("playing")}
                className="mt-6 w-full cursor-pointer rounded-full py-4 sm:py-4.5 text-base sm:text-lg md:text-xl font-black uppercase tracking-wider shadow-lg shadow-black/40 transition-all hover:scale-103 active:scale-95 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #fed778 0%, #ff8ab2 100%)",
                  color: "#241a33",
                }}
              >
                Start Puzzle
              </button>
              <p className="mt-3 text-xs sm:text-sm text-[#fed778]/80 font-medium">Drag pieces from the trays onto their matching slots.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* solved / lost */}
      <AnimatePresence>
        {won && (
          <motion.div
            key="won-modal"
            className="absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/80 p-4 py-8 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.35 }}
          >
            <motion.div
              className="w-full max-w-md sm:max-w-xl md:max-w-2xl rounded-3xl border border-white/20 bg-[#190d2e]/98 p-6 sm:p-9 md:p-10 text-center shadow-2xl backdrop-blur-md"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.35 }}
            >
              {/* Casper, free again */}
              <motion.div
                className="relative mx-auto -mt-20 sm:-mt-24 md:-mt-28 size-36 sm:size-44 md:size-48 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={CASPER_SRC} alt="Casper, the custard ghost" fill sizes="200px" className="object-contain" />
              </motion.div>
              <h3
                className="font-creepster mt-2 text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-[#fed778]"
              >
                Casper Is Free!
              </h3>
              <p className="mt-3 text-base sm:text-lg md:text-xl text-purple-100 font-medium leading-relaxed">
                Solved in <span className="font-black text-[#fed778]">{formatElapsed(elapsed)}</span> with{" "}
                <span className="font-black text-[#fed778]">{moves}</span> moves.
              </p>
              <div className="mt-8 flex flex-col gap-3.5">
                <button
                  type="button"
                  onClick={restart}
                  className="w-full rounded-full py-4 text-base sm:text-lg md:text-xl font-black transition-all hover:scale-103 cursor-pointer shadow-lg shadow-black/40"
                  style={{ background: "linear-gradient(135deg, #fed778 0%, #ff8ab2 100%)", color: "#241a33" }}
                >
                  Play again
                </button>
                <button
                  type="button"
                  onClick={onExit}
                  className="w-full py-2 text-base sm:text-lg text-purple-200 transition-colors hover:text-white font-semibold cursor-pointer"
                >
                  Back to the flavours
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {lost && (
          <motion.div
            key="lost-modal"
            className="absolute inset-0 z-30 flex items-center justify-center overflow-y-auto bg-black/80 p-4 py-8 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-full max-w-md sm:max-w-xl md:max-w-2xl rounded-3xl border border-white/20 bg-[#190d2e]/98 p-6 sm:p-9 md:p-10 text-center shadow-2xl backdrop-blur-md"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.2 }}
            >
              <motion.div
                className="relative mx-auto -mt-20 sm:-mt-24 md:-mt-28 size-36 sm:size-44 md:size-48 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
                animate={reducedMotion ? undefined : { y: [0, -6, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={CASPER_SRC} alt="Casper, the custard ghost" fill sizes="200px" className="object-contain opacity-75 grayscale-25" />
              </motion.div>
              <h3
                className="font-creepster mt-2 text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-[#ff5c7a]"
              >
                {lostReason === "time" ? "Time's Up!" : "Out of Moves!"}
              </h3>
              <p className="mt-3 text-base sm:text-lg md:text-xl text-rose-100 font-medium leading-relaxed">
                {lostReason === "time"
                  ? "Time ran out before Casper could be pieced together!"
                  : "You used all 50 moves before finishing the puzzle!"}
                <br />
                Placed <span className="font-black text-white">{placedCount}/{pieces.length}</span> pieces.
              </p>
              <div className="mt-8 flex flex-col gap-3.5">
                <button
                  type="button"
                  onClick={restart}
                  className="flex w-full items-center justify-center gap-2 rounded-full py-4 text-base sm:text-lg md:text-xl font-black transition-all hover:scale-103 cursor-pointer shadow-lg shadow-black/40"
                  style={{ background: "linear-gradient(135deg, #fed778 0%, #ff8ab2 100%)", color: "#241a33" }}
                >
                  <RotateCcw className="h-5 w-5" />
                  Try again
                </button>
                <button
                  type="button"
                  onClick={onExit}
                  className="w-full py-2 text-base sm:text-lg text-purple-200 transition-colors hover:text-white font-semibold cursor-pointer"
                >
                  Back to the flavours
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
