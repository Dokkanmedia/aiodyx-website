import type { MetadataRoute } from "next";

import { SITE as base } from "@/lib/meta";

export default function robots(): MetadataRoute.Robots {
  // the GitHub Pages copy is a preview only and must not compete with the real domain
  if (process.env.NEXT_PUBLIC_STATIC === "1") return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }], sitemap: `${base}/sitemap.xml`, host: base };
}

export const dynamic = "force-static";
