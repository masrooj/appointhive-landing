import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteOrigin()}/sitemap.xml`,
  };
}
