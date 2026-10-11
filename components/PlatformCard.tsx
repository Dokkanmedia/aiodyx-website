import Link from "next/link";
import type { Platform } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";
import { PlatformLogo } from "./PlatformLogo";

export function PlatformCard({ p, locale, withId = false, children }: { p: Platform; locale: Locale; withId?: boolean; children?: React.ReactNode }) {
  return (
    <div className="plat" id={withId ? p.slug : undefined}>
      <PlatformLogo p={p} locale={locale} />
      <div>
        <h3>{t(p.name, locale)}</h3>
        <span className="who">{t(p.owner, locale)}</span>
        <p>{t(p.summary, locale)}</p>
        <ol className="steps-ol">{p.steps.map((s, i) => <li key={i}>{t(s, locale)}</li>)}</ol>
        {children}
        <Link className="link" href={`/${locale}/integrations/${p.slug}`} style={{ marginBlockStart: 8 }}>{locale === "ar" ? "تفاصيل الربط" : "Integration details"}</Link>
      </div>
    </div>
  );
}
