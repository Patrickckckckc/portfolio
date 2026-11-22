import type { Metadata } from "next";
import { cookies } from "next/headers";

import {
  LANGUAGE_COOKIE,
  dictionaries,
  parseLanguage,
} from "@/i18n/dictionaries";

import { SkillsContent } from "./skills-content";
import "./skills-page.css";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = parseLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const t = dictionaries[lang];

  return {
    title: t.sections.skills.label,
    description: t.skillsPage.subtitle,
  };
}

export default function SkillsPage() {
  return <SkillsContent />;
}
