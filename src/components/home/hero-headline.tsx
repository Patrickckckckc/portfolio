"use client";

import { useLanguage } from "@/i18n/language-provider";

const base = "will-change-[transform,opacity]";

/**
 * 4 lines on phones, 3 on tablets, 2 on desktop. The first two words join up from
 * 600px, the last two from 1024px, and the line break only exists on desktop.
 */
export function HeroHeadline() {
  const { t } = useLanguage();
  const [a, b, c, d] = t.hero.headline;

  return (
    <h1
      aria-label={t.hero.headline.join(" ")}
      className="text-[length:var(--h1)] leading-[.98] font-light tracking-[-0.045em]"
    >
      <span
        data-word
        aria-hidden="true"
        className={`${base} block min-[600px]:inline-block`}
      >
        {a}
      </span>{" "}
      <span
        data-word
        aria-hidden="true"
        className={`${base} block min-[600px]:inline-block`}
      >
        {b}
      </span>
      <br className="hidden min-[1024px]:inline" />{" "}
      <span
        data-word
        aria-hidden="true"
        className={`${base} block min-[1024px]:inline-block`}
      >
        {c}
      </span>{" "}
      <span
        data-word
        aria-hidden="true"
        className={`${base} block min-[1024px]:inline-block`}
      >
        {d}
      </span>
    </h1>
  );
}
