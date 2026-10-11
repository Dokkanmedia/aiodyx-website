import type { L } from "./i18n";

/* Visual layer for knowledge-centre articles: covers, accent colour, platform logos, a 30-second summary,
   and images placed after the first paragraph of a given section (index of the h2, starting at 0). */
export type Media = { src: string; kind: "shot" | "photo" | "doc"; caption: L };
export type ArticleVisual = {
  cover: Media; accent: string; logos: string[]; tldr: L[];
  media: Record<number, Media>;
};

const SHOT_NOTE = { ar: "لقطة من Odoo 19 لشركة تجريبية، الأسماء والأرقام وهمية.", en: "Odoo 19 screen from a sample company; names and figures are fictional." };

export const articleVisuals: Record<string, ArticleVisual> = {
  "zatca-phase-2-odoo-guide": {
    accent: "#0E8A6A", logos: ["zatca"],
    cover: { src: "/odoo/accounting.jpg", kind: "shot", caption: SHOT_NOTE },
    tldr: [
      { ar: "فواتير B2B تُعتمد قبل تسليمها للعميل، وفواتير B2C المبسطة يُبلَّغ عنها بعد إصدارها.", en: "B2B invoices are cleared before they reach the customer; simplified B2C invoices are reported after issue." },
      { ar: "تسجيل وحدة الفوترة يتم برمز OTP من بوابة فاتورة، ثم يحصل النظام على شهادة للتوقيع.", en: "The e-invoicing unit is onboarded with an OTP from the FATOORA portal, then the system receives a signing certificate." },
      { ar: "Odoo فيه حزمة سعودية جاهزة، والعمل الحقيقي هو الإعداد والاختبار وتنظيف بيانات العملاء.", en: "Odoo ships a Saudi localisation; the real work is setup, testing and cleaning customer data." },
    ],
    media: {
      0: { src: "/learn/zatca-invoice.jpg", kind: "doc", caption: { ar: "فاتورة ضريبية من Odoo قبل إرسالها إلى فاتورة. بعد الاعتماد تحمل رمز QR وختم التشفير.", en: "A tax invoice from Odoo before submission to FATOORA. After clearance it carries the QR code and cryptographic stamp." } },
      3: { src: "/odoo/accounting.jpg", kind: "shot", caption: { ar: "حالة الفوترة الإلكترونية تظهر على الفاتورة نفسها داخل Odoo.", en: "The e-invoicing status shows on the invoice itself inside Odoo." } },
    },
  },
  "jofotara-odoo-integration": {
    accent: "#B4620B", logos: ["jofotara"],
    cover: { src: "/stock/amman.jpg", kind: "photo", caption: { ar: "عمّان", en: "Amman" } },
    tldr: [
      { ar: "JoFotara هو نظام الفوترة الوطني في الأردن، تديره دائرة ضريبة الدخل والمبيعات.", en: "JoFotara is Jordan's national e-invoicing system, run by the Income and Sales Tax Department." },
      { ar: "الربط يحتاج معرّف العميل والرمز السري من حساب المنشأة في البوابة.", en: "The connection needs the client ID and secret from your company's portal account." },
      { ar: "الإشعار الدائن يجب أن يرتبط بفاتورته الأصلية المسجلة.", en: "A credit note must reference its original, registered invoice." },
    ],
    media: {
      0: { src: "/stock/accounting.jpg", kind: "photo", caption: { ar: "كل فاتورة تُرسل لحظة إصدارها بدل إدخالها يدوياً في البوابة.", en: "Each invoice is sent as it is issued instead of being typed into the portal." } },
      2: { src: "/odoo/accounting.jpg", kind: "shot", caption: SHOT_NOTE },
    },
  },
  "odoo-community-vs-enterprise": {
    accent: "#7C3AED", logos: [],
    cover: { src: "/stock/founder.jpg", kind: "photo", caption: { ar: "اختيار النسخة قرار عمل قبل أن يكون قراراً تقنياً.", en: "Choosing an edition is a business decision before it's a technical one." } },
    tldr: [
      { ar: "Community مجانية ومفتوحة المصدر، وEnterprise تضيف تطبيقات وخدمات برخصة لكل مستخدم.", en: "Community is free and open source; Enterprise adds apps and services under a per-user licence." },
      { ar: "تطبيقات مثل الرواتب ودعم العملاء والتوقيع والمستندات متاحة في Enterprise فقط.", en: "Apps such as Payroll, Helpdesk, Sign and Documents are Enterprise-only." },
      { ar: "اختر حسب التطبيقات التي تحتاجها فعلاً، وطريقة الاستضافة، والدعم والترقيات.", en: "Decide by the apps you actually need, hosting, and support and upgrades." },
    ],
    media: {
      0: { src: "/odoo/business-intelligence.jpg", kind: "shot", caption: SHOT_NOTE },
      3: { src: "/odoo/crm-sales.jpg", kind: "shot", caption: { ar: "تطبيقات أساسية مثل المبيعات متاحة في النسختين.", en: "Core apps such as CRM are available in both editions." } },
    },
  },
  "erp-implementation-steps": {
    accent: "#3B82F6", logos: [],
    cover: { src: "/stock/consult.jpg", kind: "photo", caption: { ar: "التحليل مع الأقسام هو أهم مرحلة في المشروع.", en: "Analysis with your departments is the most important stage." } },
    tldr: [
      { ar: "التطبيق الناجح يمر بسبع مراحل، أولها فهم طريقة عمل كل قسم.", en: "A successful implementation goes through seven stages, starting with how each department works." },
      { ar: "جهّز بياناتك ومسؤولاً من كل قسم قبل البدء، فهما أكثر ما يؤخر المشاريع.", en: "Prepare your data and an owner per department before starting; those cause most delays." },
      { ar: "الإطلاق على مراحل أقل مخاطرة من تشغيل كل شيء في يوم واحد.", en: "Going live in phases is less risky than switching everything on in one day." },
    ],
    media: {
      0: { src: "/odoo/projects.jpg", kind: "shot", caption: { ar: "نتابع كل مشروع تنفيذ بمراحله ومهامه داخل Odoo.", en: "We track every implementation project with its stages and tasks inside Odoo." } },
      2: { src: "/stock/team.jpg", kind: "photo", caption: { ar: "التدريب بالعربية لكل قسم قبل التشغيل.", en: "Arabic training for every department before go-live." } },
    },
  },
  "saudi-payroll-mudad-gosi-odoo": {
    accent: "#EC4899", logos: ["mudad", "gosi", "biometric"],
    cover: { src: "/odoo/hr.jpg", kind: "shot", caption: SHOT_NOTE },
    tldr: [
      { ar: "مسير الرواتب في Odoo يحسب البدلات والاستقطاعات والتأمينات، ثم يُعتمد.", en: "Odoo payroll computes allowances, deductions and GOSI, then gets approved." },
      { ar: "ملف حماية الأجور يخرج من المسير المعتمد ويُرفع إلى مدد.", en: "The wage-protection file comes from the approved payroll and is uploaded to Mudad." },
      { ar: "ربط أجهزة البصمة يجعل الإضافي والغياب يدخلان الرواتب دون جداول.", en: "Linking biometric devices brings overtime and absence into payroll without spreadsheets." },
    ],
    media: {
      0: { src: "/stock/attendance-payroll.jpg", kind: "photo", caption: { ar: "نهاية الشهر بدون جداول Excel.", en: "Month end without spreadsheets." } },
      4: { src: "/odoo/attendance-payroll.jpg", kind: "shot", caption: SHOT_NOTE },
    },
  },
};

export const learningPath = ["odoo-community-vs-enterprise", "erp-implementation-steps", "zatca-phase-2-odoo-guide", "jofotara-odoo-integration", "saudi-payroll-mudad-gosi-odoo"];
