import type { Metadata } from "next";
import { brandDescription, defaultKeywords, type FaqItem, type IntentPage } from "@/content/seo";
import { siteOrigin } from "@/lib/links";

const SITE_NAME = "AppointHive";
const DEFAULT_TITLE = "AppointHive — booking and staff pay for barber shops and salons";
const OG_IMAGE = "/og/default.jpg";
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const origin = siteOrigin();
  const url = `${origin}${input.path === "/" ? "" : input.path}`;
  const image = input.image ?? OG_IMAGE;
  const absoluteImage = image.startsWith("http") ? image : `${origin}${image}`;

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords ?? defaultKeywords,
    alternates: { canonical: url },
    robots: input.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: absoluteImage, width: OG_WIDTH, height: OG_HEIGHT, alt: input.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [absoluteImage],
    },
  };
}

/** Public GSC token (also published as DNS TXT). Override via env if rotated. */
const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
  "52pkoc9Dx1vBt1ATjLuaw5-FGQdl4amJi6bEXZzah9A";

const BING_SITE_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim();

export function homeMetadata(): Metadata {
  return {
    metadataBase: new URL(siteOrigin()),
    title: {
      default: DEFAULT_TITLE,
      template: `%s · ${SITE_NAME}`,
    },
    description: brandDescription,
    applicationName: SITE_NAME,
    keywords: defaultKeywords,
    authors: [{ name: SITE_NAME, url: siteOrigin() }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "business software",
    alternates: { canonical: siteOrigin() },
    robots: { index: true, follow: true },
    verification: {
      google: GOOGLE_SITE_VERIFICATION,
      ...(BING_SITE_VERIFICATION
        ? { other: { "msvalidate.01": BING_SITE_VERIFICATION } }
        : {}),
    },
    openGraph: {
      title: DEFAULT_TITLE,
      description: brandDescription,
      url: siteOrigin(),
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${siteOrigin()}${OG_IMAGE}`,
          width: OG_WIDTH,
          height: OG_HEIGHT,
          alt: "A real barbershop floor with chairs — AppointHive for booking, queue, and pay",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: brandDescription,
      images: [`${siteOrigin()}${OG_IMAGE}`],
    },
  };
}

/**
 * Public profile URLs for Organization.sameAs.
 * Keep Instagram live. Uncomment (or append) directory/social URLs once each listing exists —
 * see docs/seo-offsite-playbook.md § sameAs hooks.
 */
const ORGANIZATION_SAME_AS = [
  "https://www.instagram.com/appointhive/",
  // "https://www.linkedin.com/company/appointhive/",
  // "https://www.producthunt.com/products/appointhive",
  // "https://www.capterra.com/p/REPLACE/AppointHive/",
  // "https://www.g2.com/products/appointhive/reviews",
  // "https://alternativeto.net/software/appointhive/",
];

export function organizationJsonLd() {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: origin,
    logo: `${origin}/brand/logo.png`,
    email: "hello@appointhive.com",
    sameAs: ORGANIZATION_SAME_AS,
    description: brandDescription,
  };
}

export function websiteJsonLd() {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: origin,
    description: brandDescription,
    publisher: { "@type": "Organization", name: SITE_NAME, url: origin },
    inLanguage: "en",
  };
}

export function softwareApplicationJsonLd() {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Appointment scheduling software",
    operatingSystem: "Web",
    url: origin,
    description: brandDescription,
    offers: [
      {
        "@type": "Offer",
        name: "Hosted SaaS",
        description:
          "Cloud workspace we host. Monthly or annual subscription with a 7-day trial. Contact for current pricing.",
        url: `${origin}/#ways`,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "SaaSSubscription",
      },
      {
        "@type": "Offer",
        name: "Standalone license",
        description:
          "Single-business license on infrastructure you control. Sales-led quote. Contact for license terms.",
        url: `${origin}/#ways`,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        category: "SoftwareLicense",
      },
    ],
    featureList: [
      "Online booking and website embed",
      "Live floor queue and walk-ins",
      "Multi-location salon booking",
      "Email confirmations and reminders",
      "Staff payroll and commission",
      "Reports and CSV export",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Barber shops and salons",
    },
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function webPageJsonLd(page: IntentPage) {
  const origin = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${origin}${page.path}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: origin },
    about: { "@type": "SoftwareApplication", name: SITE_NAME },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${origin}${page.image.src}`,
    },
  };
}
