import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { apps, platforms } from "@/lib/content";
import { industries } from "@/lib/industries";
import { locales } from "@/lib/i18n";
import { SITE as base } from "@/lib/meta";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/apps", "/industries", "/integrations", "/pricing", "/about", "/contact", "/start", "/learn",
    ...articles.map((a) => `/learn/${a.slug}`),
    ...apps.map((a) => `/apps/${a.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...platforms.map((p) => `/integrations/${p.slug}`),
  ];
  const built = new Date();
  const dated = Object.fromEntries(articles.map((a) => [`/learn/${a.slug}`, new Date(a.date)]));
  return paths.flatMap((p) =>
    locales.map((l) => ({
      url: `${base}/${l}${p}`,
      lastModified: dated[p] ?? built,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p.split("/").length > 2 ? 0.7 : 0.8,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${base}/${x}${p}`])) },
    })),
  );
}

export const dynamic = "force-static";
