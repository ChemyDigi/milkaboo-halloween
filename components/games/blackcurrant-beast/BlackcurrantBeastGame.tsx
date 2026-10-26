"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion, type TargetAndTransition } from "framer-motion";
import { Check, Eye, Heart, RotateCcw, Trophy, Undo2 } from "lucide-react";
import { useSounds } from "@/hooks/useSounds";
import MuteButton from "@/components/MuteButton";

interface Props {
  onClose?: () => void;
}

const ACCENT = "#c084fc";
const GHOST = "/games/blackcurrant-beast/Neon Purple Horned Ghost Mascot.png";
const POSTER = "/games/blackcurrant-beast/Possessed Blackcurrant Bubble Tea.png";

/** the four MilkaBoo cups; every flavour is on the table twice */
const FLAVOURS = [
  { name: "Haunted Apple", src: "/games/haunted-apple/cup-apple-tilt.png", color: "#a3ff84" },
  { name: "Blackcurrant Beast", src: "/games/blackcurrant-beast/cup-currant-tilt.png", color: "#c084fc" },
  { name: "Casper Custard", src: "/games/casper-custard/cup-custard.png", color: "#fed778" },
  { name: "Wicked Rose", src: "/games/wicked-rose/cup-rose-tilt.png", color: "#ff7cbe" },
];
const CUPS = FLAVOURS.length * 2;
/** cup id → flavour index; the two cups of a flavour are interchangeable */
const flavourOf = (cup: number) => cup % FLAVOURS.length;

const MEMORIZE_SECONDS = 10;
const LIVES = 3;
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

function CupArt({ cup, dim = false }: { cup: number; dim?: boolean }) {
  const f = FLAVOURS[flavourOf(cup)];
  return (
    <div className="relative aspect-[4/5] w-full">
      <Image
        src={f.src}
        alt={f.name}
        fill
        sizes="(max-width: 640px) 22vw, 130px"
        draggable={false}
        className="object-contain object-bottom transition-opacity"
        style={{ filter: `drop-shadow(0 6px 10px rgba(0,0,0,0.55)) drop-shadow(0 0 10px ${f.color}55)`, opacity: dim ? 0.35 : 1 }}
      />
    </div>
  );
}

/** where the ghost floats for each phase (percentages are of its own size) */
const GHOST_POSE: Record<Phase, TargetAndTransition> = {
  intro: { x: "160%", y: "-120%", scale: 0.3, rotate: 20, opacity: 0 },
  memorize: { x: "58%", y: "-62%", scale: 0.36, rotate: 10, opacity: 1 },
  haunt: {
    x: ["150%", "0%", "-4%", "0%"],
    y: ["-90%", "-6%", "-2%", "-6%"],
    scale: [0.35, 1.25, 1.2, 1.25],
    rotate: [24, -6, 4, 0],
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  arrange: { x: "58%", y: "-62%", scale: 0.36, rotate: -8, opacity: 1 },
  won: { x: "200%", y: "-180%", scale: 0.15, rotate: 50, opacity: 0, transition: { duration: 0.9, ease: "easeIn" } },
  lost: { x: "55%", y: "-60%", scale: 0.5, rotate: -4, opacity: 1 },
};

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
  const [activeSlot, setActiveSlot] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [tries, setTries] = useState(0);
  const [memLeft, setMemLeft] = useState(MEMORIZE_SECONDS);
  const [round, setRound] = useState(0);
  const [taunting, setTaunting] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

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
    setActiveSlot(0);
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
      setActiveSlot(0);
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

  const nextEmpty = (list: (number | null)[], from: number) => {
    for (let k = 0; k < CUPS; k++) {
      const i = (from + k) % CUPS;
      if (list[i] === null) return i;
    }
    return -1;
  };

  const placeCup = (cup: number) => {
    if (phase !== "arrange" || wrong.length) return;
    const at = slots[activeSlot] === null ? activeSlot : nextEmpty(slots, activeSlot);
    if (at < 0) return;
    const next = slots.map((c, i) => (i === at ? cup : c));
    setSlots(next);
    setTray((t) => t.filter((c) => c !== cup));
    setActiveSlot(Math.max(0, nextEmpty(next, at)));
    play("shloop");
  };

  const tapSlot = (i: number) => {
    if (phase !== "arrange" || wrong.length || locked[i]) return;
    const cup = slots[i];
    if (cup === null) {
      setActiveSlot(i);
      return;
    }
    setSlots((s) => s.map((c, k) => (k === i ? null : c)));
    setTray((t) => [...t, cup]);
    setActiveSlot(i);
  };

  const clearTable = () => {
    if (phase !== "arrange" || wrong.length) return;
    setTray((t) => [...t, ...slots.filter((c, i): c is number => c !== null && !locked[i])]);
    const next = slots.map((c, i) => (locked[i] ? c : null));
    setSlots(next);
    setActiveSlot(Math.max(0, nextEmpty(next, 0)));
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
      setActiveSlot(Math.max(0, nextEmpty(next, 0)));
    }, 1100);
  };

  const filled = slots.filter((c) => c !== null).length;
  const arranging = phase === "arrange";
  const showTray = phase === "haunt" || phase === "arrange";

  return (
    <div className="relative h-full w-full select-none overflow-y-auto overflow-x-hidden bg-[#120a1f] text-[#f6f0ff]">
      {/* a dim, blurred copy of the poster behind everything */}
      <div
        className="pointer-events-none fixed inset-0 scale-110 bg-cover bg-center opacity-20 blur-2xl"
        style={{ backgroundImage: `url("${encodeURI(POSTER)}")` }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,4,20,0.85)_100%)]" />

      <MuteButton muted={muted} onToggle={toggleMute} />

      <div className="relative z-10 mx-auto flex min-h-full w-full max-w-2xl flex-col items-center px-4 pb-8 pt-20 sm:pt-6">
        {/* title and stats */}
        <h2 className="font-creepster text-center text-2xl uppercase tracking-wider sm:text-3xl" style={{ color: ACCENT }}>
          The Beast&apos;s Cup Shuffle
        </h2>
        <div className="mt-1 flex h-6 items-center gap-4 text-sm font-bold text-white/85">
          {phase === "memorize" && (
            <span className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" style={{ color: ACCENT }} />
              Memorise the order · {memLeft}s
            </span>
          )}
          {phase === "haunt" && <span className="text-[#e9b8ff]">The Beast is snatching the cups…</span>}
          {(arranging || phase === "won" || phase === "lost") && (
            <>
              <span className="flex items-center gap-1" aria-label={`${lives} tries left`}>
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

        {/* the table */}
        <LayoutGroup id={`beast-${round}`}>
          <div className="relative mt-8 w-full sm:mt-14">
            <div
              className="relative rounded-[2rem] border border-[#c084fc]/25 p-3 shadow-[0_30px_60px_rgba(0,0,0,0.6),0_0_50px_rgba(192,132,252,0.18)] sm:p-5"
              style={{
                background:
                  "repeating-linear-gradient(92deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 22px), linear-gradient(180deg, #3a1d5a 0%, #26113f 60%, #1c0b30 100%)",
              }}
            >
              {/* a glowing runner down the middle */}
              <div className="pointer-events-none absolute inset-x-6 top-1/2 h-10 -translate-y-1/2 rounded-full bg-[#c084fc]/10 blur-xl" />

              <div className="relative grid grid-cols-4 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-6">
                {slots.map((cup, i) => {
                  const isWrong = wrong.includes(i);
                  const isLocked = locked[i] && (arranging || phase === "won");
                  const isActive = arranging && !wrong.length && cup === null && i === activeSlot;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => tapSlot(i)}
                      disabled={!arranging || isLocked}
                      aria-label={cup === null ? `Empty spot ${i + 1}` : `Spot ${i + 1}: ${FLAVOURS[flavourOf(cup)].name}`}
                      className="group relative flex aspect-[3/4] flex-col items-center justify-end rounded-2xl pb-3 enabled:cursor-pointer"
                    >
                      {/* coaster */}
                      <span
                        className="absolute inset-x-[8%] bottom-1 h-[22%] rounded-[50%] border transition-all duration-300"
                        style={{
                          borderColor: isWrong
                            ? "#ff3b5c"
                            : isLocked
                              ? "#4ade80"
                              : isActive
                                ? ACCENT
                                : "rgba(255,255,255,0.12)",
                          background: isWrong
                            ? "rgba(255,59,92,0.25)"
                            : isLocked
                              ? "rgba(74,222,128,0.18)"
                              : "rgba(0,0,0,0.35)",
                          boxShadow: isActive ? `0 0 18px ${ACCENT}` : isLocked ? "0 0 14px rgba(74,222,128,0.5)" : "none",
                        }}
                      />
                      <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 text-[10px] font-black text-white/30">
                        {i + 1}
                      </span>
                      {isActive && (
                        <motion.span
                          className="absolute bottom-[30%] text-2xl font-black"
                          style={{ color: ACCENT }}
                          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          +
                        </motion.span>
                      )}

                      {cup !== null && (
                        <motion.div
                          key={`slot-cup-${round}-${cup}`}
                          layoutId={arranging ? `cup-${cup}` : undefined}
                          className="relative z-10 w-[92%]"
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
              </div>

              {/* purple fog that hides the snatch */}
              <AnimatePresence>
                {phase === "haunt" && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-20 rounded-[2rem]"
                    style={{ background: "radial-gradient(ellipse at center, rgba(168,85,247,0.95) 0%, rgba(76,29,149,0.92) 55%, rgba(30,10,50,0.85) 100%)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: HAUNT_MS / 1000, times: [0, 0.25, 0.7, 1] }}
                  />
                )}
              </AnimatePresence>
            </div>
            {/* the table's front edge */}
            <div className="mx-4 h-4 rounded-b-2xl bg-linear-to-b from-[#1a0a2c] to-[#0d0517] shadow-[0_12px_24px_rgba(0,0,0,0.6)]" />

            {/* the Horned Beast */}
            <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
              <motion.div
                className="relative aspect-square w-[62%]"
                initial={GHOST_POSE.intro}
                animate={GHOST_POSE[phase]}
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
            </div>
          </div>

          {/* below the table: the memorising timer, or the tray of snatched cups */}
          <div className="mt-6 w-full">
            {phase === "memorize" && (
              <div className="flex flex-col items-center gap-4">
                <div className="h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/10">
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
                  className="rounded-full border border-white/20 bg-black/60 px-6 py-2.5 text-sm font-bold text-white/90 backdrop-blur-md transition-colors hover:bg-black/80 cursor-pointer"
                >
                  I&apos;ve got it — bring on the Beast!
                </button>
              </div>
            )}

            {showTray && (
              <div className="rounded-3xl border border-white/10 bg-black/45 p-3 backdrop-blur-md sm:p-4">
                <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-[#d1b8eb]/80">
                  {arranging ? "Tap a cup to put it back on the table" : "…"}
                </p>
                <div className="grid min-h-16 grid-cols-4 gap-2 sm:grid-cols-8">
                  {tray.map((cup, i) => (
                    <motion.button
                      key={cup}
                      type="button"
                      layoutId={arranging ? `cup-${cup}` : undefined}
                      onClick={() => placeCup(cup)}
                      disabled={!arranging || wrong.length > 0}
                      aria-label={`Place ${FLAVOURS[flavourOf(cup)].name}`}
                      className="rounded-xl p-1 transition-colors enabled:cursor-pointer enabled:hover:bg-white/10"
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

            {arranging && (
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={clearTable}
                  disabled={wrong.length > 0 || slots.every((c, i) => c === null || locked[i])}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-sm font-bold text-white/90 backdrop-blur-md transition-colors hover:bg-black/80 disabled:opacity-40 cursor-pointer disabled:cursor-default"
                >
                  <Undo2 className="h-4 w-4" />
                  Clear
                </button>
                <button
                  type="button"
                  onClick={checkOrder}
                  disabled={filled < CUPS || wrong.length > 0}
                  className="flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-black text-[#1d0d33] shadow-[0_0_25px_rgba(192,132,252,0.5)] transition-all hover:scale-103 disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100 cursor-pointer disabled:cursor-default"
                  style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #ff8ab2 100%)` }}
                >
                  <Check className="h-4 w-4" strokeWidth={3} />
                  Check order
                </button>
              </div>
            )}
          </div>
        </LayoutGroup>
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
              className="w-full max-w-sm rounded-3xl border border-white/15 bg-[#1b0f2e]/95 p-6 text-center shadow-[0_0_60px_rgba(192,132,252,0.35)]"
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <motion.div
                className="relative mx-auto -mt-20 size-40"
                animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={GHOST} alt="The Horned Beast" fill sizes="160px" priority className="object-contain drop-shadow-[0_0_25px_rgba(192,132,252,0.8)]" />
              </motion.div>
              <h3 className="font-creepster mt-1 text-3xl uppercase tracking-wider" style={{ color: ACCENT }}>
                Mind the Cups!
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#e6d8f5]">
                Eight MilkaBoo cups sit on the table. Memorise their order. Then the Horned Beast swoops in and
                snatches them all!
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#e6d8f5]">
                Put every cup back in the <span className="font-black" style={{ color: ACCENT }}>exact same order</span>. You have{" "}
                <span className="font-black" style={{ color: ACCENT }}>{LIVES} tries</span>.
              </p>
              <div className="mt-4 flex justify-center gap-1">
                {FLAVOURS.map((f, i) => (
                  <div key={f.name} className="w-12">
                    <CupArt cup={i} />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={start}
                className="mt-6 w-full rounded-full py-3.5 font-black uppercase tracking-wider text-[#1d0d33] shadow-[0_0_25px_rgba(192,132,252,0.6)] transition-transform hover:scale-103 active:scale-95 cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #ff8ab2 100%)` }}
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
            className="fixed inset-x-0 bottom-0 z-40 flex justify-center bg-linear-to-t from-black/85 via-black/40 to-transparent p-4 pb-8 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="w-full max-w-sm rounded-3xl border border-white/15 bg-[#1b0f2e]/95 p-5 text-center"
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
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3 font-black text-[#241a33] transition-transform hover:scale-103 cursor-pointer"
                  style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, #ff8ab2 100%)` }}
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
