import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntentPageView } from "@/components/intent-page";
import { alternativePages, getAlternativePage } from "@/content/seo";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return alternativePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAlternativePage(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.image.src,
  });
}

const crumbLabel: Record<string, string> = {
  "fresha-alternative": "Fresha alternative",
  "vagaro-alternative": "Vagaro alternative",
};

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getAlternativePage(slug);
  if (!page) notFound();

  return (
    <IntentPageView
      page={page}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Alternatives", path: "/alternatives/fresha-alternative" },
        { name: crumbLabel[slug] ?? page.title, path: page.path },
      ]}
    />
  );
}
