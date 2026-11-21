export const siteConfig = {
  name: "Patrick Wackerbauer",
  role: "Software Engineering",
  location: "Trujillo, Peru",
  email: "josepatrickwackerbauer@gmail.com",
  github: "https://github.com/Patrickckckckc",
  resume: {
    en: "/resume-en.pdf",
    es: "/resume-es.pdf",
  },
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export type SectionSlug = "works" | "skills" | "profile";

export const sections: readonly { slug: SectionSlug; href: string }[] = [
  { slug: "works", href: "/works" },
  { slug: "skills", href: "/skills" },
  { slug: "profile", href: "/profile" },
];
