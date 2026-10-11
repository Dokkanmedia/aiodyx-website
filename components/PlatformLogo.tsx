import type { Platform } from "@/lib/content";
import { type Locale, t } from "@/lib/i18n";
import { asset } from "@/lib/asset";

/* Official platform logos on a white tile. Platforms without a supplied logo show their name as text. */
export function PlatformLogo({ p, locale, size = "md" }: { p: Platform; locale: Locale; size?: "sm" | "md" }) {
  const name = t(p.name, locale).split(" · ")[0];
  return (
    <span className={`plogo plogo-${size} ${p.logos && p.logos.length > 1 ? "multi" : ""}`}>
      {p.logos?.length
        ? p.logos.map((f) => <img key={f} src={asset(`/platforms/${f}`)} alt={name} loading="lazy" />)
        : <b>{name}</b>}
    </span>
  );
}
