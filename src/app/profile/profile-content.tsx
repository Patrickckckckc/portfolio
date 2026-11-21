"use client";

import Image from "next/image";
import { useState } from "react";

import { useLanguage } from "@/i18n/language-provider";

export function ProfileContent() {
  const { t } = useLanguage();
  const [secondPhotoVisible, setSecondPhotoVisible] = useState(false);

  return (
    <section className="profile-page" aria-labelledby="profile-title">
      <div className="profile-grid">
        <figure className="profile-photo-stage">
          <button
            type="button"
            className={`profile-photo-button ${secondPhotoVisible ? "profile-photo-revealed" : ""}`}
            aria-label={
              secondPhotoVisible
                ? t.profile.hideSecondPhoto
                : t.profile.showSecondPhoto
            }
            aria-pressed={secondPhotoVisible}
            onClick={() => setSecondPhotoVisible((visible) => !visible)}
          >
            <span
              aria-hidden="true"
              className="profile-photo-card profile-photo-primary"
            >
              <span className="profile-photo-window">
                <Image
                  src="/media/profile-photo-germany.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 900px) 54vw, 28vw"
                  className="profile-photo-image"
                />
              </span>
            </span>
            <span
              aria-hidden="true"
              className="profile-photo-card profile-photo-secondary"
            >
              <span className="profile-photo-window">
                <Image
                  src="/media/profile-photo-home.jpg"
                  alt=""
                  fill
                  loading="eager"
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className="profile-photo-image"
                />
              </span>
            </span>
          </button>
          <figcaption className="sr-only">
            {t.profile.photoDescription}
          </figcaption>
        </figure>

        <article className="profile-copy">
          <h1 id="profile-title" className="profile-title">
            {t.profile.title}
          </h1>

          <div className="profile-biography">
            {t.profile.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="profile-notes">
            <section className="profile-note" aria-labelledby="exploring-title">
              <h2 id="exploring-title" className="profile-file-name">
                {t.profile.exploringTitle}
              </h2>
              <p>{t.profile.exploringText}</p>
            </section>
            <section
              className="profile-note"
              aria-labelledby="after-hours-title"
            >
              <h2 id="after-hours-title" className="profile-file-name">
                {t.profile.afterHoursTitle}
              </h2>
              <p>{t.profile.afterHoursText}</p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
