/** Every player-facing line of the game in one place, so brand and translation edits never touch components. */
export const BRAND = "Milkaboo";

export const copy = {
  title: "Free the Rose Cup",
  tagline: "A ghost has wrapped itself around your bubble tea. Sip to peel it off before time runs out and free the cup!",
  start: "Start Game",
  hygiene: "Hold your device close to your mouth and sip into the microphone to play.",

  permission: {
    title: "Let the ghost hear you",
    body: "We use your microphone to detect how hard you're sipping. Nothing is recorded or sent anywhere.",
    allow: "Allow microphone",
    asking: "Waiting for your browser…",
    denied: {
      title: "The mic is blocked",
      body: "Microphone access is required to play. Turn it back on, then reload this page:",
      ios: "iPhone/iPad Safari: tap ᴀA in the address bar → Website Settings → Microphone → Allow.",
      android: "Android Chrome: tap the lock (or ⋮ icon) next to the address → Permissions → Microphone → Allow.",
      desktop: "On a computer: click the icon left of the address bar and allow the microphone.",
    },
    insecure: {
      title: "This page needs a secure link",
      body: "Browsers only share the mic with https:// pages. Open the game from its https address.",
    },
    unsupported: {
      title: "This browser can't hear you",
      body: "Try the latest Safari on iPhone or Chrome on Android.",
    },
    noDevice: {
      title: "No microphone found",
      body: "Plug one in, or try on your phone.",
    },
    error: {
      title: "The ghost jammed the mic",
      body: "Something went wrong opening your microphone. Close other apps that use it and try again.",
    },
    retry: "Try again",
    reload: "Reload page",
  },

  calibrating: {
    title: "Shhh… the ghost is listening",
    body: "Stay quiet for a moment",
    go: "Sip!",
  },

  hud: {
    freed: "Cup freed",
    status: {
      idle: "Sip now!",
      sucking: "Keep sipping!",
      gripping: "It's holding on! Sip harder!",
      draining: "Don't stop, it's wrapping back!",
      almost: "Almost! Just the logo left!",
    },
    micLabel: "Mic level",
  },

  win: {
    title: "You freed the cup!",
    body: "The ghost was vanquished and the Milkaboo cup is saved!",
    playAgain: "Play Again",
  },

  lose: {
    title: "The ghost won this time",
    freed: (pct: number) => `You freed ${pct}% of the cup`,
    tryAgain: "Try Again",
    taunt: ["Boo-hoo-hoo!", "Is that all you've got?", "This tea is mine!"],
  },

  mute: "Mute sound",
  unmute: "Unmute sound",
} as const;
