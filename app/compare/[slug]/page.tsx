import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntentPageView } from "@/components/intent-page";
import { comparePages, getComparePage } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.image.src,
    keywords: [
      "AppointHive vs Fresha",
      "Fresha alternative",
      "salon booking software comparison",
      "barber shop software comparison",
    ],
  });
}

const crumbLabel: Record<string, string> = {
  "appointhive-vs-fresha": "AppointHive vs Fresha",
};

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getComparePage(slug);
  if (!page) notFound();

  return (
    <IntentPageView
      page={page}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Compare", path: "/compare/appointhive-vs-fresha" },
        { name: crumbLabel[slug] ?? page.title, path: page.path },
      ]}
    />
  );
}
