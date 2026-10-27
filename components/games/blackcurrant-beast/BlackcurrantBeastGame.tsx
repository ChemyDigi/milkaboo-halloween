"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion, type TargetAndTransition } from "framer-motion";
import { Check, Eye, Heart, RotateCcw, Trophy } from "lucide-react";
import { useSounds } from "@/hooks/useSounds";
import MuteButton from "@/components/MuteButton";

interface Props {
  onClose?: () => void;
}

const ACCENT = "#c084fc";
const GHOST = "/games/blackcurrant-beast/Neon Purple Horned Ghost Mascot.png";
/** the scene: a stone table on a castle terrace; the cups stand on the table */
const TERRACE = { src: "/games/blackcurrant-beast/Background.png", width: 2616, height: 941 };
/** where the tabletop is in the terrace picture (fractions of its size) */
const TABLE = { cx: 0.5, cy: 0.71, top: 0.6, front: 0.8, width: 0.5 };

/**
 * The four MilkaBoo cups; every flavour is on the table twice. Each picture has empty space around the cup
 * and shows it leaning: `box` is where the cup's pixels are (fractions of the picture) and `tilt` how far it
 * leans clockwise (degrees), so it can be cropped and stood up straight.
 */
const FLAVOURS = [
  { name: "Haunted Apple", src: "/games/haunted-apple/cup-apple-tilt.png", color: "#a3ff84", width: 1122, height: 1402, box: [0.313, 0.134, 0.819, 0.847], tilt: 9.5 },
  { name: "Blackcurrant Beast", src: "/games/blackcurrant-beast/cup-currant-tilt.png", color: "#c084fc", width: 1199, height: 1312, box: [0.278, 0.121, 0.847, 0.877], tilt: 13 },
  { name: "Casper Custard", src: "/games/casper-custard/cup-custard.png", color: "#fed778", width: 1199, height: 1312, box: [0.244, 0.012, 0.841, 0.923], tilt: 11.2 },
  { name: "Wicked Rose", src: "/games/wicked-rose/cup-rose-tilt.png", color: "#ff7cbe", width: 1122, height: 1402, box: [0.305, 0.143, 0.814, 0.854], tilt: 8.9 },
];
/** width ÷ height of a cup standing straight */
const CUP_ASPECT = 0.55;
const CUPS = FLAVOURS.length * 2;
/** cup id → flavour index; the two cups of a flavour are interchangeable */
const flavourOf = (cup: number) => cup % FLAVOURS.length;

/**
 * The eight spots on the table, two curved rows following the oval: where each cup's base stands
 * (fractions of the picture) and how wide it is (fraction of the picture's width; the front row is nearer).
 */
const SPOTS = [
  { x: 0.379, y: 0.66, w: 0.0295 },
  { x: 0.462, y: 0.66, w: 0.0295 },
  { x: 0.538, y: 0.66, w: 0.0295 },
  { x: 0.621, y: 0.66, w: 0.0295 },
  { x: 0.34, y: 0.762, w: 0.0385 },
  { x: 0.449, y: 0.762, w: 0.0385 },
  { x: 0.551, y: 0.762, w: 0.0385 },
  { x: 0.66, y: 0.762, w: 0.0385 },
];

const MEMORIZE_SECONDS = 10;
const LIVES = 1;
/** how long the ghost hangs over the table; the cups vanish part-way through, while it covers them */
const HAUNT_MS = 2600;
const SNATCH_AT_MS = 900;

type Phase = "intro" | "memorize" | "haunt" | "arrange" | "won" | "lost";

function shuffle<T>(list: T[]): T[] {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ids = () => Array.from({ length: CUPS }, (_, i) => i);
const sameOrder = (a: number[], b: number[]) => a.every((cup, i) => flavourOf(cup) === flavourOf(b[i]));

/** how the terrace picture is drawn in a w×h area (px): its size, and where its top-left corner is */
interface Scene {
  w: number;
  h: number;
  scale: number;
  iw: number;
  ih: number;
  left: number;
  top: number;
}

/**
 * Fit the picture so nothing is cropped off its top or bottom: as tall as the screen, and on a wide screen the
 * blurred copy fills the sides. On a narrow screen that would make the table tiny, so there it is zoomed in
 * until the table spans the width and the picture's sides are cropped instead. The picture sits above the
 * tray when it can; when it's as tall as the screen the tray floats over its misty foreground.
 */
function layoutScene(w: number, h: number): Scene {
  const reserve = 150;
  // on a narrow screen, zoom until the table is about 15% wider than the screen
  const scale = Math.min(h / TERRACE.height, (w * 1.15) / (TERRACE.width * TABLE.width));
  const iw = TERRACE.width * scale;
  const ih = TERRACE.height * scale;
  const top = Math.max(h - reserve - ih, (h - ih) / 2);
  return { w, h, scale, iw, ih, left: (w - iw) / 2, top };
}

/** A cup standing straight, its base at the bottom centre of the box; the box is as wide as its parent. */
function CupArt({ cup, dim = false }: { cup: number; dim?: boolean }) {
  const f = FLAVOURS[flavourOf(cup)];
  const [x0, y0, x1, y1] = f.box;
  // scale the picture so the cup's pixels fill the box, then turn it upright around the base
  const imgH = 100 / (y1 - y0);
  const imgW = ((f.width / f.height) / (CUP_ASPECT * (y1 - y0))) * 100;
  return (
    <div
      className="relative w-full transition-opacity"
      style={{ aspectRatio: CUP_ASPECT, transform: `rotate(${-f.tilt}deg)`, transformOrigin: "50% 100%", opacity: dim ? 0.35 : 1 }}
    >
      <div
        className="absolute"
        style={{ left: `${50 - ((x0 + x1) / 2) * imgW}%`, top: `${-y0 * imgH}%`, width: `${imgW}%`, height: `${imgH}%` }}
      >
        <Image
          src={f.src}
          alt={f.name}
          fill
          sizes="(max-width: 640px) 25vw, 200px"
          draggable={false}
          className="object-fill"
          style={{ filter: `drop-shadow(0 6px 10px rgba(0,0,0,0.55)) drop-shadow(0 0 10px ${f.color}55)` }}
        />
      </div>
    </div>
  );
}

/**
 * Where the ghost is in each phase. Its box rests centred on the table; `x`/`y` move it from there (px).
 * Between swoops it perches above the table's right end, kept inside the screen.
 */
function ghostPose(phase: Phase, scene: Scene, size: number): TargetAndTransition {
  const cx = scene.left + TABLE.cx * scene.iw;
  const cy = scene.top + TABLE.cy * scene.ih;
  const perchX =
    scene.w < 840
      ? Math.max(size / 2 + 16, cx - scene.iw * TABLE.width * 0.42) - cx
      : Math.min(scene.w - size / 2 - 84, cx + scene.iw * TABLE.width * 0.42) - cx;
  const perchY = Math.max(size / 2 + 64, scene.top + TABLE.top * scene.ih - size * 0.45) - cy;
  switch (phase) {
    case "intro":
      return { x: perchX + size, y: perchY - size, scale: 0.3, rotate: 20, opacity: 0 };
    case "memorize":
      return { x: perchX, y: perchY, scale: 1, rotate: 10, opacity: 1 };
    case "arrange":
      return { x: perchX, y: perchY, scale: 1, rotate: -8, opacity: 1 };
    case "lost":
      return { x: perchX, y: perchY, scale: 1.15, rotate: -4, opacity: 1 };
    case "haunt":
      return {
        x: [perchX + size, 0, -size * 0.05, 0],
        y: [perchY - size * 0.5, -size * 0.15, -size * 0.1, -size * 0.15],
        scale: [0.6, 2.1, 2, 2.1],
        rotate: [24, -6, 4, 0],
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      };
    case "won":
      return { x: scene.w, y: -scene.h, scale: 0.3, rotate: 50, opacity: 0, transition: { duration: 0.9, ease: "easeIn" } };
  }
}

export default function BlackcurrantBeastGame({ onClose }: Props) {
  const { muted, toggleMute, unlock, play } = useSounds();
  const [phase, setPhase] = useState<Phase>("intro");
  /** the order to remember: cup id per table slot */
  const [target, setTarget] = useState<number[]>(ids);
  /** what's on the table right now */
  const [slots, setSlots] = useState<(number | null)[]>(ids);
  const [locked, setLocked] = useState<boolean[]>(() => Array(CUPS).fill(false));
  const [wrong, setWrong] = useState<number[]>([]);
  const [tray, setTray] = useState<number[]>([]);
  const [lives, setLives] = useState(LIVES);
  const [tries, setTries] = useState(0);
  const [memLeft, setMemLeft] = useState(MEMORIZE_SECONDS);
  const [round, setRound] = useState(0);
  const [taunting, setTaunting] = useState(false);
  /** the stage's size (px); the picture's layout is worked out from it on every render */
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  const scene = useMemo(() => (box ? layoutScene(box.w, box.h) : null), [box]);
  const stage = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // the picture and the cups follow the stage's size
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const later = useCallback((fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);
  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current.length = 0;
  }, []);
  useEffect(() => clearTimers, [clearTimers]);

  const start = () => {
    unlock();
    clearTimers();
    const order = shuffle(ids());
    setTarget(order);
    setSlots(order);
    setLocked(Array(CUPS).fill(false));
    setWrong([]);
    setTray([]);
    setLives(LIVES);
    setTries(0);
    setMemLeft(MEMORIZE_SECONDS);
    setRound((r) => r + 1);
    setPhase("memorize");
  };

  /** the ghost swoops over the table and snatches every cup into the tray */
  const haunt = useCallback(() => {
    setPhase("haunt");
    play("wail");
    later(() => {
      let scrambled = shuffle(ids());
      while (sameOrder(scrambled, target)) scrambled = shuffle(ids());
      setSlots(Array(CUPS).fill(null));
      setTray(scrambled);
    }, SNATCH_AT_MS);
    later(() => {
      play("laugh");
      setPhase("arrange");
    }, HAUNT_MS);
  }, [later, play, target]);

  // memorising countdown
  useEffect(() => {
    if (phase !== "memorize") return;
    const t = setTimeout(() => (memLeft <= 1 ? haunt() : setMemLeft(memLeft - 1)), 1000);
    return () => clearTimeout(t);
  }, [phase, memLeft, haunt]);

  const placeCup = (cup: number) => {
    if (phase !== "arrange" || wrong.length) return;
    // Always fill the next empty spot in strict order (1 to 8)
    const at = slots.findIndex((c) => c === null);
    if (at < 0) return;
    const next = slots.map((c, i) => (i === at ? cup : c));
    setSlots(next);
    setTray((t) => t.filter((c) => c !== cup));
    play("shloop");
  };

  const tapSlot = (i: number) => {
    if (phase !== "arrange" || wrong.length || locked[i]) return;
    const cup = slots[i];
    if (cup === null) return;
    // Return cups from spot i onward to the tray to maintain order
    const toReturn = slots.slice(i).filter((c): c is number => c !== null);
    setSlots((s) => s.map((c, k) => (k >= i ? null : c)));
    setTray((t) => [...t, ...toReturn]);
    play("shloop");
  };

  const checkOrder = () => {
    if (phase !== "arrange" || slots.some((c) => c === null) || wrong.length) return;
    const right = slots.map((c, i) => flavourOf(c!) === flavourOf(target[i]));
    setTries((n) => n + 1);
    setLocked(right);
    if (right.every(Boolean)) {
      play("win");
      setPhase("won");
      return;
    }
    const misses = right.flatMap((ok, i) => (ok ? [] : [i]));
    const livesLeft = lives - 1;
    setLives(livesLeft);
    setWrong(misses);
    setTaunting(true);
    later(() => setTaunting(false), 900);
    play("laugh");
    later(() => {
      setWrong([]);
      if (livesLeft <= 0) {
        setSlots(target);
        setTray([]);
        setPhase("lost");
        return;
      }
      // the wrong cups hop back into the tray for another go
      setTray((t) => [...t, ...shuffle(misses.map((i) => slots[i]!))]);
      const next = slots.map((c, i) => (right[i] ? c : null));
      setSlots(next);
    }, 1100);
  };

  const filled = slots.filter((c) => c !== null).length;
  const arranging = phase === "arrange";
  const showTray = phase === "haunt" || phase === "arrange";

  // picture fractions → stage px
  const px = (fx: number, fy: number) => (scene ? { x: scene.left + fx * scene.iw, y: scene.top + fy * scene.ih } : { x: 0, y: 0 });
  const tableCentre = px(TABLE.cx, TABLE.cy);
  const tableWidth = scene ? scene.iw * TABLE.width : 0;
  const ghostSize = scene ? Math.min(420, Math.max(120, tableWidth * 0.3)) : 0;

  return (
    <div className="relative h-full w-full select-none overflow-hidden bg-[#120a1f] text-[#f6f0ff]">
      {/* a blurred copy of the terrace fills whatever the sharp picture doesn't */}
      <div
        className="pointer-events-none absolute inset-0 scale-110 bg-cover bg-center opacity-60 blur-xl"
        style={{ backgroundImage: `url("${encodeURI(TERRACE.src)}")` }}
      />

      <MuteButton muted={muted} onToggle={toggleMute} />

      {/* title and stats */}
      <div className="pointer-events-none absolute inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-20 flex flex-col items-center gap-1 px-14 sm:px-16">
        <h2
          className="font-creepster text-center text-xl sm:text-2xl md:text-3xl uppercase tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          style={{ color: ACCENT }}
        >
          The Beast&apos;s Cup Shuffle
        </h2>
        <div className="flex h-auto flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm font-bold text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          {phase === "memorize" && (
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" style={{ color: ACCENT }} />
              Memorise the order · {memLeft}s
            </span>
          )}
          {phase === "haunt" && <span className="text-[#e9b8ff]">The Beast is snatching the cups…</span>}
          {(arranging || phase === "won" || phase === "lost") && (
            <>
              <span className="flex items-center gap-1" aria-label={`${lives} chance left`}>
                {Array.from({ length: LIVES }, (_, i) => (
                  <Heart
                    key={i}
                    className="h-4 w-4 transition-all"
                    style={{ color: ACCENT, fill: i < lives ? ACCENT : "transparent", opacity: i < lives ? 1 : 0.35 }}
                  />
                ))}
              </span>
              <span>
                {filled}/{CUPS} cups
              </span>
            </>
          )}
        </div>
      </div>

      <LayoutGroup id={`beast-${round}`}>
        {/* the stage: the terrace picture, the table, the cups and the ghost */}
        <div ref={stage} className="absolute inset-0">
          {scene && (
            <>
              <Image
                src={TERRACE.src}
                alt=""
                width={TERRACE.width}
                height={TERRACE.height}
                priority
                draggable={false}
                className="pointer-events-none absolute"
                // inline: the site's global `img { max-width: 100% }` beats the max-w-none utility
                style={{ left: scene.left, top: scene.top, width: scene.iw, height: scene.ih, maxWidth: "none" }}
              />
              {/* the picture's edges melt into the blurred backdrop */}
              <div
                className="pointer-events-none absolute"
                style={{
                  left: scene.left,
                  top: scene.top,
                  width: scene.iw,
                  height: scene.ih,
                  boxShadow: "inset 0 0 60px 30px #120a1f",
                  opacity: scene.ih < scene.h || scene.iw < scene.w ? 0.9 : 0,
                }}
              />

              {/* the spots on the table */}
              {slots.map((cup, i) => {
                const spot = SPOTS[i];
                const base = px(spot.x, spot.y);
                const w = spot.w * scene.iw;
                const h = w / CUP_ASPECT;
                const coaster = { w: w * 1.4, h: w * 0.46 };
                // the cup's base sinks a little into the coaster, so it stands in it rather than on its rim
                const sink = w * 0.08;
                const isWrong = wrong.includes(i);
                const isLocked = locked[i] && (arranging || phase === "won");
                const isPlaced = cup !== null;
                const canUndo = arranging && !wrong.length && isPlaced && !isLocked;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => tapSlot(i)}
                    disabled={!canUndo}
                    aria-label={cup === null ? `Spot ${i + 1} (empty)` : `Spot ${i + 1}: ${FLAVOURS[flavourOf(cup)].name}`}
                    className="absolute flex flex-col justify-end enabled:cursor-pointer disabled:cursor-default"
                    style={{ left: base.x - w / 2, top: base.y - h, width: w, height: h + sink, zIndex: 5 + Math.floor(i / 4) }}
                  >
                    {/* coaster: the cup's base stands in the middle of it */}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 rounded-[50%] border transition-all duration-300"
                      style={{
                        width: coaster.w,
                        height: coaster.h,
                        top: h - coaster.h / 2,
                        borderColor: isWrong
                          ? "#ff3b5c"
                          : isLocked
                            ? "#4ade80"
                            : "rgba(255,255,255,0.18)",
                        background: isWrong
                          ? "rgba(255,59,92,0.3)"
                          : isLocked
                            ? "rgba(74,222,128,0.22)"
                            : "rgba(0,0,0,0.4)",
                        boxShadow: isLocked
                          ? "0 0 14px rgba(74,222,128,0.5)"
                          : "0 4px 10px rgba(0,0,0,0.5)",
                      }}
                    />

                    {/* what ties the cup to the glossy table: a tight contact shadow and a faint reflection */}
                    {cup !== null && (
                      <motion.div
                        className="pointer-events-none absolute inset-x-0 z-0"
                        style={{ top: h + sink }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: phase === "memorize" ? 0.3 + i * 0.06 : 0.25 }}
                      >
                        <span
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
                          style={{
                            width: w * 1.15,
                            height: w * 0.34,
                            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 70%)",
                            filter: "blur(2px)",
                          }}
                        />
                        <div
                          className="absolute inset-x-0 top-0 overflow-hidden"
                          style={{
                            height: h * 0.45,
                            opacity: 0.3,
                            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 85%)",
                            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent 85%)",
                          }}
                        >
                          <div style={{ height: h, transform: "scaleY(-0.45)", transformOrigin: "top" }}>
                            <CupArt cup={cup} />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <span
                      className="absolute left-1/2 z-10 -translate-x-1/2 font-black leading-none text-white/55 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                      style={{ top: h + coaster.h * 0.6, fontSize: Math.max(10, w * 0.17) }}
                    >
                      {i + 1}
                    </span>

                    {cup !== null && (
                      <motion.div
                        key={`slot-cup-${round}-${cup}`}
                        layoutId={arranging ? `cup-${cup}` : undefined}
                        className="relative z-10 w-full will-change-transform"
                        initial={phase === "memorize" ? { y: -30, opacity: 0, scale: 0.6 } : false}
                        animate={isWrong ? { x: [0, -7, 7, -5, 5, 0], y: 0, opacity: 1, scale: 1 } : { x: 0, y: 0, opacity: 1, scale: 1 }}
                        transition={
                          isWrong
                            ? { duration: 0.5 }
                            : phase === "memorize"
                              ? { type: "spring", stiffness: 260, damping: 18, delay: i * 0.06 }
                              : { type: "spring", stiffness: 380, damping: 30 }
                        }
                      >
                        <CupArt cup={cup} />
                        {isLocked && (
                          <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#4ade80] text-[#0b2a16] shadow">
                            <Check className="h-3 w-3" strokeWidth={4} />
                          </span>
                        )}
                      </motion.div>
                    )}
                  </button>
                );
              })}

              {/* purple fog that hides the snatch */}
              <AnimatePresence>
                {phase === "haunt" && (
                  <motion.div
                    className="pointer-events-none absolute z-20 rounded-[50%]"
                    style={{
                      left: tableCentre.x - tableWidth * 0.65,
                      top: px(0, TABLE.top).y - scene.ih * 0.18,
                      width: tableWidth * 1.3,
                      height: (TABLE.front - TABLE.top + 0.3) * scene.ih,
                      background:
                        "radial-gradient(ellipse at center, rgba(168,85,247,0.95) 0%, rgba(76,29,149,0.9) 45%, rgba(30,10,50,0) 72%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: HAUNT_MS / 1000, times: [0, 0.25, 0.7, 1] }}
                  />
                )}
              </AnimatePresence>

              {/* the Horned Beast */}
              <motion.div
                className="pointer-events-none absolute z-30 will-change-transform"
                style={{ left: tableCentre.x - ghostSize / 2, top: tableCentre.y - ghostSize / 2, width: ghostSize, height: ghostSize }}
                initial={ghostPose("intro", scene, ghostSize)}
                animate={ghostPose(phase, scene, ghostSize)}
                transition={{ type: "spring", stiffness: 90, damping: 14 }}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={
                    taunting
                      ? { y: "0%", rotate: [0, -14, 12, -10, 8, 0], scale: [1, 1.25, 1.2, 1.25, 1] }
                      : { y: ["0%", "-5%", "0%"], rotate: 0, scale: 1 }
                  }
                  transition={taunting ? { duration: 0.9 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src={GHOST}
                    alt="The Horned Beast"
                    fill
                    sizes="(max-width: 640px) 70vw, 440px"
                    priority
                    className="object-contain drop-shadow-[0_0_30px_rgba(192,132,252,0.7)]"
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </div>

        {/* under the table: the memorising timer, or the tray of snatched cups */}
        <div className="absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-xl sm:max-w-2xl px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          {phase === "memorize" && (
            <div className="flex flex-col items-center gap-3">
              <div className="h-2 w-full max-w-sm overflow-hidden rounded-full bg-black/50 ring-1 ring-white/10">
                <motion.div
                  key={round}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, #ff8ab2)` }}
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: MEMORIZE_SECONDS, ease: "linear" }}
                />
              </div>
              <button
                type="button"
                onClick={haunt}
                className="rounded-full border border-white/20 bg-black/60 px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white/90 backdrop-blur-md transition-colors hover:bg-black/80 cursor-pointer"
              >
                I&apos;ve got it — bring on the Beast!
              </button>
            </div>
          )}

          {showTray && (
            <div className="rounded-2xl border border-white/10 bg-black/55 px-3 pb-2 pt-1.5 backdrop-blur-md">
              <p className="mb-1 text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#d1b8eb]/80">
                {arranging ? "Tap cups in order (1 to 8) to restore the table" : "…"}
              </p>
              <div className="grid min-h-12 grid-cols-8 gap-1 sm:gap-2">
                {tray.map((cup, i) => (
                  <motion.button
                    key={cup}
                    type="button"
                    layoutId={arranging ? `cup-${cup}` : undefined}
                    onClick={() => placeCup(cup)}
                    disabled={!arranging || wrong.length > 0}
                    aria-label={`Place ${FLAVOURS[flavourOf(cup)].name}`}
                    className="mx-auto w-full max-w-10 sm:max-w-12 md:max-w-14 rounded-lg px-0.5 pb-0.5 pt-1.5 transition-colors enabled:cursor-pointer enabled:hover:bg-[rgba(255,255,255,0.1)] will-change-transform"
                    initial={phase === "haunt" ? { scale: 0, opacity: 0, y: -20 } : false}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.9 }}
                    transition={
                      phase === "haunt"
                        ? { type: "spring", stiffness: 300, damping: 18, delay: 0.8 + i * 0.07 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  >
                    <CupArt cup={cup} />
                  </motion.button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* check: top right, under the sound button, so they never cover the table */}
        {arranging && (
          <div className="absolute right-[max(0.75rem,env(safe-area-inset-right))] top-16 z-30 flex flex-col items-end gap-2 sm:top-18">
            <button
              type="button"
              onClick={checkOrder}
              disabled={filled < CUPS || wrong.length > 0}
              className="flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-black text-[#1d0d33] shadow-[0_0_25px_rgba(192,132,252,0.5)] transition-all hover:scale-103 disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100 cursor-pointer disabled:cursor-default"
              style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #ff8ab2 100%)` }}
            >
              <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={3} />
              Check order
            </button>
          </div>
        )}
      </LayoutGroup>

      {/* how to play */}
      <AnimatePresence>
        {phase === "intro" && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/75 p-4 py-8 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-sm sm:max-w-md rounded-3xl border border-white/15 bg-[#1b0f2e]/95 p-5 sm:p-6 text-center shadow-[0_0_60px_rgba(192,132,252,0.35)]"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <motion.div
                className="relative mx-auto -mt-16 sm:-mt-20 size-32 sm:size-40"
                animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={GHOST} alt="The Horned Beast" fill sizes="160px" priority className="object-contain drop-shadow-[0_0_25px_rgba(192,132,252,0.8)]" />
              </motion.div>
              <h3 className="font-creepster mt-1 text-3xl uppercase tracking-wider" style={{ color: ACCENT }}>
                Mind the Cups!
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#e6d8f5]">
                Eight MilkaBoo cups sit on the castle table. Memorise their order row by row. Then the Horned Beast swoops in
                and snatches them all!
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#e6d8f5]">
                Put every cup back in the <span className="font-black" style={{ color: ACCENT }}>exact order (1 to 8)</span>. You have{" "}
                <span className="font-black" style={{ color: ACCENT }}>{LIVES} try</span>.
              </p>
              <div className="mt-4 flex justify-center gap-3">
                {FLAVOURS.map((f, i) => (
                  <div key={f.name} className="w-9">
                    <CupArt cup={i} />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={start}
                className="mt-6 w-full rounded-full py-3.5 font-black uppercase tracking-wider shadow-[0_0_24px_rgba(192,132,252,0.5)] transition-transform hover:scale-103 active:scale-95 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #ff8ab2 100%)`, color: "#1d0d33", textShadow: "none" }}
              >
                Show me the cups
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* won / lost */}
      <AnimatePresence>
        {(phase === "won" || phase === "lost") && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/75 p-4 py-8 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="w-full max-w-sm sm:max-w-md rounded-3xl border border-white/15 bg-[#1b0f2e]/95 p-5 sm:p-6 text-center"
              style={{ boxShadow: `0 0 60px ${phase === "won" ? "rgba(192,132,252,0.4)" : "rgba(255,59,92,0.3)"}` }}
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.6 }}
            >
              {phase === "won" ? (
                <>
                  <Trophy className="mx-auto h-12 w-12" style={{ color: ACCENT }} />
                  <h3 className="font-creepster mt-3 text-4xl uppercase tracking-wider" style={{ color: ACCENT }}>
                    Beast Banished!
                  </h3>
                  <p className="mt-2 text-sm text-[#d7cced]">
                    You restored all {CUPS} cups in{" "}
                    <span className="font-black text-white">
                      {tries} {tries === 1 ? "try" : "tries"}
                    </span>
                    . The Blackcurrant Beast cup is free!
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-creepster text-4xl uppercase tracking-wider text-[#ff3b5c]">The Beast Wins!</h3>
                  <p className="mt-2 text-sm text-[#f8d7dc]">
                    That&apos;s the order you were looking for. Have another look and try again!
                  </p>
                </>
              )}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={start}
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3 font-black transition-transform hover:scale-103 cursor-pointer"
                  style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #ff8ab2 100%)`, color: "#1d0d33", textShadow: "none" }}
                >
                  <RotateCcw className="h-4 w-4" />
                  {phase === "won" ? "Play again" : "Try again"}
                </button>
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-1 text-sm text-[#a495bf] transition-colors hover:text-white cursor-pointer"
                  >
                    Back to the flavours
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
