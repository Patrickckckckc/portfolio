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
        "I grew up in Trujillo, Peru, where I spent most of my life before living in Germany for a year through my family's German roots. Experiencing different cultures taught me to see the world from multiple perspectives, but honestly, one of the biggest influences on who I am today has been the internet itself. Personal development, self-education, and the idea that consistent effort can completely change your future have shaped the way I work and approach challenges.",
        "I chose software engineering because it combines everything I value: continuous learning, problem-solving, independence, and innovation. What excites me most is turning an idea into something real. Whether it's a website, an application, or a new feature, there's something incredibly rewarding about building solutions that improve people's lives in a meaningful way.",
        "Right now, I'm focused on strengthening my skills as a developer, building projects, and learning how to create digital experiences that are both functional and enjoyable to use. I'm especially interested in the intersection of software, AI, and product design, and I'm always looking for better ways to transform ideas into products that create positive impact.",
      ],
      exploringTitle: "exploring.txt",
      exploringText:
        "Recently achieved my C1 English certification and currently exploring UI/UX design, modern web development, and AI-assisted workflows. I'm fascinated by how technology is changing the way products are built and how developers can work more efficiently than ever before.",
      afterHoursTitle: "after-hours.txt",
      afterHoursText:
        "Playing video games, watching anime, discovering new music, and occasionally going down internet rabbit holes about productivity, technology, and self-improvement.",
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
        "Crecí en Trujillo, Perú, donde pasé la mayor parte de mi vida antes de vivir un año en Alemania gracias a las raíces alemanas de mi familia. Conocer distintas culturas me enseñó a ver el mundo desde varias perspectivas, pero, sinceramente, una de las mayores influencias en quien soy hoy ha sido internet. El desarrollo personal, el aprendizaje autodidacta y la idea de que el esfuerzo constante puede cambiar por completo tu futuro han moldeado mi forma de trabajar y afrontar los retos.",
        "Elegí la ingeniería de software porque combina todo lo que valoro: aprendizaje continuo, resolución de problemas, independencia e innovación. Lo que más me entusiasma es convertir una idea en algo real. Ya sea un sitio web, una aplicación o una nueva funcionalidad, hay algo increíblemente gratificante en crear soluciones que mejoren la vida de las personas de forma significativa.",
        "Ahora mismo, me centro en fortalecer mis habilidades como desarrollador, crear proyectos y aprender a diseñar experiencias digitales que sean funcionales y agradables. Me interesa especialmente la intersección entre el software, la IA y el diseño de productos, y siempre busco mejores formas de transformar ideas en productos que generen un impacto positivo.",
      ],
      exploringTitle: "exploring.txt",
      exploringText:
        "Hace poco obtuve la certificación C1 de inglés y actualmente estoy explorando el diseño UI/UX, el desarrollo web moderno y los flujos de trabajo asistidos por IA. Me fascina cómo la tecnología está cambiando la forma de crear productos y cómo los desarrolladores pueden trabajar con más eficiencia que nunca.",
      afterHoursTitle: "after-hours.txt",
      afterHoursText:
        "Jugar videojuegos, ver anime, descubrir música nueva y, de vez en cuando, perderme en rincones de internet sobre productividad, tecnología y desarrollo personal.",
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
