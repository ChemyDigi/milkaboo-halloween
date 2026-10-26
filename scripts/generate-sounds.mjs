// Synthesises placeholder sounds into public/sounds/*.wav. Replace them with real sound design any time
// (keep the file names). Run: node scripts/generate-sounds.mjs
//
// Note on "slurp": the mic runs without echo cancellation, so an in-game whoosh made of noise would be heard
// by the mic and could keep the detector triggered by itself. The slurp is deliberately tonal (bubbly blips),
// which the spectral-flatness check ignores. Keep any replacement tonal too.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RATE = 22050;
const OUT = join(process.cwd(), "public", "sounds");
mkdirSync(OUT, { recursive: true });

let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) * 2 - 1;
const TAU = Math.PI * 2;

function writeWav(name, samples) {
  const data = Buffer.alloc(samples.length * 2);
  let peak = 0;
  for (const s of samples) peak = Math.max(peak, Math.abs(s));
  const gain = peak > 0 ? 0.9 / peak : 1;
  samples.forEach((s, i) => data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s * gain)) * 32767), i * 2));
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + data.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // PCM
  header.writeUInt16LE(1, 22); // mono
  header.writeUInt32LE(RATE, 24);
  header.writeUInt32LE(RATE * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write("data", 36);
  header.writeUInt32LE(data.length, 40);
  writeFileSync(join(OUT, `${name}.wav`), Buffer.concat([header, data]));
  console.log(`wrote ${name}.wav (${(samples.length / RATE).toFixed(1)}s)`);
}

const render = (seconds, fn) => Float32Array.from({ length: Math.round(seconds * RATE) }, (_, i) => fn(i / RATE, i));
const env = (t, attack, release, length) => Math.min(1, t / attack) * Math.min(1, Math.max(0, (length - t) / release));

// ambient: a 10 s seamless drone (every frequency fits a whole number of cycles into 10 s) plus soft wind
{
  const len = 10;
  let lp = 0;
  const wind = render(len, () => (lp += (rand() - lp) * 0.02));
  const out = render(len, (t, i) => {
    const swell = 0.6 + 0.4 * Math.sin((TAU * t) / 5);
    const drone = Math.sin(TAU * 55 * t) * 0.5 + Math.sin(TAU * 82.4 * t) * 0.25 * swell + Math.sin(TAU * 110.3 * t) * 0.12;
    const bell = Math.sin(TAU * 659.3 * t) * Math.exp(-((t % 5) * 1.2)) * 0.06;
    return drone * 0.5 + wind[i] * 1.2 * (0.5 + 0.5 * Math.sin((TAU * t) / 10)) + bell;
  });
  // crossfade the wind's ends so the loop point is invisible
  const fade = Math.round(0.5 * RATE);
  for (let i = 0; i < fade; i++) {
    const k = i / fade;
    out[i] = out[i] * k + out[out.length - fade + i] * (1 - k);
  }
  writeWav("ambient", out.slice(0, out.length - fade));
}

// wail: a ghostly "oooOOOooo" glide with vibrato
{
  const len = 1.4;
  let phase = 0;
  writeWav(
    "wail",
    render(len, (t) => {
      const glide = 300 + 260 * Math.sin((Math.PI * t) / len) + 12 * Math.sin(TAU * 6 * t);
      phase += (TAU * glide) / RATE;
      return (Math.sin(phase) + 0.3 * Math.sin(phase * 2) + 0.12 * Math.sin(phase * 3)) * env(t, 0.15, 0.4, len);
    }),
  );
}

// slurp: tonal boba-bubble blips, loops for as long as the player sucks
{
  const len = 1.2;
  const blips = [0.0, 0.17, 0.31, 0.5, 0.62, 0.8, 0.95, 1.06];
  writeWav(
    "slurp",
    render(len, (t) => {
      let s = 0;
      blips.forEach((at, k) => {
        const dt = t - at;
        if (dt < 0 || dt > 0.12) return;
        const f = 260 + (k % 3) * 70 + dt * 1800;
        s += Math.sin(TAU * f * dt) * Math.exp(-dt * 30);
      });
      return s;
    }),
  );
}

// shloop: the ghost sucked off the cup, a fast falling sweep
{
  const len = 0.7;
  let phase = 0;
  writeWav(
    "shloop",
    render(len, (t) => {
      const f = 1200 * Math.pow(120 / 1200, t / len);
      phase += (TAU * f) / RATE;
      return (Math.sin(phase) + 0.15 * rand()) * env(t, 0.02, 0.25, len);
    }),
  );
}

// win: bright major arpeggio with a sparkle
{
  const len = 2.2;
  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
  writeWav(
    "win",
    render(len, (t) => {
      let s = 0;
      notes.forEach((f, k) => {
        const dt = t - k * 0.12;
        if (dt < 0) return;
        s += (Math.sin(TAU * f * dt) + 0.3 * Math.sin(TAU * f * 2 * dt)) * Math.exp(-dt * 2.2) * 0.4;
      });
      return s;
    }),
  );
}

// laugh: "ha-ha-ha-haaa" from a buzzy voice falling in pitch
{
  const len = 1.8;
  let phase = 0;
  writeWav(
    "laugh",
    render(len, (t) => {
      const k = Math.floor(t / 0.28);
      const local = t - k * 0.28;
      const on = k < 6 ? Math.max(0, Math.sin((Math.PI * local) / 0.22)) * (local < 0.22 ? 1 : 0) : 0;
      const f = 210 - k * 14 + 30 * Math.exp(-local * 10);
      phase += (TAU * f) / RATE;
      const buzz = (phase % TAU) / Math.PI - 1; // sawtooth
      return (buzz * 0.6 + Math.sin(phase * 3) * 0.3) * on * env(t, 0.01, 0.2, len);
    }),
  );
}

// site-ambience: the website's background music, a 16 s seamless loop of a creepy A-minor music-box lullaby
// over a low drone and wind, with a distant ghost moan. Every drone frequency is a whole number of cycles in
// 16 s, and the music-box echo wraps around the loop point, so it repeats without a click.
{
  const len = 16;
  const n = len * RATE;
  const out = new Float32Array(n);
  const hz = (midi) => 440 * Math.pow(2, (midi - 69) / 12);
  // [start in half-second steps, midi note]
  const melody = [
    [0, 69], [1, 72], [2, 76], [3, 80], [4, 81], [6, 76], [7, 72],
    [8, 71], [9, 74], [10, 77], [11, 76], [12, 75], [14, 71],
    [16, 69], [17, 72], [18, 76], [19, 81], [20, 80], [21, 77], [22, 76],
    [24, 74], [25, 71], [26, 68], [27, 71], [28, 69],
  ];
  for (const [step, midi] of melody) {
    const f = hz(midi);
    const at = Math.round(step * 0.5 * RATE);
    for (let i = 0; i < 2.4 * RATE; i++) {
      const t = i / RATE;
      // music box: bright attack, slightly inharmonic overtone, long ring
      const s = (Math.sin(TAU * f * t) + 0.25 * Math.sin(TAU * f * 2.76 * t) * Math.exp(-t * 6)) * Math.exp(-t * 2.2);
      out[(at + i) % n] += s * Math.min(1, t / 0.004) * 0.22;
    }
  }
  // echo, run twice around the loop so the tail of the last notes rings into the start
  const delay = Math.round(0.375 * RATE);
  for (let pass = 0; pass < 2; pass++) for (let i = 0; i < n; i++) out[i] += out[(i - delay + n) % n] * 0.35 * (pass ? 0.3 : 1);

  let lp = 0;
  const wind = render(len + 1, () => (lp += (rand() - lp) * 0.015));
  const fade = RATE;
  for (let i = 0; i < n; i++) {
    const t = i / RATE;
    const drone = Math.sin(TAU * 55 * t) * 0.35 + Math.sin(TAU * 82.375 * t) * 0.18 * (0.6 + 0.4 * Math.sin((TAU * t) / 8));
    // wind crossfaded with its own extra second so the loop seam is invisible
    const w = i < fade ? wind[i] * (i / fade) + wind[n + i] * (1 - i / fade) : wind[i];
    const gust = 0.5 + 0.5 * Math.sin((TAU * t) / 16);
    // ghost moan around 9–12 s
    const mt = t - 9;
    const moan = mt > 0 && mt < 3 ? Math.sin(TAU * (330 + 90 * Math.sin((Math.PI * mt) / 3)) * mt + 3 * Math.sin(TAU * 5 * mt) / 5) * Math.sin((Math.PI * mt) / 3) * 0.08 : 0;
    out[i] += drone * 0.4 + w * 1.4 * gust + moan;
  }
  writeWav("site-ambience", out);
}
