import Image from "next/image";
import Link from "next/link";
import type { IntentPage } from "@/content/seo";
import { ContactLink } from "./contact-link";
import { JsonLd } from "./json-ld";
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo";

type Props = {
  page: IntentPage;
  crumbs: { name: string; path: string }[];
};

export function IntentPageView({ page, crumbs }: Props) {
  return (
    <article className="intent">
      <JsonLd data={webPageJsonLd(page)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={faqJsonLd(page.faqs)} />

      <div className="shell">
        <nav className="intent-crumbs" aria-label="Breadcrumb">
          {crumbs.map((crumb, index) => (
            <span key={crumb.path}>
              {index > 0 ? <span aria-hidden="true"> / </span> : null}
              {index === crumbs.length - 1 ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.path}>{crumb.name}</Link>
              )}
            </span>
          ))}
        </nav>

        <p className="kicker">
          <i />
          {page.kicker}
        </p>
        <h1 className="display">{page.h1}</h1>
        <p className="intent-definition">{page.definition}</p>
        <p className="intent-lede">{page.lede}</p>
        <div className="intent-actions">
          <ContactLink />
          <Link className="btn btn-ghost" href="/#ways">
            Hosted or Standalone
          </Link>
        </div>

        <figure className="intent-hero">
          <Image src={page.image.src} alt={page.image.alt} width={1600} height={1000} priority />
        </figure>

        <ul className="intent-bullets">
          {page.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {page.comparison ? (
          <section className="intent-comparison" aria-labelledby="comparison-heading">
            <h2 className="display" id="comparison-heading">
              Side by side
            </h2>
            <div className="intent-table-wrap">
              <table className="intent-table">
                <thead>
                  <tr>
                    {page.comparison.headers.map((header) => (
                      <th key={header} scope="col">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.comparison.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) =>
                        index === 0 ? (
                          <th key={cell} scope="row">
                            {cell}
                          </th>
                        ) : (
                          <td key={`${row[0]}-${index}`}>{cell}</td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {page.sections.map((section) => (
          <section key={section.heading} className="intent-section">
            <h2 className="display">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="intent-faq" aria-labelledby="faq-heading">
          <h2 className="display" id="faq-heading">
            Questions shops ask
          </h2>
          <div className="intent-faq-list">
            {page.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {page.related.length > 0 ? (
          <section className="intent-related" aria-labelledby="related-heading">
            <h2 className="display" id="related-heading">
              Related
            </h2>
            <ul>
              {page.related.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="intent-cta">
          <h2 className="display">Tell us about the chairs.</h2>
          <p>Name the shop and whether AppointHive should live on your servers or on the cloud we run.</p>
          <ContactLink className="btn btn-lime" />
        </section>
      </div>
    </article>
  );
}
