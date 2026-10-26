"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, Trophy, RotateCcw, X, Sparkles, Volume2, VolumeX } from "lucide-react";

interface Props {
  onClose?: () => void;
}

interface BobaItem {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  isPoison: boolean;
  popped: boolean;
}

const TARGET_SCORE = 15;
const ROUND_SECONDS = 25;

export default function HauntedAppleGame({ onClose }: Props) {
  const [gameState, setGameState] = useState<"intro" | "playing" | "won" | "lost">("intro");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [items, setItems] = useState<BobaItem[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const nextId = useRef(1);
  const animFrame = useRef<number | null>(null);
  const lastSpawn = useRef<number>(0);

  const startGame = () => {
    setScore(0);
    setTimeLeft(ROUND_SECONDS);
    setItems([]);
    setGameState("playing");
    lastSpawn.current = performance.now();
  };

  // Timer countdown
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

  // Check score for win
  useEffect(() => {
    if (gameState === "playing" && score >= TARGET_SCORE) {
      setGameState("won");
    }
  }, [score, gameState]);

  // Spawning and falling loop
  useEffect(() => {
    if (gameState !== "playing") return;

    let running = true;
    const loop = (now: number) => {
      if (!running) return;

      // Spawn every 450ms
      if (now - lastSpawn.current > 450) {
        lastSpawn.current = now;
        const isPoison = Math.random() < 0.22;
        const newItem: BobaItem = {
          id: nextId.current++,
          x: Math.random() * 80 + 10, // 10% to 90%
          y: -10,
          speed: 0.35 + Math.random() * 0.45,
          size: isPoison ? 48 : 42,
          isPoison,
          popped: false,
        };
        setItems((prev) => [...prev.slice(-18), newItem]);
      }

      // Move items down
      setItems((prev) =>
        prev
          .map((item) => ({ ...item, y: item.y + item.speed }))
          .filter((item) => item.y < 105 && !item.popped),
      );

      animFrame.current = requestAnimationFrame(loop);
    };

    animFrame.current = requestAnimationFrame(loop);
    return () => {
      running = false;
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [gameState]);

  const popItem = useCallback(
    (id: number, isPoison: boolean) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
      if (isPoison) {
        setScore((s) => Math.max(0, s - 3));
      } else {
        setScore((s) => s + 1);
      }
    },
    [],
  );

  return (
    <div className="relative flex flex-col items-center justify-between min-h-[580px] w-full max-w-lg mx-auto p-4 sm:p-6 rounded-3xl bg-[#0d160c]/95 border border-[#a3ff84]/30 shadow-[0_0_60px_rgba(163,255,132,0.25)] text-[#f6f0ff] overflow-hidden select-none">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-[#a3ff84]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-[#a3ff84]/15 blur-3xl" />

      {/* Top Header */}
      <div className="relative z-20 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍏</span>
          <div>
            <h3 className="font-creepster text-xl sm:text-2xl tracking-wider text-[#a3ff84] uppercase">
              Phantom Boba Catch
            </h3>
            <p className="text-xs text-[#b8dfb1]">Haunted Apple Challenge</p>
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

      {/* Game Content Canvas */}
      <div className="relative z-10 flex-1 w-full my-4 rounded-2xl border border-[#a3ff84]/20 bg-black/50 overflow-hidden min-h-[380px]">
        {gameState === "intro" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative size-32 mb-4"
            >
              <Image
                src="/games/haunted-apple/ghost-cutout-apple.png"
                alt="Apple Phantom"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(163,255,132,0.8)]"
              />
            </motion.div>
            <h4 className="font-creepster text-3xl text-[#a3ff84] uppercase">Defeat the Phantom!</h4>
            <p className="mt-2 text-sm text-[#d4ecd0] max-w-xs">
              Tap the glowing green matcha boba pearls before they hit the ground! Catch{" "}
              <span className="font-black text-[#a3ff84]">{TARGET_SCORE} pearls</span> in 25 seconds. Beware of purple ghost skulls!
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-6 rounded-full px-8 py-3.5 font-black text-[#142612] bg-gradient-to-r from-[#a3ff84] to-[#72f54a] shadow-[0_0_25px_rgba(163,255,132,0.6)] hover:scale-105 active:scale-95 transition-transform cursor-pointer uppercase tracking-wider"
            >
              Start Game
            </button>
          </div>
        )}

        {gameState === "playing" && (
          <>
            {/* Live Stats Bar */}
            <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-[#a3ff84]/40 text-sm font-black text-[#a3ff84] backdrop-blur-md">
                <span>🍏 Boba:</span>
                <span>{score} / {TARGET_SCORE}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-sm font-bold text-white/90 backdrop-blur-md">
                <Timer size={14} />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Falling Boba and Skulls */}
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onPointerDown={() => popItem(item.id, item.isPoison)}
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  width: item.size,
                  height: item.size,
                }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full grid place-items-center cursor-pointer transition-transform active:scale-75 shadow-lg select-none ${
                  item.isPoison
                    ? "bg-[#642a8b] border-2 border-[#ff3b5c] shadow-[0_0_15px_rgba(255,59,92,0.8)]"
                    : "bg-[#25661a] border-2 border-[#a3ff84] shadow-[0_0_20px_rgba(163,255,132,0.9)] hover:scale-110"
                }`}
              >
                <span className="text-xl pointer-events-none">
                  {item.isPoison ? "💀" : "🟢"}
                </span>
              </button>
            ))}
          </>
        )}

        {gameState === "won" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-black/85 backdrop-blur-md">
            <div className="size-16 mb-2 rounded-full bg-[#a3ff84]/20 border border-[#a3ff84] grid place-items-center text-[#a3ff84]">
              <Trophy size={32} />
            </div>
            <h4 className="font-creepster text-4xl text-[#a3ff84] uppercase">Cup Freed!</h4>
            <p className="mt-2 text-sm text-[#e4f8e0] max-w-xs">
              You caught {score} boba pearls and banished the Phantom! The Haunted Apple cup is yours!
            </p>
            <button
              type="button"
              onClick={startGame}
              className="mt-6 flex items-center gap-2 rounded-full px-7 py-3 font-black text-[#142612] bg-[#a3ff84] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <RotateCcw size={16} /> Play Again
            </button>
          </div>
        )}

        {gameState === "lost" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-black/85 backdrop-blur-md">
            <h4 className="font-creepster text-4xl text-[#ff3b5c] uppercase">The Phantom Won!</h4>
            <p className="mt-2 text-sm text-[#f6d0d6] max-w-xs">
              You scored {score} of {TARGET_SCORE} needed. The Phantom escaped with the cup!
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

      {/* Footer Info */}
      <div className="relative z-10 w-full flex items-center justify-between text-xs text-[#a3ff84]/70 pt-1">
        <span>Target: Catch {TARGET_SCORE} pearls</span>
        <span>Green = +1 pt | Skull = -3 pts</span>
      </div>
    </div>
  );
}
