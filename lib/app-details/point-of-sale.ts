import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "point-of-sale",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "بيع سريع عند الكاشير", en: "Fast checkout" },
      text: { ar: "مسح الباركود والدفع بمدى وطباعة الفاتورة بخطوات قليلة على شاشة لمس.", en: "Scan, pay with mada and print the receipt in a few taps on a touch screen." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "كل فاتورة مبلَّغة إلكترونياً", en: "Every receipt reported electronically" },
      text: { ar: "كل فاتورة مبسطة تحمل رمز QR وتُبلَّغ إلى فاتورة أو جو فوترة حسب البلد.", en: "Every simplified invoice carries a QR code and is reported to FATOORA or JoFotara, depending on the country." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "إغلاق أسرع للصندوق اليومي", en: "Faster daily till closing" },
      text: { ar: "النظام يحسب المتوقع لكل طريقة دفع، والكاشير يُدخل المعدود فقط.", en: "The system computes the expected amount per payment method; the cashier only enters the count." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "خصم لحظي للمخزون عند البيع", en: "Live stock deduction at sale" },
      text: { ar: "كل بيع يخصم من مستودع الفرع، فترى الرصيد الحقيقي في كل الفروع.", en: "Each sale deducts from the branch warehouse, so you see real stock across branches." },
    },
  ],
  story: {
    title: { ar: "من كاشير منفصل إلى نقطة بيع متصلة بكل شيء", en: "From a standalone till to a connected checkout" },
    before: {
      ar: "الكاشير يعمل على جهاز منفصل، والمبيعات تُرحَّل للمحاسبة يدوياً آخر اليوم. المخزون لا يتطابق، والفروقات في الصندوق تُكتشف متأخرة، وربط الفوترة الإلكترونية يحتاج نظاماً إضافياً.",
      en: "The till runs on a separate device and sales are keyed into accounting at day end. Stock never matches, cash differences surface late, and e-invoicing needs yet another system.",
    },
    after: {
      ar: "الكاشير يبيع من جهاز لوحي، والفاتورة تُبلَّغ تلقائياً، والمخزون يُخصم فوراً. عند الإغلاق تظهر الفروقات لكل طريقة دفع، والقيد المحاسبي يُنشأ دون تدخل.",
      en: "The cashier sells from a tablet, the receipt is reported automatically and stock is deducted at once. At closing, differences show per payment method and the journal entry is created without manual work.",
    },
  },
  workflow: [
    {
      title: { ar: "فتح الجلسة", en: "Open the session" },
      text: { ar: "الكاشير يسجل دخوله ويُدخل رصيد الصندوق الافتتاحي.", en: "The cashier logs in and enters the opening cash balance." },
    },
    {
      title: { ar: "إضافة الأصناف", en: "Add items" },
      text: { ar: "بمسح الباركود أو الميزان أو اختيار الصنف من الشاشة، مع تطبيق العروض تلقائياً.", en: "Scan a barcode, weigh on the scale or tap the item; promotions apply automatically." },
    },
    {
      title: { ar: "استلام الدفع", en: "Take payment" },
      text: { ar: "نقداً أو بمدى أو Apple Pay أو بطريقة دفع مقسمة بين أكثر من وسيلة.", en: "Cash, mada, Apple Pay, or split across several methods." },
    },
    {
      title: { ar: "إصدار الفاتورة", en: "Issue the receipt" },
      text: { ar: "تُطبع الفاتورة المبسطة برمز QR وتُبلَّغ إلى منصة الفوترة الإلكترونية.", en: "The simplified invoice prints with a QR code and is reported to the e-invoicing platform." },
    },
    {
      title: { ar: "إغلاق الجلسة", en: "Close the session" },
      text: { ar: "عدّ الصندوق، ومراجعة الفروقات، وترحيل القيد إلى المحاسبة تلقائياً.", en: "Count the till, review differences and post the entry to accounting automatically." },
    },
  ],
  sections: [
    {
      title: { ar: "واجهة بيع سريعة", en: "Fast checkout screen" },
      text: {
        ar: "واجهة لمس بسيطة تعمل في المتصفح على جهاز لوحي أو حاسوب. الكاشير الجديد يتعلمها بسرعة.",
        en: "A simple touch screen that runs in the browser on a tablet or PC. A new cashier picks it up quickly.",
      },
      points: [
        { ar: "بحث بالاسم أو الباركود", en: "Search by name or barcode" },
        { ar: "تصنيفات وصور للأصناف", en: "Categories and product images" },
        { ar: "عربي وإنجليزي على نفس الشاشة", en: "Arabic and English on one screen" },
        { ar: "مرتجعات واستبدال من الفاتورة الأصلية", en: "Returns and exchanges from the original receipt" },
      ],
    },
    {
      title: { ar: "الفوترة الإلكترونية", en: "E-invoicing" },
      text: {
        ar: "في السعودية تُبلَّغ الفواتير المبسطة إلى منصة فاتورة خلال 24 ساعة وفق المرحلة الثانية. وفي الأردن تُرسل إلى جو فوترة. نحن نضبط الربط ونختبره قبل التشغيل.",
        en: "In Saudi Arabia, simplified invoices are reported to FATOORA within 24 hours under phase 2. In Jordan, they go to JoFotara. We set up and test the connection before go-live.",
      },
      points: [
        { ar: "رمز QR على كل فاتورة", en: "QR code on every receipt" },
        { ar: "ضريبة القيمة المضافة محسوبة تلقائياً", en: "VAT calculated automatically" },
        { ar: "إشعارات دائنة للمرتجعات", en: "Credit notes for returns" },
        { ar: "فاتورة ضريبية كاملة لعملاء الشركات", en: "Full tax invoice for business customers" },
      ],
    },
    {
      title: { ar: "الدفع", en: "Payments" },
      text: {
        ar: "نربط أجهزة الدفع وبوابات الدفع المحلية حتى يُرسل المبلغ للجهاز دون إعادة كتابته. كل طريقة دفع تُسجَّل في حسابها الصحيح.",
        en: "We connect payment terminals and local gateways so the amount is sent to the terminal without retyping. Each payment method posts to its own account.",
      },
      points: [
        { ar: "مدى وApple Pay والبطاقات", en: "mada, Apple Pay and cards" },
        { ar: "دفع مقسم بين أكثر من وسيلة", en: "Split payments" },
        { ar: "ربط مع HyperPay وTap وMoyasar", en: "HyperPay, Tap and Moyasar integration" },
        { ar: "بيع آجل لعملاء معتمدين", en: "Credit sales for approved customers" },
      ],
    },
    {
      title: { ar: "العروض والولاء", en: "Promotions and loyalty" },
      text: {
        ar: "عرّف العرض مرة واحدة فيُطبق تلقائياً في كل الفروع أو في فروع محددة. والعميل يجمع النقاط ويستبدلها من نفس الشاشة.",
        en: "Define a promotion once and it applies automatically in all or selected branches. Customers earn and redeem points from the same screen.",
      },
      points: [
        { ar: "اشترِ واحصل على خصم", en: "Buy X, get Y" },
        { ar: "نقاط ولاء وبطاقات هدايا", en: "Loyalty points and gift cards" },
        { ar: "كوبونات بتاريخ صلاحية", en: "Coupons with expiry dates" },
        { ar: "قوائم أسعار لكل فرع", en: "Price lists per branch" },
      ],
    },
    {
      title: { ar: "المطاعم والمقاهي", en: "Restaurants and cafés" },
      text: {
        ar: "خريطة للطاولات، وإرسال الطلب للمطبخ مباشرة، وتقسيم الفاتورة بين الضيوف. وطلبات السفري والتوصيل في نفس النظام.",
        en: "A floor plan, orders sent straight to the kitchen and bills split between guests. Takeaway and delivery orders live in the same system.",
      },
      points: [
        { ar: "خريطة طاولات وطوابق", en: "Tables and floor plans" },
        { ar: "شاشة أو طابعة للمطبخ", en: "Kitchen screen or printer" },
        { ar: "إضافات وملاحظات على الصنف", en: "Modifiers and notes per item" },
        { ar: "تقسيم الفاتورة ودمجها", en: "Split and merge bills" },
      ],
    },
    {
      title: { ar: "الأجهزة والعمل دون إنترنت", en: "Hardware and offline mode" },
      text: {
        ar: "إذا انقطعت الشبكة يستمر البيع، والفواتير تُرسل عند عودة الاتصال. ونربط الطابعة والدرج والميزان وقارئ الباركود.",
        en: "If the network drops, selling continues and receipts sync when the connection returns. We connect the printer, cash drawer, scale and barcode scanner.",
      },
      points: [
        { ar: "بيع مستمر عند انقطاع الإنترنت", en: "Keep selling when offline" },
        { ar: "طابعات حرارية ودرج نقود", en: "Thermal printers and cash drawers" },
        { ar: "موازين وأصناف بالوزن", en: "Scales and weighed items" },
        { ar: "قارئ باركود وشاشة عميل", en: "Barcode scanner and customer display" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "الكاشير", en: "Cashier" },
      gain: { ar: "شاشة بسيطة وسريعة، وإغلاق صندوق دون حسابات يدوية.", en: "A simple, fast screen and a till close with no manual sums." },
    },
    {
      role: { ar: "مدير الفرع", en: "Branch manager" },
      gain: { ar: "يرى مبيعات الفرع والمخزون والفروقات لحظياً، ويضبط صلاحيات الخصم.", en: "Sees branch sales, stock and cash differences live, and controls discount rights." },
    },
    {
      role: { ar: "المحاسب", en: "Accountant" },
      gain: { ar: "القيود تُرحَّل تلقائياً لكل جلسة، والضريبة مطابقة للفواتير المبلَّغة.", en: "Entries post automatically per session and VAT matches the reported invoices." },
    },
  ],
  compare: [
    {
      before: { ar: "مبيعات تُنقل للمحاسبة يدوياً", en: "Sales re-keyed into accounting" },
      after: { ar: "قيد تلقائي عند إغلاق الجلسة", en: "Automatic entry at session close" },
    },
    {
      before: { ar: "مخزون لا يطابق الرفوف", en: "Stock that does not match the shelves" },
      after: { ar: "خصم فوري مع كل بيع", en: "Instant deduction with every sale" },
    },
    {
      before: { ar: "نظام منفصل للفوترة الإلكترونية", en: "A separate e-invoicing system" },
      after: { ar: "التبليغ من نقطة البيع نفسها", en: "Reporting from the checkout itself" },
    },
    {
      before: { ar: "توقف البيع عند انقطاع الشبكة", en: "Sales stop when the network drops" },
      after: { ar: "بيع مستمر ومزامنة لاحقة", en: "Selling continues and syncs later" },
    },
  ],
  faq: [
    {
      q: { ar: "ماذا يحدث إذا انقطع الإنترنت؟", en: "What happens if the internet goes down?" },
      a: { ar: "البيع يستمر وتُطبع الفواتير. عند عودة الاتصال تُرسل المبيعات إلى النظام وتُبلَّغ الفواتير إلى المنصة.", en: "Selling continues and receipts still print. When the connection returns, sales sync to the system and invoices are reported to the platform." },
    },
    {
      q: { ar: "هل نحتاج أجهزة جديدة؟", en: "Do we need new hardware?" },
      a: { ar: "غالباً لا. تعمل نقطة البيع على أي جهاز لوحي أو حاسوب بمتصفح حديث، ونتحقق من توافق الطابعات والموازين الحالية قبل البدء.", en: "Usually not. It runs on any tablet or PC with a modern browser, and we check your existing printers and scales before starting." },
    },
    {
      q: { ar: "هل يمكن ربط أجهزة مدى الموجودة لدينا؟", en: "Can we connect our existing mada terminals?" },
      a: { ar: "يعتمد على مزود الجهاز. نراجع الجهاز والبنك أو البوابة، ونقترح الربط المباشر أو البديل الأنسب.", en: "It depends on the terminal provider. We review your terminal and bank or gateway and suggest a direct link or the best alternative." },
    },
    {
      q: { ar: "هل تتوافق مع المرحلة الثانية من فاتورة؟", en: "Is it compliant with FATOORA phase 2?" },
      a: { ar: "نعم. Odoo يدعم الفواتير المبسطة وفق المرحلة الثانية، ونحن نسجل أجهزتكم لدى المنصة ونختبر التبليغ قبل التشغيل.", en: "Yes. Odoo supports phase 2 simplified invoices, and we onboard your devices with the platform and test reporting before go-live." },
    },
    {
      q: { ar: "كم يستغرق تشغيل نقطة البيع؟", en: "How long does POS go-live take?" },
      a: { ar: "لفرع واحد نقدّرها مبدئياً بأسبوعين إلى ثلاثة أسابيع، تشمل الأصناف والأسعار والأجهزة وتدريب الكاشير. والفروع الإضافية أسرع.", en: "For one branch, we estimate two to three weeks including products, prices, hardware and cashier training. Extra branches go faster." },
    },
  ],
};

export default d;
