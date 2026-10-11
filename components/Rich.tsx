import { Mark } from "./Doodles";

/* Renders a heading string where *words* get the yellow brush highlight. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return <>{parts.map((p, i) => (p.startsWith("*") && p.endsWith("*") ? <Mark key={i}>{p.slice(1, -1)}</Mark> : p))}</>;
}
