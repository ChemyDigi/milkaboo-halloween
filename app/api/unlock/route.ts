import { NextResponse } from "next/server";
import { ACCESS_COOKIE, accessCookieOptions, accessToken, isValidPassword } from "@/lib/siteAccess";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const password = typeof body?.password === "string" ? body.password : "";
  const token = accessToken();

  if (!token || !isValidPassword(password)) {
    // Slow down guessing.
    await new Promise((r) => setTimeout(r, 800));
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ACCESS_COOKIE, token, accessCookieOptions);
  return response;
}
