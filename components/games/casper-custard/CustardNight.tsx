"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { DeviceTier } from "@/hooks/useDeviceTier";
import { batGeometry, softDot } from "@/components/games/wicked-rose/three/textures";

/** The rose game's cemetery, re-graded in Casper's colours by the backdrop shader. */
const BACKDROP = {
  url: "/games/wicked-rose/Moonlit%20Gothic%20Cemetery%20Gate.png",
  /** the part of the painting (0–1 from the left) kept in view on narrow screens: the gate, with the moon at the edge */
  focusX: 0.6,
  /** the painted moon: centre (0–1 from the left / bottom) and radius (as a share of the painting's height) */
  moon: { x: 0.685, y: 0.814, r: 0.154 },
  /** the house on the hill, whose lit windows flicker like candles */
  house: { x0: 0.14, x1: 0.36, y0: 0.5, y1: 0.68 },
};
/** room left round the painting for it to sway with the pointer */
const OVERSCAN = 1.07;
const CUSTARD = new THREE.Color("#fed778");
useTexture.preload(BACKDROP.url);

/** What the puzzle tells the night; the scene eases towards it every frame. */
export interface NightProps {
  /** pieces in place, 0–1: the cold haze lifts and the night turns custard-gold */
  progress: number;
  /** goes up by one every time a piece snaps in: the moon flares and the custard mist brightens */
  snaps: number;
  won: boolean;
  tier: DeviceTier;
  reducedMotion: boolean;
}

/** shared, mutable per-frame state, so nothing re-renders while it animates */
interface Glow {
  time: number;
  warm: number;
  flare: number;
  /** pointer position, −1…1, eased */
  sway: THREE.Vector2;
  /** where the moon is on screen right now (NDC), for the bats to circle */
  moon: THREE.Vector2;
}

/**
 * The night behind the Casper Custard jigsaw: the cemetery painting, alive and in Casper's colours.
 * Custard-gold mist rolls over the graves, clouds slide past a golden moon, candles flicker in the house,
 * bats loop the moon, little friendly ghosts peek out between the stones and fireflies drift about. Every
 * piece that snaps in makes the moon flare; the night warms as the picture comes together, and the win
 * bathes it all in gold.
 */
export default function CustardNight(props: NightProps) {
  const { tier } = props;
  return (
    <Canvas
      className="pointer-events-none"
      dpr={tier === "high" ? [1, 1.75] : tier === "mid" ? [1, 1.5] : 1}
      gl={{ antialias: false, powerPreference: "high-performance", alpha: false, stencil: false, depth: true }}
      camera={{ fov: 40, position: [0, 0, 8], near: 0.1, far: 60 }}
      // the canvas itself must let every pointer event through to the puzzle (its wrapper's class alone doesn't)
      onCreated={({ gl }) => {
        gl.domElement.style.pointerEvents = "none";
      }}
    >
      <color attach="background" args={["#120a1f"]} />
      <Night {...props} />
    </Canvas>
  );
}

function Night({ progress, snaps, won, tier, reducedMotion }: NightProps) {
  const glow = useMemo<Glow>(
    () => ({ time: 0, warm: 0, flare: 0, sway: new THREE.Vector2(), moon: new THREE.Vector2(0.4, 0.5) }),
    [],
  );
  const target = useRef({ progress, won });
  useEffect(() => {
    target.current = { progress, won };
  }, [progress, won]);

  // a piece just went in: flare
  const lastSnaps = useRef(snaps);
  useEffect(() => {
    if (snaps > lastSnaps.current) glow.flare = 1;
    lastSnaps.current = snaps;
  }, [snaps, glow]);

  // the pointer, anywhere on the page (the canvas itself takes no input: the puzzle is on top)
  const pointer = useRef(new THREE.Vector2());
  useEffect(() => {
    const move = (e: PointerEvent) => pointer.current.set((e.clientX / innerWidth) * 2 - 1, (e.clientY / innerHeight) * 2 - 1);
    addEventListener("pointermove", move);
    return () => removeEventListener("pointermove", move);
  }, []);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);
    glow.time += dt * (reducedMotion ? 0.25 : 1);
    const goal = target.current.won ? 1 : target.current.progress * 0.75;
    glow.warm = THREE.MathUtils.damp(glow.warm, goal, 1.6, dt);
    glow.flare = Math.max(0, glow.flare - dt * 1.4);
    if (!reducedMotion) glow.sway.lerp(pointer.current, 1 - Math.exp(-dt * 1.5));
  });

  const low = tier === "low";
  return (
    <>
      <Suspense fallback={null}>
        <Backdrop glow={glow} />
      </Suspense>
      <MoonBats glow={glow} count={low ? 4 : 7} reducedMotion={reducedMotion} />
      <FriendlyGhosts glow={glow} count={low ? 2 : 4} reducedMotion={reducedMotion} />
      <CustardFog glow={glow} count={low ? 5 : 9} />
      {!low && <Fireflies reducedMotion={reducedMotion} />}
      <WinLights won={won} count={low ? 14 : 28} reducedMotion={reducedMotion} />
    </>
  );
}

/**
 * The painting, drawn straight to the screen like CSS `object-fit: cover` and swaying a little with the
 * pointer. The shader re-paints its purple night in Casper's colours (aubergine shadows, amber mids,
 * custard highlights: a golden moon, golden mist) and brings it to life: mist rolling through the lower
 * half, cloud shadows passing the moon, a breathing moon halo that flares on every snap, and
 * candle-flicker in the house's windows.
 */
function Backdrop({ glow }: { glow: Glow }) {
  const map = useTexture(BACKDROP.url);
  const size = useThree((s) => s.size);
  const material = useMemo(() => {
    map.colorSpace = THREE.SRGBColorSpace;
    const image = map.image as { width: number; height: number };
    const { moon, house } = BACKDROP;
    return new THREE.ShaderMaterial({
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uMap: { value: map },
        uImageAspect: { value: image.width / image.height },
        uViewAspect: { value: 1 },
        uTime: { value: 0 },
        uWarm: { value: 0 },
        uFlare: { value: 0 },
        uSway: { value: new THREE.Vector2() },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform float uImageAspect, uViewAspect, uTime, uWarm, uFlare;
        uniform vec2 uSway;
        varying vec2 vUv;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
        }
        float fbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + 17.0; a *= 0.5; }
          return v;
        }

        void main() {
          // cover the screen, keep the focus column on narrow screens, sway into the overscan
          float r = uViewAspect / uImageAspect;
          vec2 scale = (r > 1.0 ? vec2(1.0, 1.0 / r) : vec2(r, 1.0)) / ${OVERSCAN.toFixed(2)};
          vec2 room = (1.0 - scale) * 0.5;
          vec2 centre = vec2(0.5 + clamp(${(BACKDROP.focusX - 0.5).toFixed(3)}, -room.x, room.x), 0.5);
          centre += clamp(uSway * vec2(-1.0, 1.0) * room * 0.6, -room, room);
          vec2 uv = (vUv - 0.5) * scale + centre;
          vec3 src = texture2D(uMap, uv).rgb;

          // the image's own aspect, so circles stay round
          vec2 aspect = vec2(uImageAspect, 1.0);

          // Casper's grade: the painting's light re-painted from aubergine through amber to custard.
          // The night starts a little cool and hushed, and warms up as the picture comes together.
          float lum = dot(src, vec3(0.299, 0.587, 0.114));
          lum = smoothstep(0.0, 0.92, lum);
          float heat = 0.45 + 0.55 * uWarm;
          vec3 shadows = vec3(0.07, 0.04, 0.12);
          vec3 mids = mix(vec3(0.36, 0.24, 0.42), vec3(0.66, 0.38, 0.13), heat);
          vec3 lights = mix(vec3(0.86, 0.8, 0.9), vec3(1.0, 0.86, 0.5), heat);
          vec3 col = lum < 0.5 ? mix(shadows, mids, lum * 2.0) : mix(mids, lights, (lum - 0.5) * 2.0);
          // a little of the painting's own colour, warmed, for texture
          col = mix(col, src * vec3(1.1, 0.8, 0.45), 0.18);

          // clouds drifting across the sky dim the moonlight as they pass
          float sky = smoothstep(0.45, 0.85, uv.y);
          float cloud = fbm(uv * vec2(3.0, 6.0) + vec2(uTime * 0.035, 0.0));
          cloud = smoothstep(0.5, 0.78, cloud) * sky;
          col *= 1.0 - cloud * 0.35;

          // the moon breathes, and flares when a piece snaps in
          float d = length((uv - vec2(${moon.x}, ${moon.y})) * aspect) / ${moon.r};
          float breathe = 0.75 + 0.25 * sin(uTime * 0.8);
          float halo = exp(-max(d - 0.9, 0.0) * 2.2) * (0.18 * breathe + 0.55 * uFlare) * (1.0 - cloud * 0.6);
          col += vec3(1.0, 0.82, 0.45) * halo;

          // candles in the house: brighten its warm, lit pixels (in the painting), flickering
          vec2 hm = step(vec2(${house.x0}, ${house.y0}), uv) * step(uv, vec2(${house.x1}, ${house.y1}));
          float lit = smoothstep(0.25, 0.55, src.r - src.b) * hm.x * hm.y;
          float flicker = 0.6 + 0.4 * noise(vec2(uTime * 6.0, floor(uv.x * 40.0)));
          col += vec3(1.0, 0.6, 0.2) * lit * flicker * 0.5;

          // custard mist rolling over the graves, two layers at different speeds
          float ground = smoothstep(0.62, 0.05, uv.y);
          float m1 = fbm(uv * vec2(2.2, 5.0) + vec2(uTime * 0.05, sin(uTime * 0.2) * 0.1));
          float m2 = fbm(uv * vec2(4.0, 8.0) - vec2(uTime * 0.08, 0.0));
          float mist = smoothstep(0.4, 0.85, m1 * 0.6 + m2 * 0.5) * ground;
          col += vec3(1.0, 0.76, 0.38) * mist * (0.28 + 0.25 * uWarm + 0.15 * uFlare);

          // dim the middle a little so the puzzle reads, and darken the edges
          vec2 c = vUv - 0.5;
          col *= mix(1.0, 0.72, smoothstep(0.35, 0.0, length(c * vec2(1.6, 1.0))));
          col *= 1.0 - smoothstep(0.35, 0.85, length(c)) * 0.55;

          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }
      `,
    });
  }, [map]);
  useEffect(() => () => material.dispose(), [material]);

  useFrame(() => {
    const u = material.uniforms;
    u.uViewAspect.value = size.width / Math.max(size.height, 1);
    u.uTime.value = glow.time;
    u.uWarm.value = glow.warm;
    u.uFlare.value = glow.flare;
    (u.uSway.value as THREE.Vector2).copy(glow.sway);

    // where the painted moon lands on screen (the inverse of the shader's mapping), for the bats
    const viewAspect = u.uViewAspect.value as number;
    const imageAspect = u.uImageAspect.value as number;
    const r = viewAspect / imageAspect;
    const sx = (r > 1 ? 1 : r) / OVERSCAN;
    const sy = (r > 1 ? 1 / r : 1) / OVERSCAN;
    const roomX = (1 - sx) / 2;
    const roomY = (1 - sy) / 2;
    const cx = 0.5 + THREE.MathUtils.clamp(BACKDROP.focusX - 0.5, -roomX, roomX) + THREE.MathUtils.clamp(-glow.sway.x * roomX * 0.6, -roomX, roomX);
    const cy = 0.5 + THREE.MathUtils.clamp(glow.sway.y * roomY * 0.6, -roomY, roomY);
    glow.moon.set(((BACKDROP.moon.x - cx) / sx) * 2, ((BACKDROP.moon.y - cy) / sy) * 2);
  });

  return (
    <mesh material={material} renderOrder={-10} frustumCulled={false}>
      <planeGeometry />
    </mesh>
  );
}

/** turns a point on screen (NDC) into the world, `depth` in front of the camera */
function useUnproject() {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const size = useThree((s) => s.size);
  return (ndcX: number, ndcY: number, depth: number, out: THREE.Vector3) => {
    const h = 2 * depth * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const w = h * (size.width / Math.max(size.height, 1));
    return out.set((ndcX * w) / 2, (ndcY * h) / 2, camera.position.z - depth);
  };
}

/** A little flock of bats looping round the painted moon, wherever it is on screen. */
function MoonBats({ glow, count, reducedMotion }: { glow: Glow; count: number; reducedMotion: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const geometry = useMemo(() => batGeometry(), []);
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: "#0a0612", side: THREE.DoubleSide, depthTest: false }), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const centre = useMemo(() => new THREE.Vector3(), []);
  const unproject = useUnproject();
  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material],
  );

  useFrame(() => {
    const m = mesh.current;
    if (!m) return;
    unproject(glow.moon.x, glow.moon.y, 14, centre);
    const t = glow.time;
    for (let i = 0; i < count; i++) {
      const a = t * (0.35 + (i % 3) * 0.06) + i * 1.9;
      const r = 1.6 + (i % 3) * 0.5;
      dummy.position.set(centre.x + Math.sin(a) * r, centre.y + Math.cos(a * 1.3) * r * 0.45 + (i % 2) * 0.3, centre.z + Math.cos(a) * 0.5);
      const flap = reducedMotion ? 0.8 : 0.35 + 0.65 * Math.abs(Math.sin(t * 10 + i * 2));
      const heading = Math.cos(a) >= 0 ? 1 : -1;
      const s = 0.4 + (i % 3) * 0.12;
      dummy.scale.set(s * flap * heading, s, s);
      dummy.rotation.z = Math.sin(t * 2 + i) * 0.2;
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  });

  return <instancedMesh ref={mesh} args={[geometry, material, count]} renderOrder={-5} frustumCulled={false} />;
}

/** a small round friendly ghost with a wavy hem and two dark eyes, drawn once */
function ghostTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 160;
  const ctx = canvas.getContext("2d")!;
  ctx.shadowColor = "rgba(255, 230, 170, 0.9)";
  ctx.shadowBlur = 18;
  ctx.fillStyle = "rgba(255, 250, 236, 0.95)";
  ctx.beginPath();
  ctx.moveTo(24, 150);
  ctx.lineTo(24, 70);
  ctx.arc(64, 70, 40, Math.PI, 0);
  ctx.lineTo(104, 150);
  for (let i = 0; i < 4; i++) ctx.quadraticCurveTo(99 - i * 20, 132, 94 - i * 20 - 5, 150);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#2a1838";
  for (const x of [50, 78]) {
    ctx.beginPath();
    ctx.ellipse(x, 72, 6, 9, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = "rgba(255, 150, 170, 0.6)";
  for (const x of [42, 86]) {
    ctx.beginPath();
    ctx.ellipse(x, 88, 6, 3.5, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** Casper's friends: little ghosts that rise from behind the graves, bob about, wave, and sink away again. */
function FriendlyGhosts({ glow, count, reducedMotion }: { glow: Glow; count: number; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const texture = useMemo(() => ghostTexture(), []);
  const materials = useMemo(
    () => Array.from({ length: count }, () => new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false, opacity: 0 })),
    [texture, count],
  );
  // out at the edges of the screen, clear of the board and the loose pieces
  const ghosts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: [0.88, -0.9, 0.6, -0.62][i % 4],
        y: [-0.2, -0.05, -0.75, -0.7][i % 4],
        depth: 9 + (i % 2) * 3,
        cycle: 11 + i * 2.3,
        offset: i * 4.1,
      })),
    [count],
  );
  const unproject = useUnproject();
  const at = useMemo(() => new THREE.Vector3(), []);
  useEffect(
    () => () => {
      texture.dispose();
      materials.forEach((m) => m.dispose());
    },
    [texture, materials],
  );

  useFrame(() => {
    const children = group.current?.children;
    if (!children) return;
    ghosts.forEach((g, i) => {
      // each ghost: rises out (0–0.2), bobs about (0.2–0.8), sinks back (0.8–1), then waits a while
      const life = ((glow.time + g.offset) % g.cycle) / g.cycle;
      const up = THREE.MathUtils.smoothstep(life, 0, 0.2) * (1 - THREE.MathUtils.smoothstep(life, 0.7, 0.9));
      const bob = reducedMotion ? 0 : Math.sin(glow.time * 1.8 + i) * 0.12;
      unproject(g.x + Math.sin(glow.time * 0.4 + i) * 0.04, g.y, g.depth, at);
      const sprite = children[i] as THREE.Sprite;
      sprite.position.set(at.x, at.y - 0.6 + up * 0.8 + bob, at.z);
      sprite.material.rotation = reducedMotion ? 0 : Math.sin(glow.time * 2.2 + i) * 0.12;
      // braver as the night warms up
      materials[i].opacity = up * (0.55 + glow.warm * 0.35);
    });
  });

  return (
    <group ref={group}>
      {materials.map((m, i) => (
        <sprite key={i} material={m} scale={[0.8, 1, 1]} renderOrder={-4} />
      ))}
    </group>
  );
}

/** Soft golden fog sheets drifting low across the screen, in front of the painting. */
function CustardFog({ glow, count }: { glow: Glow; count: number }) {
  const group = useRef<THREE.Group>(null);
  const material = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: softDot(),
        color: "#c99247",
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        opacity: 0.12,
      }),
    [],
  );
  useEffect(() => () => material.dispose(), [material]);
  const puffs = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: (i / count - 0.5) * 16,
        y: -2.6 + (i % 3) * 0.7,
        size: 4 + (i % 3) * 1.6,
        speed: 0.12 + (i % 4) * 0.05,
      })),
    [count],
  );

  useFrame(() => {
    const children = group.current?.children;
    if (!children) return;
    puffs.forEach((p, i) => {
      children[i].position.x = ((p.x + glow.time * p.speed + 9) % 18) - 9;
      children[i].position.y = p.y + Math.sin(glow.time * 0.3 + i) * 0.15;
    });
    material.opacity = 0.1 + glow.warm * 0.08 + glow.flare * 0.08;
  });

  return (
    <group ref={group}>
      {puffs.map((p, i) => (
        <sprite key={i} material={material} position={[p.x, p.y, -1]} scale={[p.size, p.size * 0.45, 1]} renderOrder={-3} />
      ))}
    </group>
  );
}

/** Golden fireflies drifting over the graves. */
function Fireflies({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Sparkles
      count={45}
      scale={[14, 7, 4]}
      position={[0, -0.5, -1]}
      size={3}
      speed={reducedMotion ? 0.05 : 0.35}
      color={CUSTARD}
      opacity={0.85}
      noise={1.5}
    />
  );
}

/** At the win: golden lights rise from the ground like pearls of custard boba floating free. */
function WinLights({ won, count, reducedMotion }: { won: boolean; count: number; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const material = useMemo(
    () =>
      new THREE.SpriteMaterial({
        map: softDot(),
        color: "#ffd98a",
        transparent: true,
        depthWrite: false,
        depthTest: false,
        blending: THREE.AdditiveBlending,
        opacity: 0,
      }),
    [],
  );
  useEffect(() => () => material.dispose(), [material]);
  const lights = useMemo(
    () => Array.from({ length: count }, (_, i) => ({ x: ((i * 0.618) % 1) * 12 - 6, speed: 0.5 + ((i * 0.37) % 1) * 0.8, phase: (i * 0.29) % 1, size: 0.15 + ((i * 0.53) % 1) * 0.25 })),
    [count],
  );
  const t = useRef(0);

  useFrame((_, delta) => {
    const children = group.current?.children;
    if (!children) return;
    material.opacity = THREE.MathUtils.damp(material.opacity, won ? 0.9 : 0, 2, delta);
    if (material.opacity < 0.01) return;
    t.current += delta * (reducedMotion ? 0.3 : 1);
    lights.forEach((l, i) => {
      const y = ((l.phase + (t.current * l.speed) / 8) % 1) * 9 - 4.5;
      children[i].position.set(l.x + Math.sin(t.current + i) * 0.3, y, 0);
    });
  });

  return (
    <group ref={group}>
      {lights.map((l, i) => (
        <sprite key={i} material={material} position={[l.x, -10, 0]} scale={[l.size, l.size, 1]} renderOrder={-2} />
      ))}
    </group>
  );
}
