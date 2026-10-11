import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "ai-automation",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "إدخال يدوي أقل بكثير", en: "Far less manual data entry" },
      text: { ar: "فواتير الموردين والإيصالات تُقرأ آلياً، والموظف يراجع ويعتمد فقط.", en: "Vendor bills and receipts are read automatically; staff only review and approve." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "تسجيل سريع لفواتير الموردين", en: "Vendor bills recorded quickly" },
      text: { ar: "المورد والتاريخ والمبالغ والضريبة تُعبأ من صورة الفاتورة أو ملف PDF.", en: "Vendor, date, amounts and VAT are filled from a photo or PDF of the bill." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "موافقات لا تضيع في البريد", en: "No approvals lost in email" },
      text: { ar: "قواعد سير العمل ترسل الطلب للشخص الصحيح وتذكّره إن تأخر.", en: "Workflow rules route each request to the right person and remind them if it stalls." },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "إجابات فورية من بيانات النظام", en: "Instant answers from your data" },
      text: { ar: "اسأل المساعد بالعربية فيجيبك من بيانات شركتك حسب صلاحياتك.", en: "Ask the assistant in Arabic and it answers from your company data, within your permissions." },
    },
  ],
  story: {
    title: { ar: "من إدخال ومتابعة يدوية إلى نظام يعمل وحده", en: "From manual entry and chasing to a system that runs itself" },
    before: {
      ar: "المحاسب يكتب كل فاتورة مورد سطراً سطراً. الموافقات تنتظر في البريد، والمتابعة بالهاتف. والمدير يطلب رقماً بسيطاً فينتظر حتى يجهزه أحد.",
      en: "The accountant types every vendor bill line by line. Approvals wait in email and follow-up happens by phone. A manager asks for a simple figure and waits for someone to prepare it.",
    },
    after: {
      ar: "الفاتورة تصل البريد فتُقرأ وتظهر جاهزة للمراجعة. الموافقة تذهب للمدير المعني مع تذكير تلقائي. والمدير يكتب سؤاله بالعربية فيحصل على الرقم مع التفاصيل.",
      en: "A bill arrives by email, is read and appears ready for review. The approval goes to the right manager with an automatic reminder. The manager types a question in Arabic and gets the figure with the detail.",
    },
  },
  workflow: [
    {
      title: { ar: "رصد المهام المتكررة", en: "Map the repetitive work" },
      text: { ar: "نحدد مع كل قسم المهام التي تستهلك الوقت ويمكن أتمتتها.", en: "With each department, we list the time-consuming tasks that can be automated." },
    },
    {
      title: { ar: "تفعيل قراءة المستندات", en: "Turn on document capture" },
      text: { ar: "نضبط قراءة فواتير الموردين والإيصالات وربطها بالحسابات والضرائب الصحيحة.", en: "We set up reading of vendor bills and receipts and map them to the right accounts and taxes." },
    },
    {
      title: { ar: "بناء قواعد سير العمل", en: "Build workflow rules" },
      text: { ar: "نكتب الشروط: متى تُطلب الموافقة، ومن يُنبَّه، وما المهمة التي تُنشأ.", en: "We define the conditions: when approval is needed, who is alerted and which task is created." },
    },
    {
      title: { ar: "إعداد المساعد", en: "Set up the assistant" },
      text: { ar: "نربط المساعد ببيانات النظام ونختبره على أسئلة فريقك الفعلية.", en: "We connect the assistant to system data and test it on your team's real questions." },
    },
    {
      title: { ar: "قياس وتحسين", en: "Measure and refine" },
      text: { ar: "نتابع نسبة القراءة الصحيحة والوقت الموفّر، ونعدّل القواعد حسب النتائج.", en: "We track capture accuracy and time saved, then adjust the rules based on results." },
    },
  ],
  sections: [
    {
      title: { ar: "قراءة المستندات آلياً", en: "Automatic document reading" },
      text: {
        ar: "أرسل فاتورة المورد بالبريد أو ارفع صورتها، فيستخرج النظام المورد والتاريخ والمبالغ والضريبة. الفاتورة تظهر كمسودة جاهزة للمراجعة والترحيل.",
        en: "Email or upload a vendor bill and the system extracts vendor, date, amounts and VAT. The bill appears as a draft ready to review and post.",
      },
      points: [
        { ar: "فواتير موردين وإيصالات مصروفات", en: "Vendor bills and expense receipts" },
        { ar: "يدعم الصور وملفات PDF", en: "Works with photos and PDFs" },
        { ar: "يتعلم من تصحيحاتك", en: "Learns from your corrections" },
        { ar: "صندوق بريد مخصص للفواتير", en: "Dedicated inbox for bills" },
      ],
    },
    {
      title: { ar: "التحقق من البيانات", en: "Data validation" },
      text: {
        ar: "قبل الترحيل يفحص النظام الفاتورة. يكشف التكرار، والرقم الضريبي الناقص، والفرق عن أمر الشراء.",
        en: "Before posting, the system checks the bill. It flags duplicates, missing VAT numbers and differences from the purchase order.",
      },
      points: [
        { ar: "كشف الفواتير المكررة", en: "Duplicate bill detection" },
        { ar: "مطابقة مع أمر الشراء والاستلام", en: "Match against PO and receipt" },
        { ar: "التحقق من الرقم الضريبي", en: "VAT number check" },
        { ar: "تمييز الحالات منخفضة الثقة للمراجعة", en: "Low-confidence items flagged for review" },
      ],
    },
    {
      title: { ar: "قواعد سير العمل", en: "Workflow rules" },
      text: {
        ar: "حدد الشرط والإجراء، والنظام ينفذ. مثلاً: أمر شراء فوق حد معين يذهب للمدير المالي، وعقد قارب على الانتهاء يُنشئ مهمة للموارد البشرية.",
        en: "Set a condition and an action, and the system does the rest. For example, a PO above a limit goes to the finance manager, and an expiring contract creates an HR task.",
      },
      points: [
        { ar: "موافقات متعددة المستويات", en: "Multi-level approvals" },
        { ar: "مهام ومتابعات تُنشأ تلقائياً", en: "Tasks and follow-ups created automatically" },
        { ar: "تغيير الحالة وإسناد المسؤول", en: "Status changes and assignment" },
        { ar: "دون برمجة لكل تعديل", en: "Changes without custom code" },
      ],
    },
    {
      title: { ar: "تنبيهات ذكية", en: "Smart alerts" },
      text: {
        ar: "النظام يراقب ما يهمك ويخبرك قبل أن يصبح مشكلة. التنبيه يصل داخل النظام أو بالبريد أو على واتساب.",
        en: "The system watches what matters and tells you before it becomes a problem. Alerts arrive in the system, by email or on WhatsApp.",
      },
      points: [
        { ar: "عميل تجاوز حد الائتمان", en: "Customer over credit limit" },
        { ar: "إقامة أو عقد قارب على الانتهاء", en: "Iqama or contract about to expire" },
        { ar: "صنف قارب على النفاد", en: "Item running low" },
        { ar: "فاتورة متأخرة السداد", en: "Overdue invoice" },
      ],
    },
    {
      title: { ar: "مساعد محادثة بالعربية", en: "Arabic chat assistant" },
      text: {
        ar: "اكتب سؤالك كما تقوله: كم بعنا هذا الشهر في فرع جدة؟ المساعد يجيب من بيانات نظامك ويعرض السجلات التي اعتمد عليها، ولا يتجاوز صلاحيات المستخدم.",
        en: "Ask the way you speak: how much did we sell this month in the Jeddah branch? The assistant answers from your system data, shows the records it used and stays within the user's permissions.",
      },
      points: [
        { ar: "أسئلة عن المبيعات والذمم والمخزون", en: "Questions on sales, receivables and stock" },
        { ar: "يحترم صلاحيات كل مستخدم", en: "Respects each user's access rights" },
        { ar: "يعرض المصدر مع الإجابة", en: "Shows the source with the answer" },
        { ar: "يلخص السجلات والمحادثات الطويلة", en: "Summarises long records and threads" },
      ],
    },
    {
      title: { ar: "رؤى تنبؤية", en: "Predictive insights" },
      text: {
        ar: "من بيانات المبيعات السابقة يقدّر النظام الطلب المتوقع ويقترح كميات الشراء. هذه تقديرات تساعد القرار ولا تحل محله.",
        en: "Using past sales, the system estimates expected demand and suggests purchase quantities. These are estimates that support decisions and do not replace them.",
      },
      points: [
        { ar: "توقع الطلب على الأصناف", en: "Demand forecast per item" },
        { ar: "اقتراح كميات إعادة الطلب", en: "Suggested reorder quantities" },
        { ar: "توقع التحصيل من العملاء", en: "Expected customer collections" },
        { ar: "رصد الأرقام غير المعتادة", en: "Unusual figures flagged" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "المحاسب", en: "Accountant" },
      gain: { ar: "يراجع الفواتير ويعتمدها بدل كتابتها، ويتفرغ للتحليل والإقفال.", en: "Reviews and approves bills instead of typing them, and has time for analysis and closing." },
    },
    {
      role: { ar: "مدير القسم", en: "Department manager" },
      gain: { ar: "تصله الموافقات في وقتها مع كل التفاصيل، دون اتصالات متابعة.", en: "Gets approvals on time with full detail and no follow-up calls." },
    },
    {
      role: { ar: "الإدارة العليا", en: "Senior management" },
      gain: { ar: "تسأل بالعربية وتحصل على الرقم فوراً، وتُنبَّه بالمخاطر مبكراً.", en: "Asks in Arabic, gets the figure at once and is warned of risks early." },
    },
  ],
  compare: [
    {
      before: { ar: "كتابة كل فاتورة يدوياً", en: "Every bill typed by hand" },
      after: { ar: "الفاتورة تُقرأ وتُراجع فقط", en: "Bills are read; staff only review" },
    },
    {
      before: { ar: "موافقات عالقة في البريد", en: "Approvals stuck in email" },
      after: { ar: "موافقة موجهة مع تذكير تلقائي", en: "Routed approvals with automatic reminders" },
    },
    {
      before: { ar: "اكتشاف المشكلة بعد وقوعها", en: "Problems found after they happen" },
      after: { ar: "تنبيه قبل موعد الاستحقاق", en: "Alerts before things fall due" },
    },
    {
      before: { ar: "طلب تقرير وانتظار تجهيزه", en: "Request a report and wait" },
      after: { ar: "سؤال بالعربية وإجابة فورية", en: "Ask in Arabic, get an instant answer" },
    },
  ],
  faq: [
    {
      q: { ar: "أين تذهب بيانات شركتنا عند استخدام الذكاء الاصطناعي؟", en: "Where does our data go when we use AI?" },
      a: { ar: "نوضح لك قبل البدء أي خدمة تُستخدم وما البيانات التي تُرسل إليها. المساعد يقرأ فقط ما يسمح به حساب المستخدم، ويمكن قصر الاستخدام على أقسام محددة.", en: "Before we start, we show you which service is used and what data is sent to it. The assistant reads only what the user's account allows, and you can limit it to specific departments." },
    },
    {
      q: { ar: "ما دقة قراءة الفواتير العربية؟", en: "How accurate is reading Arabic invoices?" },
      a: { ar: "الدقة عالية في الفواتير المطبوعة الواضحة، وأقل في الصور الرديئة أو المكتوبة يدوياً. لذلك تبقى كل فاتورة مسودة حتى يراجعها موظف.", en: "Accuracy is high on clear printed invoices and lower on poor photos or handwriting. That is why every bill stays a draft until someone reviews it." },
    },
    {
      q: { ar: "هل يمكن أن يرحّل النظام قيداً دون موافقة؟", en: "Can the system post an entry without approval?" },
      a: { ar: "أنت تقرر. يمكن ترحيل الحالات المتكررة الواضحة تلقائياً، وإبقاء الباقي للمراجعة.", en: "You decide. Clear recurring cases can post automatically while the rest wait for review." },
    },
    {
      q: { ar: "هل نحتاج فريقاً تقنياً لتعديل القواعد؟", en: "Do we need a technical team to change the rules?" },
      a: { ar: "معظم قواعد سير العمل تُعدَّل من الإعدادات دون برمجة. ونحن ندرّب مسؤولاً لديكم على ذلك بالعربية.", en: "Most workflow rules are edited in settings without code. We train someone on your team to do it, in Arabic." },
    },
    {
      q: { ar: "هل يجيب المساعد عن أسئلة خارج بيانات الشركة؟", en: "Does the assistant answer questions outside company data?" },
      a: { ar: "نضبطه ليجيب من بيانات نظامك ومستنداتك المعتمدة. وإن لم يجد الإجابة يقول ذلك بوضوح.", en: "We configure it to answer from your system data and approved documents. If it cannot find the answer, it says so." },
    },
  ],
};

export default d;
