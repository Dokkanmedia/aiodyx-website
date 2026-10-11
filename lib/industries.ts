import type { ShotKind } from "./content";
import type { L } from "./i18n";

export type IndustryIcon = "retail" | "dist" | "factory" | "build" | "services" | "clinic";
export type Industry = {
  slug: string;
  icon: IndustryIcon;
  name: L;
  short: L;
  headline: L;
  intro: L;
  pains: { before: L; after: L }[];
  apps: string[];
  platforms: string[];
  shot: ShotKind;
};

export const industries: Industry[] = [
  {
    slug: "retail",
    icon: "retail",
    name: { ar: "التجزئة والمتاجر", en: "Retail & eCommerce" },
    short: { ar: "فروع، كاشير، متجر إلكتروني", en: "Branches, POS, online store" },
    headline: { ar: "كل فروعك ومتجرك الإلكتروني على مخزون واحد", en: "All your branches and your online store on one stock" },
    intro: {
      ar: "الكاشير في الفرع، والطلب من سلة، والمرتجع من العميل، كلها تخصم من نفس المخزون وتُفوتَر إلكترونياً، والإدارة ترى مبيعات كل فرع لحظياً.",
      en: "Branch checkout, Salla orders and customer returns all draw from the same stock and are e-invoiced, while management sees every branch's sales live.",
    },
    pains: [
      { before: { ar: "جرد كل فرع على حدة في آخر الشهر", en: "Counting each branch separately at month end" }, after: { ar: "رصيد لحظي لكل فرع ومستودع", en: "Live stock per branch and warehouse" } },
      { before: { ar: "طلبات المتجر تُنقل يدوياً", en: "Store orders retyped by hand" }, after: { ar: "الطلب يصل النظام وحده", en: "Orders arrive in the system on their own" } },
      { before: { ar: "فواتير الكاشير خارج منصة الفوترة", en: "Register receipts outside e-invoicing" }, after: { ar: "كل فاتورة مبسطة مُبلَّغة", en: "Every simplified invoice reported" } },
    ],
    apps: ["point-of-sale", "ecommerce", "inventory-purchase", "accounting", "marketing"],
    platforms: ["zatca", "jofotara", "payments", "ecommerce"],
    shot: "pos",
  },
  {
    slug: "distribution",
    icon: "dist",
    name: { ar: "التوزيع والجملة", en: "Distribution & Wholesale" },
    short: { ar: "مندوبين، مستودعات، تحصيل", en: "Reps, warehouses, collections" },
    headline: { ar: "من طلب المندوب إلى التسليم والتحصيل في نظام واحد", en: "From the rep's order to delivery and collection in one system" },
    intro: {
      ar: "المندوب يأخذ الطلب من جواله ويرى المخزون والسقف الائتماني للعميل، والمستودع يجهز، والسائق يسلّم، والمحاسبة تتابع التحصيل.",
      en: "Reps take orders on their phone with live stock and customer credit limits, the warehouse picks, drivers deliver, and accounting follows collection.",
    },
    pains: [
      { before: { ar: "المندوب يعد بصنف غير متوفر", en: "Reps promise items that are not in stock" }, after: { ar: "المخزون أمامه على الجوال", en: "Stock is on their phone" } },
      { before: { ar: "ديون العملاء تتراكم دون متابعة", en: "Receivables pile up unnoticed" }, after: { ar: "سقف ائتماني وتذكيرات تلقائية", en: "Credit limits and automatic reminders" } },
      { before: { ar: "خطوط توزيع على الورق", en: "Delivery routes on paper" }, after: { ar: "أوامر تسليم وتتبع شحن", en: "Delivery orders with tracking" } },
    ],
    apps: ["crm-sales", "inventory-purchase", "accounting", "fleet", "business-intelligence"],
    platforms: ["zatca", "jofotara", "shipping", "banks"],
    shot: "inventory",
  },
  {
    slug: "manufacturing",
    icon: "factory",
    name: { ar: "التصنيع", en: "Manufacturing" },
    short: { ar: "قوائم مواد، إنتاج، جودة", en: "BoMs, production, quality" },
    headline: { ar: "مصنعك يعرف ماذا يشتري، ومتى ينتج، وكم يكلف", en: "Your factory knows what to buy, when to produce and what it costs" },
    intro: {
      ar: "أوامر البيع تولد احتياجات المواد، والمشتريات تُطلب في وقتها، والإنتاج يُتابع من شاشات المصنع، والكلفة الفعلية لكل منتج واضحة.",
      en: "Sales orders drive material requirements, purchases happen on time, production is tracked from shop-floor screens, and the actual cost of each product is clear.",
    },
    pains: [
      { before: { ar: "الخط يتوقف لنقص مادة", en: "Lines stop for a missing part" }, after: { ar: "MRP يطلب المواد مسبقاً", en: "MRP orders materials in advance" } },
      { before: { ar: "كلفة المنتج تقديرية", en: "Product cost is a guess" }, after: { ar: "كلفة فعلية لكل أمر تصنيع", en: "Actual cost per manufacturing order" } },
      { before: { ar: "فحص الجودة على الورق", en: "Quality checks on paper" }, after: { ar: "نقاط فحص إلزامية في النظام", en: "Mandatory checkpoints in the system" } },
    ],
    apps: ["manufacturing", "inventory-purchase", "accounting", "attendance-payroll", "business-intelligence"],
    platforms: ["zatca", "jofotara", "biometric"],
    shot: "inventory",
  },
  {
    slug: "contracting",
    icon: "build",
    name: { ar: "المقاولات والإنشاءات", en: "Contracting & Construction" },
    short: { ar: "مشاريع، مستخلصات، عمالة", en: "Projects, progress billing, labour" },
    headline: { ar: "ربحية كل مشروع قبل أن ينتهي", en: "Know each project's margin before it ends" },
    intro: {
      ar: "الموازنة والمشتريات والعمالة والمستخلصات لكل مشروع في مكان واحد، مع ربط قوى ومدد للعمالة، وتنبيه عندما تتجاوز الكلفة الموازنة.",
      en: "Budget, purchasing, labour and progress billing per project in one place, with Qiwa and Mudad for the workforce, and an alert when cost runs over budget.",
    },
    pains: [
      { before: { ar: "تكتشف الخسارة بعد التسليم", en: "Losses discovered after handover" }, after: { ar: "كلفة مقابل موازنة لحظياً", en: "Live cost versus budget" } },
      { before: { ar: "عمالة وعقود خارج النظام", en: "Workforce and contracts outside the system" }, after: { ar: "مزامنة مع قوى ومدد", en: "Synced with Qiwa and Mudad" } },
      { before: { ar: "مستخلصات في Excel", en: "Progress claims in Excel" }, after: { ar: "فوترة مراحل من المشروع", en: "Milestone invoicing from the project" } },
    ],
    apps: ["projects", "inventory-purchase", "attendance-payroll", "hr", "fleet"],
    platforms: ["qiwa", "mudad", "gosi", "zatca"],
    shot: "kanban",
  },
  {
    slug: "services",
    icon: "services",
    name: { ar: "الخدمات المهنية", en: "Professional Services" },
    short: { ar: "ساعات، عقود، فوترة", en: "Timesheets, contracts, billing" },
    headline: { ar: "كل ساعة عمل تُسجَّل وتُفوتَر", en: "Every working hour logged and billed" },
    intro: {
      ar: "للاستشارات ووكالات التسويق ومكاتب المحاسبة والمحاماة: المشاريع والساعات والعقود والفوترة الدورية ورضا العملاء في نظام واحد.",
      en: "For consultancies, agencies, accounting and law firms: projects, timesheets, contracts, recurring billing and client satisfaction in one system.",
    },
    pains: [
      { before: { ar: "ساعات لا تُفوتَر", en: "Hours that never get billed" }, after: { ar: "سجل ساعات مربوط بالفاتورة", en: "Timesheets linked to invoices" } },
      { before: { ar: "لا تعرف أي عميل مربح", en: "No idea which client is profitable" }, after: { ar: "ربحية لكل عميل ومشروع", en: "Margin per client and project" } },
      { before: { ar: "طلبات العملاء في البريد", en: "Client requests lost in email" }, after: { ar: "تذاكر بمستوى خدمة", en: "Tickets with SLAs" } },
    ],
    apps: ["projects", "crm-sales", "helpdesk", "documents-sign", "accounting"],
    platforms: ["zatca", "jofotara", "whatsapp"],
    shot: "kanban",
  },
  {
    slug: "healthcare",
    icon: "clinic",
    name: { ar: "العيادات والمراكز الطبية", en: "Clinics & Medical Centres" },
    short: { ar: "مواعيد، مخزون طبي، موظفون", en: "Appointments, supplies, staff" },
    headline: { ar: "العيادة تعمل، والإدارة ترى الأرقام", en: "The clinic runs, management sees the numbers" },
    intro: {
      ar: "مواعيد وفوترة ومخزون مستلزمات طبية وموارد بشرية ورواتب الأطباء بالنسبة، في نظام واحد مربوط مع الفوترة الإلكترونية.",
      en: "Appointments, billing, medical supplies, HR and percentage-based doctor pay in one system connected to e-invoicing.",
    },
    pains: [
      { before: { ar: "مستلزمات تنتهي صلاحيتها في المستودع", en: "Supplies expiring on the shelf" }, after: { ar: "تتبع الدفعات والصلاحية", en: "Lot and expiry tracking" } },
      { before: { ar: "حساب نسب الأطباء يدوياً", en: "Doctor commissions calculated by hand" }, after: { ar: "النسبة تُحسب في الرواتب", en: "Commissions computed in payroll" } },
      { before: { ar: "تقارير متأخرة للإدارة", en: "Late reports for management" }, after: { ar: "لوحة لكل فرع", en: "A dashboard per branch" } },
    ],
    apps: ["accounting", "inventory-purchase", "hr", "attendance-payroll", "business-intelligence"],
    platforms: ["zatca", "jofotara", "mudad", "biometric"],
    shot: "dashboard",
  },
];

export const industryBySlug = (s: string) => industries.find((i) => i.slug === s);
