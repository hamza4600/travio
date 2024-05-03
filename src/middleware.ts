import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { i18n } from "@/language";
import { updateSession } from "./utils/supabase/middleware";
import { createClient } from "./utils/supabase/server";

const supportedLanguages = i18n.languages.map((l) => l.id);

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages =
    new Negotiator({ headers: negotiatorHeaders }).languages() ?? [];

  // @ts-ignore locales are readonly
  const locales: string[] = supportedLanguages;
  return matchLocale(languages, locales, i18n.base);
}

export async function middleware(request: NextRequest) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const locale = getLocale(request);

  const isLoggedIn = !!data.user;

  if (pathname === "/dashboard" && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (pathname === `/${locale}/signup` && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (pathname === `/${locale}/login` && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  if (
    [
      "/manifest.json",
      "/favicon.ico",
      // '/pages'
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = supportedLanguages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
  return await updateSession(request);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next|studio|.*\\..*).*)", "/"],
};
