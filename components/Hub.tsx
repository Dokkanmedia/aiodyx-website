import { type Locale } from "@/lib/i18n";
import { LogoPaths } from "./Logo";
import { asset } from "@/lib/asset";

/* The system in the centre with live lines to the platforms it talks to. Sits on the brand gradient band. */
export function Hub({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const nodes: { x: number; y: number; img?: string; text?: string; sub: string }[] = [
    { x: 30, y: 46, img: "jofotara.png", sub: ar ? "الفوترة · الأردن" : "E-invoicing · Jordan" },
    { x: 370, y: 46, img: "zatca.svg", sub: ar ? "فاتورة · السعودية" : "FATOORA · KSA" },
    { x: 400, y: 214, img: "qiwa.png", sub: ar ? "عقود العمل" : "Contracts" },
    { x: 330, y: 362, img: "mudad.png", sub: ar ? "حماية الأجور" : "Wage protection" },
    { x: 60, y: 362, img: "gosi.svg", sub: ar ? "التأمينات" : "Social insurance" },
    { x: 0, y: 214, img: "salla.webp", sub: ar ? "المتاجر" : "Stores" },
  ];
  const W = 120, H = 54;
  const cx = 260, cy = 222;
  return (
    <svg className="hub" viewBox="0 0 520 450" role="img"
      aria-label={ar ? "نظام AIODYX في المنتصف مربوط مع JoFotara وهيئة الزكاة وقوى ومدد والتأمينات والمتاجر" : "The AIODYX system connected to JoFotara, ZATCA, Qiwa, Mudad, GOSI and online stores"}>
      <circle cx={cx} cy={cy} r="190" fill="none" stroke="rgba(255,255,255,.18)" strokeDasharray="2 6" />
      <g stroke="rgba(255,255,255,.55)" strokeWidth="1.5" fill="none">
        {nodes.map((n, i) => (
          <path key={i} className="flow" d={`M${cx} ${cy} L${n.x + W / 2} ${n.y + H / 2}`} style={{ animationDelay: `${-i * 0.27}s` }} />
        ))}
      </g>
      <rect x={cx - 74} y={cy - 46} width="148" height="92" rx="18" fill="#0E1452" stroke="rgba(255,255,255,.35)" />
      <svg x={cx - 58} y={cy - 26} width="116" height="25" viewBox="220 350 1998 424"><LogoPaths mark="#fff" word="#fff" /></svg>
      <text x={cx} y={cy + 24} textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="11.5">{ar ? "نظامك على Odoo" : "Your Odoo system"}</text>
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={n.y} width={W} height={H} rx="12" fill="#fff" />
          {n.img
            ? <image href={asset(`/platforms/${n.img}`)} x={n.x + 12} y={n.y + 8} width={W - 24} height={H - 16} preserveAspectRatio="xMidYMid meet" />
            : <text x={n.x + W / 2} y={n.y + H / 2 + 6} textAnchor="middle" fill="#0E1452" fontSize="17" fontWeight="600">{n.text}</text>}
          <text x={n.x + W / 2} y={n.y + H + 17} textAnchor="middle" fill="rgba(255,255,255,.75)" fontSize="11">{n.sub}</text>
        </g>
      ))}
    </svg>
  );
}
