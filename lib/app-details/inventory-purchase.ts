import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "inventory-purchase",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "فروقات جرد أقل", en: "Fewer stock discrepancies" },
      text: {
        ar: "كل حركة تُسجل بالباركود لحظة حدوثها، فيبقى الرصيد في النظام مطابقاً للرف.",
        en: "Every move is scanned as it happens, so the system balance matches the shelf.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "حالات نفاد مخزون أقل", en: "Fewer stockouts" },
      text: {
        ar: "قواعد الحد الأدنى والأقصى تنشئ طلبات الشراء قبل أن ينفد الصنف.",
        en: "Min/max rules raise purchase requests before an item runs out.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "مخزون راكد أقل", en: "Less slow-moving stock" },
      text: {
        ar: "تقارير دوران المخزون تكشف الأصناف الراكدة، فتشتري ما يُباع فعلاً.",
        en: "Turnover reports reveal slow movers, so you buy what actually sells.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "تجهيز أسرع للطلبات", en: "Faster order picking" },
      text: {
        ar: "قوائم تجميع مرتبة حسب الموقع وماسح باركود يؤكد كل صنف قبل الشحن.",
        en: "Pick lists sorted by location and a barcode scanner that confirms each item before shipping.",
      },
    },
  ],
  story: {
    title: { ar: "من جرد مفاجئ إلى رصيد تثق به", en: "From surprise counts to a balance you trust" },
    before: {
      ar: "أرصدة المستودعات في Excel تُحدّث نهاية اليوم، والمبيعات تبيع ما ليس موجوداً. الشراء يتم عند النفاد، والجرد السنوي يكشف فروقات لا أحد يعرف سببها.",
      en: "Warehouse balances live in Excel and update at day end, and sales sell what is not there. Buying happens after stockouts, and the annual count reveals gaps nobody can explain.",
    },
    after: {
      ar: "كل استلام وتحويل وتسليم يُسجل بالباركود فوراً، والمبيعات ترى المتاح في كل فرع. طلبات الشراء تُقترح تلقائياً، والجرد الدوري يصحح الفروقات أولاً بأول.",
      en: "Every receipt, transfer and delivery is scanned at once, and sales see what is available in each branch. Purchase requests are suggested automatically, and cycle counts fix gaps as they appear.",
    },
  },
  workflow: [
    {
      title: { ar: "طلب الشراء", en: "Raise the request" },
      text: {
        ar: "قاعدة إعادة الطلب أو أحد الأقسام ينشئ طلب عرض سعر للمورد المفضل.",
        en: "A reorder rule or a department creates a request for quotation to the preferred vendor.",
      },
    },
    {
      title: { ar: "اعتماد أمر الشراء", en: "Approve the purchase order" },
      text: {
        ar: "أفضل عرض يتحول إلى أمر شراء، ويُعتمد حسب حدود المبالغ التي تحددها.",
        en: "The best offer becomes a purchase order, approved according to the amount limits you set.",
      },
    },
    {
      title: { ar: "الاستلام والفحص", en: "Receive and inspect" },
      text: {
        ar: "المستودع يستلم بالباركود ويسجل الدفعة أو الرقم التسلسلي وتاريخ الانتهاء، ثم يضعها في موقعها.",
        en: "The warehouse receives by barcode, records the lot or serial and expiry date, then puts items away.",
      },
    },
    {
      title: { ar: "التجميع والشحن", en: "Pick and ship" },
      text: {
        ar: "أمر البيع ينشئ أمر تسليم، يُجمع ويُغلف وتُصدر له بوليصة Aramex أو SMSA.",
        en: "The sales order creates a delivery, which is picked, packed and given an Aramex or SMSA waybill.",
      },
    },
    {
      title: { ar: "الفوترة والتقييم", en: "Bill and value" },
      text: {
        ar: "فاتورة المورد تُطابق مع الاستلام، وقيمة المخزون وتكلفة المبيعات تُقيد في المحاسبة.",
        en: "The vendor bill is matched to the receipt, and stock value and cost of sales post to accounting.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "المستودعات والمواقع", en: "Warehouses and locations" },
      text: {
        ar: "كل فرع له مستودعه، وكل مستودع مقسم إلى مناطق ورفوف. ترى الكمية في أي موقع، وتنقل بين الفروع بأوامر تحويل موثقة.",
        en: "Each branch has its warehouse, split into zones and bins. You see quantity in any location and move stock between branches with documented transfers.",
      },
      points: [
        { ar: "مستودعات في الرياض وجدة وعمّان", en: "Warehouses across Riyadh, Jeddah and Amman" },
        { ar: "مواقع ورفوف داخل كل مستودع", en: "Zones and bins within each warehouse" },
        { ar: "تحويلات بين الفروع بحالة واضحة", en: "Inter-branch transfers with clear status" },
        { ar: "استلام وتسليم بخطوة أو عدة خطوات", en: "One-step or multi-step receipts and deliveries" },
      ],
    },
    {
      title: { ar: "الباركود والتتبع", en: "Barcode and traceability" },
      text: {
        ar: "تطبيق الباركود يعمل على الماسحات والجوالات. تتبع الدفعات والأرقام التسلسلية وتواريخ الانتهاء يحدد أين ذهب كل صنف.",
        en: "The barcode app runs on scanners and phones. Lot, serial and expiry tracking shows where every item went.",
      },
      points: [
        { ar: "استلام وتجميع وجرد بالماسح", en: "Receiving, picking and counting by scanner" },
        { ar: "دفعات وأرقام تسلسلية", en: "Lots and serial numbers" },
        { ar: "صرف الأقدم انتهاءً أولاً", en: "First-expiry, first-out picking" },
        { ar: "طباعة ملصقات باركود للأصناف", en: "Printing product barcode labels" },
      ],
    },
    {
      title: { ar: "المشتريات والموردون", en: "Purchasing and vendors" },
      text: {
        ar: "لكل صنف موردوه وأسعارهم ومدد توريدهم. تقارن العروض وتعتمد أمر الشراء ضمن صلاحيات مالية محددة.",
        en: "Each item has its vendors, prices and lead times. You compare offers and approve purchase orders within set financial limits.",
      },
      points: [
        { ar: "طلبات عروض أسعار ومقارنتها", en: "RFQs and offer comparison" },
        { ar: "اعتماد حسب مستويات المبالغ", en: "Approval by amount levels" },
        { ar: "اتفاقيات شراء وأسعار متفق عليها", en: "Purchase agreements and agreed prices" },
        { ar: "تقييم أداء المورد في التسليم", en: "Vendor delivery performance" },
      ],
    },
    {
      title: { ar: "إعادة الطلب التلقائي", en: "Automatic replenishment" },
      text: {
        ar: "تحدد حداً أدنى وأقصى لكل صنف في كل مستودع. النظام يقترح الكمية المطلوبة بناءً على الرصيد والطلبات المفتوحة ومدة التوريد.",
        en: "You set a minimum and maximum per item per warehouse. The system proposes quantities from stock, open orders and lead time.",
      },
      points: [
        { ar: "حد أدنى وأقصى لكل مستودع", en: "Min/max per warehouse" },
        { ar: "اقتراح كميات حسب مدة التوريد", en: "Quantity suggestions based on lead time" },
        { ar: "تجديد الفروع من المستودع الرئيسي", en: "Restocking branches from the main warehouse" },
        { ar: "شاشة واحدة لكل ما يجب طلبه", en: "One screen for everything to order" },
      ],
    },
    {
      title: { ar: "الجرد والتقييم", en: "Counts and valuation" },
      text: {
        ar: "الجرد الدوري يقسم الأصناف على أيام السنة بدل إغلاق المستودع. التقييم بالتكلفة المتوسطة أو الوارد أولاً يُقيد في المحاسبة تلقائياً.",
        en: "Cycle counts spread items across the year instead of closing the warehouse. Valuation at average cost or FIFO posts to accounting automatically.",
      },
      points: [
        { ar: "جرد دوري حسب الموقع أو الفئة", en: "Cycle counts by location or category" },
        { ar: "تسوية الفروقات بقيد محاسبي", en: "Adjustments posted as journal entries" },
        { ar: "تكلفة متوسطة أو الوارد أولاً", en: "Average cost or FIFO" },
        { ar: "تكاليف الشحن والجمارك على التكلفة", en: "Freight and customs added to cost" },
      ],
    },
    {
      title: { ar: "الشحن والمتاجر الإلكترونية", en: "Shipping and online stores" },
      text: {
        ar: "نربط Aramex وSMSA لإصدار البوليصة من أمر التسليم وتتبعها. طلبات Salla وZid وShopify تصل إلى المستودع مباشرة، والرصيد يعود للمتجر.",
        en: "We connect Aramex and SMSA to issue waybills from the delivery order and track them. Salla, Zid and Shopify orders reach the warehouse directly, and stock syncs back to the store.",
      },
      points: [
        { ar: "بوليصة شحن من أمر التسليم", en: "Waybill from the delivery order" },
        { ar: "رقم التتبع يُرسل للعميل", en: "Tracking number sent to the customer" },
        { ar: "طلبات المتجر تصل للمستودع", en: "Store orders reach the warehouse" },
        { ar: "مزامنة الرصيد مع المتجر", en: "Stock synced to the store" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير المستودع", en: "Warehouse manager" },
      gain: {
        ar: "يعرف ما في كل رف، ويوزع مهام الاستلام والتجميع، ويصحح الفروقات قبل أن تكبر.",
        en: "Knows what sits on every shelf, assigns receiving and picking tasks, and fixes gaps before they grow.",
      },
    },
    {
      role: { ar: "مسؤول المشتريات", en: "Purchasing officer" },
      gain: {
        ar: "قائمة يومية بما يجب شراؤه، ومقارنة عروض الموردين، وأوامر معتمدة دون مراسلات طويلة.",
        en: "A daily list of what to buy, vendor offer comparison and approved orders without long email chains.",
      },
    },
    {
      role: { ar: "الإدارة المالية", en: "Finance team" },
      gain: {
        ar: "قيمة مخزون صحيحة في أي يوم، وتكلفة مبيعات تُقيد تلقائياً مع كل تسليم.",
        en: "Correct stock value on any day, and cost of sales posted automatically with each delivery.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "أرصدة في Excel تُحدّث آخر اليوم", en: "Excel balances updated at day end" },
      after: { ar: "رصيد لحظي مع كل حركة", en: "Live balance with every move" },
    },
    {
      before: { ar: "شراء بعد نفاد الصنف", en: "Buying after an item runs out" },
      after: { ar: "طلبات شراء مقترحة قبل النفاد", en: "Purchase requests suggested before stockout" },
    },
    {
      before: { ar: "إغلاق المستودع للجرد السنوي", en: "Closing the warehouse for the annual count" },
      after: { ar: "جرد دوري دون توقف العمل", en: "Cycle counts without stopping work" },
    },
    {
      before: { ar: "نسخ بيانات الشحنة إلى موقع شركة الشحن", en: "Retyping shipments into the courier's site" },
      after: { ar: "بوليصة تُصدر من أمر التسليم", en: "Waybills issued from the delivery order" },
    },
  ],
  faq: [
    {
      q: { ar: "كيف ننقل أرصدتنا الحالية إلى النظام؟", en: "How do we move our current balances into the system?" },
      a: {
        ar: "نستورد الأصناف والموردين من ملفاتك، ثم ننفذ جرداً افتتاحياً بالباركود ليبدأ الرصيد مطابقاً للواقع.",
        en: "We import items and vendors from your files, then run an opening count by barcode so balances start true.",
      },
    },
    {
      q: { ar: "ما الأجهزة التي نحتاجها للباركود؟", en: "What devices do we need for barcode?" },
      a: {
        ar: "يكفي جوال أندرويد أو آيفون بالكاميرا، أو ماسحات مستودعات صناعية لحجم أكبر. نساعدك في اختيار الأنسب.",
        en: "A phone camera is enough to start, or rugged warehouse scanners for higher volume. We help you choose.",
      },
    },
    {
      q: { ar: "هل يدعم تواريخ الانتهاء للأغذية والأدوية؟", en: "Does it handle expiry dates for food and pharma?" },
      a: {
        ar: "نعم. تُسجل تواريخ الانتهاء لكل دفعة، ويُصرف الأقدم انتهاءً أولاً، مع تنبيه قبل الانتهاء.",
        en: "Yes. Expiry dates are recorded per lot, the earliest expiry is picked first, and you get alerts before items expire.",
      },
    },
    {
      q: { ar: "هل يمكن تقييد كل أمين مستودع بمستودعه؟", en: "Can each storekeeper be limited to their own warehouse?" },
      a: {
        ar: "نعم. نضبط الصلاحيات حسب المستودع، ونحدد من يعتمد أوامر الشراء حسب المبلغ.",
        en: "Yes. We set permissions per warehouse and define who approves purchase orders by amount.",
      },
    },
    {
      q: { ar: "هل يعمل مع المحاسبة مباشرة؟", en: "Does it work with accounting directly?" },
      a: {
        ar: "نعم. الاستلام والتسليم والتسويات تُقيد بقيمتها في الحسابات، وفاتورة المورد تُطابق مع الكمية المستلمة.",
        en: "Yes. Receipts, deliveries and adjustments post their value to accounting, and vendor bills are matched to received quantities.",
      },
    },
  ],
};

export default d;
