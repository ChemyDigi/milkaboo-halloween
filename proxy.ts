import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, accessCookieOptions, isValidToken } from "@/lib/siteAccess";

/** Locks the whole site to devices that have entered SITE_PASSWORD once. */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookie = request.cookies.get(ACCESS_COOKIE)?.value;

  if (isValidToken(cookie)) {
    // Slide the expiry forward so a device that keeps visiting never gets asked again.
    const response = NextResponse.next();
    response.cookies.set(ACCESS_COOKIE, cookie!, accessCookieOptions);
    return response;
  }

  if (pathname === "/unlock" || pathname === "/api/unlock") return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Keep the URL the visitor typed; just show the password popup in place of the page.
  return NextResponse.rewrite(new URL("/unlock", request.url));
}

export const config = {
  matcher: [
    // Everything except Next.js build assets and public files (anything with a file extension).
    "/((?!_next/static|_next/image|.*\\.[\\w]+$).*)",
  ],
};
