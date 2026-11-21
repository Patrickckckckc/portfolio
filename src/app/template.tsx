import type { ReactNode } from "react";

/** Re-mounts on every navigation, so each page gets the same quick fade-up. */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-in animate-page-in">{children}</div>;
}
