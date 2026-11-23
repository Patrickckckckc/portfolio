"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { sections } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";

export function Dock() {
  const { t } = useLanguage();

  return (
    <div
      data-intro
      className="pointer-events-none absolute inset-x-0 bottom-[clamp(54px,7vh,74px)] z-20 flex justify-center px-(--gutter) min-[1210px]:justify-end"
    >
      <nav
        aria-label={t.hero.sectionsLabel}
        className="pointer-events-auto grid w-full max-w-[760px] grid-cols-3 rounded-full border border-border bg-dock shadow-[0_30px_60px_-28px_rgb(10_10_10/0.35),0_2px_6px_rgb(10_10_10/0.05)] backdrop-blur-[2px]"
      >
        {sections.map(({ slug, href }, i) => (
          <Link
            key={slug}
            href={href}
            className="group relative flex min-h-[68px] flex-col items-center justify-center gap-1 px-2 py-[clamp(12px,1.5vw,20px)] transition-transform duration-500 ease-brand not-first:border-l not-first:border-border after:absolute after:inset-x-[28%] after:bottom-2.5 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-500 after:ease-brand hover:translate-x-0.5 hover:-translate-y-[3px] hover:after:scale-x-100 focus-visible:translate-x-0.5 focus-visible:-translate-y-[3px] focus-visible:after:scale-x-100 min-[600px]:min-h-16"
          >
            <span className="font-mono text-[10px] leading-none tracking-[0.14em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[clamp(15px,1.75vw,26px)] leading-[1.1] tracking-[0.04em] uppercase min-[600px]:tracking-[0.06em]">
              {t.sections[slug].label}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.25}
              className="absolute top-3 right-4 hidden size-3 -translate-x-1 translate-y-1 opacity-0 transition duration-500 ease-brand group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 min-[600px]:block"
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
