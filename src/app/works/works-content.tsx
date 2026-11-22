"use client";

import Image from "next/image";
import { useEffect } from "react";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";

const projects = [
  { id: "its-ok", kind: "featured" },
  { id: "upcoming-1", kind: "upcoming" },
  { id: "upcoming-2", kind: "upcoming" },
  { id: "upcoming-3", kind: "upcoming" },
] as const;

function GooglePlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="work-card-platform-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.3 2.4 13.8 12 3.3 21.6c-.7-.4-1.1-1.1-1.1-2V4.4c0-.9.4-1.6 1.1-2Z"
        fill="#00D7FE"
      />
      <path d="m3.3 2.4 13 7.5-4.1 3.1L3.3 2.4Z" fill="#00F076" />
      <path
        d="m16.3 9.9 5.2 3c.9.5.9 1.7 0 2.2l-5.2 3-4.1-6.1 4.1-2.1Z"
        fill="#FFCE00"
      />
      <path d="m3.3 21.6 13-7.5-4.1-3.1-8.9 10.6Z" fill="#F43F5E" />
    </svg>
  );
}

export function WorksContent() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.sections.works.label} — ${siteConfig.name}`;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = t.worksPage.description;
  }, [t]);

  return (
    <section className="works-page" aria-labelledby="works-title">
      <h1 id="works-title" className="sr-only">
        {t.sections.works.label}
      </h1>
      <div className="works-grid">
        {projects.map((project) => {
          const isFeatured = project.kind === "featured";

          return (
            <article key={project.id} className="work-card">
              <div className="work-card-media">
                {isFeatured ? (
                  <Image
                    src="/media/its-ok-banner.png"
                    alt={t.worksPage.featuredImageAlt}
                    fill
                    priority
                    sizes="(max-width: 720px) 100vw, 50vw"
                    className="work-card-image"
                  />
                ) : (
                  <span className="work-card-placeholder" aria-hidden="true">
                    ?
                  </span>
                )}
              </div>

              <div className="work-card-content">
                {isFeatured ? (
                  <div className="work-card-meta">
                    <div className="work-card-platform">
                      <GooglePlayIcon />
                      <span>{t.worksPage.mobileApp}</span>
                    </div>
                    <span className="work-card-badge">
                      {t.worksPage.building}
                    </span>
                  </div>
                ) : (
                  <div
                    className="work-card-meta work-card-meta-empty"
                    aria-hidden="true"
                  />
                )}

                <h2 className="work-card-title">
                  {isFeatured
                    ? t.worksPage.featuredTitle
                    : t.worksPage.upcoming}
                </h2>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
