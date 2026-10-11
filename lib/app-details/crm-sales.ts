import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "crm-sales",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "فرص تُتابع في وقتها", en: "Opportunities followed up on time" },
      text: {
        ar: "كل فرصة لها نشاط تالٍ بتاريخ ومسؤول، والنظام ينبّه المندوب عند التأخير.",
        en: "Every opportunity has a next activity with a date and owner, and reps are alerted when it slips.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "عروض أسعار جاهزة بسرعة", en: "Quotations ready quickly" },
      text: {
        ar: "قوالب جاهزة بالأسعار والخصومات والشروط، تُرسل للعميل برابط للتوقيع والدفع.",
        en: "Ready templates with prices, discounts and terms, sent to the customer with a link to sign and pay.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا إعادة إدخال بين البيع والفوترة", en: "No retyping between sales and invoicing" },
      text: {
        ar: "عرض السعر المعتمد يصبح أمر بيع ثم أمر تسليم وفاتورة من نفس البيانات.",
        en: "An accepted quote becomes a sales order, then a delivery and an invoice from the same data.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "توقع مبيعات أدق", en: "More accurate sales forecasts" },
      text: {
        ar: "القيمة المتوقعة ونسبة الاحتمال وتاريخ الإغلاق لكل فرصة تعطي توقعاً شهرياً واقعياً.",
        en: "Expected value, probability and closing date on each opportunity give a realistic monthly forecast.",
      },
    },
  ],
  story: {
    title: { ar: "من دفتر المندوب إلى مسار يراه الجميع", en: "From a rep's notebook to a pipeline everyone sees" },
    before: {
      ar: "العملاء المحتملون في واتساب المندوب وجداول متفرقة، وعروض الأسعار تُكتب في Word بأسعار قديمة. الإدارة لا تعرف ما في المسار إلا في اجتماع الأسبوع.",
      en: "Leads sit in reps' WhatsApp chats and scattered sheets, and quotes are typed in Word with outdated prices. Management only learns what is in the pipeline at the weekly meeting.",
    },
    after: {
      ar: "كل عميل محتمل يدخل المسار من الموقع أو البريد أو المتجر، ويُسند لمندوب. العرض يخرج بالأسعار الصحيحة والمخزون المتاح، والمدير يرى القيمة المتوقعة لكل مرحلة لحظة بلحظة.",
      en: "Every lead enters the pipeline from the website, email or store and is assigned to a rep. Quotes go out with correct prices and live stock, and the manager sees expected value per stage in real time.",
    },
  },
  workflow: [
    {
      title: { ar: "التقاط العميل المحتمل", en: "Capture the lead" },
      text: {
        ar: "العميل المحتمل يُنشأ من نموذج الموقع أو البريد أو رسالة واتساب، ويُسند تلقائياً حسب المنطقة أو المنتج.",
        en: "Leads are created from the website form, email or a WhatsApp message and assigned by region or product.",
      },
    },
    {
      title: { ar: "التأهيل والمتابعة", en: "Qualify and follow up" },
      text: {
        ar: "المندوب يسجل المكالمات والاجتماعات، ويحدد القيمة المتوقعة والخطوة التالية.",
        en: "The rep logs calls and meetings and sets the expected value and next step.",
      },
    },
    {
      title: { ar: "عرض السعر", en: "Send the quotation" },
      text: {
        ar: "عرض سعر من قالب بقائمة الأسعار الصحيحة، يُرسل بالبريد أو واتساب مع رابط التوقيع والدفع.",
        en: "A quote from a template with the right pricelist, sent by email or WhatsApp with a sign and pay link.",
      },
    },
    {
      title: { ar: "تأكيد أمر البيع", en: "Confirm the sales order" },
      text: {
        ar: "بعد موافقة العميل يتحول العرض إلى أمر بيع، ويُحجز المخزون ويُنشأ أمر التسليم.",
        en: "Once accepted, the quote becomes a sales order, stock is reserved and a delivery order is created.",
      },
    },
    {
      title: { ar: "الفوترة والتحصيل", en: "Invoice and collect" },
      text: {
        ar: "الفاتورة تُصدر من أمر البيع وتُرسل للمنصة، والعمولة تُحتسب للمندوب عند التحصيل.",
        en: "The invoice is issued from the order and sent to the platform, and the rep's commission is calculated on payment.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "العملاء المحتملون والفرص", en: "Leads and opportunities" },
      text: {
        ar: "كل طلب اهتمام يصل إلى مكان واحد مهما كان مصدره. قواعد الإسناد توزعه على الفريق، ولوحة كانبان تعرض كل فرصة بمرحلتها وقيمتها.",
        en: "Every inquiry lands in one place whatever its source. Assignment rules spread leads across the team, and a kanban board shows each opportunity with its stage and value.",
      },
      points: [
        { ar: "التقاط من الموقع والبريد وواتساب", en: "Capture from website, email and WhatsApp" },
        { ar: "إسناد تلقائي حسب المنطقة أو المنتج", en: "Auto-assignment by region or product" },
        { ar: "تقييم العملاء المحتملين حسب الأولوية", en: "Lead scoring by priority" },
        { ar: "دمج المكرر من العملاء", en: "Merging duplicate contacts" },
      ],
    },
    {
      title: { ar: "الأنشطة وسجل التواصل", en: "Activities and communication history" },
      text: {
        ar: "كل مكالمة واجتماع ورسالة مسجلة على بطاقة العميل. إذا غاب المندوب يكمل زميله من حيث توقف دون أن يسأل العميل من جديد.",
        en: "Every call, meeting and message is logged on the customer card. If a rep is away, a colleague continues from where they stopped without asking the customer again.",
      },
      points: [
        { ar: "أنشطة مجدولة بتذكير", en: "Scheduled activities with reminders" },
        { ar: "سجل كامل للبريد والرسائل", en: "Full email and message history" },
        { ar: "رسائل واتساب من داخل النظام", en: "WhatsApp messages from inside the system" },
        { ar: "مزامنة مع تقويم المندوب", en: "Sync with the rep's calendar" },
      ],
    },
    {
      title: { ar: "عروض الأسعار", en: "Quotations" },
      text: {
        ar: "العرض يُبنى من قوالب فيها المنتجات والشروط والصلاحية. العميل يفتحه من رابط، يوقّع إلكترونياً، ويدفع مقدماً إن طلبت ذلك.",
        en: "Quotes are built from templates with products, terms and validity. The customer opens a link, signs electronically and pays a deposit if you require one.",
      },
      points: [
        { ar: "قوالب ثنائية اللغة بشعارك", en: "Bilingual templates with your logo" },
        { ar: "منتجات اختيارية وخيارات إضافية", en: "Optional products and upsells" },
        { ar: "توقيع إلكتروني ودفع عبر mada وApple Pay", en: "E-signature and payment via mada and Apple Pay" },
        { ar: "اعتماد المدير للخصومات الكبيرة", en: "Manager approval for large discounts" },
      ],
    },
    {
      title: { ar: "أوامر البيع والتسليم", en: "Sales orders and delivery" },
      text: {
        ar: "المندوب يرى الكمية المتاحة في كل مستودع قبل أن يعد العميل بموعد. تأكيد الطلب يحجز البضاعة ويُبلغ المستودع مباشرة.",
        en: "Reps see available quantity per warehouse before promising a date. Confirming the order reserves the goods and notifies the warehouse straight away.",
      },
      points: [
        { ar: "المخزون المتاح على سطر الطلب", en: "Available stock on the order line" },
        { ar: "تسليم جزئي وطلبات متأخرة", en: "Partial deliveries and backorders" },
        { ar: "فوترة حسب الطلب أو المُسلَّم", en: "Invoice on order or on delivery" },
        { ar: "طلبات Salla وZid وShopify في نفس القائمة", en: "Salla, Zid and Shopify orders in one list" },
      ],
    },
    {
      title: { ar: "الأسعار والخصومات", en: "Pricing and discounts" },
      text: {
        ar: "قوائم أسعار لكل فئة عملاء أو عملة أو موسم. الخصومات والعروض تُطبق تلقائياً، فلا يحتاج المندوب أن يحسب.",
        en: "Pricelists per customer group, currency or season. Discounts and promotions apply automatically, so reps do not calculate by hand.",
      },
      points: [
        { ar: "أسعار جملة وتجزئة ومشاريع", en: "Wholesale, retail and project prices" },
        { ar: "أسعار بالريال والدينار والدولار", en: "Prices in SAR, JOD and USD" },
        { ar: "خصم حسب الكمية أو الفترة", en: "Discounts by quantity or period" },
        { ar: "عروض وكوبونات", en: "Promotions and coupons" },
      ],
    },
    {
      title: { ar: "المستهدفات والتقارير", en: "Targets and reports" },
      text: {
        ar: "لكل مندوب وفريق مستهدف شهري، ولوحة تعرض المحقق والمتوقع. تقارير الفرص المفقودة وأسبابها تبيّن أين تخسر الصفقات.",
        en: "Each rep and team has a monthly target, with a dashboard of achieved versus forecast. Lost-deal reports with reasons show where you lose sales.",
      },
      points: [
        { ar: "مستهدفات للمندوب والفريق", en: "Targets per rep and team" },
        { ar: "احتساب العمولات حسب قواعدك", en: "Commissions calculated by your rules" },
        { ar: "أسباب خسارة الصفقات", en: "Reasons for lost deals" },
        { ar: "توقع الإيرادات حسب تاريخ الإغلاق", en: "Revenue forecast by closing date" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير المبيعات", en: "Sales manager" },
      gain: {
        ar: "يرى المسار كاملاً وأداء كل مندوب دون انتظار التقارير، ويتدخل في الفرص المتعثرة مبكراً.",
        en: "Sees the full pipeline and each rep's performance without waiting for reports, and steps into stalled deals early.",
      },
    },
    {
      role: { ar: "مندوب المبيعات", en: "Sales rep" },
      gain: {
        ar: "يعرف ما عليه اليوم، ويُعد العرض بسرعة، ويرى المخزون والسعر الصحيح من جواله.",
        en: "Knows today's tasks, prepares quotes quickly and sees stock and the right price from the phone.",
      },
    },
    {
      role: { ar: "فريق المالية والمستودع", en: "Finance and warehouse teams" },
      gain: {
        ar: "يستلمون أمر البيع المؤكد بكل تفاصيله، فلا مكالمات للاستفسار ولا أخطاء في الكميات.",
        en: "Receive the confirmed order with every detail, so there are no clarification calls or quantity errors.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "عملاء محتملون في جوال المندوب", en: "Leads stored on reps' phones" },
      after: { ar: "مسار مشترك يملكه النظام لا الأفراد", en: "A shared pipeline owned by the company" },
    },
    {
      before: { ar: "عروض أسعار في Word بأسعار قديمة", en: "Word quotes with outdated prices" },
      after: { ar: "عروض من قوالب بقائمة الأسعار الحالية", en: "Template quotes using the current pricelist" },
    },
    {
      before: { ar: "وعود تسليم دون معرفة المخزون", en: "Delivery promises without knowing stock" },
      after: { ar: "الكمية المتاحة ظاهرة قبل التأكيد", en: "Available quantity shown before confirming" },
    },
    {
      before: { ar: "حساب العمولات يدوياً آخر الشهر", en: "Commissions calculated by hand at month end" },
      after: { ar: "عمولات تُحتسب من الفواتير المحصلة", en: "Commissions computed from paid invoices" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يمكن نقل عملائنا وفرصنا من Salesforce أو HubSpot أو Excel؟", en: "Can we import our customers and deals from Salesforce, HubSpot or Excel?" },
      a: {
        ar: "نعم. ننقل جهات الاتصال والشركات والفرص المفتوحة وسجل الأنشطة المهم، ونراجع البيانات المكررة قبل الاستيراد.",
        en: "Yes. We move contacts, companies, open deals and key activity history, and clean duplicates before importing.",
      },
    },
    {
      q: { ar: "هل يعمل على الجوال للمندوبين في الميدان؟", en: "Does it work on mobile for field reps?" },
      a: {
        ar: "نعم، من المتصفح أو تطبيق Odoo. المندوب يسجل الزيارة وينشئ العرض ويرسله من الجوال، ويحتاج اتصالاً بالإنترنت.",
        en: "Yes, through the browser or the Odoo app. Reps log visits and create and send quotes from the phone, with an internet connection.",
      },
    },
    {
      q: { ar: "هل يرى كل مندوب عملاءه فقط؟", en: "Can each rep see only their own customers?" },
      a: {
        ar: "نعم. نضبط الصلاحيات بحيث يرى المندوب فرصه، ومدير الفريق فرص فريقه، والإدارة كل شيء.",
        en: "Yes. We set permissions so reps see their own deals, team leads see their team's, and management sees everything.",
      },
    },
    {
      q: { ar: "كيف يعمل الربط مع واتساب؟", en: "How does the WhatsApp link work?" },
      a: {
        ar: "نربط رقمك عبر WhatsApp Business API، فتُرسل العروض والتذكيرات وحالة الطلب بقوالب معتمدة، وتظهر الردود على بطاقة العميل.",
        en: "We connect your number through the WhatsApp Business API, so quotes, reminders and order status go out as approved templates and replies appear on the customer card.",
      },
    },
    {
      q: { ar: "هل يتكامل مع متجري على Salla أو Zid؟", en: "Does it connect to my Salla or Zid store?" },
      a: {
        ar: "نعم، نبني الربط بحيث تصل الطلبات والعملاء إلى Odoo، ويُحدّث المخزون في المتجر تلقائياً.",
        en: "Yes, we build the connector so orders and customers flow into Odoo and stock updates in the store automatically.",
      },
    },
  ],
};

export default d;
