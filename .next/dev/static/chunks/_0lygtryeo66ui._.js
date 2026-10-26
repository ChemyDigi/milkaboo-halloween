(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/components/games/wicked-rose/three/Atmosphere.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GROUND_Y",
    ()=>GROUND_Y,
    "default",
    ()=>Atmosphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export D as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/textures.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const { colors, backdrop } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
const HORIZON = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colors.fog);
const WARM_HORIZON = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#4a2a44");
const GROUND_Y = -1.5;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"].preload(backdrop.url);
function Atmosphere({ visual, tier, reducedMotion, curse }) {
    _s();
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"])({
        "Atmosphere.useThree[scene]": (s)=>s.scene
    }["Atmosphere.useThree[scene]"]);
    const fog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Atmosphere.useMemo[fog]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fog"](HORIZON.clone(), 6, 30)
    }["Atmosphere.useMemo[fog]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Atmosphere.useEffect": ()=>{
            scene.fog = fog;
            return ({
                "Atmosphere.useEffect": ()=>{
                    scene.fog = null;
                }
            })["Atmosphere.useEffect"];
        }
    }["Atmosphere.useEffect"], [
        scene,
        fog
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Atmosphere.useFrame": ()=>{
            fog.color.copy(HORIZON).lerp(WARM_HORIZON, visual.warm);
            fog.far = 30 + visual.warm * 12;
        }
    }["Atmosphere.useFrame"]);
    const low = tier === "low";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                attach: "background",
                args: [
                    colors.night
                ]
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Backdrop, {
                    curse: curse
                }, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lightning, {
                visual: visual,
                curse: curse,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CupShadow, {
                visual: visual
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            !low && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                count: 30,
                scale: [
                    10,
                    2.4,
                    5
                ],
                position: [
                    0,
                    GROUND_Y + 1.2,
                    -2.5
                ],
                size: 2.2,
                speed: 0.25,
                color: "#ffb3d9",
                opacity: 0.6
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GroundMist, {
                visual: visual,
                count: low ? 4 : 7,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FogPuffs, {
                visual: visual,
                count: low ? 4 : 8,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Mist, {
                visual: visual,
                count: low ? 4 : 7
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bats, {
                visual: visual,
                reducedMotion: reducedMotion,
                count: low ? 4 : 7,
                center: [
                    0,
                    2.6,
                    -5
                ],
                radius: 3.5,
                size: 0.5,
                speed: 0.3
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bats, {
                visual: visual,
                reducedMotion: reducedMotion,
                count: low ? 3 : 6,
                center: [
                    2.4,
                    5.2,
                    -12
                ],
                radius: 3.0,
                size: 0.8,
                speed: 0.18
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BatSwarm, {
                visual: visual,
                curse: curse,
                reducedMotion: reducedMotion,
                count: low ? 6 : 12
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Atmosphere, "Z6V39Oup8pqj8BuPoYDcHFR3PG8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Atmosphere;
/**
 * The painted cemetery (`gameConfig.backdrop`), far behind everything. It always fills the screen like
 * CSS `object-fit: cover` (never zoomed in beyond that), and is slid so its painted ground (`backdrop.ground`)
 * comes as close as it can to the cup's base on screen: the cup stands on the painting. It lights up with
 * the lightning (the sky more than the ground) and the warm glow of the win.
 */ function Backdrop({ curse }) {
    _s1();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])(backdrop.url);
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Backdrop.useMemo[material]": ()=>{
            map.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                depthWrite: false,
                uniforms: {
                    uMap: {
                        value: map
                    },
                    uHaze: {
                        value: HORIZON.clone()
                    },
                    uFlash: curse.uFlash,
                    uWarm: curse.uWarm
                },
                vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
                fragmentShader: /* glsl */ `
        uniform sampler2D uMap;
        uniform vec3 uHaze;
        uniform float uFlash;
        uniform float uWarm;
        varying vec2 vUv;
        void main() {
          // seen through the night haze: softer and lower in contrast, so the cup and the ghost stand out
          vec3 col = mix(uHaze * 0.6, texture2D(uMap, vUv).rgb, ${backdrop.opacity.toFixed(2)});
          float sky = smoothstep(0.35, 0.8, vUv.y);
          col += col * uFlash * (0.5 + 1.6 * sky) + vec3(0.35, 0.4, 0.75) * uFlash * 0.22 * sky;
          col = mix(col, col * vec3(1.35, 1.1, 1.0) + vec3(0.03, 0.015, 0.0), uWarm * 0.35);
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `
            });
        }
    }["Backdrop.useMemo[material]"], [
        map,
        curse
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Backdrop.useEffect": ()=>({
                "Backdrop.useEffect": ()=>material.dispose()
            })["Backdrop.useEffect"]
    }["Backdrop.useEffect"], [
        material
    ]);
    const forward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Backdrop.useMemo[forward]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Backdrop.useMemo[forward]"], []);
    const right = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Backdrop.useMemo[right]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Backdrop.useMemo[right]"], []);
    const up = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Backdrop.useMemo[up]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Backdrop.useMemo[up]"], []);
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Backdrop.useMemo[base]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["Backdrop.useMemo[base]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Backdrop.useFrame": ({ camera, size })=>{
            const m = mesh.current;
            if (!m) return;
            const cam = camera;
            const image = map.image;
            const imageAspect = image.width / image.height;
            const d = backdrop.distance;
            const viewH = 2 * d * Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(cam.fov / 2));
            const viewW = viewH * (size.width / Math.max(size.height, 1));
            // where the cup's base is on screen, as a height on the backdrop's plane
            cam.updateMatrixWorld();
            const baseY = base.set(0, GROUND_Y, 0).project(cam).y * viewH / 2;
            // just cover the view (a hair more for the parallax), never zoom in further; then slide the painted
            // ground as close to the cup's base as the picture allows without showing its top or bottom edge
            const h = Math.max(viewH, viewW / imageAspect) * 1.02;
            const slideY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(baseY - (backdrop.ground - 0.5) * h, -(h - viewH) / 2, (h - viewH) / 2);
            const w = h * imageAspect;
            const slideX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp((0.5 - backdrop.focusX) * w - cam.position.x * 0.4, -(w - viewW) / 2, (w - viewW) / 2);
            cam.getWorldDirection(forward);
            right.setFromMatrixColumn(cam.matrixWorld, 0);
            up.setFromMatrixColumn(cam.matrixWorld, 1);
            m.position.copy(cam.position).addScaledVector(forward, d).addScaledVector(right, slideX).addScaledVector(up, slideY);
            m.quaternion.copy(cam.quaternion);
            m.scale.set(w, h, 1);
        }
    }["Backdrop.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: mesh,
        material: material,
        renderOrder: -10,
        frustumCulled: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {}, void 0, false, {
            fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s1(Backdrop, "BU+Ws+Vf1Sad7iq/M5XPJRcgkCU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = Backdrop;
/** Lightning every so often: a bolt across the sky, the backdrop, ghost and cup light up, and the bats scatter. */ function Lightning({ visual, curse, reducedMotion }) {
    _s2();
    const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const strike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        next: 5,
        flashes: [],
        boltUntil: 0
    });
    const bolt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Lightning.useMemo[bolt]": ()=>{
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](new Float32Array(16 * 3), 3));
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](2.5, 2.6, 3.5),
                toneMapped: false,
                fog: false,
                transparent: true
            });
            const line = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](geometry, material);
            line.visible = false;
            line.frustumCulled = false;
            return line;
        }
    }["Lightning.useMemo[bolt]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lightning.useEffect": ()=>({
                "Lightning.useEffect": ()=>{
                    bolt.geometry.dispose();
                    bolt.material.dispose();
                }
            })["Lightning.useEffect"]
    }["Lightning.useEffect"], [
        bolt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Lightning.useFrame": ()=>{
            const t = visual.time;
            const s = strike.current;
            if (t >= s.next) {
                s.flashes = [
                    {
                        at: t,
                        power: 1
                    },
                    {
                        at: t + 0.1,
                        power: 0.45
                    },
                    {
                        at: t + 0.28,
                        power: 0.8
                    }
                ];
                s.next = t + 7 + Math.random() * 10;
                s.boltUntil = t + 0.26;
                // a fresh jagged bolt from the clouds to the hill
                const pos = bolt.geometry.attributes.position;
                let x = -8 + Math.random() * 16;
                let y = 11;
                for(let i = 0; i < pos.count; i++){
                    pos.setXYZ(i, x, y, -20 - Math.random() * 0.5);
                    x += (Math.random() - 0.5) * 1.5;
                    y -= 0.8 * (0.5 + Math.random());
                }
                pos.needsUpdate = true;
            }
            let flash = 0;
            for (const f of s.flashes)if (t >= f.at) flash += f.power * Math.exp(-(t - f.at) * 16);
            if (reducedMotion) flash = Math.min(flash, 0.15);
            curse.uFlash.value = flash;
            if (light.current) light.current.intensity = flash * 5;
            bolt.visible = !reducedMotion && t < s.boltUntil && flash > 0.05;
            bolt.material.opacity = Math.min(1, flash);
        }
    }["Lightning.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                ref: light,
                position: [
                    -3,
                    8,
                    -8
                ],
                color: "#c2ccff",
                intensity: 0
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: bolt
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s2(Lightning, "OJDoSoUzqHZHcWjj45tn+EJlJIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = Lightning;
/** The cup's shadow on the painted ground: a wide soft one, and a dark contact shadow hugging the base. */ function CupShadow({ visual }) {
    _s3();
    const { shadow, contact } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CupShadow.useMemo": ()=>({
                shadow: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softDot"])(),
                    color: "#000",
                    transparent: true,
                    opacity: 0.85,
                    depthWrite: false
                }),
                contact: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                    map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactShadow"])(),
                    transparent: true,
                    opacity: 0.9,
                    depthWrite: false
                })
            })
    }["CupShadow.useMemo"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CupShadow.useEffect": ()=>({
                "CupShadow.useEffect": ()=>{
                    shadow.dispose();
                    contact.dispose();
                }
            })["CupShadow.useEffect"]
    }["CupShadow.useEffect"], [
        shadow,
        contact
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "CupShadow.useFrame": ()=>{
            shadow.opacity = 0.85 - visual.warm * 0.3;
            contact.opacity = 0.9 - visual.warm * 0.25;
        }
    }["CupShadow.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                material: shadow,
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    GROUND_Y + 0.01,
                    0.15
                ],
                scale: [
                    4.4,
                    3.0,
                    1
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {}, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                material: contact,
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    GROUND_Y + 0.02,
                    0.05
                ],
                scale: [
                    2.3,
                    2.0,
                    1
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {}, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_s3(CupShadow, "6mXFn1M2QlcyXfUQre4g48RtYUc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = CupShadow;
/** Low mist creeping over the graves. */ function GroundMist({ visual, count, reducedMotion }) {
    _s4();
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroundMist.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softDot"])(),
                color: "#4a3a6a",
                transparent: true,
                opacity: 0.22,
                depthWrite: false
            })
    }["GroundMist.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroundMist.useEffect": ()=>({
                "GroundMist.useEffect": ()=>material.dispose()
            })["GroundMist.useEffect"]
    }["GroundMist.useEffect"], [
        material
    ]);
    const puffs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GroundMist.useMemo[puffs]": ()=>Array.from({
                length: count
            }, {
                "GroundMist.useMemo[puffs]": (_, i)=>({
                        x: (i / count - 0.5) * 14,
                        z: -1 - i % 4 * 2.2,
                        w: 6 + i % 3 * 2,
                        speed: 0.1 + i % 3 * 0.04
                    })
            }["GroundMist.useMemo[puffs]"])
    }["GroundMist.useMemo[puffs]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "GroundMist.useFrame": ()=>{
            const drift = reducedMotion ? 0.2 : 1;
            group.current?.children.forEach({
                "GroundMist.useFrame": (c, i)=>{
                    const p = puffs[i];
                    c.position.x = (p.x + visual.time * p.speed * drift + 9) % 18 - 9;
                }
            }["GroundMist.useFrame"]);
            material.opacity = 0.22 * (1 - visual.warm * 0.6);
        }
    }["GroundMist.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: group,
        children: puffs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sprite", {
                material: material,
                position: [
                    p.x,
                    GROUND_Y + 0.35,
                    p.z
                ],
                scale: [
                    p.w,
                    1.5,
                    1
                ]
            }, i, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 264,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s4(GroundMist, "kQNw29/YOqaS4cay+oFN94ZVcLY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = GroundMist;
/** Big, slow, drifting sheets of purple fog behind and in front of the cup. */ function FogPuffs({ visual, count, reducedMotion }) {
    _s5();
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const puffs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FogPuffs.useMemo[puffs]": ()=>Array.from({
                length: count
            }, {
                "FogPuffs.useMemo[puffs]": (_, i)=>({
                        x: (i / count - 0.5) * 9,
                        y: -1.3 + i % 3 * 1.1,
                        z: -5 + i % 4 * 1.6,
                        size: 4 + i % 3 * 1.5,
                        speed: 0.08 + i % 5 * 0.03
                    })
            }["FogPuffs.useMemo[puffs]"])
    }["FogPuffs.useMemo[puffs]"], [
        count
    ]);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FogPuffs.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softDot"])(),
                color: "#6b3fb8",
                transparent: true,
                depthWrite: false,
                opacity: 0.14
            })
    }["FogPuffs.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FogPuffs.useEffect": ()=>({
                "FogPuffs.useEffect": ()=>material.dispose()
            })["FogPuffs.useEffect"]
    }["FogPuffs.useEffect"], [
        material
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "FogPuffs.useFrame": ()=>{
            const children = group.current?.children;
            if (!children) return;
            const drift = reducedMotion ? 0.2 : 1;
            puffs.forEach({
                "FogPuffs.useFrame": (p, i)=>{
                    children[i].position.x = (p.x + visual.time * p.speed * drift + 6) % 12 - 6;
                }
            }["FogPuffs.useFrame"]);
            material.opacity = 0.14 * (1 - visual.warm * 0.75);
        }
    }["FogPuffs.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: group,
        children: puffs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sprite", {
                material: material,
                position: [
                    p.x,
                    p.y,
                    p.z
                ],
                scale: [
                    p.size,
                    p.size * 0.6,
                    1
                ]
            }, i, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 303,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
_s5(FogPuffs, "gHLILv0dwRjGoc0T/iRAd9i3JTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c5 = FogPuffs;
/** Dark purple mist leaking out from under the ghost; it thins as the cup comes free and is gone at the win. */ function Mist({ visual, count }) {
    _s6();
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Mist.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softDot"])(),
                color: "#7a3cff",
                transparent: true,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                opacity: 0.4
            })
    }["Mist.useMemo[material]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Mist.useEffect": ()=>({
                "Mist.useEffect": ()=>material.dispose()
            })["Mist.useEffect"]
    }["Mist.useEffect"], [
        material
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Mist.useFrame": ()=>{
            const children = group.current?.children;
            if (!children) return;
            children.forEach({
                "Mist.useFrame": (child, i)=>{
                    const phase = visual.time * 0.35 + i * 0.9;
                    const life = phase % 1;
                    const angle = i * 2.4 + Math.floor(phase) * 0.7;
                    const r = 0.9 + life * 1.0;
                    child.position.set(Math.sin(angle) * r, GROUND_Y + 0.15 + life * 0.4, Math.cos(angle) * r * 0.7);
                    const size = 1 + life * 1.6;
                    child.scale.set(size, size * 0.55, 1);
                }
            }["Mist.useFrame"]);
            material.opacity = 0.32 * (1 - visual.progress * 0.7) * (1 - visual.exit) * (1 + visual.grip * 0.8);
        }
    }["Mist.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: group,
        children: Array.from({
            length: count
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sprite", {
                material: material
            }, i, false, {
                fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
                lineNumber: 344,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
_s6(Mist, "AlVswMcyp2/OZx6mTGrpcaXIvdI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c6 = Mist;
/** A flock of bats looping round a point: one instanced mesh, flapping by squashing their width. */ function Bats({ visual, reducedMotion, count, center, radius, size, speed }) {
    _s7();
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bats.useMemo[geometry]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batGeometry"])()
    }["Bats.useMemo[geometry]"], []);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bats.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: "#070410",
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            })
    }["Bats.useMemo[material]"], []);
    const dummy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bats.useMemo[dummy]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]()
    }["Bats.useMemo[dummy]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Bats.useEffect": ()=>({
                "Bats.useEffect": ()=>{
                    geometry.dispose();
                    material.dispose();
                }
            })["Bats.useEffect"]
    }["Bats.useEffect"], [
        geometry,
        material
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Bats.useFrame": ()=>{
            const m = mesh.current;
            if (!m) return;
            const t = visual.time * (reducedMotion ? 0.3 : 1);
            for(let i = 0; i < count; i++){
                const a = t * (speed + i % 3 * 0.05) + i * 1.9;
                const r = radius * (0.7 + i % 3 * 0.15);
                dummy.position.set(center[0] + Math.sin(a) * r, center[1] + i % 4 * 0.5 - 0.8 + Math.sin(t * 1.3 + i) * 0.4, center[2] + Math.cos(a) * r * 0.4 + 0.6);
                const flap = reducedMotion ? 0.8 : 0.35 + 0.65 * Math.abs(Math.sin(t * 11 + i * 2));
                const heading = Math.cos(a) >= 0 ? 1 : -1;
                const s = size * (0.8 + i % 3 * 0.2);
                dummy.scale.set(s * flap * heading, s, s);
                dummy.rotation.z = Math.sin(t * 2 + i) * 0.2;
                dummy.updateMatrix();
                m.setMatrixAt(i, dummy.matrix);
            }
            m.instanceMatrix.needsUpdate = true;
        }
    }["Bats.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: mesh,
        args: [
            geometry,
            material,
            count
        ],
        frustumCulled: false
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 393,
        columnNumber: 10
    }, this);
}
_s7(Bats, "4h3vMPdTJVKGh4Snok+RSj4XeBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c7 = Bats;
/**
 * A swarm of bats bursting across the screen: whenever lightning strikes (and now and then on its own),
 * a dozen bats sweep from one side to the other, flapping hard.
 */ function BatSwarm({ visual, curse, reducedMotion, count }) {
    _s8();
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BatSwarm.useMemo[geometry]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batGeometry"])()
    }["BatSwarm.useMemo[geometry]"], []);
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BatSwarm.useMemo[material]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: "#070410",
                side: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
            })
    }["BatSwarm.useMemo[material]"], []);
    const dummy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BatSwarm.useMemo[dummy]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]()
    }["BatSwarm.useMemo[dummy]"], []);
    const flight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        start: -100,
        next: 6,
        dir: 1,
        y: 2,
        wasFlashing: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BatSwarm.useEffect": ()=>({
                "BatSwarm.useEffect": ()=>{
                    geometry.dispose();
                    material.dispose();
                }
            })["BatSwarm.useEffect"]
    }["BatSwarm.useEffect"], [
        geometry,
        material
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "BatSwarm.useFrame": ()=>{
            const m = mesh.current;
            if (!m) return;
            const t = visual.time;
            const f = flight.current;
            const flashing = curse.uFlash.value > 0.5;
            if (!reducedMotion && (flashing && !f.wasFlashing && t - f.start > 3 || t > f.next)) {
                f.start = t;
                f.next = t + 14 + Math.random() * 10;
                f.dir = Math.random() < 0.5 ? 1 : -1;
                f.y = 1.6 + Math.random() * 2;
            }
            f.wasFlashing = flashing;
            const k = (t - f.start) / 3.2; // 3.2 s to cross
            m.visible = k >= 0 && k <= 1;
            if (!m.visible) return;
            for(let i = 0; i < count; i++){
                const lag = i % 4 * 0.06 + i / count * 0.12;
                const x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(-9, 9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].clamp(k * 1.25 - lag, 0, 1)) * f.dir;
                const y = f.y + i * 0.37 % 1.4 - 0.7 + Math.sin(t * 3 + i * 1.7) * 0.25;
                const z = -1.5 - i * 0.53 % 3;
                dummy.position.set(x, y, z);
                const flap = 0.3 + 0.7 * Math.abs(Math.sin(t * 16 + i * 2.3));
                const s = 0.32 + i % 3 * 0.08;
                dummy.scale.set(s * flap * f.dir, s, s);
                dummy.rotation.z = Math.sin(t * 4 + i) * 0.25;
                dummy.updateMatrix();
                m.setMatrixAt(i, dummy.matrix);
            }
            m.instanceMatrix.needsUpdate = true;
        }
    }["BatSwarm.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
        ref: mesh,
        args: [
            geometry,
            material,
            count
        ],
        frustumCulled: false,
        visible: false
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Atmosphere.tsx",
        lineNumber: 446,
        columnNumber: 10
    }, this);
}
_s8(BatSwarm, "Q9VpqNsvY4jbmPUgkadjbNyDly4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c8 = BatSwarm;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "Atmosphere");
__turbopack_context__.k.register(_c1, "Backdrop");
__turbopack_context__.k.register(_c2, "Lightning");
__turbopack_context__.k.register(_c3, "CupShadow");
__turbopack_context__.k.register(_c4, "GroundMist");
__turbopack_context__.k.register(_c5, "FogPuffs");
__turbopack_context__.k.register(_c6, "Mist");
__turbopack_context__.k.register(_c7, "Bats");
__turbopack_context__.k.register(_c8, "BatSwarm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/Cup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/curse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$PlaceholderCup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/PlaceholderCup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const { cup } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
// the model is big: start downloading it as soon as the game loads
if (cup.useModel) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload(cup.modelUrl);
/**
 * The real cup model (`cup.modelUrl`), scaled to `cup.height` and stood on `cup.bottom`.
 * Every material gets the curse; a material whose name contains "logo" also gets the win glint.
 */ function ModelCup({ curse }) {
    _s();
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])(cup.modelUrl);
    const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ModelCup.useMemo[model]": ()=>{
            const root = scene.clone(true);
            root.rotation.y = cup.modelRotationY;
            const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(root);
            const size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
            const scale = cup.height / Math.max(size.y, 1e-6);
            root.scale.setScalar(scale);
            const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
            root.position.set(-center.x * scale, cup.bottom - box.min.y * scale, -center.z * scale);
            root.traverse({
                "ModelCup.useMemo[model]": (obj)=>{
                    const mesh = obj;
                    if (!mesh.isMesh) return;
                    const curseOne = {
                        "ModelCup.useMemo[model].curseOne": (m)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCurse"])(m.clone(), curse, /logo/i.test(m.name))
                    }["ModelCup.useMemo[model].curseOne"];
                    mesh.material = Array.isArray(mesh.material) ? mesh.material.map(curseOne) : curseOne(mesh.material);
                }
            }["ModelCup.useMemo[model]"]);
            return root;
        }
    }["ModelCup.useMemo[model]"], [
        scene,
        curse
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
        object: model
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Cup.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_s(ModelCup, "DEfcpHA4fBev/YTbRzcuz/WzfuY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c = ModelCup;
function Cup({ ref, curse, visual, tier, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: cup.useModel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModelCup, {
                    curse: curse
                }, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Cup.tsx",
                    lineNumber: 56,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$PlaceholderCup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    curse: curse,
                    visual: visual,
                    tier: tier
                }, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Cup.tsx",
                    lineNumber: 56,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Cup.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Cup.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c1 = Cup;
var _c, _c1;
__turbopack_context__.k.register(_c, "ModelCup");
__turbopack_context__.k.register(_c1, "Cup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/Ghost.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Ghost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/breath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$ghostMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/ghostMaterial.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const { cup, ghostSprite, stages } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
// start loading her portrait with the scene, not when she first appears
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"].preload(ghostSprite.url);
function Ghost({ curse, visual, state, reducedMotion }) {
    _s();
    const mesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const anim = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        twitchNext: 1.5,
        tiltTarget: 0,
        tiltNext: 2,
        lungeNext: 4,
        wasGripping: false
    });
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])(ghostSprite.url);
    const ghost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Ghost.useMemo[ghost]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$ghostMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGhostUniforms"])()
    }["Ghost.useMemo[ghost]"], []);
    const { geometry, material } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Ghost.useMemo": ()=>{
            map.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            map.anisotropy = 4;
            const [width, height] = ghostSprite.size;
            const [faceX, faceY] = ghostSprite.face;
            // her face sits left of the image's centre: shift the picture so the face is over the cup
            const center = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((0.5 - faceX) * width, cup.bottom + cup.height + ghostSprite.faceAboveLid - (faceY - 0.5) * height, ghostSprite.depth);
            const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]((faceX - 0.5) * width, (faceY - 0.5) * height);
            return {
                geometry: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](width, height, 40, 28),
                material: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$ghostMaterial$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeGhostSpriteMaterial"])(curse, ghost, map, center, head)
            };
        }
    }["Ghost.useMemo"], [
        map,
        curse,
        ghost
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Ghost.useEffect": ()=>({
                "Ghost.useEffect": ()=>{
                    geometry.dispose();
                    material.dispose();
                }
            })["Ghost.useEffect"]
    }["Ghost.useEffect"], [
        geometry,
        material
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Ghost.useFrame": (_, dt)=>{
            const s = state.current;
            const t = visual.time;
            const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealShape"])(visual.progress);
            const u = ghost;
            const an = anim.current;
            const motion = reducedMotion ? 0.3 : 1;
            u.uStretch.value = shape.stretch;
            u.uSuck.value = visual.suck;
            u.uGrip.value = visual.grip;
            u.uExit.value = visual.exit;
            // she rises off the cup as it peels, hanging on to the logo at the end
            u.uLift.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(visual.progress, stages.stretchEnd, 1) * motion;
            // the seam on the cup where she's letting go, red while she fights back
            curse.uEdge.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].smoothstep(visual.progress, stages.stretchEnd - 0.04, stages.stretchEnd + 0.02);
            curse.uGrip.value = visual.grip;
            // nervous spasms
            if (t > an.twitchNext) {
                u.uTwitch.value = motion;
                an.twitchNext = t + 1.2 + Math.random() * 3;
            }
            u.uTwitch.value *= Math.exp(-dt * 10);
            // the head tilts as she sizes you up; it shakes when she fights back
            if (t > an.tiltNext) {
                an.tiltTarget = (Math.random() - 0.5) * 0.5;
                an.tiltNext = t + 1.5 + Math.random() * 3;
            }
            u.uTilt.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(u.uTilt.value, an.tiltTarget + visual.grip * 0.12 * Math.sin(t * 30) * motion, 4, dt);
            // she lunges at you: on the intro taunt and when she grabs the cup tighter
            const gripping = visual.grip > 0.5;
            if (gripping && !an.wasGripping || s.mode === "intro" && t > an.lungeNext) {
                u.uLunge.value = motion;
                an.lungeNext = t + 5 + Math.random() * 5;
            }
            an.wasGripping = gripping;
            u.uLunge.value *= Math.exp(-dt * 5);
            // and laughs at you when you lose
            u.uLaugh.value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(u.uLaugh.value, s.mode === "lost" ? (visual.loseT < 2.4 ? 1 : 0.25) * motion : 0, 10, dt);
            if (mesh.current) mesh.current.visible = visual.exit < 0.999;
        }
    }["Ghost.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: mesh,
        geometry: geometry,
        material: material,
        renderOrder: 5,
        frustumCulled: false
    }, void 0, false, {
        fileName: "[project]/components/games/wicked-rose/three/Ghost.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
_s(Ghost, "AqXOl+q9TgkzwcElsza9ZE7XfWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Ghost;
var _c;
__turbopack_context__.k.register(_c, "Ghost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/PlaceholderCup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlaceholderCup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/curse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/cupShape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/textures.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const { colors, cup } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
const PEARL_RADIUS = 0.085;
const PILE_COUNT = 26;
const WALL_COUNT = 20;
/**
 * Pearls as in the photo: a pile at the bottom, plus pearls pressed against the wall at different heights,
 * poking just out of the tea so they show through the clear plastic as dark circles.
 */ function pearlPositions() {
    const out = [];
    let seed = 3;
    const rand = ()=>(seed = seed * 16807 % 2147483647) / 2147483647;
    for(let i = 0; out.length < PILE_COUNT && i < 500; i++){
        const layer = Math.floor(out.length / 11);
        const y = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom + 0.11 + layer * 0.15 + rand() * 0.04;
        const r = Math.sqrt(rand()) * ((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(y) - 0.13);
        const a = rand() * Math.PI * 2;
        const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.sin(a) * r, y, Math.cos(a) * r);
        if (out.every((q)=>q.distanceTo(p) > PEARL_RADIUS * 1.9)) out.push(p);
    }
    for(let i = 0; out.length < PILE_COUNT + WALL_COUNT && i < 500; i++){
        const y = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom + 0.45 + rand() * (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].teaTop - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom - 0.75);
        const a = rand() * Math.PI * 2;
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(y) - __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].wallGap - PEARL_RADIUS * 0.7;
        const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Math.sin(a) * r, y, Math.cos(a) * r);
        if (out.every((q)=>q.distanceTo(p) > PEARL_RADIUS * 2.2)) out.push(p);
    }
    return out;
}
function PlaceholderCup({ curse, visual, tier }) {
    _s();
    const logo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])("/images/logo.png");
    const pearls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pearlHome = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlaceholderCup.useMemo[pearlHome]": ()=>pearlPositions()
    }["PlaceholderCup.useMemo[pearlHome]"], []);
    const dummy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlaceholderCup.useMemo[dummy]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Object3D"]()
    }["PlaceholderCup.useMemo[dummy]"], []);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlaceholderCup.useMemo[geometry]": ()=>{
            const lip = 0.035;
            const body = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LatheGeometry"]([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].radiusBottom - 0.05, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].radiusBottom, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom + 0.06),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].radiusTop, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].rim - 0.02),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].radiusTop + lip, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].rim),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].radiusTop + lip, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].rim + 0.05)
            ], 64);
            const inset = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].wallGap;
            const tea = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LatheGeometry"]([
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom + 0.04),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom) - inset, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].bottom + 0.04),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].teaTop) - inset, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].teaTop),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].teaTop) - inset - 0.04, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].teaTop + 0.012),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].teaTop + 0.012)
            ], 48);
            const lid = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].lidRadius, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].lidRadius, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].lidThickness, 64);
            lid.translate(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].rim + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].lidThickness / 2, 0);
            const lidRing = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].lidRadius - 0.12, 0.03, 10, 64);
            lidRing.rotateX(Math.PI / 2);
            lidRing.translate(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].rim + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].lidThickness, 0);
            const lidLogo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](0.5, 0.78);
            lidLogo.rotateX(-Math.PI / 2);
            lidLogo.translate(0.02, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].rim + __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUP"].lidThickness + 0.004, 0.02);
            const pearl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](PEARL_RADIUS, 12, 8);
            // the front logo: a strip of the cup wall, so it wraps with the taper
            const yTop = cup.logoY + cup.logoHalfHeight;
            const yBottom = cup.logoY - cup.logoHalfHeight;
            const span = cup.logoHalfWidth * 2 / (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(cup.logoY);
            const logoStrip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(yTop) + 0.006, (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$cupShape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cupRadius"])(yBottom) + 0.006, yTop - yBottom, 24, 1, true, cup.logoAngle - span / 2, span);
            logoStrip.translate(0, cup.logoY, 0);
            return {
                body,
                tea,
                lid,
                lidRing,
                lidLogo,
                pearl,
                logoStrip
            };
        }
    }["PlaceholderCup.useMemo[geometry]"], []);
    const materials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlaceholderCup.useMemo[materials]": ()=>{
            const transmissive = tier !== "low";
            const bump = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["condensationBump"])();
            const rough = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["condensationRoughness"])();
            bump.repeat.set(3, 1.6);
            rough.repeat.set(3, 1.6);
            const plastic = {
                "PlaceholderCup.useMemo[materials].plastic": (roughness, side, dewy)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCurse"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
                        color: "#ffffff",
                        roughness,
                        roughnessMap: dewy ? rough : null,
                        bumpMap: dewy ? bump : null,
                        bumpScale: 0.045,
                        metalness: 0,
                        ior: 1.45,
                        thickness: 0.1,
                        transmission: transmissive ? 1 : 0,
                        transparent: !transmissive,
                        opacity: transmissive ? 1 : 0.3,
                        clearcoat: 1,
                        clearcoatRoughness: 0.08,
                        side
                    }), curse)
            }["PlaceholderCup.useMemo[materials].plastic"];
            const logoMaterial = {
                "PlaceholderCup.useMemo[materials].logoMaterial": (emissive, opacity)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCurse"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
                        map: logo,
                        emissiveMap: logo,
                        emissive: "#ffffff",
                        emissiveIntensity: emissive,
                        transparent: true,
                        opacity,
                        alphaTest: 0.05,
                        roughness: 0.55,
                        depthWrite: false,
                        polygonOffset: true,
                        polygonOffsetFactor: -2
                    }), curse, true)
            }["PlaceholderCup.useMemo[materials].logoMaterial"];
            return {
                body: plastic(0.5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"], true),
                // front faces only: double-sided transmission samples the dark night through the lid's inside
                lid: plastic(0.3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"], false),
                tea: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCurse"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
                    color: colors.taro,
                    roughness: 0.42,
                    clearcoat: 0.3,
                    clearcoatRoughness: 0.4,
                    sheen: 0.15,
                    sheenColor: "#c9a6ff"
                }), curse),
                pearl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyCurse"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"]({
                    color: colors.pearl,
                    roughness: 0.15,
                    clearcoat: 1,
                    clearcoatRoughness: 0.05
                }), curse),
                logo: logoMaterial(0.05, 1),
                lidLogo: logoMaterial(0, 0.8)
            };
        }
    }["PlaceholderCup.useMemo[materials]"], [
        curse,
        logo,
        tier
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "PlaceholderCup.useLayoutEffect": ()=>{
            logo.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            logo.anisotropy = 4;
            logo.needsUpdate = true;
        }
    }["PlaceholderCup.useLayoutEffect"], [
        logo
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlaceholderCup.useEffect": ()=>({
                "PlaceholderCup.useEffect": ()=>{
                    Object.values(geometry).forEach({
                        "PlaceholderCup.useEffect": (g)=>g.dispose()
                    }["PlaceholderCup.useEffect"]);
                    Object.values(materials).forEach({
                        "PlaceholderCup.useEffect": (m)=>m.dispose()
                    }["PlaceholderCup.useEffect"]);
                }
            })["PlaceholderCup.useEffect"]
    }["PlaceholderCup.useEffect"], [
        geometry,
        materials
    ]);
    // pearls settle into place, then bounce for joy in the win reveal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "PlaceholderCup.useFrame": ()=>{
            const mesh = pearls.current;
            if (!mesh) return;
            const bouncing = visual.winT > 0.6;
            if (!bouncing && mesh.userData.placed) return;
            const decay = bouncing ? Math.exp(-(visual.winT - 0.6) * 0.5) : 0;
            pearlHome.forEach({
                "PlaceholderCup.useFrame": (home, i)=>{
                    const hop = Math.abs(Math.sin(visual.time * 7 + i * 1.7)) * 0.09 * decay;
                    dummy.position.set(home.x, home.y + hop, home.z);
                    dummy.updateMatrix();
                    mesh.setMatrixAt(i, dummy.matrix);
                }
            }["PlaceholderCup.useFrame"]);
            mesh.instanceMatrix.needsUpdate = true;
            mesh.userData.placed = true;
        }
    }["PlaceholderCup.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry.tea,
                material: materials.tea
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("instancedMesh", {
                ref: pearls,
                args: [
                    geometry.pearl,
                    materials.pearl,
                    pearlHome.length
                ]
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry.body,
                material: materials.body
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry.lid,
                material: materials.lid
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry.lidRing,
                material: materials.lid
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry.lidLogo,
                material: materials.lidLogo,
                renderOrder: 1
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry.logoStrip,
                material: materials.logo,
                renderOrder: 1
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/PlaceholderCup.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(PlaceholderCup, "o7zFhCt/sQ3NuocyNMa1Jy9ocZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = PlaceholderCup;
var _c;
__turbopack_context__.k.register(_c, "PlaceholderCup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Billboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Billboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/textures.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const { colors } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
function Reveal({ visual, tier }) {
    _s();
    const burst = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const halo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [sparkles, setSparkles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const materials = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Reveal.useMemo[materials]": ()=>{
            const glow = {
                "Reveal.useMemo[materials].glow": (color)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        map: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$textures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softDot"])(),
                        color,
                        transparent: true,
                        depthWrite: false,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                        opacity: 0,
                        fog: false,
                        toneMapped: false
                    })
            }["Reveal.useMemo[materials].glow"];
            return {
                burst: glow("#fff4e0"),
                halo: glow(colors.warm)
            };
        }
    }["Reveal.useMemo[materials]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>({
                "Reveal.useEffect": ()=>Object.values(materials).forEach({
                        "Reveal.useEffect": (m)=>m.dispose()
                    }["Reveal.useEffect"])
            })["Reveal.useEffect"]
    }["Reveal.useEffect"], [
        materials
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Reveal.useFrame": ()=>{
            const t = visual.winT;
            const on = t >= 0;
            if (on !== sparkles) setSparkles(on);
            // flash: expands and fades over ~1.2 s
            const flash = on ? Math.max(0, 1 - t / 1.2) : 0;
            if (burst.current) {
                const s = 1 + (on ? Math.min(t, 1.2) : 0) * 7;
                burst.current.scale.setScalar(s);
                burst.current.visible = flash > 0;
            }
            materials.burst.opacity = flash * 1.6;
            // halo: breathes in behind the cup and stays
            materials.halo.opacity = visual.warm * (0.55 + 0.08 * Math.sin(visual.time * 2));
            if (halo.current) halo.current.visible = visual.warm > 0.01;
            if (light.current) light.current.intensity = visual.warm * 10 + flash * 30;
        }
    }["Reveal.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Billboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Billboard"], {
                position: [
                    0,
                    0.5,
                    -1.2
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: halo,
                    material: materials.halo,
                    scale: 6.5,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {}, void 0, false, {
                        fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Billboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Billboard"], {
                position: [
                    0,
                    0.4,
                    0.8
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    ref: burst,
                    material: materials.burst,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {}, void 0, false, {
                        fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: light,
                position: [
                    0.6,
                    1.2,
                    2.6
                ],
                color: colors.warm,
                intensity: 0,
                distance: 12
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            sparkles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                count: tier === "low" ? 28 : 70,
                scale: [
                    3.2,
                    4.2,
                    2.4
                ],
                position: [
                    0,
                    0.5,
                    0
                ],
                size: tier === "low" ? 3 : 4.5,
                speed: 0.5,
                color: colors.warm,
                opacity: 0.9
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Reveal.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Reveal, "7yIwGOVye3hO4F5CkEaXWRH+VSA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/Scene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Lightformer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerformanceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerformanceMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postprocessing/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/breath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/reveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Atmosphere$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/Atmosphere.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Cup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/Cup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/curse.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Ghost$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/Ghost.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/games/wicked-rose/three/sceneState.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const { colors } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
const LOOK_AT = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0.65, 0);
/** what must stay in frame (scene units): the cup up close, with the ghost's head above it */ const FRAME_HEIGHT = 5.6;
const FRAME_WIDTH = 2.5;
/**
 * Runs first every frame: turns the game's raw numbers into smoothed visuals and writes the shared
 * uniforms (where the ghost grips, the cup-space matrices, flicker, warmth, the logo glint).
 */ function Director({ state, visual, curse, cup, reducedMotion }) {
    _s();
    const flicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Director.useFrame": (_, rawDt)=>{
            const dt = Math.min(rawDt, 0.1);
            const s = state.current;
            const since = (performance.now() - s.modeSince) / 1000;
            const freeing = s.mode === "exiting" || s.mode === "won";
            visual.time += dt;
            const target = freeing ? 1 : s.progress;
            // snaps back fast when you stop (the ghost wraps the cup again), wraps slowly after a loss
            const rate = s.mode === "lost" ? 2.5 : target < visual.progress ? 7 : 10;
            visual.progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(visual.progress, target, rate, dt);
            const suck = s.mode === "playing" ? s.suck : 0;
            visual.suck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(visual.suck, suck, suck > visual.suck ? 14 : 5, dt);
            visual.grip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(visual.grip, s.grip && s.mode === "playing" ? 1 : 0, 12, dt);
            visual.exit = freeing ? Math.min(1, s.mode === "won" ? 1 : since / __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXIT_SECONDS"]) : 0;
            visual.winT = s.mode === "won" ? since : -1;
            visual.loseT = s.mode === "lost" ? since : -1;
            visual.warm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(visual.warm, s.mode === "won" ? 1 : 0, s.mode === "won" ? 1.6 : 4, dt);
            const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["revealShape"])(visual.progress);
            const e = visual.exit;
            curse.uRevealY.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(shape.revealY, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GHOST_BOTTOM"] - 1, e);
            curse.uPatch.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].lerp(shape.patch, -3, e);
            curse.uTime.value = visual.time;
            curse.uWarm.value = visual.warm;
            // the cursed cup's light stutters now and then (not with reduced motion)
            if (!reducedMotion && Math.random() < dt * 0.9) flicker.current = 0.18;
            flicker.current = Math.max(0, flicker.current - dt);
            curse.uFlicker.value = flicker.current > 0 ? 0.5 + 0.5 * Math.random() : 0;
            // the logo glint sweeps across every 3.2 s once the cup is free
            curse.uShine.value = visual.winT > 0.8 ? (visual.winT - 0.8) % 3.2 / 1.4 * 1.9 - 0.3 : -1;
            // the freed cup holds still for the first glint, then turns slowly like a product shot;
            // between rounds it settles back to face front
            const g = cup.current;
            if (g) {
                if (visual.winT > 2.2) g.rotation.y += dt * (reducedMotion ? 0.12 : 0.35);
                else g.rotation.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(g.rotation.y, Math.round(g.rotation.y / (Math.PI * 2)) * Math.PI * 2, 3, dt);
                g.updateMatrixWorld();
                curse.uCupToWorld.value.copy(g.matrixWorld);
                curse.uWorldToCup.value.copy(g.matrixWorld).invert();
            }
        }
    }["Director.useFrame"], -1);
    return null;
}
_s(Director, "xBiaNJomHo2YfUnz+Jcw3Q3uxaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = Director;
/**
 * How each screen frames the cup around its UI: `zoom` > 1 pulls back, `lift` raises the cup on screen
 * (as a fraction of the screen height). Intro and result screens have a panel over the bottom half.
 */ const FRAMING = {
    intro: {
        zoom: 1.6,
        lift: 0.07
    },
    calibrating: {
        zoom: 1,
        lift: 0
    },
    playing: {
        zoom: 1,
        lift: 0
    },
    exiting: {
        zoom: 1,
        lift: 0
    },
    won: {
        zoom: 1.2,
        lift: 0.08
    },
    lost: {
        zoom: 1.2,
        lift: 0.08
    }
};
/** Frames the cup for any aspect ratio and screen, sways gently, shakes when the ghost fights back and with the thunder. */ function CameraRig({ state, visual, curse, reducedMotion }) {
    _s1();
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        zoom: 1.6,
        lift: 0.07
    });
    const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CameraRig.useMemo[target]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
    }["CameraRig.useMemo[target]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "CameraRig.useFrame": ({ camera, size }, dt)=>{
            const cam = camera;
            const goal = FRAMING[state.current.mode];
            const f = frame.current;
            f.zoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(f.zoom, goal.zoom, 2.5, dt);
            f.lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(f.lift, goal.lift, 2.5, dt);
            const aspect = size.width / Math.max(size.height, 1);
            const tan = Math.tan(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(cam.fov / 2));
            const distance = Math.max(FRAME_HEIGHT / 2 / tan, FRAME_WIDTH / 2 / (tan * aspect)) * f.zoom;
            // looking lower moves the cup up the screen: lift × the visible height at the cup
            const lift = f.lift * 2 * distance * tan;
            const t = visual.time;
            const sway = reducedMotion ? 0 : 1;
            const shake = reducedMotion ? 0 : visual.grip * 0.035 + Math.min(curse.uFlash.value, 1) * 0.06;
            target.set(0, LOOK_AT.y - lift, 0);
            cam.position.set(Math.sin(t * 0.27) * 0.14 * sway + (Math.random() - 0.5) * shake, target.y + 0.15 + Math.sin(t * 0.37) * 0.07 * sway + (Math.random() - 0.5) * shake, distance);
            cam.lookAt(target);
        }
    }["CameraRig.useFrame"]);
    return null;
}
_s1(CameraRig, "mZtXh7i5VyAjWuaj7GPrjXvGZ7I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = CameraRig;
/** Moonlight from behind, a cold key from the front, and the ghost's own sickly glow. */ function Lights({ visual }) {
    _s2();
    const ambient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ghostGlow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Lights.useMemo[cold]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#5c4a8a")
    }["Lights.useMemo[cold]"], []);
    const warm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Lights.useMemo[warm]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colors.warm)
    }["Lights.useMemo[warm]"], []);
    const keyCold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Lights.useMemo[keyCold]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#b9b4e6")
    }["Lights.useMemo[keyCold]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "Lights.useFrame": ()=>{
            ambient.current?.color.copy(cold).lerp(warm, visual.warm * 0.5);
            if (ambient.current) ambient.current.intensity = 0.35 + visual.warm * 0.6;
            key.current?.color.copy(keyCold).lerp(warm, visual.warm * 0.3);
            if (key.current) key.current.intensity = 1.1 + visual.warm * 0.8;
            if (ghostGlow.current) ghostGlow.current.intensity = (2.2 + visual.grip * 3) * (1 - visual.exit);
        }
    }["Lights.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                ref: ambient,
                intensity: 0.35
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                args: [
                    "#3a2a5a",
                    "#1a1020",
                    0.7
                ]
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                ref: key,
                position: [
                    2.5,
                    4,
                    5
                ],
                intensity: 1.1
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -3,
                    6,
                    -5
                ],
                intensity: 1.6,
                color: "#8fa3ff"
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                position: [
                    0,
                    1.8,
                    -2.4
                ],
                intensity: 6,
                distance: 8,
                color: "#8a4cff"
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                ref: ghostGlow,
                position: [
                    0,
                    0.4,
                    1.6
                ],
                distance: 5,
                color: colors.ghostGlow
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s2(Lights, "DQT0MZIBadxns3uAu8vSqNnwg+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = Lights;
function Effects({ tier }) {
    if (tier === "low") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
        multisampling: tier === "high" ? 4 : 0,
        enableNormalPass: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                mipmapBlur: true,
                luminanceThreshold: 0.85,
                luminanceSmoothing: 0.2,
                intensity: tier === "high" ? 1.1 : 0.8,
                radius: 0.7
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Noise"], {
                premultiply: true,
                blendFunction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlendFunction"].SCREEN,
                opacity: 0.12
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vignette"], {
                offset: 0.2,
                darkness: 0.85
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToneMapping"], {
                mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToneMappingMode"].ACES_FILMIC
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_c3 = Effects;
const lowerTier = (t)=>t === "high" ? "mid" : "low";
function Scene({ state, tier: initialTier, reducedMotion }) {
    _s3();
    const [tier, setTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTier);
    const visual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Scene.useMemo[visual]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVisual"])()
    }["Scene.useMemo[visual]"], []);
    const curse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Scene.useMemo[curse]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$curse$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCurseUniforms"])()
    }["Scene.useMemo[curse]"], []);
    const cup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        dpr: tier === "high" ? [
            1,
            2
        ] : tier === "mid" ? [
            1,
            1.5
        ] : 1,
        gl: {
            antialias: tier === "low",
            powerPreference: "high-performance",
            alpha: false,
            stencil: false
        },
        camera: {
            fov: 35,
            position: [
                0,
                0.6,
                9
            ],
            near: 0.1,
            far: 120
        },
        onCreated: ({ gl })=>{
            // the clear cup re-renders what's behind it; half resolution is plenty on phones
            gl.transmissionResolutionScale = tier === "high" ? 1 : 0.5;
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerformanceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceMonitor"], {
                flipflops: 3,
                onDecline: ()=>setTier(lowerTier),
                onFallback: ()=>setTier("low")
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Director, {
                state: state,
                visual: visual,
                curse: curse,
                cup: cup,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CameraRig, {
                state: state,
                visual: visual,
                curse: curse,
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lights, {
                visual: visual
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                resolution: 64,
                frames: 1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                        intensity: 2.0,
                        position: [
                            0,
                            4,
                            3
                        ],
                        scale: [
                            6,
                            1.2,
                            1
                        ],
                        color: "#dfe6ff"
                    }, void 0, false, {
                        fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                        intensity: 1.6,
                        position: [
                            -4,
                            2,
                            -2
                        ],
                        "rotation-y": Math.PI / 2,
                        scale: [
                            4,
                            2,
                            1
                        ],
                        color: "#8fa3ff"
                    }, void 0, false, {
                        fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Lightformer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightformer"], {
                        intensity: 1.0,
                        position: [
                            4,
                            0.2,
                            -1
                        ],
                        "rotation-y": -Math.PI / 2,
                        scale: [
                            4,
                            2,
                            1
                        ],
                        color: colors.pumpkin
                    }, void 0, false, {
                        fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Atmosphere$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                visual: visual,
                tier: tier,
                reducedMotion: reducedMotion,
                curse: curse
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Cup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ref: cup,
                curse: curse,
                visual: visual,
                tier: tier,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Ghost$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        curse: curse,
                        visual: visual,
                        state: state,
                        reducedMotion: reducedMotion
                    }, void 0, false, {
                        fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$games$2f$wicked$2d$rose$2f$three$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                visual: visual,
                tier: tier
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Effects, {
                tier: tier
            }, void 0, false, {
                fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/games/wicked-rose/three/Scene.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s3(Scene, "KBFGS88fj1MSwsT3pC2LbfW3cOg=");
_c4 = Scene;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Director");
__turbopack_context__.k.register(_c1, "CameraRig");
__turbopack_context__.k.register(_c2, "Lights");
__turbopack_context__.k.register(_c3, "Effects");
__turbopack_context__.k.register(_c4, "Scene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/cupShape.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The placeholder cup's dimensions (cup space, scene units), taken from the product photo:
 * a tall tapered clear cup, filled almost to the top, with a flat clear lid.
 */ __turbopack_context__.s([
    "CUP",
    ()=>CUP,
    "cupRadius",
    ()=>cupRadius
]);
const CUP = {
    bottom: -1.35,
    rim: 1.15,
    radiusBottom: 0.5,
    radiusTop: 0.8,
    lidThickness: 0.07,
    lidRadius: 0.85,
    teaTop: 1.0,
    /** gap between the tea and the cup wall */ wallGap: 0.03
};
const cupRadius = (y)=>CUP.radiusBottom + (y - CUP.bottom) / (CUP.rim - CUP.bottom) * (CUP.radiusTop - CUP.radiusBottom);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/curse.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyCurse",
    ()=>applyCurse,
    "coverageGLSL",
    ()=>coverageGLSL,
    "createCurseUniforms",
    ()=>createCurseUniforms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
;
;
const { cup, colors } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
function createCurseUniforms() {
    return {
        uTime: {
            value: 0
        },
        /** cup surface above this height is free (cup space) */ uRevealY: {
            value: 10
        },
        /** size of the patch still covering the logo, in logo half-sizes */ uPatch: {
            value: 1.35
        },
        /** logo centre and half-size on the cup surface: (angle, y, halfWidth, halfHeight) */ uLogo: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"](cup.logoAngle, cup.logoY, cup.logoHalfWidth, cup.logoHalfHeight)
        },
        uWorldToCup: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()
        },
        uCupToWorld: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()
        },
        /** 0–1 lamp flicker on the cursed parts */ uFlicker: {
            value: 0
        },
        /** 0–1 the warm glow of the win reveal */ uWarm: {
            value: 0
        },
        /** logo glint position for the win (−1 = off) */ uShine: {
            value: -1
        },
        /** 0–1 lightning flash (written by Atmosphere, read by the ghost and the sky) */ uFlash: {
            value: 0
        },
        /** 0–1 the glowing seam where the ghost is letting go (written by Ghost) */ uEdge: {
            value: 0
        },
        /** 0–1 the ghost is fighting back: the seam turns red (written by Ghost) */ uGrip: {
            value: 0
        },
        uHaunt: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colors.ghostGlow)
        },
        uSeam: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colors.rim)
        },
        uSeamGrip: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colors.grip)
        }
    };
}
const coverageGLSL = /* glsl */ `
uniform float uTime;
uniform float uRevealY;
uniform float uPatch;
uniform vec4 uLogo;

float cvHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float cvNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(cvHash(i), cvHash(i + vec3(1, 0, 0)), f.x), mix(cvHash(i + vec3(0, 1, 0)), cvHash(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(cvHash(i + vec3(0, 0, 1)), cvHash(i + vec3(1, 0, 1)), f.x), mix(cvHash(i + vec3(0, 1, 1)), cvHash(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}
/* position on the cup surface relative to the logo centre, in logo half-sizes */
vec2 logoSpace(vec3 p) {
  float r = max(length(p.xz), 0.3);
  float a = atan(p.x, p.z) - uLogo.x;
  a = atan(sin(a), cos(a));
  return vec2(a * r / uLogo.z, (p.y - uLogo.y) / uLogo.w);
}
float ghostCover(vec3 p) {
  float n = cvNoise(p * 3.5 + vec3(0.0, uTime * 0.3, 0.0)) - 0.5;
  float sweep = uRevealY - p.y + n * 0.35;
  float cling = (uPatch - length(logoSpace(p))) * 0.4 + n * 0.12;
  return max(sweep, cling);
}
`;
function applyCurse(material, uniforms, shine = false) {
    material.onBeforeCompile = (shader)=>{
        Object.assign(shader.uniforms, uniforms);
        shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vCurseWorld;").replace("#include <project_vertex>", `#include <project_vertex>
        vec4 curseLocal = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          curseLocal = instanceMatrix * curseLocal;
        #endif
        vCurseWorld = (modelMatrix * curseLocal).xyz;`);
        let fragment = shader.fragmentShader.replace("#include <common>", `#include <common>
        varying vec3 vCurseWorld;
        uniform mat4 uWorldToCup;
        uniform float uFlicker;
        uniform float uWarm;
        uniform float uShine;
        uniform float uEdge;
        uniform float uGrip;
        uniform vec3 uHaunt;
        uniform vec3 uSeam;
        uniform vec3 uSeamGrip;
        ${coverageGLSL}`).replace("#include <opaque_fragment>", `#include <opaque_fragment>
        vec3 cupP = (uWorldToCup * vec4(vCurseWorld, 1.0)).xyz;
        float cover = ghostCover(cupP);
        float cursed = smoothstep(-0.12, 0.05, cover);
        float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
        float swirl = cvNoise(cupP * 2.5 + vec3(0.0, uTime * 0.35, uTime * 0.2));
        vec3 milky = mix(gl_FragColor.rgb, vec3(lum) * vec3(0.92, 0.86, 1.0), 0.6);
        vec3 haunted = milky * (1.0 - 0.2 * uFlicker) + uHaunt * (0.06 + smoothstep(0.45, 0.85, swirl) * 0.25);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, haunted, cursed * 0.55);
        float seam = (1.0 - smoothstep(0.0, 0.07, abs(cover))) * uEdge;
        gl_FragColor.rgb += mix(uSeam, uSeamGrip, uGrip) * seam * 1.4;
        gl_FragColor.rgb *= 1.0 + uWarm * 0.2;`);
        if (shine) {
            fragment = fragment.replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
        #ifdef USE_MAP
          float glint = 1.0 - smoothstep(0.0, 0.1, abs(vMapUv.x * 0.8 + vMapUv.y * 0.45 - uShine));
          totalEmissiveRadiance += vec3(1.0, 0.95, 0.85) * glint * diffuseColor.a * 3.0;
        #endif`);
        }
        shader.fragmentShader = fragment;
    };
    material.customProgramCacheKey = ()=>shine ? "milkaboo-curse-shine" : "milkaboo-curse";
    return material;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/ghostMaterial.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGhostUniforms",
    ()=>createGhostUniforms,
    "makeGhostSpriteMaterial",
    ()=>makeGhostSpriteMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
;
;
const { colors } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
function createGhostUniforms() {
    return {
        /** 0–1 stage-one stretch toward the player */ uStretch: {
            value: 0
        },
        uSuck: {
            value: 0
        },
        uGrip: {
            value: 0
        },
        uExit: {
            value: 0
        },
        /** nervous spasms, lunges at the player and a slow tilt of the head */ uTwitch: {
            value: 0
        },
        uLunge: {
            value: 0
        },
        uTilt: {
            value: 0
        },
        /** 0–1 how far her body has been pulled up off the cup (stages two and three) */ uLift: {
            value: 0
        },
        /** 0–1 she bounces with laughter when you lose */ uLaugh: {
            value: 0
        },
        uGripColor: {
            value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](colors.grip)
        }
    };
}
const spriteVertexShader = /* glsl */ `
uniform float uTime;
uniform float uStretch;
uniform float uSuck;
uniform float uGrip;
uniform float uExit;
uniform float uTwitch;
uniform float uLunge;
uniform float uTilt;
uniform float uLift;
uniform float uLaugh;
uniform vec3 uCenter;
uniform vec2 uHead;

varying vec2 vUv;

void main() {
  vUv = uv;
  vec2 c = position.xy;
  float t = uTime;
  float tail = 1.0 - uv.y;

  // floating: a slow bob, and the wisps of her tail drifting more the further down they are
  c.y += sin(t * 1.1) * 0.05;
  c.x += sin(uv.y * 7.0 + t * 1.7) * 0.06 * tail * tail + sin(uv.y * 3.0 + t * 0.9) * 0.02;
  c.y += sin(uv.x * 6.0 + t * 1.3) * 0.03 * tail;

  // her head tilts, sizing you up
  vec2 h = c - uHead;
  float ct = cos(uTilt * 0.6);
  float st = sin(uTilt * 0.6);
  c = uHead + vec2(ct * h.x - st * h.y, st * h.x + ct * h.y);

  // pulled toward the player: she stretches up and thins like taffy, the upper body first
  float pull = uStretch * (0.35 + 0.65 * uSuck);
  c.y += pull * 0.22 * uv.y;
  c.x *= 1.0 - pull * 0.1 * uv.y;
  c += vec2(sin(t * 47.0 + uv.y * 9.0), cos(t * 39.0 + uv.x * 7.0)) * 0.012 * uSuck;

  // fights back: clamps down on the cup and shudders
  c.y -= uGrip * 0.14;
  c.x += uGrip * sin(t * 55.0 + uv.y * 12.0) * 0.035;
  // nervous spasms
  c.x += uTwitch * sin(uv.y * 23.0 + t * 70.0) * 0.03;
  // shakes with laughter when you lose
  c.y += uLaugh * abs(sin(t * 19.0)) * 0.12;

  vec3 p = uCenter + vec3(c, 0.0);
  // lunges at you, and rises off the cup as it's freed
  p += vec3(0.0, 0.1, 0.55) * uLunge;
  p += vec3(0.0, 0.35, 0.3) * uLift + vec3(0.0, 0.0, 0.45) * pull * uv.y;

  // the win: she spins and is sucked into the camera
  float e = uExit * uExit;
  vec2 d = p.xy - vec2(0.0, uCenter.y);
  float spin = e * 5.0 * (1.2 - uv.y * 0.6);
  d = vec2(cos(spin) * d.x - sin(spin) * d.y, sin(spin) * d.x + cos(spin) * d.y) * (1.0 - e * 0.7);
  p.xy = vec2(0.0, uCenter.y) + d;
  p.z += e * 7.0;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`;
const spriteFragmentShader = /* glsl */ `
uniform sampler2D uMap;
uniform float uTime;
uniform float uSuck;
uniform float uGrip;
uniform float uExit;
uniform float uFlash;
uniform vec3 uGripColor;

varying vec2 vUv;

void main() {
  vec4 tex = texture2D(uMap, vUv);
  vec3 col = tex.rgb;
  // she shimmers, glows brighter as she's pulled, and flushes red when she fights back
  col *= 1.0 + sin(uTime * 2.3) * 0.04 + uSuck * 0.2;
  col = mix(col, col * uGripColor * 1.7, uGrip * 0.5);
  col += vec3(0.55, 0.6, 0.9) * uFlash * 0.35;
  // a little see-through, like any self-respecting ghost
  float alpha = tex.a * 0.95 * (1.0 - uExit);
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function makeGhostSpriteMaterial(curse, ghost, map, center, head) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
        uniforms: {
            ...curse,
            ...ghost,
            uMap: {
                value: map
            },
            uCenter: {
                value: center
            },
            uHead: {
                value: head
            }
        },
        vertexShader: spriteVertexShader,
        fragmentShader: spriteFragmentShader,
        transparent: true,
        depthWrite: false
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/games/wicked-rose/three/textures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "batGeometry",
    ()=>batGeometry,
    "condensationBump",
    ()=>condensationBump,
    "condensationRoughness",
    ()=>condensationRoughness,
    "contactShadow",
    ()=>contactShadow,
    "softDot",
    ()=>softDot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
/** Small canvas-drawn textures, so the scene needs no extra downloads. Each is made once and cached. */ const cache = new Map();
function canvasTexture(key, w, h, draw, opts = {
    srgb: true
}) {
    const hit = cache.get(key);
    if (hit) return hit;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    draw(canvas.getContext("2d"));
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    if (opts.srgb) texture.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    if (opts.repeat) texture.wrapS = texture.wrapT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RepeatWrapping"];
    cache.set(key, texture);
    return texture;
}
/** deterministic random so every texture is the same on every load */ function seeded(seed) {
    let s = seed;
    return ()=>(s = s * 16807 % 2147483647) / 2147483647;
}
const softDot = ()=>canvasTexture("soft", 128, 128, (ctx)=>{
        const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        g.addColorStop(0, "rgba(255,255,255,1)");
        g.addColorStop(0.35, "rgba(255,255,255,0.45)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 128, 128);
    });
const contactShadow = ()=>canvasTexture("contact-shadow", 128, 128, (ctx)=>{
        const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        g.addColorStop(0, "rgba(0,0,0,1)");
        g.addColorStop(0.62, "rgba(0,0,0,0.9)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, 128, 128);
    });
/* ---------- the cup: condensation ---------- */ function droplets(seed) {
    const rand = seeded(seed);
    const drops = [];
    for(let i = 0; i < 1100; i++){
        const big = rand() < 0.08;
        drops.push({
            x: rand() * 512,
            y: rand() * 512,
            r: big ? 6 + rand() * 7 : 1.2 + rand() * 3.2
        });
    }
    return drops;
}
const condensationBump = ()=>canvasTexture("condensation-bump", 512, 512, (ctx)=>{
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, 512, 512);
        for (const d of droplets(11)){
            const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
            g.addColorStop(0, "rgba(255,255,255,1)");
            g.addColorStop(0.7, "rgba(255,255,255,0.6)");
            g.addColorStop(1, "rgba(255,255,255,0)");
            ctx.fillStyle = g;
            ctx.fillRect(d.x - d.r, d.y - d.r, d.r * 2, d.r * 2);
        }
        // a few drops that have run down the wall
        const rand = seeded(5);
        ctx.strokeStyle = "rgba(255,255,255,0.55)";
        ctx.lineCap = "round";
        for(let i = 0; i < 14; i++){
            const x = rand() * 512;
            const y = rand() * 400;
            ctx.lineWidth = 2 + rand() * 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + (rand() - 0.5) * 6, y + 30 + rand() * 90);
            ctx.stroke();
        }
    }, {
        srgb: false,
        repeat: true
    });
const condensationRoughness = ()=>canvasTexture("condensation-rough", 512, 512, (ctx)=>{
        ctx.fillStyle = "#5a5a5a";
        ctx.fillRect(0, 0, 512, 512);
        ctx.fillStyle = "#101010";
        for (const d of droplets(11)){
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r * 0.85, 0, Math.PI * 2);
            ctx.fill();
        }
    }, {
        srgb: false,
        repeat: true
    });
function batGeometry() {
    const half = [
        [
            0,
            0.1
        ],
        [
            0.04,
            0.17
        ],
        [
            0.06,
            0.09
        ],
        [
            0.16,
            0.13
        ],
        [
            0.34,
            0.2
        ],
        [
            0.5,
            0.1
        ],
        [
            0.42,
            0.02
        ],
        [
            0.34,
            0.05
        ],
        [
            0.26,
            -0.04
        ],
        [
            0.16,
            0.0
        ],
        [
            0.07,
            -0.08
        ],
        [
            0,
            -0.13
        ]
    ];
    const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"]();
    shape.moveTo(half[0][0], half[0][1]);
    half.slice(1).forEach(([x, y])=>shape.lineTo(x, y));
    [
        ...half
    ].reverse().slice(1).forEach(([x, y])=>shape.lineTo(-x, y));
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeGeometry"](shape);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GHOST_BOTTOM",
    ()=>GHOST_BOTTOM,
    "GHOST_TOP",
    ()=>GHOST_TOP,
    "revealShape",
    ()=>revealShape
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
;
const { stages } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
const GHOST_TOP = 2.75;
const GHOST_BOTTOM = -1.45;
const clamp01 = (x)=>Math.min(1, Math.max(0, x));
const lerp = (a, b, t)=>a + (b - a) * t;
const easeInOut = (t)=>t * t * (3 - 2 * t);
function revealShape(progress) {
    const p = clamp01(progress);
    const peel = clamp01((p - stages.stretchEnd) / (stages.logoOnly - stages.stretchEnd));
    const cling = clamp01((p - stages.logoOnly) / (1 - stages.logoOnly));
    return {
        revealY: lerp(GHOST_TOP + 0.15, GHOST_BOTTOM - 0.25, easeInOut(peel)),
        patch: lerp(1.35, 0.8, cling),
        stretch: clamp01(p / stages.stretchEnd),
        arm: lerp(1, 0.32, peel) - cling * 0.14
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/components/games/wicked-rose/three/Scene.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/games/wicked-rose/three/Scene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_0lygtryeo66ui._.js.map