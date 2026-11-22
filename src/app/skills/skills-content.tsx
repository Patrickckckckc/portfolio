"use client";

import { useEffect } from "react";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/language-provider";

const coreCategories = ["frontend", "backend", "mobile"] as const;

function SkillList({ skills }: { skills: readonly string[] }) {
  return (
    <ul className="skills-list">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

export function SkillsContent() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = `${t.sections.skills.label} — ${siteConfig.name}`;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (description) description.content = t.skillsPage.subtitle;
  }, [t]);

  return (
    <section className="skills-page" aria-labelledby="skills-title">
      <header className="skills-hero">
        <h1 id="skills-title" className="skills-title">
          {t.sections.skills.label}
        </h1>
        <p className="skills-subtitle">{t.skillsPage.subtitle}</p>
      </header>

      <div className="skills-content">
        <section className="skills-section" aria-labelledby="core-title">
          <div className="skills-section-heading">
            <span className="skills-section-index" aria-hidden="true">
              01
            </span>
            <h2 id="core-title">{t.skillsPage.coreTechnologies}</h2>
          </div>

          <div className="skills-categories">
            {coreCategories.map((category) => (
              <div className="skills-category" key={category}>
                <h3>{t.skillsPage.categories[category]}</h3>
                <SkillList skills={t.skillsPage.technologies[category]} />
              </div>
            ))}
          </div>
        </section>

        <section className="skills-section" aria-labelledby="additional-title">
          <div className="skills-section-heading">
            <span className="skills-section-index" aria-hidden="true">
              02
            </span>
            <h2 id="additional-title">
              {t.skillsPage.additionalKnowledgeTitle}
            </h2>
          </div>
          <SkillList skills={t.skillsPage.additionalKnowledge} />
        </section>

        <section className="skills-section" aria-labelledby="languages-title">
          <div className="skills-section-heading">
            <span className="skills-section-index" aria-hidden="true">
              03
            </span>
            <h2 id="languages-title">{t.skillsPage.languagesTitle}</h2>
          </div>
          <SkillList skills={t.skillsPage.languages} />
        </section>
      </div>
    </section>
  );
}
