import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { Rich } from "@/components/Rich";
import { type L, isLocale, t } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

/*
 * Package contents are AIODYX's proposed scopes. Prices are intentionally not shown
 * until the team provides them; see `price` on each package.
 */
type Pkg = { id: string; name: L; for: L; price: L; featured?: boolean; duration: L; support: L; items: L[] };

const pkgs: Pkg[] = [
  {
    id: "start", name: { ar: "البداية", en: "Start" },
    for: { ar: "لشركة صغيرة تنتقل من الجداول إلى نظام واحد.", en: "For a small company moving from spreadsheets to one system." },
    price: { ar: "حسب النطاق", en: "Scoped per project" },
    duration: { ar: "4 إلى 6 أسابيع", en: "4–6 weeks" }, support: { ar: "شهر دعم", en: "1 month support" },
    items: [
      { ar: "حتى 3 تطبيقات (مثل المحاسبة والمبيعات والمخزون)", en: "Up to 3 apps (e.g. accounting, sales, inventory)" },
      { ar: "شركة واحدة وفرع واحد", en: "One company, one branch" },
      { ar: "تفعيل الفوترة الإلكترونية واختبارها", en: "E-invoicing activated and tested" },
      { ar: "نقل العملاء والأصناف والأرصدة الافتتاحية", en: "Customers, products and opening balances migrated" },
      { ar: "جلستا تدريب بالعربية", en: "Two training sessions in Arabic" },
    ],
  },
  {
    id: "grow", featured: true, name: { ar: "النمو", en: "Grow" },
    for: { ar: "لشركة لها فروع وموظفون وتحتاج الربط الحكومي كاملاً.", en: "For a company with branches and staff that needs full government integration." },
    price: { ar: "حسب النطاق", en: "Scoped per project" },
    duration: { ar: "8 إلى 12 أسبوعاً", en: "8–12 weeks" }, support: { ar: "3 أشهر دعم", en: "3 months support" },
    items: [
      { ar: "حتى 8 تطبيقات تشمل الموارد البشرية والرواتب", en: "Up to 8 apps including HR and payroll" },
      { ar: "ربط قوى ومدد والتأمينات أو الضمان", en: "Qiwa, Mudad and GOSI or Social Security" },
      { ar: "ربط أجهزة البصمة وملفات البنوك", en: "Biometric devices and bank files" },
      { ar: "عدة فروع ومستودعات", en: "Multiple branches and warehouses" },
      { ar: "تقارير ولوحات مخصصة للإدارة", en: "Custom management reports and dashboards" },
      { ar: "نقل البيانات الكامل من نظامك الحالي", en: "Full data migration from your current system" },
      { ar: "تدريب لكل قسم", en: "Training for every department" },
    ],
  },
  {
    id: "enterprise", name: { ar: "المؤسسات", en: "Enterprise" },
    for: { ar: "لمجموعة شركات أو عمليات معقدة تحتاج تطويراً خاصاً.", en: "For groups of companies or complex operations that need custom development." },
    price: { ar: "حسب النطاق", en: "Scoped per project" },
    duration: { ar: "حسب المراحل", en: "Phased" }, support: { ar: "دعم باتفاقية مستوى خدمة", en: "SLA-backed support" },
    items: [
      { ar: "كل التطبيقات التي تحتاجها", en: "Every app you need" },
      { ar: "عدة شركات وعملات وتقارير موحدة", en: "Multi-company, multi-currency, consolidated reporting" },
      { ar: "تطبيقات وتطوير خاص على Odoo", en: "Custom modules built on Odoo" },
      { ar: "ربط المتاجر وبوابات الدفع وأنظمة أخرى", en: "Stores, payment gateways and other systems" },
      { ar: "مساعد ذكي بالعربية على بياناتك", en: "Arabic AI assistant on your data" },
      { ar: "مدير مشروع مخصص", en: "Dedicated project manager" },
    ],
  },
];

type Cell = "yes" | "no" | L;
const rows: { f: L; v: [Cell, Cell, Cell] }[] = [
  { f: { ar: "عدد التطبيقات", en: "Apps" }, v: [{ ar: "حتى 3", en: "Up to 3" }, { ar: "حتى 8", en: "Up to 8" }, { ar: "غير محدود", en: "Unlimited" }] },
  { f: { ar: "الفوترة الإلكترونية ZATCA أو JoFotara", en: "ZATCA or JoFotara e-invoicing" }, v: ["yes", "yes", "yes"] },
  { f: { ar: "قوى ومدد والتأمينات أو الضمان", en: "Qiwa, Mudad, GOSI or SSC" }, v: ["no", "yes", "yes"] },
  { f: { ar: "أجهزة البصمة وملفات البنوك", en: "Biometrics and bank files" }, v: ["no", "yes", "yes"] },
  { f: { ar: "فروع متعددة", en: "Multiple branches" }, v: ["no", "yes", "yes"] },
  { f: { ar: "عدة شركات وعملات", en: "Multi-company & currency" }, v: ["no", "no", "yes"] },
  { f: { ar: "تطوير خاص", en: "Custom development" }, v: ["no", { ar: "محدود", en: "Light" }, "yes"] },
  { f: { ar: "نقل البيانات", en: "Data migration" }, v: [{ ar: "أساسي", en: "Basic" }, { ar: "كامل", en: "Full" }, { ar: "كامل", en: "Full" }] },
  { f: { ar: "الدعم بعد التشغيل", en: "Post go-live support" }, v: [{ ar: "شهر", en: "1 month" }, { ar: "3 أشهر", en: "3 months" }, { ar: "اتفاقية مستوى خدمة", en: "SLA" }] },
];

const c = {
  title: { ar: "الأسعار والباقات", en: "Pricing & packages" },
  seoTitle: { ar: "باقات تطبيق Odoo: البداية والنمو والمؤسسات", en: "Odoo Implementation Packages: Start, Grow & Enterprise" },
  desc: { ar: "باقات تنفيذ Odoo من AIODYX: البداية والنمو والمؤسسات، مع الربط الحكومي والتدريب والدعم.", en: "AIODYX Odoo implementation packages: Start, Grow and Enterprise, with government integrations, training and support." },
  h1: { ar: "باقة *تناسب حجمك*، وسعر واضح قبل أن نبدأ", en: "A package *that fits your size*, and a clear price before we start" },
  lead: { ar: "نبدأ باستشارة مجانية، ثم اجتماع مفصّل نفهم فيه طبيعة عملك وما تحتاجه فعلاً. بعدها نرسل عرض سعر مفصّل بالنطاق والمراحل، فلا مفاجآت في منتصف المشروع.", en: "We start with a free consultation, then a detailed meeting to understand your business and what you actually need. After that we send an itemised quote by scope and phase, so there are no surprises halfway through." },
  quote: { ar: "اطلب عرض سعر", en: "Request a quote" },
  popular: { ar: "مقترحة لأغلب الشركات", en: "Recommended" },
  duration: { ar: "المدة المعتادة", en: "Typical duration" },
  cmpH: { ar: "قارن *الباقات*", en: "Compare *packages*" },
  licH: { ar: "ماذا عن رخص *Odoo*؟", en: "What about *Odoo* licences?" },
  licP: { ar: "رخص Odoo تُدفع لشركة Odoo مباشرة حسب عدد المستخدمين والخطة، وهي منفصلة عن كلفة التنفيذ. كشريك رسمي نساعدك تختار الخطة المناسبة ونتجنب أي مستخدم أو تطبيق لا تحتاجه.", en: "Odoo licences are paid to Odoo directly, by number of users and plan, separately from implementation. As an official partner we help you pick the right plan and avoid users or apps you don't need." },
  extraH: { ar: "خدمات *إضافية*", en: "*Additional* services" },
  extras: [
    { h: { ar: "دعم شهري", en: "Monthly support" }, p: { ar: "ساعات دعم وتطوير شهرية بعد انتهاء فترة الدعم.", en: "Monthly support and development hours after the included period." } },
    { h: { ar: "ترقية الإصدار", en: "Version upgrade" }, p: { ar: "ننقل نظامك إلى إصدار Odoo الأحدث مع تخصيصاتك.", en: "We move your system to the latest Odoo version with your customisations." } },
    { h: { ar: "تدريب إضافي", en: "Extra training" }, p: { ar: "جلسات للموظفين الجدد أو لتطبيقات أضفتها لاحقاً.", en: "Sessions for new staff or for apps you add later." } },
    { h: { ar: "مراجعة نظام قائم", en: "Existing system review" }, p: { ar: "عندك Odoo مطبّق من قبل؟ نراجعه ونصلح ما يعطلك.", en: "Already on Odoo? We review it and fix what's holding you back." } },
  ],
  faqH: { ar: "أسئلة عن *الأسعار*", en: "Pricing *questions*" },
  faq: [
    { q: { ar: "لماذا لا تعرضون أسعاراً ثابتة؟", en: "Why no fixed prices on the page?" }, a: { ar: "لأن الكلفة تعتمد على عدد التطبيقات والفروع والربط ونقل البيانات. نحدد الرقم بعد اجتماع مفصّل نفهم فيه طريقة عملك ومتطلباتك.", en: "Cost depends on apps, branches, integrations and data migration. We set the figure after a detailed meeting about how you work and what you need." } },
    { q: { ar: "هل يمكن البدء بباقة صغيرة ثم التوسع؟", en: "Can we start small and grow?" }, a: { ar: "نعم. كثير من الشركات تبدأ بالمحاسبة والمبيعات، ثم تضيف الموارد البشرية والرواتب في مرحلة ثانية.", en: "Yes. Many companies start with accounting and sales, then add HR and payroll in a second phase." } },
    { q: { ar: "كيف تكون الدفعات؟", en: "How are payments structured?" }, a: { ar: "على مراحل مرتبطة بالتسليم: عند البدء، وعند اعتماد التصميم، وعند التشغيل.", en: "In milestones tied to delivery: at kick-off, at design sign-off and at go-live." } },
    { q: { ar: "هل الربط الحكومي مشمول؟", en: "Are government integrations included?" }, a: { ar: "الفوترة الإلكترونية مشمولة في كل الباقات. قوى ومدد والتأمينات والضمان مشمولة من باقة النمو.", en: "E-invoicing is in every package. Qiwa, Mudad, GOSI and SSC are included from Grow upwards." } },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/pricing", c.seoTitle, c.desc) : {};
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = (v: L) => t(v, locale);
  const cell = (v: Cell) => (v === "yes" ? <span className="yes">✓</span> : v === "no" ? <span className="no">—</span> : x(v));

  return (
    <>
      <header className="hero-plain">
        <div className="wrap">
          <p className="eyebrow">{x(c.title)}</p>
          <h1><Rich text={x(c.h1)} /></h1>
          <p className="lead">{x(c.lead)}</p>
        </div>
      </header>

      <section className="sec-tight">
        <div className="wrap price-grid">
          {pkgs.map((p) => (
            <article key={p.id} className={`price-card ${p.featured ? "featured" : ""}`}>
              {p.featured && <span className="tag">{x(c.popular)}</span>}
              <h3>{x(p.name)}</h3>
              <p className="for">{x(p.for)}</p>
              <div className="price">{x(p.price)}<small>{locale === "ar" ? "عرض سعر بعد فهم احتياجك بالتفصيل" : "Quoted once we understand your needs in detail"}</small></div>
              <ul>{p.items.map((i, k) => <li key={k}>{x(i)}</li>)}</ul>
              <div className="price-meta"><span>{x(c.duration)}: <b>{x(p.duration)}</b></span><span><b>{x(p.support)}</b></span></div>
              <Link className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`} href={`/${locale}/contact`}>{x(c.quote)}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.cmpH)} /></h2></div>
          <div className="table-scroll">
            <table className="compare">
              <thead><tr><th scope="col"></th>{pkgs.map((p) => <th key={p.id} scope="col">{x(p.name)}</th>)}</tr></thead>
              <tbody>{rows.map((r, i) => (
                <tr key={i}><th scope="row" style={{ fontWeight: 500 }}>{x(r.f)}</th>{r.v.map((v, k) => <td key={k}>{cell(v)}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap team-band" style={{ alignItems: "start" }}>
          <div>
            <div className="sec-head"><h2><Rich text={x(c.licH)} /></h2></div>
            <p className="lead">{x(c.licP)}</p>
          </div>
          <div>
            <div className="sec-head"><h2><Rich text={x(c.extraH)} /></h2></div>
            <div className="text-cols" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {c.extras.map((e, i) => <div key={i}><h3>{x(e.h)}</h3><p>{x(e.p)}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-tight">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.faqH)} /></h2></div>
          <div className="faq-list">
            {c.faq.map((f, i) => <details key={i} open={i === 0}><summary>{x(f.q)}</summary><p>{x(f.a)}</p></details>)}
          </div>
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
