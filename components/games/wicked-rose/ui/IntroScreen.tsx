"use client";

import { motion } from "framer-motion";
import { copy } from "@/lib/copy";

interface Props {
  busy?: boolean;
  onStart: () => void;
}

export default function IntroScreen({ busy = false, onStart }: Props) {
  return (
    <div className="game__safe justify-between pb-6 sm:pb-8">
      <motion.header
        className="flex flex-col items-center text-center px-12 sm:px-16"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="font-creepster mt-2 text-center text-2xl uppercase tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-4xl select-none"
          style={{
            color: "#ff7cbe",
            textShadow: "0 0 24px rgba(255, 124, 190, 0.5), 0 2px 10px rgba(0,0,0,0.9)",
          }}
        >
          {copy.title}
        </h1>
        <p className="mt-1 max-w-xs text-xs sm:text-sm text-(--g-muted) [@media(max-height:700px)]:hidden">{copy.tagline}</p>
      </motion.header>

      <motion.section
        className="game__panel border-0! mx-auto w-full max-w-md p-4 sm:p-5 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            className="game__button w-full cursor-pointer bg-[#ff7cbe] text-[#1a0b26] font-black shadow-[0_0_32px_rgba(255,124,190,0.55)] hover:bg-[#ff5faf] py-3 text-base sm:text-lg"
            onClick={onStart}
            disabled={busy}
          >
            {copy.start}
          </button>
          <p className="text-center text-[11px] sm:text-xs text-(--g-muted)/80 leading-normal px-2">{copy.hygiene}</p>
        </div>
      </motion.section>
    </div>
  );
}
