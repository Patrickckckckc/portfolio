/** Brush-stroke underline drawn under the headline, full-bleed to the left edge. */
export function Swoosh() {
  return (
    <svg
      viewBox="0 0 1000 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      data-intro="swoosh"
      className="mt-[clamp(14px,2vw,26px)] -ml-(--gutter) block h-[clamp(24px,3.2vw,42px)] w-[calc(100%+var(--gutter))] overflow-visible"
    >
      <path
        d="M0,37 C280,33 640,14 1000,2 C640,15.6 280,36.8 0,37 Z"
        className="fill-foreground"
      />
    </svg>
  );
}
