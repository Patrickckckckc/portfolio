"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();

  // Both icons are always rendered and swapped with CSS, so server and client markup match.
  return (
    <Button
      variant="ghost"
      size="icon-lg"
      aria-label={t.controls.theme}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="size-11 rounded-full text-muted-foreground hover:bg-transparent hover:text-foreground dark:hover:bg-transparent"
    >
      <Sun className="size-4 dark:hidden" strokeWidth={1.5} />
      <Moon className="hidden size-4 dark:block" strokeWidth={1.5} />
    </Button>
  );
}
