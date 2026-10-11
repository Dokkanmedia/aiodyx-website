import { platforms } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";
import { asset } from "@/lib/asset";

/* Endless strip of partner platform logos. The list is rendered twice so the loop is seamless. */
export function LogoMarquee({ locale }: { locale: Locale }) {
  const items = platforms
    .flatMap((p) => (p.logos?.length ? p.logos.map((f) => ({ p, f })) : [{ p, f: "" }]))
    .filter(({ p, f }) => p.slug !== "banks" && f !== "mada.svg");
  const row = items.map(({ p, f }, i) => (
    <a key={p.slug + f + i} href={`/${locale}/integrations/${p.slug}`} title={t(p.name, locale)}>
      {f ? <img src={asset(`/platforms/${f}`)} alt={t(p.name, locale)} loading="lazy" /> : <b>{t(p.name, locale).split(" · ")[0]}</b>}
    </a>
  ));
  return (
    <div className="marquee" aria-label={locale === "ar" ? "المنصات المربوطة" : "Connected platforms"}>
      <div className="marquee-track">{row}<span aria-hidden="true" style={{ display: "contents" }}>{row}</span></div>
    </div>
  );
}
