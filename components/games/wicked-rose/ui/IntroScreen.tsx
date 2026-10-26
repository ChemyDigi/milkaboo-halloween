"use client";

import { motion } from "framer-motion";
import { copy } from "@/lib/copy";

interface Props {
  busy?: boolean;
  onStart: () => void;
}

export default function IntroScreen({ busy = false, onStart }: Props) {
  return (
    <div className="game__safe justify-between">
      <motion.header
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="game__title game__title--haunt mt-2 text-[clamp(2.1rem,10vw,3.5rem)] text-(--g-text)">
          {copy.title}
        </h1>
        <p className="mt-1 max-w-xs text-sm text-(--g-muted) [@media(max-height:700px)]:hidden">{copy.tagline}</p>
      </motion.header>

      <motion.section
        className="game__panel border-0! mx-auto w-full max-w-md p-5"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            className="game__button w-full cursor-pointer bg-[#ff7cbe] text-[#1a0b26] font-black shadow-[0_0_32px_rgba(255,124,190,0.55)] hover:bg-[#ff5faf]"
            onClick={onStart}
            disabled={busy}
          >
            {copy.start}
          </button>
          <p className="text-center text-xs text-(--g-muted)/80">{copy.hygiene}</p>
        </div>
      </motion.section>
    </div>
  );
}
