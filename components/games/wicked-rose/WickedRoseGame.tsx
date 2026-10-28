"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { gameConfig } from "@/lib/gameConfig";
import type { RoundEvent, RoundState } from "@/lib/gameEngine";
import { useBreathDetector } from "@/hooks/useBreathDetector";
import { useDebugFlag, useDeviceTier, useReducedMotion } from "@/hooks/useDeviceTier";
import { useGameLoop } from "@/hooks/useGameLoop";
import { useSounds, type SfxName } from "@/hooks/useSounds";
import { EXIT_SECONDS, createSceneState, setSceneMode, type SceneMode } from "./three/sceneState";
import CalibratingScreen from "./ui/CalibratingScreen";
import DebugPanel from "./ui/DebugPanel";
import HUD from "./ui/HUD";
import IntroScreen from "./ui/IntroScreen";
import LoseScreen from "./ui/LoseScreen";
import MuteButton from "@/components/MuteButton";
import PermissionScreen from "./ui/PermissionScreen";
import WinScreen from "./ui/WinScreen";

// WebGL only exists in the browser
const Scene = dynamic(() => import("./three/Scene"), { ssr: false });

type Screen = "intro" | "permission" | "calibrating" | "playing" | "won" | "lost";

/** besides the music, only her laugh: when she fights back, and louder when the round is lost */
const SOUNDS: readonly SfxName[] = ["femaleLaugh"];

/**
 * "Free the Milkaboo Cup": Pure client-side game flow connecting mic, 60fps loop, 3D scene and sound design.
 * intro → (permission) → calibrating → playing → won | lost
 */
export default function Game() {
  const debug = useDebugFlag();
  const tier = useDeviceTier();
  const reducedMotion = useReducedMotion();
  const mic = useBreathDetector();
  const sounds = useSounds(SOUNDS);
  const sceneState = useRef(createSceneState());

  const [screen, setScreen] = useState<Screen>("intro");
  const [busy, setBusy] = useState(false);
  const [peak, setPeak] = useState(0);

  const micGranted = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const show = useCallback((next: Screen, mode: SceneMode) => {
    setScreen(next);
    setSceneMode(sceneState.current, mode);
  }, []);
  const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));

  useEffect(() => {
    // Check if mic was already allowed
    navigator.permissions
      ?.query({ name: "microphone" as PermissionName })
      .then((p) => (micGranted.current = p.state === "granted"))
      .catch(() => {});
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const endRound = useCallback(() => {
    mic.stop();
    const s = sceneState.current;
    s.suck = 0;
    s.grip = false;
  }, [mic]);

  const onRoundEvent = useCallback(
    (event: RoundEvent, round: RoundState) => {
      if (event === "gripStart") {
        // she fights back, laughing
        sounds.play("femaleLaugh");
        if ("vibrate" in navigator) navigator.vibrate(gameConfig.fightBack.vibratePattern);
      } else if (event === "won") {
        endRound();
        show("won", "exiting");
        timers.current.push(setTimeout(() => setSceneMode(sceneState.current, "won"), EXIT_SECONDS * 1000));
      } else if (event === "lost") {
        endRound();
        setPeak(round.peak);
        sceneState.current.progress = 0; // the ghost wraps the whole cup again
        // the music drops back and she laughs louder than ever
        sounds.setAmbience(0.35);
        sounds.play("femaleLaugh", true);
        show("lost", "lost");
      }
    },
    [endRound, show, sounds],
  );

  const loop = useGameLoop(mic.readingRef, sceneState, onRoundEvent);

  /** Starts the round: initializes AudioContext and mic on user gesture */
  const beginRound = async () => {
    if (busy) return;
    setBusy(true);
    sounds.unlock();
    sounds.setAmbience(1);

    let ok = await mic.start();
    if (!ok && debug) {
      mic.startSimulated(); // ?debug on desktop: Spacebar to suck
      ok = true;
    }
    if (!ok) {
      setScreen("permission");
      setBusy(false);
      return;
    }
    micGranted.current = true;

    sceneState.current.progress = 0;
    show("calibrating", "calibrating");
    setBusy(false);

    // Calibrate room quiet noise
    void mic.calibrate();
    later(() => {
      show("playing", "playing");
      loop.start();
    }, gameConfig.round.countdownMs);
  };

  const onStart = () => {
    if (micGranted.current) void beginRound();
    else {
      sounds.unlock();
      setScreen("permission");
    }
  };

  const goHome = () => {
    loop.stop();
    endRound();
    sounds.setAmbience(1);
    sceneState.current.progress = 0;
    show("intro", "intro");
  };

  // ?debug: hold Space to simulate sucking
  useEffect(() => {
    if (!debug) return;
    const down = (e: KeyboardEvent) => {
      if (e.code !== "Space" || (e.target as HTMLElement).tagName === "INPUT") return;
      e.preventDefault();
      mic.setSimulated(true);
    };
    const up = (e: KeyboardEvent) => e.code === "Space" && mic.setSimulated(false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [debug, mic]);

  return (
    <div className="game fixed inset-0">
      <div className="absolute inset-0" aria-hidden="true">
        <Scene state={sceneState} tier={tier} reducedMotion={reducedMotion} />
      </div>

      <MuteButton muted={sounds.muted} onToggle={sounds.toggleMute} />

      {gameConfig.easy && (
        <p className="pointer-events-none absolute top-[max(0.5rem,env(safe-area-inset-top))] left-1/2 z-30 -translate-x-1/2 rounded-full bg-(--g-pumpkin) px-3 py-0.5 text-xs font-black text-black">
          EASY TEST MODE
        </p>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {screen === "intro" && <IntroScreen busy={busy} onStart={onStart} />}
          {screen === "permission" && <PermissionScreen status={mic.status} onAllow={() => void beginRound()} />}
          {screen === "calibrating" && <CalibratingScreen />}
          {screen === "playing" && <HUD hud={loop.hud} reducedMotion={reducedMotion} />}
          {screen === "won" && <WinScreen onDone={goHome} />}
          {screen === "lost" && (
            <LoseScreen
              peak={peak}
              busy={busy}
              onRetry={() => void beginRound()}
              onHome={goHome}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {debug && <DebugPanel mic={mic} hud={loop.hud} tier={tier} />}
    </div>
  );
}
