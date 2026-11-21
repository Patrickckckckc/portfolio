import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import { cookies } from "next/headers";
import type { ReactNode } from "react";

import { BaseBar } from "@/components/layout/base-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig, siteUrl } from "@/config/site";
import {
  dictionaries,
  LANGUAGE_COOKIE,
  parseLanguage,
} from "@/i18n/dictionaries";
import { LanguageProvider } from "@/i18n/language-provider";

import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Patrick Wackerbauer is a software engineer building software that solves real problems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/*
 * Runs before first paint. The opening sequence plays only on the home page,
 * once per session, with motion allowed. Otherwise nothing is hidden.
 * The timeout is a safety net in case the animation code never loads.
 */
const introGuard = `(function(){try{var d=document.documentElement;d.classList.add("js");if(location.pathname!=="/"||matchMedia("(prefers-reduced-motion: reduce)").matches||sessionStorage.getItem("intro-seen"))return;d.classList.add("intro-pending");setTimeout(function(){d.classList.remove("intro-pending")},6500)}catch(e){}})()`;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const lang = parseLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const t = dictionaries[lang];

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${interTight.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introGuard }} />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider initialLang={lang}>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
            >
              {t.a11y.skipToContent}
            </a>
            <div className="relative">
              <SiteHeader />
              <main id="main">{children}</main>
              <BaseBar />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
