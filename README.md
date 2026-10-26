# Free the Milkaboo Cup (Halloween Game)

A ghost has wrapped itself around a Milkaboo cup. The player sucks air in near the phone's microphone to peel it off. If they free the cup within 25 seconds, the ghost is defeated and the cup is saved!

## Setup

```bash
npm install
npm run dev                    # http://localhost:3000   (desktop: localhost counts as secure)
npm run dev:https              # https://<your-LAN-IP>:3000   (to test on a real phone)
```

Browsers only allow the microphone on **https** pages (or `localhost`). To test on a phone over wifi, use `npm run dev:https`. It makes a self-signed certificate, so accept the browser warning on the phone. Production must be served over https.

## How it fits together

```
app/(game)/page.tsx           landing page and game shell
app/(game)/layout.tsx, game.css  full-screen layout, game fonts and colour tokens
components/halloween/*        landing page experience and Casper Custard jigsaw puzzle game
components/ui/Game.tsx        sucking game flow: intro → permission → calibrating → playing → won | lost
components/ui/*               screens, HUD, mute button, debug panel, custom SVG icons
components/three/Scene.tsx    canvas, Director (per-frame shared uniforms), camera, lights, bloom
components/three/Ghost.tsx    the ghost: portrait draped over the front of the cup (shader in ghostMaterial.ts)
components/three/Cup.tsx      real .glb or PlaceholderCup.tsx; both get the "cursed" shader
components/three/Atmosphere.tsx painted backdrop, lightning, cup shadow, fog, mist, fireflies, bats
components/three/Reveal.tsx   the win: flash, warm halo, sparkles
hooks/useBreathDetector.ts    mic → { rms, flatness, isSucking, calibrate() }
hooks/useGameLoop.ts          per-frame round loop (mic → engine → 3D, HUD at 10 Hz)
lib/gameConfig.ts             ★ every tunable number
lib/gameEngine.ts             pure round rules (progress, fight-backs, sampling)
lib/reveal.ts                 progress → where the ghost still covers the cup
lib/copy.ts                   every player-facing line
```

**One number drives the visuals.** The ghost and every cup material share a GLSL function, `ghostCover()` in `curse.ts`, that answers "is this point still covered?" for the current progress. The cup is haunted (pale and milky, with her pink glow swirling through it and a stuttering light) wherever it returns "covered", switches to its real colours wherever it returns "free", and a glowing pink seam runs along the border.

## Microphone detection

`useBreathDetector` opens the mic with echo cancellation, noise suppression and auto gain all **off**, so the browser doesn't filter out air noise. Every frame it reads an `AnalyserNode` (fftSize 2048) and computes:

- **RMS loudness** from the waveform
- **Spectral flatness** between 200 Hz and 6 kHz. Breath and air are noise-like (high flatness); voice, shouting and whistling are tonal (low flatness).

A frame counts as sucking only when **RMS ≥ threshold and flatness ≥ `minFlatness`**, held for `attackMs`. Before each round the mic listens to the room for 2 s during the 3-2-1 countdown and sets `threshold = clamp(roomNoise × thresholdFactor, minThreshold, maxThreshold)`.

## Tuning difficulty on real phones

Open with **`?debug`**. A panel shows live `rms`, `flatness`, `threshold` and `isSucking`, with green or red for each check. On a computer, **hold Space** to simulate sucking.
