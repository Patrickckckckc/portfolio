import type { Metadata } from "next";
import { cookies } from "next/headers";

import {
  LANGUAGE_COOKIE,
  dictionaries,
  parseLanguage,
} from "@/i18n/dictionaries";

import { WorksContent } from "./works-content";
import "./works-page.css";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = parseLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const t = dictionaries[lang];

  return {
    title: t.sections.works.label,
    description: t.worksPage.description,
  };
}

export default function WorksPage() {
  return <WorksContent />;
}
