"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Check, Sparkles, Loader2 } from "lucide-react";

interface PlayerLeadModalProps {
  isOpen: boolean;
  flavorTitle?: string;
  themeColor?: string;
  glowColor?: string;
  onClose: () => void;
  onSubmitSuccess: (data: { email: string; mobile: string }) => void;
}

export default function PlayerLeadModal({
  isOpen,
  flavorTitle,
  themeColor = "#ff7cbe",
  glowColor = "rgba(255, 124, 190, 0.5)",
  onClose,
  onSubmitSuccess,
}: PlayerLeadModalProps) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedMobile = mobile.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Basic mobile number validation (at least 9 digits, common international/local numbers)
    const phoneClean = trimmedMobile.replace(/[\s\-()+]/g, "");
    if (!trimmedMobile || phoneClean.length < 8 || phoneClean.length > 15) {
      setError("Please enter a valid mobile number.");
      return;
    }

    if (!consent) {
      setError("Please confirm your consent to continue.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmedEmail,
          mobile: trimmedMobile,
          flavor: flavorTitle || "General",
          consent,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.warn("Lead API response not OK, continuing game for player convenience");
      }
    } catch (err) {
      console.error("Failed to submit player details:", err);
      // We don't block the in-store game if the network has a brief glitch
    } finally {
      setLoading(false);
      onSubmitSuccess({ email: trimmedEmail, mobile: trimmedMobile });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="group fixed top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-20 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 transition-all hover:scale-105 hover:border-white/40 hover:text-white cursor-pointer"
            aria-label="Close registration"
          >
            <X className="h-5 w-5 transition-transform duration-200 group-hover:rotate-90" />
          </button>

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Player Registration"
            className="relative w-full max-w-[420px] rounded-3xl border border-white/15 bg-linear-to-b from-[#1b0d2d] to-[#0c0517] p-6 sm:p-8 text-[#f6f0ff] shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            style={{
              boxShadow: `0 25px 60px rgba(0,0,0,0.9), 0 0 35px ${glowColor}`,
            }}
            initial={{ scale: 0.9, y: 25, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Corner Glow */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-40 -z-10"
              style={{ background: themeColor }}
            />

            {/* Header Badge */}
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <Sparkles className="h-4 w-4" style={{ color: themeColor }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#bfb0d9]">
                Player Registration
              </span>
              <Sparkles className="h-4 w-4" style={{ color: themeColor }} />
            </div>

            <h3
              className="text-center text-3xl sm:text-4xl font-black uppercase tracking-wider select-none"
              style={{
                fontFamily: "var(--font-creepster), cursive, sans-serif",
                color: themeColor,
                textShadow: `0 0 20px ${glowColor}`,
              }}
            >
              FREE THE CUP
            </h3>

            <p className="mt-1.5 text-center text-xs text-[#bfb0d9] leading-relaxed">
              Enter your details before challenging{" "}
              <span className="font-semibold text-white">
                {flavorTitle ? `the ${flavorTitle}` : "the ghost"}
              </span>{" "}
              to claim your reward!
            </p>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#bfb0d9] mb-1.5">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 h-4 w-4 text-[#bfb0d9]/60 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="player@example.com"
                    className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-[#ff7cbe] focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-[#ff7cbe]"
                  />
                </div>
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#bfb0d9] mb-1.5">
                  Mobile Number
                </label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-3.5 h-4 w-4 text-[#bfb0d9]/60 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="07X XXX XXXX"
                    className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-[#ff7cbe] focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-[#ff7cbe]"
                  />
                </div>
              </div>

              {/* Marketing Consent Checkbox */}
              <label className="flex items-start gap-3 pt-1 cursor-pointer select-none group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (error) setError(null);
                    }}
                    className="sr-only"
                  />
                  <div
                    className={`h-5 w-5 rounded-md border transition-all flex items-center justify-center ${
                      consent
                        ? "bg-[#ff7cbe] border-[#ff7cbe] shadow-[0_0_10px_rgba(255,124,190,0.6)]"
                        : "border-white/30 bg-black/40 group-hover:border-white/60"
                    }`}
                  >
                    {consent && <Check className="h-3.5 w-3.5 text-[#0d0618] stroke-[3]" />}
                  </div>
                </div>
                <span className="text-[11px] sm:text-xs leading-snug text-[#bfb0d9]">
                  I consent to receiving promotional offers, rewards, and marketing updates from Milkaboo.
                </span>
              </label>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-500/30 bg-red-950/40 px-3 py-2 text-xs text-red-200 text-center"
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 px-4 font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none hover:brightness-110 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: themeColor,
                  color: "#0e0717",
                  boxShadow: `0 0 24px ${glowColor}`,
                }}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>ENTERING CHALLENGE...</span>
                  </>
                ) : (
                  <span>START PLAYING</span>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
