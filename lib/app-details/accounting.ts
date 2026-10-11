import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "accounting",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "إقفال شهر أسرع", en: "A faster month-end close" },
      text: {
        ar: "القيود تأتي جاهزة من المبيعات والمشتريات والرواتب، فيتفرغ الفريق للمراجعة بدل الإدخال.",
        en: "Entries arrive ready from sales, purchasing and payroll, so the team reviews instead of typing.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "كل فاتورة مُبلَّغة للمنصة", en: "Every invoice reported to the platform" },
      text: {
        ar: "كل فاتورة وإشعار دائن يُرسل إلى ZATCA أو JoFotara عند الترحيل، وتظهر حالته على المستند.",
        en: "Every invoice and credit note goes to ZATCA or JoFotara on posting, with its status shown on the document.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "مطابقة بنكية أسرع", en: "Faster bank reconciliation" },
      text: {
        ar: "قواعد المطابقة تقترح الفاتورة المناسبة لكل حركة في الكشف، وأنت تعتمد بضغطة.",
        en: "Matching rules suggest the right invoice for each statement line, and you confirm in one click.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "تحصيل أسرع من العملاء", en: "Faster customer collections" },
      text: {
        ar: "تذكيرات المتابعة تُرسل للعملاء المتأخرين تلقائياً، مع رابط دفع أونلاين داخل الفاتورة.",
        en: "Follow-up reminders go to late customers automatically, with an online payment link inside the invoice.",
      },
    },
  ],
  story: {
    title: { ar: "من ملفات متفرقة إلى دفتر واحد محدّث", en: "From scattered files to one live ledger" },
    before: {
      ar: "الفواتير تُصدر من برنامج، وتُرفع يدوياً إلى بوابة الفوترة، والكشف البنكي يُطابق في Excel. التقارير تنتظر نهاية الشهر، وأي سؤال من الإدارة يحتاج تجميعاً طويلاً.",
      en: "Invoices come from one program and are uploaded to the e-invoicing portal by hand, and bank statements are matched in Excel. Reports wait for month end, and every management question means a long round of compiling.",
    },
    after: {
      ar: "الفاتورة تُصدر وتُعتمد من المنصة في نفس اللحظة، والكشف يُستورد ويُطابق بقواعد واضحة. الأرباح والخسائر والتدفق النقدي والذمم متاحة في أي وقت، بضغطة واحدة.",
      en: "Invoices are issued and cleared by the platform in the same moment, and statements are imported and matched by clear rules. Profit and loss, cash flow and receivables are available any time, in one click.",
    },
  },
  workflow: [
    {
      title: { ar: "إصدار الفاتورة", en: "Issue the invoice" },
      text: {
        ar: "الفاتورة تُنشأ من أمر البيع أو يدوياً، بالعربية والإنجليزية وبضريبة القيمة المضافة أو ضريبة المبيعات الصحيحة.",
        en: "The invoice is created from the sales order or by hand, in Arabic and English with the correct VAT or sales tax.",
      },
    },
    {
      title: { ar: "الإرسال إلى منصة الفوترة", en: "Send to the e-invoicing platform" },
      text: {
        ar: "عند الترحيل تُوقَّع الفاتورة وتُرسل إلى ZATCA أو JoFotara، ويُضاف رمز QR وحالة الاعتماد.",
        en: "On posting, the invoice is signed and sent to ZATCA or JoFotara, and the QR code and clearance status are added.",
      },
    },
    {
      title: { ar: "التحصيل والدفع", en: "Collect and pay" },
      text: {
        ar: "العميل يدفع من رابط الفاتورة أو بتحويل بنكي، وفواتير الموردين تُجدول للدفع حسب استحقاقها.",
        en: "Customers pay from the invoice link or by bank transfer, and vendor bills are scheduled by due date.",
      },
    },
    {
      title: { ar: "المطابقة البنكية", en: "Bank reconciliation" },
      text: {
        ar: "كشف البنك يُستورد، وكل حركة تُطابق مع فاتورة أو دفعة أو رسوم بنكية.",
        en: "The bank statement is imported, and each line is matched to an invoice, payment or bank fee.",
      },
    },
    {
      title: { ar: "الإقفال والتقارير", en: "Close and report" },
      text: {
        ar: "المحاسب يراجع القيود، يقفل الفترة بتاريخ قفل، ويستخرج الإقرار الضريبي والقوائم المالية.",
        en: "The accountant reviews entries, locks the period with a lock date, and runs the tax return and financial statements.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "الفوترة الإلكترونية ZATCA وJoFotara", en: "ZATCA and JoFotara e-invoicing" },
      text: {
        ar: "Odoo يدعم المرحلة الثانية من فاتورة في السعودية ونظام JoFotara في الأردن. نحن نسجّل الأجهزة، ونختبر على بيئة المحاكاة، ثم ننقل إلى الإنتاج بعد التأكد من كل نوع مستند.",
        en: "Odoo supports FATOORA phase 2 in Saudi Arabia and JoFotara in Jordan. We onboard the devices, test in the simulation environment, then move to production once every document type passes.",
      },
      points: [
        { ar: "فواتير ضريبية ومبسطة بالعربية والإنجليزية", en: "Standard and simplified tax invoices in two languages" },
        { ar: "إشعارات دائنة ومدينة مربوطة بالفاتورة الأصلية", en: "Credit and debit notes linked to the original" },
        { ar: "رمز QR وحالة الاعتماد على كل مستند", en: "QR code and clearance status on every document" },
        { ar: "سجل بالأخطاء المرفوضة وإعادة الإرسال", en: "Log of rejections with resubmission" },
      ],
    },
    {
      title: { ar: "الذمم المدينة والتحصيل", en: "Receivables and collection" },
      text: {
        ar: "ترى رصيد كل عميل وأعمار ديونه في شاشة واحدة. خطابات المتابعة تُرسل حسب مستويات تحددها أنت، بالبريد أو واتساب.",
        en: "You see each customer's balance and aging on one screen. Follow-up letters go out at levels you define, by email or WhatsApp.",
      },
      points: [
        { ar: "تقرير أعمار الديون لكل عميل", en: "Aged receivables per customer" },
        { ar: "مستويات متابعة تلقائية للمتأخرين", en: "Automatic follow-up levels for late payers" },
        { ar: "دفع أونلاين عبر HyperPay وTap وMoyasar", en: "Online payment via HyperPay, Tap and Moyasar" },
        { ar: "حدود ائتمان وتنبيه عند تجاوزها", en: "Credit limits with warnings" },
      ],
    },
    {
      title: { ar: "الذمم الدائنة وفواتير الموردين", en: "Payables and vendor bills" },
      text: {
        ar: "فاتورة المورد تُقرأ من ملف PDF أو صورة وتُطابق مع أمر الشراء والاستلام. الدفعات تُجمع في ملف تحويل بصيغة بنكك.",
        en: "Vendor bills are read from a PDF or image and matched to the purchase order and receipt. Payments are batched into a transfer file in your bank's format.",
      },
      points: [
        { ar: "قراءة الفواتير الواردة آلياً", en: "Automatic reading of incoming bills" },
        { ar: "مطابقة ثلاثية مع الطلب والاستلام", en: "Three-way match with order and receipt" },
        { ar: "جدولة الدفع حسب الاستحقاق", en: "Payment scheduling by due date" },
        { ar: "ملفات دفع جماعي بصيغة البنك", en: "Batch payment files in bank format" },
      ],
    },
    {
      title: { ar: "البنوك والنقدية", en: "Banks and cash" },
      text: {
        ar: "نستورد كشوف البنوك المحلية بصيغها المعتمدة ونبني قواعد مطابقة لحركاتك المتكررة. الرسوم البنكية والعمولات تُقيد تلقائياً.",
        en: "We import local bank statements in their supported formats and build matching rules for your recurring lines. Bank fees and charges are booked automatically.",
      },
      points: [
        { ar: "استيراد كشوف CSV وExcel وCAMT", en: "CSV, Excel and CAMT statement import" },
        { ar: "قواعد مطابقة تُقيد الرسوم تلقائياً", en: "Rules that book fees automatically" },
        { ar: "حسابات وعملات متعددة", en: "Multiple accounts and currencies" },
        { ar: "توقع التدفق النقدي القادم", en: "Upcoming cash flow forecast" },
      ],
    },
    {
      title: { ar: "الضرائب والإقرارات", en: "Taxes and returns" },
      text: {
        ar: "ضريبة القيمة المضافة 15% في السعودية وضريبة المبيعات العامة 16% في الأردن مُعدة مسبقاً. الإقرار يُستخرج من القيود مباشرة مع إمكانية الرجوع لكل فاتورة.",
        en: "Saudi VAT at 15% and Jordan general sales tax at 16% come preconfigured. The return is built from posted entries, and you can drill into each invoice.",
      },
      points: [
        { ar: "شجرة حسابات وضرائب محلية جاهزة", en: "Local chart of accounts and taxes" },
        { ar: "تقرير الإقرار الضريبي حسب المربعات", en: "Tax return report by box" },
        { ar: "ضريبة الاستقطاع على المدفوعات الخارجية", en: "Withholding tax on foreign payments" },
        { ar: "تاريخ قفل يمنع تعديل الفترات المقدّمة", en: "Lock dates protect filed periods" },
      ],
    },
    {
      title: { ar: "التقارير والموازنات والأصول", en: "Reports, budgets and assets" },
      text: {
        ar: "الميزانية العمومية وقائمة الدخل والتدفق النقدي محدّثة مع كل قيد. الحسابات التحليلية تعطيك ربحية كل فرع أو مشروع، والأصول تُهلك شهرياً دون جداول.",
        en: "Balance sheet, income statement and cash flow update with every entry. Analytic accounts show profit per branch or project, and assets depreciate monthly without spreadsheets.",
      },
      points: [
        { ar: "قوائم مالية لحظية قابلة للتصدير", en: "Live statements, exportable to Excel and PDF" },
        { ar: "مراكز تكلفة وتحليل ربحية", en: "Cost centres and profitability analysis" },
        { ar: "موازنات ومقارنة الفعلي بالمخطط", en: "Budgets with actual versus plan" },
        { ar: "سجل أصول وإهلاك آلي", en: "Asset register with automatic depreciation" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "المدير المالي", en: "Finance manager" },
      gain: {
        ar: "أرقام صحيحة في أي يوم من الشهر، وإقفال أسرع، ومراجعة واضحة لكل قيد.",
        en: "Accurate numbers on any day of the month, a faster close and a clear audit trail for every entry.",
      },
    },
    {
      role: { ar: "المحاسب", en: "Accountant" },
      gain: {
        ar: "إدخال أقل ومطابقة مقترحة، فيتفرغ للتحقق والتحليل بدل النسخ.",
        en: "Less data entry and suggested matches, leaving time for checking and analysis.",
      },
    },
    {
      role: { ar: "صاحب الشركة", en: "Business owner" },
      gain: {
        ar: "يرى النقد والذمم والأرباح على جواله، ويطمئن أن الفواتير مطابقة لمتطلبات الهيئة.",
        en: "Sees cash, receivables and profit on the phone, and knows invoices meet the authority's rules.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "رفع الفواتير يدوياً إلى بوابة الفوترة", en: "Uploading invoices to the portal by hand" },
      after: { ar: "إرسال تلقائي عند الترحيل مع حالة واضحة", en: "Automatic sending on posting with a clear status" },
    },
    {
      before: { ar: "مطابقة الكشف البنكي سطراً سطراً في Excel", en: "Matching bank lines one by one in Excel" },
      after: { ar: "مطابقة مقترحة تعتمدها بضغطة", en: "Suggested matches confirmed in one click" },
    },
    {
      before: { ar: "تقارير مالية تتأخر بعد نهاية الشهر", en: "Financial reports arrive long after month end" },
      after: { ar: "قوائم مالية محدّثة في أي لحظة", en: "Financial statements up to date at any moment" },
    },
    {
      before: { ar: "متابعة المتأخرين بالاتصال والتذكّر", en: "Chasing late payers by memory and phone" },
      after: { ar: "تذكيرات تلقائية مع رابط دفع", en: "Automatic reminders with a payment link" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يمكن نقل بياناتنا من QuickBooks أو برنامجنا الحالي؟", en: "Can we move our data from QuickBooks or our current system?" },
      a: {
        ar: "نعم. ننقل شجرة الحسابات والعملاء والموردين والأرصدة الافتتاحية والفواتير المفتوحة، ونطابق الأرصدة معك قبل التشغيل.",
        en: "Yes. We migrate the chart of accounts, customers, vendors, opening balances and open invoices, and reconcile balances with you before go-live.",
      },
    },
    {
      q: { ar: "هل الربط مع ZATCA وJoFotara جزء من Odoo نفسه؟", en: "Is the ZATCA and JoFotara link part of Odoo itself?" },
      a: {
        ar: "نعم، Odoo يتضمن التوطين للمنصتين. دورنا هو التسجيل والإعداد والاختبار على بيئة المحاكاة ومعالجة أي رفض قبل الانتقال للإنتاج.",
        en: "Yes, Odoo includes both localisations. Our role is registration, setup, simulation testing and fixing any rejections before production.",
      },
    },
    {
      q: { ar: "هل يدعم أكثر من شركة أو فرع في السعودية والأردن؟", en: "Does it handle several companies in Saudi Arabia and Jordan?" },
      a: {
        ar: "نعم. كل شركة لها شجرة حساباتها وضرائبها وعملتها ومنصة فوترتها، مع تقارير موحدة عند الحاجة.",
        en: "Yes. Each company has its own chart, taxes, currency and e-invoicing platform, with consolidated reports when needed.",
      },
    },
    {
      q: { ar: "هل تظهر الفواتير بالعربية؟", en: "Are invoices printed in Arabic?" },
      a: {
        ar: "نعم. الفاتورة تُطبع بالعربية والإنجليزية معاً، ونعدّل التصميم ليحمل شعارك وبياناتك.",
        en: "Yes. Invoices print in Arabic and English together, and we adjust the layout to carry your logo and details.",
      },
    },
    {
      q: { ar: "كم يستغرق التشغيل؟", en: "How long does go-live take?" },
      a: {
        ar: "نقدّرها مبدئياً من 4 إلى 8 أسابيع حسب عدد الشركات وحجم البيانات، ويشمل ذلك التدريب بالعربية والدعم بعد التشغيل.",
        en: "We estimate 4 to 8 weeks depending on the number of companies and data volume, including Arabic training and post-launch support.",
      },
    },
  ],
};

export default d;
