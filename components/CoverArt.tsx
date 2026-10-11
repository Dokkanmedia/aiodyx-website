import Image from "next/image";
import { asset } from "@/lib/asset";

/* Article cover. Photos fill the frame; Odoo screenshots sit as a tilted window on an accent backdrop. */
export function CoverArt({ src, kind, accent, logos = [], sizes, priority = false }: {
  src: string; kind: "shot" | "photo" | "doc"; accent: string; logos?: string[]; sizes: string; priority?: boolean;
}) {
  const framed = kind !== "photo";
  return (
    <div className={`cover-art ${framed ? "framed" : ""}`} style={{ ["--accent" as string]: accent }}>
      {framed ? (
        <div className="cover-window">
          <div className="oshot-bar" aria-hidden="true"><i /><i /><i /></div>
          <div className="cover-window-img"><Image src={src} alt="" fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: "top" }} /></div>
        </div>
      ) : (
        <Image src={src} alt="" fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: "center" }} />
      )}
      {logos.length > 0 && <span className="cover-logos">{logos.map((l) => <img key={l} src={asset(l)} alt="" />)}</span>}
    </div>
  );
}
