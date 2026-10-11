import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon } from "@/components/AppIcon";
import { Cta } from "@/components/Cta";
import { CoverArt } from "@/components/CoverArt";
import { Checklist, ReadingProgress, ShareBar, Toc } from "@/components/LearnBits";
import { PlatformLogo } from "@/components/PlatformLogo";
import { type Media, articleVisuals } from "@/lib/article-visuals";
import { type Block, articles } from "@/lib/articles";
import { appBySlug, platformBySlug } from "@/lib/content";
import { type L, type Locale, isLocale, locales, t } from "@/lib/i18n";
import { SITE, abs, breadcrumbLd, pageMeta } from "@/lib/meta";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return locales.flatMap((locale) => articles.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const a = articles.find((z) => z.slug === slug);
  if (!isLocale(locale) || !a) return {};
  return pageMeta(locale, `/learn/${slug}`, a.title, a.excerpt, { type: "article", published: a.date, image: articleVisuals[slug]?.cover.src });
}

type Section = { title?: L; blocks: Block[] };
function toSections(body: Block[]): Section[] {
  const out: Section[] = [{ blocks: [] }];
  body.forEach((b) => (b.type === "h2" ? out.push({ title: b.text, blocks: [] }) : out[out.length - 1].blocks.push(b)));
  return out;
}

const Bulb = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" /></svg>
);

function Figure({ m, locale }: { m: Media; locale: Locale }) {
  return (
    <figure className={`art-fig art-fig-${m.kind}`}>
      <div className="art-fig-img">
        {m.kind === "shot" && <div className="oshot-bar" aria-hidden="true"><i /><i /><i /><span>aiodyx.odoo.com</span></div>}
        <Image src={m.src} alt={t(m.caption, locale)} width={1400} height={900} sizes="(max-width: 960px) 100vw, 760px" style={{ width: "100%", height: "auto" }} />
      </div>
      <figcaption>{t(m.caption, locale)}</figcaption>
    </figure>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const a = articles.find((z) => z.slug === slug);
  if (!isLocale(locale) || !a) notFound();
  const v = articleVisuals[slug];
  const x = (val: L) => t(val, locale);
  const ar = locale === "ar";
  const sections = toSections(a.body);
  const intro = sections[0];
  const body = sections.slice(1);
  const toc = body.map((s, i) => ({ id: `s${i + 1}`, label: x(s.title!) }));
  const more = articles.filter((z) => z.slug !== a.slug).slice(0, 3);
  const isChecklist = (s: Section) => /checklist/i.test(s.title?.en ?? "");
  const isConclusion = (s: Section, i: number) => i === body.length - 1 && /conclusion/i.test(s.title?.en ?? "");

  const ld = {
    "@context": "https://schema.org", "@type": "Article", headline: x(a.title), description: x(a.excerpt),
    datePublished: a.date, dateModified: a.date, inLanguage: locale, articleSection: x(a.category),
    image: v ? abs(v.cover.src) : abs("/og.png"), mainEntityOfPage: abs(`/${locale}/learn/${slug}`),
    author: { "@id": `${SITE}/#org` }, publisher: { "@id": `${SITE}/#org` },
  };
  const crumbLd = breadcrumbLd(locale, [{ name: ar ? "مركز المعرفة" : "Resources", path: "/learn" }, { name: x(a.title), path: `/learn/${slug}` }]);
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: a.faq.map((f) => ({ "@type": "Question", name: x(f.q), acceptedAnswer: { "@type": "Answer", text: x(f.a) } })) };

  const renderBlock = (b: Block, i: number, sec: Section, si: number) => {
    switch (b.type) {
      case "p": return <p key={i}>{x(b.text)}</p>;
      case "note": return <aside key={i} className="callout"><Bulb /><p>{x(b.text)}</p></aside>;
      case "ol": return (
        <ol key={i} className="art-steps">{b.items.map((it, k) => <li key={k} style={{ ["--n" as string]: `"${k + 1}"` }}><span>{x(it)}</span></li>)}</ol>
      );
      case "ul":
        if (isChecklist(sec)) return <Checklist key={i} id={`${slug}-${si}`} items={b.items.map(x)} labels={{ done: ar ? "جاهز" : "done", reset: ar ? "ابدأ من جديد" : "Reset" }} />;
        return <ul key={i} className="art-points">{b.items.map((it, k) => <li key={k}>{x(it)}</li>)}</ul>;
      default: return null;
    }
  };

  return (
    <>
      <ReadingProgress />
      <JsonLd data={[ld, faqLd, crumbLd]} />

      <header className="art-hero" style={{ ["--accent" as string]: v?.accent ?? "#2B3E8C" }}>
        <div className="wrap art-hero-grid">
          <div>
            <nav className="crumbs"><Link href={`/${locale}/learn`}>{ar ? "مركز المعرفة" : "Resources"}</Link><span>{ar ? "‹" : "›"}</span><span>{x(a.category)}</span></nav>
            <span className="cat-pill" style={{ marginBlockStart: 18 }}>{x(a.category)}</span>
            <h1>{x(a.title)}</h1>
            <p className="lead">{x(a.excerpt)}</p>
            <div className="art-meta">
              <span>AIODYX</span><span><time dateTime={a.date}>{new Date(a.date).toLocaleDateString(ar ? "ar-SA-u-ca-gregory" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}</time></span><span>{a.readMin} {ar ? "دقائق قراءة" : "min read"}</span>
            </div>
            <ShareBar title={x(a.title)} labels={{ copy: ar ? "انسخ الرابط" : "Copy link", copied: ar ? "تم النسخ ✓" : "Copied ✓", share: ar ? "شارك على واتساب" : "Share on WhatsApp" }} />
          </div>
          {v && (
            <div className="art-cover">
              <CoverArt src={v.cover.src} kind={v.cover.kind} accent={v.accent} sizes="(max-width: 960px) 100vw, 50vw" priority />
              {v.logos.length > 0 && <span className="art-cover-logos">{v.logos.map((s) => { const p = platformBySlug(s); return p ? <PlatformLogo key={s} p={p} locale={locale} size="sm" /> : null; })}</span>}
            </div>
          )}
        </div>
      </header>

      <div className="wrap art-layout">
        <aside className="art-aside">
          <Toc items={toc} title={ar ? "في هذا الدليل" : "In this guide"} />
          <Link className="btn btn-primary" href={`/${locale}/contact`} style={{ justifyContent: "center" }}>{ar ? "احجز استشارة مجانية" : "Book a free consultation"}</Link>
        </aside>

        <article className="prose">
          {v && (
            <section className="tldr">
              <b>{ar ? "الخلاصة في 30 ثانية" : "The 30-second summary"}</b>
              <ol>{v.tldr.map((t2, i) => <li key={i}>{x(t2)}</li>)}</ol>
            </section>
          )}
          <div className="art-intro">{intro.blocks.map((b, i) => renderBlock(b, i, intro, 0))}</div>

          {body.map((s, si) => (
            <section key={si} id={`s${si + 1}`} className={`art-sec ${isConclusion(s, si) ? "art-conclusion" : ""} ${isChecklist(s) ? "art-checklist" : ""}`}>
              <div className="art-sec-head"><span>{String(si + 1).padStart(2, "0")}</span><h2>{x(s.title!)}</h2></div>
              {s.blocks.map((b, i) => (
                <div key={i} style={{ display: "contents" }}>
                  {renderBlock(b, i, s, si)}
                  {i === 0 && v?.media[si] && <Figure m={v.media[si]} locale={locale} />}
                </div>
              ))}
              {s.blocks.length === 0 && v?.media[si] && <Figure m={v.media[si]} locale={locale} />}
            </section>
          ))}

          <section className="art-sec" id="faq">
            <div className="art-sec-head"><span>?</span><h2>{ar ? "أسئلة شائعة" : "FAQ"}</h2></div>
            <div className="faq-list">{a.faq.map((f, i) => <details key={i} open={i === 0}><summary>{x(f.q)}</summary><p>{x(f.a)}</p></details>)}</div>
          </section>

          {(a.related.apps.length > 0 || a.related.platforms.length > 0) && (
            <section className="art-related">
              <b>{ar ? "مذكور في هذا الدليل" : "Mentioned in this guide"}</b>
              <div className="art-related-row">
                {a.related.platforms.map((s) => { const p = platformBySlug(s); return p ? <Link key={s} href={`/${locale}/integrations/${s}`} className="art-chip"><PlatformLogo p={p} locale={locale} size="sm" /></Link> : null; })}
                {a.related.apps.map((s) => { const p = appBySlug(s); return p ? <Link key={s} href={`/${locale}/apps/${s}`} className="art-chip"><AppIcon icon={p.icon} size={26} /><span>{x(p.name)}</span></Link> : null; })}
              </div>
            </section>
          )}
        </article>
      </div>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2>{ar ? "أدلة أخرى" : "More guides"}</h2></div>
          <div className="cover-grid">{more.map((m) => {
            const mv = articleVisuals[m.slug];
            return (
              <Link key={m.slug} href={`/${locale}/learn/${m.slug}`} className="cover-card" style={{ ["--accent" as string]: mv?.accent }}>
                <div className="cover-img"><CoverArt src={mv?.cover.src ?? "/stock/team.jpg"} kind={mv?.cover.kind ?? "photo"} accent={mv?.accent ?? "#2B3E8C"} sizes="(max-width: 900px) 100vw, 33vw" /></div>
                <div className="cover-body"><span className="cat-pill">{x(m.category)}</span><h3>{x(m.title)}</h3><span className="meta">{m.readMin} {ar ? "دقائق قراءة" : "min read"}</span></div>
              </Link>
            );
          })}</div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
