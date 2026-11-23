import { NextResponse, type NextRequest } from "next/server";

import { LANGUAGE_COOKIE } from "@/i18n/dictionaries";

const ONE_YEAR = 60 * 60 * 24 * 365;

export function proxy(request: NextRequest) {
  const lang = request.nextUrl.pathname.slice(1);
  request.cookies.set(LANGUAGE_COOKIE, lang);

  const response = NextResponse.next();
  response.cookies.set(LANGUAGE_COOKIE, lang, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/en", "/es"],
};
