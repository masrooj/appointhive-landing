import type { MetadataRoute } from "next";
import { allSeoPages } from "@/content/seo";
import { legalNav } from "@/content/site";
import { siteOrigin } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  const now = new Date();

  return [
    {
      url: `${origin}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...allSeoPages().map((page) => ({
      url: `${origin}${page.path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.path.startsWith("/features/")
        ? 0.75
        : page.path.startsWith("/guides/")
          ? 0.8
          : page.path.startsWith("/compare/") || page.path.startsWith("/alternatives/")
            ? 0.85
            : 0.9,
    })),
    ...legalNav.map((page) => ({
      url: `${origin}${page.href}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
