import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { contact } from "@/lib/content";
import { dir, isLocale, locales } from "@/lib/i18n";
import { BRAND, SITE } from "@/lib/meta";
import { asset } from "@/lib/asset";
import { JsonLd } from "@/components/JsonLd";
import "../globals.css";

const plex = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["200", "300", "400", "500", "600"], variable: "--font-plex", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600"], variable: "--font-inter", display: "swap", adjustFontFallback: false });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#2B3E8C",
  colorScheme: "light",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ar = locale === "ar";
  return {
    metadataBase: new URL(SITE),
    applicationName: BRAND,
    title: { default: ar ? "شريك Odoo الرسمي في الأردن والسعودية | AIODYX" : "Official Odoo Partner in Jordan & Saudi Arabia | AIODYX", template: `%s | ${BRAND}` },
    authors: [{ name: BRAND, url: SITE }],
    creator: BRAND,
    publisher: BRAND,
    category: "technology",
    formatDetection: { telephone: false, address: false, email: false },
    robots: process.env.NEXT_PUBLIC_STATIC === "1" ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: { siteName: BRAND, images: [{ url: "/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
    manifest: asset("/manifest.webmanifest"),
    icons: { icon: [{ url: asset("/icon.svg"), type: "image/svg+xml" }, { url: asset("/favicon.ico"), sizes: "48x48" }, { url: asset("/icon-192.png"), sizes: "192x192", type: "image/png" }], apple: [{ url: asset("/apple-icon.png"), sizes: "180x180" }] },
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
  };
}

function siteLd(locale: string) {
  const ar = locale === "ar";
  const phones = [...contact.jo, ...contact.sa].map((c) => c.phone.replace(/\s/g, ""));
  const office = (id: string, city: string, country: string, tel: string) => ({
    "@type": "ProfessionalService",
    "@id": `${SITE}/#office-${id}`,
    name: `${BRAND} ${city}`,
    parentOrganization: { "@id": `${SITE}/#org` },
    url: `${SITE}/${locale}/contact`,
    image: `${SITE}/og.png`,
    telephone: tel,
    address: { "@type": "PostalAddress", addressLocality: city, addressCountry: country },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "16:00" }],
    areaServed: country,
  });
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#org`,
        name: BRAND,
        url: SITE,
        logo: { "@type": "ImageObject", url: `${SITE}/logo-512.png`, width: 512, height: 512 },
        image: `${SITE}/og.png`,
        slogan: "Simplify. Automate. Grow.",
        description: ar
          ? "شريك Odoo رسمي في عمّان والرياض. نبني أنظمة ERP مفصّلة ومربوطة مع فاتورة الزكاة وJoFotara وقوى ومدد."
          : "Official Odoo partner in Amman and Riyadh building tailored ERP systems connected to ZATCA, JoFotara, Qiwa and Mudad.",
        knowsAbout: ["Odoo", "ERP", "ZATCA e-invoicing", "JoFotara", "Qiwa", "Mudad", "GOSI", "Payroll", "Accounting"],
        areaServed: [{ "@type": "Country", name: "Jordan" }, { "@type": "Country", name: "Saudi Arabia" }],
        contactPoint: phones.map((telephone) => ({ "@type": "ContactPoint", telephone, contactType: "sales", availableLanguage: ["Arabic", "English"] })),
        subOrganization: [{ "@id": `${SITE}/#office-amman` }, { "@id": `${SITE}/#office-riyadh` }],
      },
      office("amman", "Amman", "JO", phones[0]),
      office("riyadh", "Riyadh", "SA", phones[phones.length - 1]),
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: BRAND,
        inLanguage: ["ar", "en"],
        publisher: { "@id": `${SITE}/#org` },
      },
    ],
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} dir={dir(locale)} className={`${inter.variable} ${plex.variable} ${mono.variable}`}>
      <body>
        <Nav locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
        <Reveal />
        <WhatsAppButton locale={locale} />
        <JsonLd data={siteLd(locale)} />
      </body>
    </html>
  );
}
