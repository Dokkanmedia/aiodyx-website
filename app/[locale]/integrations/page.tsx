import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { PlatformCard } from "@/components/PlatformCard";
import { appsUsing, platforms } from "@/lib/content";
import { type L, isLocale, t, ui } from "@/lib/i18n";
import { pageMeta } from "@/lib/meta";

const c = {
  title: { ar: "الربط الحكومي والتكاملات", en: "Integrations" },
  seoTitle: { ar: "ربط Odoo مع فاتورة الزكاة وJoFotara وقوى ومدد", en: "Connect Odoo to ZATCA, JoFotara, Qiwa & Mudad" },
  desc: { ar: "ربط نظامك مع فاتورة وJoFotara وقوى ومدد والتأمينات والضمان والبنوك وبوابات الدفع والشحن والمتاجر.", en: "Connect your system to ZATCA, JoFotara, Qiwa, Mudad, GOSI, Social Security, banks, payments, shipping and stores." },
  eyebrow: { ar: "الربط الحكومي", en: "Integrations" },
  h1: { ar: "نظامك يتكلم مع كل منصة تتعامل معها", en: "Your system talks to every platform you deal with" },
  lead: {
    ar: "الفاتورة، والعقد، والراتب، والشحنة، والدفعة. كل واحدة منها تخرج من نظامك إلى المنصة المعنية دون تحميل ملفات أو إعادة إدخال.",
    en: "Invoices, contracts, payroll, shipments and payments each leave your system for the right platform, with no file uploads or retyping.",
  },
  cmpH: { ar: "Odoo وحده، أو Odoo مع AIODYX", en: "Odoo on its own, or Odoo with AIODYX" },
  cmpLead: { ar: "Odoo قاعدة ممتازة. الفرق في الربط المحلي والتنفيذ والدعم.", en: "Odoo is an excellent base. The difference is local integration, implementation and support." },
  colA: { ar: "Odoo وحده", en: "Odoo alone" },
  colB: { ar: "Odoo مع AIODYX", en: "Odoo with AIODYX" },
  sa: { ar: "السعودية", en: "Saudi Arabia" },
  saSub: { ar: "هيئة الزكاة، وزارة الموارد البشرية، التأمينات", en: "ZATCA, Ministry of HR, GOSI" },
  jo: { ar: "الأردن", en: "Jordan" },
  joSub: { ar: "ضريبة الدخل والمبيعات، الضمان الاجتماعي", en: "Income & Sales Tax, Social Security" },
  biz: { ar: "البنوك والدفع والشحن والمتاجر", en: "Banks, payments, shipping & stores" },
  bizSub: { ar: "في البلدين", en: "In both countries" },
};

type Mark = "yes" | "part" | "no";
const rows: { f: L; a: Mark; b: Mark }[] = [
  { f: { ar: "الفوترة الإلكترونية ZATCA وJoFotara", en: "ZATCA and JoFotara e-invoicing" }, a: "part", b: "yes" },
  { f: { ar: "مزامنة العقود مع قوى", en: "Contract sync with Qiwa" }, a: "no", b: "yes" },
  { f: { ar: "ملف حماية الأجور إلى مدد", en: "Wage-protection file to Mudad" }, a: "no", b: "yes" },
  { f: { ar: "قواعد رواتب سعودية وأردنية كاملة", en: "Full Saudi and Jordanian payroll rules" }, a: "part", b: "yes" },
  { f: { ar: "صيغ ملفات البنوك المحلية", en: "Local bank file formats" }, a: "part", b: "yes" },
  { f: { ar: "ربط أجهزة البصمة", en: "Biometric device integration" }, a: "no", b: "yes" },
  { f: { ar: "تخصيص على طريقة عملك", en: "Customised to how you work" }, a: "no", b: "yes" },
  { f: { ar: "تدريب ودعم بالعربية", en: "Training and support in Arabic" }, a: "no", b: "yes" },
];
const markLabel: Record<Mark, L> = {
  yes: { ar: "✓", en: "✓" },
  part: { ar: "يحتاج إعداداً", en: "Needs setup" },
  no: { ar: "—", en: "—" },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMeta(locale, "/integrations", c.seoTitle, c.desc) : {};
}

export default async function IntegrationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const groups = [
    { id: "sa" as const, h: c.sa, s: c.saSub },
    { id: "jo" as const, h: c.jo, s: c.joSub },
    { id: "biz" as const, h: c.biz, s: c.bizSub },
  ];
  return (
    <>
      <header className="hero page-hero">
        <div className="wrap">
          <p className="eyebrow">{t(c.eyebrow, locale)}</p>
          <h1>{t(c.h1, locale)}</h1>
          <p className="lead">{t(c.lead, locale)}</p>
        </div>
      </header>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t(c.cmpH, locale)}</h2>
            <p className="lead">{t(c.cmpLead, locale)}</p>
          </div>
          <div className="table-scroll">
            <table className="compare">
              <thead><tr><th scope="col"></th><th scope="col">{t(c.colA, locale)}</th><th scope="col">{t(c.colB, locale)}</th></tr></thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i}>
                    <th scope="row" style={{ fontWeight: 500 }}>{t(r.f, locale)}</th>
                    <td className={r.a === "yes" ? "yes" : "no"}>{t(markLabel[r.a], locale)}</td>
                    <td className={r.b === "yes" ? "yes" : "no"}>{t(markLabel[r.b], locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {groups.map((g) => (
            <div key={g.id}>
              <div className="group-title"><h2>{t(g.h, locale)}</h2><span>{t(g.s, locale)}</span></div>
              <div className="plats">
                {platforms.filter((p) => p.group === g.id).map((p) => {
                  const used = appsUsing(p.slug);
                  return (
                    <PlatformCard key={p.slug} p={p} locale={locale} withId>
                      {used.length > 0 && (
                        <div className="chips" style={{ marginBlockStart: 10 }}>
                          <span className="lbl">{t(ui.common.usedBy, locale)}:</span>
                          {used.map((a) => <Link key={a.slug} className="chip" href={`/${locale}/apps/${a.slug}`}>{t(a.name, locale)}</Link>)}
                        </div>
                      )}
                    </PlatformCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Cta locale={locale} />
    </>
  );
}
