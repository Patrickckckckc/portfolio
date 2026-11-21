import type { Metadata } from "next";

import { ProfileContent } from "./profile-content";
import "./profile-page.css";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Patrick Wackerbauer's background, interests, and approach to software engineering.",
};

export default function ProfilePage() {
  return <ProfileContent />;
}
