"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { appCats, apps } from "@/lib/content";
import { industries } from "@/lib/industries";
import { type Locale, other, t, ui } from "@/lib/i18n";
import { AppIcon, IndustryIcon } from "./AppIcon";
import { Logo } from "./Logo";

const L = {
  industries: { ar: "القطاعات", en: "Industries" },
  allApps: { ar: "عرض كل التطبيقات", en: "View all apps" },
  allInd: { ar: "كل القطاعات", en: "All industries" },
  need: { ar: "لا تجد ما تحتاجه؟ نبنيه لك.", en: "Can't find what you need? We build it." },
  menu: { ar: "القائمة", en: "Menu" },
};

export function Nav({ locale }: { locale: Locale }) {
  const path = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<null | "apps" | "ind">(null);
  const ref = useRef<HTMLElement>(null);
  const switchTo = `/${other(locale)}${path.replace(/^\/(ar|en)/, "")}`;
  const x = (v: { ar: string; en: string }) => t(v, locale);

  useEffect(() => { setMega(null); setOpen(false); }, [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(null);
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setMega(null); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, []);

  const trigger = (id: "apps" | "ind", label: string) => (
    <button type="button" className="nav-trigger" aria-expanded={mega === id} aria-controls={`mega-${id}`}
      onClick={() => setMega(mega === id ? null : id)} onMouseEnter={() => setMega(id)}>
      {label}
    </button>
  );

  return (
    <nav className="nav" ref={ref} aria-label={locale === "ar" ? "القائمة الرئيسية" : "Main"} onMouseLeave={() => setMega(null)}>
      <div className="wrap">
        <Link href={`/${locale}`} aria-label="AIODYX"><Logo /></Link>
        <ul>
          <li className="nav-item">{trigger("apps", x(ui.nav.apps))}</li>
          <li className="nav-item">{trigger("ind", x(L.industries))}</li>
          <li><Link href={`/${locale}/integrations`} onMouseEnter={() => setMega(null)}>{x(ui.nav.integrations)}</Link></li>
          <li><Link href={`/${locale}/pricing`} onMouseEnter={() => setMega(null)}>{x(ui.nav.pricing)}</Link></li>
          <li><Link href={`/${locale}/learn`} onMouseEnter={() => setMega(null)}>{x(ui.nav.learn)}</Link></li>
          <li><Link href={`/${locale}/about`} onMouseEnter={() => setMega(null)}>{x(ui.nav.about)}</Link></li>
        </ul>
        <span className="sp" />
        <Link className="lang" href={switchTo} hrefLang={other(locale)}>{locale === "ar" ? "EN" : "عربي"}</Link>
        <Link className="btn btn-ghost btn-sm nav-start" href={`/${locale}/start`}>{x(ui.nav.start)}</Link>
        <Link className="btn btn-primary btn-sm" href={`/${locale}/contact`}>{x(ui.cta.consultShort)}</Link>
        <button type="button" className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{x(L.menu)}</button>
      </div>

      {mega === "apps" && (
        <div className="mega" id="mega-apps">
          <div className="wrap">
            {appCats.map((c) => (
              <div key={c.id}>
                <h4>{x(c.name)}</h4>
                <div className="mega-links">
                  {apps.filter((a) => a.cat === c.id).map((a) => (
                    <Link key={a.slug} className="mega-link" href={`/${locale}/apps/${a.slug}`}>
                      <AppIcon icon={a.icon} />
                      <span>{x(a.name)}<small>{x(a.short)}</small></span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mega-foot">
              <span className="lbl">{x(L.need)}</span>
              <Link className="link" href={`/${locale}/apps`}>{x(L.allApps)}</Link>
            </div>
          </div>
        </div>
      )}
      {mega === "ind" && (
        <div className="mega ind" id="mega-ind">
          <div className="wrap">
            {industries.map((i) => (
              <Link key={i.slug} className="mega-link" href={`/${locale}/industries/${i.slug}`}>
                <IndustryIcon icon={i.icon} />
                <span>{x(i.name)}<small>{x(i.short)}</small></span>
              </Link>
            ))}
            <div className="mega-foot">
              <span className="lbl">{x(L.need)}</span>
              <Link className="link" href={`/${locale}/industries`}>{x(L.allInd)}</Link>
            </div>
          </div>
        </div>
      )}

      <div className="mobile-menu" id="mobile-menu" data-open={open}>
        <Link href={`/${locale}/apps`}>{x(ui.nav.apps)}</Link>
        <Link href={`/${locale}/industries`}>{x(L.industries)}</Link>
        <Link href={`/${locale}/integrations`}>{x(ui.nav.integrations)}</Link>
        <Link href={`/${locale}/start`}>{x(ui.nav.start)}</Link>
        <Link href={`/${locale}/pricing`}>{x(ui.nav.pricing)}</Link>
        <Link href={`/${locale}/learn`}>{x(ui.nav.learn)}</Link>
        <Link href={`/${locale}/about`}>{x(ui.nav.about)}</Link>
        <Link href={`/${locale}/contact`}>{x(ui.nav.contact)}</Link>
        <Link className="btn btn-primary" href={`/${locale}/contact`}>{x(ui.cta.consult)}</Link>
      </div>
    </nav>
  );
}
