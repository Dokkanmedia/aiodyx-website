import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "ecommerce",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "لا طلبات على أصناف غير متوفرة", en: "No orders for out-of-stock items" },
      text: { ar: "المتجر يقرأ رصيد المستودع الفعلي، فيتوقف عرض الصنف عند نفاده.", en: "The store reads real warehouse stock, so an item stops selling when it runs out." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "من الطلب إلى بوليصة الشحن بسرعة", en: "From order to shipping label, fast" },
      text: { ar: "الطلب يصل النظام مباشرة، وبوليصة Aramex أو SMSA تُنشأ منه دون إعادة إدخال.", en: "Orders arrive directly and the Aramex or SMSA waybill is created from them without retyping." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "كل طلب مفوتر إلكترونياً", en: "Every order e-invoiced" },
      text: { ar: "كل طلب يُفوتر وتُبلَّغ فاتورته إلى فاتورة أو جو فوترة تلقائياً.", en: "Every order is invoiced and reported to FATOORA or JoFotara automatically." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "رؤية واحدة لمبيعات المتجر والفروع", en: "One view of online and in-store sales" },
      text: { ar: "تقارير المبيعات تجمع المتجر ونقاط البيع والجملة حسب القناة.", en: "Sales reports combine the online store, POS and wholesale by channel." },
    },
  ],
  story: {
    title: { ar: "من نسخ الطلبات يدوياً إلى متجر متصل بالمستودع", en: "From copying orders by hand to a store linked to the warehouse" },
    before: {
      ar: "موظف ينسخ طلبات سلة أو زد إلى النظام كل صباح. المخزون على المتجر لا يطابق المستودع، فيُباع صنف نفد ويُلغى الطلب. والبوليصة تُكتب يدوياً على موقع شركة الشحن.",
      en: "Someone copies Salla or Zid orders into the system every morning. Store stock does not match the warehouse, so out-of-stock items sell and orders get cancelled. Waybills are typed by hand on the courier's site.",
    },
    after: {
      ar: "الطلب يصل النظام لحظة الدفع، والمخزون والأسعار تتحدث على المتجر تلقائياً. المستودع يجهّز الطلب وتُنشأ البوليصة منه، والعميل يتلقى رقم التتبع على واتساب.",
      en: "The order lands in the system the moment it is paid, and stock and prices update on the store automatically. The warehouse picks the order, the waybill is created from it and the customer gets the tracking number on WhatsApp.",
    },
  },
  workflow: [
    {
      title: { ar: "استلام الطلب", en: "Receive the order" },
      text: { ar: "الطلب يصل من متجر Odoo أو سلة أو زد أو Shopify إلى النظام مباشرة.", en: "The order arrives from the Odoo store, Salla, Zid or Shopify straight into the system." },
    },
    {
      title: { ar: "تأكيد الدفع", en: "Confirm payment" },
      text: { ar: "الدفع عبر مدى أو Apple Pay أو البطاقة يُسجَّل ويُطابق مع الطلب.", en: "Payment by mada, Apple Pay or card is recorded and matched to the order." },
    },
    {
      title: { ar: "التجهيز في المستودع", en: "Pick and pack" },
      text: { ar: "أمر التسليم يظهر للمستودع، والمخزون يُحجز ويُخصم.", en: "A delivery order appears for the warehouse and stock is reserved and deducted." },
    },
    {
      title: { ar: "الشحن والتتبع", en: "Ship and track" },
      text: { ar: "تُنشأ بوليصة الشحن، ويصل رقم التتبع للعميل بالبريد أو واتساب.", en: "The waybill is created and the tracking number reaches the customer by email or WhatsApp." },
    },
    {
      title: { ar: "الفوترة والتسوية", en: "Invoice and reconcile" },
      text: { ar: "الفاتورة تُصدر وتُبلَّغ، ودفعات البوابة تُطابق مع الطلبات في الحساب البنكي.", en: "The invoice is issued and reported, and gateway payouts are matched to orders in the bank account." },
    },
  ],
  sections: [
    {
      title: { ar: "متجر على Odoo", en: "A store built on Odoo" },
      text: {
        ar: "نبني متجراً بالعربية والإنجليزية متصلاً مباشرة بالمخزون والمحاسبة. الأسعار والصور والأوصاف تُدار من مكان واحد.",
        en: "We build a bilingual store connected directly to inventory and accounting. Prices, images and descriptions are managed in one place.",
      },
      points: [
        { ar: "واجهة عربية من اليمين لليسار", en: "Right-to-left Arabic storefront" },
        { ar: "متغيرات الأصناف كالمقاس واللون", en: "Variants such as size and colour" },
        { ar: "حسابات العملاء وسجل الطلبات", en: "Customer accounts and order history" },
        { ar: "صفحات متوافقة مع محركات البحث", en: "Search-engine friendly pages" },
      ],
    },
    {
      title: { ar: "ربط سلة وزد وShopify", en: "Salla, Zid and Shopify sync" },
      text: {
        ar: "إذا كان متجرك يعمل على سلة أو زد أو Shopify تحتفظ به كما هو. نربطه بالنظام فتصل الطلبات وتعود الأرصدة والأسعار تلقائياً.",
        en: "If your store runs on Salla, Zid or Shopify, you keep it. We connect it so orders flow in and stock and prices flow back automatically.",
      },
      points: [
        { ar: "سحب الطلبات تلقائياً", en: "Orders pulled automatically" },
        { ar: "تحديث المخزون والأسعار على المتجر", en: "Stock and prices pushed to the store" },
        { ar: "ربط الأصناف برمز SKU", en: "Products matched by SKU" },
        { ar: "أكثر من متجر في نظام واحد", en: "Several stores in one system" },
      ],
    },
    {
      title: { ar: "الدفع الإلكتروني", en: "Online payments" },
      text: {
        ar: "نربط بوابات الدفع المحلية حتى يدفع العميل بالطريقة التي يفضلها. كل دفعة تُسجَّل على الطلب وتُطابق لاحقاً مع تحويل البوابة.",
        en: "We connect local gateways so customers pay the way they prefer. Each payment is recorded on the order and later matched with the gateway payout.",
      },
      points: [
        { ar: "مدى وApple Pay والبطاقات", en: "mada, Apple Pay and cards" },
        { ar: "HyperPay وTap وMoyasar", en: "HyperPay, Tap and Moyasar" },
        { ar: "الدفع عند الاستلام", en: "Cash on delivery" },
        { ar: "تسوية دفعات البوابة مع البنك", en: "Gateway payouts reconciled with the bank" },
      ],
    },
    {
      title: { ar: "الشحن والتوصيل", en: "Shipping and delivery" },
      text: {
        ar: "البوليصة تُنشأ من أمر التسليم وتُطبع من المستودع. حالة الشحنة تُحدَّث في النظام ويُبلَّغ العميل.",
        en: "The waybill is created from the delivery order and printed in the warehouse. Shipment status updates in the system and the customer is notified.",
      },
      points: [
        { ar: "ربط مع Aramex وSMSA", en: "Aramex and SMSA integration" },
        { ar: "طباعة البوليصة من المستودع", en: "Print waybills in the warehouse" },
        { ar: "رسوم شحن حسب المدينة أو الوزن", en: "Shipping fees by city or weight" },
        { ar: "رقم التتبع على واتساب", en: "Tracking number on WhatsApp" },
      ],
    },
    {
      title: { ar: "التسويق والسلة المهجورة", en: "Marketing and abandoned carts" },
      text: {
        ar: "العميل الذي ترك السلة يتلقى تذكيراً تلقائياً. والكوبونات والعروض تُدار من النظام وتُقاس نتيجتها.",
        en: "Customers who leave a cart get an automatic reminder. Coupons and promotions are managed in the system and their results are measured.",
      },
      points: [
        { ar: "تذكير السلة المهجورة", en: "Abandoned cart reminders" },
        { ar: "كوبونات وعروض موسمية", en: "Coupons and seasonal offers" },
        { ar: "رسائل واتساب بقوالب معتمدة", en: "WhatsApp messages with approved templates" },
        { ar: "قياس المبيعات لكل حملة", en: "Sales measured per campaign" },
      ],
    },
    {
      title: { ar: "الفوترة والتقارير", en: "Invoicing and reporting" },
      text: {
        ar: "كل طلب مدفوع يتحول إلى فاتورة مبلَّغة إلى المنصة مع ضريبة القيمة المضافة. والتقارير تبين المبيعات والهامش لكل قناة ومنتج.",
        en: "Every paid order becomes an invoice reported to the platform with VAT. Reports show sales and margin per channel and product.",
      },
      points: [
        { ar: "فاتورة إلكترونية لكل طلب", en: "An e-invoice for every order" },
        { ar: "مرتجعات وإشعارات دائنة", en: "Returns and credit notes" },
        { ar: "المبيعات والهامش حسب القناة", en: "Sales and margin by channel" },
        { ar: "الأصناف الأكثر طلباً", en: "Best-selling items" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير المتجر الإلكتروني", en: "E-commerce manager" },
      gain: { ar: "يدير الأصناف والعروض من مكان واحد، ويقيس أداء كل حملة.", en: "Manages products and offers in one place and measures each campaign." },
    },
    {
      role: { ar: "مسؤول المستودع", en: "Warehouse lead" },
      gain: { ar: "يرى الطلبات الجاهزة للتجهيز ويطبع البوليصة دون موقع شركة الشحن.", en: "Sees orders ready to pick and prints waybills without the courier's website." },
    },
    {
      role: { ar: "المحاسب", en: "Accountant" },
      gain: { ar: "الفواتير مبلَّغة تلقائياً، ودفعات البوابة مطابقة مع الطلبات والبنك.", en: "Invoices are reported automatically and gateway payouts match orders and the bank." },
    },
  ],
  compare: [
    {
      before: { ar: "نسخ الطلبات من المتجر يدوياً", en: "Store orders copied by hand" },
      after: { ar: "الطلبات تصل النظام تلقائياً", en: "Orders flow in automatically" },
    },
    {
      before: { ar: "بيع أصناف نفدت من المستودع", en: "Selling items already out of stock" },
      after: { ar: "رصيد المتجر يطابق المستودع", en: "Store stock matches the warehouse" },
    },
    {
      before: { ar: "بوليصة تُكتب على موقع الشحن", en: "Waybills typed on the courier site" },
      after: { ar: "بوليصة تُنشأ من الطلب", en: "Waybills created from the order" },
    },
    {
      before: { ar: "دفعات البوابة بلا مطابقة", en: "Gateway payouts left unmatched" },
      after: { ar: "تسوية الدفعات مع كل طلب", en: "Payouts reconciled order by order" },
    },
  ],
  faq: [
    {
      q: { ar: "لدينا متجر على سلة، هل نحتاج نقله إلى Odoo؟", en: "We already run a Salla store. Do we need to move to Odoo?" },
      a: { ar: "لا. يبقى متجرك على سلة كما هو، ونربطه بالنظام لتصل الطلبات وتتحدث الأرصدة والأسعار تلقائياً. والأمر نفسه مع زد وShopify.", en: "No. Your Salla store stays as it is and we connect it so orders flow in and stock and prices update automatically. The same applies to Zid and Shopify." },
    },
    {
      q: { ar: "متى نختار متجراً على Odoo؟", en: "When should we choose a store on Odoo?" },
      a: { ar: "عندما تحتاج أسعاراً خاصة لعملاء الجملة، أو بوابة لعملاء الشركات، أو ربطاً أعمق مع المخزون والمحاسبة دون اشتراك إضافي.", en: "When you need special prices for wholesale customers, a B2B portal, or tighter links to stock and accounting without another subscription." },
    },
    {
      q: { ar: "كم مرة يتحدث المخزون على المتجر؟", en: "How often does stock update on the store?" },
      a: { ar: "في متجر Odoo يكون التحديث لحظياً. ومع سلة وزد وShopify تُضبط المزامنة كل بضع دقائق أو عند كل حركة مخزون.", en: "On an Odoo store it is instant. With Salla, Zid and Shopify, sync runs every few minutes or on each stock move." },
    },
    {
      q: { ar: "هل تُبلَّغ فواتير المتجر إلى فاتورة؟", en: "Are online orders reported to FATOORA?" },
      a: { ar: "نعم. كل طلب مدفوع يتحول إلى فاتورة مبسطة أو ضريبية حسب العميل وتُبلَّغ إلى فاتورة، أو إلى جو فوترة للشركات في الأردن.", en: "Yes. Each paid order becomes a simplified or standard tax invoice depending on the customer and is reported to FATOORA, or to JoFotara for Jordanian companies." },
    },
    {
      q: { ar: "كم يستغرق الربط أو بناء المتجر؟", en: "How long does the integration or store build take?" },
      a: { ar: "ربط متجر قائم نقدّره مبدئياً بأسبوعين إلى ثلاثة. وبناء متجر جديد على Odoo من أربعة إلى ستة أسابيع حسب عدد الأصناف والتصميم.", en: "Connecting an existing store we estimate at two to three weeks. A new Odoo store takes four to six weeks depending on catalogue size and design." },
    },
  ],
};

export default d;
