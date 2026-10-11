import Link from "next/link";
import { apps, contact } from "@/lib/content";
import { industries } from "@/lib/industries";
import { type Locale, t, ui } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Footer({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const x = (v: { ar: string; en: string }) => t(v, locale);
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot">
          <div>
            <Logo />
            <p className="tagline" style={{ marginBlockStart: 10 }}>Simplify. Automate. Grow.</p>
            <p>{ar ? "نبني أنظمة ERP على Odoo ونربطها بالمنصات الحكومية في الأردن والسعودية." : "We build ERP systems on Odoo and connect them to government platforms in Jordan and Saudi Arabia."}</p>
            <ul style={{ marginBlockStart: 16 }}>
              {contact.jo.slice(0, 1).concat(contact.sa).map((c) => <li key={c.phone}>{x(c.label)}: <span className="ltr">{c.phone}</span></li>)}
              <li>{x(contact.hours)}</li>
            </ul>
          </div>
          <div>
            <h4>{x(ui.nav.apps)}</h4>
            <ul>{apps.slice(0, 8).map((a) => <li key={a.slug}><Link href={`/${locale}/apps/${a.slug}`}>{x(a.name)}</Link></li>)}</ul>
          </div>
          <div>
            <h4>{ar ? "القطاعات" : "Industries"}</h4>
            <ul>{industries.map((i) => <li key={i.slug}><Link href={`/${locale}/industries/${i.slug}`}>{x(i.name)}</Link></li>)}</ul>
          </div>
          <div>
            <h4>AIODYX</h4>
            <ul>
              <li><Link href={`/${locale}/integrations`}>{x(ui.nav.integrations)}</Link></li>
              <li><Link href={`/${locale}/start`}>{x(ui.nav.start)}</Link></li>
              <li><Link href={`/${locale}/pricing`}>{x(ui.nav.pricing)}</Link></li>
              <li><Link href={`/${locale}/learn`}>{x(ui.nav.learn)}</Link></li>
              <li><Link href={`/${locale}/about`}>{x(ui.nav.about)}</Link></li>
              <li><Link href={`/${locale}/contact`}>{x(ui.nav.contact)}</Link></li>
            </ul>
          </div>
        </div>
        <p className="copy">© {new Date().getFullYear()} AIODYX</p>
      </div>
    </footer>
  );
}
