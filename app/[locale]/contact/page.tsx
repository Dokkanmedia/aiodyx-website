import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Rich } from "@/components/Rich";
import { TrustBar } from "@/components/TrustBar";
import { WHATSAPP } from "@/components/WhatsAppButton";
import { contact } from "@/lib/content";
import { type L, isLocale, t } from "@/lib/i18n";
import { faqLd, pageMeta } from "@/lib/meta";
import { JsonLd } from "@/components/JsonLd";

const c = {
  title: { ar: "تواصل معنا", en: "Contact us" },
  seoTitle: { ar: "تواصل معنا واحجز استشارة Odoo مجانية", en: "Contact Us & Book a Free Odoo Consultation" },
  desc: { ar: "احجز استشارة مجانية مع فريق AIODYX في عمّان أو الرياض. نسمع احتياجك ونعرض عليك Odoo بالعربي على سيناريو قريب من عملك.", en: "Book a free consultation with the AIODYX team in Amman or Riyadh. We listen to your needs and show you Odoo on a scenario close to your business." },
  h1: { ar: "لنتحدث عن *نظامك*", en: "Let's talk about *your system*" },
  lead: { ar: "استشارة مجانية مدتها 30 دقيقة. نفهم طريقة عملك، ونقول لك بصراحة إن كان Odoo مناسباً لك.", en: "A free 30-minute consultation. We learn how you work and tell you plainly whether Odoo is right for you." },
  formH: { ar: "احجز استشارتك", en: "Book your consultation" },
  formP: { ar: "يستغرق دقيقة واحدة. الحقول المطلوبة: الاسم ورقم الجوال.", en: "Takes a minute. Required: name and mobile number." },
  nextH: { ar: "ماذا يحدث *بعد* أن ترسل؟", en: "What happens *after* you send?" },
  steps: [
    { h: { ar: "نتصل بك خلال يوم عمل", en: "We call within one working day" }, p: { ar: "مستشار من فريقنا يتصل لتحديد موعد يناسبك.", en: "A consultant calls to find a time that suits you." } },
    { h: { ar: "استشارة 30 دقيقة", en: "A 30-minute consultation" }, p: { ar: "حضورياً في مكتبك أو عن بُعد. نسمع، نسأل، ونفهم طريقة عملك.", en: "At your office or online. We listen, ask and understand how you work." } },
  ],
  quickH: { ar: "تفضّل التواصل المباشر؟", en: "Prefer to reach us directly?" },
  wa: { ar: "واتساب", en: "WhatsApp" },
  waP: { ar: "رد سريع في أوقات العمل", en: "Quick replies in working hours" },
  call: { ar: "اتصل بنا", en: "Call us" },
  officesH: { ar: "*مكاتبنا*", en: "Our *offices*" },
  faqH: { ar: "أسئلة *سريعة*", en: "Quick *questions*" },
  faq: [
    { q: { ar: "هل الاستشارة مجانية فعلاً؟", en: "Is the consultation really free?" }, a: { ar: "نعم، 30 دقيقة بلا أي التزام. هدفها أن نفهم احتياجك ونقول لك بصراحة إن كان Odoo مناسباً لك.", en: "Yes, 30 minutes with no commitment. The goal is to understand your needs and tell you honestly whether Odoo fits." } },
    { q: { ar: "هل تزورون مكتبنا؟", en: "Do you visit our office?" }, a: { ar: "نعم في عمّان والرياض، ويمكن أن تكون الاستشارة عن بُعد إن كنت في مدينة أخرى.", en: "Yes in Amman and Riyadh, and the consultation can be online if you're elsewhere." } },
    { q: { ar: "عندنا Odoo مطبّق من قبل، هل تساعدوننا؟", en: "We already run Odoo. Can you help?" }, a: { ar: "نعم. نراجع النظام الحالي، ونصلح ما يعطلك، ونضيف الربط الحكومي الناقص.", en: "Yes. We review your current system, fix what holds you back and add missing government integrations." } },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/contact", c.seoTitle, c.desc) : {};
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = (v: L) => t(v, locale);
  const ar = locale === "ar";
  const waText = encodeURIComponent(ar ? "مرحباً، أريد استشارة عن نظام Odoo لشركتي" : "Hi, I'd like a consultation about Odoo for my company");

  return (
    <>
      <JsonLd data={faqLd(locale, c.faq)} />
      <header className="contact-hero">
        <div className="wrap contact-grid">
          <div className="contact-side">
            <p className="eyebrow">{x(c.title)}</p>
            <h1><Rich text={x(c.h1)} /></h1>
            <p className="lead">{x(c.lead)}</p>

            <TrustBar locale={locale} />
            <div className="next-steps">
              <h2><Rich text={x(c.nextH)} /></h2>
              <ol>
                {c.steps.map((s, i) => <li key={i}><span className="n">{i + 1}</span><div><b>{x(s.h)}</b><p>{x(s.p)}</p></div></li>)}
              </ol>
            </div>

            <div className="quick">
              <b>{x(c.quickH)}</b>
              <div className="quick-row">
                <a className="quick-card wa" href={`https://wa.me/${WHATSAPP}?text=${waText}`} target="_blank" rel="noopener">
                  <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.6 5.8 5 2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.3Z" /></svg>
                  <span><b>{x(c.wa)}</b><small>{x(c.waP)}</small></span>
                </a>
                <div className="quick-card">
                  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
                  <span><b>{x(c.call)}</b><small className="ltr">{contact.sa[0].phone}</small><small className="ltr">{contact.jo[0].phone}</small></span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <div className="form-card-head">
              <h2>{x(c.formH)}</h2>
              <p>{x(c.formP)}</p>
            </div>
            <Suspense fallback={null}><ContactForm locale={locale} /></Suspense>
          </div>
        </div>
      </header>

      <section className="sec-tight" style={{ paddingBlockStart: 72 }}>
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.officesH)} /></h2></div>
        </div>
        <div className="wrap office-grid">
          <div className="office">
            <Image src="/stock/amman.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div><b>{ar ? "عمّان" : "Amman"}</b>{contact.jo.map((o) => <span key={o.phone}>{x(o.label)} · {o.phone}</span>)}</div>
          </div>
          <div className="office">
            <Image src="/stock/riyadh.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div><b>{ar ? "الرياض" : "Riyadh"}</b>{contact.sa.map((o) => <span key={o.phone}>{o.phone}</span>)}<span>{x(contact.hours)}</span></div>
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.faqH)} /></h2></div>
          <div className="faq-list">{c.faq.map((f, i) => <details key={i}><summary>{x(f.q)}</summary><p>{x(f.a)}</p></details>)}</div>
        </div>
      </section>
    </>
  );
}
