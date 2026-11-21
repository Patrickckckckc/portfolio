"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { Logo } from "@/components/brand/logo";
import { LOGO_ASPECT } from "@/components/brand/logo-path";
import { useLanguage } from "@/i18n/language-provider";

const PENDING = "intro-pending";
const SEEN_KEY = "intro-seen";

/**
 * Opening sequence: the signature is written, flies to the header corner and
 * the page settles in. All hidden start states are CSS under html.intro-pending,
 * which the inline guard script adds only when the intro should play.
 */
export function Intro() {
  const { t } = useLanguage();
  const layerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const alive = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    alive.current = true;
    if (!root.classList.contains(PENDING)) return;

    const layer = layerRef.current;
    const sig = logoRef.current;
    const target = document.querySelector<HTMLElement>("[data-site-logo]");
    if (!layer || !sig || !target) {
      root.classList.remove(PENDING);
      return;
    }

    let timeline: gsap.core.Timeline | undefined;

    const finish = () => {
      root.classList.remove(PENDING);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    };

    {
      const clearTargets = "[data-intro], [data-word]";
      const ease = "power4.out";
      const r = target.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scale = Math.min(vw * 0.62, 440) / r.width;

      gsap.set(sig, {
        visibility: "visible",
        width: r.width,
        height: r.height,
        x: (vw - r.width * scale) / 2,
        y: (vh - r.height * scale) / 2 - vh * 0.03,
        scale,
        clipPath: "inset(-4% 100% -4% 0)",
      });
      gsap.set("[data-word]", { opacity: 0, y: 28 });
      gsap.set(
        '[data-intro]:not([data-intro="logo"]):not([data-intro="swoosh"])',
        {
          opacity: 0,
          y: 12,
        },
      );
      gsap.set('[data-intro="swoosh"]', { clipPath: "inset(0 100% 0 0)" });
      gsap.set('[data-intro="logo"]', { opacity: 0 });

      timeline = gsap
        .timeline({
          onComplete: () => {
            finish();
            gsap.set(clearTargets, { clearProps: "all" });
          },
        })
        .to(
          sig,
          {
            clipPath: "inset(-4% 0% -4% 0)",
            duration: 1.3,
            ease: "power2.inOut",
          },
          0.15,
        )
        .to(
          sig,
          {
            x: r.left,
            y: r.top,
            scale: 1,
            duration: 0.85,
            ease: "power3.inOut",
          },
          1.65,
        )
        .to(layer, { opacity: 0, duration: 0.7, ease: "none" }, 1.75)
        .set('[data-intro="logo"]', { opacity: 1 }, 2.5)
        .to(
          '[data-intro]:not([data-intro="logo"]):not([data-intro="swoosh"])',
          { opacity: 1, y: 0, duration: 0.9, ease, stagger: 0.07 },
          2.25,
        )
        .to(
          "[data-word]",
          { opacity: 1, y: 0, duration: 1.2, ease, stagger: 0.08 },
          2.2,
        )
        .to(
          '[data-intro="swoosh"]',
          { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power2.inOut" },
          2.85,
        );
    }

    const skip = () => {
      if (timeline && timeline.progress() < 1) timeline.progress(1);
      else finish();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") skip();
    };
    window.addEventListener("keydown", onKey);
    layer.addEventListener("click", skip);
    const cap = window.setTimeout(skip, 6500);

    return () => {
      alive.current = false;
      window.clearTimeout(cap);
      window.removeEventListener("keydown", onKey);
      layer.removeEventListener("click", skip);
      timeline?.kill();
      // React Strict Mode remounts at once; only release the page if we really left.
      window.setTimeout(() => {
        if (!alive.current) finish();
      }, 0);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="intro-layer fixed inset-0 z-50 cursor-pointer bg-background"
    >
      <div
        ref={logoRef}
        data-intro-source
        className="absolute top-0 left-0 origin-top-left will-change-transform"
        style={{ aspectRatio: LOGO_ASPECT }}
      >
        <Logo />
      </div>
      <span className="absolute bottom-[calc(22px+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 label-mono text-[10px] text-muted-foreground">
        {t.intro.skip}
      </span>
    </div>
  );
}
