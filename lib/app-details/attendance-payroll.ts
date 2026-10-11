import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "attendance-payroll",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "إعداد رواتب أسرع", en: "Faster payroll runs" },
      text: {
        ar: "الحضور والإجازات والاستقطاعات تدخل المسير تلقائياً، فيبقى للمحاسب المراجعة والاعتماد فقط.",
        en: "Attendance, leave and deductions flow into the run automatically, so payroll staff only review and approve.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا إدخال يدوي لحركات البصمة", en: "No manual entry of punches" },
      text: {
        ar: "أجهزة البصمة في كل الفروع ترسل الحركات إلى النظام دون تصدير أو نسخ ولصق.",
        en: "Devices in every branch send punches to the system with no exports or copy and paste.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "أخطاء أقل في ملف حماية الأجور", en: "Fewer wage-file errors" },
      text: {
        ar: "ملف WPS يُبنى من المسير المعتمد وبيانات الآيبان المحفوظة، فلا تُرفض الدفعات بسبب خطأ في الكتابة.",
        en: "The WPS file is built from the approved run and stored IBANs, so batches are not rejected for typos.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "حساب تلقائي لمكافأة نهاية الخدمة", en: "Automatic end-of-service calculation" },
      text: {
        ar: "المكافأة تُحسب من تاريخ التعيين وآخر راتب وسبب انتهاء العقد حسب نظام العمل في بلدك.",
        en: "The gratuity is calculated from hire date, last salary and exit reason under your country's labour law.",
      },
    },
  ],
  story: {
    title: { ar: "من آخر الشهر المزدحم إلى مسير جاهز للاعتماد", en: "From month-end rush to a run ready for approval" },
    before: {
      ar: "قسم الموارد البشرية يسحب تقارير البصمة من كل فرع، ويطابقها مع الإجازات في Excel، ثم يحسب الإضافي والخصومات يدوياً. ملف البنك يُجهّز بالنسخ واللصق، والرفع إلى مدد يحتاج جولة إضافية من التصحيح.",
      en: "HR pulls fingerprint reports from each branch, matches them with leave in Excel, and works out overtime and deductions by hand. The bank file is built by copy and paste, and the Mudad upload needs another round of corrections.",
    },
    after: {
      ar: "الحركات تصل من الأجهزة يومياً، والمشرف يعتمد الإضافي والاستثناءات أولاً بأول. في آخر الشهر يُنشأ المسير بضغطة، ويخرج منه قيد الرواتب وقسائم الموظفين وملف البنك وملف حماية الأجور معاً.",
      en: "Punches arrive from the devices every day and supervisors approve overtime and exceptions as they happen. At month end the run is generated in one click, producing the payroll entry, payslips, bank file and WPS file together.",
    },
  },
  workflow: [
    {
      title: { ar: "تسجيل الحضور", en: "Capture attendance" },
      text: {
        ar: "الموظف يبصم على جهاز ZKTeco أو من شاشة الحضور، والحركة تصل إلى النظام مع الفرع والوقت.",
        en: "Employees punch on a ZKTeco device or the attendance kiosk, and the record arrives with branch and time.",
      },
    },
    {
      title: { ar: "مطابقة الدوام والإجازات", en: "Match shifts and leave" },
      text: {
        ar: "النظام يقارن الحركات بجدول الدوام والإجازات المعتمدة، ويحسب التأخير والغياب والساعات الإضافية.",
        en: "The system compares punches with schedules and approved leave, then computes lateness, absence and overtime hours.",
      },
    },
    {
      title: { ar: "اعتماد المشرف", en: "Supervisor approval" },
      text: {
        ar: "المشرف يراجع الاستثناءات ويعتمد الإضافي أو يرفضه قبل إقفال الفترة.",
        en: "Supervisors review exceptions and approve or reject overtime before the period closes.",
      },
    },
    {
      title: { ar: "احتساب المسير", en: "Compute the payroll run" },
      text: {
        ar: "المسير يجمع الراتب الأساسي والبدلات والإضافي والسلف والخصومات واشتراكات التأمينات أو الضمان، ثم يعتمده المدير المالي.",
        en: "The run combines basic pay, allowances, overtime, loans, deductions and GOSI or SSC contributions, then finance approves it.",
      },
    },
    {
      title: { ar: "الصرف والترحيل", en: "Pay and post" },
      text: {
        ar: "يُرحَّل قيد الرواتب إلى المحاسبة، ويُصدَّر ملف البنك وملف حماية الأجور إلى مدد، وتصل القسيمة للموظف.",
        en: "The payroll entry posts to accounting, the bank and WPS files go out to Mudad, and each employee gets a payslip.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "ربط أجهزة البصمة", en: "Biometric device integration" },
      text: {
        ar: "نربط أجهزة ZKTeco وما يشابهها في كل فرع بالنظام مباشرة. الحركات تُسحب على فترات منتظمة وتُنسب للموظف الصحيح عبر رقمه في الجهاز.",
        en: "We connect ZKTeco and similar devices in every branch directly to the system. Punches are pulled at regular intervals and matched to the right employee by device ID.",
      },
      points: [
        { ar: "عدة أجهزة وفروع في نظام واحد", en: "Many devices and branches in one system" },
        { ar: "سحب تلقائي للحركات دون تصدير", en: "Automatic punch sync without exports" },
        { ar: "شاشة حضور بديلة على جهاز لوحي", en: "Tablet kiosk as a fallback" },
        { ar: "تنبيه عند انقطاع اتصال الجهاز", en: "Alert when a device goes offline" },
      ],
    },
    {
      title: { ar: "الدوام والمناوبات والإضافي", en: "Schedules, shifts and overtime" },
      text: {
        ar: "تحدد جداول دوام ثابتة أو مناوبات متغيرة لكل قسم، مع ساعات رمضان. الإضافي يُحسب بالنسبة التي يحددها نظام العمل وسياسة شركتك.",
        en: "Define fixed schedules or rotating shifts per department, including Ramadan hours. Overtime is paid at the rate set by labour law and your company policy.",
      },
      points: [
        { ar: "جداول خاصة لشهر رمضان", en: "Dedicated Ramadan schedules" },
        { ar: "سماحية تأخير قابلة للضبط", en: "Configurable lateness grace period" },
        { ar: "إضافي أيام العطل بنسبة مختلفة", en: "Different rate for holiday overtime" },
        { ar: "اعتماد الإضافي قبل دخوله المسير", en: "Overtime approved before payroll" },
      ],
    },
    {
      title: { ar: "قواعد رواتب سعودية وأردنية", en: "Saudi and Jordanian payroll rules" },
      text: {
        ar: "نبني هيكل الراتب حسب بلدك: أساسي وسكن ونقل وبدلات أخرى. اشتراكات التأمينات الاجتماعية في السعودية أو الضمان الاجتماعي في الأردن تُحسب بالنسب النافذة لكل فئة موظفين.",
        en: "We build the salary structure for your country: basic, housing, transport and other allowances. GOSI in Saudi Arabia or SSC in Jordan is calculated at the current rates for each employee category.",
      },
      points: [
        { ar: "فصل حسابات السعودي وغير السعودي", en: "Separate rules for Saudi and expat staff" },
        { ar: "اشتراكات الضمان للموظف وصاحب العمل", en: "SSC employee and employer shares" },
        { ar: "ضريبة الدخل الأردنية على الرواتب", en: "Jordanian income tax on salaries" },
        { ar: "سلف وأقساط تُخصم تلقائياً", en: "Loans and installments deducted automatically" },
      ],
    },
    {
      title: { ar: "حماية الأجور وملفات البنوك", en: "Wage protection and bank files" },
      text: {
        ar: "بعد اعتماد المسير يخرج ملف حماية الأجور بالصيغة التي تقبلها مدد. ونجهز ملف التحويل بصيغة بنكك ليُرفع إلى الخدمات المصرفية للشركات مباشرة.",
        en: "Once the run is approved, the WPS file is produced in the format Mudad accepts. We also prepare the transfer file in your bank's format for direct upload to corporate banking.",
      },
      points: [
        { ar: "ملف WPS جاهز للرفع إلى مدد", en: "WPS file ready for Mudad" },
        { ar: "صيغ ملفات حسب بنك الشركة", en: "File formats per company bank" },
        { ar: "تحقق من الآيبان قبل التصدير", en: "IBAN checks before export" },
        { ar: "سجل بكل ملف صدر ومتى", en: "Log of every file produced" },
      ],
    },
    {
      title: { ar: "نهاية الخدمة والإجازات", en: "End of service and leave" },
      text: {
        ar: "رصيد الإجازة السنوية يُستحق شهرياً ويُخصم عند الاعتماد. مكافأة نهاية الخدمة تُحسب حسب مدة الخدمة وسبب الانتهاء، ويُرحّل مخصصها شهرياً في المحاسبة.",
        en: "Annual leave accrues monthly and is deducted on approval. End-of-service gratuity follows service length and exit reason, with a monthly provision posted in accounting.",
      },
      points: [
        { ar: "تسوية نهائية تشمل الإجازات المتبقية", en: "Final settlement with unused leave" },
        { ar: "فرق الاستقالة عن إنهاء العقد", en: "Resignation versus termination rules" },
        { ar: "مخصص نهاية خدمة شهري", en: "Monthly end-of-service provision" },
        { ar: "إجازات مرضية بأجر كامل أو جزئي", en: "Sick leave at full or partial pay" },
      ],
    },
    {
      title: { ar: "الخدمة الذاتية والتقارير", en: "Self-service and reports" },
      text: {
        ar: "الموظف يرى قسيمته ورصيد إجازاته ويقدم الطلبات من الجوال. الإدارة ترى كلفة الرواتب حسب القسم والفرع ومركز التكلفة.",
        en: "Employees see payslips and leave balances and submit requests from their phone. Management sees payroll cost by department, branch and cost centre.",
      },
      points: [
        { ar: "قسيمة راتب بالعربية والإنجليزية", en: "Payslips in Arabic and English" },
        { ar: "طلبات إجازة وسلفة من الجوال", en: "Leave and loan requests on mobile" },
        { ar: "مقارنة المسير بالشهر السابق", en: "Run compared with last month" },
        { ar: "تقارير الغياب والتأخير لكل قسم", en: "Absence and lateness by department" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير الموارد البشرية", en: "HR manager" },
      gain: {
        ar: "يقضي وقته في متابعة الاستثناءات بدل تجميع الجداول، ويعرف حالة الحضور في كل فرع يومياً.",
        en: "Spends time on exceptions instead of compiling sheets, and sees attendance in every branch daily.",
      },
    },
    {
      role: { ar: "المدير المالي", en: "Finance manager" },
      gain: {
        ar: "يعتمد مسيراً يتطابق مع القيد المحاسبي وملف البنك، ويرى مخصصات نهاية الخدمة محدثة كل شهر.",
        en: "Approves a run that matches the journal entry and bank file, with end-of-service provisions current every month.",
      },
    },
    {
      role: { ar: "الموظف", en: "Employee" },
      gain: {
        ar: "يرى ساعاته وإضافيه وقسيمته بوضوح، ويقدم طلباته دون أوراق أو انتظار.",
        en: "Sees hours, overtime and payslip clearly, and submits requests without paper or waiting.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "تقارير بصمة تُسحب يدوياً من كل فرع", en: "Fingerprint reports pulled by hand from each branch" },
      after: { ar: "حركات تصل تلقائياً من كل الأجهزة", en: "Punches arrive automatically from every device" },
    },
    {
      before: { ar: "الإضافي يُحسب في Excel ويُختلف عليه", en: "Overtime worked out in Excel and disputed" },
      after: { ar: "إضافي معتمد من المشرف بنسب ثابتة", en: "Supervisor-approved overtime at fixed rates" },
    },
    {
      before: { ar: "ملف حماية الأجور يُرفض ويُعاد تجهيزه", en: "WPS file rejected and rebuilt" },
      after: { ar: "ملف يخرج من المسير المعتمد مباشرة", en: "File produced straight from the approved run" },
    },
    {
      before: { ar: "نهاية الخدمة تُحسب عند الاستقالة فقط", en: "End of service worked out only at exit" },
      after: { ar: "مخصص شهري وتسوية جاهزة بسرعة", en: "Monthly provision and a quick settlement" },
    },
  ],
  faq: [
    {
      q: { ar: "ما أجهزة البصمة التي تربطونها؟", en: "Which biometric devices do you connect?" },
      a: {
        ar: "نعمل غالباً مع أجهزة ZKTeco المتصلة بالشبكة، ونفحص الأجهزة الأخرى قبل البدء. إذا كان جهازك قديماً بلا اتصال شبكي نقترح بديلاً أو استيراد ملف دوري.",
        en: "We mostly work with networked ZKTeco devices and check other models before we start. If a device has no network connection, we suggest a replacement or a periodic file import.",
      },
    },
    {
      q: { ar: "هل يرفع النظام الملف إلى مدد مباشرة؟", en: "Does the system upload to Mudad directly?" },
      a: {
        ar: "النظام يجهز ملف حماية الأجور بالصيغة المطلوبة، وموظف الرواتب يرفعه إلى مدد بخطوة واحدة. نحدد معك طريقة الرفع المناسبة لحسابك في مدد أثناء التنفيذ.",
        en: "The system prepares the WPS file in the required format and payroll staff upload it to Mudad in one step. We agree the right upload method for your Mudad account during the project.",
      },
    },
    {
      q: { ar: "عندنا موظفون في السعودية والأردن، هل يمكن ذلك في نظام واحد؟", en: "We have staff in Saudi Arabia and Jordan. Can one system handle both?" },
      a: {
        ar: "نعم. كل شركة أو فرع له هيكل رواتب وقواعد اشتراكات خاصة ببلده، والإدارة ترى التقارير مجمعة.",
        en: "Yes. Each company or branch has its own salary structure and contribution rules, and management sees consolidated reports.",
      },
    },
    {
      q: { ar: "كيف ننقل بيانات الموظفين وأرصدة الإجازات الحالية؟", en: "How do we move current employee data and leave balances?" },
      a: {
        ar: "نستورد الموظفين والعقود والرواتب وأرصدة الإجازات والسلف من ملفاتكم الحالية. ثم نشغل مسيراً تجريبياً موازياً لشهر واحد ونطابقه مع مسيركم قبل الاعتماد.",
        en: "We import employees, contracts, salaries, leave balances and loans from your current files. Then we run one parallel test month and reconcile it with your existing payroll before go-live.",
      },
    },
    {
      q: { ar: "من يستطيع رؤية الرواتب؟", en: "Who can see salaries?" },
      a: {
        ar: "الصلاحيات تحدد ذلك بدقة. المشرف يرى حضور فريقه فقط، والرواتب تبقى ظاهرة لموظفي الرواتب والإدارة المالية.",
        en: "Permissions control this precisely. Supervisors see only their team's attendance, and salaries stay visible to payroll and finance only.",
      },
    },
  ],
};

export default d;
