"use client";

import { languages, type Language } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.controls.language}
      className="inline-flex items-center"
    >
      {languages.map((code: Language, i) => (
        <span key={code} className="inline-flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="px-0.5">
              /
            </span>
          )}
          <button
            type="button"
            lang={code}
            aria-pressed={lang === code}
            onClick={() => setLang(code)}
            className={cn(
              "relative min-h-11 min-w-9 tracking-[0.14em] uppercase transition-colors duration-500",
              lang === code
                ? "text-foreground after:absolute after:inset-x-0 after:bottom-[11px] after:h-px after:bg-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
