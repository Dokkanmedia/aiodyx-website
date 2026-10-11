import { notFound } from "next/navigation";
import { Configurator } from "@/components/Configurator";
import { Rich } from "@/components/Rich";
import { isLocale, t } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

const c = {
  title: { ar: "ابنِ نظامك", en: "Build your system" },
  seoTitle: { ar: "ابنِ نظام Odoo الخاص بشركتك", en: "Build Your Own Odoo System" },
  desc: { ar: "اختر تطبيقات Odoo التي تحتاجها، واعرف الباقة المناسبة والمنصات الحكومية التي سنربطها والمدة المتوقعة.", en: "Pick the Odoo apps you need and see the right package, the government platforms we'll connect and the expected timeline." },
  h1: { ar: "ابنِ *نظامك* في دقيقة", en: "Build *your system* in a minute" },
  lead: { ar: "اختر التطبيقات، وأخبرنا أين تعمل وكم حجم شركتك. نقترح لك الباقة والربط والمدة فوراً، ثم ترسل الطلب بضغطة.", en: "Pick your apps, tell us where you operate and how big you are. We suggest the package, integrations and timeline instantly, then you send it in one click." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/start", c.seoTitle, c.desc) : {};
}

export default async function StartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <header className="hero-plain" style={{ paddingBlockEnd: 24 }}>
        <div className="wrap">
          <p className="eyebrow">{t(c.title, locale)}</p>
          <h1><Rich text={t(c.h1, locale)} /></h1>
          <p className="lead">{t(c.lead, locale)}</p>
        </div>
      </header>
      <section className="sec-tight"><div className="wrap"><Configurator locale={locale} /></div></section>
    </>
  );
}
