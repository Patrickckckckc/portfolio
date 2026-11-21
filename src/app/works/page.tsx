import type { Metadata } from "next";
import Image from "next/image";

import "./works-page.css";

export const metadata: Metadata = {
  title: "Works",
  description: "Selected software projects by Patrick Wackerbauer.",
};

const projects = [
  { id: "its-ok", title: "It's Ok", kind: "featured" },
  { id: "upcoming-1", title: "UPCOMING...", kind: "upcoming" },
  { id: "upcoming-2", title: "UPCOMING...", kind: "upcoming" },
  { id: "upcoming-3", title: "UPCOMING...", kind: "upcoming" },
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

export default function WorksPage() {
  return (
    <section className="works-page" aria-labelledby="works-title">
      <h1 id="works-title" className="sr-only">
        Works
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
                    alt="It's Ok — supportive messages when you need them most."
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
                      <span>Mobile App</span>
                    </div>
                    <span className="work-card-badge">BUILDING</span>
                  </div>
                ) : (
                  <div
                    className="work-card-meta work-card-meta-empty"
                    aria-hidden="true"
                  />
                )}

                <h2 className="work-card-title">{project.title}</h2>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
