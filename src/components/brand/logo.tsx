import { LOGO_PATH, LOGO_VIEWBOX } from "@/components/brand/logo-path";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

/** The Patrick signature, inlined so it follows the text colour in light and dark mode. */
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={cn("block h-full w-full", className)}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d={LOGO_PATH} fillRule="evenodd" />
    </svg>
  );
}
