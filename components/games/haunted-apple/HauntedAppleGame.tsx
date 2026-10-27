"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CupSoda, Flame, Heart, Hourglass, RotateCcw, Skull, Timer, Trophy, Zap } from "lucide-react";
import { useSounds, type SoundFiles } from "@/hooks/useSounds";
import { useReducedMotion } from "@/hooks/useDeviceTier";
import MuteButton from "@/components/MuteButton";

interface Props {
  onClose?: () => void;
}

/* ---------- the look ---------- */
const ACCENT = "#a3ff84";
const GOLD = "#ffd23f";
const SLIME = "#8bff3c";
const CURSE = "#c084fc";
const DANGER = "#ff5c7a";
const BACKDROP = "/games/haunted-apple/Moonlit Haunted Lake Terrace (1).png";
/** the Phantom on its broom (square art); it flies to the right, so it's mirrored while heading left */
const GHOST_SRC = "/games/haunted-apple/Neon Ghost Riding a Mystic Broom.png";
/** the scare, red-eyed: bats, things watching from the dark, a spider on its thread */
const EYE = "#ff4d2e";
/** the game's own music, the Phantom's cackle, and a scream when the cup is lost */
const SOUNDS: SoundFiles = {
  ambient: "/sounds/background1.mp3",
  laugh: "/sounds/Evillaugh.mp3",
  scream: "/sounds/female.mp3",
};

/* ---------- the rules: tune the difficulty here ---------- */
/** pearls to fill the cup */
const GOAL = 30;
const LIVES = 3;
/** seconds to fill it, once the countdown is over */
const TIME_LIMIT = 50;
const COUNTDOWN = 3;
/** a golden apple is worth this many pearls */
const APPLE_VALUE = 3;
/** catching slime spills this many pearls… */
const SLIME_SPILL = 2;
/** …and a phantom pearl drains this many */
const CURSE_DRAIN = 3;
/** every this many catches in a row: a bonus pearl, and the score multiplier climbs (up to MAX_MULT) */
const STREAK_STEP = 5;
const MAX_MULT = 4;
/** the cup is sluggish for this long after slime lands in it */
const SLOW_SECONDS = 1.3;
/** the Phantom flies into a rage (fast, double drops, mostly slime): first after RAGE_FIRST s, then every RAGE_EVERY s, for RAGE_LASTS s */
const RAGE_FIRST = 6;
const RAGE_EVERY: [number, number] = [7, 11];
const RAGE_LASTS = 2.6;
const POINTS = { pearl: 10, apple: 30 } as const;
/** points per second left on the clock when the cup is full */
const TIME_BONUS = 5;
const BEST_KEY = "milkaboo-apple-best";

/** the round gets harder as the cup fills (or as the clock runs, so stalling doesn't help); these name the stages */
const WAVES = [
  { at: 0, name: "Drizzle", blurb: "Catch the pearls, dodge the slime" },
  { at: 0.34, name: "Downpour", blurb: "The Phantom is getting angry" },
  { at: 0.68, name: "Storm", blurb: "Hold on, it's nearly full!" },
] as const;

const TAUNTS = {
  slime: ["Gotcha!", "Mine now!", "Hee hee hee!", "Too slow!"],
  curse: ["Cursed!", "Spill it!", "Boo-hoo!"],
  rage: ["RAAAGH!", "You can't dodge!", "Feel my slime!"],
} as const;

type Phase = "intro" | "playing" | "won" | "lost";
type DropKind = "pearl" | "apple" | "slime" | "curse";
type Outcome = "won" | "slimed" | "time";
type HitKind = "slime" | "curse";

const RADIUS: Record<DropKind, number> = { pearl: 13, apple: 19, slime: 17, curse: 14 };

interface Drop {
  id: number;
  kind: DropKind;
  x: number;
  y: number;
  vx: number;
  vy: number;
  spin: number;
  /** phantom pearls weave from side to side by this much */
  sway: number;
  phase: number;
  born: number;
}

interface Pop {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
  big: boolean;
}

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  born: number;
}

interface Banner {
  id: number;
  text: string;
  sub: string;
  born: number;
}

interface Taunt {
  id: number;
  text: string;
  until: number;
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
  sparks: Spark[];
  fill: number;
  lives: number;
  streak: number;
  bestStreak: number;
  caught: number;
  score: number;
  timeBonus: number;
  hits: number;
  hitKind: HitKind;
  lastHit: number;
  slowUntil: number;
  rageIn: number;
  rageUntil: number;
  wave: number;
  banner: Banner | null;
  taunt: Taunt | null;
  /** the 3-2-1 before the first drop */
  countdown: number;
  /** seconds of actual play, which the clock counts down from */
  played: number;
  outcome: Outcome | null;
  nextId: number;
  clock: number;
}

/** what a frame renders */
interface View {
  w: number;
  cupX: number;
  tilt: number;
  ghostX: number;
  /** 1 while the Phantom flies right, -1 while it flies left */
  ghostDir: 1 | -1;
  drops: Drop[];
  pops: Pop[];
  sparks: (Spark & { age: number })[];
  fill: number;
  lives: number;
  streak: number;
  bestStreak: number;
  caught: number;
  score: number;
  timeBonus: number;
  mult: number;
  hits: number;
  hitKind: HitKind;
  /** the cup and the ghost shake for a moment after a hit */
  shaking: boolean;
  slowed: boolean;
  rage: boolean;
  countdown: number;
  timeLeft: number;
  wave: number;
  banner: Banner | null;
  taunt: Taunt | null;
  outcome: Outcome | null;
  cupW: number;
  cupH: number;
}

const GHOST_Y = 180;
const CUP_BOTTOM = 28;

function cupSize(w: number) {
  const cw = Math.min(112, Math.max(80, w * 0.21));
  return { w: cw, h: cw * 1.3 };
}

const multiplier = (streak: number) => Math.min(MAX_MULT, 1 + Math.floor(streak / STREAK_STEP));

const clockText = (seconds: number) => {
  const whole = Math.ceil(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
};

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
    spawnIn: 0.6,
    drops: [],
    pops: [],
    sparks: [],
    fill: 0,
    lives: LIVES,
    streak: 0,
    bestStreak: 0,
    caught: 0,
    score: 0,
    timeBonus: 0,
    hits: 0,
    hitKind: "slime",
    lastHit: -10,
    slowUntil: -10,
    rageIn: RAGE_FIRST,
    rageUntil: -10,
    wave: 0,
    banner: null,
    taunt: null,
    countdown: COUNTDOWN,
    played: 0,
    outcome: null,
    nextId: 1,
    clock: 0,
  };
}

const snapshot = (s: World): View => {
  const cup = cupSize(s.w);
  return {
    w: s.w,
    cupX: s.cupX,
    tilt: s.tilt,
    ghostX: s.ghostX,
    ghostDir: s.ghostV < 0 ? -1 : 1,
    drops: s.drops.map((d) => ({ ...d })),
    pops: s.pops.slice(),
    sparks: s.sparks.map((p) => ({ ...p, age: s.clock - p.born })),
    fill: s.fill,
    lives: s.lives,
    streak: s.streak,
    bestStreak: s.bestStreak,
    caught: s.caught,
    score: s.score,
    timeBonus: s.timeBonus,
    mult: multiplier(s.streak),
    hits: s.hits,
    hitKind: s.hitKind,
    shaking: s.clock - s.lastHit < 0.7,
    slowed: s.clock < s.slowUntil,
    rage: s.countdown <= 0 && s.clock < s.rageUntil,
    countdown: s.countdown,
    timeLeft: Math.max(0, TIME_LIMIT - s.played),
    wave: s.wave,
    banner: s.banner,
    taunt: s.taunt,
    outcome: s.outcome,
    cupW: cup.w,
    cupH: cup.h,
  };
};

/* the best score is remembered per browser; a tiny external store keeps SSR and hydration consistent */
const bestListeners = new Set<() => void>();
function readBest(): number {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0;
  } catch {
    return 0;
  }
}
function writeBest(score: number) {
  try {
    localStorage.setItem(BEST_KEY, String(score));
  } catch {
    /* private mode: the best score just won't be remembered */
  }
  bestListeners.forEach((cb) => cb());
}
function subscribeBest(cb: () => void) {
  bestListeners.add(cb);
  return () => {
    bestListeners.delete(cb);
  };
}
const useBest = () => useSyncExternalStore(subscribeBest, readBest, () => 0);

/** the Spooky Phantom on its broom; it turns around (a quick squash through the middle) when it changes direction */
function GhostArt({ rage = false, dir = 1, size }: { rage?: boolean; dir?: 1 | -1; size: string }) {
  return (
    <div
      className="relative aspect-square"
      style={{
        filter: rage ? `drop-shadow(0 0 30px ${SLIME}) saturate(1.35) brightness(1.1)` : undefined,
        transform: `scaleX(${dir})`,
        transition: "filter 300ms ease, transform 260ms ease-in-out",
      }}
    >
      <Image src={GHOST_SRC} alt="The Spooky Phantom" fill sizes={size} loading="eager" draggable={false} className="object-contain" />
    </div>
  );
}

/** a bat seen from below; the wings beat (flip about the shoulders) at the given rate */
function Bat({ size, flap = 0.26 }: { size: number; flap?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.42}
      viewBox="0 0 100 42"
      className="overflow-visible"
      style={{ "--flap": `${flap}s` } as CSSProperties}
      aria-hidden
    >
      <g fill="#04070a">
        <path
          className="ha-wing"
          d="M46 13 C38 6 22 4 2 9 C8 12 10 16 9 20 C14 17 19 18 21 22 C25 18 31 19 33 23 C37 19 42 20 47 22 Z"
        />
        <path
          className="ha-wing"
          d="M54 13 C62 6 78 4 98 9 C92 12 90 16 91 20 C86 17 81 18 79 22 C75 18 69 19 67 23 C63 19 58 20 53 22 Z"
        />
        <ellipse cx="50" cy="19" rx="5" ry="9" />
        <circle cx="50" cy="10" r="4.6" />
        <path d="M46.4 8 L45.6 2 L48.8 6 Z M53.6 8 L54.4 2 L51.2 6 Z" />
      </g>
      <circle cx="48.3" cy="10" r="1" fill={EYE} />
      <circle cx="51.7" cy="10" r="1" fill={EYE} />
    </svg>
  );
}

/** a spider dangling on its thread */
function Spider() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" className="overflow-visible" aria-hidden>
      <g stroke="#04070a" strokeWidth="1.7" fill="none" strokeLinecap="round">
        <path d="M17 17 Q9 9 4 13 M17 19 Q8 15 2 21 M17 21 Q8 22 4 30 M18 23 Q12 28 10 36" />
        <path d="M23 17 Q31 9 36 13 M23 19 Q32 15 38 21 M23 21 Q32 22 36 30 M22 23 Q28 28 30 36" />
      </g>
      <ellipse cx="20" cy="25" rx="6" ry="7.5" fill="#04070a" />
      <circle cx="20" cy="15.5" r="4" fill="#04070a" />
      <circle cx="18.6" cy="15" r="0.95" fill={EYE} />
      <circle cx="21.4" cy="15" r="0.95" fill={EYE} />
    </svg>
  );
}

/** a jagged fork of lightning, drawn top-down */
function Bolt() {
  return (
    <svg viewBox="0 0 60 200" className="h-full w-auto overflow-visible" aria-hidden>
      <g fill="none" stroke="#f4fff6" strokeLinecap="round" strokeLinejoin="round">
        <polyline strokeWidth="2.4" points="30,0 24,30 33,52 21,84 29,104 14,140 20,158 9,200" />
        <polyline strokeWidth="1.3" points="24,30 12,48 15,62 6,78" />
        <polyline strokeWidth="1.3" points="21,84 36,110 33,128 42,150" />
      </g>
    </svg>
  );
}

/** an open MilkaBoo cup that fills with apple tea and pearls as you catch; the tea stays level while the cup tilts */
function BobaCup({ fill, tilt, slowed }: { fill: number; tilt: number; slowed: boolean }) {
  const uid = useId();
  const level = 124 - Math.min(1, fill) * 104;
  const pearls = Math.round(Math.min(1, fill) * 18);
  const body = "M6 10 L94 10 L84 124 Q83 128 79 128 L21 128 Q17 128 16 124 Z";
  return (
    <svg viewBox="0 0 100 130" className="h-full w-full overflow-visible" aria-hidden>
      <defs>
        <clipPath id={`${uid}-body`}>
          <path d={body} />
        </clipPath>
        <linearGradient id={`${uid}-tea`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#dcffa6" />
          <stop offset="1" stopColor="#6fc943" />
        </linearGradient>
        <linearGradient id={`${uid}-glass`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="0.5" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.16)" />
        </linearGradient>
        <radialGradient id={`${uid}-pearl`} cx="0.35" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#6b4a3a" />
          <stop offset="1" stopColor="#1c110c" />
        </radialGradient>
      </defs>
      {/* the cup and what's in it */}
      <path d={body} fill={`url(#${uid}-glass)`} />
      <g clipPath={`url(#${uid}-body)`}>
        <g transform={`rotate(${(-tilt * 0.6).toFixed(2)} 50 ${level.toFixed(1)})`}>
          <motion.rect
            x="-30"
            width="160"
            height="160"
            fill={`url(#${uid}-tea)`}
            animate={{ y: level }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          />
          <motion.ellipse
            cx="50"
            rx="60"
            ry="3"
            fill="rgba(255,255,255,0.45)"
            animate={{ cy: level, opacity: fill > 0 ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          />
        </g>
        {/* bubbles rise through the tea */}
        {fill > 0.15 &&
          [30, 50, 68].map((cx, i) => (
            <circle
              key={cx}
              className="ha-bubble"
              cx={cx}
              cy={Math.min(118, level + 26 + i * 6)}
              r={1.6 + (i % 2)}
              fill="rgba(255,255,255,0.6)"
              style={{ animationDelay: `${i * 0.8}s` }}
            />
          ))}
        {Array.from({ length: pearls }, (_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          return (
            <circle key={i} cx={24 + col * 10.5 + (row % 2) * 5} cy={120 - row * 8.5} r="5" fill={`url(#${uid}-pearl)`} />
          );
        })}
        {/* the brand mark */}
        <g opacity="0.85">
          <rect x="41" y="38" width="18" height="16" rx="3" fill="#fbf9fd" />
          <path d="M41 47 H59 V51 A3 3 0 0 1 56 54 H44 A3 3 0 0 1 41 51 Z" fill="#ff5fa0" />
          <circle cx="46" cy="43" r="2.2" fill="#2f8fe8" />
          <circle cx="54" cy="43" r="2.2" fill="#2f8fe8" />
          <path d="M42 39 L39.5 36 M58 39 L60.5 36" stroke="#fbf9fd" strokeWidth="1.6" strokeLinecap="round" />
        </g>
        <text x="50" y="66" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="rgba(20,40,10,0.8)" letterSpacing="0.5">
          MILKA
        </text>
        <text x="50" y="77" textAnchor="middle" fontSize="9.5" fontWeight="900" fill="rgba(20,40,10,0.8)" letterSpacing="0.5">
          BOO
        </text>
        {/* slime over the rim while the cup is sluggish */}
        {slowed && (
          <g fill={SLIME} opacity="0.9">
            <path d="M6 10 Q50 24 94 10 L94 16 Q50 30 6 16 Z" />
            <ellipse cx="24" cy="30" rx="2.6" ry="8" />
            <ellipse cx="58" cy="36" rx="2.2" ry="10" />
            <ellipse cx="80" cy="27" rx="2" ry="6" />
          </g>
        )}
      </g>
      <path d={body} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
      <path d="M14 18 L22 118" stroke="rgba(255,255,255,0.35)" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="50" cy="10" rx="45" ry="5" fill="rgba(10,25,10,0.6)" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" />
    </svg>
  );
}

function DropArt({ kind }: { kind: DropKind }) {
  const uid = useId();
  if (kind === "pearl") {
    return (
      <span
        className="relative block size-full rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #8a6450 0%, #3a2418 45%, #120a06 100%)",
          boxShadow: "inset -2px -3px 5px rgba(0,0,0,0.5)",
        }}
      >
        <span className="absolute left-[22%] top-[16%] h-[18%] w-[26%] rounded-full bg-white/55" />
      </span>
    );
  }
  if (kind === "apple") {
    return (
      <svg viewBox="0 0 40 40" className="size-full overflow-visible" aria-hidden>
        <defs>
          <radialGradient id={`${uid}-a`} cx="0.35" cy="0.3" r="0.75">
            <stop offset="0" stopColor="#fff6c2" />
            <stop offset="0.4" stopColor={GOLD} />
            <stop offset="1" stopColor="#b7791f" />
          </radialGradient>
        </defs>
        <path
          d="M20 13 C13 6 4 11 5 21 C6 30 12 37 19 35 C20 34.6 20 34.6 21 35 C28 37 34 30 35 21 C36 11 27 6 20 13 Z"
          fill={`url(#${uid}-a)`}
        />
        <path d="M20 13 C20 9 21 6 24 4" fill="none" stroke="#6b3f1d" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M22 9 C25 4 31 4 33 7 C30 11 25 12 22 9 Z" fill="#6fd14a" />
        <ellipse cx="13" cy="18" rx="2.6" ry="4.5" fill="rgba(255,255,255,0.5)" transform="rotate(-18 13 18)" />
      </svg>
    );
  }
  if (kind === "curse") {
    // a phantom pearl: pale, see-through, and not at all friendly
    return (
      <span
        className="relative block size-full rounded-full"
        style={{
          background: "radial-gradient(circle at 40% 35%, #ffffff 0%, #ead9ff 25%, #a855f7 65%, #4c1d95 100%)",
          opacity: 0.92,
        }}
      >
        <span className="absolute left-[27%] top-[34%] h-[22%] w-[15%] rounded-full bg-[#2e1065]" />
        <span className="absolute right-[27%] top-[34%] h-[22%] w-[15%] rounded-full bg-[#2e1065]" />
        <span className="absolute bottom-[18%] left-1/2 h-[16%] w-[30%] -translate-x-1/2 rounded-t-full border-t-[3px] border-[#2e1065]" />
      </span>
    );
  }
  // a dripping blob of ectoplasm with a scowl
  return (
    <span
      className="ha-wobble relative block size-full"
      style={{
        borderRadius: "50% 50% 45% 45% / 35% 35% 65% 65%",
        background: "radial-gradient(circle at 40% 30%, #eaffb0 0%, #8bff3c 40%, #2f9e12 100%)",
        boxShadow: "inset 0 0 4px #fff",
      }}
    >
      <span className="absolute left-[24%] top-[38%] h-[16%] w-[18%] -rotate-12 rounded-full bg-[#0b2a05]" />
      <span className="absolute right-[24%] top-[38%] h-[16%] w-[18%] rotate-12 rounded-full bg-[#0b2a05]" />
      <span className="absolute bottom-[20%] left-1/2 h-[10%] w-[34%] -translate-x-1/2 rounded-t-full bg-[#0b2a05]" />
      <span className="absolute -bottom-[16%] left-[28%] h-[28%] w-[14%] rounded-full bg-[#6fdc2a]" />
      <span className="absolute -bottom-[8%] right-[26%] h-[20%] w-[11%] rounded-full bg-[#6fdc2a]" />
    </span>
  );
}

/** leaves from the poster drift down behind the game */
const LEAVES = [
  { left: 6, size: 18, delay: 0, dur: 11, dx: 60 },
  { left: 18, size: 14, delay: 3.5, dur: 13, dx: -40 },
  { left: 33, size: 22, delay: 7, dur: 12, dx: 30 },
  { left: 52, size: 16, delay: 1.5, dur: 14, dx: -70 },
  { left: 68, size: 20, delay: 5, dur: 10, dx: 50 },
  { left: 82, size: 15, delay: 9, dur: 15, dx: -30 },
  { left: 92, size: 19, delay: 2.5, dur: 12, dx: -55 },
];

function Leaf({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden>
      <path d="M2 17 C2 7 9 2 18 2 C18 11 12 18 2 17 Z" fill="#5fcf3f" />
      <path d="M3 16 L16 4" stroke="#2f7f1c" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** bats cross the sky now and then (top in %, flip = right to left); the small ones read as far away */
const BATS = [
  { top: 9, size: 34, dur: 15, delay: 2, dy: 26, flap: 0.24, flip: false },
  { top: 17, size: 18, dur: 22, delay: 9, dy: 14, flap: 0.18, flip: true },
  { top: 27, size: 26, dur: 17, delay: 13, dy: 30, flap: 0.28, flip: false },
  { top: 12, size: 14, dur: 25, delay: 5, dy: 12, flap: 0.17, flip: true },
  { top: 36, size: 42, dur: 12, delay: 7, dy: 38, flap: 0.3, flip: true },
  { top: 21, size: 16, dur: 20, delay: 16, dy: 12, flap: 0.18, flip: false },
];

/** red eyes that open in the dark at the edges, blink, and are gone (left/top in %) */
const EYES = [
  { left: 3, top: 58, size: 6, delay: 1, dur: 9 },
  { left: 92, top: 49, size: 5, delay: 5, dur: 11 },
  { left: 11, top: 73, size: 4, delay: 8, dur: 13 },
];

/** where each bat in a rage swarm flies, in px from the Phantom */
const SWARM = [
  { dx: -230, dy: -110, size: 34, delay: 0 },
  { dx: 210, dy: -140, size: 30, delay: 0.05 },
  { dx: -150, dy: 120, size: 24, delay: 0.1 },
  { dx: 260, dy: 60, size: 38, delay: 0.02 },
  { dx: -300, dy: 10, size: 28, delay: 0.14 },
  { dx: 120, dy: -200, size: 20, delay: 0.18 },
  { dx: -70, dy: -190, size: 22, delay: 0.08 },
  { dx: 330, dy: -40, size: 26, delay: 0.12 },
  { dx: 60, dy: 160, size: 18, delay: 0.2 },
];

/** a cloud of bats bursting out of the Phantom when it flies into a rage; it stays where the rage began */
function BatSwarm({ x, y }: { x: number; y: number }) {
  const [from] = useState({ x, y });
  return SWARM.map((b, i) => (
    <motion.div
      key={i}
      className="pointer-events-none absolute z-10"
      style={{ left: from.x - b.size / 2, top: from.y - b.size * 0.21 }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
      animate={{
        x: [0, b.dx * 0.45, b.dx],
        y: [0, b.dy * 0.4 - 30, b.dy],
        opacity: [0, 1, 1, 0],
        scale: [0.3, 1, 1.2],
        rotate: [0, b.dx > 0 ? 12 : -12, 0],
      }}
      transition={{ duration: 1.5, delay: b.delay, ease: "easeOut" }}
    >
      <Bat size={b.size} flap={0.14} />
    </motion.div>
  ));
}

function Legend({ kind, label, value, color, note }: { kind: DropKind; label: string; value: string; color: string; note: string }) {
  return (
    <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
      <span className="size-7 shrink-0">
        <DropArt kind={kind} />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block font-bold text-white">
          {label}{" "}
          <span className="font-black" style={{ color }}>
            {value}
          </span>
        </span>
        <span className="block text-[11px] text-[#a9c99a]">{note}</span>
      </span>
    </li>
  );
}

function Stat({ label, value, color, children }: { label: string; value: string; color?: string; children?: ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a9c99a]">{label}</div>
      <div className="mt-0.5 text-xl font-black tabular-nums text-white" style={{ color }}>
        {value}
      </div>
      {children}
    </div>
  );
}

export default function HauntedAppleGame({ onClose }: Props) {
  const { muted, toggleMute, unlock, play, setAmbience } = useSounds(SOUNDS);
  const reduceMotion = useReducedMotion();
  const best = useBest();
  const [phase, setPhase] = useState<Phase>("intro");
  const [view, setView] = useState<View | null>(null);
  const [newBest, setNewBest] = useState(false);
  const area = useRef<HTMLDivElement>(null);
  const world = useRef<World | null>(null);
  const keys = useRef({ left: false, right: false });
  const raf = useRef(0);

  const stop = useCallback(() => cancelAnimationFrame(raf.current), []);
  useEffect(() => stop, [stop]);

  const start = () => {
    unlock();
    setAmbience(1);
    stop();
    const el = area.current;
    if (!el) return;
    const s = newWorld(el.clientWidth, el.clientHeight);
    world.current = s;
    setNewBest(false);
    setView(snapshot(s));
    setPhase("playing");
    let last = performance.now();

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const pick = <T,>(list: readonly T[]) => list[Math.floor(Math.random() * list.length)];
    const pop = (x: number, y: number, text: string, color: string, big = false) => {
      s.pops.push({ id: s.nextId++, x, y, text, color, big, born: s.clock });
    };
    const taunt = (which: keyof typeof TAUNTS) => {
      s.taunt = { id: s.nextId++, text: pick(TAUNTS[which]), until: s.clock + 1.4 };
    };
    const banner = (wave: number) => {
      const w = WAVES[wave];
      s.banner = { id: s.nextId++, text: w.name, sub: `Wave ${wave + 1} · ${w.blurb}`, born: s.clock };
    };
    const burst = (x: number, y: number, color: string, n = 7) => {
      for (let i = 0; i < n; i++) {
        const a = rand(-Math.PI, 0);
        const v = rand(90, 260);
        s.sparks.push({ id: s.nextId++, x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, color, born: s.clock });
      }
    };
    const spawn = (heat: number, rage: boolean) => {
      const roll = Math.random();
      const slimeP = rage ? 0.42 : 0.2 + heat * 0.18;
      const curseP = heat < 0.12 ? 0 : 0.08 + heat * 0.1;
      const appleP = 0.07;
      let kind: DropKind = "pearl";
      if (roll < slimeP) kind = "slime";
      else if (roll < slimeP + curseP) kind = "curse";
      else if (roll < slimeP + curseP + appleP) kind = "apple";
      const treat = kind === "pearl" || kind === "apple";
      s.drops.push({
        id: s.nextId++,
        kind,
        x: Math.min(s.w - 24, Math.max(24, s.ghostX + rand(-40, 40))),
        y: GHOST_Y + 30,
        vx: treat ? rand(-0.5, 0.5) * s.w * 0.16 : 0,
        vy: s.h * (0.18 + heat * 0.2) * (rage ? 1.2 : 1),
        spin: rand(-200, 200),
        sway: kind === "curse" ? rand(28, 60) : 0,
        phase: rand(0, Math.PI * 2),
        born: s.clock,
      });
    };
    const finish = (outcome: Outcome) => {
      s.outcome = outcome;
      if (outcome === "won") {
        s.timeBonus = Math.round(TIME_LIMIT - s.played) * TIME_BONUS;
        s.score += s.timeBonus;
      }
      if (s.score > readBest()) {
        writeBest(s.score);
        setNewBest(true);
      }
      setView(snapshot(s));
      // the music drops back so the scream (or the fanfare) cuts through
      setAmbience(0.35);
      play(outcome === "won" ? "win" : "scream");
      setPhase(outcome === "won" ? "won" : "lost");
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      s.clock += dt;
      // the play area can change size (rotating a phone)
      s.w = el.clientWidth;
      s.h = el.clientHeight;
      const cup = cupSize(s.w);
      const progress = s.fill / GOAL;

      // 3-2-1, then the clock runs
      if (s.countdown > 0) {
        s.countdown -= dt;
        if (s.countdown <= 0) {
          s.countdown = 0;
          banner(0);
        }
      } else {
        s.played += dt;
      }
      const live = s.countdown <= 0;
      // how nasty things are: the fuller the cup or the later it is, the worse
      const heat = live ? Math.min(1, Math.max(progress, s.played / TIME_LIMIT)) : 0;
      const rage = live && s.clock < s.rageUntil;
      const slowed = s.clock < s.slowUntil;

      // the cup chases the finger, or the arrow keys; sluggishly while slimed
      const keyDir = (keys.current.right ? 1 : 0) - (keys.current.left ? 1 : 0);
      if (keyDir) s.targetX += keyDir * s.w * (slowed ? 0.5 : 1.15) * dt;
      s.targetX = Math.min(s.w - cup.w / 2, Math.max(cup.w / 2, s.targetX));
      const prevX = s.cupX;
      s.cupX += (s.targetX - s.cupX) * Math.min(1, dt * (slowed ? 4.5 : 16));
      const speed = (s.cupX - prevX) / Math.max(dt, 1e-3);
      s.tilt += (Math.max(-14, Math.min(14, speed * 0.02)) - s.tilt) * Math.min(1, dt * 10);

      // a new wave as the cup fills
      if (live) {
        const wave = WAVES.filter((w) => progress >= w.at).length - 1;
        if (wave > s.wave) {
          s.wave = wave;
          banner(wave);
        }
      }

      // every so often the Phantom flies into a rage
      if (live && !rage) {
        s.rageIn -= dt;
        if (s.rageIn <= 0) {
          s.rageUntil = s.clock + RAGE_LASTS;
          s.rageIn = RAGE_LASTS + rand(RAGE_EVERY[0], RAGE_EVERY[1]);
          taunt("rage");
          play("laugh");
        }
      }

      // the ghost drifts and changes its mind, faster as things heat up, frantic in a rage
      const ghostSpeed = s.w * (0.22 + heat * 0.32) * (rage ? 2 : 1);
      s.ghostTurnIn -= dt;
      if (s.ghostTurnIn <= 0) {
        s.ghostV = (Math.random() < 0.5 ? -1 : 1) * ghostSpeed * rand(0.6, 1.2);
        s.ghostTurnIn = rage ? rand(0.25, 0.65) : rand(0.7, 2.1);
      }
      s.ghostX += s.ghostV * dt;
      const margin = Math.min(110, s.w * 0.2);
      if (s.ghostX < margin || s.ghostX > s.w - margin) {
        s.ghostX = Math.min(s.w - margin, Math.max(margin, s.ghostX));
        s.ghostV = -s.ghostV;
      }

      // it drops things
      if (live) {
        s.spawnIn -= dt;
        if (s.spawnIn <= 0) {
          s.spawnIn = (0.9 - heat * 0.45) * (rage ? 0.5 : 1) + rand(0, 0.2);
          spawn(heat, rage);
          if (rage && Math.random() < 0.25) spawn(heat, rage);
        }
      }

      // fall, and catch
      const cupTop = s.h - CUP_BOTTOM - cup.h + cup.h * 0.06;
      const gravity = s.h * (0.3 + heat * 0.35);
      const kept: Drop[] = [];
      for (const d of s.drops) {
        const r = RADIUS[d.kind];
        const prevY = d.y;
        d.vy += gravity * dt;
        d.y += d.vy * dt;
        if (d.kind === "slime" && d.y < cupTop - 150) {
          // slime hunts the cup, but commits to its path for the last stretch so a late dodge can work
          const dir = Math.max(-1, Math.min(1, (s.cupX - d.x) / 30));
          const cap = s.w * (rage ? 0.38 : 0.26);
          d.vx = Math.max(-cap, Math.min(cap, d.vx + dir * s.w * (rage ? 1 : 0.55) * dt));
        }
        d.x += d.vx * dt;
        if (d.sway) d.x += Math.cos((s.clock - d.born) * 4.5 + d.phase) * d.sway * 4.5 * dt;
        if (d.x < r) {
          d.x = r;
          d.vx = Math.abs(d.vx);
        } else if (d.x > s.w - r) {
          d.x = s.w - r;
          d.vx = -Math.abs(d.vx);
        }
        const inMouth = d.y + r >= cupTop && prevY - r <= cupTop + 30 && Math.abs(d.x - s.cupX) < cup.w * 0.42;
        if (inMouth) {
          if (d.kind === "slime") {
            s.lives -= 1;
            s.fill = Math.max(0, s.fill - SLIME_SPILL);
            s.streak = 0;
            s.hits += 1;
            s.hitKind = "slime";
            s.lastHit = s.clock;
            s.slowUntil = s.clock + SLOW_SECONDS;
            pop(d.x, cupTop - 24, "SPLAT!", SLIME, true);
            burst(d.x, cupTop, SLIME, 10);
            taunt("slime");
            play("laugh");
          } else if (d.kind === "curse") {
            s.fill = Math.max(0, s.fill - CURSE_DRAIN);
            s.streak = 0;
            s.hits += 1;
            s.hitKind = "curse";
            s.lastHit = s.clock;
            pop(d.x, cupTop - 24, `−${CURSE_DRAIN} cursed`, CURSE, true);
            burst(d.x, cupTop, CURSE, 8);
            taunt("curse");
            play("wail");
          } else {
            const gain = d.kind === "apple" ? APPLE_VALUE : 1;
            s.streak += 1;
            s.bestStreak = Math.max(s.bestStreak, s.streak);
            s.caught += 1;
            const mult = multiplier(s.streak);
            const bonus = s.streak % STREAK_STEP === 0 ? 1 : 0;
            s.fill = Math.min(GOAL, s.fill + gain + bonus);
            s.score += POINTS[d.kind] * mult;
            pop(d.x, cupTop - 24, `+${gain}`, d.kind === "apple" ? GOLD : ACCENT, d.kind === "apple");
            if (bonus) pop(s.cupX, cupTop - 56, `Streak ${s.streak}! +1 pearl`, "#ffffff");
            burst(d.x, cupTop, d.kind === "apple" ? GOLD : ACCENT, d.kind === "apple" ? 10 : 5);
            play("shloop");
          }
          continue;
        }
        if (d.y - r > s.h) {
          // a missed treat breaks the streak; a missed hazard is a dodge
          if (d.kind === "pearl" || d.kind === "apple") s.streak = 0;
          continue;
        }
        kept.push(d);
      }
      s.drops = kept;

      for (const p of s.sparks) {
        p.vy += 1100 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
      }
      s.sparks = s.sparks.filter((p) => s.clock - p.born < 0.55);
      s.pops = s.pops.filter((p) => s.clock - p.born < 0.9);
      if (s.banner && s.clock - s.banner.born > 1.9) s.banner = null;
      if (s.taunt && s.clock > s.taunt.until) s.taunt = null;

      setView(snapshot(s));
      if (s.fill >= GOAL) {
        finish("won");
        return;
      }
      if (s.lives <= 0) {
        finish("slimed");
        return;
      }
      if (live && s.played >= TIME_LIMIT) {
        finish("time");
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
  const pct = Math.round(fill * 100);
  const lives = view?.lives ?? LIVES;
  const timeLeft = view?.timeLeft ?? TIME_LIMIT;
  const urgent = phase === "playing" && timeLeft <= 10;
  const playing = phase === "playing";
  const rage = playing && !!view?.rage;
  const ghostW = view ? Math.min(250, Math.max(160, view.w * 0.48)) : 220;
  // the art is square; this puts the broom, where the drops come from, at GHOST_Y
  const ghostTop = GHOST_Y - ghostW * 0.5;
  const outcome = view?.outcome;

  return (
    <div className="relative h-full w-full select-none overflow-hidden bg-[#0b1409] text-[#f3ffe9]">
      <style>{`
        @keyframes ha-leaf {
          0% { transform: translate3d(0, -12vh, 0) rotate(0deg); opacity: 0; }
          8% { opacity: 0.75; }
          92% { opacity: 0.6; }
          100% { transform: translate3d(var(--dx), 108vh, 0) rotate(680deg); opacity: 0; }
        }
        @keyframes ha-fog { 0% { transform: translateX(-6%) scale(1); } 100% { transform: translateX(6%) scale(1.08); } }
        @keyframes ha-drift { 0% { transform: scale(1.04) translate3d(0, 0, 0); } 100% { transform: scale(1.1) translate3d(-1.5%, -1%, 0); } }
        @keyframes ha-flash { 0%, 29%, 33%, 74%, 78%, 100% { opacity: 0; } 29.6% { opacity: 0.4; } 30.4% { opacity: 0.06; } 31.2% { opacity: 0.3; } 74.6% { opacity: 0.32; } 75.6% { opacity: 0; } 76.2% { opacity: 0.18; } }
        @keyframes ha-bolt-a { 0%, 29%, 32%, 100% { opacity: 0; } 29.6%, 31.2% { opacity: 1; } 30.4% { opacity: 0.2; } }
        @keyframes ha-bolt-b { 0%, 74%, 77%, 100% { opacity: 0; } 74.6%, 76.2% { opacity: 1; } 75.6% { opacity: 0; } }
        @keyframes ha-flap { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(-0.5); } }
        @keyframes ha-bat-fly { 0% { transform: translate3d(-12%, 0, 0); } 65%, 100% { transform: translate3d(112%, 0, 0); } }
        @keyframes ha-bat-bob { 0%, 100% { transform: translateY(0) rotate(-7deg); } 50% { transform: translateY(var(--dy)) rotate(7deg); } }
        @keyframes ha-eyes {
          0%, 42%, 100% { opacity: 0; transform: scaleY(1); }
          8%, 18%, 21%, 32% { opacity: 1; transform: scaleY(1); }
          19.5% { opacity: 1; transform: scaleY(0.1); }
        }
        @keyframes ha-spider { 0%, 100% { transform: translateY(40px) rotate(-5deg); } 50% { transform: translateY(150px) rotate(5deg); } }
        @keyframes ha-wobble { 0%, 100% { transform: scale(1, 1); } 50% { transform: scale(1.1, 0.9); } }
        @keyframes ha-bubble { 0% { transform: translateY(0); opacity: 0; } 25% { opacity: 0.85; } 100% { transform: translateY(-34px); opacity: 0; } }
        @keyframes ha-flicker { 0%, 100% { opacity: 1; } 92% { opacity: 1; } 93% { opacity: 0.5; } 94% { opacity: 1; } 97% { opacity: 0.75; } 98% { opacity: 1; } }
        .ha-leaf { animation: ha-leaf var(--dur) linear var(--delay) infinite; }
        .ha-fog { animation: ha-fog 9s ease-in-out infinite alternate; }
        .ha-wobble { animation: ha-wobble 0.6s ease-in-out infinite; }
        .ha-bubble { animation: ha-bubble 2.4s ease-out infinite; }
        .ha-flicker { animation: ha-flicker 6s infinite; }
        .ha-fog-back { animation: ha-fog 13s ease-in-out -5s infinite alternate-reverse; }
        .ha-drift { animation: ha-drift 32s ease-in-out infinite alternate; }
        .ha-flash { animation: ha-flash 17s linear infinite; }
        .ha-bolt-a { animation: ha-bolt-a 17s linear infinite; }
        .ha-bolt-b { animation: ha-bolt-b 17s linear infinite; }
        .ha-wing { transform-origin: 50px 15px; animation: ha-flap var(--flap) ease-in-out infinite; }
        .ha-bat-fly { animation: ha-bat-fly var(--dur) linear var(--delay) infinite; }
        .ha-bat-bob { animation: ha-bat-bob var(--bob) ease-in-out infinite; }
        .ha-eyes { animation: ha-eyes var(--dur) ease-in-out var(--delay) infinite; }
        .ha-spider { animation: ha-spider 9s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ha-leaf, .ha-fog, .ha-fog-back, .ha-wobble, .ha-bubble, .ha-flicker, .ha-drift, .ha-flash, .ha-bolt-a, .ha-bolt-b, .ha-wing,
          .ha-bat-fly, .ha-bat-bob, .ha-eyes, .ha-spider { animation: none; }
        }
      `}</style>

      {/* the night: the moonlit lake terrace, a storm, bats, eyes in the dark, fog, falling leaves and a vignette */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* on a narrow screen, keep the moon and the castle in view */}
        <div className="ha-drift absolute inset-0">
          <Image
            src={BACKDROP}
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            className="object-cover object-[78%_50%] sm:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#050b04]/30" />
        {/* lightning: two strikes a cycle, each with its own fork */}
        <div className="ha-flash absolute inset-0 bg-[#e6fff0] opacity-0" />
        <div className="ha-bolt-a absolute left-[16%] top-0 h-[42%] opacity-0 drop-shadow-[0_0_10px_rgba(220,255,230,0.9)]">
          <Bolt />
        </div>
        <div className="ha-bolt-b absolute right-[30%] top-0 h-[30%] -scale-x-100 opacity-0 drop-shadow-[0_0_10px_rgba(220,255,230,0.9)]">
          <Bolt />
        </div>
        {!reduceMotion && (
          <>
            {BATS.map((b, i) => (
              <div key={i} className={`absolute inset-x-0 ${b.flip ? "-scale-x-100" : ""}`} style={{ top: `${b.top}%` }}>
                <div className="ha-bat-fly w-full" style={{ "--dur": `${b.dur}s`, "--delay": `-${b.delay}s` } as CSSProperties}>
                  <div
                    className="ha-bat-bob inline-block drop-shadow-[0_0_5px_rgba(139,255,60,0.35)]"
                    style={{ "--dy": `${b.dy}px`, "--bob": `${(b.dur / 7).toFixed(2)}s` } as CSSProperties}
                  >
                    <Bat size={b.size} flap={b.flap} />
                  </div>
                </div>
              </div>
            ))}
            {EYES.map((e, i) => (
              <span
                key={i}
                className="ha-eyes absolute flex opacity-0"
                style={{ left: `${e.left}%`, top: `${e.top}%`, gap: e.size * 1.4, "--dur": `${e.dur}s`, "--delay": `-${e.delay}s` } as CSSProperties}
              >
                {[12, -12].map((tilt) => (
                  <span
                    key={tilt}
                    className="block rounded-full"
                    style={{
                      width: e.size * 1.7,
                      height: e.size,
                      background: `radial-gradient(circle at 50% 55%, #ffe1a8 0%, ${EYE} 45%, #6b0d05 100%)`,
                      boxShadow: `0 0 ${e.size * 2}px ${EYE}`,
                      transform: `rotate(${tilt}deg)`,
                    }}
                  />
                ))}
              </span>
            ))}
            {/* the thread starts above the top edge, so it never shows its end */}
            <div className="ha-spider absolute -top-[200px] left-[7%] flex flex-col items-center drop-shadow-[0_0_6px_rgba(139,255,60,0.4)]">
              <span className="block h-[200px] w-px bg-white/30" />
              <Spider />
            </div>
          </>
        )}
        {/* fog rolling over the lake and the terrace */}
        <div
          className="ha-fog absolute inset-x-[-15%] bottom-0 h-1/2 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 45% 40% at 25% 85%, rgba(205,255,215,0.32), transparent 70%), radial-gradient(ellipse 50% 35% at 75% 95%, rgba(163,255,132,0.28), transparent 70%)",
          }}
        />
        <div
          className="ha-fog-back absolute inset-x-[-15%] bottom-[18%] h-1/4 opacity-50"
          style={{ background: "radial-gradient(ellipse 60% 45% at 55% 60%, rgba(190,255,200,0.22), transparent 70%)" }}
        />
        {!reduceMotion &&
          LEAVES.map((l, i) => (
            <span
              key={i}
              className="ha-leaf absolute top-0"
              style={{ left: `${l.left}%`, "--dur": `${l.dur}s`, "--delay": `-${l.delay}s`, "--dx": `${l.dx}px` } as CSSProperties}
            >
              <Leaf size={l.size} />
            </span>
          ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(3,8,3,0.8)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-[#0b1409]/80 to-transparent" />
      </div>

      {/* flash when slime or a phantom pearl lands in the cup */}
      <AnimatePresence>
        {view && view.hits > 0 && (
          <motion.div
            key={view.hits}
            className="pointer-events-none absolute inset-0 z-20"
            style={{ background: view.hitKind === "slime" ? SLIME : CURSE }}
            initial={{ opacity: 0.35 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {/* the screen edge burns green while the Phantom rages */}
      <AnimatePresence>
        {rage && (
          <motion.div
            key="rage"
            className="pointer-events-none absolute inset-0 z-20"
            style={{ boxShadow: "inset 0 0 110px 20px rgba(139,255,60,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 0.95, 0.4] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <MuteButton muted={muted} onToggle={toggleMute} />

      {/* title and stats */}
      <div className="pointer-events-none absolute inset-x-0 top-[max(0.75rem,env(safe-area-inset-top))] z-20 flex flex-col items-center gap-2 px-3">
        <div className="flex max-w-full items-center justify-center gap-2.5 px-14 sm:px-16">
          <h2
            className="ha-flicker font-creepster text-2xl uppercase tracking-wider drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] sm:text-3xl"
            style={{ color: ACCENT, textShadow: "0 0 18px rgba(163,255,132,0.45)" }}
          >
            Boba Drop
          </h2>
          {playing && view && (
            <span
              key={view.wave}
              className="hidden rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:inline-block"
            >
              Wave {view.wave + 1} · {WAVES[view.wave].name}
            </span>
          )}
        </div>
        <div className="flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/10 bg-black/45 px-3.5 py-2 text-sm font-bold text-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md sm:gap-x-4 sm:px-4">
          <span className="flex items-center gap-1" aria-label={`${lives} lives left`}>
            {Array.from({ length: LIVES }, (_, i) => (
              <Heart
                key={i}
                className="h-4 w-4 transition-all"
                style={{ color: ACCENT, fill: i < lives ? ACCENT : "transparent", opacity: i < lives ? 1 : 0.35 }}
              />
            ))}
          </span>
          <span className="flex items-center gap-1.5" aria-label={`cup ${pct}% full`}>
            <CupSoda className="h-4 w-4" style={{ color: ACCENT }} />
            <span className="relative h-2.5 w-16 overflow-hidden rounded-full bg-white/15 sm:w-28">
              <span
                className="block h-full rounded-full transition-[width] duration-300"
                style={{ width: `${fill * 100}%`, background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`, boxShadow: `0 0 10px ${ACCENT}` }}
              />
              {WAVES.slice(1).map((w) => (
                <span key={w.at} className="absolute top-0 h-full w-px bg-black/60" style={{ left: `${w.at * 100}%` }} />
              ))}
            </span>
            <span className="w-8 text-right tabular-nums sm:w-9">{pct}%</span>
          </span>
          <span
            className={`flex items-center gap-1 tabular-nums ${urgent ? "animate-pulse" : ""}`}
            style={{ color: urgent ? DANGER : undefined }}
            aria-label={`${Math.ceil(timeLeft)} seconds left`}
          >
            <Timer className="h-4 w-4" />
            {clockText(timeLeft)}
          </span>
          <span className="flex items-center gap-1 tabular-nums" aria-label={`score ${view?.score ?? 0}`}>
            <Zap className="h-4 w-4" style={{ color: GOLD }} />
            {(view?.score ?? 0).toLocaleString()}
          </span>
        </div>
        <AnimatePresence>
          {rage && (
            <motion.span
              key="rage-chip"
              className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-sm"
              style={{ borderColor: "rgba(139,255,60,0.5)", background: "rgba(11,42,5,0.7)", color: SLIME }}
              initial={{ opacity: 0, y: -6, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.08, 1] }}
              exit={{ opacity: 0, y: -6, scale: 0.8 }}
              transition={{ scale: { duration: 0.5, repeat: Infinity } }}
            >
              <Skull className="h-3.5 w-3.5" /> Phantom rage
            </motion.span>
          )}
        </AnimatePresence>
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
          style={{ left: (view?.ghostX ?? 0) - ghostW / 2, top: ghostTop, width: ghostW, opacity: view ? 1 : 0 }}
          animate={
            view?.shaking
              ? { y: -6, rotate: [0, -10, 10, -6, 0], scale: 1.15 }
              : rage
                ? { y: [0, -14, 0], rotate: [-4, 4, -4], scale: 1.12 }
                : { y: [0, -8, 0], rotate: 0, scale: 1 }
          }
          transition={
            view?.shaking
              ? { duration: 0.6 }
              : rage
                ? { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <AnimatePresence>
            {rage && (
              <motion.span
                key="glow"
                className="absolute -inset-[20%] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(139,255,60,0.55) 0%, rgba(139,255,60,0) 60%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </AnimatePresence>
          <GhostArt rage={rage} dir={view?.ghostDir} size="250px" />
        </motion.div>

        {/* a rage cracks the sky open and lets the bats out */}
        <AnimatePresence>
          {rage && (
            <motion.div
              key="rage-flash"
              className="pointer-events-none absolute inset-0 z-0 bg-[#e6fff0]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.45, 0.05, 0.3, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, times: [0, 0.15, 0.35, 0.5, 1] }}
            />
          )}
        </AnimatePresence>
        {rage && !reduceMotion && view && <BatSwarm x={view.ghostX} y={GHOST_Y} />}

        {/* what the Phantom has to say */}
        <AnimatePresence>
          {playing && view?.taunt && (
            <motion.div
              key={view.taunt.id}
              className="pointer-events-none absolute z-20"
              style={{ left: view.ghostX, top: ghostTop + ghostW * 0.14, x: "-50%", y: "-100%" }}
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <span className="relative block whitespace-nowrap rounded-2xl bg-white px-3 py-1.5 text-xs font-black uppercase tracking-wider text-[#10240a] shadow-[0_6px_20px_rgba(0,0,0,0.5)]">
                {view.taunt.text}
                <span className="absolute -bottom-1 left-1/2 size-3 -translate-x-1/2 rotate-45 bg-white" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* falling things */}
        {view?.drops.map((d) => {
          const r = RADIUS[d.kind];
          const spin = d.kind === "pearl" || d.kind === "curse" ? 0 : (d.spin * d.y) / 600;
          return (
            <div
              key={d.id}
              className="pointer-events-none absolute left-0 top-0 z-10 will-change-transform"
              style={{ width: r * 2, height: r * 2, transform: `translate3d(${d.x - r}px, ${d.y - r}px, 0) rotate(${spin}deg)` }}
            >
              <DropArt kind={d.kind} />
            </div>
          );
        })}

        {/* sparks on a catch */}
        {view?.sparks.map((p) => (
          <span
            key={p.id}
            className="pointer-events-none absolute left-0 top-0 z-10 size-1.5 rounded-full"
            style={{
              background: p.color,
              boxShadow: `0 0 6px ${p.color}`,
              opacity: Math.max(0, 1 - p.age / 0.55),
              transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
            }}
          />
        ))}

        {/* +1 / SPLAT! */}
        {view?.pops.map((p) => (
          <motion.span
            key={p.id}
            className={`pointer-events-none absolute z-20 -translate-x-1/2 whitespace-nowrap font-black ${p.big ? "text-2xl" : "text-lg"}`}
            style={{ left: p.x, top: p.y, color: p.color, textShadow: `0 0 12px ${p.color}, 0 2px 6px rgba(0,0,0,0.7)` }}
            initial={{ y: 0, opacity: 1, scale: 0.7 }}
            animate={{ y: -44, opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {p.text}
          </motion.span>
        ))}

        {/* the combo badge rides above the cup */}
        <AnimatePresence>
          {playing && view && view.streak >= 3 && (
            <motion.div
              key="combo"
              className="pointer-events-none absolute z-20"
              style={{ left: view.cupX, bottom: CUP_BOTTOM + view.cupH + 10, x: "-50%" }}
              initial={{ opacity: 0, y: 8, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.8 }}
            >
              <motion.span
                key={view.mult}
                className="flex items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-sm"
                style={{ borderColor: "rgba(255,210,63,0.45)", background: "rgba(0,0,0,0.55)", color: GOLD }}
                initial={{ scale: 1.4 }}
                animate={{ scale: 1 }}
              >
                <Flame className="h-3.5 w-3.5" />×{view.mult} · {view.streak} streak
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

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
              filter: view.slowed
                ? `drop-shadow(0 0 22px ${SLIME})`
                : `drop-shadow(0 0 ${12 + fill * 24}px rgba(163,255,132,${0.25 + fill * 0.45}))`,
            }}
          >
            <motion.div
              className="size-full"
              animate={view.shaking ? { x: [0, -8, 8, -5, 5, 0] } : { x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <BobaCup fill={fill} tilt={view.tilt} slowed={view.slowed} />
            </motion.div>
          </div>
        )}

        {/* a glowing floor */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-[#a3ff84]/20 to-transparent" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`, boxShadow: `0 0 12px ${ACCENT}` }}
        />

        {/* wave announcements */}
        <AnimatePresence>
          {playing && view?.banner && (
            <motion.div
              key={view.banner.id}
              className="pointer-events-none absolute inset-x-0 top-[36%] z-30 flex flex-col items-center px-4 text-center"
              initial={{ opacity: 0, scale: 0.6, y: 24 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.6, 1.04, 1, 1.08], y: [24, 0, 0, -16] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.9, times: [0, 0.18, 0.78, 1], ease: "easeOut" }}
            >
              <span
                className="font-creepster text-5xl uppercase tracking-wider sm:text-6xl"
                style={{ color: ACCENT, textShadow: `0 0 30px ${ACCENT}, 0 4px 20px rgba(0,0,0,0.85)` }}
              >
                {view.banner.text}
              </span>
              <span className="mt-1 rounded-full bg-black/55 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                {view.banner.sub}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3… 2… 1… */}
        <AnimatePresence>
          {playing && view && view.countdown > 0 && (
            <motion.div
              key={Math.ceil(view.countdown)}
              className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 1.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <span
                className="font-creepster text-8xl sm:text-9xl"
                style={{ color: ACCENT, textShadow: `0 0 40px ${ACCENT}, 0 6px 24px rgba(0,0,0,0.9)` }}
              >
                {Math.ceil(view.countdown)}
              </span>
              <span className="-mt-2 text-xs font-bold uppercase tracking-[0.3em] text-white/80">Get your cup ready</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* how to play */}
      <AnimatePresence>
        {phase === "intro" && (
          <motion.div
            className="absolute inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/75 px-5 pb-6 pt-24 backdrop-blur-sm sm:items-center sm:pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-sm rounded-3xl border border-white/15 bg-[#0f1f0c]/95 px-5 pb-5 pt-14 text-center shadow-2xl"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <motion.div
                className="pointer-events-none absolute -top-24 left-1/2 w-36 -translate-x-1/2"
                aria-hidden
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <GhostArt size="144px" />
              </motion.div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#a9c99a]">The Spooky Phantom&apos;s</p>
              <h3 className="font-creepster mt-0.5 text-4xl uppercase tracking-wider" style={{ color: ACCENT }}>
                Boba Drop
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#e2f5d6]">
                Slide your cup under the rain of boba. Catch <span className="font-black text-white">{GOAL} pearls</span> before
                the clock runs out. The fuller the cup, the nastier the Phantom gets.
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-left text-xs text-[#e2f5d6] min-[360px]:grid-cols-2">
                <Legend kind="pearl" label="Pearl" value="+1" color={ACCENT} note="fills the cup" />
                <Legend kind="apple" label="Apple" value={`+${APPLE_VALUE}`} color={GOLD} note="rare and golden" />
                <Legend kind="slime" label="Slime" value="−♥" color={DANGER} note="hunts your cup" />
                <Legend kind="curse" label="Phantom" value={`−${CURSE_DRAIN}`} color={CURSE} note="drains the cup" />
              </ul>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-bold text-[#a9c99a]">
                <span className="flex items-center gap-1">
                  <Timer className="h-3.5 w-3.5" style={{ color: ACCENT }} /> {TIME_LIMIT}s on the clock
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" style={{ color: ACCENT, fill: ACCENT }} /> {LIVES} hearts
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="h-3.5 w-3.5" style={{ color: GOLD }} /> streaks up to ×{MAX_MULT}
                </span>
              </div>
              {best > 0 && (
                <p className="mt-2 text-xs text-[#a9c99a]">
                  Best score:{" "}
                  <span className="font-black tabular-nums" style={{ color: GOLD }}>
                    {best.toLocaleString()}
                  </span>
                </p>
              )}
              <button
                type="button"
                onClick={start}
                className="mt-5 w-full cursor-pointer rounded-full py-3.5 font-black uppercase tracking-wider transition-transform hover:scale-103 active:scale-95 shadow-lg shadow-black/40"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT} 0%, ${GOLD} 100%)`,
                  color: "#0c1f07",
                  textShadow: "none",
                }}
              >
                Start Game
              </button>
              <p className="mt-2.5 text-[11px] text-[#a9c99a]">Drag anywhere, or use ← → on a keyboard.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* won / lost */}
      <AnimatePresence>
        {(phase === "won" || phase === "lost") && view && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/70 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-full max-w-sm rounded-3xl border border-white/15 bg-[#0f1f0c]/95 p-5 text-center shadow-2xl"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.3 }}
            >
              {outcome === "won" ? (
                <>
                  <motion.div
                    animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Trophy className="mx-auto h-12 w-12" style={{ color: ACCENT }} />
                  </motion.div>
                  <h3 className="font-creepster mt-2 text-4xl uppercase tracking-wider" style={{ color: ACCENT }}>
                    Cup Filled!
                  </h3>
                  <p className="mt-2 text-sm text-[#d9ecd0]">
                    You filled the cup with <span className="font-black text-white">{clockText(view.timeLeft)}</span> to spare and
                    kept the slime out. The Haunted Apple cup is free!
                  </p>
                </>
              ) : outcome === "time" ? (
                <>
                  <Hourglass className="mx-auto h-11 w-11" style={{ color: DANGER }} />
                  <h3 className="font-creepster mt-2 text-4xl uppercase tracking-wider" style={{ color: DANGER }}>
                    Time&apos;s Up!
                  </h3>
                  <p className="mt-2 text-sm text-[#f8d7dc]">
                    The clock ran out with the cup only <span className="font-black text-white">{pct}%</span> full. Chase the
                    golden apples and keep your streak alive!
                  </p>
                </>
              ) : (
                <>
                  <Skull className="mx-auto h-11 w-11" style={{ color: SLIME }} />
                  <h3 className="font-creepster mt-2 text-4xl uppercase tracking-wider" style={{ color: DANGER }}>
                    Slimed!
                  </h3>
                  <p className="mt-2 text-sm text-[#f8d7dc]">
                    The Phantom&apos;s ectoplasm ruined the cup at <span className="font-black text-white">{pct}%</span> full. The
                    slime hunts you, so keep moving!
                  </p>
                </>
              )}

              <div className="mt-5 grid grid-cols-2 gap-2 text-left">
                <Stat label="Score" value={view.score.toLocaleString()} color={GOLD}>
                  {newBest && (
                    <motion.span
                      className="absolute -top-2 right-2 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-[#10240a]"
                      style={{ background: GOLD }}
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: -6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 14, delay: 0.7 }}
                    >
                      New best!
                    </motion.span>
                  )}
                </Stat>
                <Stat label="Best streak" value={`${view.bestStreak}`} />
                <Stat label="Treats caught" value={`${view.caught}`} />
                {outcome === "won" ? (
                  <Stat label="Time bonus" value={`+${view.timeBonus.toLocaleString()}`} color={ACCENT} />
                ) : (
                  <Stat label="Cup filled" value={`${pct}%`} color={DANGER} />
                )}
              </div>
              {!newBest && best > 0 && (
                <p className="mt-2 text-[11px] text-[#a9c99a]">
                  Best: <span className="font-black tabular-nums text-white">{best.toLocaleString()}</span>
                </p>
              )}

              <div className="mt-5 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={start}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full py-3 font-black transition-transform hover:scale-103 active:scale-95 shadow-lg shadow-black/40"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT} 0%, ${GOLD} 100%)`,
                    color: "#0c1f07",
                    textShadow: "none",
                  }}
                >
                  <RotateCcw className="h-4 w-4" />
                  {outcome === "won" ? "Play again" : "Try again"}
                </button>
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full cursor-pointer py-1 text-sm text-[#9fb894] transition-colors hover:text-white"
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
