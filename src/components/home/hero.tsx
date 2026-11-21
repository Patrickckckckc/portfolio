"use client";

import { BackgroundVideo } from "@/components/home/background-video";
import { Dock } from "@/components/home/dock";
import { HeroHeadline } from "@/components/home/hero-headline";
import { LeafDot } from "@/components/home/leaf-dot";
import { Swoosh } from "@/components/home/swoosh";
import { useLanguage } from "@/i18n/language-provider";

const eyebrow =
  "label-mono flex items-center gap-2.5 text-[clamp(11px,1vw,13px)]";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate flex min-h-[max(100svh,640px)] flex-col overflow-clip">
      <BackgroundVideo />
      <div aria-hidden="true" className="hero-veil absolute inset-0 -z-10" />

      <div className="flex flex-1 flex-col justify-center px-(--gutter) pt-28 pb-[clamp(100px,16vh,170px)]">
        <p data-intro className={`${eyebrow} mb-[clamp(14px,2.2vw,28px)]`}>
          <LeafDot />
          <span>{t.hero.greeting}</span>
        </p>
        <HeroHeadline />
        <Swoosh />
        <p data-intro className={`${eyebrow} mt-[clamp(8px,1.2vw,14px)]`}>
          <LeafDot />
          <span>{t.hero.role}</span>
        </p>
      </div>

      <Dock />
    </section>
  );
}
