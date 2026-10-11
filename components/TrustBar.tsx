import type { Locale } from "@/lib/i18n";

/* Team credentials and scope, shown as a clean stats strip. No client claims. */
export function TrustBar({ locale, variant = "light" }: { locale: Locale; variant?: "light" | "plain" }) {
  const ar = locale === "ar";
  const items = [
    { n: "6", l: ar ? "مستشارين معتمدين" : "certified consultants", s: ar ? "شهادة Odoo 19" : "Odoo 19 certification" },
    { n: "5+", l: ar ? "سنوات خبرة" : "years of experience", s: ar ? "في تطبيق Odoo" : "implementing Odoo" },
    { n: "12+", l: ar ? "منصة نربطها" : "platforms we connect", s: ar ? "حكومية وبنوك ودفع وشحن" : "government, banks, payments, shipping" },
    { n: "2", l: ar ? "مكتبان" : "offices", s: ar ? "عمّان والرياض" : "Amman & Riyadh" },
  ];
  return (
    <dl className={`stats-strip ${variant}`}>
      {items.map((i) => (
        <div key={i.n + i.l}>
          <dt><bdi>{i.n}</bdi></dt>
          <dd><b>{i.l}</b><span>{i.s}</span></dd>
        </div>
      ))}
    </dl>
  );
}
