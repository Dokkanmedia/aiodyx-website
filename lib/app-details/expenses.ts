import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "expenses",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "معالجة أسرع للمصروفات", en: "Faster expense processing" },
      text: {
        ar: "الإيصال يُقرأ آلياً ويصل للمعتمد مباشرة، فلا إدخال يدوي ولا ملاحقة أوراق.",
        en: "Receipts are read automatically and go straight to the approver, so nobody retypes or chases paper.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "إيصال مرفق بكل مصروف", en: "A receipt attached to every expense" },
      text: {
        ar: "لا يُرسل المصروف للموافقة دون صورة الإيصال، فيبقى الملف جاهزاً للمراجعة والتدقيق.",
        en: "An expense cannot go to approval without its receipt photo, so every file is audit-ready.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "تسوية أسرع للعهدة النقدية", en: "Faster petty-cash settlement" },
      text: {
        ar: "صاحب العهدة يرى رصيده وما صرفه، والمالية تسوّي الفرق بقيد واحد.",
        en: "The custodian sees the balance and what was spent, and finance settles the difference in one entry.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "استرداد ضريبة المدخلات", en: "Input VAT recovered" },
      text: {
        ar: "ضريبة القيمة المضافة على الإيصالات تُسجَّل في حسابها الصحيح وتدخل في الإقرار الضريبي.",
        en: "VAT on receipts posts to the right account and flows into your VAT return.",
      },
    },
  ],
  story: {
    title: { ar: "من ظرف الإيصالات إلى صورة على الجوال", en: "From an envelope of receipts to a photo on the phone" },
    before: {
      ar: "الموظف يجمع الإيصالات في ظرف ويسلّمها آخر الشهر. المحاسب يُدخلها يدوياً ويبحث عن توقيع المدير، وبعضها يضيع. العهد النقدية تُتابع في دفتر أو جدول، ولا أحد يعرف الرصيد الحقيقي.",
      en: "Employees collect receipts in an envelope and hand them in at month end. The accountant types them in and chases the manager's signature, and some get lost. Petty cash lives in a notebook or spreadsheet, and nobody knows the real balance.",
    },
    after: {
      ar: "الموظف يصوّر الإيصال لحظة الدفع. النظام يقرأ المبلغ والضريبة والتاريخ ويرسله للمدير. المالية تعتمد وتسدّد مع الراتب أو من العهدة، والقيد المحاسبي جاهز.",
      en: "The employee snaps the receipt at the till. The system reads amount, VAT and date and sends it to the manager. Finance approves and reimburses via payroll or petty cash, with the journal entry already posted.",
    },
  },
  workflow: [
    {
      title: { ar: "تصوير الإيصال", en: "Capture the receipt" },
      text: {
        ar: "من تطبيق الجوال أو بإرسال الصورة إلى بريد مخصص، ويُنشأ المصروف تلقائياً.",
        en: "Snap it in the mobile app or email it to a dedicated address, and the expense is created.",
      },
    },
    {
      title: { ar: "القراءة والتصنيف", en: "Read and categorise" },
      text: {
        ar: "النظام يستخرج المبلغ والضريبة والمورد، والموظف يختار الفئة والمشروع.",
        en: "The system extracts amount, VAT and vendor, and the employee picks the category and project.",
      },
    },
    {
      title: { ar: "التقرير والإرسال", en: "Group and submit" },
      text: {
        ar: "تُجمع مصاريف الرحلة أو الشهر في تقرير واحد ويُرسل للموافقة.",
        en: "Expenses for a trip or month go into one report and are submitted for approval.",
      },
    },
    {
      title: { ar: "الموافقات", en: "Approvals" },
      text: {
        ar: "المدير المباشر يعتمد، ثم المالية حسب المبلغ والقسم، مع تنبيه لكل خطوة.",
        en: "The direct manager approves, then finance by amount and department, with a notification at each step.",
      },
    },
    {
      title: { ar: "القيد والسداد", en: "Post and reimburse" },
      text: {
        ar: "يُرحَّل القيد المحاسبي ويُسدَّد المبلغ بتحويل بنكي أو مع الراتب أو من العهدة.",
        en: "The journal entry posts and the amount is paid by bank transfer, payroll or petty cash.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "تسجيل المصروف بسرعة", en: "Log an expense quickly" },
      text: {
        ar: "الموظف لا يحتاج لتعبئة نماذج. يصوّر الإيصال أو يرسله بالبريد، والنظام يقرأ بياناته الأساسية. يراجع الموظف القيم ويضيف الوصف فقط.",
        en: "Employees do not fill in forms. They snap or email the receipt and the system reads the key data. They only check the values and add a note.",
      },
      points: [
        { ar: "تطبيق جوال لتصوير الإيصال", en: "Mobile app for receipt photos" },
        { ar: "إرسال الإيصال إلى بريد مخصص", en: "Forward receipts to a dedicated email" },
        { ar: "قراءة المبلغ والتاريخ والمورد آلياً", en: "Amount, date and vendor read automatically" },
        { ar: "دعم العملات وتحويلها تلقائياً", en: "Foreign currencies converted automatically" },
      ],
    },
    {
      title: { ar: "فئات وسياسات واضحة", en: "Clear categories and policies" },
      text: {
        ar: "كل فئة مصروف مرتبطة بحساب محاسبي وضريبة افتراضية. يمكن تحديد سعر ثابت لبعض الفئات مثل بدل الكيلومتر أو الوجبات. هكذا يصل المصروف للمحاسبة مصنفاً بشكل صحيح.",
        en: "Each expense category maps to an account and a default tax. Some categories can carry a fixed rate, such as mileage or meals. Expenses reach accounting already classified.",
      },
      points: [
        { ar: "فئات مثل سفر ووقود وضيافة", en: "Categories like travel, fuel, hospitality" },
        { ar: "حساب وضريبة افتراضية لكل فئة", en: "Default account and tax per category" },
        { ar: "أسعار ثابتة للكيلومتر والبدلات", en: "Fixed rates for mileage and allowances" },
        { ar: "تنبيه عند تكرار نفس الإيصال", en: "Warning on duplicate receipts" },
      ],
    },
    {
      title: { ar: "موافقات حسب المبلغ والقسم", en: "Approvals by amount and department" },
      text: {
        ar: "المصروف الصغير يكفيه اعتماد المدير المباشر. المبالغ الأكبر تمر على المالية أو الإدارة حسب القواعد التي نضبطها معكم. كل اعتماد مسجل باسم صاحبه ووقته.",
        en: "Small expenses need only the direct manager. Larger amounts go to finance or management under rules we set with you. Every approval is logged with name and time.",
      },
      points: [
        { ar: "المدير المباشر من الهيكل التنظيمي", en: "Direct manager from the org chart" },
        { ar: "مستويات إضافية فوق حد معين", en: "Extra levels above a set limit" },
        { ar: "رفض مع سبب يصل للموظف", en: "Rejection with a reason sent back" },
        { ar: "سجل كامل لكل اعتماد", en: "Full log of every approval" },
      ],
    },
    {
      title: { ar: "العهد النقدية", en: "Petty cash floats" },
      text: {
        ar: "لكل صاحب عهدة رصيد واضح: ما استلمه وما صرفه وما تبقى. المصاريف من العهدة تُخصم من رصيدها مباشرة. عند التسوية تُصرف عهدة جديدة أو يُسترد الفرق.",
        en: "Each custodian has a clear balance: what was received, spent and left. Expenses paid from the float reduce it directly. At settlement a new float is issued or the difference returned.",
      },
      points: [
        { ar: "رصيد لحظي لكل عهدة", en: "Live balance per float" },
        { ar: "صرف وتعزيز العهدة بقيد محاسبي", en: "Issue and top up with a journal entry" },
        { ar: "تسوية دورية بتقرير واحد", en: "Periodic settlement in one report" },
        { ar: "تنبيه للعهد المتأخرة عن التسوية", en: "Alerts for overdue settlements" },
      ],
    },
    {
      title: { ar: "الضريبة والقيود المحاسبية", en: "VAT and accounting entries" },
      text: {
        ar: "ضريبة القيمة المضافة على الإيصال تُفصل عن المبلغ وتُسجَّل في حساب ضريبة المدخلات. القيد يُنشأ تلقائياً عند الاعتماد. المحاسب يراجع فقط ولا يعيد الإدخال.",
        en: "VAT on the receipt is split from the amount and posted to input VAT. The entry is created automatically on approval. The accountant reviews and never retypes.",
      },
      points: [
        { ar: "فصل الضريبة عن صافي المبلغ", en: "VAT split from the net amount" },
        { ar: "قيد تلقائي عند الاعتماد", en: "Automatic entry on approval" },
        { ar: "مصاريف مدفوعة ببطاقة الشركة", en: "Company-card expenses supported" },
        { ar: "إرفاق الإيصال بالقيد للمدقق", en: "Receipt attached to the entry for audit" },
      ],
    },
    {
      title: { ar: "السداد والتحميل على المشاريع", en: "Reimbursement and project costing" },
      text: {
        ar: "المبلغ المستحق للموظف يُسدَّد بتحويل بنكي أو يُضاف إلى الراتب القادم. كل مصروف يمكن تحميله على مشروع أو مركز كلفة. ويمكن إعادة فوترته للعميل عند الحاجة.",
        en: "What is owed to the employee is paid by bank transfer or added to the next payslip. Each expense can be charged to a project or cost centre. It can also be re-invoiced to the customer.",
      },
      points: [
        { ar: "سداد مع الراتب في كشف الرواتب", en: "Reimburse through the payslip" },
        { ar: "ملف تحويل بنكي للمبالغ المستحقة", en: "Bank transfer file for amounts due" },
        { ar: "توزيع على مشروع أو مركز كلفة", en: "Charge to project or cost centre" },
        { ar: "إعادة فوترة المصروف للعميل", en: "Re-invoice expenses to customers" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "الموظف", en: "Employee" },
      gain: {
        ar: "يسجل المصروف من جواله فوراً، ويتابع حالته، ويستلم ماله دون مراجعات.",
        en: "Logs an expense from the phone on the spot, tracks its status and gets paid without follow-ups.",
      },
    },
    {
      role: { ar: "المدير المباشر", en: "Line manager" },
      gain: {
        ar: "يعتمد أو يرفض من الجوال مع رؤية الإيصال، ويعرف ما صرفه فريقه.",
        en: "Approves or rejects from the phone with the receipt in view, and sees what the team spends.",
      },
    },
    {
      role: { ar: "المحاسب", en: "Accountant" },
      gain: {
        ar: "يستلم مصاريف مصنفة ومعتمدة بقيودها وضريبتها، ويغلق العهد بسرعة.",
        en: "Receives classified, approved expenses with entries and VAT ready, and closes floats fast.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "إيصالات ورقية تضيع أو تتلف", en: "Paper receipts get lost or fade" },
      after: { ar: "صورة كل إيصال محفوظة مع المصروف", en: "Every receipt image stored with the expense" },
    },
    {
      before: { ar: "المحاسب يُدخل كل مبلغ يدوياً", en: "The accountant types every amount" },
      after: { ar: "القيد يُنشأ تلقائياً عند الاعتماد", en: "The entry is created on approval" },
    },
    {
      before: { ar: "رصيد العهدة غير معروف حتى التسوية", en: "Petty-cash balance unknown until settlement" },
      after: { ar: "رصيد كل عهدة ظاهر في أي لحظة", en: "Every float balance visible at any time" },
    },
    {
      before: { ar: "ضريبة الإيصالات لا تُسترد غالباً", en: "Receipt VAT often goes unclaimed" },
      after: { ar: "الضريبة تُسجَّل وتدخل الإقرار", en: "VAT is posted and included in the return" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يحتاج الموظف إلى ترخيص كامل للنظام؟", en: "Does every employee need a full licence?" },
      a: {
        ar: "الموظف يحتاج حساب مستخدم لتسجيل مصاريفه. نساعدكم في اختيار الترخيص المناسب حسب عدد الموظفين ومن يحتاج الوصول.",
        en: "Employees need a user account to log their expenses. We help you pick the right licensing based on headcount and who needs access.",
      },
    },
    {
      q: { ar: "ما دقة قراءة الإيصالات المكتوبة بالعربية؟", en: "How well does it read Arabic receipts?" },
      a: {
        ar: "الإيصالات المطبوعة الواضحة تُقرأ بدقة جيدة غالباً. الإيصالات اليدوية أو الباهتة قد تحتاج تصحيحاً بسيطاً من الموظف قبل الإرسال.",
        en: "Clear printed receipts are usually read well. Handwritten or faded ones may need a quick correction by the employee before submitting.",
      },
    },
    {
      q: { ar: "كيف تُدار العهدة النقدية بالضبط؟", en: "How exactly is petty cash handled?" },
      a: {
        ar: "نعرّف لكل صاحب عهدة حساباً أو دفتر يومية خاصاً به. المصاريف المدفوعة منها تُخصم من رصيده، وعند التسوية تُعزز العهدة أو يُسترد الفرق بقيد واحد.",
        en: "Each custodian gets a dedicated account or journal. Expenses paid from it reduce the balance, and at settlement it is topped up or the difference returned in one entry.",
      },
    },
    {
      q: { ar: "هل يمكن سداد المصروف مع الراتب؟", en: "Can expenses be paid through payroll?" },
      a: {
        ar: "نعم، عند استخدام تطبيق الرواتب يُضاف المبلغ المعتمد إلى كشف الراتب القادم تلقائياً، ويظهر كبند مستقل.",
        en: "Yes. With the Payroll app, the approved amount is added to the next payslip automatically as a separate line.",
      },
    },
    {
      q: { ar: "هل يمكن وضع حد أعلى لكل فئة مصروف؟", en: "Can we set limits per expense category?" },
      a: {
        ar: "يمكن تحديد سعر ثابت لفئات مثل البدلات والكيلومتر. وحدود الاعتماد حسب المبلغ نضبطها كقواعد موافقة تناسب سياستكم.",
        en: "Categories like allowances and mileage can carry a fixed rate. Approval limits by amount are set up as approval rules that match your policy.",
      },
    },
  ],
};

export default d;
