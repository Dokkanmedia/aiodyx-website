import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { Rich } from "@/components/Rich";
import { TrustBar } from "@/components/TrustBar";
import { contact } from "@/lib/content";
import { type L, isLocale, t } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

/* Purpose, vision, mission and values come from the AIODYX brand guidelines (Sept 2026). */
const c = {
  title: { ar: "من نحن", en: "About us" },
  seoTitle: { ar: "من نحن: فريق Odoo معتمد في عمّان والرياض", en: "About Us: A Certified Odoo Team in Amman & Riyadh" },
  desc: { ar: "AIODYX شريك Odoo رسمي في عمّان والرياض. نبني أنظمة ERP مفصلة تربط الناس والإجراءات والبيانات في نظام واحد.", en: "AIODYX is an official Odoo partner in Amman and Riyadh. We build tailored ERP systems that connect people, processes and data in one system." },
  h1: { ar: "نبسّط عمل الشركات بنظام *واحد مفصّل* عليها", en: "We simplify business with *one system built around you*" },
  lead: {
    ar: "نربط الناس والإجراءات والبيانات في نظام واحد، فتصبح الصورة أوضح، والتحكم أسهل، والنمو أكثر ثقة.",
    en: "We connect people, processes and data in one customised system, giving companies more clarity, control and confidence to grow.",
  },
  vmH: { ar: "ما الذي *نسعى* إليه", en: "What we're *after*" },
  vm: [
    { h: { ar: "الهدف", en: "Purpose" }, p: { ar: "تبسيط عمل الشركات بربط الناس والإجراءات والبيانات في نظام واحد مفصّل، يعطيها وضوحاً وتحكماً وثقة لتنمو.", en: "To simplify business operations by connecting people, processes and data in one customised system, giving companies clarity, control and confidence to grow." } },
    { h: { ar: "الرؤية", en: "Vision" }, p: { ar: "دعنا نخبرك أولاً عن المستقبل الذي نريده: أن نكون المزوّد الأول لتجارب ERP المفصّلة في المنطقة. طموح؟ انتظر حتى ترى رسالتنا.", en: "Let us tell you about the future we want: to become the leading provider of customised ERP experiences in the region. Sounds ambitious? Wait until you see our mission." } },
    { h: { ar: "الرسالة", en: "Mission" }, p: { ar: "رسالتنا هي نجاحك. تبدو عبارة رنانة؟ هي الحقيقة، ونعدك بها. كل ما نريده أن نمكّن الشركات بحلول مصممة لها هي تحديداً. ونعرف أنك تهتم بقيمك، ونحن كذلك.", en: "Our mission is your success. Sounds catchy? It's the truth, and we promise it. All we want is to empower businesses with solutions designed specifically for them. And we know you care about your values. So do we." } },
  ],
  valuesH: { ar: "*قيمنا*", en: "Our *values*" },
  values: [
    { h: { ar: "مبني حولك", en: "Built around you" }, p: { ar: "النظام يتبع طريقة عملك، وليس العكس.", en: "The system follows the way you work, not the other way round." } },
    { h: { ar: "نفهم أولاً", en: "Understand first" }, p: { ar: "لا نقترح حلاً قبل أن نجلس مع أقسامك ونفهم كيف تعمل فعلاً.", en: "We don't propose anything before sitting with your teams and understanding how they really work." } },
    { h: { ar: "معك دائماً", en: "We got you" }, p: { ar: "نبقى بعد الإطلاق. سؤالك له جواب، ومشكلتك لها صاحب.", en: "We stay after go-live. Your question gets an answer and your problem gets an owner." } },
    { h: { ar: "نبسّط المعقّد", en: "Simplify the complex" }, p: { ar: "نشرح التقنية بلغة يفهمها الجميع، ونبني شاشات يستخدمها فريقك من اليوم الأول.", en: "We explain technology in plain language and build screens your team can use from day one." } },
    { h: { ar: "نتطور دائماً", en: "Always evolving" }, p: { ar: "نظامك ينمو معك، ونحن نتعلم من كل مشروع لنجعل التالي أفضل.", en: "Your system grows with you, and we learn from every project to make the next one better." } },
  ],
  officesH: { ar: "أين *تجدنا*", en: "Where to *find us*" },
  teamH: { ar: "فريق *معتمد* في Odoo 19", en: "A team *certified* on Odoo 19" },
  teamLead: { ar: "أكثر من خمس سنوات في تطبيق Odoo، وستة مستشارين يحملون شهادة Odoo 19 الرسمية. نعرف التطبيقات من الداخل، من المحاسبة والمخزون إلى الموارد البشرية والرواتب.", en: "Over five years implementing Odoo, and six consultants holding the official Odoo 19 certification. We know the apps from the inside, from accounting and inventory to HR and payroll." },
  whyH: { ar: "لماذا تبدأ *معنا*؟", en: "Why start *with us*?" },
  whyLead: { ar: "هذا ما نقدمه لك قبل أن تقرر، وطوال العمل معنا.", en: "Here's what you get before you decide, and all the way through." },
  why: [
    { h: { ar: "شريك Odoo رسمي", en: "Official Odoo partner" }, p: { ar: "شراكة معتمدة من Odoo، ووصول مباشر لأدواتها ودعمها.", en: "An accredited Odoo partnership with direct access to its tools and support." } },
    { h: { ar: "ترى النظام قبل أن تقرر", en: "See it before you decide" }, p: { ar: "نعرض عليك Odoo بالعربي على سيناريو قريب من عملك، فتحكم بنفسك.", en: "We show you Odoo in Arabic on a scenario close to your business, so you can judge for yourself." } },
    { h: { ar: "نبدأ بخطوة صغيرة", en: "Start with a small step" }, p: { ar: "يمكن أن نبدأ بتطبيق أو اثنين، وتتوسع عندما تكون مرتاحاً للنتيجة.", en: "We can start with one or two apps and expand when you're happy with the result." } },
    { h: { ar: "بياناتك ملكك", en: "Your data stays yours" }, p: { ar: "Odoo مفتوح المصدر، وبياناتك قابلة للتصدير متى شئت، دون احتجاز.", en: "Odoo is open source and your data can be exported whenever you want. No lock-in." } },
    { h: { ar: "فريق معتمد", en: "A certified team" }, p: { ar: "ستة مستشارين يحملون شهادة Odoo 19، وخبرة تتجاوز خمس سنوات في تطبيقه.", en: "Six consultants certified on Odoo 19, with over five years of hands-on Odoo experience." } },
    { h: { ar: "دعم بالعربية", en: "Support in Arabic" }, p: { ar: "فريق في عمّان والرياض يتكلم لغتك ويعرف أنظمة البلدين.", en: "A team in Amman and Riyadh that speaks your language and knows both countries' rules." } },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/about", c.seoTitle, c.desc) : {};
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const x = (v: L) => t(v, locale);
  const ar = locale === "ar";

  return (
    <>
      <header className="hero-plain">
        <div className="wrap feature" style={{ paddingBlock: 0 }}>
          <div>
            <p><span className="tagline">Simplify. Automate. Grow.</span></p>
            <h1><Rich text={x(c.h1)} /></h1>
            <p className="lead">{x(c.lead)}</p>
            <div className="hero-actions"><Link className="btn btn-primary" href={`/${locale}/contact`}>{ar ? "تعرّف علينا في استشارة" : "Meet us in a consultation"}</Link></div>
          </div>
          <div className="hero-photo"><Image src="/stock/team.jpg" alt="" fill priority sizes="(max-width: 960px) 100vw, 55vw" style={{ objectFit: "cover" }} /></div>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.vmH)} /></h2></div>
          {c.vm.map((v, i) => <div key={i} className="value-row"><h3>{x(v.h)}</h3><p>{x(v.p)}</p></div>)}
        </div>
      </section>

      <section className="sec integ">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.valuesH)} /></h2></div>
          <div className="text-cols">
            {c.values.map((v, i) => <div key={i}><h3>{x(v.h)}</h3><p>{x(v.p)}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec-tight" id="team">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.teamH)} /></h2><p className="lead">{x(c.teamLead)}</p></div>
          <TrustBar locale={locale} variant="plain" />
        </div>
      </section>

      <section className="sec" id="why">
        <div className="wrap">
          <div className="sec-head"><h2><Rich text={x(c.whyH)} /></h2><p className="lead">{x(c.whyLead)}</p></div>
          <div className="why-grid">
            {c.why.map((w, i) => <div key={i} className="why-card"><span className="why-n">{String(i + 1).padStart(2, "0")}</span><h3>{x(w.h)}</h3><p>{x(w.p)}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec-tight">
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
      <Cta locale={locale} />
    </>
  );
}
