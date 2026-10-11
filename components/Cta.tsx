import Link from "next/link";
import { type Locale, t, ui } from "@/lib/i18n";

const copy = {
  title: { ar: "جاهز تبني نظامك؟", en: "Ready to build your system?" },
  text: {
    ar: "استشارة مجانية مدتها 30 دقيقة نفهم فيها أعمالك ونقول لك بصراحة ماذا تحتاج.",
    en: "A free 30-minute consultation where we learn how you work and tell you plainly what you need.",
  },
};

export function Cta({ locale }: { locale: Locale }) {
  return (
    <section className="wrap">
      <div className="cta">
        <div>
          <h2>{t(copy.title, locale)}</h2>
          <p>{t(copy.text, locale)}</p>
        </div>
        <Link className="btn" href={`/${locale}/contact`}>{t(ui.cta.consult, locale)}</Link>
      </div>
    </section>
  );
}
