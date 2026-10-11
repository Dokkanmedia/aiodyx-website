"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { apps } from "@/lib/content";
import { AppIcon } from "./AppIcon";
import { WHATSAPP } from "./WhatsAppButton";
import { type Locale, t } from "@/lib/i18n";

const c = {
  name: { ar: "الاسم", en: "Name" },
  company: { ar: "الشركة", en: "Company" },
  phone: { ar: "رقم الجوال", en: "Mobile number" },
  email: { ar: "البريد الإلكتروني", en: "Email" },
  country: { ar: "الدولة", en: "Country" },
  size: { ar: "عدد الموظفين", en: "Company size" },
  apps: { ar: "التطبيقات التي تهمك", en: "Apps you are interested in" },
  msg: { ar: "حدّثنا عن عملك (اختياري)", en: "Tell us about your business (optional)" },
  send: { ar: "اطلب الاستشارة", en: "Request consultation" },
  sending: { ar: "جارٍ الإرسال…", en: "Sending…" },
  ok: { ar: "وصلنا طلبك. سيتواصل معك فريقنا خلال يوم عمل.", en: "We have your request. Our team will contact you within one working day." },
  err: { ar: "تعذّر إرسال الطلب. تأكد من الاسم ورقم الجوال وحاول مرة أخرى، أو اتصل بنا مباشرة.", en: "We could not send your request. Check your name and mobile number and try again, or call us directly." },
  sa: { ar: "السعودية", en: "Saudi Arabia" },
  jo: { ar: "الأردن", en: "Jordan" },
  ot: { ar: "دولة أخرى", en: "Other" },
};
const sizes = ["1–10", "11–50", "51–200", "200+"];

const sizeFromCfg: Record<string, string> = { s: "11–50", m: "51–200", l: "200+" };
const pkgName: Record<string, { ar: string; en: string }> = { start: { ar: "البداية", en: "Start" }, grow: { ar: "النمو", en: "Grow" }, enterprise: { ar: "المؤسسات", en: "Enterprise" } };

export function ContactForm({ locale }: { locale: Locale }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  // Prefill from the "Build your system" configurator (/start → /contact?apps=…&country=…)
  const q = useSearchParams();
  const [picked, setPicked] = useState<string[]>(() => (q.get("apps") ?? "").split(",").filter((s) => apps.some((a) => a.slug === s)));
  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  const preCountry = ["sa", "jo"].includes(q.get("country") ?? "") ? (q.get("country") as string) : q.get("country") === "both" ? "other" : "sa";
  const preSize = sizeFromCfg[q.get("size") ?? ""] ?? "11–50";
  const pkg = pkgName[q.get("pkg") ?? ""];
  const preMsg = pkg ? (locale === "ar" ? `الباقة المقترحة: ${pkg.ar}. الفروع: ${q.get("branches") === "1" ? "فرع واحد" : q.get("branches") === "many" ? "أكثر من 5" : "2 إلى 5"}.` : `Suggested package: ${pkg.en}. Branches: ${q.get("branches") === "1" ? "one" : q.get("branches") === "many" ? "6+" : "2–5"}.`) : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const body = { ...Object.fromEntries(fd.entries()), apps: picked, locale };
    // Static preview (GitHub Pages) has no server: hand the request to WhatsApp instead.
    if (process.env.NEXT_PUBLIC_STATIC === "1") {
      const names = picked.map((s) => apps.find((a) => a.slug === s)).filter(Boolean).map((a) => t(a!.name, locale)).join("، ");
      const text = [...["name", "company", "phone"].map((k) => String(fd.get(k) ?? "")), names, String(fd.get("message") ?? "")].filter(Boolean).join("\n");
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setState("ok");
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error(String(res.status));
      setState("ok");
      form.reset();
    } catch {
      setState("err");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="two">
        <div className="field"><label htmlFor="f-name">{t(c.name, locale)}</label><input id="f-name" name="name" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="f-company">{t(c.company, locale)}</label><input id="f-company" name="company" autoComplete="organization" /></div>
      </div>
      <div className="two">
        <div className="field"><label htmlFor="f-phone">{t(c.phone, locale)}</label><input id="f-phone" name="phone" type="tel" required dir="ltr" autoComplete="tel" /></div>
        <div className="field"><label htmlFor="f-email">{t(c.email, locale)}</label><input id="f-email" name="email" type="email" dir="ltr" autoComplete="email" /></div>
      </div>
      <div className="two">
        <div className="field">
          <label htmlFor="f-country">{t(c.country, locale)}</label>
          <select id="f-country" name="country" defaultValue={preCountry}>
            <option value="sa">{t(c.sa, locale)}</option><option value="jo">{t(c.jo, locale)}</option><option value="other">{t(c.ot, locale)}</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="f-size">{t(c.size, locale)}</label>
          <select id="f-size" name="size" defaultValue={preSize}>{sizes.map((s) => <option key={s}>{s}</option>)}</select>
        </div>
      </div>
      <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend className="form-legend">{t(c.apps, locale)} <span>{picked.length ? `(${picked.length})` : ""}</span></legend>
        <div className="pick-grid compact">
          {apps.map((a) => (
            <button key={a.slug} type="button" className="pick" aria-pressed={picked.includes(a.slug)} onClick={() => toggle(a.slug)}>
              <AppIcon icon={a.icon} /><span>{t(a.name, locale)}</span>
            </button>
          ))}
        </div>
      </fieldset>
      <div className="field"><label htmlFor="f-msg">{t(c.msg, locale)}</label><textarea id="f-msg" name="message" defaultValue={preMsg} /></div>
      {state === "ok" && <p className="alert ok" role="status">{t(c.ok, locale)}</p>}
      {state === "err" && <p className="alert err" role="alert">{t(c.err, locale)}</p>}
      <button className="btn btn-primary btn-lg" type="submit" disabled={state === "sending"}>
        {state === "sending" ? t(c.sending, locale) : t(c.send, locale)}
      </button>
    </form>
  );
}
