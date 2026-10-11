export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export type L = { ar: string; en: string };

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const t = (l: L, locale: Locale) => l[locale];
export const dir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");
export const other = (locale: Locale): Locale => (locale === "ar" ? "en" : "ar");

/* Interface strings shared across pages */
export const ui = {
  nav: {
    apps: { ar: "التطبيقات", en: "Apps" },
    integrations: { ar: "الربط الحكومي", en: "Integrations" },
    process: { ar: "كيف نبني", en: "How we build" },
    contact: { ar: "تواصل معنا", en: "Contact" },
    pricing: { ar: "الأسعار", en: "Pricing" },
    about: { ar: "من نحن", en: "About" },
    start: { ar: "ابنِ نظامك", en: "Build your system" },
    learn: { ar: "مركز المعرفة", en: "Resources" },
  },
  cta: {
    consult: { ar: "احجز استشارة مجانية", en: "Book a free consultation" },
    consultShort: { ar: "استشارة مجانية", en: "Free consultation" },
    allApps: { ar: "كل التطبيقات", en: "View all apps" },
    allIntegrations: { ar: "كل المنصات المربوطة", en: "All integrations" },
    quoteApp: { ar: "اطلب عرضاً لهذا التطبيق", en: "Get a quote for this app" },
    readMore: { ar: "التفاصيل", en: "Details" },
  },
  common: {
    connectsWith: { ar: "مربوط مع", en: "Connects with" },
    replaces: { ar: "يستبدل", en: "Replaces" },
    estimate: { ar: "تقدير عام لما تتيحه الأتمتة، وليس نتيجة مشروع محدد. يختلف حسب كل شركة.", en: "A general estimate of what automation allows, not a specific project result. Varies by company." },
    jordan: { ar: "الأردن", en: "Jordan" },
    saudi: { ar: "السعودية", en: "Saudi Arabia" },
    usedBy: { ar: "تستخدمه تطبيقات", en: "Used by" },
    howItWorks: { ar: "كيف يعمل الربط", en: "How the integration works" },
  },
};
