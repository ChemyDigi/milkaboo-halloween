"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { copy } from "@/lib/copy";

interface Props {
  peak: number;
  busy?: boolean;
  onRetry: () => void;
  onHome: () => void;
}

export default function LoseScreen({ peak, busy = false, onRetry, onHome }: Props) {
  const pct = Math.floor(peak * 100);
  const taunt = copy.lose.taunt[pct % copy.lose.taunt.length];

  return (
    <div className="game__safe justify-between">
      <motion.p
        className="font-creepster mt-6 text-center text-[clamp(2rem,9vw,3rem)] uppercase tracking-wider text-(--g-danger) drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        style={{ textShadow: "0 0 24px rgba(255, 59, 92, 0.6), 0 2px 10px rgba(0,0,0,0.9)" }}
        initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 14 }}
      >
        {taunt}
      </motion.p>

      <motion.section
        className="game__panel mx-auto w-full max-w-md p-5 text-center"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-2xl">{copy.lose.title}</h2>
        <p className="mt-1 text-(--g-muted)">{copy.lose.freed(pct)}</p>
        <div className="mx-auto mt-3 h-2 max-w-60 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-(--g-pumpkin)" style={{ width: `${pct}%` }} />
        </div>

        <button
          type="button"
          className="game__button mt-5 w-full cursor-pointer bg-[#ff7cbe] text-[#1a0b26] font-black shadow-[0_0_32px_rgba(255,124,190,0.55)] hover:bg-[#ff5faf]"
          onClick={onRetry}
          disabled={busy}
        >
          <RotateCcw size={18} /> {copy.lose.tryAgain}
        </button>
        <button type="button" className="mt-3 block w-full text-center text-sm text-(--g-muted) hover:text-white transition-colors cursor-pointer" onClick={onHome}>
          {copy.win.playAgain}
        </button>
      </motion.section>
    </div>
  );
}
