import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact AppointHive",
  description: "Write to AppointHive about salon or barber shop booking, Hosted or Standalone. Email hello@appointhive.com.",
  path: "/contact",
  noIndex: true,
});

export default function ContactPage() {
  redirect("/#contact");
}
