import type { Metadata } from "next";

import { PlaceholderPage } from "@/components/sections/placeholder-page";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return <PlaceholderPage slug="profile" />;
}
