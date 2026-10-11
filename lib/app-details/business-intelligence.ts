import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "business-intelligence",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "أرقام لحظية بدل تقرير آخر الشهر", en: "Live figures instead of a month-end report" },
      text: { ar: "اللوحة تقرأ من الفواتير والقيود والمخزون مباشرة، فترى الرقم لحظة تسجيل العملية.", en: "Dashboards read invoices, entries and stock directly, so you see the number as soon as it is recorded." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا تجميع يدوي للتقارير", en: "No more compiling reports by hand" },
      text: { ar: "لا حاجة لتصدير الجداول من كل قسم ودمجها يدوياً في Excel.", en: "No more exporting sheets from each department and merging them by hand in Excel." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "رقم واحد لكل مؤشر في كل الأقسام", en: "One number for each KPI across departments" },
      text: { ar: "المبيعات والمالية والمستودع يقرؤون نفس البيانات بنفس التعريف.", en: "Sales, finance and the warehouse read the same data with the same definition." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "ملخص أسبوعي يصل الإدارة تلقائياً", en: "A weekly summary sent to management automatically" },
      text: { ar: "تقرير PDF أو Excel يصل البريد في موعده دون أن يطلبه أحد.", en: "A PDF or Excel report lands in the inbox on time without anyone asking." },
    },
  ],
  story: {
    title: { ar: "من جداول متفرقة إلى لوحة واحدة", en: "From scattered sheets to one dashboard" },
    before: {
      ar: "المحاسب يجمع أرقام المبيعات من الفروع، ومسؤول المستودع يرسل جرد Excel، والمدير ينتظر طويلاً بعد نهاية الشهر ليعرف النتيجة. وكل قسم يقدّم رقماً مختلفاً للمؤشر نفسه.",
      en: "The accountant collects sales figures from branches, the warehouse sends a stock sheet, and the manager waits long after month-end to see results. Each department reports a different figure for the same KPI.",
    },
    after: {
      ar: "المدير يفتح لوحة واحدة فيرى المبيعات والنقد والمخزون والذمم لهذا اليوم. يضغط على أي رقم فيصل إلى الفواتير خلفه. والملخص الأسبوعي يصل بريده كل أحد.",
      en: "The manager opens one dashboard and sees today's sales, cash, stock and receivables. Clicking any number drills down to the invoices behind it. The weekly summary arrives every Sunday.",
    },
  },
  workflow: [
    {
      title: { ar: "تحديد المؤشرات", en: "Define the KPIs" },
      text: { ar: "نجلس مع الإدارة لنحدد المؤشرات المهمة وطريقة حساب كل منها.", en: "We sit with management to agree on the KPIs that matter and how each is calculated." },
    },
    {
      title: { ar: "ربط مصادر البيانات", en: "Connect the data" },
      text: { ar: "نربط المؤشرات بالمحاسبة والمبيعات والمخزون والموارد البشرية داخل النظام.", en: "We link each KPI to accounting, sales, inventory and HR data inside the system." },
    },
    {
      title: { ar: "بناء اللوحات", en: "Build the dashboards" },
      text: { ar: "نصمم لوحة لكل دور: المدير العام، ومدير الفرع، والمدير المالي.", en: "We design a dashboard per role: CEO, branch manager and finance manager." },
    },
    {
      title: { ar: "ضبط الصلاحيات", en: "Set permissions" },
      text: { ar: "كل مستخدم يرى بيانات شركته أو فرعه فقط حسب صلاحياته.", en: "Each user sees only their company or branch data, based on their access rights." },
    },
    {
      title: { ar: "جدولة الإرسال", en: "Schedule delivery" },
      text: { ar: "نحدد التقارير التي تصل البريد يومياً أو أسبوعياً أو شهرياً.", en: "We set which reports reach the inbox daily, weekly or monthly." },
    },
  ],
  sections: [
    {
      title: { ar: "لوحة تنفيذية للإدارة", en: "Executive dashboard" },
      text: {
        ar: "صفحة واحدة تعرض أهم الأرقام: المبيعات، والنقد المتاح، والذمم، والمخزون. كل رقم يقارن بالهدف وبالفترة السابقة.",
        en: "One page with the key figures: sales, cash on hand, receivables and stock. Each figure is compared with its target and the previous period.",
      },
      points: [
        { ar: "مقارنة بالهدف والشهر السابق", en: "Compared with target and last month" },
        { ar: "رسوم بيانية واضحة لكل مؤشر", en: "Clear charts for every KPI" },
        { ar: "الضغط على الرقم يفتح التفاصيل", en: "Click a figure to see the detail" },
        { ar: "عرض بالعربية والإنجليزية", en: "Available in Arabic and English" },
      ],
    },
    {
      title: { ar: "مؤشرات المبيعات", en: "Sales indicators" },
      text: {
        ar: "تابع المبيعات حسب الفرع والمندوب والمنتج والعميل. واعرف أي المنتجات تحقق ربحاً فعلياً وأيها يتراجع.",
        en: "Track sales by branch, salesperson, product and customer. See which products make real margin and which are slipping.",
      },
      points: [
        { ar: "المبيعات حسب الفرع والمندوب", en: "Sales by branch and salesperson" },
        { ar: "هامش الربح لكل منتج", en: "Margin per product" },
        { ar: "تحقيق الأهداف الشهرية", en: "Progress against monthly targets" },
        { ar: "أفضل العملاء وأكثرهم تراجعاً", en: "Top and declining customers" },
      ],
    },
    {
      title: { ar: "النقد والذمم", en: "Cash and receivables" },
      text: {
        ar: "اعرف رصيدك في البنوك والصناديق اليوم، والمبالغ المستحقة لك وعليك. أعمار الذمم تبين من تأخر عن السداد ومنذ متى.",
        en: "Know today's bank and cash balances, and what you owe and are owed. Aged receivables show who is late and by how long.",
      },
      points: [
        { ar: "أرصدة البنوك والصناديق", en: "Bank and cash balances" },
        { ar: "أعمار الذمم المدينة والدائنة", en: "Aged receivables and payables" },
        { ar: "التدفق النقدي المتوقع", en: "Expected cash flow" },
        { ar: "ضريبة القيمة المضافة المستحقة", en: "VAT due for the period" },
      ],
    },
    {
      title: { ar: "المخزون والمشتريات", en: "Stock and purchasing" },
      text: {
        ar: "قيمة المخزون في كل مستودع، والأصناف الراكدة، والأصناف القريبة من النفاد. المشتريات تظهر مقارنة بالموازنة.",
        en: "Stock value per warehouse, slow movers and items close to running out. Purchases are shown against budget.",
      },
      points: [
        { ar: "قيمة المخزون حسب المستودع", en: "Stock value by warehouse" },
        { ar: "دوران المخزون والأصناف الراكدة", en: "Stock turns and slow movers" },
        { ar: "تنبيه الأصناف قرب النفاد", en: "Low-stock alerts" },
        { ar: "المشتريات مقابل الموازنة", en: "Purchases against budget" },
      ],
    },
    {
      title: { ar: "الموارد البشرية والرواتب", en: "HR and payroll" },
      text: {
        ar: "عدد الموظفين وتكلفة الرواتب حسب القسم، ونسب الغياب والتأخير. هذه الأرقام تساعد في قرارات التوظيف والموازنة.",
        en: "Headcount and payroll cost by department, plus absence and lateness rates. These figures support hiring and budget decisions.",
      },
      points: [
        { ar: "تكلفة الرواتب حسب القسم", en: "Payroll cost by department" },
        { ar: "نسب الغياب والتأخير", en: "Absence and lateness rates" },
        { ar: "الإجازات والأرصدة المتبقية", en: "Leave taken and balances" },
        { ar: "نسبة التوطين للمنشآت السعودية", en: "Saudization ratio for Saudi entities" },
      ],
    },
    {
      title: { ar: "تحليل وتصدير", en: "Analysis and export" },
      text: {
        ar: "الجداول المحورية تتيح لك تقليب البيانات حسب أي بعد تريده. ويمكنك تصدير النتيجة إلى Excel أو جدولتها لتصل بالبريد.",
        en: "Pivot tables let you slice data by any dimension. You can export the result to Excel or schedule it by email.",
      },
      points: [
        { ar: "جداول محورية ورسوم بيانية", en: "Pivot tables and charts" },
        { ar: "تصدير إلى Excel وPDF", en: "Export to Excel and PDF" },
        { ar: "تقارير موحدة لعدة شركات", en: "Consolidated multi-company reports" },
        { ar: "إرسال مجدول بالبريد", en: "Scheduled email delivery" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "المدير العام", en: "CEO / General manager" },
      gain: { ar: "يرى وضع الشركة كله اليوم ويتخذ القرار دون انتظار التقارير.", en: "Sees the whole company today and decides without waiting for reports." },
    },
    {
      role: { ar: "المدير المالي", en: "Finance manager" },
      gain: { ar: "يتابع النقد والذمم والضريبة من لوحة واحدة، ويوقف تجميع الجداول يدوياً.", en: "Tracks cash, receivables and VAT from one dashboard and stops compiling sheets by hand." },
    },
    {
      role: { ar: "مدير الفرع", en: "Branch manager" },
      gain: { ar: "يرى أداء فرعه مقابل الهدف يومياً ويتدخل مبكراً.", en: "Sees branch performance against target every day and acts early." },
    },
  ],
  compare: [
    {
      before: { ar: "تقرير الشهر يصل متأخراً", en: "Monthly report arrives late" },
      after: { ar: "الأرقام متاحة لحظة تسجيلها", en: "Figures available as soon as they are recorded" },
    },
    {
      before: { ar: "كل قسم يقدم رقماً مختلفاً", en: "Each department reports a different figure" },
      after: { ar: "مصدر واحد وتعريف واحد لكل مؤشر", en: "One source and one definition per KPI" },
    },
    {
      before: { ar: "جداول Excel تُجمع يدوياً", en: "Excel sheets merged by hand" },
      after: { ar: "لوحات تُحدَّث تلقائياً", en: "Dashboards that update themselves" },
    },
    {
      before: { ar: "الرقم بلا تفاصيل يمكن التحقق منها", en: "Figures with no traceable detail" },
      after: { ar: "من الرقم إلى الفاتورة بضغطة", en: "From figure to invoice in one click" },
    },
  ],
  faq: [
    {
      q: { ar: "هل نحتاج أداة منفصلة مثل Power BI؟", en: "Do we need a separate tool like Power BI?" },
      a: { ar: "في معظم الحالات لا. لوحات Odoo وجداوله المحورية تغطي احتياجات الإدارة. وإن كنتم تستخدمون Power BI يمكن ربطه بالبيانات مباشرة بدل الإدخال اليدوي.", en: "In most cases, no. Odoo dashboards and pivots cover management needs. If you already use Power BI, it can read the data directly instead of manual uploads." },
    },
    {
      q: { ar: "هل يرى مدير الفرع بيانات الفروع الأخرى؟", en: "Can a branch manager see other branches?" },
      a: { ar: "لا، إلا إذا منحته ذلك. الصلاحيات تحدد الشركة والفرع الذي يراه كل مستخدم.", en: "Only if you allow it. Access rights decide which company and branch each user sees." },
    },
    {
      q: { ar: "هل تشمل التقارير بيانات ما قبل Odoo؟", en: "Can reports include data from before Odoo?" },
      a: { ar: "نعم. نستورد الأرصدة الافتتاحية وملخصات الفترات السابقة لتظهر المقارنات بشكل صحيح.", en: "Yes. We import opening balances and prior-period summaries so comparisons are correct." },
    },
    {
      q: { ar: "هل يمكن عرض اللوحات على الجوال؟", en: "Can we view dashboards on mobile?" },
      a: { ar: "نعم، اللوحات تعمل من المتصفح وتطبيق Odoo على الجوال.", en: "Yes. Dashboards work in the browser and in the Odoo mobile app." },
    },
    {
      q: { ar: "كم يستغرق بناء اللوحات؟", en: "How long does it take to build the dashboards?" },
      a: { ar: "نقدّرها مبدئياً من أسبوع إلى ثلاثة أسابيع بعد تشغيل التطبيقات الأساسية، حسب عدد المؤشرات والأدوار.", en: "We estimate one to three weeks once the core apps are live, depending on the number of KPIs and roles." },
    },
  ],
};

export default d;
