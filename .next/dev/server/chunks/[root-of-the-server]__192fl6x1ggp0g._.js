module.exports = [
(()=>{"use strict";return[
"[project]/app/api/game/status/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/store.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/server/request.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request);
    const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cleanFingerprint"])(body?.fingerprint);
    if (!fp) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["json"])({
        error: "bad-request"
    }, 400);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStore"])();
    const day = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["campaignDay"])();
    const used = await store.get(`fp:${fp}`, day);
    const prizesUsed = await store.get("prizes", day);
    const { maxAttemptsPerDay, dailyPrizeBudget } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gameConfig"].limits;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["json"])({
        attemptsLeft: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$server$2f$request$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlimitedAttempts"])() ? maxAttemptsPerDay : Math.max(0, maxAttemptsPerDay - used),
        prizesLeftToday: Math.max(0, dailyPrizeBudget - prizesUsed)
    });
}
}),
"[project]/lib/gameConfig.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gameConfig",
    ()=>gameConfig,
    "minRoundSeconds",
    ()=>minRoundSeconds
]);
/**
 * "Free the Milkaboo Cup": every tunable number lives here.
 * Shared by the client (game loop, mic, 3D) and the server (anti-cheat), so the two never disagree.
 * Tune on real phones with `?debug` (see README-halloween.md).
 */ /**
 * Testing only: NEXT_PUBLIC_GAME_EASY=true makes the game easy to win (values after `EASY ?`).
 * NEXT_PUBLIC_ so the browser and the server's anti-cheat use the same rules. Read at build/dev start.
 */ const EASY = process.env.NEXT_PUBLIC_GAME_EASY === "true";
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
    limits: {
        /** tries per device per day (counted on the server when a round starts) */ maxAttemptsPerDay: 3,
        /** backup limit for the whole IP: shop wifi and carrier NAT share IPs, so keep it loose */ maxAttemptsPerIpPerDay: 30,
        /** prizes one email can win over the whole campaign */ prizesPerEmail: 1,
        /** prizes one device can win per day */ prizesPerDevicePerDay: 1,
        /** free cups the server will hand out per day, across everyone */ dailyPrizeBudget: 50,
        /** "day" for all the limits above is the calendar day in this time zone */ timeZone: "Asia/Colombo"
    },
    server: {
        /** a session token from /api/game/start is only good for this long (covers the email form after a win) */ tokenTtlSec: 15 * 60,
        /** the client records progress this often; the server replays it */ sampleIntervalMs: 250,
        /** extra seconds allowed past timeLimit for frame jitter and the win animation */ durationSlackSec: 3,
        /** the fastest legal progress rate is maxBoost / fillSeconds; samples may exceed it by this factor */ rateTolerance: 1.2,
        /** codes look like BOO-XXXXX and stay valid this many days */ codePrefix: "BOO",
        codeValidDays: 7
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
}),
"[project]/lib/server/request.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "campaignDay",
    ()=>campaignDay,
    "cleanEmail",
    ()=>cleanEmail,
    "cleanFingerprint",
    ()=>cleanFingerprint,
    "ipHash",
    ()=>ipHash,
    "json",
    ()=>json,
    "newPrizeCode",
    ()=>newPrizeCode,
    "normalizePrizeCode",
    ()=>normalizePrizeCode,
    "readJson",
    ()=>readJson,
    "unlimitedAttempts",
    ()=>unlimitedAttempts
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameConfig.ts [app-route] (ecmascript)");
;
;
;
function campaignDay(now = new Date()) {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gameConfig"].limits.timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(now);
}
function ipHash(request) {
    const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(`${ip}|${process.env.GAME_SECRET ?? ""}`).digest("hex").slice(0, 24);
}
function cleanFingerprint(value) {
    return typeof value === "string" && /^[a-f0-9]{16,64}$/.test(value) ? value : null;
}
function cleanEmail(value) {
    if (typeof value !== "string") return null;
    const email = value.trim().toLowerCase();
    return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}
async function readJson(request) {
    try {
        const body = await request.json();
        return body && typeof body === "object" ? body : null;
    } catch  {
        return null;
    }
}
function unlimitedAttempts() {
    return ("TURBOPACK compile-time value", "development") !== "production" && process.env.GAME_UNLIMITED_ATTEMPTS === "true";
}
// no 0/O/1/I/L: easy to read out loud at the counter
const CODE_ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
function newPrizeCode() {
    let body = "";
    for(let i = 0; i < 5; i++)body += CODE_ALPHABET[(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomInt"])(CODE_ALPHABET.length)];
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gameConfig"].server.codePrefix}-${body}`;
}
function normalizePrizeCode(value) {
    if (typeof value !== "string") return null;
    const code = value.trim().toUpperCase();
    return /^[A-Z]{2,5}-[2-9A-Z]{5}$/.test(code) ? code : null;
}
const json = (body, status = 200)=>Response.json(body, {
        status,
        headers: {
            "Cache-Control": "no-store"
        }
    });
}),
"[project]/lib/server/store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStore",
    ()=>getStore
]);
;
class MemoryStore {
    counters = new Map();
    nonces = new Set();
    prizes = new Map();
    async increment(key, day) {
        const k = `${day}:${key}`;
        const next = (this.counters.get(k) ?? 0) + 1;
        this.counters.set(k, next);
        return next;
    }
    async get(key, day) {
        return this.counters.get(`${day}:${key}`) ?? 0;
    }
    async useNonce(nonce) {
        if (this.nonces.has(nonce)) return false;
        this.nonces.add(nonce);
        return true;
    }
    async takePrize(day, budget) {
        const k = `${day}:prizes`;
        const used = this.counters.get(k) ?? 0;
        if (used >= budget) return false;
        this.counters.set(k, used + 1);
        return true;
    }
    async countPrizesForEmail(email) {
        let n = 0;
        for (const p of this.prizes.values())if (p.email === email) n++;
        return n;
    }
    async savePrize(prize) {
        this.prizes.set(prize.code, prize);
    }
    async findPrize(code) {
        return this.prizes.get(code) ?? null;
    }
    async redeemPrize(code) {
        const prize = this.prizes.get(code);
        if (!prize) return null;
        if (prize.redeemedAt === null) prize.redeemedAt = Date.now();
        return prize;
    }
}
// survives dev hot reloads; resets when the server restarts
const globalForStore = globalThis;
function getStore() {
    globalForStore.__milkabooGameStore ??= new MemoryStore();
    return globalForStore.__milkabooGameStore;
}
}),
]})(),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__192fl6x1ggp0g._.js.map