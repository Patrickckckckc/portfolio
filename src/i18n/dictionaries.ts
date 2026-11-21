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
  profile: {
    title: string;
    paragraphs: readonly [string, string, string];
    exploringTitle: string;
    exploringText: string;
    afterHoursTitle: string;
    afterHoursText: string;
    showSecondPhoto: string;
    hideSecondPhoto: string;
    photoDescription: string;
  };
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
    profile: {
      title: "About Me",
      paragraphs: [
        "I grew up in Trujillo, Peru, and spent a year living in Germany through my family's German roots. Experiencing different cultures taught me to see things from different perspectives, but one of the biggest influences on who I am today has been the internet itself. Personal development, self-education, and the belief that consistent effort can change your future have shaped the way I approach life and work.",
        "What excites me most about software engineering is turning ideas into reality. I enjoy building things that solve real problems and create a positive impact, no matter how big or small.",
        "Today, I'm focused on growing as a developer, exploring the intersection of software, AI, and design, and continuously improving my ability to turn ideas into meaningful products.",
      ],
      exploringTitle: "skill-tree",
      exploringText:
        "Recently achieved my C1 English certification. Currently exploring UI/UX design, modern web development, and AI-assisted workflows.",
      afterHoursTitle: "side-quests",
      afterHoursText:
        "Playing video games, watching anime, discovering new music, and occasionally diving into productivity and self-improvement rabbit holes.",
      showSecondPhoto: "Show a second photo of Patrick",
      hideSecondPhoto: "Hide the second photo",
      photoDescription:
        "Two personal portraits of Patrick. Hover, focus, or activate to reveal the second photo.",
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
    profile: {
      title: "Sobre mí",
      paragraphs: [
        "Crecí en Trujillo, Perú, y viví un año en Alemania gracias a las raíces alemanas de mi familia. Conocer distintas culturas me enseñó a ver las cosas desde diferentes perspectivas, pero una de las mayores influencias en quien soy hoy ha sido internet. El desarrollo personal, el aprendizaje autodidacta y la convicción de que el esfuerzo constante puede cambiar tu futuro han moldeado mi forma de afrontar la vida y el trabajo.",
        "Lo que más me entusiasma de la ingeniería de software es convertir ideas en realidad. Disfruto creando cosas que resuelven problemas reales y generan un impacto positivo, sin importar su tamaño.",
        "Hoy me enfoco en crecer como desarrollador, explorar la intersección entre el software, la IA y el diseño, y mejorar continuamente mi capacidad para convertir ideas en productos significativos.",
      ],
      exploringTitle: "skill-tree",
      exploringText:
        "Hace poco obtuve la certificación C1 de inglés. Actualmente exploro el diseño UI/UX, el desarrollo web moderno y los flujos de trabajo asistidos por IA.",
      afterHoursTitle: "side-quests",
      afterHoursText:
        "Jugar videojuegos, ver anime, descubrir música nueva y, de vez en cuando, perderme en búsquedas sobre productividad y desarrollo personal.",
      showSecondPhoto: "Mostrar una segunda foto de Patrick",
      hideSecondPhoto: "Ocultar la segunda foto",
      photoDescription:
        "Dos retratos personales de Patrick. Pasa el cursor, enfoca o activa para mostrar la segunda foto.",
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
