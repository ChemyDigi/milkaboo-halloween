"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Loader2 } from "lucide-react";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // The access cookie is set now, so reloading the same URL loads the real page.
        window.location.reload();
        return;
      }
      setError("Wrong password.");
    } catch {
      setError("Couldn't reach the server. Try again.");
    }
    setPassword("");
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0514] p-4">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Enter password"
        className="relative w-full max-w-[380px] rounded-3xl border border-white/15 bg-linear-to-b from-[#1b0d2d] to-[#0c0517] p-6 sm:p-8 text-[#f6f0ff]"
        style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(255, 124, 190, 0.35)" }}
        initial={{ scale: 0.9, y: 25, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
      >
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full border border-white/15 bg-black/40">
          <Lock className="h-5 w-5 text-[#ff7cbe]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-center text-[11px] font-bold uppercase tracking-wider text-[#bfb0d9]">
            Enter password
          </label>
          <input
            type="password"
            autoFocus
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            className="w-full rounded-xl border border-white/15 bg-black/40 px-3.5 py-3 text-sm text-white placeholder-white/30 transition-all focus:border-[#ff7cbe] focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-[#ff7cbe]"
          />

          {error && <p className="text-center text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading || !password}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff7cbe] py-3 text-sm font-bold uppercase tracking-wider text-[#1b0d2d] transition-opacity disabled:opacity-50 cursor-pointer"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Unlock"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
