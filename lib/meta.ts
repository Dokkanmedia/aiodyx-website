import type { Metadata } from "next";
import { type L, type Locale, t } from "./i18n";

export const SITE = (process.env.SITE_URL ?? "https://aiodyx.com").replace(/\/$/, "");
export const BRAND = "AIODYX";

type Opts = { image?: string; type?: "website" | "article"; published?: string; absolute?: boolean };

/*
 * Arabic titles start with an Arabic word so browsers lay the tab title out right-to-left;
 * a title that starts with "AIODYX" gets a left-to-right base and the punctuation lands in the wrong place.
 */
export function pageMeta(locale: Locale, path: string, title: L, description: L, o: Opts = {}): Metadata {
  const tt = t(title, locale);
  const full = o.absolute ? tt : `${tt} | ${BRAND}`;
  const desc = clip(t(description, locale));
  const url = `/${locale}${path}`;
  const image = o.image ?? "/og.png";
  const images = [{ url: image, ...(image === "/og.png" ? { width: 1200, height: 630 } : {}), alt: tt }];
  return {
    title: { absolute: full },
    description: desc,
    alternates: { canonical: url, languages: { ar: `/ar${path}`, en: `/en${path}`, "x-default": `/ar${path}` } },
    openGraph: {
      title: full, description: desc, url, siteName: BRAND, images,
      locale: locale === "ar" ? "ar_JO" : "en_US", alternateLocale: locale === "ar" ? ["en_US"] : ["ar_JO", "ar_SA"],
      type: o.type ?? "website",
      ...(o.published ? { publishedTime: o.published } : {}),
    },
    twitter: { card: "summary_large_image", title: full, description: desc, images: [image] },
  };
}

/* Search engines show roughly 155–160 characters; cut longer text at a word boundary. */
function clip(s: string, max = 160) {
  if (s.length <= max) return s;
  const cut = s.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[،,:;.]$/, "")}…`;
}

/* ---------- structured data (schema.org JSON-LD) ---------- */

export const abs = (p: string) => (p.startsWith("http") ? p : `${SITE}${p}`);

export function breadcrumbLd(locale: Locale, items: { name: string; path: string }[]) {
  const home = { name: locale === "ar" ? "الرئيسية" : "Home", path: "" };
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [home, ...items].map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(`/${locale}${it.path}`) })),
  };
}

export function faqLd(locale: Locale, faq: { q: L; a: L }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: t(f.q, locale), acceptedAnswer: { "@type": "Answer", text: t(f.a, locale) } })),
  };
}

export function serviceLd(locale: Locale, path: string, name: string, description: string, image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name, description, url: abs(`/${locale}${path}`),
    ...(image ? { image: abs(image) } : {}),
    serviceType: locale === "ar" ? "تطبيق نظام Odoo ERP" : "Odoo ERP implementation",
    provider: { "@id": `${SITE}/#org` },
    areaServed: [{ "@type": "Country", name: "Jordan" }, { "@type": "Country", name: "Saudi Arabia" }],
    inLanguage: locale,
  };
}
