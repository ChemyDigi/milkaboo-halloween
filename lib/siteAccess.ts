import { createHmac, timingSafeEqual } from "node:crypto";

export const ACCESS_COOKIE = "mkb_access";
// Browsers cap cookie lifetime at 400 days; the proxy re-sets it on every visit so an unlocked device stays unlocked.
export const ACCESS_MAX_AGE = 60 * 60 * 24 * 400;

/** The cookie holds an HMAC of the password, never the password itself. Changing SITE_PASSWORD locks out every device. */
export function accessToken(): string | null {
  const password = process.env.SITE_PASSWORD;
  if (!password) return null;
  return createHmac("sha256", password).update("milkaboo-site-access").digest("hex");
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

export function isValidToken(value: string | undefined) {
  const token = accessToken();
  return !!token && !!value && safeEqual(value, token);
}

export function isValidPassword(value: string) {
  const password = process.env.SITE_PASSWORD;
  return !!password && safeEqual(value, password);
}

export const accessCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: ACCESS_MAX_AGE,
};
