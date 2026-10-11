import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndustryIcon } from "@/components/AppIcon";
import { Cta } from "@/components/Cta";
import { Mark } from "@/components/Doodles";
import { industries } from "@/lib/industries";
import { isLocale, t } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

const c = {
  title: { ar: "القطاعات", en: "Industries" },
  seoTitle: { ar: "نظام Odoo ERP مصمّم لقطاعك", en: "Odoo ERP Built for Your Industry" },
  desc: { ar: "أنظمة ERP مبنية لقطاعك: التجزئة والتوزيع والتصنيع والمقاولات والخدمات والعيادات.", en: "ERP systems built for your sector: retail, distribution, manufacturing, contracting, services and clinics." },
  lead: { ar: "نبدأ من طريقة العمل في قطاعك، ثم نختار التطبيقات والمنصات التي تحتاجها فعلاً.", en: "We start from how your sector works, then choose the apps and platforms you actually need." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/industries", c.seoTitle, c.desc) : {};
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = (v: { ar: string; en: string }) => t(v, locale);
  return (
    <>
      <header className="hero-light">
        <div className="wrap">
          <p className="eyebrow">{x(c.title)}</p>
          <h1 style={{ marginBlockStart: 14 }}>{locale === "ar" ? <>نظام يعرف <Mark>طبيعة عملك</Mark></> : <>A system that knows <Mark>your business</Mark></>}</h1>
          <p className="lead">{x(c.lead)}</p>
        </div>
      </header>
      <section className="sec-tight">
        <div className="wrap ind-grid">
          {industries.map((i) => (
            <Link key={i.slug} href={`/${locale}/industries/${i.slug}`} className="ind-photo-card">
              <div className="photo"><Image src={`/stock/ind-${i.slug}.jpg`} alt="" fill sizes="(max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} /></div>
              <div className="body"><IndustryIcon icon={i.icon} /><span><b>{x(i.name)}</b><small>{x(i.headline)}</small></span></div>
            </Link>
          ))}
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
