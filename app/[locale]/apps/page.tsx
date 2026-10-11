import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon } from "@/components/AppIcon";
import { Cta } from "@/components/Cta";
import { Mark } from "@/components/Doodles";
import { appCats, apps } from "@/lib/content";
import { isLocale, t } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

const c = {
  title: { ar: "التطبيقات", en: "Apps" },
  seoTitle: { ar: "تطبيقات Odoo لإدارة أعمالك بالكامل", en: "Odoo Apps to Run Your Whole Business" },
  desc: { ar: "تعرّف على تطبيقات Odoo التي نطبّقها: المحاسبة والمبيعات والمخزون والتصنيع والموارد البشرية والرواتب ونقاط البيع، كلها في نظام واحد مربوط.", en: "Explore the Odoo apps we implement: accounting, sales, inventory, manufacturing, HR, payroll and point of sale, all in one connected system." },
  lead: {
    ar: "ابدأ بما تحتاجه اليوم وأضف الباقي متى شئت. كل تطبيق يقرأ من نفس البيانات، فلا تُدخل المعلومة مرتين.",
    en: "Start with what you need today and add the rest when you are ready. Every app reads the same data, so nothing is entered twice.",
  },
  note: { ar: "تحتاج شيئاً غير موجود؟ نبنيه لك.", en: "Need something that's not here? We build it." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/apps", c.seoTitle, c.desc) : {};
}

export default async function AppsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = (v: { ar: string; en: string }) => t(v, locale);
  return (
    <>
      <header className="hero-light" style={{ paddingBlockEnd: 24 }}>
        <div className="wrap">
          <p className="eyebrow">{x(c.title)}</p>
          <h1 style={{ marginBlockStart: 14 }}>
            {locale === "ar" ? <>16 تطبيقاً، <Mark>نظام واحد</Mark></> : <>16 apps, <Mark>one system</Mark></>}
          </h1>
          <p className="lead">{x(c.lead)}</p>
          <p className="lbl" style={{ marginBlockStart: 16 }}>{x(c.note)}</p>
        </div>
      </header>
      {appCats.map((cat) => (
        <section key={cat.id} className="sec-tight" style={{ paddingBlock: "28px" }}>
          <div className="wrap">
            <div className="group-title" style={{ marginBlockStart: 0 }}><h2>{x(cat.name)}</h2></div>
            <div className="ind-grid">
              {apps.filter((a) => a.cat === cat.id).map((a) => (
                <Link key={a.slug} href={`/${locale}/apps/${a.slug}`} className="ind-photo-card">
                  <div className="photo"><Image src={`/stock/${a.slug}.jpg`} alt="" fill sizes="(max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} /></div>
                  <div className="body"><AppIcon icon={a.icon} /><span><b>{x(a.name)}</b><small>{x(a.headline)}</small></span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
      <div style={{ marginBlockStart: 60 }}><Cta locale={locale} /></div>
    </>
  );
}
