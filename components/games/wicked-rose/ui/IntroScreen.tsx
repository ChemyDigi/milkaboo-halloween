"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Mic, Timer, Trophy } from "lucide-react";
import { copy } from "@/lib/copy";

interface Props {
  busy?: boolean;
  onStart: () => void;
}

export default function IntroScreen({ busy = false, onStart }: Props) {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center overflow-y-auto bg-black/80 p-4 py-8 backdrop-blur-md sm:p-6">
      <motion.div
        className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl rounded-3xl border border-white/20 bg-[#1a0b26]/98 px-6 pb-6 pt-16 sm:pt-20 text-center shadow-2xl backdrop-blur-md"
        initial={{ scale: 0.85, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
      >
        <motion.div
          className="pointer-events-none absolute -top-24 sm:-top-28 left-1/2 size-36 sm:size-44 md:size-48 -translate-x-1/2 drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/games/wicked-rose/ghost-cutout-rose.png"
            alt="The Ghost Princess"
            fill
            sizes="200px"
            priority
            className="object-contain"
          />
        </motion.div>

        <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-[#ff7cbe]/90">
          The Ghost Princess&apos;s
        </p>
        <h3
          className="font-creepster mt-1 text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-[#ff7cbe]"
        >
          {copy.title}
        </h3>
        <p className="mt-3 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          {copy.tagline}
        </p>

        {/* 4 Feature legend cards */}
        <ul className="mt-5 grid grid-cols-1 gap-2.5 text-left text-sm sm:text-base min-[360px]:grid-cols-2">
          <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[#ff7cbe]/20 text-[#ff7cbe]">
              <Mic className="h-5 w-5" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-bold text-white">
                Sip into Mic <span className="font-black text-[#ff7cbe]">inhale</span>
              </span>
              <span className="block text-xs text-[#ff7cbe]/80">Peels the ghost off</span>
            </span>
          </li>
          <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[#fed778]/20 text-[#fed778]">
              <Timer className="h-5 w-5" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-bold text-white">
                15s Rush <span className="font-black text-[#fed778]">countdown</span>
              </span>
              <span className="block text-xs text-[#fed778]/80">Beat the round timer</span>
            </span>
          </li>
          <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[#ff5c7a]/20 text-[#ff5c7a]">
              <Flame className="h-5 w-5" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-bold text-white">
                Ghost Grips <span className="font-black text-[#ff5c7a]">resists</span>
              </span>
              <span className="block text-xs text-[#ff5c7a]/80">Sip harder to break free</span>
            </span>
          </li>
          <li className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-[#4ade80]/20 text-[#4ade80]">
              <Trophy className="h-5 w-5" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block font-bold text-white">
                100% Freed <span className="font-black text-[#4ade80]">rescue</span>
              </span>
              <span className="block text-xs text-[#4ade80]/80">Save the Milkaboo cup</span>
            </span>
          </li>
        </ul>

        {/* Stats badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs sm:text-sm md:text-base font-bold text-[#ff7cbe]">
          <span className="flex items-center gap-1.5">
            <Mic className="h-4 w-4" style={{ color: "#ff7cbe" }} /> Mic-powered
          </span>
          <span className="flex items-center gap-1.5">
            <Timer className="h-4 w-4" style={{ color: "#fed778" }} /> 15s on the clock
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-sm">🧋</span> Continuous sipping
          </span>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={onStart}
          disabled={busy}
          className="mt-6 w-full cursor-pointer rounded-full py-4 sm:py-4.5 text-base sm:text-lg md:text-xl font-black uppercase tracking-wider shadow-lg shadow-black/40 transition-all hover:scale-103 active:scale-95 disabled:opacity-50 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #ff7cbe 0%, #fed778 100%)",
            color: "#1a0b26",
          }}
        >
          {copy.start}
        </button>

        <p className="mt-3 text-xs sm:text-sm text-[#ff7cbe]/80 font-medium">
          {copy.hygiene}
        </p>
      </motion.div>
    </div>
  );
}
