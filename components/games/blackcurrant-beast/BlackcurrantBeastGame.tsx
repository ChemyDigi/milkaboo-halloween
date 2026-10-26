"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Timer, Trophy, RotateCcw, X, Volume2, VolumeX } from "lucide-react";

interface Props {
  onClose?: () => void;
}

const TARGET_SCORE = 15;
const ROUND_SECONDS = 25;
const PORTALS_COUNT = 9;

interface PortalState {
  hasPearl: boolean;
  hasBeast: boolean;
}

export default function BlackcurrantBeastGame({ onClose }: Props) {
  const [gameState, setGameState] = useState<"intro" | "playing" | "won" | "lost">("intro");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [portals, setPortals] = useState<PortalState[]>(
    Array(PORTALS_COUNT).fill({ hasPearl: false, hasBeast: false }),
  );
  const [soundEnabled, setSoundEnabled] = useState(true);

  const startGame = () => {
    setScore(0);
    setTimeLeft(ROUND_SECONDS);
    setGameState("playing");
  };

  // Timer loop
  useEffect(() => {
    if (gameState !== "playing") return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setGameState((s) => (s === "playing" ? (score >= TARGET_SCORE ? "won" : "lost") : s));
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [gameState, score]);

  // Win condition check
  useEffect(() => {
    if (gameState === "playing" && score >= TARGET_SCORE) {
      setGameState("won");
    }
  }, [score, gameState]);

  // Portals popping loop
  useEffect(() => {
    if (gameState !== "playing") return;

    const interval = setInterval(() => {
      const idx1 = Math.floor(Math.random() * PORTALS_COUNT);
      let idx2 = Math.floor(Math.random() * PORTALS_COUNT);
      while (idx2 === idx1) idx2 = Math.floor(Math.random() * PORTALS_COUNT);

      const spawnBeast = Math.random() < 0.35;

      setPortals((prev) =>
        prev.map((_, i) => ({
          hasPearl: i === idx1,
          hasBeast: spawnBeast && i === idx2,
        })),
      );

      // Despawn after 850ms
      setTimeout(() => {
        setPortals((prev) => prev.map(() => ({ hasPearl: false, hasBeast: false })));
      }, 850);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  const tapPortal = useCallback(
    (index: number) => {
      const portal = portals[index];
      if (portal.hasPearl) {
        setScore((s) => s + 1);
        setPortals((prev) =>
          prev.map((p, i) => (i === index ? { ...p, hasPearl: false } : p)),
        );
      } else if (portal.hasBeast) {
        setScore((s) => Math.max(0, s - 2));
        setPortals((prev) =>
          prev.map((p, i) => (i === index ? { ...p, hasBeast: false } : p)),
        );
      }
    },
    [portals],
  );

  return (
    <div className="relative flex flex-col items-center justify-between min-h-[580px] w-full max-w-lg mx-auto p-4 sm:p-6 rounded-3xl bg-[#140b22]/95 border border-[#c084fc]/30 shadow-[0_0_60px_rgba(192,132,252,0.25)] text-[#f6f0ff] overflow-hidden select-none">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-[#c084fc]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-[#c084fc]/15 blur-3xl" />

      {/* Header */}
      <div className="relative z-20 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="text-2xl">😈</span>
          <div>
            <h3 className="font-creepster text-xl sm:text-2xl tracking-wider text-[#c084fc] uppercase">
              Shadow Beast Swat
            </h3>
            <p className="text-xs text-[#d1b8eb]">Blackcurrant Beast Challenge</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="grid size-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 cursor-pointer"
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="grid size-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Main Game Area */}
      <div className="relative z-10 flex-1 w-full my-4 rounded-2xl border border-[#c084fc]/20 bg-black/60 p-4 flex flex-col justify-center items-center overflow-hidden min-h-[380px]">
        {gameState === "intro" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative size-32 mb-4"
            >
              <Image
                src="/games/blackcurrant-beast/ghost-cutout-currant.png"
                alt="Shadow Beast"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(192,132,252,0.8)]"
              />
            </motion.div>
            <h4 className="font-creepster text-3xl text-[#c084fc] uppercase">Banish the Shadow Beast!</h4>
            <p className="mt-2 text-sm text-[#e6d8f5] max-w-xs">
              Tap the dark popping blackcurrant pearls as they emerge from the shadow portals!
              Collect <span className="font-black text-[#c084fc]">{TARGET_SCORE} pearls</span> before time runs out. Beware the Horned Beast!
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-6 rounded-full px-8 py-3.5 font-black text-[#1d0d33] bg-gradient-to-r from-[#c084fc] to-[#a855f7] shadow-[0_0_25px_rgba(192,132,252,0.6)] hover:scale-105 active:scale-95 transition-transform cursor-pointer uppercase tracking-wider"
            >
              Start Game
            </button>
          </div>
        )}

        {gameState === "playing" && (
          <div className="w-full flex flex-col items-center">
            {/* Top Stats Bar */}
            <div className="flex items-center justify-between w-full max-w-xs mb-3 px-1">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 border border-[#c084fc]/40 text-sm font-black text-[#c084fc]">
                <span>🫐 Pearls:</span>
                <span>{score} / {TARGET_SCORE}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-sm font-bold text-white/90">
                <Timer size={14} />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* 3x3 Portals Grid */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs aspect-square">
              {portals.map((portal, index) => (
                <button
                  key={index}
                  type="button"
                  onPointerDown={() => tapPortal(index)}
                  className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#24143a] to-[#12071f] shadow-inner grid place-items-center overflow-hidden cursor-pointer active:scale-95 transition-transform"
                >
                  {/* Portal swirl backdrop */}
                  <div className="absolute inset-2 rounded-full border border-purple-500/20 bg-purple-950/40 animate-pulse pointer-events-none" />

                  {/* Popping Pearl */}
                  {portal.hasPearl && (
                    <motion.div
                      initial={{ scale: 0, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      className="relative z-10 flex flex-col items-center pointer-events-none"
                    >
                      <span className="text-3xl filter drop-shadow-[0_0_10px_#c084fc]">🔮</span>
                    </motion.div>
                  )}

                  {/* Horned Beast */}
                  {portal.hasBeast && (
                    <motion.div
                      initial={{ scale: 0, y: 15 }}
                      animate={{ scale: 1, y: 0 }}
                      className="relative z-10 flex flex-col items-center pointer-events-none"
                    >
                      <span className="text-3xl filter drop-shadow-[0_0_12px_#ff3b5c]">👾</span>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {gameState === "won" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-black/85 backdrop-blur-md">
            <div className="size-16 mb-2 rounded-full bg-[#c084fc]/20 border border-[#c084fc] grid place-items-center text-[#c084fc]">
              <Trophy size={32} />
            </div>
            <h4 className="font-creepster text-4xl text-[#c084fc] uppercase">Cup Freed!</h4>
            <p className="mt-2 text-sm text-[#eee3fa] max-w-xs">
              You collected {score} shadow pearls and banished the Beast! The Blackcurrant Beast cup is free!
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-6 flex items-center gap-2 rounded-full px-7 py-3 font-black text-[#1d0d33] bg-[#c084fc] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <RotateCcw size={16} /> Play Again
            </button>
          </div>
        )}

        {gameState === "lost" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-black/85 backdrop-blur-md">
            <h4 className="font-creepster text-4xl text-[#ff3b5c] uppercase">The Beast Escaped!</h4>
            <p className="mt-2 text-sm text-[#f8d7dc] max-w-xs">
              You got {score} of {TARGET_SCORE} pearls. The Horned Beast dragged the cup into the shadow realm!
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-6 flex items-center gap-2 rounded-full px-7 py-3 font-black text-white bg-[#ff3b5c] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <RotateCcw size={16} /> Try Again
            </button>
          </div>
        )}
      </div>

      {/* Footer Instructions */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs text-[#c084fc]/70 pt-1">
        <span>Target: Tap {TARGET_SCORE} pearls</span>
        <span>Pearl = +1 pt | Beast = -2 pts</span>
      </div>
    </div>
  );
}
