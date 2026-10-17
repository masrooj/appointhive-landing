import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Write to AppointHive at hello@appointhive.com.",
};

export default function ContactPage() {
  redirect("/#contact");
}
