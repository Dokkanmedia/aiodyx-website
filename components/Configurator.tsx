"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { type AppCat, appCats, apps, platformBySlug } from "@/lib/content";
import { type L, type Locale, t } from "@/lib/i18n";
import { AppIcon } from "./AppIcon";
import { PlatformLogo } from "./PlatformLogo";

type Country = "sa" | "jo" | "both";
type Size = "s" | "m" | "l";
type Branches = "1" | "few" | "many";

const C = {
  step1: { ar: "١. اختر التطبيقات التي تحتاجها", en: "1. Pick the apps you need" },
  step2: { ar: "٢. أخبرنا عن شركتك", en: "2. Tell us about your company" },
  country: { ar: "أين تعمل؟", en: "Where do you operate?" },
  size: { ar: "عدد الموظفين", en: "Employees" },
  branches: { ar: "عدد الفروع", en: "Branches" },
  sa: { ar: "السعودية", en: "Saudi Arabia" }, jo: { ar: "الأردن", en: "Jordan" }, both: { ar: "البلدين", en: "Both" },
  s: { ar: "حتى 25", en: "Up to 25" }, m: { ar: "26 إلى 150", en: "26–150" }, l: { ar: "أكثر من 150", en: "150+" },
  b1: { ar: "فرع واحد", en: "One" }, bf: { ar: "2 إلى 5", en: "2–5" }, bm: { ar: "أكثر من 5", en: "6+" },
  yourSystem: { ar: "نظامك المقترح", en: "Your proposed system" },
  empty: { ar: "اختر تطبيقاً واحداً على الأقل لنقترح عليك الباقة.", en: "Pick at least one app and we'll suggest a package." },
  pkg: { ar: "الباقة المناسبة", en: "Suggested package" },
  apps: { ar: "تطبيق", en: "apps" },
  integ: { ar: "منصات سنربطها", en: "Platforms we'll connect" },
  duration: { ar: "المدة المتوقعة", en: "Expected timeline" },
  cta: { ar: "اطلب عرض سعر لهذا النظام", en: "Get a quote for this system" },
  note: { ar: "اقتراح مبدئي. نحدد النطاق والسعر بعد اجتماع مفصّل نفهم فيه طبيعة عملك.", en: "An initial suggestion. We set scope and price after a detailed meeting about how you work." },
  clear: { ar: "مسح الاختيار", en: "Clear" },
};

const PKG: Record<string, { name: L; duration: L }> = {
  start: { name: { ar: "البداية", en: "Start" }, duration: { ar: "4 إلى 6 أسابيع", en: "4–6 weeks" } },
  grow: { name: { ar: "النمو", en: "Grow" }, duration: { ar: "8 إلى 12 أسبوعاً", en: "8–12 weeks" } },
  enterprise: { name: { ar: "المؤسسات", en: "Enterprise" }, duration: { ar: "على مراحل حسب النطاق", en: "Phased, by scope" } },
};
const GOV: Record<Country, string[]> = { sa: ["zatca", "qiwa", "mudad", "gosi"], jo: ["jofotara", "ssc"], both: ["zatca", "qiwa", "mudad", "gosi", "jofotara", "ssc"] };
const PEOPLE = new Set(["hr", "attendance-payroll"]);

export function Configurator({ locale }: { locale: Locale }) {
  const x = (v: L) => t(v, locale);
  const [picked, setPicked] = useState<string[]>(["accounting", "crm-sales", "inventory-purchase"]);
  const [country, setCountry] = useState<Country>("sa");
  const [size, setSize] = useState<Size>("m");
  const [branches, setBranches] = useState<Branches>("few");

  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const result = useMemo(() => {
    if (!picked.length) return null;
    const n = picked.length;
    const hasPeople = picked.some((s) => PEOPLE.has(s));
    const pkg = n > 8 || size === "l" || branches === "many" || country === "both" ? "enterprise"
      : n > 3 || hasPeople || branches === "few" ? "grow" : "start";
    const plat = new Set<string>();
    const gov = GOV[country];
    picked.forEach((s) => apps.find((a) => a.slug === s)?.platforms.forEach((p) => {
      const pl = platformBySlug(p);
      if (pl && (pl.group === "biz" || gov.includes(p))) plat.add(p);
    }));
    // e-invoicing always applies once accounting, POS or store is in scope
    if (picked.some((s) => ["accounting", "point-of-sale", "ecommerce"].includes(s))) gov.filter((g) => g === "zatca" || g === "jofotara").forEach((g) => plat.add(g));
    if (hasPeople) gov.filter((g) => g !== "zatca" && g !== "jofotara").forEach((g) => plat.add(g));
    return { pkg, platforms: [...plat] };
  }, [picked, country, size, branches]);

  const query = new URLSearchParams({ apps: picked.join(","), country, size, branches, pkg: result?.pkg ?? "" }).toString();
  const seg = <T extends string>(val: T, set: (v: T) => void, opts: [T, L][], id: string) => (
    <div className="cur" role="radiogroup" aria-labelledby={id}>
      {opts.map(([v, l]) => <button key={v} type="button" role="radio" aria-checked={val === v} aria-pressed={val === v} onClick={() => set(v)}>{x(l)}</button>)}
    </div>
  );

  return (
    <div className="calc">
      <div className="calc-in">
        <div>
          <div className="range-top" style={{ marginBlockEnd: 12 }}>
            <h3 style={{ margin: 0 }}>{x(C.step1)}</h3>
            {picked.length > 0 && <button type="button" className="link" style={{ background: "none", border: 0 }} onClick={() => setPicked([])}>{x(C.clear)}</button>}
          </div>
          {appCats.map((cat: { id: AppCat; name: L }) => (
            <div key={cat.id} style={{ marginBlockEnd: 14 }}>
              <p className="lbl" style={{ marginBlockEnd: 8 }}>{x(cat.name)}</p>
              <div className="pick-grid">
                {apps.filter((a) => a.cat === cat.id).map((a) => (
                  <button key={a.slug} type="button" className="pick" aria-pressed={picked.includes(a.slug)} onClick={() => toggle(a.slug)}>
                    <AppIcon icon={a.icon} /><span>{x(a.name)}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gap: 16 }}>
          <h3 style={{ margin: 0 }}>{x(C.step2)}</h3>
          <div className="range-top"><span className="lbl" id="cfg-country">{x(C.country)}</span>{seg(country, setCountry, [["sa", C.sa], ["jo", C.jo], ["both", C.both]], "cfg-country")}</div>
          <div className="range-top"><span className="lbl" id="cfg-size">{x(C.size)}</span>{seg(size, setSize, [["s", C.s], ["m", C.m], ["l", C.l]], "cfg-size")}</div>
          <div className="range-top"><span className="lbl" id="cfg-br">{x(C.branches)}</span>{seg(branches, setBranches, [["1", C.b1], ["few", C.bf], ["many", C.bm]], "cfg-br")}</div>
        </div>
      </div>

      <aside className="calc-out" aria-live="polite">
        <span className="lbl" style={{ color: "rgba(255,255,255,.75)" }}>{x(C.yourSystem)}</span>
        {!result ? <p>{x(C.empty)}</p> : (
          <>
            <div className="total"><span>{x(C.pkg)}</span><b>{x(PKG[result.pkg].name)}</b></div>
            <div className="cfg-apps">
              {picked.map((s) => { const a = apps.find((z) => z.slug === s)!; return <span key={s} className="cfg-chip"><AppIcon icon={a.icon} size={18} />{x(a.name)}</span>; })}
            </div>
            <div className="row"><span>{picked.length} {x(C.apps)}</span><b>{x(PKG[result.pkg].duration)}</b></div>
            {result.platforms.length > 0 && (
              <div style={{ display: "grid", gap: 8 }}>
                <span className="lbl" style={{ color: "rgba(255,255,255,.75)" }}>{x(C.integ)}</span>
                <div className="cfg-logos">{result.platforms.map((s) => { const p = platformBySlug(s)!; return <PlatformLogo key={s} p={p} locale={locale} size="sm" />; })}</div>
              </div>
            )}
            <Link className="btn" style={{ background: "#fff", color: "#0E1452", justifyContent: "center" }} href={`/${locale}/contact?${query}`}>{x(C.cta)}</Link>
          </>
        )}
        <p className="note">{x(C.note)}</p>
      </aside>
    </div>
  );
}
