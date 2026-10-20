import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntentPageView } from "@/components/intent-page";
import { getGuidePage, guidePages } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return guidePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.image.src,
  });
}

const crumbLabel: Record<string, string> = {
  "barbershop-walk-in-queue": "Walk-in queue",
  "salon-commission-from-visits": "Commission from visits",
};

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getGuidePage(slug);
  if (!page) notFound();

  return (
    <IntentPageView
      page={page}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides/barbershop-walk-in-queue" },
        { name: crumbLabel[slug] ?? page.title, path: page.path },
      ]}
    />
  );
}