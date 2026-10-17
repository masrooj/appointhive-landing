import type { MetadataRoute } from "next";
import { legalNav } from "@/content/site";
import { siteOrigin } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  const paths = ["", "/contact", ...legalNav.map((item) => item.href)];
  return paths.map((path) => ({
    url: `${origin}${path || "/"}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}
