import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntentPageView } from "@/components/intent-page";
import { featurePages, getFeaturePage } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return featurePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getFeaturePage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.image.src,
  });
}

const crumbLabel: Record<string, string> = {
  "online-booking": "Online booking",
  "live-queue": "Live queue",
  "salon-payroll": "Salon payroll",
};

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getFeaturePage(slug);
  if (!page) notFound();

  return (
    <IntentPageView
      page={page}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Features", path: "/#product" },
        { name: crumbLabel[slug] ?? page.title, path: page.path },
      ]}
    />
  );
}
