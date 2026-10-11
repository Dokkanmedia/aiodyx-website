import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { CoverArt } from "@/components/CoverArt";
import { type Card, LearnGrid } from "@/components/LearnGrid";
import { Rich } from "@/components/Rich";
import { articleVisuals, learningPath } from "@/lib/article-visuals";
import { articles } from "@/lib/articles";
import { platformBySlug } from "@/lib/content";
import { type L, isLocale, t } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

const c = {
  title: { ar: "مركز المعرفة", en: "Resources" },
  seoTitle: { ar: "مركز المعرفة: أدلة Odoo والفوترة الإلكترونية والرواتب", en: "Resources: Guides on Odoo, E-invoicing & Payroll" },
  desc: { ar: "أدلة عملية عن Odoo والفوترة الإلكترونية والرواتب والربط الحكومي في السعودية والأردن.", en: "Practical guides on Odoo, e-invoicing, payroll and government integrations in Saudi Arabia and Jordan." },
  h1: { ar: "كل ما تحتاج معرفته *قبل* أن تبدأ", en: "Everything to know *before* you start" },
  lead: { ar: "أدلة قصيرة ومصوّرة تشرح ما تحتاج معرفته قبل أن تطبّق Odoo. اقرأ الخلاصة في 30 ثانية، أو تعمّق خطوة بخطوة.", en: "Short, illustrated guides on what to know before you implement Odoo. Read the 30-second summary or go deep step by step." },
  featured: { ar: "ابدأ من هنا", en: "Start here" },
  pathH: { ar: "مسار *التعلم*", en: "Learning *path*" },
  pathLead: { ar: "إن كنت تبدأ من الصفر، اقرأ الأدلة بهذا الترتيب.", en: "Starting from scratch? Read the guides in this order." },
  allH: { ar: "كل *الأدلة*", en: "All *guides*" },
  all: { ar: "الكل", en: "All" },
  min: { ar: "دقائق قراءة", en: "min read" },
  read: { ar: "اقرأ الدليل", en: "Read the guide" },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/learn", c.seoTitle, c.desc) : {};
}

export default async function LearnPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = (v: L) => t(v, locale);
  const logoSrc = (slugs: string[]) => slugs.map((s) => platformBySlug(s)?.logos?.[0]).filter(Boolean).map((f) => `/platforms/${f}`);
  const feat = articles.find((a) => a.slug === "zatca-phase-2-odoo-guide") ?? articles[0];
  const fv = articleVisuals[feat.slug];
  const cards: Card[] = articles.map((a) => {
    const v = articleVisuals[a.slug];
    return { slug: a.slug, href: `/${locale}/learn/${a.slug}`, title: x(a.title), excerpt: x(a.excerpt), category: x(a.category), readMin: `${a.readMin} ${x(c.min)}`, cover: v?.cover.src ?? "/stock/team.jpg", kind: v?.cover.kind ?? "photo", accent: v?.accent ?? "#2B3E8C", logos: logoSrc(v?.logos ?? []) };
  });

  return (
    <>
      <header className="learn-hero">
        <div className="wrap learn-hero-grid">
          <div>
            <p className="eyebrow">{x(c.title)}</p>
            <h1><Rich text={x(c.h1)} /></h1>
            <p className="lead">{x(c.lead)}</p>
          </div>
          <Link href={`/${locale}/learn/${feat.slug}`} className="feat-card" style={{ ["--accent" as string]: fv.accent }}>
            <div className="feat-img"><CoverArt src={fv.cover.src} kind={fv.cover.kind} accent={fv.accent} logos={logoSrc(fv.logos)} sizes="(max-width: 960px) 100vw, 45vw" priority /></div>
            <div className="feat-body">
              <span className="cat-pill">{x(c.featured)}</span>
              <h2>{x(feat.title)}</h2>
              <span className="link">{x(c.read)} · {feat.readMin} {x(c.min)}</span>
            </div>
          </Link>
        </div>
      </header>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.pathH)} /></h2><p className="lead">{x(c.pathLead)}</p></div>
          <ol className="path">
            {learningPath.map((s, i) => {
              const a = articles.find((z) => z.slug === s);
              if (!a) return null;
              const v = articleVisuals[s];
              return (
                <li key={s} style={{ ["--accent" as string]: v.accent }}>
                  <Link href={`/${locale}/learn/${s}`}>
                    <span className="path-n">{i + 1}</span>
                    <span className="path-img"><CoverArt src={v.cover.src} kind={v.cover.kind} accent={v.accent} sizes="240px" /></span>
                    <b>{x(a.title)}</b>
                    <small>{a.readMin} {x(c.min)}</small>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.allH)} /></h2></div>
          <LearnGrid cards={cards} allLabel={x(c.all)} />
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
