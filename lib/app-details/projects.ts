import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "projects",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "ساعات أكثر تُفوتر", en: "More billable hours captured" },
      text: {
        ar: "الفريق يسجل الساعات على المهمة نفسها من الجوال أو المؤقت، فلا تضيع ساعات العمل قبل الفاتورة.",
        en: "The team logs time on the task itself from phone or timer, so hours are not lost before invoicing.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "إصدار أسرع لفواتير الشهر", en: "Faster monthly invoicing" },
      text: {
        ar: "الساعات المعتمدة والمراحل المنجزة تتحول إلى مسودات فواتير جاهزة للمراجعة.",
        en: "Approved hours and completed milestones become draft invoices ready for review.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "ربحية كل مشروع لحظياً", en: "Live margin on every project" },
      text: {
        ar: "الإيراد يقابل كلفة الساعات والمشتريات والمصاريف على الحساب التحليلي للمشروع.",
        en: "Revenue is set against hours, purchases and expenses on the project's analytic account.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "مهام متأخرة أقل", en: "Fewer overdue tasks" },
      text: {
        ar: "المواعيد والتنبيهات وتوزيع الحمل تكشف التأخير قبل أن يصل إلى العميل.",
        en: "Deadlines, alerts and workload views expose delays before they reach the client.",
      },
    },
  ],
  story: {
    title: { ar: "من مشاريع بلا أرقام إلى ربحية واضحة", en: "From projects without numbers to clear margins" },
    before: {
      ar: "المهام في أداة منفصلة، والساعات في جدول يعبئه كل موظف آخر الأسبوع إن تذكر. الفاتورة تُكتب من الذاكرة، ولا يعرف أحد إن كان المشروع رابحاً إلا بعد انتهائه.",
      en: "Tasks live in a separate tool and hours sit in a sheet each person fills at week end, if they remember. Invoices are written from memory, and nobody knows whether a project made money until it is over.",
    },
    after: {
      ar: "المشروع يُنشأ من أمر البيع بمهامه ومراحله، والفريق يسجل الساعات على المهام يومياً. مدير المشروع يرى التقدم والحمل والهامش في شاشة واحدة، والمحاسب يصدر الفاتورة من الساعات المعتمدة.",
      en: "The project is created from the sales order with its tasks and milestones, and the team logs hours on tasks daily. The project manager sees progress, workload and margin on one screen, and accounting invoices from approved hours.",
    },
  },
  workflow: [
    {
      title: { ar: "إنشاء المشروع من البيع", en: "Create from the sale" },
      text: {
        ar: "عند تأكيد أمر البيع يُنشأ المشروع ومهامه تلقائياً من قالب الخدمة.",
        en: "Confirming the sales order creates the project and its tasks from the service template.",
      },
    },
    {
      title: { ar: "التخطيط والتوزيع", en: "Plan and assign" },
      text: {
        ar: "مدير المشروع يحدد المراحل والمواعيد ويوزع المهام حسب الحمل المتاح لكل موظف.",
        en: "The project manager sets milestones and deadlines and assigns tasks by each person's available capacity.",
      },
    },
    {
      title: { ar: "التنفيذ وتسجيل الساعات", en: "Execute and log time" },
      text: {
        ar: "الفريق ينقل المهام على لوحة كانبان ويسجل الساعات عليها، والعميل يتابع عبر البوابة.",
        en: "The team moves tasks across the kanban board and logs hours on them, while the client follows on the portal.",
      },
    },
    {
      title: { ar: "اعتماد الساعات والمراحل", en: "Approve time and milestones" },
      text: {
        ar: "المدير يعتمد سجل الساعات ويؤكد إنجاز المراحل المتفق عليها.",
        en: "The manager validates timesheets and confirms that agreed milestones are reached.",
      },
    },
    {
      title: { ar: "الفوترة وقياس الربحية", en: "Invoice and measure margin" },
      text: {
        ar: "تُصدر الفاتورة بالضريبة الصحيحة، ويظهر هامش المشروع مقارنة بالميزانية.",
        en: "The invoice goes out with the correct tax, and the project margin shows against budget.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "لوحات كانبان ومراحل مخصصة", en: "Kanban boards and custom stages" },
      text: {
        ar: "كل نوع مشروع له مراحله الخاصة، من التصميم إلى التسليم. المهام تحمل المسؤول والموعد والأولوية والمهام الفرعية.",
        en: "Each project type has its own stages, from design to handover. Tasks carry an assignee, deadline, priority and subtasks.",
      },
      points: [
        { ar: "قوالب مشاريع قابلة لإعادة الاستخدام", en: "Reusable project templates" },
        { ar: "مهام فرعية وتبعيات بين المهام", en: "Subtasks and task dependencies" },
        { ar: "تنبيه قبل الموعد وعند التأخير", en: "Alerts before and after deadlines" },
        { ar: "مرفقات ونقاشات داخل المهمة", en: "Files and discussion inside the task" },
      ],
    },
    {
      title: { ar: "غانت وتوزيع الموارد", en: "Gantt and resource planning" },
      text: {
        ar: "مخطط غانت يعرض المهام على الزمن مع تبعياتها. شاشة التخطيط تبين من مشغول ومن متاح قبل قبول مشروع جديد.",
        en: "The Gantt chart lays tasks out over time with their dependencies. The planning view shows who is busy and who is free before you take on new work.",
      },
      points: [
        { ar: "سحب وإفلات لتعديل المواعيد", en: "Drag and drop to reschedule" },
        { ar: "حمل كل موظف بالساعات", en: "Each person's load in hours" },
        { ar: "مراعاة الإجازات المعتمدة", en: "Approved leave taken into account" },
        { ar: "كشف التعارض في التوزيع", en: "Conflicts flagged in assignments" },
      ],
    },
    {
      title: { ar: "سجل الساعات", en: "Timesheets" },
      text: {
        ar: "الموظف يشغل مؤقتاً على المهمة أو يدخل الساعات من الجوال. الساعات مرتبطة بالفوترة وبكلفة الموظف في الوقت نفسه.",
        en: "Staff start a timer on the task or enter hours from their phone. Hours feed billing and employee cost at the same time.",
      },
      points: [
        { ar: "مؤقت بضغطة من المهمة", en: "One-click timer on the task" },
        { ar: "تذكير بالساعات غير المسجلة", en: "Reminders for missing timesheets" },
        { ar: "اعتماد المدير قبل الفوترة", en: "Manager approval before billing" },
        { ar: "ساعات غير مفوترة منفصلة", en: "Non-billable hours tracked separately" },
      ],
    },
    {
      title: { ar: "فوترة الساعات والمراحل", en: "Time and milestone billing" },
      text: {
        ar: "تختار لكل خدمة طريقة الفوترة: سعر ثابت أو مراحل أو ساعات فعلية. الفواتير تخرج متوافقة مع فاتورة في السعودية أو جو فوترة في الأردن.",
        en: "Choose a billing method per service: fixed price, milestones or actual hours. Invoices go out compliant with ZATCA FATOORA in Saudi Arabia or JoFotara in Jordan.",
      },
      points: [
        { ar: "دفعات مقدمة تُخصم من الفواتير", en: "Down payments deducted from invoices" },
        { ar: "ضريبة 15% أو 16% تلقائياً", en: "15% or 16% tax applied automatically" },
        { ar: "تفاصيل الساعات مرفقة بالفاتورة", en: "Timesheet detail attached to the invoice" },
        { ar: "تنبيه عند تجاوز الساعات المباعة", en: "Alert when sold hours are exceeded" },
      ],
    },
    {
      title: { ar: "ربحية المشروع", en: "Project profitability" },
      text: {
        ar: "كل مشروع له حساب تحليلي يجمع الإيراد والكلفة. ترى الهامش الفعلي مقابل الميزانية أثناء التنفيذ.",
        en: "Each project has an analytic account that gathers revenue and cost. You see the actual margin against budget while work is underway.",
      },
      points: [
        { ar: "كلفة الساعات بسعر كل موظف", en: "Time cost at each employee's rate" },
        { ar: "المشتريات والمصاريف على المشروع", en: "Purchases and expenses on the project" },
        { ar: "ميزانية مقابل الفعلي", en: "Budget against actual" },
        { ar: "مقارنة الربحية بين المشاريع", en: "Margin compared across projects" },
      ],
    },
    {
      title: { ar: "تعاون مع العميل", en: "Client collaboration" },
      text: {
        ar: "العميل يتابع المهام والمراحل من بوابته ويعلق عليها. نرسل تحديثات المراحل عبر واتساب للأعمال عند الحاجة.",
        en: "Clients follow tasks and milestones on their portal and comment on them. Milestone updates can go out over WhatsApp Business when needed.",
      },
      points: [
        { ar: "بوابة عميل بصلاحيات محددة", en: "Client portal with set permissions" },
        { ar: "تقييم العميل عند إغلاق المرحلة", en: "Client rating when a stage closes" },
        { ar: "إشعارات واتساب للمراحل المهمة", en: "WhatsApp alerts for key milestones" },
        { ar: "سجل كامل للمراسلات", en: "Full log of communication" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير المشروع", en: "Project manager" },
      gain: {
        ar: "يرى التقدم والحمل والهامش معاً، ويعيد توزيع العمل قبل أن يتأخر الموعد.",
        en: "Sees progress, workload and margin together, and rebalances work before a deadline slips.",
      },
    },
    {
      role: { ar: "المحاسب", en: "Accountant" },
      gain: {
        ar: "يصدر الفواتير من ساعات ومراحل معتمدة، دون مطاردة الفريق لجمع الأرقام.",
        en: "Invoices from approved hours and milestones, without chasing the team for numbers.",
      },
    },
    {
      role: { ar: "الإدارة العليا", en: "Leadership" },
      gain: {
        ar: "تعرف أي العملاء والخدمات أكثر ربحية، وتسعّر العروض القادمة على أرقام فعلية.",
        en: "Knows which clients and services are most profitable, and prices future proposals on real numbers.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "مهام في Trello وساعات في Excel", en: "Tasks in Trello, hours in Excel" },
      after: { ar: "المهمة والساعات والفاتورة في مكان واحد", en: "Task, hours and invoice in one place" },
    },
    {
      before: { ar: "ساعات تُنسى ولا تُفوتر", en: "Forgotten hours that never get billed" },
      after: { ar: "مؤقت وتذكير لكل ساعة عمل", en: "Timer and reminders for every hour" },
    },
    {
      before: { ar: "الربحية تُعرف بعد انتهاء المشروع", en: "Margin known only after the project ends" },
      after: { ar: "هامش فعلي يظهر أثناء التنفيذ", en: "Actual margin visible during delivery" },
    },
    {
      before: { ar: "العميل يتصل ليسأل عن التقدم", en: "Clients call to ask about progress" },
      after: { ar: "العميل يتابع من البوابة", en: "Clients follow progress on the portal" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يمكن نقل مشاريعنا من Asana أو Trello أو Monday؟", en: "Can we move our projects from Asana, Trello or Monday?" },
      a: {
        ar: "نعم. نصدّر المشاريع والمهام والمسؤولين والمواعيد من أداتكم الحالية ونستوردها بالمراحل نفسها. المرفقات الكبيرة ننقلها حسب الحاجة.",
        en: "Yes. We export projects, tasks, assignees and deadlines from your current tool and import them with the same stages. Large attachments are moved as needed.",
      },
    },
    {
      q: { ar: "هل يمكن للموظفين تسجيل الساعات من الجوال؟", en: "Can staff log time from their phone?" },
      a: {
        ar: "نعم، من تطبيق Odoo على الجوال أو من المتصفح، مع مؤقت يعمل من داخل المهمة.",
        en: "Yes, from the Odoo mobile app or the browser, with a timer that runs from inside the task.",
      },
    },
    {
      q: { ar: "هل ترتبط الساعات بالرواتب؟", en: "Do timesheets connect to payroll?" },
      a: {
        ar: "تُستخدم كلفة الموظف لحساب كلفة المشروع. ويمكن ربط الساعات الإضافية المسجلة بمسير الرواتب إذا كانت سياستكم تدفعها.",
        en: "Employee cost is used to compute project cost. Logged overtime can also feed payroll if your policy pays for it.",
      },
    },
    {
      q: { ar: "هل يرى العميل كل شيء في البوابة؟", en: "Does the client see everything on the portal?" },
      a: {
        ar: "لا. أنت تختار المشاريع والمهام الظاهرة للعميل، وتبقى الملاحظات الداخلية والكلفة مخفية.",
        en: "No. You choose which projects and tasks the client sees, and internal notes and costs stay hidden.",
      },
    },
    {
      q: { ar: "كم يستغرق التطبيق؟", en: "How long does implementation take?" },
      a: {
        ar: "تطبيق المشاريع مع الساعات والفوترة نقدّره مبدئياً من 3 إلى 6 أسابيع، حسب عدد أنواع المشاريع وطرق الفوترة.",
        en: "Projects with timesheets and billing we estimate at 3 to 6 weeks, depending on the number of project types and billing methods.",
      },
    },
  ],
};

export default d;
