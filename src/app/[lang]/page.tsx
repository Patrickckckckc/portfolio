import { notFound } from "next/navigation";

import HomePage from "../page";
import { parseLanguage } from "@/i18n/dictionaries";

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (parseLanguage(lang) !== lang) notFound();

  return <HomePage />;
}
