"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export const CASPER_SRC = "/games/casper-custard/CustardCaspor.png";

/** how long his entrance takes, so the pieces can be tossed out as he passes */
export const ARRIVAL_SECONDS = 3.6;

interface Props {
  /** the play area, in px */
  width: number;
  height: number;
  /** the board, in px */
  board: { left: number; top: number; width: number; height: number };
  /** pieces in place: he hops for each one */
  snaps: number;
  won: boolean;
  reducedMotion: boolean;
}

type Phase = "arriving" | "perched" | "party" | "gone";

interface Perch {
  x: number;
  y: number;
  /** 1 looks right (as drawn), −1 looks left: always towards the board */
  face: 1 | -1;
}

/**
 * Casper himself. He swoops in across the screen when a round starts (the pieces pop out as he passes),
 * then floats beside the board, behind the pieces, drifting to a new spot now and then and hopping every
 * time a piece snaps home. When the last piece is in he does a lap of honour and makes way for the win card.
 * Key him by the round, so a shuffle brings him flying in again.
 */
export default function Casper({ width, height, board, snaps, won, reducedMotion }: Props) {
  // about 120px on a laptop, 90px on a phone
  const size = Math.round(Math.min(width, height) * 0.1 + 50);
  // how far his round has got; the lap of honour follows from the win itself
  const [stage, setStage] = useState<Exclude<Phase, "party">>("arriving");
  const phase: Phase = won && stage !== "gone" ? "party" : stage;
  const [perchIndex, setPerchIndex] = useState(0);

  // the spots he floats at: beside the board where there's room, else tucked over its corners
  const perches = useMemo<Perch[]>(() => {
    const spots: Perch[] = [];
    const roomLeft = board.left;
    const roomRight = width - (board.left + board.width);
    if (roomLeft > size * 1.2) spots.push({ x: board.left - size * 1.05, y: board.top + size * 0.1, face: 1 });
    if (roomRight > size * 1.2) spots.push({ x: board.left + board.width + size * 0.08, y: board.top + board.height * 0.5, face: -1 });
    if (roomLeft > size * 1.2) spots.push({ x: board.left - size * 1.0, y: board.top + board.height * 0.68, face: 1 });
    if (spots.length === 0) {
      // a phone: the board fills the width, so he peeks over its lower corners (behind the loose pieces)
      spots.push({ x: board.left + board.width - size * 0.6, y: board.top + board.height - size * 0.75, face: -1 });
      spots.push({ x: board.left - size * 0.4, y: board.top + board.height - size * 0.75, face: 1 });
    }
    return spots;
  }, [width, board, size]);
  const perch = perches[Math.min(perchIndex, perches.length - 1)];

  // now and then, drift over to another spot
  useEffect(() => {
    if (phase !== "perched" || perches.length < 2 || reducedMotion) return;
    const timer = setInterval(
      () => setPerchIndex((i) => (i + 1 + Math.floor(Math.random() * (perches.length - 1))) % perches.length),
      9000 + Math.random() * 5000,
    );
    return () => clearInterval(timer);
  }, [phase, perches.length, reducedMotion]);

  // his entrance: in from the bottom left, up and over the top, down the right side, and round to his perch
  const arrival = useMemo(() => {
    const first = perches[0];
    return {
      x: [-size, width * 0.18, width * 0.5, width * 0.88 - size, width * 0.55, first.x],
      y: [height + size, height * 0.55, size * 0.35, height * 0.45, height * 0.82, first.y],
      rotate: [0, -14, 8, 14, -10, 0],
      scaleX: [1, 1, 1, -1, -1, first.face],
    };
  }, [perches, width, height, size]);

  // the lap of honour: once round the board, then up and away
  const lap = useMemo(
    () => ({
      x: [perch.x, width * 0.12, width * 0.5 - size / 2, width * 0.88 - size, width * 0.5 - size / 2],
      y: [perch.y, height * 0.7, height * 0.12, height * 0.6, -size * 1.5],
      rotate: [0, -16, 10, -10, 0],
      scaleX: [perch.face, 1, 1, -1, -1],
      opacity: [1, 1, 1, 1, 0],
    }),
    [perch, width, height, size],
  );

  const flying = phase === "arriving" || phase === "party";
  const animate = reducedMotion
    ? phase === "gone" || phase === "party"
      ? { opacity: 0 }
      : { x: perch.x, y: perch.y, scaleX: perch.face, opacity: 1 }
    : phase === "arriving"
      ? arrival
      : phase === "perched"
        ? { x: perch.x, y: perch.y, rotate: 0, scaleX: perch.face, opacity: 1 }
        : phase === "party"
          ? lap
          : { opacity: 0 };
  const transition =
    phase === "arriving"
      ? { duration: ARRIVAL_SECONDS, times: [0, 0.22, 0.45, 0.66, 0.84, 1], ease: "easeInOut" as const }
      : phase === "party"
        ? { duration: 2.6, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut" as const }
        : { type: "spring" as const, stiffness: 38, damping: 13, scaleX: { duration: 0.35 } };

  return (
    <motion.div
      className={`pointer-events-none absolute top-0 left-0 select-none ${flying ? "z-30" : ""}`}
      style={{ width: size, height: size }}
      // he starts off-screen, so there's no need to fade him in (a lone opacity value would be spread
      // across the flight's keyframe times and fade him out mid-loop)
      initial={{ x: -size, y: height + size, opacity: 1 }}
      animate={animate}
      transition={transition}
      onAnimationComplete={() => {
        if (phase === "arriving") setStage("perched");
        else if (phase === "party") setStage("gone");
      }}
      aria-hidden
    >
      {/* a hop every time a piece snaps home */}
      <motion.div
        key={snaps}
        className="h-full w-full"
        animate={snaps > 0 && !reducedMotion ? { y: [0, -size * 0.28, 0], rotate: [0, -12, 10, 0] } : { y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {/* and a gentle float the rest of the time */}
        <motion.div
          className="relative h-full w-full"
          animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 0 18px rgba(254, 215, 120, 0.55))" }}
        >
          <Image src={CASPER_SRC} alt="" fill sizes="160px" priority className="object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
