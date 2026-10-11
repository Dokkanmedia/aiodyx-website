import type { L } from "./i18n";

/*
 * Client success stories. `draft: true` entries are format examples shown with a "draft" badge.
 * Replace them with real projects (with the client's approval) before launch.
 */
export type Case = {
  slug: string; draft?: boolean; photo: string;
  client: L; sector: L; country: L; title: L; summary: L;
  apps: string[]; results: { value: L; label: L }[];
};

export const cases: Case[] = [
  {
    slug: "example-distribution", draft: true, photo: "/stock/ind-distribution.jpg",
    client: { ar: "شركة توزيع (مثال)", en: "Distribution company (example)" },
    sector: { ar: "التوزيع والجملة", en: "Distribution" }, country: { ar: "السعودية", en: "Saudi Arabia" },
    title: { ar: "من 6 أدوات منفصلة إلى نظام واحد مربوط مع فاتورة ومدد", en: "From 6 separate tools to one system connected to FATOORA and Mudad" },
    summary: { ar: "هذا مثال يوضح شكل قصة النجاح. ضع هنا وصفاً قصيراً للتحدي، وما بنيناه، والنتيجة.", en: "This example shows the format of a success story. Describe the challenge, what we built and the outcome." },
    apps: ["accounting", "inventory-purchase", "attendance-payroll"],
    results: [
      { value: { ar: "—", en: "—" }, label: { ar: "رقم حقيقي من المشروع", en: "Real project metric" } },
      { value: { ar: "—", en: "—" }, label: { ar: "رقم حقيقي من المشروع", en: "Real project metric" } },
      { value: { ar: "—", en: "—" }, label: { ar: "رقم حقيقي من المشروع", en: "Real project metric" } },
    ],
  },
  {
    slug: "example-services", draft: true, photo: "/stock/ind-services.jpg",
    client: { ar: "مكتب خدمات مهنية (مثال)", en: "Professional services firm (example)" },
    sector: { ar: "الخدمات المهنية", en: "Professional services" }, country: { ar: "الأردن", en: "Jordan" },
    title: { ar: "كل ساعة عمل تُفوتَر، وكل فاتورة تصل JoFotara", en: "Every hour billed, every invoice sent to JoFotara" },
    summary: { ar: "مثال ثانٍ على شكل القصة. استبدله بمشروع حقيقي بعد موافقة العميل.", en: "A second format example. Replace with a real project once the client approves." },
    apps: ["projects", "accounting", "helpdesk"],
    results: [
      { value: { ar: "—", en: "—" }, label: { ar: "رقم حقيقي من المشروع", en: "Real project metric" } },
      { value: { ar: "—", en: "—" }, label: { ar: "رقم حقيقي من المشروع", en: "Real project metric" } },
      { value: { ar: "—", en: "—" }, label: { ar: "رقم حقيقي من المشروع", en: "Real project metric" } },
    ],
  },
];
