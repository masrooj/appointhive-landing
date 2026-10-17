import type { Metadata } from "next";
import { IntentPageView } from "@/components/intent-page";
import { getIntentPage } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

const page = getIntentPage("barber-shop-software")!;

export const metadata: Metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  image: page.image.src,
  keywords: [
    "barber shop software",
    "barber shop appointment system",
    "barber booking app",
    "barber appointment software",
    "barbershop queue management",
  ],
});

export default function BarberShopSoftwarePage() {
  return (
    <IntentPageView
      page={page}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Barber shop software", path: page.path },
      ]}
    />
  );
}
