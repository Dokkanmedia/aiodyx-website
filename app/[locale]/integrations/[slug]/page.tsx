import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon } from "@/components/AppIcon";
import { Cta } from "@/components/Cta";
import { OdooShot } from "@/components/OdooShot";
import { PlatformLogo } from "@/components/PlatformLogo";
import { Rich } from "@/components/Rich";
import { appsUsing, platformBySlug, platforms } from "@/lib/content";
import { type L, isLocale, locales, t, ui } from "@/lib/i18n";
import { breadcrumbLd, faqLd, pageMeta, serviceLd } from "@/lib/meta";
import { JsonLd } from "@/components/JsonLd";
import { platformDetails } from "@/lib/platform-details";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return locales.flatMap((locale) => platforms.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const p = platformBySlug(slug), d = platformDetails[slug];
  if (!isLocale(locale) || !p || !d) return {};
  return pageMeta(locale, `/integrations/${slug}`, d.seoTitle, p.summary, { image: `/odoo/${shotFor[slug] ?? "accounting"}.jpg` });
}

/* Which real Odoo screenshot best illustrates each integration. */
const shotFor: Record<string, string> = {
  zatca: "accounting", jofotara: "accounting", qiwa: "hr", mudad: "attendance-payroll", gosi: "attendance-payroll", ssc: "attendance-payroll",
  banks: "accounting", payments: "sales", shipping: "inventory-purchase", ecommerce: "ecommerce", whatsapp: "crm-sales", biometric: "attendance-payroll",
};

const c = {
  why: { ar: "لماذا *يهمك* هذا الربط", en: "Why this integration *matters*" },
  auto: { ar: "ما الذي يحدث *تلقائياً*", en: "What happens *automatically*" },
  steps: { ar: "كيف *نربطه*", en: "How we *connect it*" },
  req: { ar: "ما نحتاجه *منك*", en: "What we need *from you*" },
  apps: { ar: "التطبيقات التي *تستخدمه*", en: "Apps that *use it*" },
  faq: { ar: "أسئلة *شائعة*", en: "Frequently asked *questions*" },
  other: { ar: "منصات *أخرى* نربطها", en: "*Other* platforms we connect" },
  back: { ar: "كل المنصات", en: "All integrations" },
  shotNote: { ar: "لقطة من Odoo 19 لشركة تجريبية. الأسماء والأرقام وهمية.", en: "Odoo 19 screen from a sample company. Names and figures are fictional." },
};

export default async function PlatformPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const p = platformBySlug(slug), d = platformDetails[slug];
  if (!isLocale(locale) || !p || !d) notFound();
  const x = (v: L) => t(v, locale);
  const used = appsUsing(slug);
  const others = platforms.filter((o) => o.slug !== slug && (o.group === p.group || o.group !== "biz")).slice(0, 6);
  const arrow = locale === "ar" ? "‹" : "›";
  const ld = [
    breadcrumbLd(locale, [{ name: locale === "ar" ? "الربط والتكاملات" : "Integrations", path: "/integrations" }, { name: x(p.name), path: `/integrations/${slug}` }]),
    serviceLd(locale, `/integrations/${slug}`, x(d.seoTitle), x(d.intro), `/odoo/${shotFor[slug] ?? "accounting"}.jpg`),
    ...(d.faq?.length ? [faqLd(locale, d.faq)] : []),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <header className="hero-plain">
        <div className="wrap feature" style={{ paddingBlock: 0 }}>
          <div>
            <nav className="crumbs" style={{ color: "var(--muted)" }} aria-label={locale === "ar" ? "مسار الصفحة" : "Breadcrumb"}>
              <Link href={`/${locale}/integrations`}>{x(c.back)}</Link><span>{arrow}</span><span>{x(p.name).split(" · ")[0]}</span>
            </nav>
            <div style={{ marginBlock: "18px 6px" }}><PlatformLogo p={p} locale={locale} /></div>
            <h1 style={{ fontSize: "clamp(2rem,4.4vw,3.4rem)" }}><Rich text={x(d.headline)} /></h1>
            <p className="lead">{x(d.intro)}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href={`/${locale}/contact`}>{x(ui.cta.consult)}</Link>
              <Link className="btn btn-ghost" href={`/${locale}/pricing`}>{locale === "ar" ? "الباقات" : "Packages"}</Link>
            </div>
          </div>
          <figure style={{ margin: 0 }}>
            <OdooShot name={shotFor[slug] ?? "accounting"} alt={x(d.headline).replace(/\*/g, "")} priority />
            <figcaption className="note" style={{ marginBlockStart: 8 }}>{x(c.shotNote)}</figcaption>
          </figure>
        </div>
      </header>

      <section className="sec">
        <div className="wrap team-band" style={{ alignItems: "start" }}>
          <div>
            <div className="sec-head"><h2><Rich text={x(c.why)} /></h2></div>
            <p className="lead">{x(d.whyItMatters)}</p>
          </div>
          <div>
            <div className="sec-head"><h2><Rich text={x(c.auto)} /></h2></div>
            <ul className="dots" style={{ marginBlockStart: 0 }}>{d.automated.map((a, i) => <li key={i}>{x(a)}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="sec integ">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.steps)} /></h2></div>
          <ol className="flow-steps" style={{ gridTemplateColumns: `repeat(${p.steps.length}, 1fr)` }}>
            {p.steps.map((s, i) => <li key={i}><span className="n">{i + 1}</span><b>{x(s)}</b></li>)}
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap team-band" style={{ alignItems: "start" }}>
          <div>
            <div className="sec-head"><h2><Rich text={x(c.req)} /></h2></div>
            <ul className="dots" style={{ marginBlockStart: 0 }}>{d.requirements.map((a, i) => <li key={i}>{x(a)}</li>)}</ul>
          </div>
          {used.length > 0 && (
            <div>
              <div className="sec-head"><h2><Rich text={x(c.apps)} /></h2></div>
              <div className="ind-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
                {used.map((a) => (
                  <Link key={a.slug} href={`/${locale}/apps/${a.slug}`} className="ind-card">
                    <AppIcon icon={a.icon} /><span><b>{x(a.name)}</b><small>{x(a.short)}</small></span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.faq)} /></h2></div>
          <div className="faq-list">
            {d.faq.map((f, i) => <details key={i} open={i === 0}><summary>{x(f.q)}</summary><p>{x(f.a)}</p></details>)}
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.other)} /></h2></div>
          <div className="logo-wall">
            {others.map((o) => (
              <Link key={o.slug} href={`/${locale}/integrations/${o.slug}`} title={x(o.name)}>
                {o.logos?.[0] ? <img src={asset(`/platforms/${o.logos[0]}`)} alt={x(o.name)} loading="lazy" /> : <b>{x(o.name).split(" · ")[0]}</b>}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
