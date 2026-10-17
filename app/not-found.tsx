import type { Metadata } from "next";
import { MissingPage } from "@/components/missing-page";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That AppointHive page isn’t on the floor. Use the menu to get back home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <MissingPage />;
}
