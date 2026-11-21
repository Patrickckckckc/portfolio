"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { LeafDot } from "@/components/home/leaf-dot";
import { buttonVariants } from "@/components/ui/button";
import { sections, type SectionSlug } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

/** Minimal placeholder shared by Works, Skills and Profile until their content exists. */
export function PlaceholderPage({ slug }: { slug: SectionSlug }) {
  const { t } = useLanguage();
  const index = sections.findIndex((s) => s.slug === slug) + 1;

  return (
    <section className="flex min-h-[max(100svh,640px)] flex-col justify-center px-(--gutter) pt-28 pb-24">
      <p className="mb-[clamp(14px,2.2vw,28px)] flex items-center gap-2.5 label-mono text-muted-foreground">
        <LeafDot />
        <span>{String(index).padStart(2, "0")}</span>
      </p>
      <h1 className="text-[clamp(48px,11vw,168px)] leading-[.98] font-light tracking-[-0.045em]">
        {t.sections[slug].label}
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted-foreground">
        {t.sections[slug].placeholder}{" "}
        <span className="ml-1 align-middle label-mono">
          {t.placeholder.comingSoon}
        </span>
      </p>
      <div className="mt-10">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 gap-2 rounded-full px-5 label-mono transition-transform duration-500 ease-brand hover:translate-x-0.5 hover:-translate-y-0.5",
          )}
        >
          <ArrowLeft aria-hidden="true" strokeWidth={1.5} />
          {t.placeholder.back}
        </Link>
      </div>
    </section>
  );
}
