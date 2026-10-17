import type { Metadata } from "next";
import { IntentPageView } from "@/components/intent-page";
import { getIntentPage } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

const page = getIntentPage("appointment-booking-software")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  image: page.image.src,
  keywords: [
    "appointment booking software",
    "appointment application",
    "appointment booking app",
    "online appointment system",
    "booking software for appointments",
  ],
});

export default function AppointmentBookingSoftwarePage() {
  return (
    <IntentPageView
      page={page}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Appointment booking software", path: page.path },
      ]}
    />
  );
}
