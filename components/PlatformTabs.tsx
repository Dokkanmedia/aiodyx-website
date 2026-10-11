"use client";
import { useState } from "react";
import { platforms } from "@/lib/content";
import { type Locale, t, ui } from "@/lib/i18n";
import { PlatformCard } from "./PlatformCard";

export function PlatformTabs({ locale }: { locale: Locale }) {
  const [c, setC] = useState<"sa" | "jo">("sa");
  const tabs = [
    { id: "sa" as const, label: ui.common.saudi },
    { id: "jo" as const, label: ui.common.jordan },
  ];
  return (
    <>
      <div className="tabs" role="tablist" aria-label={locale === "ar" ? "الدولة" : "Country"}>
        {tabs.map((tb) => (
          <button key={tb.id} type="button" role="tab" id={`tab-${tb.id}`} aria-selected={c === tb.id} aria-controls="plat-panel" onClick={() => setC(tb.id)}>
            {t(tb.label, locale)}
          </button>
        ))}
      </div>
      <div className="plats" id="plat-panel" role="tabpanel" aria-labelledby={`tab-${c}`}>
        {platforms.filter((p) => p.group === c).map((p) => <PlatformCard key={p.slug} p={p} locale={locale} />)}
      </div>
    </>
  );
}
