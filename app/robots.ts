import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/links";

export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/api"],
    },
    host: origin,
    sitemap: `${origin}/sitemap.xml`,
  };
}
