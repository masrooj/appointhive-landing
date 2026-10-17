import type { Metadata } from "next";
import { IntentPageView } from "@/components/intent-page";
import { getIntentPage } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

const page = getIntentPage("salon-booking-software")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  image: page.image.src,
  keywords: [
    "salon booking software",
    "salon appointment system",
    "online booking for salons",
    "salon scheduling software",
    "multi-location salon booking",
  ],
});

export default function SalonBookingSoftwarePage() {
  return (
    <IntentPageView
      page={page}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Salon booking software", path: page.path },
      ]}
    />
  );
}
