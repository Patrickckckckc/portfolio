import { LanguageSwitch } from "@/components/controls/language-switch";
import { ThemeToggle } from "@/components/controls/theme-toggle";
import { siteConfig } from "@/config/site";

export function BaseBar() {
  return (
    <div
      data-intro
      className="absolute inset-x-0 bottom-0 z-30 flex h-[clamp(44px,6vh,56px)] items-center justify-between px-(--gutter) font-mono text-[11px] text-muted-foreground"
    >
      <LanguageSwitch />
      <div className="flex items-center gap-1 tracking-[0.14em] uppercase">
        <span>{siteConfig.location}</span>
        <ThemeToggle />
      </div>
    </div>
  );
}
