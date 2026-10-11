import type { MetadataRoute } from "next";
import { asset } from "@/lib/asset";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AIODYX: شريك Odoo الرسمي",
    short_name: "AIODYX",
    description: "شريك Odoo رسمي في عمّان والرياض. أنظمة ERP مفصّلة ومربوطة مع المنصات الحكومية.",
    start_url: asset("/ar"),
    lang: "ar",
    dir: "rtl",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#2B3E8C",
    icons: [
      { src: asset("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { src: asset("/logo-512.png"), sizes: "512x512", type: "image/png" },
      { src: asset("/apple-icon.png"), sizes: "180x180", type: "image/png" },
    ],
  };
}

export const dynamic = "force-static";
