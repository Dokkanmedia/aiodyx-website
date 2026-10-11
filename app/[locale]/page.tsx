import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppIcon, IndustryIcon } from "@/components/AppIcon";
import { Cta } from "@/components/Cta";
import { Mark } from "@/components/Doodles";
import { Hub } from "@/components/Hub";
import { OdooShot } from "@/components/OdooShot";
import { PlatformTabs } from "@/components/PlatformTabs";
import { Rich } from "@/components/Rich";
import { TrustBar } from "@/components/TrustBar";
import { VideoBand } from "@/components/VideoBand";
import { LogoMarquee } from "@/components/LogoMarquee";
import { apps, contact } from "@/lib/content";
import { industries } from "@/lib/industries";
import { type L, type Locale, isLocale, t, ui } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

const c = {
  metaTitle: { ar: "شريك Odoo الرسمي في الأردن والسعودية", en: "Official Odoo Partner in Jordan & Saudi Arabia" },
  metaDesc: {
    ar: "شريك Odoo رسمي في عمّان والرياض. نطبّق لك نظام ERP مفصّلاً على طريقة عملك، مربوطاً مع فاتورة الزكاة وJoFotara وقوى ومدد، بدعم كامل بالعربية.",
    en: "Official Odoo partner in Amman and Riyadh. We implement an ERP system tailored to how you work, connected to ZATCA, JoFotara, Qiwa and Mudad, with full Arabic support.",
  },
  partner: { ar: "شريك Odoo رسمي · عمّان والرياض", en: "Official Odoo partner · Amman & Riyadh" },
  lead: {
    ar: "نطبّق Odoo على طريقة عمل شركتك، وننقل بياناتك، ونربطه بفوترة والزكاة وقوى ومدد والبنوك. ثم ندرّب فريقك بالعربية ونبقى معك بعد التشغيل.",
    en: "We implement Odoo around the way your company works, migrate your data and connect it to ZATCA, JoFotara, Qiwa, Mudad and your banks. Then we train your team in Arabic and stay with you after go-live.",
  },
  appsH: { ar: "التطبيقات التي *نطبّقها*", en: "The apps we *implement*" },
  shotsH: { ar: "هكذا يبدو نظامك *بالعربية*", en: "This is what your system looks like *in Arabic*" },
  shotsLead: { ar: "لقطات من Odoo 19 مطبّق لشركة تجريبية سعودية. الأسماء والأرقام وهمية.", en: "Screens from Odoo 19 set up for a sample Saudi company. Names and figures are fictional." },
  features: [
    {
      shot: "accounting",
      h: { ar: "فواتير ضريبية جاهزة للفوترة الإلكترونية", en: "Tax invoices ready for e-invoicing" },
      p: { ar: "الفاتورة تُصدر بالعربية مع الرقم الضريبي وضريبة 15%، وحالة الإرسال إلى منصة فاتورة تظهر على الفاتورة نفسها. في الأردن نفس الشيء مع JoFotara.", en: "Invoices are issued in Arabic with VAT number and 15% VAT, and the FATOORA submission status shows on the invoice itself. Same in Jordan with JoFotara." },
      link: "accounting",
    },
    {
      shot: "crm-sales",
      h: { ar: "مسار مبيعات يراه الجميع", en: "A sales pipeline everyone can see" },
      p: { ar: "كل فرصة بمرحلتها وقيمتها والمندوب المسؤول عنها. عرض السعر يخرج من الفرصة، وأمر البيع من العرض، والفاتورة من الأمر.", en: "Every opportunity with its stage, value and owner. The quote comes from the opportunity, the order from the quote and the invoice from the order." },
      link: "crm-sales",
    },
    {
      shot: "hr",
      h: { ar: "ملف كل موظف في مكان واحد", en: "Every employee file in one place" },
      p: { ar: "العقود والإجازات والمستندات والعهد. نربطها مع قوى في السعودية، ومع الحضور والرواتب ومدد والتأمينات.", en: "Contracts, leave, documents and custody. We link it to Qiwa in Saudi Arabia, and to attendance, payroll, Mudad and GOSI." },
      link: "hr",
    },
    {
      shot: "business-intelligence",
      h: { ar: "لوحات الإدارة من نفس البيانات", en: "Management dashboards from the same data" },
      p: { ar: "المبيعات والفواتير والمخزون والمصروفات في لوحات تُحدَّث من النظام مباشرة، فلا تنتظر تقرير آخر الشهر.", en: "Sales, invoices, stock and expenses on dashboards that update straight from the system, so you don't wait for the month-end report." },
      link: "business-intelligence",
    },
  ],
  hubH: { ar: "الربط مع *الجهات الحكومية*", en: "Connected to *government platforms*" },
  hubLead: {
    ar: "Odoo فيه الأساس للفوترة الإلكترونية في السعودية والأردن. نحن نفعّله ونختبره مع حسابك، ونبني ما ينقص: قوى، ومدد، والتأمينات، والضمان، وصيغ البنوك المحلية، وأجهزة البصمة.",
    en: "Odoo includes the e-invoicing foundations for Saudi Arabia and Jordan. We activate and test them with your account, and build what's missing: Qiwa, Mudad, GOSI, Social Security, local bank formats and biometric devices.",
  },
  wallH: { ar: "المنصات التي *نربط* نظامك بها", en: "Platforms we *connect* your system to" },
  indH: { ar: "حسب *قطاعك*", en: "By *industry*" },
  teamH: { ar: "فريق في *عمّان والرياض*", en: "Teams in *Amman and Riyadh*" },
  teamP: {
    ar: "مستشارون ومطورون يعرفون أنظمة الضريبة والعمل في البلدين. نجلس مع أقسامك، ونبني النظام معكم، وندرّب فريقك بالعربية.",
    en: "Consultants and developers who know tax and labour rules in both countries. We sit with your departments, build the system with you and train your team in Arabic.",
  },
  steps: [
    { h: { ar: "تحليل", en: "Analysis" }, p: { ar: "نرسم كيف يعمل كل قسم اليوم.", en: "We map how each department works today." } },
    { h: { ar: "تصميم", en: "Design" }, p: { ar: "نحدد التطبيقات والصلاحيات والربط.", en: "We define apps, permissions and integrations." } },
    { h: { ar: "تنفيذ", en: "Build" }, p: { ar: "نطبّق وننقل البيانات ونختبر.", en: "We implement, migrate data and test." } },
    { h: { ar: "تشغيل ودعم", en: "Go-live & support" }, p: { ar: "ندرّب ونطلق ونبقى معك.", en: "We train, launch and stay with you." } },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "", c.metaTitle, c.metaDesc);
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params;
  if (!isLocale(l)) notFound();
  const locale: Locale = l;
  const x = (v: L) => t(v, locale);
  const ar = locale === "ar";

  return (
    <>
      <header className="hero-plain">
        <div className="wrap">
          <p><span className="tagline">Simplify. Automate. Grow.</span></p>
          <span className="partner-badge" style={{ marginBlockStart: 14 }}><i>O</i>{x(c.partner)}</span>
          <h1>
            {ar ? <>كل أعمالك في <Mark>نظام واحد</Mark>، مربوط مع الجهات الحكومية</>
                : <>Your whole business in <Mark>one system</Mark>, connected to government platforms</>}
          </h1>
          <p className="lead">{x(c.lead)}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href={`/${locale}/contact`}>{x(ui.cta.consult)}</Link>
            <Link className="btn btn-ghost" href={`/${locale}/start`}>{x(ui.nav.start)}</Link>
          </div>
          <TrustBar locale={locale} />
          <div className="hero-shot"><OdooShot name="accounting" alt={x(c.features[0].h)} priority /></div>
        </div>
      </header>

      <VideoBand locale={locale} />

      <section className="sec-tight" style={{ paddingBlockStart: 72 }}>
        <div className="wrap">
          <h2 style={{ marginBlockEnd: 28 }}><Rich text={x(c.appsH)} /></h2>
          <div className="icon-grid" style={{ marginBlockStart: 0 }}>
            {apps.map((a) => (
              <Link key={a.slug} href={`/${locale}/apps/${a.slug}`} className="icon-tile">
                <AppIcon icon={a.icon} />
                <b>{x(a.name)}</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2><Rich text={x(c.shotsH)} /></h2>
            <p className="lead">{x(c.shotsLead)}</p>
          </div>
          {c.features.map((f, i) => (
            <div key={f.shot} className={`feature ${i % 2 ? "rev" : ""}`}>
              <div>
                <h2 style={{ fontSize: "clamp(1.4rem,2.6vw,2rem)" }}>{x(f.h)}</h2>
                <p className="lead">{x(f.p)}</p>
                <p style={{ marginBlockStart: 16 }}><Link className="link" href={`/${locale}/apps/${f.link}`}>{x(ui.cta.readMore)}</Link></p>
              </div>
              <div className="feature-media"><OdooShot name={f.shot} alt={x(f.h)} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="hero" style={{ paddingBlock: 88 }}>
        <div className="wrap hero-grid">
          <div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.6vw,2.8rem)" }}><Rich text={x(c.hubH)} /></h2>
            <p className="lead">{x(c.hubLead)}</p>
            <div className="hero-cta"><Link className="btn btn-primary" href={`/${locale}/integrations`}>{x(ui.cta.allIntegrations)}</Link></div>
          </div>
          <Hub locale={locale} />
        </div>
      </section>
      <section className="sec" style={{ paddingBlock: 64 }}>
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.wallH)} /></h2></div>
          <LogoMarquee locale={locale} />
        </div>
      </section>
      <section className="sec integ" style={{ paddingBlock: 56 }}>
        <div className="wrap"><PlatformTabs locale={locale} /></div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head row">
            <h2><Rich text={x(c.indH)} /></h2>
            <Link className="link" href={`/${locale}/industries`}>{ar ? "كل القطاعات" : "All industries"}</Link>
          </div>
          <div className="ind-grid">
            {industries.map((i) => (
              <Link key={i.slug} href={`/${locale}/industries/${i.slug}`} className="ind-photo-card">
                <div className="photo"><Image src={`/stock/ind-${i.slug}.jpg`} alt="" fill sizes="(max-width: 900px) 50vw, 33vw" style={{ objectFit: "cover" }} /></div>
                <div className="body"><IndustryIcon icon={i.icon} /><span><b>{x(i.name)}</b><small>{x(i.short)}</small></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="sec">
        <div className="wrap team-band">
          <div className="photo"><Image src="/stock/consult.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} /></div>
          <div>
            <h2 style={{ marginBlockEnd: 14 }}><Rich text={x(c.teamH)} /></h2>
            <p className="lead">{x(c.teamP)}</p>
            <div className="text-cols" style={{ gridTemplateColumns: "1fr 1fr", marginBlockStart: 28 }}>
              {c.steps.map((s, i) => <div key={i}><h3>{i + 1}. {x(s.h)}</h3><p>{x(s.p)}</p></div>)}
            </div>
          </div>
        </div>
        <div className="wrap office-grid" style={{ marginBlockStart: 32 }}>
          <div className="office">
            <Image src="/stock/amman.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div><b>{ar ? "عمّان" : "Amman"}</b><span>{contact.jo[0].phone}</span></div>
          </div>
          <div className="office">
            <Image src="/stock/riyadh.jpg" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            <div><b>{ar ? "الرياض" : "Riyadh"}</b><span>{contact.sa[0].phone}</span></div>
          </div>
        </div>
      </section>

      <Cta locale={locale} />
    </>
  );
}
