import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon, IndustryIcon } from "@/components/AppIcon";
import { Cta } from "@/components/Cta";
import { OdooShot } from "@/components/OdooShot";
import { Rich } from "@/components/Rich";
import { appBySlug, platformBySlug } from "@/lib/content";
import { industries, industryBySlug } from "@/lib/industries";
import { isLocale, locales, t, ui } from "@/lib/i18n";
import { breadcrumbLd, pageMeta, serviceLd } from "@/lib/meta";
import { JsonLd } from "@/components/JsonLd";
import { PlatformLogo } from "@/components/PlatformLogo";

export function generateStaticParams() {
  return locales.flatMap((locale) => industries.map((i) => ({ locale, slug: i.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const i = industryBySlug(slug);
  if (!isLocale(locale) || !i) return {};
  const title = { ar: `نظام Odoo لقطاع ${i.name.ar}`, en: `Odoo ERP for ${i.name.en}` };
  return pageMeta(locale, `/industries/${slug}`, title, i.intro, { image: `/stock/ind-${slug}.jpg` });
}

const realShot: Record<string, string> = { retail: "point-of-sale", distribution: "inventory-purchase", manufacturing: "manufacturing", contracting: "projects", services: "projects", healthcare: "business-intelligence" };

const c = {
  ba: { ar: "قبل *وبعد*", en: "Before *and after*" },
  apps: { ar: "التطبيقات التي *نبنيها* لهذا القطاع", en: "The apps we *build* for this sector" },
  plats: { ar: "المنصات المربوطة", en: "Connected platforms" },
  note: { ar: "ونفصّلها على طريقتك", en: "And we tailor them to you" },
};

export default async function IndustryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const ind = industryBySlug(slug);
  if (!isLocale(locale) || !ind) notFound();
  const x = (v: { ar: string; en: string }) => t(v, locale);
  const arrow = locale === "ar" ? "←" : "→";
  const ld = [
    breadcrumbLd(locale, [{ name: locale === "ar" ? "القطاعات" : "Industries", path: "/industries" }, { name: x(ind.name), path: `/industries/${ind.slug}` }]),
    serviceLd(locale, `/industries/${ind.slug}`, locale === "ar" ? `نظام Odoo لقطاع ${x(ind.name)}` : `Odoo ERP for ${x(ind.name)}`, x(ind.intro), `/stock/ind-${ind.slug}.jpg`),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <header className="hero-light">
        <div className="wrap feature" style={{ paddingBlock: 0 }}>
          <div>
            <IndustryIcon icon={ind.icon} size={64} />
            <p className="eyebrow" style={{ marginBlockStart: 14 }}>{x(ind.name)}</p>
            <h1 style={{ marginBlockStart: 10, fontSize: "clamp(2rem,4.4vw,3.4rem)" }}>{x(ind.headline)}</h1>
            <p className="lead">{x(ind.intro)}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href={`/${locale}/contact`}>{x(ui.cta.consult)}</Link>
            </div>
          </div>
          <div className="hero-photo"><Image src={`/stock/ind-${ind.slug}.jpg`} alt="" fill priority sizes="(max-width: 960px) 100vw, 55vw" style={{ objectFit: "cover" }} /></div>
        </div>
      </header>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.ba)} /></h2></div>
          <div className="feature" style={{ paddingBlock: 0, alignItems: "start" }}>
          <div className="ba">
            {ind.pains.map((p, i) => (
              <div key={i} className="ba-row"><s>{x(p.before)}</s><span>{arrow}</span><b>{x(p.after)}</b></div>
            ))}
          </div>
          <div className="feature-media"><OdooShot name={realShot[ind.slug] ?? "sales"} alt={x(ind.headline)} /></div>
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.apps)} /></h2><p className="lead">{x(c.note)}</p></div>
          <div className="ind-grid">
            {ind.apps.map((s) => {
              const a = appBySlug(s)!;
              return (
                <Link key={s} href={`/${locale}/apps/${s}`} className="ind-card">
                  <AppIcon icon={a.icon} />
                  <span><b>{x(a.name)}</b><small>{x(a.short)}</small></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2>{x(c.plats)}</h2></div>
          <div className="plat-links" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {ind.platforms.map((s) => {
              const p = platformBySlug(s)!;
              return (
                <Link key={s} className="plat-link" href={`/${locale}/integrations/${s}`}>
                  <PlatformLogo p={p} locale={locale} size="sm" />
                  <span><b>{x(p.name)}</b><small>{x(p.owner)}</small></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
