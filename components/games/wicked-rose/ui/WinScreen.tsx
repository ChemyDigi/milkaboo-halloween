"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { copy } from "@/lib/copy";

interface Props {
  onDone: () => void;
}

const t = copy.win;

/** Clean victory screen: celebrates freeing the cup and allows playing again. */
export default function WinScreen({ onDone }: Props) {
  return (
    <div className="game__safe justify-between">
      <motion.header
        className="mt-6 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#fed778] to-[#ff7cbe] text-[#241a33] shadow-[0_0_35px_rgba(255,124,190,0.7)]">
          <Trophy size={32} />
        </div>
        <h2
          className="font-creepster text-[clamp(2.4rem,10vw,3.8rem)] uppercase tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          style={{
            color: "#ff7cbe",
            textShadow: "0 0 24px rgba(255, 124, 190, 0.6), 0 2px 10px rgba(0,0,0,0.9)",
          }}
        >
          {t.title}
        </h2>
        <p className="mt-2 text-base text-(--g-muted)">{t.body}</p>
      </motion.header>

      <motion.section
        className="game__panel mx-auto w-full max-w-sm p-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          className="game__button w-full bg-[#ff7cbe] text-[#1a0b26] font-black shadow-[0_0_30px_rgba(255,124,190,0.65)] hover:bg-[#ff5faf] cursor-pointer"
          onClick={onDone}
        >
          {t.playAgain}
        </button>
      </motion.section>
    </div>
  );
}
