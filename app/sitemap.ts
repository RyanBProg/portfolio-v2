import type { MetadataRoute } from "next";
import { sitePages, siteUrl } from "./_site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePages.map(({ href }) => ({ url: new URL(href, siteUrl).href }));
}
