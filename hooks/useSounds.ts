"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { Howl, Howler } from "howler";
import { gameConfig } from "@/lib/gameConfig";

export type SfxName = "shloop" | "win" | "laugh" | "femaleLaugh";

/** the files in /public/sounds: every game plays the same music; `laugh` is the ghosts' evil laugh, `femaleLaugh` the Wicked Rose's */
const FILES: Record<SfxName | "ambient", string> = {
  ambient: "background1.mp3",
  shloop: "shloop.wav",
  win: "win.wav",
  laugh: "Evillaugh.mp3",
  femaleLaugh: "female.mp3",
};
const LAUGHS = new Set<SfxName>(["laugh", "femaleLaugh"]);
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
 * Howler sounds for the games: the shared music loop plus the effects a game names in `sfx` (pass a module-level
 * constant; it's read when the sounds load). They load on the first `unlock()` (call it from a tap) so the
 * intro screen downloads nothing extra.
 */
export function useSounds(sfx: readonly SfxName[]) {
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
    const make = (name: SfxName | "ambient", volume: number, loop = false) =>
      new Howl({ src: [`/sounds/${FILES[name]}`], volume, loop, preload: true });
    howls.current = { ambient: make("ambient", vol.ambient, true) };
    for (const name of sfx) howls.current[name] = make(name, vol.sfx);
    howls.current.ambient.play();
  }, [sfx]);

  /**
   * Play an effect. A ghost laughs one laugh at a time: a laugh that's still going isn't restarted, except by a
   * `loud` one (the game is lost), which cuts it off and laughs louder.
   */
  const play = useCallback((name: SfxName, loud = false) => {
    const h = howls.current?.[name];
    if (!h) return;
    if (LAUGHS.has(name)) {
      if (loud) h.stop();
      else if (h.playing()) return;
    }
    h.volume(loud ? vol.sfxLoud : vol.sfx);
    h.play();
  }, []);

  /** fade the music down for big moments (a loss) and back up */
  const setAmbience = useCallback((level: number) => {
    const ambient = howls.current?.ambient;
    if (ambient) ambient.fade(ambient.volume(), level * vol.ambient, 600);
  }, []);

  return { muted, toggleMute, unlock, play, setAmbience };
}
