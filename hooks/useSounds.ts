"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { Howl, Howler } from "howler";
import { gameConfig } from "@/lib/gameConfig";

export type SfxName = "wail" | "shloop" | "win" | "laugh" | "scream";
/** a game can swap in its own recordings by path, e.g. its own music as `ambient`; `scream` only plays if given one */
export type SoundFiles = Partial<Record<SfxName | "ambient", string>>;

const NO_FILES: SoundFiles = {};
const MUTE_KEY = "milkaboo-ghost-muted";
const vol = gameConfig.sound;

/* the mute switch is remembered per browser; a tiny external store keeps SSR and hydration consistent */
const muteListeners = new Set<() => void>();
function readMuted(): boolean {
  try {
    return localStorage.getItem(MUTE_KEY) === "1";
  } catch {
    return false;
  }
}
function writeMuted(muted: boolean) {
  try {
    localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
  } catch {
    /* private mode: mute just won't be remembered */
  }
  muteListeners.forEach((cb) => cb());
}
function subscribeMuted(cb: () => void) {
  muteListeners.add(cb);
  return () => {
    muteListeners.delete(cb);
  };
}

/** the remembered mute switch, shared by the site soundtrack and the game sounds (Howler mutes globally) */
export function useMuted() {
  const muted = useSyncExternalStore(subscribeMuted, readMuted, () => false);
  const toggleMute = useCallback(() => writeMuted(!readMuted()), []);
  return { muted, toggleMute };
}

/**
 * Howler sounds for the game. Files live in /public/sounds (placeholders made by scripts/generate-sounds.mjs).
 * Sounds load on the first `unlock()` (call it from a tap) so the intro screen downloads nothing extra.
 * Pass `files` as a module-level constant: it's read when the sounds load.
 */
export function useSounds(files: SoundFiles = NO_FILES) {
  const { muted, toggleMute } = useMuted();
  const howls = useRef<Record<string, Howl> | null>(null);

  useEffect(() => {
    Howler.mute(muted);
  }, [muted]);

  useEffect(() => {
    return () => {
      if (howls.current) Object.values(howls.current).forEach((h) => h.unload());
      howls.current = null;
    };
  }, []);

  const unlock = useCallback(() => {
    if (howls.current) return;
    const make = (name: SfxName | "ambient" | "slurp", volume: number, loop = false) =>
      new Howl({ src: [(name !== "slurp" && files[name]) || `/sounds/${name}.wav`], volume, loop, preload: true });
    howls.current = {
      ambient: make("ambient", vol.ambient, true),
      slurp: make("slurp", 0, true),
      wail: make("wail", vol.sfx),
      shloop: make("shloop", vol.sfx),
      win: make("win", vol.sfx),
      laugh: make("laugh", vol.sfx),
      ...(files.scream && { scream: make("scream", vol.sfx) }),
    };
    howls.current.ambient.play();
  }, [files]);

  const play = useCallback((name: SfxName) => {
    howls.current?.[name]?.play();
  }, []);

  /** 0–1 suction strength; the slurp loop follows it */
  const setSuction = useCallback((amount: number) => {
    const slurp = howls.current?.slurp;
    if (!slurp) return;
    if (amount > 0.01 && !slurp.playing()) slurp.play();
    slurp.volume(amount * vol.slurp);
    if (amount <= 0.01 && slurp.playing()) slurp.pause();
  }, []);

  /** fade the ambience down for big moments (win reveal) and back up */
  const setAmbience = useCallback((level: number) => {
    const ambient = howls.current?.ambient;
    if (ambient) ambient.fade(ambient.volume(), level * vol.ambient, 600);
  }, []);

  return { muted, toggleMute, unlock, play, setSuction, setAmbience };
}
