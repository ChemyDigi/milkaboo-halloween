(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/halloween/HalloweenExperience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HalloweenExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.mjs [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Game.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$halloween$2f$JigsawPuzzle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/halloween/JigsawPuzzle.tsx [app-client] (ecmascript)");
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
const FLAVORS = [
    {
        id: "haunted-apple",
        name: "HAUNTED",
        subName: "APPLE",
        fullName: "HAUNTED APPLE",
        ghostTitle: "The Spooky Phantom",
        desc: "Crisp green apple matcha boba hijacked by a cackling ectoplasm spirit! Zesty, refreshing, and dangerously punchy.",
        cupImage: "/images/halloween/cup-apple-tilt.png",
        posterImage: "/images/halloween/Neon Ghost Matcha Boo Poster.png",
        ghostImage: "/images/halloween/ghost-cutout-apple.png",
        themeColor: "#a3ff84",
        glowColor: "rgba(139, 255, 132, 0.4)",
        borderGlow: "rgba(163, 255, 132, 0.65)",
        badgeBg: "rgba(34, 197, 94, 0.25)",
        ghostType: "apple",
        game: "suck"
    },
    {
        id: "blackcurrant-beast",
        name: "BLACKCURRENT",
        subName: "BEAST",
        fullName: "BLACKCURRENT BEAST",
        ghostTitle: "The Horned Shadow",
        desc: "Rich, shadowy dark violet blackcurrant loaded with juicy popping pearls. Bewitched by the mischievous shadow beast.",
        cupImage: "/images/halloween/cup-currant-tilt.png",
        posterImage: "/images/halloween/Possessed Blackcurrant Bubble Tea.png",
        ghostImage: "/images/halloween/ghost-cutout-currant.png",
        themeColor: "#c084fc",
        glowColor: "rgba(192, 132, 252, 0.45)",
        borderGlow: "rgba(192, 132, 252, 0.7)",
        badgeBg: "rgba(168, 85, 247, 0.25)",
        ghostType: "beast",
        game: "suck"
    },
    {
        id: "casper-custard",
        name: "CASPER",
        subName: "CUSTARD",
        fullName: "CASPER CUSTARD",
        ghostTitle: "The Friendly Sprite",
        desc: "Creamy golden vanilla custard boba guarded by a friendly sweet ghost. Velvety, warm, and delightfully enchanting.",
        cupImage: "/images/halloween/cup-custard.png",
        posterImage: "/images/halloween/Milka Boo Vanilla Ghost Bubble Tea.png",
        ghostImage: "/images/halloween/ghost-cutout-custard.png",
        themeColor: "#fed778",
        glowColor: "rgba(254, 215, 120, 0.45)",
        borderGlow: "rgba(254, 215, 120, 0.7)",
        badgeBg: "rgba(245, 158, 11, 0.25)",
        ghostType: "custard",
        game: "jigsaw"
    },
    {
        id: "wicked-rose",
        name: "WICKED",
        subName: "ROSE",
        fullName: "WICKED ROSE",
        ghostTitle: "The Ghost Princess",
        desc: "Fragrant rose blossom milk tea topped with boba and magical rose petal dew, claimed by the stylish spooky princess.",
        cupImage: "/images/halloween/cup-rose-tilt.png",
        posterImage: "/images/halloween/Pink Boo Bubble Tea Ghost.png",
        ghostImage: "/images/halloween/ghost-cutout-rose.png",
        themeColor: "#ff7cbe",
        glowColor: "rgba(255, 124, 190, 0.5)",
        borderGlow: "rgba(255, 124, 190, 0.75)",
        badgeBg: "rgba(244, 63, 94, 0.25)",
        ghostType: "rose",
        game: "suck"
    }
];
// Stylized ghost character badge floating over each flavor cup
function FlavorGhostBadge({ type, color }) {
    if (type === "apple") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex items-center justify-center",
            animate: {
                y: [
                    0,
                    -8,
                    0
                ],
                rotate: [
                    -2,
                    2,
                    -2
                ]
            },
            transition: {
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-2 rounded-full blur-md opacity-70 animate-pulse",
                        style: {
                            background: color
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center gap-1 rounded-full px-3 py-1 bg-black/60 border border-[#a3ff84]/50 backdrop-blur-md shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "🍏"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-black text-[#a3ff84]",
                                children: "👻 Phantom"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }
    if (type === "beast") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex items-center justify-center",
            animate: {
                y: [
                    0,
                    -9,
                    0
                ],
                rotate: [
                    2,
                    -2,
                    2
                ]
            },
            transition: {
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-2 rounded-full blur-md opacity-70 animate-pulse",
                        style: {
                            background: color
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center gap-1 rounded-full px-3 py-1 bg-black/60 border border-[#c084fc]/50 backdrop-blur-md shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "😈"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-black text-[#c084fc]",
                                children: "👾 Beast"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    }
    if (type === "custard") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex items-center justify-center",
            animate: {
                y: [
                    0,
                    -7,
                    0
                ],
                rotate: [
                    -1.5,
                    1.5,
                    -1.5
                ]
            },
            transition: {
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -inset-2 rounded-full blur-md opacity-70 animate-pulse",
                        style: {
                            background: color
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center gap-1 rounded-full px-3 py-1 bg-black/60 border border-[#fed778]/50 backdrop-blur-md shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "⭐"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-black text-[#fed778]",
                                children: "👻 Sprite"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex items-center justify-center",
        animate: {
            y: [
                0,
                -8,
                0
            ],
            rotate: [
                2,
                -2,
                2
            ]
        },
        transition: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -inset-2 rounded-full blur-md opacity-70 animate-pulse",
                    style: {
                        background: color
                    }
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center gap-1 rounded-full px-3 py-1 bg-black/60 border border-[#ff7cbe]/50 backdrop-blur-md shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl",
                            children: "👑"
                        }, void 0, false, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-black text-[#ff7cbe]",
                            children: "👻 Princess"
                        }, void 0, false, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_c = FlavorGhostBadge;
// Builds a corner cobweb: radial threads fanning out from (0,0) joined by sagging spiral rings
function cobwebPath(size) {
    const angles = [
        8,
        22,
        36,
        50,
        64,
        78
    ].map((d)=>d * Math.PI / 180);
    const rings = [
        0.16,
        0.32,
        0.48,
        0.66,
        0.84
    ].map((f)=>f * size);
    const pt = (r, a)=>`${(r * Math.cos(a)).toFixed(1)} ${(r * Math.sin(a)).toFixed(1)}`;
    let d = angles.map((a)=>`M0 0 L${pt(size, a)}`).join(" ");
    for (const r of rings){
        d += ` M${pt(r, angles[0])}`;
        for(let i = 1; i < angles.length; i++){
            d += ` Q${pt(r * 0.86, (angles[i - 1] + angles[i]) / 2)} ${pt(r, angles[i])}`;
        }
    }
    return d;
}
const COBWEB_PATH = cobwebPath(260);
const BAT_PATH = "M32 10 C30 6 27 5 26 8 C22 4 14 3 6 8 C10 9 12 12 12 15 C16 13 20 14 22 18 C25 15 29 16 32 22 C35 16 39 15 42 18 C44 14 48 13 52 15 C52 12 54 9 58 8 C50 3 42 4 38 8 C37 5 34 6 32 10 Z";
const BATS = [
    {
        top: "14%",
        size: 46,
        duration: 16,
        delay: 0,
        reverse: false
    },
    {
        top: "30%",
        size: 30,
        duration: 21,
        delay: 6,
        reverse: true
    },
    {
        top: "8%",
        size: 24,
        duration: 25,
        delay: 11,
        reverse: false
    }
];
// Fixed (not random) so server and client render identically
const SPARKS = [
    {
        left: 4,
        bottom: 18,
        size: 5,
        duration: 7,
        delay: 0,
        color: "#a3ff84"
    },
    {
        left: 11,
        bottom: 42,
        size: 3,
        duration: 9,
        delay: 2.5,
        color: "#c084fc"
    },
    {
        left: 19,
        bottom: 10,
        size: 4,
        duration: 8,
        delay: 4,
        color: "#ff7cbe"
    },
    {
        left: 27,
        bottom: 55,
        size: 3,
        duration: 10,
        delay: 1,
        color: "#fed778"
    },
    {
        left: 35,
        bottom: 22,
        size: 5,
        duration: 7.5,
        delay: 5.5,
        color: "#c084fc"
    },
    {
        left: 44,
        bottom: 8,
        size: 3,
        duration: 9.5,
        delay: 3,
        color: "#a3ff84"
    },
    {
        left: 52,
        bottom: 38,
        size: 4,
        duration: 8.5,
        delay: 6.5,
        color: "#ff7cbe"
    },
    {
        left: 60,
        bottom: 15,
        size: 3,
        duration: 11,
        delay: 0.5,
        color: "#fed778"
    },
    {
        left: 67,
        bottom: 48,
        size: 5,
        duration: 7,
        delay: 3.5,
        color: "#c084fc"
    },
    {
        left: 74,
        bottom: 12,
        size: 3,
        duration: 9,
        delay: 7,
        color: "#a3ff84"
    },
    {
        left: 81,
        bottom: 30,
        size: 4,
        duration: 8,
        delay: 2,
        color: "#ff7cbe"
    },
    {
        left: 88,
        bottom: 60,
        size: 3,
        duration: 10.5,
        delay: 4.5,
        color: "#fed778"
    },
    {
        left: 95,
        bottom: 20,
        size: 5,
        duration: 7.5,
        delay: 1.5,
        color: "#c084fc"
    }
];
// Tombstones / crosses for the graveyard silhouette (x positions in a 1440-wide viewBox)
const TOMBSTONES = [
    {
        x: 120,
        w: 34,
        h: 54,
        tilt: -6
    },
    {
        x: 300,
        w: 26,
        h: 40,
        tilt: 4
    },
    {
        x: 520,
        w: 30,
        h: 46,
        tilt: -3
    },
    {
        x: 930,
        w: 36,
        h: 58,
        tilt: 5
    },
    {
        x: 1110,
        w: 26,
        h: 38,
        tilt: -5
    },
    {
        x: 1370,
        w: 30,
        h: 48,
        tilt: 3
    }
];
const CROSSES = [
    {
        x: 210,
        h: 62,
        tilt: 5
    },
    {
        x: 700,
        h: 50,
        tilt: -7
    },
    {
        x: 1020,
        h: 66,
        tilt: -3
    }
];
// Creepy ambient layer behind the flavour cards: cobwebs, spider, bats, ghost-light sparks, graveyard & fog
function SpookyFlavorBackdrop() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
        reducedMotion: "user",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
            style: {
                maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)"
            },
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute top-0 left-0 w-40 sm:w-56 lg:w-64 opacity-25",
                    viewBox: "0 0 260 260",
                    fill: "none",
                    stroke: "#e9d5ff",
                    strokeWidth: "1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: COBWEB_PATH
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute top-0 right-0 w-36 sm:w-48 lg:w-56 -scale-x-100 opacity-20",
                    viewBox: "0 0 260 260",
                    fill: "none",
                    stroke: "#e9d5ff",
                    strokeWidth: "1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: COBWEB_PATH
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute top-0 right-[9%] sm:right-[12%] flex flex-col items-center origin-top",
                    animate: {
                        y: [
                            0,
                            46,
                            12,
                            46,
                            0
                        ],
                        rotate: [
                            -3,
                            3,
                            -3
                        ]
                    },
                    transition: {
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-28 sm:h-40 w-px bg-linear-to-b from-transparent to-[#e9d5ff]/45"
                        }, void 0, false, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "26",
                            height: "26",
                            viewBox: "0 0 26 26",
                            className: "-mt-1 drop-shadow-[0_0_6px_rgba(192,132,252,0.7)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    stroke: "#1a0f2b",
                                    strokeWidth: "1.6",
                                    strokeLinecap: "round",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 12 Q4 8 2 3 M10 13 Q4 13 1 11 M10 14 Q5 17 2 21 M11 15 Q8 20 7 25"
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M16 12 Q22 8 24 3 M16 13 Q22 13 25 11 M16 14 Q21 17 24 21 M15 15 Q18 20 19 25"
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                    cx: "13",
                                    cy: "15",
                                    rx: "4.5",
                                    ry: "5.5",
                                    fill: "#1a0f2b"
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "13",
                                    cy: "9",
                                    r: "3",
                                    fill: "#1a0f2b"
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "11.8",
                                    cy: "8.6",
                                    r: "0.9",
                                    fill: "#ff7cbe"
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "14.2",
                                    cy: "8.6",
                                    r: "0.9",
                                    fill: "#ff7cbe"
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this),
                BATS.map((bat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute",
                        style: {
                            top: bat.top,
                            left: 0
                        },
                        initial: {
                            x: bat.reverse ? "105vw" : "-10vw"
                        },
                        animate: {
                            x: bat.reverse ? [
                                "105vw",
                                "-10vw"
                            ] : [
                                "-10vw",
                                "105vw"
                            ],
                            y: [
                                0,
                                -24,
                                10,
                                -16,
                                0
                            ]
                        },
                        transition: {
                            x: {
                                duration: bat.duration,
                                repeat: Infinity,
                                delay: bat.delay,
                                ease: "linear",
                                repeatDelay: 4
                            },
                            y: {
                                duration: bat.duration / 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                            width: bat.size,
                            height: bat.size / 2,
                            viewBox: "0 0 64 32",
                            className: `opacity-60 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)] ${bat.reverse ? "-scale-x-100" : ""}`,
                            animate: {
                                scaleY: [
                                    1,
                                    0.35,
                                    1
                                ]
                            },
                            transition: {
                                duration: 0.35,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: BAT_PATH,
                                fill: "#0a0414"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 330,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)),
                SPARKS.map((spark, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "absolute rounded-full",
                        style: {
                            left: `${spark.left}%`,
                            bottom: `${spark.bottom}%`,
                            width: spark.size,
                            height: spark.size,
                            background: spark.color,
                            boxShadow: `0 0 ${spark.size * 3}px ${spark.color}`
                        },
                        animate: {
                            y: [
                                0,
                                -140
                            ],
                            x: [
                                0,
                                12,
                                -8,
                                0
                            ],
                            opacity: [
                                0,
                                0.85,
                                0
                            ]
                        },
                        transition: {
                            duration: spark.duration,
                            repeat: Infinity,
                            delay: spark.delay,
                            ease: "easeOut"
                        }
                    }, i, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute bottom-0 left-0 w-full h-40 sm:h-52 drop-shadow-[0_-6px_18px_rgba(147,51,234,0.35)]",
                    viewBox: "0 0 1440 220",
                    preserveAspectRatio: "xMidYMax slice",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#08030f",
                        children: [
                            Array.from({
                                length: 14
                            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M${560 + i * 18} 178 V136 l3 -8 l3 8 V178 Z`
                                }, i, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "556",
                                y: "146",
                                width: "256",
                                height: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "556",
                                y: "166",
                                width: "256",
                                height: "4"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this),
                            TOMBSTONES.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: t.x,
                                    y: 182 - t.h,
                                    width: t.w,
                                    height: t.h + 20,
                                    rx: t.w / 2,
                                    transform: `rotate(${t.tilt} ${t.x + t.w / 2} 182)`
                                }, i, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this)),
                            CROSSES.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    transform: `rotate(${c.tilt} ${c.x} 182)`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: c.x - 3,
                                            y: 182 - c.h,
                                            width: "6",
                                            height: c.h + 10
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: c.x - 14,
                                            y: 182 - c.h + 14,
                                            width: "28",
                                            height: "6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M1236 182 C1240 140 1238 110 1230 80 C1222 60 1204 48 1188 42 M1232 92 C1250 74 1270 66 1292 62 M1236 120 C1256 112 1270 100 1278 86 M1229 70 C1232 50 1240 36 1252 26",
                                stroke: "#08030f",
                                strokeWidth: "7",
                                strokeLinecap: "round",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 220 V176 Q180 150 380 170 T780 166 T1160 174 T1440 160 V220 Z"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute -bottom-10 -left-1/4 h-44 w-[90%] rounded-full bg-[#c084fc]/12 blur-3xl",
                    animate: {
                        x: [
                            "0%",
                            "18%",
                            "0%"
                        ]
                    },
                    transition: {
                        duration: 24,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 400,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute -bottom-14 -right-1/4 h-48 w-[85%] rounded-full bg-[#ff7cbe]/10 blur-3xl",
                    animate: {
                        x: [
                            "0%",
                            "-20%",
                            "0%"
                        ]
                    },
                    transition: {
                        duration: 28,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
            lineNumber: 259,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
        lineNumber: 258,
        columnNumber: 5
    }, this);
}
_c1 = SpookyFlavorBackdrop;
function HalloweenExperience() {
    _s();
    const [activeGame, setActiveGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFlavor, setSelectedFlavor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-3b207c17787b4c70" + " " + "relative min-h-screen w-full bg-[#0d0618] text-[#f6f0ff] selection:bg-[#ff7cbe] selection:text-[#241a33] overflow-x-hidden font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Creepster&display=swap",
                className: "jsx-3b207c17787b4c70"
            }, void 0, false, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 423,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "3b207c17787b4c70",
                children: '.font-creepster{font-family:"Creepster", var(--g-font-display,var(--font-bherisi,cursive, sans-serif));letter-spacing:.04em}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-3b207c17787b4c70" + " " + "pointer-events-none fixed inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b207c17787b4c70" + " " + "absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full bg-purple-900/20 blur-[150px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b207c17787b4c70" + " " + "absolute top-1/2 -right-40 h-[700px] w-[700px] rounded-full bg-fuchsia-900/20 blur-[180px]"
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 438,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b207c17787b4c70" + " " + "absolute bottom-10 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-950/30 blur-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 439,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none fixed top-28 left-[6%] z-20 hidden lg:block opacity-65",
                animate: {
                    y: [
                        0,
                        -18,
                        0
                    ],
                    x: [
                        0,
                        8,
                        0
                    ],
                    rotate: [
                        -4,
                        4,
                        -4
                    ]
                },
                transition: {
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "jsx-3b207c17787b4c70" + " " + "text-4xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]",
                    children: "👻"
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none fixed top-36 right-[8%] z-20 hidden lg:block opacity-65",
                animate: {
                    y: [
                        0,
                        18,
                        0
                    ],
                    x: [
                        0,
                        -8,
                        0
                    ],
                    rotate: [
                        4,
                        -4,
                        4
                    ]
                },
                transition: {
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "jsx-3b207c17787b4c70" + " " + "text-4xl filter drop-shadow-[0_0_15px_rgba(255,124,190,0.8)]",
                    children: "🦇"
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 472,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-3b207c17787b4c70" + " " + "relative w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[820px] xl:min-h-[880px] flex items-center justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 62%, transparent 100%)"
                        },
                        className: "jsx-3b207c17787b4c70" + " " + "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                src: "/images/halloween/hero_mansion_bg.png",
                                alt: "Neon Ghosts at the Haunted Mansion",
                                fill: true,
                                priority: true,
                                sizes: "100vw",
                                className: "object-cover object-[72%_center] lg:object-center select-none"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b207c17787b4c70" + " " + "absolute inset-0 bg-linear-to-r from-[#0d0618]/95 via-[#0d0618]/65 to-transparent w-full lg:w-[65%]"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b207c17787b4c70" + " " + "absolute top-0 inset-x-0 h-24 bg-linear-to-b from-[#0d0618]/60 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b207c17787b4c70" + " " + "absolute bottom-0 inset-x-0 h-64 bg-linear-to-t from-[#0d0618]/80 via-[#0d0618]/40 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 481,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-3b207c17787b4c70" + " " + "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b207c17787b4c70" + " " + "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-6 xl:col-span-5",
                                    initial: {
                                        opacity: 0,
                                        x: -35
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "block text-2xl sm:text-3xl font-black uppercase tracking-[0.25em] text-[#d6c7ff]",
                                            style: {
                                                fontFamily: "var(--g-font-display, var(--font-bherisi, sans-serif))"
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.5
                                            },
                                            children: "THE"
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            className: "font-creepster mt-1 text-7xl sm:text-8xl xl:text-9xl font-black uppercase tracking-wider text-white select-none",
                                            style: {
                                                lineHeight: 0.92,
                                                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.35)"
                                            },
                                            children: "GHOSTS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                            className: "font-creepster mt-2 text-3xl sm:text-4xl xl:text-5xl font-black tracking-tight uppercase text-[#fdf8ff] select-none",
                                            children: "HAVE TAKEN OVER!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 543,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            className: "mt-6 max-w-md text-base sm:text-lg leading-relaxed text-[#d7cced]",
                                            initial: {
                                                opacity: 0,
                                                y: 15
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.7,
                                                delay: 0.2
                                            },
                                            children: [
                                                "Our delicious Milkaboo flavours have been conquered by mischievous ghosts! Play the challenges, defeat the ghosts, and",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-3b207c17787b4c70" + " " + "font-extrabold text-[#ff7cbe]",
                                                    children: "free the cups!"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 550,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "mt-8 flex flex-col sm:flex-row items-center gap-4",
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            transition: {
                                                duration: 0.6,
                                                delay: 0.35
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveGame("suck"),
                                                style: {
                                                    background: "linear-gradient(135deg, #fed778 0%, #feb273 50%, #ff8ab2 100%)"
                                                },
                                                className: "jsx-3b207c17787b4c70" + " " + "group relative inline-flex items-center justify-center gap-3.5 overflow-hidden rounded-full px-9 py-4 font-black tracking-wider uppercase text-[#241a33] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(254,183,124,0.65)] hover:shadow-[0_0_60px_rgba(255,124,190,0.9)] cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3b207c17787b4c70" + " " + "absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                                        className: "h-6 w-6 text-[#241a33] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3b207c17787b4c70" + " " + "text-lg sm:text-xl font-black",
                                                        children: "PLAY GAME"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 564,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative flex justify-center items-center lg:col-span-6 xl:col-span-7",
                                    initial: {
                                        opacity: 0,
                                        scale: 0.94,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.9,
                                        delay: 0.2,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[530px] xl:max-w-[570px] aspect-4/5 filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]",
                                        animate: {
                                            y: [
                                                0,
                                                -14,
                                                0
                                            ],
                                            rotate: [
                                                0,
                                                0.8,
                                                0,
                                                -0.8,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 5.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b207c17787b4c70" + " " + "absolute inset-x-8 bottom-8 top-20 rounded-full bg-fuchsia-600/30 blur-3xl -z-10 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                src: "/images/halloween/hero_cup_ghosts.png",
                                                alt: "Milka Boo Bubble Tea Ghosts",
                                                fill: true,
                                                priority: true,
                                                sizes: "(max-width: 768px) 90vw, 580px",
                                                className: "object-contain object-bottom pointer-events-none select-none"
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 610,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 594,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "jsx-3b207c17787b4c70" + " " + "pointer-events-none relative z-5 h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-x-0 -top-40 h-80",
                        style: {
                            background: "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(192, 132, 252, 0.28) 0%, rgba(217, 70, 239, 0.12) 45%, transparent 75%)",
                            filter: "blur(30px)"
                        },
                        animate: {
                            opacity: [
                                0.7,
                                1,
                                0.7
                            ],
                            scaleX: [
                                1,
                                1.08,
                                1
                            ]
                        },
                        transition: {
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 628,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: "radial-gradient(ellipse 40% 50% at 30% 50%, rgba(255, 124, 190, 0.14) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 72% 50%, rgba(163, 255, 132, 0.08) 0%, transparent 70%)",
                            filter: "blur(24px)"
                        },
                        className: "jsx-3b207c17787b4c70" + " " + "absolute inset-x-0 -top-16 h-32"
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 638,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "linear-gradient(to bottom, transparent 0, #031233 220px, #031233 calc(100% - 160px), transparent 100%)"
                },
                className: "jsx-3b207c17787b4c70" + " " + "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpookyFlavorBackdrop, {}, void 0, false, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "jsx-3b207c17787b4c70" + " " + "relative z-10 mx-auto max-w-7xl px-4 pt-6 pb-40 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b207c17787b4c70" + " " + "text-center mb-12 sm:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                        className: "text-2xl sm:text-3xl font-black uppercase tracking-[0.22em] text-[#e8dcfa]",
                                        style: {
                                            fontFamily: "var(--g-font-display, var(--font-bherisi, sans-serif))"
                                        },
                                        initial: {
                                            opacity: 0,
                                            y: 15
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6
                                        },
                                        children: "CHOOSE YOUR"
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                        className: "font-creepster mt-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider text-[#ff7cbe] select-none",
                                        initial: {
                                            opacity: 0,
                                            scale: 0.95
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.1
                                        },
                                        children: "CONQUERED FLAVOUR"
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 678,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "mt-3 text-base sm:text-lg text-[#bfb0d9]",
                                        initial: {
                                            opacity: 0
                                        },
                                        whileInView: {
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.2
                                        },
                                        children: "Which ghost will you challenge?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 688,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 664,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b207c17787b4c70" + " " + `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-7 ${FLAVORS.some((f)=>f.ghostImage) ? "gap-y-24 gap-x-6 pt-20" : "gap-6"}`,
                                children: FLAVORS.map((flavor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: `group relative flex flex-col ${flavor.ghostImage ? "overflow-visible" : "overflow-hidden"} rounded-3xl border border-white/10 bg-[#140b24]/90 p-4 backdrop-blur-md cursor-pointer transition-all duration-300`,
                                        style: {
                                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.02)"
                                        },
                                        whileHover: {
                                            y: -10,
                                            scale: 1.025,
                                            borderColor: flavor.borderGlow,
                                            boxShadow: `0 20px 45px rgba(0, 0, 0, 0.85), 0 0 35px ${flavor.glowColor}`
                                        },
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: index * 0.12
                                        },
                                        onClick: ()=>setSelectedFlavor(flavor),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: flavor.glowColor
                                                },
                                                className: "jsx-3b207c17787b4c70" + " " + "pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 725,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b207c17787b4c70" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b207c17787b4c70" + " " + "relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-black/40 flex flex-col justify-between p-4",
                                                        children: [
                                                            flavor.posterImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3b207c17787b4c70" + " " + `absolute inset-x-0 bottom-0 transition-transform duration-700 ease-out group-hover:scale-105 ${flavor.ghostImage ? "h-[125%]" : "top-0"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                                            src: flavor.posterImage,
                                                                            alt: `${flavor.fullName} Milkaboo Poster`,
                                                                            fill: true,
                                                                            sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw",
                                                                            className: "object-cover object-[center_30%] select-none"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                            lineNumber: 739,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                        lineNumber: 738,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3b207c17787b4c70" + " " + "absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                        lineNumber: 747,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    background: `radial-gradient(circle at 50% 60%, ${flavor.glowColor} 0%, transparent 70%)`
                                                                },
                                                                className: "jsx-3b207c17787b4c70" + " " + "absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 21
                                                            }, this),
                                                            !flavor.posterImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3b207c17787b4c70" + " " + "relative z-10 w-full flex justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlavorGhostBadge, {
                                                                            type: flavor.ghostType,
                                                                            color: flavor.themeColor
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                            lineNumber: 763,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                        lineNumber: 762,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-3b207c17787b4c70" + " " + "relative z-10 mx-auto my-auto h-[78%] w-[78%] transition-transform duration-500 ease-out group-hover:scale-110",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                                            src: flavor.cupImage,
                                                                            alt: `${flavor.fullName} Milkaboo Cup`,
                                                                            fill: true,
                                                                            sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw",
                                                                            className: "object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                            lineNumber: 768,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                        lineNumber: 767,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                lineNumber: 760,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3b207c17787b4c70" + " " + `relative z-10 ${flavor.posterImage ? "mt-auto" : ""} translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between rounded-xl bg-black/80 px-3.5 py-2 backdrop-blur-md border border-white/10 shadow-lg`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-3b207c17787b4c70" + " " + "text-xs font-bold text-white flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                                className: "w-3.5 h-3.5 text-yellow-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                                lineNumber: 782,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Free this flavour"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                        lineNumber: 781,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                        className: "w-4 h-4 text-white/80"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                        lineNumber: 785,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                lineNumber: 780,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 19
                                                    }, this),
                                                    flavor.ghostImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-3b207c17787b4c70" + " " + "pointer-events-none absolute inset-x-0 bottom-0 z-5 h-[125%] transition-transform duration-700 ease-out group-hover:scale-105",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                            src: flavor.ghostImage,
                                                            alt: "",
                                                            fill: true,
                                                            sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw",
                                                            className: "object-cover object-[center_30%] select-none",
                                                            style: {
                                                                filter: `drop-shadow(0 -4px 14px ${flavor.glowColor})`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 730,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-3b207c17787b4c70" + " " + "mt-5 mb-2 flex flex-col items-center text-center px-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            color: flavor.themeColor,
                                                            lineHeight: 1.15
                                                        },
                                                        className: "jsx-3b207c17787b4c70" + " " + "font-creepster text-2xl sm:text-3xl font-black uppercase tracking-wider transition-colors duration-300 select-none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3b207c17787b4c70",
                                                                children: flavor.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                lineNumber: 813,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-3b207c17787b4c70",
                                                                children: flavor.subName
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                                lineNumber: 814,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3b207c17787b4c70" + " " + "mt-2 text-xs font-semibold text-[#b5a3cf]",
                                                        children: flavor.ghostTitle
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 817,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 805,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, flavor.id, true, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 700,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 661,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedFlavor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: ()=>setSelectedFlavor(null),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-[#160b29] p-6 shadow-2xl sm:p-8",
                        style: {
                            boxShadow: `0 25px 60px rgba(0, 0, 0, 0.9), 0 0 50px ${selectedFlavor.glowColor}`
                        },
                        initial: {
                            scale: 0.9,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            scale: 0.9,
                            y: 20
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSelectedFlavor(null),
                                "aria-label": "Close details",
                                className: "jsx-3b207c17787b4c70" + " " + "absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                    lineNumber: 856,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 850,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-3b207c17787b4c70" + " " + "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: `radial-gradient(circle, ${selectedFlavor.glowColor} 0%, rgba(22, 11, 41, 0.9) 70%)`
                                        },
                                        className: "jsx-3b207c17787b4c70" + " " + "relative h-64 w-52 overflow-hidden rounded-2xl p-4 flex items-center justify-center",
                                        children: selectedFlavor.posterImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: selectedFlavor.posterImage,
                                            alt: selectedFlavor.fullName,
                                            fill: true,
                                            sizes: "208px",
                                            className: "object-cover object-[center_30%]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 868,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3b207c17787b4c70" + " " + "relative h-full w-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                src: selectedFlavor.cupImage,
                                                alt: selectedFlavor.fullName,
                                                fill: true,
                                                sizes: "208px",
                                                className: "object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 877,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                            lineNumber: 876,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 861,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b207c17787b4c70" + " " + "mt-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: selectedFlavor.badgeBg
                                                },
                                                className: "jsx-3b207c17787b4c70" + " " + "inline-block rounded-full px-3.5 py-1 text-xs font-bold tracking-wide uppercase text-white/90",
                                                children: selectedFlavor.ghostTitle
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 889,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    color: selectedFlavor.themeColor
                                                },
                                                className: "jsx-3b207c17787b4c70" + " " + "font-creepster mt-3 text-3xl sm:text-4xl font-black uppercase tracking-wider",
                                                children: selectedFlavor.fullName
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 896,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-3b207c17787b4c70" + " " + "mt-3 text-sm text-[#c7bcd8] leading-relaxed max-w-sm",
                                                children: selectedFlavor.desc
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 905,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 888,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3b207c17787b4c70" + " " + "mt-6 flex w-full flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setSelectedFlavor(null);
                                                    setActiveGame(selectedFlavor.game);
                                                },
                                                style: {
                                                    background: "linear-gradient(135deg, #fed778 0%, #ff8ab2 100%)"
                                                },
                                                className: "jsx-3b207c17787b4c70" + " " + "flex w-full items-center justify-center gap-2 rounded-full py-3.5 font-black text-[#241a33] transition-all hover:scale-103 cursor-pointer shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 923,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-3b207c17787b4c70",
                                                        children: selectedFlavor.game === "jigsaw" ? "Solve Casper's Puzzle" : "Challenge Ghost & Win Free"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                        lineNumber: 924,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 912,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSelectedFlavor(null),
                                                className: "jsx-3b207c17787b4c70" + " " + "w-full text-center text-xs text-[#a495bf] hover:text-white py-1 transition-colors cursor-pointer",
                                                children: "Close & pick another"
                                            }, void 0, false, {
                                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                                lineNumber: 926,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 911,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 859,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                        lineNumber: 839,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 832,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 830,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: activeGame && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "fixed inset-0 z-50 flex flex-col bg-[#120a1f]",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b207c17787b4c70" + " " + "absolute top-4 left-4 z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveGame(null),
                                className: "jsx-3b207c17787b4c70" + " " + "flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur-md hover:bg-black/80 hover:text-white transition-all shadow-lg cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 958,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-3b207c17787b4c70",
                                        children: "Exit Challenge"
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                        lineNumber: 959,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 953,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 952,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-3b207c17787b4c70" + " " + "relative h-full w-full",
                            children: activeGame === "jigsaw" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$halloween$2f$JigsawPuzzle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onExit: ()=>setActiveGame(null)
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 965,
                                columnNumber: 42
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Game$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                                lineNumber: 965,
                                columnNumber: 96
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                            lineNumber: 964,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                    lineNumber: 945,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/halloween/HalloweenExperience.tsx",
                lineNumber: 943,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/halloween/HalloweenExperience.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, this);
}
_s(HalloweenExperience, "tuy1pmGMOIEZaFTpGVmwOPK+rrA=");
_c2 = HalloweenExperience;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FlavorGhostBadge");
__turbopack_context__.k.register(_c1, "SpookyFlavorBackdrop");
__turbopack_context__.k.register(_c2, "HalloweenExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/halloween/JigsawPuzzle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JigsawPuzzle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.mjs [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/** The Casper Custard poster, cut into COLS × ROWS classic jigsaw pieces. */ const IMAGE = {
    src: "/images/halloween/Milka%20Boo%20Vanilla%20Ghost%20Bubble%20Tea.png",
    width: 1024,
    height: 1536
};
const COLS = 3;
const ROWS = 4;
const PIECE_W = IMAGE.width / COLS;
const PIECE_H = IMAGE.height / ROWS;
/** tab sizes scale with this, so tabs look the same on every edge */ const TAB = Math.min(PIECE_W, PIECE_H);
_c = TAB;
/** room around each piece for its tabs (image units) */ const MARGIN = TAB * 0.3;
/** a piece dropped this close to its spot snaps in (image units) */ const SNAP = TAB * 0.2;
const ACCENT = "#fed778";
/**
 * One edge from (x0, y0) to (x1, y1), with a tab bulging outward (sign 1), a blank cut inward (−1), or
 * straight (0). The tab is drawn from a fixed template around the edge's midpoint, in TAB units.
 */ function edgePath(x0, y0, x1, y1, sign) {
    if (sign === 0) return `L ${x1} ${y1}`;
    const len = Math.hypot(x1 - x0, y1 - y0);
    const ux = (x1 - x0) / len;
    const uy = (y1 - y0) / len;
    // outward, for a piece traced clockwise (screen y points down)
    const vx = uy * sign;
    const vy = -ux * sign;
    const mx = (x0 + x1) / 2;
    const my = (y0 + y1) / 2;
    const p = (along, out)=>`${(mx + (ux * along + vx * out) * TAB).toFixed(1)} ${(my + (uy * along + vy * out) * TAB).toFixed(1)}`;
    return [
        `L ${p(-0.12, 0)}`,
        `C ${p(-0.08, 0)} ${p(-0.06, 0.06)} ${p(-0.1, 0.12)}`,
        `C ${p(-0.16, 0.22)} ${p(-0.05, 0.28)} ${p(0, 0.28)}`,
        `C ${p(0.05, 0.28)} ${p(0.16, 0.22)} ${p(0.1, 0.12)}`,
        `C ${p(0.06, 0.06)} ${p(0.08, 0)} ${p(0.12, 0)}`,
        `L ${x1} ${y1}`
    ].join(" ");
}
/** A fresh puzzle: random tabs on every shared edge, every piece loose (positions are set by `scatter`). */ function makePieces() {
    const flip = ()=>Math.random() < 0.5 ? -1 : 1;
    // horizontal[r][c]: the edge under row r (1 = the tab points down); vertical[r][c]: right of column c (1 = right)
    const horizontal = Array.from({
        length: ROWS - 1
    }, ()=>Array.from({
            length: COLS
        }, flip));
    const vertical = Array.from({
        length: ROWS
    }, ()=>Array.from({
            length: COLS - 1
        }, flip));
    const pieces = [];
    for(let row = 0; row < ROWS; row++){
        for(let col = 0; col < COLS; col++){
            const x0 = col * PIECE_W;
            const y0 = row * PIECE_H;
            const x1 = x0 + PIECE_W;
            const y1 = y0 + PIECE_H;
            const top = row === 0 ? 0 : -horizontal[row - 1][col];
            const right = col === COLS - 1 ? 0 : vertical[row][col];
            const bottom = row === ROWS - 1 ? 0 : horizontal[row][col];
            const left = col === 0 ? 0 : -vertical[row][col - 1];
            const path = [
                `M ${x0} ${y0}`,
                edgePath(x0, y0, x1, y0, top),
                edgePath(x1, y0, x1, y1, right),
                edgePath(x1, y1, x0, y1, bottom),
                edgePath(x0, y1, x0, y0, left),
                "Z"
            ].join(" ");
            pieces.push({
                id: row * COLS + col,
                col,
                row,
                path,
                x: 0,
                y: 0,
                placed: false
            });
        }
    }
    return pieces;
}
/** Fits the board to the screen: on top with the pieces below on a phone, centred with pieces either side on wider screens. */ function computeLayout(width, height) {
    const top = 112; // under the Exit button, the title and the stats
    const bottom = 76; // above the buttons
    const playH = Math.max(height - top - bottom, 200);
    const portrait = width < height * 0.9;
    if (portrait) {
        const scale = Math.min((width - 32) / IMAGE.width, playH * 0.5 / IMAGE.height);
        const boardW = IMAGE.width * scale;
        const boardH = IMAGE.height * scale;
        const boardLeft = (width - boardW) / 2;
        const trayTop = top + boardH + 16;
        return {
            scale,
            boardLeft,
            boardTop: top,
            trays: [
                {
                    x: 12,
                    y: trayTop,
                    w: Math.max(width - 24 - PIECE_W * scale, 1),
                    h: Math.max(height - bottom - trayTop - PIECE_H * scale, 1)
                }
            ]
        };
    }
    const scale = Math.min(width * 0.4 / IMAGE.width, playH / IMAGE.height);
    const boardW = IMAGE.width * scale;
    const boardLeft = (width - boardW) / 2;
    const side = boardLeft - 24 - PIECE_W * scale;
    const trayH = Math.max(playH - PIECE_H * scale, 1);
    return {
        scale,
        boardLeft,
        boardTop: top,
        trays: [
            {
                x: 16,
                y: top,
                w: Math.max(side, 1),
                h: trayH
            },
            {
                x: boardLeft + boardW + 8,
                y: top,
                w: Math.max(side, 1),
                h: trayH
            }
        ]
    };
}
const formatTime = (ms)=>{
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
function JigsawPuzzle({ onExit }) {
    _s();
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, "");
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [layout, setLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pieces, setPieces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(makePieces);
    /** draw order of the loose pieces: the last one is on top */ const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "JigsawPuzzle.useState": ()=>pieces.map({
                "JigsawPuzzle.useState": (p)=>p.id
            }["JigsawPuzzle.useState"])
    }["JigsawPuzzle.useState"]);
    const [scattered, setScattered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [peek, setPeek] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [moves, setMoves] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [startedAt, setStartedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [finishedIn, setFinishedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [draggingId, setDraggingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const won = finishedIn !== null;
    /** throws every loose piece somewhere in the trays */ const scatter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JigsawPuzzle.useCallback[scatter]": (list, l)=>{
            return list.map({
                "JigsawPuzzle.useCallback[scatter]": (p)=>{
                    if (p.placed) return p;
                    const tray = l.trays[Math.floor(Math.random() * l.trays.length)];
                    const px = tray.x + Math.random() * tray.w;
                    const py = tray.y + Math.random() * tray.h;
                    return {
                        ...p,
                        x: (px - l.boardLeft) / l.scale,
                        y: (py - l.boardTop) / l.scale
                    };
                }
            }["JigsawPuzzle.useCallback[scatter]"]);
        }
    }["JigsawPuzzle.useCallback[scatter]"], []);
    // measure the play area when it first appears and whenever it changes size,
    // and put the loose pieces back where they can be reached
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JigsawPuzzle.useEffect": ()=>{
            const el = container.current;
            if (!el) return;
            const observer = new ResizeObserver({
                "JigsawPuzzle.useEffect": ()=>{
                    const l = computeLayout(el.clientWidth, el.clientHeight);
                    setLayout(l);
                    setPieces({
                        "JigsawPuzzle.useEffect": (list)=>scatter(list, l)
                    }["JigsawPuzzle.useEffect"]);
                    setScattered(true);
                }
            }["JigsawPuzzle.useEffect"]);
            observer.observe(el);
            return ({
                "JigsawPuzzle.useEffect": ()=>observer.disconnect()
            })["JigsawPuzzle.useEffect"];
        }
    }["JigsawPuzzle.useEffect"], [
        scatter
    ]);
    // the clock ticks from the first touch until the last piece is in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JigsawPuzzle.useEffect": ()=>{
            if (startedAt === null || won) return;
            const timer = setInterval({
                "JigsawPuzzle.useEffect.timer": ()=>setNow(performance.now())
            }["JigsawPuzzle.useEffect.timer"], 250);
            return ({
                "JigsawPuzzle.useEffect": ()=>clearInterval(timer)
            })["JigsawPuzzle.useEffect"];
        }
    }["JigsawPuzzle.useEffect"], [
        startedAt,
        won
    ]);
    const restart = ()=>{
        const fresh = makePieces();
        setPieces(layout ? scatter(fresh, layout) : fresh);
        setOrder(fresh.map((p)=>p.id));
        setMoves(0);
        setStartedAt(null);
        setNow(0);
        setFinishedIn(null);
        setPeek(false);
        setDraggingId(null);
        drag.current = null;
    };
    const onPointerDown = (e, piece)=>{
        if (piece.placed || won || drag.current) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = {
            id: piece.id,
            pointer: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            fromX: piece.x,
            fromY: piece.y
        };
        setDraggingId(piece.id);
        setOrder((o)=>[
                ...o.filter((id)=>id !== piece.id),
                piece.id
            ]);
        if (startedAt === null) {
            setStartedAt(e.timeStamp);
            setNow(e.timeStamp);
        }
    };
    const onPointerMove = (e)=>{
        const d = drag.current;
        if (!d || d.pointer !== e.pointerId || !layout) return;
        const x = d.fromX + (e.clientX - d.startX) / layout.scale;
        const y = d.fromY + (e.clientY - d.startY) / layout.scale;
        setPieces((list)=>list.map((p)=>p.id === d.id ? {
                    ...p,
                    x,
                    y
                } : p));
    };
    const onPointerUp = (e)=>{
        const d = drag.current;
        if (!d || d.pointer !== e.pointerId) return;
        drag.current = null;
        setDraggingId(null);
        setMoves((m)=>m + 1);
        const next = pieces.map((p)=>{
            if (p.id !== d.id) return p;
            const homeX = p.col * PIECE_W;
            const homeY = p.row * PIECE_H;
            return Math.abs(p.x - homeX) < SNAP && Math.abs(p.y - homeY) < SNAP ? {
                ...p,
                x: homeX,
                y: homeY,
                placed: true
            } : p;
        });
        setPieces(next);
        // the last piece is in: stop the clock
        if (next.every((p)=>p.placed)) setFinishedIn(e.timeStamp - (startedAt ?? e.timeStamp));
    };
    const placedCount = pieces.filter((p)=>p.placed).length;
    const elapsed = finishedIn ?? (startedAt === null ? 0 : Math.max(0, now - startedAt));
    // placed pieces underneath, then the loose ones in their stacking order
    const drawn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "JigsawPuzzle.useMemo[drawn]": ()=>{
            const byId = new Map(pieces.map({
                "JigsawPuzzle.useMemo[drawn]": (p)=>[
                        p.id,
                        p
                    ]
            }["JigsawPuzzle.useMemo[drawn]"]));
            return [
                ...pieces.filter({
                    "JigsawPuzzle.useMemo[drawn]": (p)=>p.placed
                }["JigsawPuzzle.useMemo[drawn]"]),
                ...order.map({
                    "JigsawPuzzle.useMemo[drawn]": (id)=>byId.get(id)
                }["JigsawPuzzle.useMemo[drawn]"]).filter({
                    "JigsawPuzzle.useMemo[drawn]": (p)=>!p.placed
                }["JigsawPuzzle.useMemo[drawn]"])
            ];
        }
    }["JigsawPuzzle.useMemo[drawn]"], [
        pieces,
        order
    ]);
    const k = layout?.scale ?? 0;
    const pieceBox = {
        w: (PIECE_W + MARGIN * 2) * k,
        h: (PIECE_H + MARGIN * 2) * k
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: container,
        className: "relative h-full w-full touch-none select-none overflow-hidden bg-[#120a1f]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 scale-110 bg-cover bg-center opacity-20 blur-2xl",
                style: {
                    backgroundImage: `url("${IMAGE.src}")`
                }
            }, void 0, false, {
                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-4 z-20 flex flex-col items-center gap-1 px-4 pl-40 sm:pl-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-creepster text-2xl sm:text-3xl uppercase tracking-wider",
                        style: {
                            color: ACCENT
                        },
                        children: "Piece Casper Back Together"
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-sm font-bold text-white/85",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                        className: "h-4 w-4",
                                        style: {
                                            color: ACCENT
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    formatTime(elapsed)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    placedCount,
                                    "/",
                                    pieces.length,
                                    " pieces"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    moves,
                                    " moves"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            layout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute rounded-xl border border-white/15 bg-black/35 shadow-[0_0_40px_rgba(254,215,120,0.12)]",
                        style: {
                            left: layout.boardLeft,
                            top: layout.boardTop,
                            width: IMAGE.width * k,
                            height: IMAGE.height * k
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "absolute inset-0 h-full w-full",
                            viewBox: `0 0 ${IMAGE.width} ${IMAGE.height}`,
                            "aria-hidden": true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                    href: IMAGE.src,
                                    width: IMAGE.width,
                                    height: IMAGE.height,
                                    opacity: peek ? 0.3 : 0,
                                    style: {
                                        transition: "opacity 0.3s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this),
                                pieces.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: p.path,
                                        fill: "none",
                                        stroke: "rgba(255,255,255,0.14)",
                                        strokeWidth: 3,
                                        strokeDasharray: "12 10"
                                    }, p.id, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    scattered && drawn.map((p)=>{
                        const dragging = draggingId === p.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "pointer-events-none absolute",
                            style: {
                                left: layout.boardLeft + (p.x - MARGIN) * k,
                                top: layout.boardTop + (p.y - MARGIN) * k,
                                width: pieceBox.w,
                                height: pieceBox.h,
                                filter: p.placed ? "none" : dragging ? "drop-shadow(0 14px 18px rgba(0,0,0,0.6))" : "drop-shadow(0 4px 6px rgba(0,0,0,0.5))",
                                transition: p.placed ? "left 0.15s ease-out, top 0.15s ease-out" : undefined
                            },
                            viewBox: `${p.col * PIECE_W - MARGIN} ${p.row * PIECE_H - MARGIN} ${PIECE_W + MARGIN * 2} ${PIECE_H + MARGIN * 2}`,
                            "aria-label": p.placed ? undefined : `Puzzle piece ${p.id + 1}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: `${uid}-piece-${p.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: p.path
                                        }, void 0, false, {
                                            fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                            lineNumber: 331,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 330,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                    lineNumber: 329,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    clipPath: `url(#${uid}-piece-${p.id})`,
                                    style: {
                                        pointerEvents: p.placed || won ? "none" : "auto",
                                        cursor: dragging ? "grabbing" : "grab"
                                    },
                                    onPointerDown: (e)=>onPointerDown(e, p),
                                    onPointerMove: onPointerMove,
                                    onPointerUp: onPointerUp,
                                    onPointerCancel: onPointerUp,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                        href: IMAGE.src,
                                        width: IMAGE.width,
                                        height: IMAGE.height
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 342,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                    lineNumber: 334,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: p.path,
                                    fill: "none",
                                    stroke: p.placed ? "rgba(255,255,255,0.08)" : "rgba(255,240,200,0.75)",
                                    strokeWidth: p.placed ? 2 : 4,
                                    pointerEvents: "none"
                                }, void 0, false, {
                                    fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                    lineNumber: 345,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                            lineNumber: 311,
                            columnNumber: 17
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                lineNumber: 292,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-5 z-20 flex justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setPeek((v)=>!v),
                        disabled: won,
                        className: "flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-sm font-bold text-white/90 backdrop-blur-md transition-colors hover:bg-black/80 disabled:opacity-40 cursor-pointer",
                        children: [
                            peek ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 366,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 366,
                                columnNumber: 52
                            }, this),
                            peek ? "Hide picture" : "Peek"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: restart,
                        className: "flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-sm font-bold text-white/90 backdrop-blur-md transition-colors hover:bg-black/80 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            "Shuffle"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: won && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 z-30 flex items-end justify-center bg-linear-to-t from-black/80 via-black/20 to-transparent p-6 pb-10",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        delay: 0.35
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-full max-w-sm rounded-3xl border border-white/15 bg-[#1b0f2e]/95 p-6 text-center shadow-[0_0_60px_rgba(254,215,120,0.35)]",
                        initial: {
                            scale: 0.85,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 240,
                            damping: 18,
                            delay: 0.35
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "mx-auto h-12 w-12",
                                style: {
                                    color: ACCENT
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 395,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-creepster mt-3 text-4xl uppercase tracking-wider",
                                style: {
                                    color: ACCENT
                                },
                                children: "Casper Is Free!"
                            }, void 0, false, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 396,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-[#d7cced]",
                                children: [
                                    "Solved in ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black text-white",
                                        children: formatTime(elapsed)
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 400,
                                        columnNumber: 27
                                    }, this),
                                    " with",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black text-white",
                                        children: moves
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this),
                                    " moves."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 399,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: restart,
                                        className: "w-full rounded-full py-3 font-black text-[#241a33] transition-transform hover:scale-103 cursor-pointer",
                                        style: {
                                            background: "linear-gradient(135deg, #fed778 0%, #ff8ab2 100%)"
                                        },
                                        children: "Play again"
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 404,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onExit,
                                        className: "w-full py-1 text-sm text-[#a495bf] transition-colors hover:text-white cursor-pointer",
                                        children: "Back to the flavours"
                                    }, void 0, false, {
                                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                        lineNumber: 412,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                        lineNumber: 389,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                    lineNumber: 382,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/halloween/JigsawPuzzle.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
_s(JigsawPuzzle, "61zCNrtuaF54l68EfhBE6FtdUmY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = JigsawPuzzle;
var _c, _c1;
__turbopack_context__.k.register(_c, "TAB");
__turbopack_context__.k.register(_c1, "JigsawPuzzle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/sceneState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXIT_SECONDS",
    ()=>EXIT_SECONDS,
    "createSceneState",
    ()=>createSceneState,
    "createVisual",
    ()=>createVisual,
    "setSceneMode",
    ()=>setSceneMode
]);
function createSceneState() {
    return {
        mode: "intro",
        modeSince: 0,
        progress: 0,
        suck: 0,
        grip: false
    };
}
function setSceneMode(state, mode) {
    if (state.mode === mode) return;
    state.mode = mode;
    state.modeSince = performance.now();
}
function createVisual() {
    return {
        time: 0,
        progress: 0,
        suck: 0,
        grip: 0,
        exit: 0,
        winT: -1,
        loseT: -1,
        warm: 0
    };
}
const EXIT_SECONDS = 0.9;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CalibratingScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalibratingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/copy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const steps = [
    "3",
    "2",
    "1"
];
function CalibratingScreen() {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const stepMs = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].round.countdownMs / steps.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalibratingScreen.useEffect": ()=>{
            const timers = steps.map({
                "CalibratingScreen.useEffect.timers": (_, i)=>setTimeout({
                        "CalibratingScreen.useEffect.timers": ()=>setIndex(i + 1)
                    }["CalibratingScreen.useEffect.timers"], stepMs * (i + 1))
            }["CalibratingScreen.useEffect.timers"]);
            return ({
                "CalibratingScreen.useEffect": ()=>timers.forEach(clearTimeout)
            })["CalibratingScreen.useEffect"];
        }
    }["CalibratingScreen.useEffect"], [
        stepMs
    ]);
    const label = steps[index] ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].calibrating.go;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "game__safe items-center justify-between text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "game__title text-[clamp(2rem,9vw,3rem)]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].calibrating.title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/CalibratingScreen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-(--g-muted)",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].calibrating.body
                    }, void 0, false, {
                        fileName: "[project]/components/ui/CalibratingScreen.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/CalibratingScreen.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[18vh] grid h-32 place-items-center",
                "aria-live": "assertive",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "game__title text-[7rem] leading-none text-(--g-accent) drop-shadow-[0_0_30px_rgb(255_124_190/0.7)]",
                        initial: {
                            opacity: 0,
                            scale: 1.6
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.6
                        },
                        transition: {
                            duration: 0.35,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: label
                    }, label, false, {
                        fileName: "[project]/components/ui/CalibratingScreen.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/CalibratingScreen.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/CalibratingScreen.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/CalibratingScreen.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(CalibratingScreen, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = CalibratingScreen;
var _c;
__turbopack_context__.k.register(_c, "CalibratingScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/DebugPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DebugPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
"use client";
;
;
function DebugPanel({ mic, hud, tier }) {
    const flatOk = mic.flatness >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].mic.minFlatness;
    const loudOk = mic.rms >= mic.threshold;
    const row = (label, value, ok)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "opacity-60",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/components/ui/DebugPanel.tsx",
                    lineNumber: 14,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: ok === undefined ? "" : ok ? "text-(--g-good)" : "text-(--g-danger)",
                    children: value
                }, void 0, false, {
                    fileName: "[project]/components/ui/DebugPanel.tsx",
                    lineNumber: 15,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/DebugPanel.tsx",
            lineNumber: 13,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute bottom-[max(6rem,env(safe-area-inset-bottom))] left-2 z-40 w-52 rounded-xl bg-black/75 p-2 font-mono text-[11px] leading-tight text-white",
        children: [
            row("mic", mic.status),
            row("rms", mic.rms.toFixed(4), loudOk),
            row("threshold", mic.threshold.toFixed(4)),
            row("flatness", mic.flatness.toFixed(3), flatOk),
            row("minFlatness", __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].mic.minFlatness.toFixed(2)),
            row("isSucking", String(mic.isSucking), mic.isSucking),
            row("simulated", String(mic.simulated)),
            row("progress", hud.progress.toFixed(3)),
            row("gripping", String(hud.gripping)),
            row("tier", tier),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 opacity-60",
                children: "hold Space = suck"
            }, void 0, false, {
                fileName: "[project]/components/ui/DebugPanel.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/DebugPanel.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = DebugPanel;
var _c;
__turbopack_context__.k.register(_c, "DebugPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Game.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Game
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBreathDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useBreathDetector.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeviceTier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDeviceTier.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGameLoop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGameLoop.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/sceneState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CalibratingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CalibratingScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DebugPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/DebugPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/HUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IntroScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/IntroScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoseScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LoseScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MuteButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/MuteButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PermissionScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PermissionScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WinScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/WinScreen.tsx [app-client] (ecmascript)");
;
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
;
;
;
;
;
;
;
;
;
// WebGL only exists in the browser
const Scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/three/Scene.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/three/Scene.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Scene;
function Game() {
    _s();
    const debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeviceTier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugFlag"])();
    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeviceTier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceTier"])();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeviceTier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBreathDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreathDetector"])();
    const sounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSounds"])();
    const sceneState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSceneState"])());
    const [screen, setScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [peak, setPeak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const micGranted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const timers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[show]": (next, mode)=>{
            setScreen(next);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSceneMode"])(sceneState.current, mode);
        }
    }["Game.useCallback[show]"], []);
    const later = (fn, ms)=>timers.current.push(setTimeout(fn, ms));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            // Check if mic was already allowed
            navigator.permissions?.query({
                name: "microphone"
            }).then({
                "Game.useEffect": (p)=>micGranted.current = p.state === "granted"
            }["Game.useEffect"]).catch({
                "Game.useEffect": ()=>{}
            }["Game.useEffect"]);
            const pending = timers.current;
            return ({
                "Game.useEffect": ()=>pending.forEach(clearTimeout)
            })["Game.useEffect"];
        }
    }["Game.useEffect"], []);
    const endRound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[endRound]": ()=>{
            mic.stop();
            sounds.setSuction(0);
            const s = sceneState.current;
            s.suck = 0;
            s.grip = false;
        }
    }["Game.useCallback[endRound]"], [
        mic,
        sounds
    ]);
    const onRoundEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Game.useCallback[onRoundEvent]": (event, round)=>{
            if (event === "gripStart") {
                sounds.play("wail");
                if ("vibrate" in navigator) navigator.vibrate(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].fightBack.vibratePattern);
            } else if (event === "won") {
                endRound();
                sounds.play("shloop");
                show("won", "exiting");
                timers.current.push(setTimeout({
                    "Game.useCallback[onRoundEvent]": ()=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSceneMode"])(sceneState.current, "won");
                        sounds.play("win");
                        sounds.setAmbience(0.4);
                    }
                }["Game.useCallback[onRoundEvent]"], __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$sceneState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXIT_SECONDS"] * 1000));
            } else if (event === "lost") {
                endRound();
                setPeak(round.peak);
                sceneState.current.progress = 0; // the ghost wraps the whole cup again
                sounds.play("laugh");
                show("lost", "lost");
            }
        }
    }["Game.useCallback[onRoundEvent]"], [
        endRound,
        show,
        sounds
    ]);
    const loop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGameLoop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameLoop"])(mic.readingRef, sceneState, onRoundEvent);
    // Sound slurp follows suction
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            sounds.setSuction(screen === "playing" && loop.hud.sucking ? 1 : 0);
        }
    }["Game.useEffect"], [
        screen,
        loop.hud.sucking,
        sounds
    ]);
    /** Starts the round: initializes AudioContext and mic on user gesture */ const beginRound = async ()=>{
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
        later(()=>{
            show("playing", "playing");
            loop.start();
        }, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].round.countdownMs);
    };
    const onStart = ()=>{
        if (micGranted.current) void beginRound();
        else {
            sounds.unlock();
            setScreen("permission");
        }
    };
    const goHome = ()=>{
        loop.stop();
        endRound();
        sounds.setAmbience(1);
        sceneState.current.progress = 0;
        show("intro", "intro");
    };
    // ?debug: hold Space to simulate sucking
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game.useEffect": ()=>{
            if (!debug) return;
            const down = {
                "Game.useEffect.down": (e)=>{
                    if (e.code !== "Space" || e.target.tagName === "INPUT") return;
                    e.preventDefault();
                    mic.setSimulated(true);
                }
            }["Game.useEffect.down"];
            const up = {
                "Game.useEffect.up": (e)=>e.code === "Space" && mic.setSimulated(false)
            }["Game.useEffect.up"];
            window.addEventListener("keydown", down);
            window.addEventListener("keyup", up);
            return ({
                "Game.useEffect": ()=>{
                    window.removeEventListener("keydown", down);
                    window.removeEventListener("keyup", up);
                }
            })["Game.useEffect"];
        }
    }["Game.useEffect"], [
        debug,
        mic
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                    state: sceneState,
                    tier: tier,
                    reducedMotion: reducedMotion
                }, void 0, false, {
                    fileName: "[project]/components/ui/Game.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Game.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MuteButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                muted: sounds.muted,
                onToggle: sounds.toggleMute
            }, void 0, false, {
                fileName: "[project]/components/ui/Game.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].easy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pointer-events-none absolute top-[max(0.5rem,env(safe-area-inset-top))] left-1/2 z-30 -translate-x-1/2 rounded-full bg-(--g-pumpkin) px-3 py-0.5 text-xs font-black text-black",
                children: "EASY TEST MODE"
            }, void 0, false, {
                fileName: "[project]/components/ui/Game.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 z-10",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.25
                    },
                    children: [
                        screen === "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$IntroScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            busy: busy,
                            onStart: onStart
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Game.tsx",
                            lineNumber: 191,
                            columnNumber: 34
                        }, this),
                        screen === "permission" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PermissionScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            status: mic.status,
                            onAllow: ()=>void beginRound()
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Game.tsx",
                            lineNumber: 192,
                            columnNumber: 39
                        }, this),
                        screen === "calibrating" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CalibratingScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/ui/Game.tsx",
                            lineNumber: 193,
                            columnNumber: 40
                        }, this),
                        screen === "playing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            hud: loop.hud,
                            reducedMotion: reducedMotion
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Game.tsx",
                            lineNumber: 194,
                            columnNumber: 36
                        }, this),
                        screen === "won" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$WinScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onDone: goHome
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Game.tsx",
                            lineNumber: 195,
                            columnNumber: 32
                        }, this),
                        screen === "lost" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoseScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            peak: peak,
                            busy: busy,
                            onRetry: ()=>void beginRound(),
                            onHome: goHome
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Game.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    ]
                }, screen, true, {
                    fileName: "[project]/components/ui/Game.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/Game.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            debug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DebugPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mic: mic,
                hud: loop.hud,
                tier: tier
            }, void 0, false, {
                fileName: "[project]/components/ui/Game.tsx",
                lineNumber: 207,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Game.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(Game, "yhrCwZk316UaYnzCa8k8YkXtBa4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeviceTier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugFlag"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeviceTier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeviceTier"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDeviceTier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useBreathDetector$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBreathDetector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSounds"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGameLoop$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameLoop"]
    ];
});
_c1 = Game;
var _c, _c1;
__turbopack_context__.k.register(_c, "Scene");
__turbopack_context__.k.register(_c1, "Game");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/HUD.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.mjs [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/copy.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const status = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].hud.status;
function statusLine(hud) {
    if (hud.gripping) return {
        text: status.gripping,
        tone: "danger"
    };
    if (hud.sucking) {
        return {
            text: hud.progress >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].stages.logoOnly ? status.almost : status.sucking,
            tone: "good"
        };
    }
    if (hud.progress > 0.04) return {
        text: status.draining,
        tone: "danger"
    };
    return {
        text: status.idle,
        tone: "plain"
    };
}
function HUD({ hud, reducedMotion }) {
    const pct = Math.floor(hud.progress * 100);
    const line = statusLine(hud);
    const urgent = hud.timeLeft <= 5;
    // the level meter's threshold mark sits where level = 1 / 1.5 (see useGameLoop)
    const thresholdMark = 100 / 1.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "game__safe justify-between",
        children: [
            hud.gripping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "game__danger"
            }, void 0, false, {
                fileName: "[project]/components/ui/HUD.tsx",
                lineNumber: 30,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "flex items-start gap-3 pr-14",
                animate: hud.gripping && !reducedMotion ? {
                    x: [
                        0,
                        -6,
                        6,
                        -4,
                        4,
                        0
                    ]
                } : {
                    x: 0
                },
                transition: {
                    duration: 0.35,
                    repeat: hud.gripping && !reducedMotion ? Infinity : 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game__panel flex-1 px-4 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-(--g-muted)",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].hud.freed
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/HUD.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl font-black tabular-nums",
                                        children: [
                                            pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/HUD.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/HUD.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-3 overflow-hidden rounded-full bg-white/10",
                                role: "progressbar",
                                "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].hud.freed,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": pct,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-full rounded-full transition-[width,background-color] duration-100 ${hud.gripping ? "bg-(--g-danger)" : "bg-linear-to-r from-(--g-accent) to-(--g-pumpkin)"}`,
                                    style: {
                                        width: `${pct}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/HUD.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/HUD.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `game__panel flex min-w-20 flex-col items-center px-3 py-2 ${urgent ? "text-(--g-danger)" : ""}`,
                        "aria-label": `${Math.ceil(hud.timeLeft)} seconds left`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                size: 16,
                                className: "opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/HUD.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-black tabular-nums",
                                children: Math.ceil(hud.timeLeft)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/HUD.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/HUD.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/HUD.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-3 pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "aria-live": "polite",
                        className: `game__title text-center text-[clamp(1.8rem,8vw,2.6rem)] ${line.tone === "danger" ? "text-(--g-danger)" : line.tone === "good" ? "text-(--g-good)" : "text-(--g-text)"} drop-shadow-[0_2px_16px_rgb(0_0_0/0.8)]`,
                        children: line.text
                    }, void 0, false, {
                        fileName: "[project]/components/ui/HUD.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game__panel flex w-full max-w-xs items-center gap-2 px-3 py-2",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                size: 16,
                                className: hud.sucking ? "text-(--g-good)" : "text-(--g-muted)"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/HUD.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].hud.micLabel
                            }, void 0, false, {
                                fileName: "[project]/components/ui/HUD.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-2 flex-1 overflow-hidden rounded-full bg-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-full rounded-full ${hud.sucking ? "bg-(--g-good)" : "bg-white/50"}`,
                                        style: {
                                            width: `${Math.round(hud.level * 100)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/HUD.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-y-0 w-0.5 bg-white",
                                        style: {
                                            left: `${thresholdMark}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/HUD.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/HUD.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/HUD.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/HUD.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/HUD.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = HUD;
var _c;
__turbopack_context__.k.register(_c, "HUD");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/IntroScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/copy.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function IntroScreen({ busy = false, onStart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "game__safe justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                className: "flex flex-col items-center text-center",
                initial: {
                    opacity: 0,
                    y: -16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: "/images/logo.png",
                        alt: "Milkaboo",
                        width: 144,
                        height: 225,
                        priority: true,
                        className: "h-12 w-auto"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/IntroScreen.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "game__title game__title--haunt mt-2 text-[clamp(2.1rem,10vw,3.5rem)] text-(--g-text)",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/IntroScreen.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 max-w-xs text-sm text-(--g-muted) [@media(max-height:700px)]:hidden",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].tagline
                    }, void 0, false, {
                        fileName: "[project]/components/ui/IntroScreen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/IntroScreen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "game__panel mx-auto w-full max-w-md p-5",
                initial: {
                    opacity: 0,
                    y: 24
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.15,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "game__button w-full cursor-pointer",
                            onClick: onStart,
                            disabled: busy,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].start
                        }, void 0, false, {
                            fileName: "[project]/components/ui/IntroScreen.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-(--g-muted)/80",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].hygiene
                        }, void 0, false, {
                            fileName: "[project]/components/ui/IntroScreen.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/IntroScreen.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/IntroScreen.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/IntroScreen.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = IntroScreen;
var _c;
__turbopack_context__.k.register(_c, "IntroScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/LoseScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoseScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/copy.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function LoseScreen({ peak, busy = false, onRetry, onHome }) {
    const pct = Math.floor(peak * 100);
    const taunt = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].lose.taunt[pct % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].lose.taunt.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "game__safe justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "game__title mt-6 text-center text-[clamp(2rem,9vw,3rem)] text-(--g-danger) drop-shadow-[0_0_24px_rgb(255_59_92/0.6)]",
                initial: {
                    opacity: 0,
                    scale: 0.6,
                    rotate: -6
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 14
                },
                children: taunt
            }, void 0, false, {
                fileName: "[project]/components/ui/LoseScreen.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "game__panel mx-auto w-full max-w-md p-5 text-center",
                initial: {
                    opacity: 0,
                    y: 32
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.9,
                    duration: 0.5,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].lose.title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LoseScreen.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-(--g-muted)",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].lose.freed(pct)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LoseScreen.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-3 h-2 max-w-60 overflow-hidden rounded-full bg-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full bg-(--g-pumpkin)",
                            style: {
                                width: `${pct}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LoseScreen.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LoseScreen.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "game__button mt-5 w-full cursor-pointer",
                        onClick: onRetry,
                        disabled: busy,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LoseScreen.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            " ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].lose.tryAgain
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/LoseScreen.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "mt-3 block w-full text-center text-sm text-(--g-muted) hover:text-white transition-colors cursor-pointer",
                        onClick: onHome,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].win.playAgain
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LoseScreen.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/LoseScreen.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/LoseScreen.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = LoseScreen;
var _c;
__turbopack_context__.k.register(_c, "LoseScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/MuteButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MuteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/copy.ts [app-client] (ecmascript)");
"use client";
;
;
;
function MuteButton({ muted, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onToggle,
        "aria-pressed": muted,
        "aria-label": muted ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].unmute : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].mute,
        className: "game__panel pointer-events-auto absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-30 grid size-11 place-items-center rounded-full!",
        children: muted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/components/ui/MuteButton.tsx",
            lineNumber: 15,
            columnNumber: 16
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/components/ui/MuteButton.tsx",
            lineNumber: 15,
            columnNumber: 40
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/MuteButton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = MuteButton;
var _c;
__turbopack_context__.k.register(_c, "MuteButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PermissionScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PermissionScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.mjs [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-cw.mjs [app-client] (ecmascript) <export default as RotateCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/copy.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function detectPlatform() {
    const ua = navigator.userAgent;
    if (/iP(hone|ad|od)/.test(ua) || /Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "ios";
    if (/Android/.test(ua)) return "android";
    return "desktop";
}
const noop = ()=>()=>{};
function PermissionScreen({ status, onAllow }) {
    _s();
    const platform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(noop, detectPlatform, {
        "PermissionScreen.useSyncExternalStore[platform]": ()=>"desktop"
    }["PermissionScreen.useSyncExternalStore[platform]"]);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].permission;
    const problem = status === "denied" ? t.denied : status === "insecure" ? t.insecure : status === "unsupported" ? t.unsupported : status === "no-device" ? t.noDevice : status === "error" ? t.error : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "game__safe justify-end",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
            className: "game__panel mx-auto w-full max-w-md p-6 text-center",
            initial: {
                opacity: 0,
                y: 24
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            role: problem ? "alert" : undefined,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `mx-auto grid size-14 place-items-center rounded-full ${problem ? "bg-(--g-danger)/20 text-(--g-danger)" : "bg-white/10 text-(--g-accent)"}`,
                    children: status === "insecure" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PermissionScreen.tsx",
                        lineNumber: 54,
                        columnNumber: 36
                    }, this) : problem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PermissionScreen.tsx",
                        lineNumber: 54,
                        columnNumber: 67
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PermissionScreen.tsx",
                        lineNumber: 54,
                        columnNumber: 90
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/PermissionScreen.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                problem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-2xl",
                            children: problem.title
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PermissionScreen.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-(--g-muted)",
                            children: problem.body
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PermissionScreen.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        status === "denied" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 rounded-2xl bg-white/5 p-3 text-left text-sm",
                            children: t.denied[platform]
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PermissionScreen.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-col gap-2",
                            children: status === "denied" || status === "insecure" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "game__button",
                                onClick: ()=>location.reload(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCw$3e$__["RotateCw"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/PermissionScreen.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    t.reload
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/PermissionScreen.tsx",
                                lineNumber: 66,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "game__button",
                                onClick: onAllow,
                                children: t.retry
                            }, void 0, false, {
                                fileName: "[project]/components/ui/PermissionScreen.tsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PermissionScreen.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/PermissionScreen.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-2xl",
                            children: t.title
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PermissionScreen.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-(--g-muted)",
                            children: t.body
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PermissionScreen.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "game__button mt-5 w-full",
                            onClick: onAllow,
                            disabled: status === "requesting",
                            children: status === "requesting" ? t.asking : t.allow
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PermissionScreen.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/PermissionScreen.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/PermissionScreen.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/PermissionScreen.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(PermissionScreen, "pVrlrzxXLWTsmgldnPhBRI+mUvE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = PermissionScreen;
var _c;
__turbopack_context__.k.register(_c, "PermissionScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/WinScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WinScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/copy.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const t = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$copy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"].win;
function WinScreen({ onDone }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "game__safe justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                className: "mt-6 text-center",
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 0.8,
                    duration: 0.6,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#fed778] to-[#ff7cbe] text-[#241a33] shadow-[0_0_35px_rgba(255,124,190,0.7)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/components/ui/WinScreen.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/WinScreen.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "game__title text-[clamp(2.4rem,10vw,4rem)] text-(--g-text) drop-shadow-[0_0_28px_rgb(255_179_122/0.8)]",
                        children: t.title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/WinScreen.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-base text-(--g-muted)",
                        children: t.body
                    }, void 0, false, {
                        fileName: "[project]/components/ui/WinScreen.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/WinScreen.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                className: "game__panel mx-auto w-full max-w-sm p-6 text-center",
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 1.5,
                    duration: 0.6,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "game__button w-full shadow-[0_0_30px_rgba(255,124,190,0.5)] cursor-pointer",
                    onClick: onDone,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/ui/WinScreen.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        t.playAgain
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/WinScreen.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/WinScreen.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/WinScreen.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = WinScreen;
var _c;
__turbopack_context__.k.register(_c, "WinScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useBreathDetector.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBreathDetector",
    ()=>useBreathDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/breath.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const cfg = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].mic;
const UI_INTERVAL_MS = 80;
function useBreathDetector() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [ui, setUi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rms: 0,
        flatness: 0,
        threshold: cfg.minThreshold,
        isSucking: false,
        simulated: false
    });
    const readingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        ...ui
    });
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const streamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const analyserRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const simulatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const calibrationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBreathDetector.useCallback[loop]": ()=>{
            cancelAnimationFrame(rafRef.current);
            // analyser is null in ?debug's mic-less mode: everything reads as silence unless Space is held
            const analyser = analyserRef.current;
            const sampleRate = ctxRef.current?.sampleRate ?? 48000;
            const time = new Float32Array(cfg.fftSize);
            const freq = new Float32Array(cfg.fftSize / 2);
            let last = performance.now();
            let lastUi = 0;
            let rawSince = -1;
            let rawLastTrue = -Infinity;
            let held = false;
            let smoothRms = 0;
            const tick = {
                "useBreathDetector.useCallback[loop].tick": ()=>{
                    rafRef.current = requestAnimationFrame(tick);
                    const now = performance.now();
                    const dt = Math.min(0.1, (now - last) / 1000);
                    last = now;
                    let r = 0;
                    let flat = 0;
                    if (analyser) {
                        analyser.getFloatTimeDomainData(time);
                        analyser.getFloatFrequencyData(freq);
                        r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rms"])(time);
                        flat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spectralFlatness"])(freq, sampleRate, cfg.bandLowHz, cfg.bandHighHz);
                    }
                    const cal = calibrationRef.current;
                    if (cal) {
                        cal.samples.push(r);
                        if (now >= cal.until) {
                            calibrationRef.current = null;
                            const threshold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["thresholdFromNoise"])(cal.samples, cfg);
                            readingRef.current.threshold = threshold;
                            cal.resolve(threshold);
                        }
                    }
                    smoothRms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$breath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["damp"])(smoothRms, r, r > smoothRms ? cfg.rmsAttack : cfg.rmsRelease, dt);
                    const reading = readingRef.current;
                    const simulated = simulatedRef.current;
                    reading.rms = simulated ? reading.threshold * 2.2 : smoothRms;
                    reading.flatness = simulated ? 0.6 : flat;
                    reading.simulated = simulated;
                    // debounce: on after `attackMs` of raw signal, off after `releaseMs` without it
                    const raw = !cal && reading.flatness >= cfg.minFlatness && reading.rms >= reading.threshold;
                    if (raw) {
                        if (rawSince < 0) rawSince = now;
                        rawLastTrue = now;
                        if (now - rawSince >= cfg.attackMs) held = true;
                    } else {
                        rawSince = -1;
                        if (now - rawLastTrue >= cfg.releaseMs) held = false;
                    }
                    reading.isSucking = held;
                    if (now - lastUi >= UI_INTERVAL_MS) {
                        lastUi = now;
                        setUi({
                            ...reading
                        });
                    }
                }
            }["useBreathDetector.useCallback[loop].tick"];
            rafRef.current = requestAnimationFrame(tick);
        }
    }["useBreathDetector.useCallback[loop]"], []);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBreathDetector.useCallback[stop]": ()=>{
            cancelAnimationFrame(rafRef.current);
            sourceRef.current?.disconnect();
            sourceRef.current = null;
            analyserRef.current = null;
            streamRef.current?.getTracks().forEach({
                "useBreathDetector.useCallback[stop]": (t)=>t.stop()
            }["useBreathDetector.useCallback[stop]"]);
            streamRef.current = null;
            readingRef.current.isSucking = false;
            readingRef.current.rms = 0;
            setStatus({
                "useBreathDetector.useCallback[stop]": (s)=>s === "ready" ? "idle" : s
            }["useBreathDetector.useCallback[stop]"]);
        }
    }["useBreathDetector.useCallback[stop]"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBreathDetector.useCallback[start]": async ()=>{
            if (analyserRef.current) return true;
            // create/resume the context synchronously, inside the tap, before any await (iOS Safari)
            let ctx = ctxRef.current;
            try {
                if (!ctx) {
                    const Ctor = window.AudioContext ?? window.webkitAudioContext;
                    if (!Ctor) {
                        setStatus("unsupported");
                        return false;
                    }
                    ctx = new Ctor();
                    ctxRef.current = ctx;
                }
                void ctx.resume();
            } catch  {
                setStatus("unsupported");
                return false;
            }
            if (!window.isSecureContext) {
                setStatus("insecure");
                return false;
            }
            if (!navigator.mediaDevices?.getUserMedia) {
                setStatus("unsupported");
                return false;
            }
            setStatus("requesting");
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: false,
                        noiseSuppression: false,
                        autoGainControl: false
                    }
                });
                streamRef.current = stream;
                const source = ctx.createMediaStreamSource(stream);
                const analyser = ctx.createAnalyser();
                analyser.fftSize = cfg.fftSize;
                analyser.smoothingTimeConstant = cfg.smoothingTimeConstant;
                source.connect(analyser); // not connected to the speakers
                sourceRef.current = source;
                analyserRef.current = analyser;
                setStatus("ready");
                loop();
                return true;
            } catch (err) {
                const name = err instanceof DOMException ? err.name : "";
                if (name === "NotAllowedError" || name === "SecurityError") setStatus("denied");
                else if (name === "NotFoundError" || name === "OverconstrainedError") setStatus("no-device");
                else setStatus("error");
                return false;
            }
        }
    }["useBreathDetector.useCallback[start]"], [
        loop
    ]);
    const startSimulated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBreathDetector.useCallback[startSimulated]": ()=>{
            setStatus("ready");
            loop();
        }
    }["useBreathDetector.useCallback[startSimulated]"], [
        loop
    ]);
    const calibrate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBreathDetector.useCallback[calibrate]": ()=>new Promise({
                "useBreathDetector.useCallback[calibrate]": (resolve)=>{
                    if (!analyserRef.current) {
                        resolve(readingRef.current.threshold);
                        return;
                    }
                    calibrationRef.current = {
                        samples: [],
                        until: performance.now() + cfg.calibrationMs,
                        resolve
                    };
                }
            }["useBreathDetector.useCallback[calibrate]"])
    }["useBreathDetector.useCallback[calibrate]"], []);
    const setSimulated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBreathDetector.useCallback[setSimulated]": (on)=>{
            simulatedRef.current = on;
        }
    }["useBreathDetector.useCallback[setSimulated]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBreathDetector.useEffect": ()=>({
                "useBreathDetector.useEffect": ()=>{
                    stop();
                    void ctxRef.current?.close();
                    ctxRef.current = null;
                }
            })["useBreathDetector.useEffect"]
    }["useBreathDetector.useEffect"], [
        stop
    ]);
    return {
        ...ui,
        status,
        readingRef,
        start,
        startSimulated,
        stop,
        calibrate,
        setSimulated
    };
}
_s(useBreathDetector, "J4c1kxEoJpIwjiwgukQuPRd//IA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useDeviceTier.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebugFlag",
    ()=>useDebugFlag,
    "useDeviceTier",
    ()=>useDeviceTier,
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
/** A first guess from the hardware; the scene steps down further at runtime if frames drop (PerformanceMonitor). */ function guessTier() {
    const nav = navigator;
    const cores = nav.hardwareConcurrency ?? 4;
    const memory = nav.deviceMemory ?? 4;
    const touch = nav.maxTouchPoints > 0;
    if (cores <= 4 || memory <= 3) return "low";
    if (touch) return "mid";
    return "high";
}
const noop = ()=>()=>{};
function useDeviceTier() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(noop, guessTier, {
        "useDeviceTier.useSyncExternalStore": ()=>"mid"
    }["useDeviceTier.useSyncExternalStore"]);
}
_s(useDeviceTier, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(cb) {
    const mq = matchMedia(motionQuery);
    mq.addEventListener("change", cb);
    return ()=>mq.removeEventListener("change", cb);
}
function useReducedMotion() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeMotion, {
        "useReducedMotion.useSyncExternalStore": ()=>matchMedia(motionQuery).matches
    }["useReducedMotion.useSyncExternalStore"], {
        "useReducedMotion.useSyncExternalStore": ()=>false
    }["useReducedMotion.useSyncExternalStore"]);
}
_s1(useReducedMotion, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
function useDebugFlag() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(noop, {
        "useDebugFlag.useSyncExternalStore": ()=>new URLSearchParams(location.search).has("debug")
    }["useDebugFlag.useSyncExternalStore"], {
        "useDebugFlag.useSyncExternalStore": ()=>false
    }["useDebugFlag.useSyncExternalStore"]);
}
_s2(useDebugFlag, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useGameLoop.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameLoop",
    ()=>useGameLoop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameEngine.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const HUD_INTERVAL_MS = 100;
const idleHud = {
    progress: 0,
    timeLeft: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].round.timeLimit,
    sucking: false,
    gripping: false,
    level: 0
};
function useGameLoop(reading, scene, onEvent) {
    _s();
    const [hud, setHud] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(idleHud);
    const round = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const raf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const onEventRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onEvent);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGameLoop.useEffect": ()=>{
            onEventRef.current = onEvent;
        }
    }["useGameLoop.useEffect"], [
        onEvent
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameLoop.useCallback[stop]": ()=>cancelAnimationFrame(raf.current)
    }["useGameLoop.useCallback[stop]"], []);
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGameLoop.useCallback[start]": ()=>{
            cancelAnimationFrame(raf.current);
            const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRound"])();
            round.current = state;
            setHud(idleHud);
            let last = performance.now();
            let lastHud = 0;
            const events = [];
            const tick = {
                "useGameLoop.useCallback[start].tick": (now)=>{
                    // capped so a backgrounded tab can't jump the round forward in one step
                    const dt = Math.min(0.1, Math.max(0, (now - last) / 1000));
                    last = now;
                    const r = reading.current;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepRound"])(state, r, dt, events);
                    const s = scene.current;
                    const needed = r.threshold * (state.gripping ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].fightBack.thresholdMultiplier : 1);
                    s.progress = state.progress;
                    s.suck = state.sucking ? Math.min(1, 0.5 + (r.rms / needed - 1) * 0.5) : 0;
                    s.grip = state.gripping;
                    if (now - lastHud >= HUD_INTERVAL_MS || events.length) {
                        lastHud = now;
                        setHud({
                            progress: state.progress,
                            timeLeft: Math.max(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].round.timeLimit - state.elapsed),
                            sucking: state.sucking,
                            gripping: state.gripping,
                            level: Math.min(1.5, r.rms / Math.max(needed, 1e-6)) / 1.5
                        });
                    }
                    while(events.length)onEventRef.current(events.shift(), state);
                    if (state.status === "running") raf.current = requestAnimationFrame(tick);
                }
            }["useGameLoop.useCallback[start].tick"];
            raf.current = requestAnimationFrame(tick);
        }
    }["useGameLoop.useCallback[start]"], [
        reading,
        scene
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGameLoop.useEffect": ()=>stop
    }["useGameLoop.useEffect"], [
        stop
    ]);
    return {
        hud,
        round,
        start,
        stop
    };
}
_s(useGameLoop, "eboIW5nK0dpY0XAV+PPAFFi8f5U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useSounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSounds",
    ()=>useSounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MUTE_KEY = "milkaboo-ghost-muted";
const vol = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"].sound;
/* the mute switch is remembered per browser; a tiny external store keeps SSR and hydration consistent */ const muteListeners = new Set();
function readMuted() {
    try {
        return localStorage.getItem(MUTE_KEY) === "1";
    } catch  {
        return false;
    }
}
function writeMuted(muted) {
    try {
        localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
    } catch  {
    /* private mode: mute just won't be remembered */ }
    muteListeners.forEach((cb)=>cb());
}
function subscribeMuted(cb) {
    muteListeners.add(cb);
    return ()=>{
        muteListeners.delete(cb);
    };
}
function useSounds() {
    _s();
    const muted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeMuted, readMuted, {
        "useSounds.useSyncExternalStore[muted]": ()=>false
    }["useSounds.useSyncExternalStore[muted]"]);
    const howls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSounds.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].mute(muted);
        }
    }["useSounds.useEffect"], [
        muted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSounds.useEffect": ()=>{
            return ({
                "useSounds.useEffect": ()=>{
                    if (howls.current) Object.values(howls.current).forEach({
                        "useSounds.useEffect": (h)=>h.unload()
                    }["useSounds.useEffect"]);
                    howls.current = null;
                }
            })["useSounds.useEffect"];
        }
    }["useSounds.useEffect"], []);
    const unlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSounds.useCallback[unlock]": ()=>{
            if (howls.current) return;
            const make = {
                "useSounds.useCallback[unlock].make": (name, volume, loop = false)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
                        src: [
                            `/sounds/${name}.wav`
                        ],
                        volume,
                        loop,
                        preload: true
                    })
            }["useSounds.useCallback[unlock].make"];
            howls.current = {
                ambient: make("ambient", vol.ambient, true),
                slurp: make("slurp", 0, true),
                wail: make("wail", vol.sfx),
                shloop: make("shloop", vol.sfx),
                win: make("win", vol.sfx),
                laugh: make("laugh", vol.sfx)
            };
            howls.current.ambient.play();
        }
    }["useSounds.useCallback[unlock]"], []);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSounds.useCallback[play]": (name)=>{
            howls.current?.[name]?.play();
        }
    }["useSounds.useCallback[play]"], []);
    /** 0–1 suction strength; the slurp loop follows it */ const setSuction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSounds.useCallback[setSuction]": (amount)=>{
            const slurp = howls.current?.slurp;
            if (!slurp) return;
            if (amount > 0.01 && !slurp.playing()) slurp.play();
            slurp.volume(amount * vol.slurp);
            if (amount <= 0.01 && slurp.playing()) slurp.pause();
        }
    }["useSounds.useCallback[setSuction]"], []);
    /** fade the ambience down for big moments (win reveal) and back up */ const setAmbience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSounds.useCallback[setAmbience]": (level)=>{
            const ambient = howls.current?.ambient;
            if (ambient) ambient.fade(ambient.volume(), level * vol.ambient, 600);
        }
    }["useSounds.useCallback[setAmbience]"], []);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSounds.useCallback[toggleMute]": ()=>writeMuted(!readMuted())
    }["useSounds.useCallback[toggleMute]"], []);
    return {
        muted,
        toggleMute,
        unlock,
        play,
        setSuction,
        setAmbience
    };
}
_s(useSounds, "vgn3zwwMIFFtuYT6H5zvuHs946U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/breath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pure signal maths for breath detection. No Web Audio here, so it is easy to unit test.
 */ /** Root-mean-square loudness of a time-domain frame (samples in −1…1). */ __turbopack_context__.s([
    "damp",
    ()=>damp,
    "rms",
    ()=>rms,
    "spectralFlatness",
    ()=>spectralFlatness,
    "thresholdFromNoise",
    ()=>thresholdFromNoise
]);
function rms(samples) {
    let sum = 0;
    for(let i = 0; i < samples.length; i++)sum += samples[i] * samples[i];
    return Math.sqrt(sum / samples.length);
}
function spectralFlatness(spectrumDb, sampleRate, lowHz, highHz) {
    const binHz = sampleRate / 2 / spectrumDb.length;
    const lo = Math.max(1, Math.floor(lowHz / binHz));
    const hi = Math.min(spectrumDb.length - 1, Math.ceil(highHz / binHz));
    let logSum = 0;
    let sum = 0;
    let n = 0;
    for(let i = lo; i <= hi; i++){
        const db = spectrumDb[i];
        // −Infinity is digital silence; floor it so log() stays finite
        const power = Math.pow(10, (Number.isFinite(db) ? Math.max(db, -160) : -160) / 10);
        logSum += Math.log(power);
        sum += power;
        n++;
    }
    if (n === 0 || sum <= 0) return 0;
    return Math.exp(logSum / n) / (sum / n);
}
function thresholdFromNoise(noiseRms, opts) {
    if (noiseRms.length === 0) return opts.minThreshold;
    const sorted = [
        ...noiseRms
    ].sort((a, b)=>a - b);
    const p90 = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * 0.9))];
    return Math.min(opts.maxThreshold, Math.max(opts.minThreshold, p90 * opts.thresholdFactor));
}
function damp(current, target, rate, dt) {
    return current + (target - current) * (1 - Math.exp(-rate * dt));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/copy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Every player-facing line of the game in one place, so brand and translation edits never touch components. */ __turbopack_context__.s([
    "BRAND",
    ()=>BRAND,
    "copy",
    ()=>copy
]);
const BRAND = "Milkaboo";
const copy = {
    title: `Free the ${BRAND} Cup`,
    tagline: "A ghost has wrapped itself around your bubble tea. Suck it off before time runs out and free the cup!",
    start: "Start Game",
    hygiene: "Keep the phone a finger's width from your mouth. No licking the ghost.",
    permission: {
        title: "Let the ghost hear you",
        body: "We use your microphone to hear how hard you're sucking. Nothing is recorded or sent anywhere.",
        allow: "Allow microphone",
        asking: "Waiting for your browser…",
        denied: {
            title: "The mic is blocked",
            body: "No mic, no ghostbusting. Turn it back on, then reload this page:",
            ios: "iPhone/iPad Safari: tap ᴀA in the address bar → Website Settings → Microphone → Allow.",
            android: "Android Chrome: tap the lock (or ⋮ icon) next to the address → Permissions → Microphone → Allow.",
            desktop: "On a computer: click the icon left of the address bar and allow the microphone."
        },
        insecure: {
            title: "This page needs a secure link",
            body: "Browsers only share the mic with https:// pages. Open the game from its https address."
        },
        unsupported: {
            title: "This browser can't hear you",
            body: "Try the latest Safari on iPhone or Chrome on Android."
        },
        noDevice: {
            title: "No microphone found",
            body: "Plug one in, or try on your phone."
        },
        error: {
            title: "The ghost jammed the mic",
            body: "Something went wrong opening your microphone. Close other apps that use it and try again."
        },
        retry: "Try again",
        reload: "Reload page"
    },
    calibrating: {
        title: "Shhh… the ghost is listening",
        body: "Stay quiet for a moment",
        go: "Suck!"
    },
    hud: {
        freed: "Cup freed",
        status: {
            idle: "Suck now!",
            sucking: "Keep sucking!",
            gripping: "It's holding on! Harder!",
            draining: "Don't stop, it's wrapping back!",
            almost: "Almost! Just the logo left!"
        },
        micLabel: "Mic level"
    },
    win: {
        title: "You freed the cup!",
        body: "The ghost was vanquished and the Milkaboo cup is saved!",
        playAgain: "Play Again"
    },
    lose: {
        title: "The ghost won this time",
        freed: (pct)=>`You freed ${pct}% of the cup`,
        tryAgain: "Try Again",
        taunt: [
            "Boo-hoo-hoo!",
            "Is that all you've got?",
            "This tea is mine!"
        ]
    },
    mute: "Mute sound",
    unmute: "Unmute sound"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gameConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gameConfig",
    ()=>gameConfig,
    "minRoundSeconds",
    ()=>minRoundSeconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * "Free the Milkaboo Cup": every tunable number lives here.
 * Shared by the client (game loop, mic, 3D) and the server (anti-cheat), so the two never disagree.
 * Tune on real phones with `?debug` (see README-halloween.md).
 */ /**
 * Testing only: NEXT_PUBLIC_GAME_EASY=true makes the game easy to win (values after `EASY ?`).
 * NEXT_PUBLIC_ so the browser and the server's anti-cheat use the same rules. Read at build/dev start.
 */ const EASY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GAME_EASY === "true";
const gameConfig = {
    /** shown as a badge in the game so easy mode is never shipped by accident */ easy: EASY,
    round: {
        /** seconds the player has to free the cup */ timeLimit: EASY ? 30 : 25,
        /** seconds of continuous, threshold-level suction needed to go 0 → 100% */ fillSeconds: EASY ? 2.5 : 5,
        /** progress lost per second while not sucking (0.08 = 8%/s): the ghost wraps back */ drainPerSec: EASY ? 0.02 : 0.08,
        /** stronger suction peels faster, up to this multiple of the base rate */ maxBoost: 1.5,
        /** how quickly extra loudness turns into boost: 1 + (rms / threshold − 1) × boostSlope */ boostSlope: 0.35,
        /** the "Shhh… 3-2-1" screen, in ms; the mic calibrates during the first `mic.calibrationMs` of it */ countdownMs: 3000
    },
    fightBack: {
        /** the ghost fights back at a random moment every minInterval–maxInterval seconds */ minInterval: EASY ? 8 : 6,
        maxInterval: EASY ? 12 : 9,
        /** …for this many seconds */ duration: 1.4,
        /** while fighting, the suction threshold is this much higher… */ thresholdMultiplier: EASY ? 1 : 1.35,
        /** …and the ghost wraps back this much faster */ drainMultiplier: EASY ? 1.2 : 1.5,
        /** Android haptics pattern when it grips (ms on/off/on) */ vibratePattern: [
            70,
            40,
            90
        ]
    },
    mic: {
        fftSize: 2048,
        /** analyser smoothing; low keeps the meter snappy, a little smooths the flatness reading */ smoothingTimeConstant: 0.35,
        /** spectral flatness is measured in this band: breath and air are flat across it, voice is not */ bandLowHz: 200,
        bandHighHz: 6000,
        /** quiet-room calibration window */ calibrationMs: 2000,
        /** threshold = clamp(roomNoise × thresholdFactor, minThreshold, maxThreshold) */ thresholdFactor: EASY ? 1.2 : 2.2,
        minThreshold: EASY ? 0.004 : 0.014,
        /** stops a noisy room from making the game impossible */ maxThreshold: 0.14,
        /** 0–1. Breath is ~0.3–0.7 here, voice/whistle ~0.02–0.2. Raise it if shouting works, lower it if breath doesn't. */ minFlatness: EASY ? 0.05 : 0.28,
        /** debounce so one noisy frame doesn't flip the state: must hold for attack, survives gaps up to release */ attackMs: 60,
        releaseMs: 140,
        /** level meter smoothing (per-second rates) */ rmsAttack: 30,
        rmsRelease: 8
    },
    /** where the ghost lets go, in progress (0–1). Shared by the 3D reveal and the status copy. */ stages: {
        /** 0 → stretchEnd: the ghost only stretches toward the player */ stretchEnd: 0.3,
        /** stretchEnd → logoOnly: it peels from the top; lid and straw come free */ logoOnly: 0.7
    },
    cup: {
        /** the real cup model; the primitive placeholder is used when useModel is false (see README) */ modelUrl: "/images/halloween/MilkaBoo_Cup.glb",
        useModel: true,
        /** the GLB is scaled so its height matches this (scene units), and sits on y = bottom (the ground, GROUND_Y) */ height: 2.6,
        bottom: -1.5,
        /** extra rotation for the GLB so the logo faces the camera (radians, around Y) */ modelRotationY: 0,
        /** the logo's centre on the cup surface: angle around Y (0 = facing the camera) and height */ logoAngle: 0,
        logoY: -0.1,
        /** half-size of the logo, measured along the surface (scene units) */ logoHalfWidth: 0.3,
        logoHalfHeight: 0.46
    },
    /** the ghost's portrait, draped over the front of the cup with her head above the lid (cup space, scene units) */ ghostSprite: {
        url: "/images/halloween/Mischievous%20Pink%20Rose%20Ghost.png",
        /** width × height of the picture in the scene (keep the image's aspect ratio) */ size: [
            3.0,
            2.0
        ],
        /** where her face is in the image (0–1 from the left, 0–1 from the bottom); it's centred over the cup */ face: [
            0.4,
            0.59
        ],
        /** her face is this far above the top of the lid; the picture sits this far in front of the cup's axis */ faceAboveLid: 0.42,
        depth: 1.2
    },
    /** the painted cemetery behind the game; it always fills the screen, cropped like CSS object-fit: cover */ backdrop: {
        url: "/images/halloween/Moonlit%20Gothic%20Cemetery%20Gate.png",
        /** the part of the painting (0–1 from the left) kept in view on narrow screens */ focusX: 0.6,
        /** the height of the painted ground the cup stands on (0–1 from the bottom of the painting) */ ground: 0.22,
        /** how far in front of the camera it hangs (scene units); everything else is closer */ distance: 45,
        /** 0–1: how strongly the painting shows through the night haze (lower = softer, less contrast) */ opacity: 0.6
    },
    /** colours used in the 3D scene (the UI uses the CSS tokens in globals.css) */ colors: {
        /** sky at the top and at the horizon (the horizon is also the fog colour) */ night: "#07040f",
        fog: "#2a1a3f",
        /** the ghost's rose-pink glow (and the haze on the parts of the cup she still holds), the seam where
     * she lets go, red when she fights back */ ghostGlow: "#ff6fb5",
        rim: "#ff4fa6",
        grip: "#ff2a3c",
        /** the cup, from the product photo: taro-purple tea, near-black pearls */ taro: "#9d6ee4",
        pearl: "#1a0d08",
        pumpkin: "#ff8a1f",
        moon: "#dfe6ff",
        warm: "#ffc39c"
    },
    sound: {
        /** keep the in-game sounds quiet: the mic runs without echo cancellation and would hear them */ ambient: 0.35,
        slurp: 0.25,
        sfx: 0.7
    }
};
const minRoundSeconds = gameConfig.round.fillSeconds / gameConfig.round.maxBoost;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gameEngine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRound",
    ()=>createRound,
    "stepRound",
    ()=>stepRound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-client] (ecmascript)");
;
const { round, fightBack } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gameConfig"];
const randomBetween = (min, max, rng)=>min + (max - min) * rng();
function createRound(rng = Math.random) {
    return {
        status: "running",
        elapsed: 0,
        progress: 0,
        peak: 0,
        sucking: false,
        boost: 1,
        gripping: false,
        gripUntil: 0,
        nextGripAt: randomBetween(fightBack.minInterval, fightBack.maxInterval, rng)
    };
}
function stepRound(state, input, dt, events, rng = Math.random) {
    if (state.status !== "running") return state;
    state.elapsed += dt;
    // the ghost fights back on a random schedule
    if (!state.gripping && state.elapsed >= state.nextGripAt) {
        state.gripping = true;
        state.gripUntil = state.elapsed + fightBack.duration;
        events.push("gripStart");
    } else if (state.gripping && state.elapsed >= state.gripUntil) {
        state.gripping = false;
        state.nextGripAt = state.elapsed + randomBetween(fightBack.minInterval, fightBack.maxInterval, rng);
        events.push("gripEnd");
    }
    const thresholdMult = state.gripping ? fightBack.thresholdMultiplier : 1;
    const drainMult = state.gripping ? fightBack.drainMultiplier : 1;
    const threshold = input.threshold * thresholdMult;
    state.sucking = input.isSucking && input.rms >= threshold;
    if (state.sucking) {
        state.boost = Math.min(round.maxBoost, Math.max(1, 1 + (input.rms / threshold - 1) * round.boostSlope));
        state.progress += dt / round.fillSeconds * state.boost;
    } else {
        state.boost = 1;
        state.progress -= round.drainPerSec * drainMult * dt;
    }
    state.progress = Math.min(1, Math.max(0, state.progress));
    state.peak = Math.max(state.peak, state.progress);
    if (state.progress >= 1) {
        state.status = "won";
        events.push("won");
    } else if (state.elapsed >= round.timeLimit) {
        state.status = "lost";
        events.push("lost");
    }
    return state;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_1-qrygdr94_tp._.js.map