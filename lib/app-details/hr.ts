import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "hr",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "عمل إداري أقل لقسم الموارد البشرية", en: "Less admin work for HR" },
      text: {
        ar: "الطلبات والاعتمادات والشهادات تتم من الخدمة الذاتية، فيقل البريد والمتابعة اليدوية.",
        en: "Requests, approvals and certificates run through self-service, so there is less email and manual chasing.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا عقود أو إقامات تنتهي دون تنبيه", en: "No contracts or iqamas expiring unnoticed" },
      text: {
        ar: "النظام ينبّه قبل انتهاء العقد والإقامة والهوية والتأمين الطبي بمدة تحددها.",
        en: "The system alerts you ahead of contract, iqama, ID and medical insurance expiry, with a lead time you set.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "اعتماد أسرع لطلبات الإجازة", en: "Faster leave approvals" },
      text: {
        ar: "الطلب يصل للمدير على جواله مع الرصيد المتبقي وجدول الفريق، فيعتمد مباشرة.",
        en: "The request reaches the manager's phone with the remaining balance and team calendar, ready to approve.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "توظيف أسرع", en: "Faster hiring" },
      text: {
        ar: "المتقدمون في مسار واحد من الإعلان حتى العرض الوظيفي، مع تقييم المقابلات في مكانه.",
        en: "Applicants move through one pipeline from job post to offer, with interview feedback in place.",
      },
    },
  ],
  story: {
    title: { ar: "من ملفات ورقية إلى ملف رقمي لكل موظف", en: "From paper files to one digital file per employee" },
    before: {
      ar: "بيانات الموظفين في ملفات ورقية وجداول متفرقة، والإجازات تُطلب بالبريد. انتهاء الإقامات والعقود يُكتشف متأخراً، وبيانات قوى لا تطابق ما لدى الشركة.",
      en: "Employee data sits in paper files and scattered sheets, and leave is requested by email. Expiring iqamas and contracts are found late, and Qiwa data does not match company records.",
    },
    after: {
      ar: "لكل موظف ملف واحد فيه العقد والمستندات والإجازات والتقييمات والعهد. الطلبات تُعتمد من الجوال، والتنبيهات تصل قبل كل انتهاء، وبيانات العقد مطابقة لقوى.",
      en: "Each employee has one file with contract, documents, leave, appraisals and custody. Requests are approved from the phone, alerts arrive before every expiry, and contract data matches Qiwa.",
    },
  },
  workflow: [
    {
      title: { ar: "التوظيف", en: "Recruit" },
      text: {
        ar: "الوظيفة تُنشر، والمتقدمون يمرون بمراحل الفرز والمقابلة حتى العرض الوظيفي.",
        en: "The job is posted, and applicants move through screening and interviews to the offer.",
      },
    },
    {
      title: { ar: "التعيين والعقد", en: "Hire and contract" },
      text: {
        ar: "المتقدم المقبول يصبح موظفاً بعقد فيه الأجر والمهنة والمدة، ويُوثق العقد في قوى.",
        en: "The accepted applicant becomes an employee with a contract holding wage, occupation and term, documented in Qiwa.",
      },
    },
    {
      title: { ar: "التهيئة", en: "Onboard" },
      text: {
        ar: "قائمة مهام التهيئة تُنفذ: المستندات، العهد، الحساب، والتسجيل في التأمينات أو الضمان.",
        en: "The onboarding checklist runs: documents, custody, accounts and GOSI or SSC registration.",
      },
    },
    {
      title: { ar: "الإدارة اليومية", en: "Manage day to day" },
      text: {
        ar: "الإجازات والطلبات والتقييمات تسير بالخدمة الذاتية، والتنبيهات تتابع انتهاء المستندات.",
        en: "Leave, requests and appraisals run through self-service, and alerts track document expiry.",
      },
    },
    {
      title: { ar: "إنهاء الخدمة", en: "Offboard" },
      text: {
        ar: "عند الاستقالة أو الإنهاء تُسترد العهد، وتُحسب مستحقات نهاية الخدمة، ويُغلق الملف.",
        en: "On resignation or termination, custody is returned, end-of-service dues are calculated and the file is closed.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "ملف الموظف والهيكل التنظيمي", en: "Employee file and org chart" },
      text: {
        ar: "كل بيانات الموظف في مكان واحد: الهوية، الإقامة، الجواز، المؤهلات، والحساب البنكي. الهيكل التنظيمي يُبنى من الأقسام والمدراء تلقائياً.",
        en: "All employee data in one place: ID, iqama, passport, qualifications and bank account. The org chart builds itself from departments and managers.",
      },
      points: [
        { ar: "بيانات شخصية ووظيفية كاملة", en: "Full personal and job data" },
        { ar: "هيكل تنظيمي بالأقسام والمدراء", en: "Org chart by department and manager" },
        { ar: "شركات وفروع متعددة", en: "Multiple companies and branches" },
        { ar: "صلاحيات تحمي البيانات الحساسة", en: "Permissions protect sensitive data" },
      ],
    },
    {
      title: { ar: "العقود والربط مع قوى", en: "Contracts and Qiwa" },
      text: {
        ar: "العقد في Odoo يحمل الأجر والبدلات والمهنة والمدة. نبني الربط مع قوى لتبقى بيانات العقود متطابقة، مع تنبيه قبل كل انتهاء.",
        en: "The contract in Odoo holds wage, allowances, occupation and term. We build the Qiwa link so contract data stays aligned, with alerts before each expiry.",
      },
      points: [
        { ar: "عقود محددة وغير محددة المدة", en: "Fixed-term and open-ended contracts" },
        { ar: "سجل تعديلات العقد والأجر", en: "History of contract and wage changes" },
        { ar: "مطابقة بيانات العقد مع قوى", en: "Contract data matched with Qiwa" },
        { ar: "تنبيه قبل انتهاء العقد", en: "Alerts before contract end" },
      ],
    },
    {
      title: { ar: "الإجازات والغياب", en: "Time off and absences" },
      text: {
        ar: "أنواع الإجازات وأرصدتها تُضبط حسب نظام العمل وسياستك: سنوية، مرضية، حج، زواج، وأمومة. الرصيد يُستحق شهرياً ويظهر للموظف دائماً.",
        en: "Leave types and balances follow labour law and your policy: annual, sick, Hajj, marriage and maternity. Balances accrue monthly and stay visible to the employee.",
      },
      points: [
        { ar: "استحقاق شهري للرصيد", en: "Monthly accrual of balances" },
        { ar: "اعتماد على مستوى أو مستويين", en: "One or two-level approval" },
        { ar: "تقويم إجازات للفريق", en: "Team leave calendar" },
        { ar: "الإجازة تنعكس على الرواتب", en: "Leave flows into payroll" },
      ],
    },
    {
      title: { ar: "المستندات والعهد", en: "Documents and custody" },
      text: {
        ar: "الإقامة والجواز والشهادات والتأمين الطبي محفوظة بتواريخ انتهائها. العهد مثل اللابتوب والسيارة والجوال مسجلة على الموظف وتُسترد عند المغادرة.",
        en: "Iqama, passport, certificates and medical insurance are stored with their expiry dates. Custody items such as laptops, cars and phones are logged per employee and returned on exit.",
      },
      points: [
        { ar: "أرشيف رقمي لكل موظف", en: "Digital archive per employee" },
        { ar: "تنبيه قبل انتهاء الإقامة والجواز", en: "Alerts before iqama and passport expiry" },
        { ar: "تسليم واستلام العهد بتوقيع", en: "Custody handover with signature" },
        { ar: "إخلاء طرف قبل المخالصة", en: "Clearance before final settlement" },
      ],
    },
    {
      title: { ar: "التوظيف وتقييم الأداء", en: "Recruitment and appraisals" },
      text: {
        ar: "كل وظيفة شاغرة لها مسار متقدمين ومقابلات وتقييمات. دورات التقييم تجمع الأهداف وآراء المدير والزملاء، وتدعم قرارات الزيادة والترقية.",
        en: "Each vacancy has its applicant pipeline, interviews and scoring. Review cycles combine goals with manager and peer feedback to support raises and promotions.",
      },
      points: [
        { ar: "نشر الوظائف ومسار المتقدمين", en: "Job posts and applicant pipeline" },
        { ar: "عرض وظيفي يُوقّع إلكترونياً", en: "Offer letters signed electronically" },
        { ar: "أهداف وتقييم دوري و360", en: "Goals, periodic and 360 reviews" },
        { ar: "خطط تطوير ومهارات", en: "Development plans and skills" },
      ],
    },
    {
      title: { ar: "الخدمة الذاتية والجوال", en: "Self-service and mobile" },
      text: {
        ar: "الموظف يطلب الإجازة وشهادة الراتب ويرفع مستنداته من جواله. المدير يعتمد من التطبيق، والموارد البشرية ترى كل الطلبات في شاشة واحدة.",
        en: "Employees request leave and salary certificates and upload documents from their phone. Managers approve in the app, and HR sees every request on one screen.",
      },
      points: [
        { ar: "طلبات الإجازة والشهادات من الجوال", en: "Leave and certificate requests by phone" },
        { ar: "عرض الرصيد وقسيمة الراتب", en: "Balance and payslip view" },
        { ar: "تحديث البيانات الشخصية بموافقة", en: "Personal data updates with approval" },
        { ar: "إشعارات بالعربية والإنجليزية", en: "Notifications in Arabic and English" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير الموارد البشرية", en: "HR manager" },
      gain: {
        ar: "ملفات مكتملة وتنبيهات قبل كل انتهاء، وتقارير الدوران والسعودة أو التوطين جاهزة.",
        en: "Complete files, alerts before every expiry, and ready reports on turnover and Saudization or localisation.",
      },
    },
    {
      role: { ar: "مدير القسم", en: "Line manager" },
      gain: {
        ar: "يعتمد الإجازات من جواله ويرى غياب فريقه، ويدير تقييمات موظفيه في مكان واحد.",
        en: "Approves leave from the phone, sees team absences and runs staff appraisals in one place.",
      },
    },
    {
      role: { ar: "الموظف", en: "Employee" },
      gain: {
        ar: "يعرف رصيده ويقدّم طلباته ويستلم شهاداته دون زيارة مكتب الموارد البشرية.",
        en: "Knows the balance, submits requests and gets certificates without visiting the HR office.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "ملفات ورقية في خزانة الموارد", en: "Paper files in the HR cabinet" },
      after: { ar: "ملف رقمي يُفتح من أي مكان", en: "A digital file opened from anywhere" },
    },
    {
      before: { ar: "اكتشاف انتهاء الإقامة بعد فواتها", en: "Finding expired iqamas too late" },
      after: { ar: "تنبيه مسبق بمدة تحددها", en: "Advance alerts with your lead time" },
    },
    {
      before: { ar: "طلبات إجازة بالبريد والورق", en: "Leave requests by email and paper" },
      after: { ar: "طلب واعتماد من الجوال", en: "Request and approval on the phone" },
    },
    {
      before: { ar: "بيانات عقود لا تطابق قوى", en: "Contract data that differs from Qiwa" },
      after: { ar: "عقود مطابقة مع تنبيه بالفروقات", en: "Aligned contracts with mismatch alerts" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يمكن نقل بياناتنا من Jisr أو Bayzat أو Excel؟", en: "Can we migrate from Jisr, Bayzat or Excel?" },
      a: {
        ar: "نعم. ننقل الموظفين والعقود وأرصدة الإجازات والمستندات، ونراجع الأرصدة مع فريقك قبل التشغيل.",
        en: "Yes. We move employees, contracts, leave balances and documents, and check balances with your team before go-live.",
      },
    },
    {
      q: { ar: "هل يحسب مكافأة نهاية الخدمة؟", en: "Does it calculate end-of-service benefits?" },
      a: {
        ar: "نعم. نضبط الحساب حسب نظام العمل السعودي أو الأردني وسياسة شركتك، ويُربط بالمخالصة النهائية في الرواتب.",
        en: "Yes. We configure it to Saudi or Jordanian labour law and your policy, linked to the final settlement in payroll.",
      },
    },
    {
      q: { ar: "من يستطيع رؤية الرواتب والبيانات الشخصية؟", en: "Who can see salaries and personal data?" },
      a: {
        ar: "فقط من تمنحه الصلاحية. المدير يرى بيانات فريقه الوظيفية، والرواتب والمستندات الحساسة تبقى للموارد البشرية والمالية.",
        en: "Only the people you authorise. Managers see their team's job data, while salaries and sensitive documents stay with HR and finance.",
      },
    },
    {
      q: { ar: "هل يرتبط بالتأمينات الاجتماعية والضمان الاجتماعي؟", en: "Does it connect to GOSI and Social Security?" },
      a: {
        ar: "نعم. نجهز بيانات التسجيل والأجور الخاضعة لـ GOSI في السعودية وللضمان الاجتماعي في الأردن، وتُحسب الاشتراكات في الرواتب.",
        en: "Yes. We prepare registration and contributory wage data for GOSI in Saudi Arabia and SSC in Jordan, with contributions calculated in payroll.",
      },
    },
    {
      q: { ar: "هل يحتاج الموظف تدريباً لاستخدام الخدمة الذاتية؟", en: "Do employees need training for self-service?" },
      a: {
        ar: "قليلاً جداً. الواجهة بالعربية وبسيطة، ونقدم دليلاً مختصراً وجلسة تعريف للمدراء والموظفين.",
        en: "Very little. The interface is in Arabic and simple, and we provide a short guide and an intro session for managers and staff.",
      },
    },
  ],
};

export default d;
