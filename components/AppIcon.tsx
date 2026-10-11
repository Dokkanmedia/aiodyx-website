import type { IconKey } from "@/lib/content";
import type { IndustryIcon as IndKey } from "@/lib/industries";

/*
 * Flat, multi-colour geometric app marks. Shapes overlap with mix-blend multiply inside an
 * isolated group, so overlaps darken the way printed inks do, on any background.
 */
const V = "#7C3AED", O = "#FF7A45", T = "#14B8A6", Y = "#F5B82E", B = "#3B82F6", P = "#EC4899";
const m = { mixBlendMode: "multiply" as const };

const marks: Record<IconKey, React.ReactNode> = {
  fin: (<>
    <rect x="7" y="5" width="24" height="32" rx="5" fill={V} style={m} />
    <circle cx="32" cy="31" r="11" fill={Y} style={m} />
    <rect x="12" y="12" width="13" height="3" rx="1.5" fill="#fff" opacity=".9" />
    <rect x="12" y="18" width="9" height="3" rx="1.5" fill="#fff" opacity=".9" />
  </>),
  crm: (<>
    <circle cx="17" cy="17" r="10" fill={B} style={m} />
    <circle cx="31" cy="17" r="10" fill={P} style={m} />
    <rect x="6" y="29" width="36" height="13" rx="6.5" fill={V} style={m} />
  </>),
  inv: (<>
    <path d="M24 5 42 14 24 23 6 14Z" fill={Y} style={m} />
    <path d="M6 14 24 23V43L6 34Z" fill={O} style={m} />
    <path d="M42 14 24 23V43L42 34Z" fill={T} style={m} />
  </>),
  hr: (<>
    <circle cx="22" cy="15" r="9" fill={O} style={m} />
    <rect x="7" y="25" width="30" height="18" rx="9" fill={V} style={m} />
    <circle cx="36" cy="12" r="6" fill={T} style={m} />
  </>),
  pay: (<>
    <circle cx="19" cy="22" r="14" fill={T} style={m} />
    <rect x="18" y="22" width="25" height="18" rx="4" fill={V} style={m} />
    <circle cx="30.5" cy="31" r="4" fill="#fff" opacity=".9" />
    <path d="M19 13v9l5 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".9" />
  </>),
  prj: (<>
    <rect x="5" y="7" width="11" height="34" rx="4" fill={V} style={m} />
    <rect x="18.5" y="7" width="11" height="24" rx="4" fill={O} style={m} />
    <rect x="32" y="7" width="11" height="15" rx="4" fill={T} style={m} />
  </>),
  mfg: (<>
    <rect x="19" y="4" width="10" height="40" rx="4" fill={B} style={m} />
    <rect x="4" y="19" width="40" height="10" rx="4" fill={B} style={m} />
    <circle cx="24" cy="24" r="13" fill={O} style={m} />
    <circle cx="24" cy="24" r="5" fill="#fff" opacity=".9" />
  </>),
  hd: (<>
    <path d="M6 10a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H17l-8 7v-7.5A5 5 0 0 1 6 24Z" fill={V} style={m} />
    <circle cx="33" cy="32" r="11" fill={T} style={m} />
  </>),
  bi: (<>
    <circle cx="21" cy="27" r="15" fill={T} style={m} />
    <path d="M21 27V12a15 15 0 0 1 15 15Z" fill={V} style={m} />
    <rect x="35" y="5" width="8" height="18" rx="3" fill={O} style={m} />
  </>),
  ai: (<>
    <path d="M22 4c1.6 8.8 5.2 12.4 14 14-8.8 1.6-12.4 5.2-14 14-1.6-8.8-5.2-12.4-14-14 8.8-1.6 12.4-5.2 14-14Z" fill={V} style={m} />
    <circle cx="34" cy="34" r="9" fill={P} style={m} />
    <path d="M38 6c.7 3.6 2.4 5.3 6 6-3.6.7-5.3 2.4-6 6-.7-3.6-2.4-5.3-6-6 3.6-.7 5.3-2.4 6-6Z" fill={Y} style={m} />
  </>),
  pos: (<>
    <rect x="5" y="6" width="30" height="22" rx="4" fill={B} style={m} />
    <rect x="12" y="24" width="31" height="17" rx="4" fill={O} style={m} />
    <rect x="18" y="30" width="8" height="3" rx="1.5" fill="#fff" opacity=".9" />
    <rect x="29" y="30" width="8" height="3" rx="1.5" fill="#fff" opacity=".9" />
  </>),
  shop: (<>
    <path d="M14 18v-3a10 10 0 0 1 20 0v3" stroke={V} strokeWidth="4" fill="none" strokeLinecap="round" />
    <rect x="6" y="16" width="36" height="27" rx="6" fill={P} style={m} />
    <circle cx="33" cy="33" r="9" fill={Y} style={m} />
  </>),
  exp: (<>
    <path d="M9 5h24v36l-4-3-4 3-4-3-4 3-4-3-4 3Z" fill={T} style={m} />
    <circle cx="33" cy="30" r="11" fill={Y} style={m} />
    <rect x="14" y="13" width="13" height="3" rx="1.5" fill="#fff" opacity=".9" />
    <rect x="14" y="20" width="9" height="3" rx="1.5" fill="#fff" opacity=".9" />
  </>),
  doc: (<>
    <rect x="6" y="5" width="23" height="31" rx="4" fill={T} style={m} />
    <rect x="15" y="12" width="25" height="31" rx="4" fill={V} style={m} />
    <path d="M21 34c3-5 5 1 8-3s4 2 6-1" stroke="#fff" strokeWidth="2.6" fill="none" strokeLinecap="round" opacity=".95" />
  </>),
  mkt: (<>
    <path d="M6 18h9l18-11v34L15 30H6Z" fill={O} style={m} />
    <rect x="9" y="27" width="8" height="15" rx="3" fill={V} style={m} />
    <circle cx="38" cy="24" r="7" fill={P} style={m} />
  </>),
  fleet: (<>
    <path d="M5 30v-7l6-10h22l9 10v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z" fill={Y} style={m} />
    <rect x="13" y="16" width="17" height="8" rx="2" fill={B} style={m} />
    <circle cx="14" cy="35" r="6" fill={V} style={m} />
    <circle cx="34" cy="35" r="6" fill={V} style={m} />
  </>),
};

const ind: Record<IndKey, React.ReactNode> = {
  retail: (<>
    <path d="M5 16 9 6h30l4 10Z" fill={O} style={m} />
    <rect x="7" y="16" width="34" height="27" rx="3" fill={B} style={m} />
    <rect x="19" y="27" width="10" height="16" rx="2" fill={Y} style={m} />
  </>),
  dist: (<>
    <rect x="4" y="12" width="26" height="22" rx="3" fill={V} style={m} />
    <path d="M30 18h8l6 7v9H30Z" fill={T} style={m} />
    <circle cx="13" cy="36" r="5" fill={O} style={m} />
    <circle cx="36" cy="36" r="5" fill={O} style={m} />
  </>),
  factory: (<>
    <path d="M4 43V22l11 7v-7l11 7v-7l11 7V8h7v35Z" fill={B} style={m} />
    <circle cx="40" cy="10" r="7" fill={Y} style={m} />
    <rect x="10" y="34" width="8" height="5" rx="1" fill="#fff" opacity=".9" />
  </>),
  build: (<>
    <path d="M6 42 24 8l18 34Z" fill={Y} style={m} />
    <rect x="4" y="34" width="40" height="9" rx="3" fill={O} style={m} />
    <rect x="21" y="4" width="6" height="22" rx="2" fill={V} style={m} />
  </>),
  services: (<>
    <rect x="5" y="14" width="38" height="27" rx="5" fill={V} style={m} />
    <path d="M17 14v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" stroke={O} strokeWidth="4" fill="none" />
    <circle cx="24" cy="27" r="7" fill={T} style={m} />
  </>),
  clinic: (<>
    <rect x="18" y="5" width="12" height="38" rx="4" fill={P} style={m} />
    <rect x="5" y="18" width="38" height="12" rx="4" fill={P} style={m} />
    <circle cx="35" cy="35" r="9" fill={T} style={m} />
  </>),
};

export function AppIcon({ icon, size }: { icon: IconKey; size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" className="mark">
      <g style={{ isolation: "isolate" }}>{marks[icon]}</g>
    </svg>
  );
}

export function IndustryIcon({ icon, size }: { icon: IndKey; size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" className="mark">
      <g style={{ isolation: "isolate" }}>{ind[icon]}</g>
    </svg>
  );
}
