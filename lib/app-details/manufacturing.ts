import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "manufacturing",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "توقفات أقل في الإنتاج", en: "Less production downtime" },
      text: {
        ar: "تخطيط الاحتياجات يطلب المواد قبل نفادها، والصيانة الوقائية تُجدول قبل تعطل الآلة.",
        en: "Material planning orders parts before they run out, and preventive maintenance is scheduled before machines fail.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "كلفة دقيقة لكل منتج", en: "Accurate cost for every product" },
      text: {
        ar: "الكلفة تجمع المواد المستهلكة فعلياً ووقت العمال والآلات على كل أمر تصنيع.",
        en: "Cost combines materials actually consumed with labour and machine time on each manufacturing order.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "مخزون مواد خام راكد أقل", en: "Less idle raw material stock" },
      text: {
        ar: "قواعد الحد الأدنى والأقصى تشتري ما يلزم للطلبات الفعلية فقط.",
        en: "Min and max rules buy only what real orders need.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "تتبع كامل للدفعات", en: "Full batch traceability" },
      text: {
        ar: "رقم الدفعة أو التسلسل يربط المنتج النهائي بالمواد والمورد وفحص الجودة.",
        en: "Lot or serial numbers link each finished product to its materials, supplier and quality check.",
      },
    },
  ],
  story: {
    title: { ar: "من خط يتوقف فجأة إلى إنتاج مخطط", en: "From sudden line stops to planned production" },
    before: {
      ar: "مشرف الإنتاج يكتشف نقص المادة عند بدء التشغيل، فيتوقف الخط حتى يصل الشراء. الكميات المستهلكة تُكتب على ورق، والكلفة تُقدّر في Excel بعد أسابيع.",
      en: "The production supervisor finds a missing material when the run starts, and the line waits for purchasing. Consumption is written on paper, and costs are estimated in Excel weeks later.",
    },
    after: {
      ar: "أمر البيع ينشئ أمر التصنيع، وMRP يطلب المواد الناقصة مسبقاً. العامل يبدأ العملية وينهيها من جهاز لوحي، والمخزون والكلفة يتحدثان لحظة إغلاق الأمر.",
      en: "The sales order creates the manufacturing order, and MRP requests missing materials in advance. Operators start and finish operations on a tablet, and stock and cost update the moment the order closes.",
    },
  },
  workflow: [
    {
      title: { ar: "الطلب يولّد الحاجة", en: "Demand creates the need" },
      text: {
        ar: "أمر بيع أو قاعدة مخزون تنشئ أمر تصنيع للمنتج المطلوب.",
        en: "A sales order or stock rule creates a manufacturing order for the product.",
      },
    },
    {
      title: { ar: "تخطيط المواد", en: "Plan materials" },
      text: {
        ar: "MRP يقرأ قائمة المواد ويقارنها بالمخزون، ثم يقترح طلبات شراء أو أوامر تصنيع فرعية.",
        en: "MRP reads the bill of materials, compares it with stock, then proposes purchase orders or sub-assembly orders.",
      },
    },
    {
      title: { ar: "حجز المواد وجدولة العمليات", en: "Reserve and schedule" },
      text: {
        ar: "المواد تُحجز للأمر، والعمليات تُجدول على مراكز العمل حسب طاقتها.",
        en: "Materials are reserved for the order and operations are scheduled on work centres by capacity.",
      },
    },
    {
      title: { ar: "التنفيذ والفحص", en: "Produce and inspect" },
      text: {
        ar: "العامل ينفذ العمليات من شاشة المصنع، ويُجري نقاط فحص الجودة الإلزامية في كل مرحلة.",
        en: "Operators run each operation from the shop-floor screen and complete mandatory quality checks at each step.",
      },
    },
    {
      title: { ar: "الإغلاق والكلفة", en: "Close and cost" },
      text: {
        ar: "عند الإغلاق تُخصم المواد ويدخل المنتج المخزون، ويُرحّل قيد الكلفة إلى المحاسبة.",
        en: "On closing, materials are consumed, the product enters stock, and the cost entry posts to accounting.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "قوائم المواد", en: "Bills of materials" },
      text: {
        ar: "قائمة المواد تحدد المكونات والكميات ونسبة الهدر لكل منتج. تدعم المنتجات بخيارات متعددة والتجميعات الفرعية.",
        en: "The bill of materials sets components, quantities and scrap allowance for each product. It handles product variants and sub-assemblies.",
      },
      points: [
        { ar: "قوائم متعددة المستويات", en: "Multi-level bills of materials" },
        { ar: "مكونات حسب خيار المنتج", en: "Components per product variant" },
        { ar: "منتجات ثانوية وهدر مخطط", en: "By-products and planned scrap" },
        { ar: "إصدارات معتمدة للتغييرات", en: "Approved versions for changes" },
      ],
    },
    {
      title: { ar: "أوامر التشغيل ومراكز العمل", en: "Work orders and work centres" },
      text: {
        ar: "كل منتج له مسار عمليات على مراكز عمل محددة، بزمن قياسي وكلفة بالساعة. ترى الطاقة المحجوزة لكل مركز في الأسبوع القادم.",
        en: "Each product has a routing across defined work centres, with standard times and hourly costs. You see booked capacity per centre for the coming week.",
      },
      points: [
        { ar: "زمن قياسي مقابل الزمن الفعلي", en: "Standard against actual time" },
        { ar: "جدولة حسب طاقة المركز", en: "Scheduling by centre capacity" },
        { ar: "مراكز بديلة عند الانشغال", en: "Alternative centres when busy" },
        { ar: "تعليمات العمل مرفقة بالعملية", en: "Work instructions on each operation" },
      ],
    },
    {
      title: { ar: "شاشات أرض المصنع", en: "Shop-floor screens" },
      text: {
        ar: "العامل يرى أوامره على جهاز لوحي بجانب الآلة، ويبدأ ويوقف ويسجل الكميات والهدر. المشرف يرى حالة كل مركز عمل مباشرة.",
        en: "Operators see their orders on a tablet at the machine and start, pause and record quantities and scrap. Supervisors see every work centre live.",
      },
      points: [
        { ar: "تشغيل وإيقاف بلمسة", en: "Start and stop with a tap" },
        { ar: "مسح الباركود للمواد والدفعات", en: "Barcode scans for materials and lots" },
        { ar: "تسجيل سبب التوقف", en: "Downtime reasons recorded" },
        { ar: "واجهة عربية للعمال", en: "Arabic interface for operators" },
      ],
    },
    {
      title: { ar: "الجودة والتتبع", en: "Quality and traceability" },
      text: {
        ar: "نقاط فحص إلزامية تمنع إكمال العملية قبل تسجيل النتيجة. عند الرفض يُفتح تنبيه جودة ويُتابع حتى الإغلاق.",
        en: "Mandatory checkpoints block an operation until the result is recorded. A failure opens a quality alert that is tracked to closure.",
      },
      points: [
        { ar: "فحص بالقياس أو بالصورة", en: "Checks by measurement or photo" },
        { ar: "فحص المواد عند الاستلام", en: "Inspection at goods receipt" },
        { ar: "تتبع الدفعة من المورد للعميل", en: "Lot tracing from supplier to customer" },
        { ar: "تواريخ انتهاء للمواد الحساسة", en: "Expiry dates for sensitive materials" },
      ],
    },
    {
      title: { ar: "تخطيط الاحتياجات والشراء", en: "Material planning and purchasing" },
      text: {
        ar: "MRP يحسب ما يلزم شراؤه وتصنيعه ومتى، بناءً على الطلبات وزمن التوريد. الاقتراحات تتحول إلى طلبات شراء بضغطة.",
        en: "MRP works out what to buy and make and when, based on orders and lead times. Suggestions become purchase orders in one click.",
      },
      points: [
        { ar: "جدول إنتاج رئيسي بالتوقعات", en: "Master production schedule from forecasts" },
        { ar: "زمن توريد لكل مورد", en: "Lead time per supplier" },
        { ar: "تصنيع خارجي لدى مقاول", en: "Subcontracted manufacturing" },
        { ar: "حدود دنيا وقصوى للمخزون", en: "Minimum and maximum stock rules" },
      ],
    },
    {
      title: { ar: "الصيانة والكلفة الفعلية", en: "Maintenance and actual cost" },
      text: {
        ar: "الصيانة الوقائية تُجدول حسب التاريخ أو ساعات التشغيل، والأعطال تُسجل كطلبات صيانة. كلفة المنتج تُحسب من الاستهلاك والوقت الفعلي وتُقارن بالمعيارية.",
        en: "Preventive maintenance is scheduled by date or running hours, and breakdowns are logged as maintenance requests. Product cost comes from actual consumption and time and is compared with standard.",
      },
      points: [
        { ar: "تقويم صيانة لكل آلة", en: "Maintenance calendar per machine" },
        { ar: "مؤشرات الأعطال ومتوسط الإصلاح", en: "Failure and repair-time indicators" },
        { ar: "انحراف الكلفة الفعلية عن المعيارية", en: "Actual versus standard cost variance" },
        { ar: "قيود كلفة تلقائية في المحاسبة", en: "Automatic cost entries in accounting" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير المصنع", en: "Plant manager" },
      gain: {
        ar: "يرى الطاقة والأوامر المتأخرة وأسباب التوقف في شاشة واحدة، ويخطط الأسبوع على بيانات فعلية.",
        en: "Sees capacity, late orders and downtime reasons on one screen, and plans the week on real data.",
      },
    },
    {
      role: { ar: "مسؤول المشتريات", en: "Purchasing officer" },
      gain: {
        ar: "يستلم اقتراحات شراء محسوبة من الطلبات، بدل طلبات عاجلة من الخط.",
        en: "Gets purchase suggestions calculated from demand, instead of urgent calls from the line.",
      },
    },
    {
      role: { ar: "المدير المالي", en: "Finance manager" },
      gain: {
        ar: "يعرف الكلفة الحقيقية لكل منتج والانحراف عن المعيار، فيسعّر بثقة.",
        en: "Knows the real cost of each product and its variance from standard, and prices with confidence.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "نقص المواد يُكتشف عند التشغيل", en: "Shortages found when the run starts" },
      after: { ar: "المواد تُطلب قبل موعد الإنتاج", en: "Materials ordered before production starts" },
    },
    {
      before: { ar: "استهلاك يُكتب على ورق", en: "Consumption written on paper" },
      after: { ar: "استهلاك يُسجل من شاشة المصنع", en: "Consumption recorded on the shop floor" },
    },
    {
      before: { ar: "كلفة تقديرية في Excel", en: "Estimated cost in Excel" },
      after: { ar: "كلفة فعلية لكل أمر تصنيع", en: "Actual cost per manufacturing order" },
    },
    {
      before: { ar: "صيانة بعد العطل فقط", en: "Maintenance only after breakdowns" },
      after: { ar: "صيانة وقائية مجدولة", en: "Scheduled preventive maintenance" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يناسب النظام التصنيع حسب الطلب والتصنيع للمخزون؟", en: "Does it fit make-to-order and make-to-stock?" },
      a: {
        ar: "نعم. أمر البيع يمكن أن ينشئ أمر تصنيع مباشرة، أو تعتمد على قواعد حد أدنى للمخزون. ويمكن الجمع بين الطريقتين حسب المنتج.",
        en: "Yes. A sales order can create a manufacturing order directly, or you can rely on minimum stock rules. Both can run side by side per product.",
      },
    },
    {
      q: { ar: "كيف ننقل قوائم المواد الحالية؟", en: "How do we migrate our current bills of materials?" },
      a: {
        ar: "نستورد المنتجات والمكونات وقوائم المواد من ملفات Excel أو نظامكم الحالي، ثم نراجع عينة مع فريق الإنتاج قبل التشغيل.",
        en: "We import products, components and bills of materials from Excel or your current system, then review a sample with your production team before go-live.",
      },
    },
    {
      q: { ar: "هل نحتاج أجهزة خاصة لأرض المصنع؟", en: "Do we need special hardware on the shop floor?" },
      a: {
        ar: "يكفي جهاز لوحي أو شاشة لمس بمتصفح حديث، مع قارئ باركود إذا كنتم تتتبعون الدفعات.",
        en: "A tablet or touch screen with a modern browser is enough, plus a barcode scanner if you track lots.",
      },
    },
    {
      q: { ar: "هل يدعم عدة مصانع أو مستودعات؟", en: "Does it support several plants or warehouses?" },
      a: {
        ar: "نعم. كل مصنع له مستودعاته ومراكز عمله، ويمكن نقل المواد والمنتجات بينها بتحويلات داخلية موثقة.",
        en: "Yes. Each plant has its own warehouses and work centres, and materials move between them through documented internal transfers.",
      },
    },
    {
      q: { ar: "كم يستغرق تطبيق التصنيع؟", en: "How long does a manufacturing rollout take?" },
      a: {
        ar: "نقدّرها مبدئياً من 8 إلى 14 أسبوعاً مع المخزون والمشتريات والمحاسبة. نبدأ بخط إنتاج واحد ثم نوسع بعد استقراره.",
        en: "We estimate 8 to 14 weeks together with inventory, purchasing and accounting. We start with one line and expand once it is stable.",
      },
    },
  ],
};

export default d;
