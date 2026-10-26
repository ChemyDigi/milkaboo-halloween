"use client";

import { useEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import { Volume2, VolumeX } from "lucide-react";
import { useMuted } from "@/hooks/useSounds";
import { copy } from "@/lib/copy";

const VOLUME = 0.45;
const FADE_MS = 800;

/**
 * The site's looping background soundtrack (made by scripts/generate-sounds.mjs). Browsers block audio until the
 * visitor interacts, so it loads and starts on the first tap/click/key. `paused` fades it out, e.g. while a game
 * is open: the game has its own sounds, and the Wicked Rose mic would hear the music.
 */
export default function SpookyAmbience({ paused }: { paused: boolean }) {
  const { muted, toggleMute } = useMuted();
  const howl = useRef<Howl | null>(null);
  const pausedRef = useRef(paused);

  useEffect(() => {
    Howler.mute(muted);
  }, [muted]);

  useEffect(() => {
    const events = ["pointerdown", "keydown", "touchend"] as const;
    const start = () => {
      events.forEach((e) => window.removeEventListener(e, start));
      howl.current = new Howl({ src: ["/sounds/site-ambience.wav"], loop: true, volume: 0 });
      if (!pausedRef.current) {
        howl.current.play();
        howl.current.fade(0, VOLUME, FADE_MS * 3);
      }
    };
    events.forEach((e) => window.addEventListener(e, start));

    // no music from a background tab
    const onVisibility = () => {
      const h = howl.current;
      if (!h || pausedRef.current) return;
      if (document.hidden) h.pause();
      else if (!h.playing()) h.play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      events.forEach((e) => window.removeEventListener(e, start));
      document.removeEventListener("visibilitychange", onVisibility);
      howl.current?.unload();
      howl.current = null;
    };
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    const h = howl.current;
    if (!h) return;
    if (paused) {
      h.once("fade", () => {
        if (pausedRef.current) h.pause();
      });
      h.fade(h.volume(), 0, FADE_MS);
    } else {
      if (!h.playing()) h.play();
      h.fade(h.volume(), VOLUME, FADE_MS);
    }
  }, [paused]);

  if (paused) return null;
  return (
    <button
      type="button"
      onClick={toggleMute}
      aria-pressed={muted}
      aria-label={muted ? copy.unmute : copy.mute}
      className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid size-11 cursor-pointer place-items-center rounded-full border border-white/20 bg-black/60 text-white/90 shadow-lg backdrop-blur-md transition-all hover:bg-black/80 hover:text-white"
    >
      {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  );
}
