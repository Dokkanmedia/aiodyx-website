import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon } from "@/components/AppIcon";
import { Cta } from "@/components/Cta";
import { OdooShot, odooShots } from "@/components/OdooShot";
import { Mark } from "@/components/Doodles";
import { Rich } from "@/components/Rich";
import { appDetails } from "@/lib/app-details";
import { appBySlug, apps, platformBySlug } from "@/lib/content";
import { type L, isLocale, locales, t, ui } from "@/lib/i18n";
import { breadcrumbLd, faqLd, pageMeta, serviceLd } from "@/lib/meta";
import { JsonLd } from "@/components/JsonLd";
import { PlatformLogo } from "@/components/PlatformLogo";

export function generateStaticParams() {
  return locales.flatMap((locale) => apps.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const a = appBySlug(slug);
  if (!isLocale(locale) || !a) return {};
  const title = { ar: `${a.name.ar} في Odoo: ${a.short.ar}`, en: `Odoo ${a.name.en}: ${a.short.en}` };
  return pageMeta(locale, `/apps/${slug}`, title, a.intro, { image: odooShots.has(slug) ? `/odoo/${slug}.jpg` : `/stock/${slug}.jpg` });
}

const c = {
  overview: { ar: "نظرة عامة", en: "Overview" },
  gains: { ar: "ماذا تستفيد", en: "What you gain" },
  how: { ar: "كيف يعمل", en: "How it works" },
  features: { ar: "الميزات", en: "Features" },
  who: { ar: "لمن", en: "Who it's for" },
  faq: { ar: "أسئلة شائعة", en: "FAQ" },
  gainsH: { ar: "ماذا تستفيد فعلاً من", en: "What you actually gain from" },
  gainsNote: { ar: "تقديرات عامة لما تتيحه الأتمتة، وليست نتائج مشاريع محددة", en: "General estimates of what automation allows, not specific project results" },
  before: { ar: "قبل", en: "Before" },
  after: { ar: "بعد", en: "After" },
  howH: { ar: "من البداية إلى النهاية، *خطوة بخطوة*", en: "End to end, *step by step*" },
  featH: { ar: "كل *التفاصيل*", en: "Every *detail*" },
  whoH: { ar: "كل شخص في شركتك *يستفيد*", en: "Everyone in your company *benefits*" },
  cmpH: { ar: "الفرق بالأرقام والتفاصيل", en: "The difference, in detail" },
  cmpA: { ar: "الطريقة الحالية", en: "The way it's done today" },
  cmpB: { ar: "مع AIODYX", en: "With AIODYX" },
  integH: { ar: "مربوط مع", en: "Connected to" },
  noPlat: { ar: "يعمل مع باقي تطبيقات نظامك ويتشارك معها البيانات نفسها.", en: "Works with the rest of your system and shares the same data." },
  included: { ar: "كل ما يتضمنه", en: "Everything included" },
  more: { ar: "حاجة واحدة، *تطبيق واحد*", en: "One need, *one app*" },
  moreLead: { ar: "كلها تتشارك نفس البيانات، فلا تُدخل المعلومة مرتين.", en: "All sharing the same data, so nothing is entered twice." },
  free: { ar: "مجاناً، 30 دقيقة", en: "Free, 30 minutes" },
  faqH: { ar: "أسئلة *شائعة*", en: "Common *questions*" },
};

export default async function AppPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const a = appBySlug(slug);
  const d = appDetails[slug];
  if (!isLocale(locale) || !a || !d) notFound();
  const x = (v: L) => t(v, locale);
  const ar = locale === "ar";
  const related = [...apps.filter((r) => r.slug !== a.slug && r.cat === a.cat), ...apps.filter((r) => r.slug !== a.slug && r.cat !== a.cat)].slice(0, 8);
  const hasShot = odooShots.has(a.slug);
  const ld = [
    breadcrumbLd(locale, [{ name: ar ? "التطبيقات" : "Apps", path: "/apps" }, { name: x(a.name), path: `/apps/${a.slug}` }]),
    serviceLd(locale, `/apps/${a.slug}`, ar ? `تطبيق ${x(a.name)} في Odoo` : `Odoo ${x(a.name)} implementation`, x(a.intro), hasShot ? `/odoo/${a.slug}.jpg` : undefined),
    ...(d?.faq?.length ? [faqLd(locale, d.faq)] : []),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <div className="subnav">
        <div className="wrap">
          <b><AppIcon icon={a.icon} />{x(a.name)}</b>
          <a href="#overview">{x(c.overview)}</a>
          <a href="#gains">{x(c.gains)}</a>
          <a href="#how">{x(c.how)}</a>
          <a href="#features">{x(c.features)}</a>
          <a href="#who">{x(c.who)}</a>
          <a href="#faq">{x(c.faq)}</a>
          <span className="sp" />
          <Link className="btn btn-primary btn-sm" href={`/${locale}/contact`}>{x(ui.cta.quoteApp)}</Link>
        </div>
      </div>

      {/* Hero */}
      <header className="hero-light app-hero" id="overview">
        <div className="wrap">
          <AppIcon icon={a.icon} />
          <h1>{x(a.headline)}</h1>
          <p className="lead">{x(a.intro)}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={`/${locale}/contact`}>{x(ui.cta.consult)}</Link>
            <Link className="btn btn-ghost" href={`/${locale}/start`}>{x(ui.nav.start)}</Link>
          </div>
          {a.platforms.length > 0 && (
            <div className="badge-row">
              {a.platforms.map((s) => {
                const p = platformBySlug(s)!;
                return <Link key={s} className={`chip ${p.group !== "biz" ? "gov" : ""}`} href={`/${locale}/integrations/${s}`}>{x(p.name).split(" · ")[0]}</Link>;
              })}
            </div>
          )}
          <div className="app-shot">
            {hasShot ? <OdooShot name={a.slug} alt={x(a.headline)} priority />
              : <div className="hero-photo"><Image src={`/stock/${a.slug}.jpg`} alt="" fill priority sizes="(max-width: 1000px) 100vw, 1000px" style={{ objectFit: "cover" }} /></div>}
          </div>
        </div>
      </header>

      {/* What you gain */}
      <section className="sec" id="gains">
        <div className="wrap">
          <div className="sec-head"><h2>{x(c.gainsH)} <Mark>{x(a.name)}</Mark>{ar ? "؟" : "?"}</h2></div>
          <div className="benefit-list">
            {d.benefits.map((b, i) => (
              <div key={i}><span className="benefit-ic" aria-hidden="true">✓</span><b>{x(b.label)}</b><p>{x(b.text)}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Story with photo */}
      <section className="sec-tight">
        <div className={`wrap ${hasShot ? "story" : "story story-solo"}`}>
          {hasShot && (
            <div className="story-photo">
              <Image src={`/stock/${a.slug}.jpg`} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          )}
          <div className="story-text">
            <h2>{x(d.story.title)}</h2>
            <div className="story-ba">
              <div><span className="tag-before">{x(c.before)}</span><p>{x(d.story.before)}</p></div>
              <div><span className="tag-after">{x(c.after)}</span><p>{x(d.story.after)}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sec integ" id="how">
        <div className="wrap">
          <div className="sec-head">
            <h2><Rich text={x(c.howH)} /></h2>
          </div>
          <ol className="flow-steps">
            {d.workflow.map((s, i) => (
              <li key={i}><span className="n">{i + 1}</span><b>{x(s.title)}</b><p>{x(s.text)}</p></li>
            ))}
          </ol>
        </div>
      </section>

      {/* Detailed features */}
      <section className="sec" id="features">
        <div className="wrap">
          <div className="sec-head">
            <h2><Rich text={x(c.featH)} /></h2>
          </div>
          <div className="text-cols">
            {d.sections.map((s, i) => (
              <div key={i}>
                <h3>{x(s.title)}</h3>
                <p>{x(s.text)}</p>
                <ul>{s.points.map((p, k) => <li key={k}>{x(p)}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who benefits */}
      <section className="sec-tight" id="who">
        <div className="wrap">
          <div className="sec-head">
            <h2><Rich text={x(c.whoH)} /></h2>
          </div>
          <div className="role-list">
            {d.roles.map((r, i) => <div key={i}><b>{x(r.role)}</b><p>{x(r.gain)}</p></div>)}
          </div>
        </div>
      </section>

      {/* Compare + integrations + included */}
      <section className="sec-tight">
        <div className="wrap split">
          <div className="panel">
            <h3>{x(c.cmpH)}</h3>
            <div className="table-scroll" style={{ border: 0 }}>
              <table className="compare">
                <thead><tr><th scope="col">{x(c.cmpA)}</th><th scope="col">{x(c.cmpB)}</th></tr></thead>
                <tbody>{d.compare.map((r, i) => (
                  <tr key={i}><td style={{ textAlign: "start", color: "var(--muted)" }}>{x(r.before)}</td><td style={{ textAlign: "start" }} className="yes-cell">{x(r.after)}</td></tr>
                ))}</tbody>
              </table>
            </div>
            <div className="replaces">
              <span className="lbl">{x(ui.common.replaces)}</span>
              {a.replaces.map((r, i) => <s key={i}>{x(r)}</s>)}
            </div>
          </div>
          <div className="panel">
            <h3>{x(c.integH)}</h3>
            {a.platforms.length === 0 && <p style={{ color: "var(--muted)" }}>{x(c.noPlat)}</p>}
            <div className="plat-links">
              {a.platforms.map((s) => {
                const p = platformBySlug(s)!;
                return (
                  <Link key={s} className="plat-link" href={`/${locale}/integrations/${s}`}>
                    <PlatformLogo p={p} locale={locale} size="sm" />
                    <span><b>{x(p.name)}</b><small>{x(p.summary)}</small></span>
                  </Link>
                );
              })}
            </div>
            <h3 style={{ marginBlockStart: 8 }}>{x(c.included)}</h3>
            <ul className="feats">{a.features.map((f, i) => <li key={i}>{x(f)}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec-tight" id="faq">
        <div className="wrap faq">
          <div className="sec-head"><h2><Rich text={x(c.faqH)} /></h2></div>
          <div className="faq-list">
            {d.faq.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary>{x(f.q)}</summary>
                <p>{x(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head">
            <h2><Rich text={x(c.more)} /></h2>
            <p className="lead">{x(c.moreLead)}</p>
          </div>
          <div className="icon-grid" style={{ marginBlockStart: 0 }}>
            {related.map((r) => (
              <Link key={r.slug} href={`/${locale}/apps/${r.slug}`} className="icon-tile">
                <AppIcon icon={r.icon} /><b>{x(r.name)}</b>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
