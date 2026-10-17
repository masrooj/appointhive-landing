import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalPages, type LegalSlug } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const slugs = Object.keys(legalPages) as LegalSlug[];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = legalPages[slug as LegalSlug];
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.lede,
    path: `/legal/${slug}`,
  });
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalPages[slug as LegalSlug];
  if (!page) notFound();

  return (
    <article className="legal">
      <div className="shell">
        <p className="kicker">
          <i />
          Legal
        </p>
        <h1 className="display">{page.title}</h1>
        <p>{page.lede}</p>
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="display">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
