"use client";

import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

const linkClass = cn(
  "relative inline-flex min-h-11 items-center px-[clamp(6px,.9vw,10px)] label-mono text-[clamp(11px,.95vw,13px)]",
  "transition-transform duration-500 ease-brand hover:translate-x-0.5 hover:-translate-y-0.5",
  "after:absolute after:inset-x-[clamp(6px,.9vw,10px)] after:bottom-2.5 after:h-px after:origin-left after:scale-x-0 after:bg-current",
  "after:transition-transform after:duration-500 after:ease-brand hover:after:scale-x-100 focus-visible:after:scale-x-100",
);

export function SiteHeader() {
  const { t, lang } = useLanguage();

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-(--gutter) pt-[clamp(14px,2.2vw,28px)]">
      <Link
        href="/"
        aria-label={t.a11y.home}
        data-site-logo
        data-intro="logo"
        className="-ml-1.5 block aspect-[635/395] w-[clamp(96px,9vw,132px)]"
      >
        <Logo />
      </Link>

      <nav
        aria-label={t.nav.label}
        data-intro
        className="flex gap-[clamp(4px,1.6vw,22px)]"
      >
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {t.nav.github}
        </a>
        <a href={`mailto:${siteConfig.email}`} className={linkClass}>
          {t.nav.email}
        </a>
        <a
          href={siteConfig.resume[lang]}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {t.nav.resume}
        </a>
      </nav>
    </header>
  );
}
