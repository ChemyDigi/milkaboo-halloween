"use client";

import { useCallback, useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, RotateCcw, Trophy } from "lucide-react";
import { useSounds } from "@/hooks/useSounds";
import MuteButton from "@/components/MuteButton";

interface Props {
  onClose?: () => void;
}

const ACCENT = "#a3ff84";
const POSTER = "/games/haunted-apple/Neon Ghost Matcha Boo Poster.png";
/** the ghost + cup cut-out; only its top (the ghost) is shown, fading out where it wraps the cup */
const GHOST = { src: "/games/haunted-apple/ghost-cutout-apple.png", width: 1122, height: 1402, crop: { x: 230, w: 560, h: 420 } };

/** pearls to fill the cup */
const GOAL = 25;
const LIVES = 3;
/** a golden apple is worth this many pearls */
const APPLE_VALUE = 3;
/** catching slime spills this many */
const SLIME_SPILL = 2;
/** every this many catches in a row earns a bonus pearl */
const STREAK_BONUS = 5;

type Phase = "intro" | "playing" | "won" | "lost";
type DropKind = "pearl" | "apple" | "slime";

const RADIUS: Record<DropKind, number> = { pearl: 13, apple: 18, slime: 17 };

interface Drop {
  id: number;
  kind: DropKind;
  x: number;
  y: number;
  vy: number;
  spin: number;
}

interface Pop {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}

/** everything the loop moves, in px of the play area */
interface World {
  w: number;
  h: number;
  cupX: number;
  targetX: number;
  tilt: number;
  ghostX: number;
  ghostV: number;
  ghostTurnIn: number;
  spawnIn: number;
  drops: Drop[];
  pops: (Pop & { born: number })[];
  fill: number;
  lives: number;
  streak: number;
  caught: number;
  hits: number;
  lastHit: number;
  nextId: number;
  clock: number;
}

/** what a frame renders */
interface View {
  cupX: number;
  tilt: number;
  ghostX: number;
  drops: Drop[];
  pops: Pop[];
  fill: number;
  lives: number;
  streak: number;
  caught: number;
  hits: number;
  /** the cup and the ghost shake for a moment after slime lands */
  shaking: boolean;
  cupW: number;
  cupH: number;
}

const GHOST_Y = 150;
const CUP_BOTTOM = 28;

function cupSize(w: number) {
  const cw = Math.min(120, Math.max(84, w * 0.22));
  return { w: cw, h: cw * 1.3 };
}

function newWorld(w: number, h: number): World {
  return {
    w,
    h,
    cupX: w / 2,
    targetX: w / 2,
    tilt: 0,
    ghostX: w / 2,
    ghostV: w * 0.25,
    ghostTurnIn: 1.5,
    spawnIn: 1,
    drops: [],
    pops: [],
    fill: 0,
    lives: LIVES,
    streak: 0,
    caught: 0,
    hits: 0,
    lastHit: -10,
    nextId: 1,
    clock: 0,
  };
}

const snapshot = (s: World): View => ({
  cupX: s.cupX,
  tilt: s.tilt,
  ghostX: s.ghostX,
  drops: s.drops.map((d) => ({ ...d })),
  pops: s.pops,
  fill: s.fill,
  lives: s.lives,
  streak: s.streak,
  caught: s.caught,
  hits: s.hits,
  shaking: s.clock - s.lastHit < 0.7,
  cupW: cupSize(s.w).w,
  cupH: cupSize(s.w).h,
});

/** an open MilkaBoo cup that fills with apple tea and pearls as you catch */
function BobaCup({ fill }: { fill: number }) {
  const uid = useId();
  const level = 124 - Math.min(1, fill) * 104;
  const pearls = Math.round(Math.min(1, fill) * 18);
  return (
    <svg viewBox="0 0 100 130" className="h-full w-full overflow-visible" aria-hidden>
      <defs>
        <clipPath id={`${uid}-body`}>
          <path d="M6 10 L94 10 L84 124 Q83 128 79 128 L21 128 Q17 128 16 124 Z" />
        </clipPath>
        <linearGradient id={`${uid}-tea`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#d4ff9a" />
          <stop offset="1" stopColor="#7bd44f" />
        </linearGradient>
        <radialGradient id={`${uid}-pearl`} cx="0.35" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#6b4a3a" />
          <stop offset="1" stopColor="#1c110c" />
        </radialGradient>
      </defs>
      {/* the cup and what's in it */}
      <path d="M6 10 L94 10 L84 124 Q83 128 79 128 L21 128 Q17 128 16 124 Z" fill="rgba(255,255,255,0.08)" />
      <g clipPath={`url(#${uid}-body)`}>
        <motion.rect
          x="0"
          width="100"
          height="140"
          fill={`url(#${uid}-tea)`}
          animate={{ y: level }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        />
        <motion.ellipse
          cx="50"
          rx="50"
          ry="3"
          fill="rgba(255,255,255,0.45)"
          animate={{ cy: level, opacity: fill > 0 ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
        />
        {Array.from({ length: pearls }, (_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          return (
            <circle key={i} cx={24 + col * 10.5 + (row % 2) * 5} cy={120 - row * 8.5} r="5" fill={`url(#${uid}-pearl)`} />
          );
        })}
        {/* the brand band */}
        <text x="50" y="66" textAnchor="middle" fontSize="11" fontWeight="900" fill="rgba(20,40,10,0.75)" letterSpacing="0.5">
          MILKA BOO
        </text>
      </g>
      <path
        d="M6 10 L94 10 L84 124 Q83 128 79 128 L21 128 Q17 128 16 124 Z"
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2.5"
      />
      <path d="M14 18 L22 118" stroke="rgba(255,255,255,0.35)" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="50" cy="10" rx="45" ry="5" fill="rgba(10,25,10,0.6)" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" />
    </svg>
  );
}

function DropArt({ kind }: { kind: DropKind }) {
  if (kind === "pearl") {
    return (
      <span
        className="block size-full rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #8a6450 0%, #3a2418 45%, #120a06 100%)",
          boxShadow: "0 0 10px rgba(163,255,132,0.35), inset -2px -3px 5px rgba(0,0,0,0.5)",
        }}
      />
    );
  }
  if (kind === "apple") {
    return (
      <span className="grid size-full place-items-center text-[30px] leading-none drop-shadow-[0_0_10px_#facc15]">🍏</span>
    );
  }
  // a dripping blob of ectoplasm with a scowl
  return (
    <span
      className="relative block size-full"
      style={{
        borderRadius: "50% 50% 45% 45% / 35% 35% 65% 65%",
        background: "radial-gradient(circle at 40% 30%, #eaffb0 0%, #8bff3c 40%, #2f9e12 100%)",
        boxShadow: "0 0 16px #8bff3c, 0 0 4px #fff inset",
      }}
    >
      <span className="absolute left-[24%] top-[38%] h-[16%] w-[18%] -rotate-12 rounded-full bg-[#0b2a05]" />
      <span className="absolute right-[24%] top-[38%] h-[16%] w-[18%] rotate-12 rounded-full bg-[#0b2a05]" />
      <span className="absolute bottom-[20%] left-1/2 h-[10%] w-[34%] -translate-x-1/2 rounded-t-full bg-[#0b2a05]" />
    </span>
  );
}

export default function HauntedAppleGame({ onClose }: Props) {
  const { muted, toggleMute, unlock, play } = useSounds();
  const [phase, setPhase] = useState<Phase>("intro");
  const [view, setView] = useState<View | null>(null);
  const area = useRef<HTMLDivElement>(null);
  const world = useRef<World | null>(null);
  const keys = useRef({ left: false, right: false });
  const raf = useRef(0);

  const stop = useCallback(() => cancelAnimationFrame(raf.current), []);
  useEffect(() => stop, [stop]);

  const start = () => {
    unlock();
    stop();
    const el = area.current;
    if (!el) return;
    const s = newWorld(el.clientWidth, el.clientHeight);
    world.current = s;
    setView(snapshot(s));
    setPhase("playing");
    let last = performance.now();

    const pop = (x: number, y: number, text: string, color: string) => {
      s.pops.push({ id: s.nextId++, x, y, text, color, born: s.clock });
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      s.clock += dt;
      // the play area can change size (rotating a phone)
      s.w = el.clientWidth;
      s.h = el.clientHeight;
      const progress = s.fill / GOAL;
      const cup = cupSize(s.w);

      // the cup chases the finger, or the arrow keys
      const keyDir = (keys.current.right ? 1 : 0) - (keys.current.left ? 1 : 0);
      if (keyDir) s.targetX += keyDir * s.w * 1.1 * dt;
      s.targetX = Math.min(s.w - cup.w / 2, Math.max(cup.w / 2, s.targetX));
      const prevX = s.cupX;
      s.cupX += (s.targetX - s.cupX) * Math.min(1, dt * 16);
      const speed = (s.cupX - prevX) / Math.max(dt, 1e-3);
      s.tilt += (Math.max(-14, Math.min(14, speed * 0.02)) - s.tilt) * Math.min(1, dt * 10);

      // the ghost drifts and changes its mind, faster as the cup fills
      const ghostSpeed = s.w * (0.22 + progress * 0.3);
      s.ghostTurnIn -= dt;
      if (s.ghostTurnIn <= 0) {
        s.ghostV = (Math.random() < 0.5 ? -1 : 1) * ghostSpeed * (0.6 + Math.random() * 0.6);
        s.ghostTurnIn = 0.8 + Math.random() * 1.6;
      }
      s.ghostX += s.ghostV * dt;
      const margin = Math.min(110, s.w * 0.2);
      if (s.ghostX < margin || s.ghostX > s.w - margin) {
        s.ghostX = Math.min(s.w - margin, Math.max(margin, s.ghostX));
        s.ghostV = -s.ghostV;
      }

      // it drops things
      s.spawnIn -= dt;
      if (s.spawnIn <= 0) {
        s.spawnIn = 0.85 - progress * 0.4 + Math.random() * 0.25;
        const roll = Math.random();
        const kind: DropKind = roll < 0.24 + progress * 0.14 ? "slime" : roll > 0.92 ? "apple" : "pearl";
        s.drops.push({
          id: s.nextId++,
          kind,
          x: Math.min(s.w - 20, Math.max(20, s.ghostX + (Math.random() - 0.5) * 60)),
          y: GHOST_Y + 30,
          vy: s.h * (0.22 + progress * 0.12),
          spin: (Math.random() - 0.5) * 400,
        });
      }

      // fall, and catch
      const cupTop = s.h - CUP_BOTTOM - cup.h + cup.h * 0.06;
      const gravity = s.h * (0.32 + progress * 0.3);
      const kept: Drop[] = [];
      for (const d of s.drops) {
        d.vy += gravity * dt;
        d.y += d.vy * dt;
        const r = RADIUS[d.kind];
        const inMouth = d.y + r >= cupTop && d.y - r <= cupTop + 26 && Math.abs(d.x - s.cupX) < cup.w * 0.42;
        if (inMouth) {
          if (d.kind === "slime") {
            s.lives -= 1;
            s.fill = Math.max(0, s.fill - SLIME_SPILL);
            s.streak = 0;
            s.hits += 1;
            s.lastHit = s.clock;
            pop(d.x, cupTop - 20, "SPLAT!", "#8bff3c");
            play("laugh");
          } else {
            const gain = d.kind === "apple" ? APPLE_VALUE : 1;
            s.streak += 1;
            s.caught += 1;
            const bonus = s.streak % STREAK_BONUS === 0 ? 1 : 0;
            s.fill = Math.min(GOAL, s.fill + gain + bonus);
            pop(d.x, cupTop - 20, `+${gain}`, d.kind === "apple" ? "#facc15" : ACCENT);
            if (bonus) pop(s.cupX, cupTop - 52, `Streak ${s.streak}! +1`, "#ffffff");
            play("shloop");
          }
          continue;
        }
        if (d.y - r > s.h) {
          // a missed pearl breaks the streak; missed slime is a dodge
          if (d.kind !== "slime") s.streak = 0;
          continue;
        }
        kept.push(d);
      }
      s.drops = kept;
      s.pops = s.pops.filter((p) => s.clock - p.born < 0.8);

      setView(snapshot(s));
      if (s.fill >= GOAL) {
        play("win");
        setPhase("won");
        return;
      }
      if (s.lives <= 0) {
        play("wail");
        setPhase("lost");
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  };

  const aim = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = world.current;
    if (!s || phase !== "playing") return;
    const rect = e.currentTarget.getBoundingClientRect();
    s.targetX = e.clientX - rect.left;
  };

  // arrow keys / A-D steer on a keyboard
  useEffect(() => {
    if (phase !== "playing") return;
    const set = (e: KeyboardEvent, down: boolean) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.current.left = down;
      else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.current.right = down;
      else return;
      e.preventDefault();
    };
    const onDown = (e: KeyboardEvent) => set(e, true);
    const onUp = (e: KeyboardEvent) => set(e, false);
    const held = keys.current;
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
      held.left = held.right = false;
    };
  }, [phase]);

  const fill = (view?.fill ?? 0) / GOAL;
  const lives = view?.lives ?? LIVES;
  const playing = phase === "playing";
  const ghostW = 220;

  return (
    <div className="relative h-full w-full select-none overflow-hidden bg-[#0b1409] text-[#f3ffe9]">
      {/* a dim, blurred copy of the poster behind everything */}
      <div
        className="pointer-events-none absolute inset-0 scale-110 bg-cover bg-center opacity-25 blur-2xl"
        style={{ backgroundImage: `url("${encodeURI(POSTER)}")` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,12,4,0.85)_100%)]" />

      {/* green flash when slime lands in the cup */}
      <AnimatePresence>
        {view && view.hits > 0 && (
          <motion.div
            key={view.hits}
            className="pointer-events-none absolute inset-0 z-20 bg-[#8bff3c]"
            initial={{ opacity: 0.35 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <MuteButton muted={muted} onToggle={toggleMute} />

      {/* title and stats */}
      <div className="pointer-events-none absolute inset-x-0 top-4 z-20 flex flex-col items-center gap-1.5 px-4 pl-40 sm:pl-4">
        <h2 className="font-creepster text-2xl uppercase tracking-wider sm:text-3xl" style={{ color: ACCENT }}>
          Boba Drop
        </h2>
        <div className="flex items-center gap-4 text-sm font-bold text-white/85">
          <span className="flex items-center gap-1" aria-label={`${lives} lives left`}>
            {Array.from({ length: LIVES }, (_, i) => (
              <Heart
                key={i}
                className="h-4 w-4 transition-all"
                style={{ color: ACCENT, fill: i < lives ? ACCENT : "transparent", opacity: i < lives ? 1 : 0.35 }}
              />
            ))}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-24 overflow-hidden rounded-full bg-white/15 sm:w-32">
              <span
                className="block h-full rounded-full transition-[width] duration-300"
                style={{ width: `${fill * 100}%`, background: `linear-gradient(90deg, ${ACCENT}, #facc15)` }}
              />
            </span>
            {Math.round(fill * 100)}%
          </span>
        </div>
      </div>

      {/* the play area */}
      <div
        ref={area}
        className="absolute inset-0 touch-none"
        style={{ cursor: playing ? "ew-resize" : "default" }}
        onPointerDown={aim}
        onPointerMove={aim}
      >
        {/* the Spooky Phantom */}
        <motion.div
          className="pointer-events-none absolute z-10"
          style={{ left: (view?.ghostX ?? 0) - ghostW / 2, top: GHOST_Y - ghostW * 0.42, width: ghostW, opacity: view ? 1 : 0 }}
          animate={view?.shaking ? { y: -6, rotate: [0, -10, 10, -6, 0], scale: 1.15 } : { y: [0, -8, 0], rotate: 0, scale: 1 }}
          transition={view?.shaking ? { duration: 0.6 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            role="img"
            aria-label="The Spooky Phantom"
            style={{
              aspectRatio: `${GHOST.crop.w} / ${GHOST.crop.h}`,
              backgroundImage: `url("${GHOST.src}")`,
              backgroundSize: `${(GHOST.width / GHOST.crop.w) * 100}% auto`,
              backgroundPosition: `${(GHOST.crop.x / (GHOST.width - GHOST.crop.w)) * 100}% 0%`,
              maskImage: "linear-gradient(to bottom, black 58%, transparent 92%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 58%, transparent 92%)",
              filter: "drop-shadow(0 0 22px rgba(139,255,60,0.6))",
            }}
          />
        </motion.div>

        {/* falling things */}
        {view?.drops.map((d) => {
          const r = RADIUS[d.kind];
          return (
            <div
              key={d.id}
              className="pointer-events-none absolute z-10"
              style={{
                left: d.x - r,
                top: d.y - r,
                width: r * 2,
                height: r * 2,
                transform: d.kind === "pearl" ? undefined : `rotate(${(d.spin * d.y) / 600}deg)`,
              }}
            >
              <DropArt kind={d.kind} />
            </div>
          );
        })}

        {/* +1 / SPLAT! */}
        {view?.pops.map((p) => (
          <motion.span
            key={p.id}
            className="pointer-events-none absolute z-20 -translate-x-1/2 whitespace-nowrap text-lg font-black"
            style={{ left: p.x, top: p.y, color: p.color, textShadow: `0 0 12px ${p.color}` }}
            initial={{ y: 0, opacity: 1, scale: 0.7 }}
            animate={{ y: -40, opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {p.text}
          </motion.span>
        ))}

        {/* the player's cup */}
        {view && (
          <div
            className="pointer-events-none absolute z-10"
            style={{
              left: view.cupX - view.cupW / 2,
              bottom: CUP_BOTTOM,
              width: view.cupW,
              height: view.cupH,
              transform: `rotate(${view.tilt}deg)`,
              transformOrigin: "50% 100%",
              filter: `drop-shadow(0 0 ${12 + fill * 24}px rgba(163,255,132,${0.25 + fill * 0.45}))`,
            }}
          >
            <motion.div
              className="size-full"
              animate={view.shaking ? { x: [0, -8, 8, -5, 5, 0] } : { x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <BobaCup fill={fill} />
            </motion.div>
          </div>
        )}

        {/* a glowing floor line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-linear-to-t from-[#a3ff84]/15 to-transparent" />
      </div>

      {/* how to play */}
      <AnimatePresence>
        {phase === "intro" && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/75 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-sm rounded-3xl border border-white/15 bg-[#0f1f0c]/95 p-6 text-center shadow-[0_0_60px_rgba(163,255,132,0.3)]"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <h3 className="font-creepster text-3xl uppercase tracking-wider" style={{ color: ACCENT }}>
                Fill the Cup!
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#e2f5d6]">
                The Spooky Phantom is raining boba. Slide your cup to catch the pearls and fill it to the top.
              </p>
              <ul className="mt-4 space-y-2 text-left text-sm text-[#e2f5d6]">
                <li className="flex items-center gap-3">
                  <span className="size-6 shrink-0">
                    <DropArt kind="pearl" />
                  </span>
                  Pearl: <span className="font-black text-white">+1</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-6 shrink-0 text-[22px]">
                    <DropArt kind="apple" />
                  </span>
                  Golden apple: <span className="font-black text-[#facc15]">+{APPLE_VALUE}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-6 shrink-0">
                    <DropArt kind="slime" />
                  </span>
                  Ectoplasm: <span className="font-black text-[#ff5c7a]">lose a heart</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-[#a9c99a]">Drag anywhere, or use ← → on a keyboard.</p>
              <button
                type="button"
                onClick={start}
                className="mt-6 w-full rounded-full py-3.5 font-black uppercase tracking-wider text-[#10240a] shadow-[0_0_25px_rgba(163,255,132,0.55)] transition-transform hover:scale-103 active:scale-95 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #facc15 100%)` }}
              >
                Start Game
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* won / lost */}
      <AnimatePresence>
        {(phase === "won" || phase === "lost") && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-full max-w-sm rounded-3xl border border-white/15 bg-[#0f1f0c]/95 p-6 text-center"
              style={{ boxShadow: `0 0 60px ${phase === "won" ? "rgba(163,255,132,0.4)" : "rgba(255,59,92,0.3)"}` }}
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.3 }}
            >
              {phase === "won" ? (
                <>
                  <Trophy className="mx-auto h-12 w-12" style={{ color: ACCENT }} />
                  <h3 className="font-creepster mt-3 text-4xl uppercase tracking-wider" style={{ color: ACCENT }}>
                    Cup Filled!
                  </h3>
                  <p className="mt-2 text-sm text-[#d9ecd0]">
                    You caught <span className="font-black text-white">{view?.caught ?? 0}</span> treats and kept the
                    slime out. The Haunted Apple cup is free!
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-creepster text-4xl uppercase tracking-wider text-[#ff5c7a]">Slimed!</h3>
                  <p className="mt-2 text-sm text-[#f8d7dc]">
                    The Phantom&apos;s ectoplasm ruined the cup at {Math.round(fill * 100)}% full. Dodge the green
                    blobs and try again!
                  </p>
                </>
              )}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={start}
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3 font-black text-[#10240a] transition-transform hover:scale-103 cursor-pointer"
                  style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #facc15 100%)` }}
                >
                  <RotateCcw className="h-4 w-4" />
                  {phase === "won" ? "Play again" : "Try again"}
                </button>
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full py-1 text-sm text-[#9fb894] transition-colors hover:text-white cursor-pointer"
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
