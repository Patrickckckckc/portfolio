export const languages = ["en", "es"] as const;
export type Language = (typeof languages)[number];

export const DEFAULT_LANGUAGE: Language = "en";
export const LANGUAGE_COOKIE = "lang";

export function parseLanguage(value: string | undefined | null): Language {
  return languages.find((l) => l === value) ?? DEFAULT_LANGUAGE;
}

export interface Dictionary {
  nav: {
    label: string;
    github: string;
    email: string;
    resume: string;
  };
  hero: {
    greeting: string;
    headline: readonly [string, string, string, string];
    role: string;
    sectionsLabel: string;
  };
  sections: Record<
    "works" | "skills" | "profile",
    { label: string; placeholder: string }
  >;
  placeholder: { comingSoon: string; back: string };
  controls: { language: string; theme: string };
  intro: { skip: string };
  a11y: { skipToContent: string; home: string };
}

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    nav: {
      label: "Main",
      github: "GitHub",
      email: "Email",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm Patrick Wackerbauer",
      headline: ["Building", "Software", "That Solves", "Real Problems"],
      role: "Software Engineer",
      sectionsLabel: "Sections",
    },
    sections: {
      works: {
        label: "Works",
        placeholder: "Selected projects will live here.",
      },
      skills: {
        label: "Skills",
        placeholder: "Tools and technologies will live here.",
      },
      profile: {
        label: "Profile",
        placeholder: "A short profile will live here.",
      },
    },
    placeholder: { comingSoon: "Coming soon", back: "Back to home" },
    controls: { language: "Language", theme: "Switch theme" },
    intro: { skip: "Tap to skip" },
    a11y: {
      skipToContent: "Skip to content",
      home: "Patrick Wackerbauer — home",
    },
  },
  es: {
    nav: {
      label: "Principal",
      github: "GitHub",
      email: "Correo",
      resume: "Currículum",
    },
    hero: {
      greeting: "Hola, soy Patrick Wackerbauer",
      headline: ["Construyo", "Software", "Que Resuelve", "Problemas Reales"],
      role: "Ingeniero de Software",
      sectionsLabel: "Secciones",
    },
    sections: {
      works: {
        label: "Trabajos",
        placeholder: "Aquí vivirán los proyectos destacados.",
      },
      skills: {
        label: "Habilidades",
        placeholder: "Aquí vivirán las herramientas y tecnologías.",
      },
      profile: { label: "Perfil", placeholder: "Aquí vivirá un perfil breve." },
    },
    placeholder: { comingSoon: "Próximamente", back: "Volver al inicio" },
    controls: { language: "Idioma", theme: "Cambiar tema" },
    intro: { skip: "Toca para saltar" },
    a11y: {
      skipToContent: "Saltar al contenido",
      home: "Patrick Wackerbauer — inicio",
    },
  },
};
