import type { L } from "./i18n";

export type PlatformDetail = {
  slug: string;
  seoTitle: L;
  headline: L;
  intro: L;
  whyItMatters: L;
  automated: L[];
  requirements: L[];
  faq: { q: L; a: L }[];
};

export const platformDetails: Record<string, PlatformDetail> = {
  zatca: {
    slug: "zatca",
    seoTitle: {
      ar: "ربط Odoo مع منصة فاتورة (ZATCA) | المرحلة الثانية",
      en: "Odoo ZATCA integration (FATOORA Phase 2)",
    },
    headline: {
      ar: "ربط Odoo مع *فاتورة* بلا رفع يدوي",
      en: "Connect Odoo to *FATOORA* with no manual uploads",
    },
    intro: {
      ar: "منصة فاتورة هي نظام الفوترة الإلكترونية التابع لهيئة الزكاة والضريبة والجمارك في السعودية. المرحلة الثانية تُلزم المنشآت المشمولة بربط نظامها مع المنصة مباشرة. يحتوي Odoo على حزمة التوطين السعودية للفوترة الإلكترونية، وتتولى AIODYX إعدادها وتسجيل وحدات الفوترة واختبار الربط حتى يعمل على بياناتك الحقيقية.",
      en: "FATOORA is the e-invoicing platform of Saudi Arabia's Zakat, Tax and Customs Authority (ZATCA). Phase 2 requires in-scope businesses to integrate their invoicing system with the platform. Odoo ships the Saudi e-invoicing localisation (l10n_sa_edi), and AIODYX configures it, onboards your e-invoicing units and tests the connection on your real data.",
    },
    whyItMatters: {
      ar: "بدون ربط صحيح، تُصدر الفاتورة من النظام ثم يُتابع اعتمادها يدوياً، وأي خطأ في الرقم الضريبي أو العنوان يوقف الفاتورة. الفواتير المرفوضة أو المتأخرة تعرض المنشأة للمخالفات وتؤخر التحصيل من العملاء.",
      en: "Without a working integration, invoices leave the system and someone chases their clearance by hand. One wrong VAT number or address blocks the invoice. Rejected or late invoices expose the business to penalties and delay collection.",
    },
    automated: [
      { ar: "توقيع كل فاتورة بالختم التشفيري وتوليد رمز QR", en: "Every invoice gets its cryptographic stamp and QR code" },
      { ar: "إرسال فواتير B2B للاعتماد قبل تسليمها للعميل", en: "B2B invoices are sent for clearance before reaching the customer" },
      { ar: "إبلاغ المنصة بالفواتير المبسطة B2C خلال 24 ساعة", en: "Simplified B2C invoices are reported within 24 hours" },
      { ar: "إشعارات دائنة ومدينة مرتبطة بالفاتورة الأصلية", en: "Credit and debit notes linked to the original invoice" },
      { ar: "حالة كل فاتورة ورسائل الرفض ظاهرة داخل Odoo", en: "Each invoice's status and rejection messages shown inside Odoo" },
    ],
    requirements: [
      { ar: "حساب فعّال على بوابة فاتورة وصلاحية توليد رمز OTP", en: "An active FATOORA portal account with access to generate an OTP" },
      { ar: "بيانات المنشأة الضريبية كاملة: الرقم الضريبي والسجل التجاري والعنوان الوطني", en: "Complete tax details: VAT number, CR number and national address" },
      { ar: "تحديد الفروع ونقاط البيع التي تحتاج وحدة فوترة مستقلة", en: "A list of branches and points of sale that need their own e-invoicing unit" },
      { ar: "بيانات العملاء الضريبية للفواتير بين المنشآت", en: "Customer tax details for B2B invoices" },
    ],
    faq: [
      {
        q: { ar: "ما الفرق بين الاعتماد والإبلاغ؟", en: "What is the difference between clearance and reporting?" },
        a: { ar: "فواتير B2B تُرسل إلى فاتورة وتُعتمد قبل مشاركتها مع العميل. الفواتير المبسطة B2C تُشارك مع العميل فوراً ثم يُبلغ عنها خلال 24 ساعة.", en: "B2B invoices are sent to FATOORA and cleared before you share them with the customer. Simplified B2C invoices go to the customer right away and are reported within 24 hours." },
      },
      {
        q: { ar: "ما هي شهادة CSID ولماذا نحتاجها؟", en: "What is a CSID certificate and why is it needed?" },
        a: { ar: "هي شهادة تصدرها الهيئة لكل وحدة فوترة بعد تسجيلها برمز OTP من بوابة فاتورة. يستخدمها النظام لتوقيع الفواتير وإثبات أنها صادرة من وحدة مسجلة.", en: "It is a certificate ZATCA issues to each e-invoicing unit after you onboard it with an OTP from the FATOORA portal. The system uses it to sign invoices and prove they come from a registered unit." },
      },
      {
        q: { ar: "هل نحتاج برنامجاً وسيطاً خارج Odoo؟", en: "Do we need middleware outside Odoo?" },
        a: { ar: "لا. الربط يتم من Odoo مباشرة عبر حزمة التوطين السعودية. دورنا هو الإعداد والتسجيل والاختبار ومعالجة أخطاء البيانات.", en: "No. Odoo connects directly through its Saudi localisation. Our role is setup, onboarding, testing and fixing data errors." },
      },
      {
        q: { ar: "ماذا يحدث إذا رُفضت فاتورة؟", en: "What happens if an invoice is rejected?" },
        a: { ar: "تظهر رسالة الرفض على الفاتورة نفسها في Odoo. يُصحح المستخدم البيانات ويعيد الإرسال من الشاشة ذاتها.", en: "The rejection message appears on the invoice in Odoo. The user corrects the data and resends from the same screen." },
      },
    ],
  },

  qiwa: {
    slug: "qiwa",
    seoTitle: {
      ar: "ربط Odoo مع منصة قوى | مطابقة العقود ومتابعة التوطين",
      en: "Odoo and Qiwa: contract alignment and Saudization tracking",
    },
    headline: {
      ar: "بيانات موظفيك في Odoo *مطابقة لقوى*",
      en: "Employee data in Odoo that *matches Qiwa*",
    },
    intro: {
      ar: "قوى منصة وزارة الموارد البشرية والتنمية الاجتماعية لإدارة عقود العمل ورخص العمل ونسب التوطين في نطاقات. تتعامل معها كل منشأة في القطاع الخاص السعودي. تجهز AIODYX تطبيق الموظفين في Odoo ليحفظ نفس البيانات المسجلة في قوى ويتابعها.",
      en: "Qiwa is the Saudi Ministry of Human Resources platform for employment contracts, work permits and Saudization under Nitaqat. Every private-sector establishment in Saudi Arabia uses it. AIODYX sets up Odoo Employees to hold and track the same data registered in Qiwa.",
    },
    whyItMatters: {
      ar: "عندما تُحفظ العقود في جداول متفرقة، تنتهي عقود وإقامات دون تنبيه وتختلف البيانات بين قوى والرواتب. أي تغيير في عدد الموظفين السعوديين يؤثر على نطاق المنشأة، ويُكتشف غالباً بعد فوات الأوان.",
      en: "When contracts live in scattered spreadsheets, contracts and iqamas expire without warning and data drifts between Qiwa and payroll. Any change in Saudi headcount moves the Nitaqat band, and teams often notice too late.",
    },
    automated: [
      { ar: "تنبيهات مسبقة لانتهاء العقود والإقامات ورخص العمل", en: "Early alerts for expiring contracts, iqamas and work permits" },
      { ar: "نسبة التوطين الحالية محسوبة من بيانات الموظفين", en: "Current Saudization ratio computed from employee records" },
      { ar: "قائمة بالفروقات بين بيانات Odoo وما هو مسجل في قوى", en: "A list of differences between Odoo and what is registered in Qiwa" },
      { ar: "تجهيز بيانات العقود والموظفين بالصيغة المطلوبة للتحديث في قوى", en: "Contract and employee data prepared for updating in Qiwa" },
      { ar: "سجل تغييرات لكل موظف يوضح من عدّل وماذا ومتى", en: "Per-employee change log showing who changed what and when" },
    ],
    requirements: [
      { ar: "صلاحية دخول إلى حساب المنشأة في قوى لمراجعة البيانات", en: "Access to the establishment's Qiwa account to review data" },
      { ar: "تصدير حالي لبيانات الموظفين والعقود من قوى", en: "A current export of employee and contract data from Qiwa" },
      { ar: "تطبيق الموظفين والعقود مفعّل في Odoo", en: "Odoo Employees and Contracts apps enabled" },
    ],
    faq: [
      {
        q: { ar: "هل يرسل Odoo البيانات إلى قوى تلقائياً؟", en: "Does Odoo push data into Qiwa automatically?" },
        a: { ar: "التحديث في قوى يبقى من حساب المنشأة. نبقي البيانات في Odoo مطابقة لقوى، ونجهز ما يلزم لتحديثه، وننبهك بأي اختلاف.", en: "Updates in Qiwa stay in your establishment account. We keep Odoo aligned with Qiwa, prepare what needs updating there and flag any mismatch." },
      },
      {
        q: { ar: "كيف تتم متابعة نطاقات؟", en: "How is Nitaqat tracked?" },
        a: { ar: "تُحسب نسبة التوطين من الموظفين النشطين في Odoo، وتظهر في لوحة تبين أثر أي تعيين أو إنهاء خدمة.", en: "The Saudization ratio is computed from active employees in Odoo and shown on a dashboard that reflects the effect of each hire or exit." },
      },
      {
        q: { ar: "متى تصل تنبيهات انتهاء العقود؟", en: "When do expiry alerts arrive?" },
        a: { ar: "تحدد المنشأة المدة المسبقة لكل نوع، وتصل التنبيهات للمسؤول في Odoo وعبر البريد.", en: "You set the lead time for each document type. Alerts reach the responsible person in Odoo and by email." },
      },
      {
        q: { ar: "هل يرتبط هذا بالرواتب؟", en: "Is this linked to payroll?" },
        a: { ar: "نعم. العقد في Odoo هو مصدر الراتب والبدلات، لذلك يبقى مسير الرواتب متسقاً مع العقد المسجل.", en: "Yes. The Odoo contract drives salary and allowances, so payroll stays consistent with the registered contract." },
      },
    ],
  },

  mudad: {
    slug: "mudad",
    seoTitle: {
      ar: "ربط رواتب Odoo مع مدد | ملف حماية الأجور WPS",
      en: "Odoo payroll and Mudad: WPS wage protection file",
    },
    headline: {
      ar: "ملف *حماية الأجور* يخرج من مسير Odoo",
      en: "Your *WPS file* comes straight from Odoo payroll",
    },
    intro: {
      ar: "مدد منصة سعودية لنظام حماية الأجور، تتحقق من صرف رواتب موظفي القطاع الخاص في موعدها وبالمبالغ المتفق عليها. تربط AIODYX مسير الرواتب المعتمد في Odoo بملف حماية الأجور بالصيغة التي تطلبها مدد.",
      en: "Mudad is the Saudi wage protection (WPS) platform. It checks that private-sector salaries are paid on time and in the agreed amounts. AIODYX links approved Odoo payroll to the WPS file in the format Mudad requires.",
    },
    whyItMatters: {
      ar: "تجهيز ملف الرواتب يدوياً من جدول بيانات يعني إعادة كتابة الأرقام وأخطاء في أرقام الحسابات والهويات. أي اختلاف بين المصروف والعقد يظهر كمخالفة في حماية الأجور.",
      en: "Building the payroll file by hand from a spreadsheet means retyping figures and errors in IBANs and ID numbers. Any gap between what was paid and the contract shows up as a wage protection violation.",
    },
    automated: [
      { ar: "توليد ملف حماية الأجور من المسير بعد اعتماده", en: "WPS file generated from payroll once approved" },
      { ar: "التحقق من الآيبان ورقم الهوية لكل موظف قبل التصدير", en: "IBAN and ID checks for every employee before export" },
      { ar: "تفصيل الراتب الأساسي والبدلات والخصومات كما في العقد", en: "Basic pay, allowances and deductions broken down as in the contract" },
      { ar: "تجهيز الملف للرفع إلى مدد دون إعادة إدخال", en: "File ready for submission to Mudad with no retyping" },
      { ar: "مطابقة المبالغ المصروفة مع كشف البنك", en: "Paid amounts reconciled with the bank statement" },
    ],
    requirements: [
      { ar: "حساب المنشأة على مدد وصلاحية الرفع", en: "The establishment's Mudad account with upload rights" },
      { ar: "رواتب Odoo مفعّلة مع عقود الموظفين", en: "Odoo Payroll enabled with employee contracts" },
      { ar: "الآيبان ورقم الهوية أو الإقامة لكل موظف", en: "IBAN and national ID or iqama number for each employee" },
      { ar: "صيغة ملف الرواتب المعتمدة لدى بنك المنشأة", en: "The payroll file format used by your bank" },
    ],
    faq: [
      {
        q: { ar: "هل يتغير شيء في طريقة احتساب الرواتب؟", en: "Does payroll calculation change?" },
        a: { ar: "لا. يبقى المسير كما هو، والملف يُبنى من النتيجة المعتمدة فقط.", en: "No. Payroll runs as before, and the file is built only from the approved result." },
      },
      {
        q: { ar: "ماذا لو كان لدى موظف آيبان ناقص؟", en: "What if an employee's IBAN is missing?" },
        a: { ar: "يمنع النظام التصدير ويعرض قائمة بالموظفين الذين تنقص بياناتهم لتصحيحها أولاً.", en: "The system blocks the export and lists employees with missing data so you fix them first." },
      },
      {
        q: { ar: "هل يشمل الربط عدة منشآت أو سجلات؟", en: "Does it cover several establishments?" },
        a: { ar: "نعم. يُولد ملف مستقل لكل منشأة أو سجل تجاري حسب إعداد الشركات في Odoo.", en: "Yes. A separate file is generated per establishment or CR, based on your company setup in Odoo." },
      },
      {
        q: { ar: "كيف تتم المطابقة بعد الصرف؟", en: "How is reconciliation done after payment?" },
        a: { ar: "يُستورد كشف البنك إلى Odoo وتُطابق التحويلات مع قيود الرواتب، فيظهر أي تحويل لم يُنفذ.", en: "The bank statement is imported into Odoo and transfers are matched to payroll entries, so any failed transfer stands out." },
      },
    ],
  },

  gosi: {
    slug: "gosi",
    seoTitle: {
      ar: "اشتراكات التأمينات الاجتماعية GOSI في رواتب Odoo",
      en: "GOSI contributions in Odoo payroll (Saudi Arabia)",
    },
    headline: {
      ar: "اشتراكات *التأمينات* تُحسب مع كل مسير",
      en: "*GOSI* contributions calculated with every payroll",
    },
    intro: {
      ar: "المؤسسة العامة للتأمينات الاجتماعية في السعودية تحصّل اشتراكات شهرية عن الموظفين السعوديين وغير السعوديين وفق نوع التغطية. تضبط AIODYX قواعد الرواتب في Odoo لتحتسب هذه الاشتراكات وتُرحّلها محاسبياً وتُخرج تقريراً شهرياً.",
      en: "Saudi Arabia's General Organization for Social Insurance (GOSI) collects monthly contributions for Saudi and non-Saudi employees based on their coverage type. AIODYX configures Odoo payroll rules to calculate these contributions, post them to accounting and produce a monthly report.",
    },
    whyItMatters: {
      ar: "احتساب الاشتراك خارج النظام يؤدي إلى فروقات بين ما يُخصم من الموظف وما يُسدد للتأمينات. نسيان تحديث الأجر المسجل بعد زيادة أو ترقية يسبب فروقات وغرامات لاحقاً.",
      en: "Calculating contributions outside the system creates gaps between what is deducted and what is paid to GOSI. Forgetting to update the registered wage after a raise or promotion leads to later differences and fines.",
    },
    automated: [
      { ar: "احتساب حصة الموظف وحصة المنشأة في كل مسير", en: "Employee and employer shares calculated in every payroll" },
      { ar: "تطبيق قواعد مختلفة للسعوديين وغير السعوديين", en: "Different rules for Saudi and non-Saudi employees" },
      { ar: "قيود محاسبية تلقائية للمستحقات", en: "Automatic journal entries for the liability" },
      { ar: "تقرير شهري بالاشتراكات لكل موظف", en: "Monthly contribution report per employee" },
      { ar: "تنبيه عند تغيّر الأجر الخاضع للاشتراك", en: "Alert when the contributory wage changes" },
    ],
    requirements: [
      { ar: "رواتب Odoo مفعّلة مع عقود محدثة", en: "Odoo Payroll enabled with up-to-date contracts" },
      { ar: "رقم المنشأة في التأمينات وأرقام اشتراك الموظفين", en: "Your GOSI establishment number and employee registration numbers" },
      { ar: "كشف حالي من التأمينات بالأجور المسجلة للمطابقة", en: "A current GOSI statement of registered wages for matching" },
    ],
    faq: [
      {
        q: { ar: "هل تتغير النسب إذا عدّلتها التأمينات؟", en: "What if GOSI changes the rates?" },
        a: { ar: "النسب محفوظة كإعداد في قواعد الرواتب، ويمكن تحديثها من تاريخ سريان محدد دون تغيير البرمجة.", en: "Rates are stored as settings in the payroll rules and can be updated from an effective date without code changes." },
      },
      {
        q: { ar: "هل يُرسل التقرير إلى التأمينات مباشرة؟", en: "Is the report sent to GOSI directly?" },
        a: { ar: "يجهز Odoo التقرير والأرقام للمطابقة مع بوابة التأمينات، ويبقى السداد والإقرار من حساب المنشأة.", en: "Odoo prepares the report and figures for matching with the GOSI portal. Payment and filing stay in your establishment account." },
      },
      {
        q: { ar: "كيف تُعامل البدلات؟", en: "How are allowances treated?" },
        a: { ar: "نحدد مع فريقك أي بدلات تدخل في الأجر الخاضع للاشتراك، ونضبط القواعد على هذا الأساس.", en: "We agree with your team which allowances count toward the contributory wage and set the rules accordingly." },
      },
      {
        q: { ar: "هل يمكن مراجعة الفروقات بأثر رجعي؟", en: "Can we review past differences?" },
        a: { ar: "نعم. يمكن مقارنة الاشتراكات المحتسبة في Odoo مع كشف التأمينات لأي شهر سابق.", en: "Yes. You can compare contributions calculated in Odoo with the GOSI statement for any past month." },
      },
    ],
  },

  jofotara: {
    slug: "jofotara",
    seoTitle: {
      ar: "ربط Odoo مع نظام الفوترة الوطني JoFotara | الأردن",
      en: "Odoo JoFotara integration (Jordan e-invoicing)",
    },
    headline: {
      ar: "فواتيرك تصل *JoFotara* لحظة إصدارها",
      en: "Invoices reach *JoFotara* the moment you issue them",
    },
    intro: {
      ar: "JoFotara هو نظام الفوترة الوطني في الأردن التابع لدائرة ضريبة الدخل والمبيعات. يحتوي Odoo على حزمة التوطين الأردنية للفوترة الإلكترونية، وتتولى AIODYX ربطها بحساب المنشأة واختبار الإرسال على كل أنواع الفواتير.",
      en: "JoFotara is Jordan's national e-invoicing system, run by the Income and Sales Tax Department (ISTD). Odoo includes the Jordanian e-invoicing localisation (l10n_jo_edi). AIODYX connects it to your taxpayer account and tests sending for every invoice type.",
    },
    whyItMatters: {
      ar: "إدخال الفواتير يدوياً على بوابة JoFotara بعد إصدارها من النظام يضاعف العمل ويفتح باب الأخطاء. الفاتورة التي لا تحمل رمز QR الصادر من النظام الوطني تسبب مشاكل مع العميل ومع الدائرة.",
      en: "Re-entering invoices on the JoFotara portal after issuing them in your system doubles the work and invites errors. An invoice without the QR code issued by the national system causes problems with customers and with the department.",
    },
    automated: [
      { ar: "إرسال الفاتورة إلى JoFotara عند ترحيلها في Odoo", en: "Invoice sent to JoFotara when posted in Odoo" },
      { ar: "استلام رمز QR وطباعته على الفاتورة", en: "QR code received and printed on the invoice" },
      { ar: "إشعارات دائنة مرتبطة بالفاتورة الأصلية", en: "Credit notes referencing the original invoice" },
      { ar: "دعم فواتير المبيعات العامة والخاصة والفواتير المعفاة", en: "Support for general sales, special sales and exempt invoices" },
      { ar: "حالة الإرسال ورسائل الخطأ ظاهرة على كل فاتورة", en: "Send status and error messages shown on each invoice" },
    ],
    requirements: [
      { ar: "حساب المنشأة على بوابة JoFotara", en: "Your taxpayer account on the JoFotara portal" },
      { ar: "معرّف العميل (Client ID) والرمز السري (Secret) من البوابة", en: "Client ID and secret key generated from the portal" },
      { ar: "الرقم الضريبي ورقم تسلسل مصدر الدخل", en: "Tax number and income source sequence number" },
      { ar: "تصنيف المنشأة الضريبي ونوع الفواتير المستخدمة", en: "Your tax classification and the invoice types you use" },
    ],
    faq: [
      {
        q: { ar: "من أين نحصل على معرّف العميل والرمز السري؟", en: "Where do we get the client ID and secret?" },
        a: { ar: "من حساب المنشأة على بوابة JoFotara، من قسم ربط الأنظمة. نرشد فريقك خطوة بخطوة ولا نحتاج كلمة مرور البوابة.", en: "From your taxpayer account on the JoFotara portal, in the system integration section. We guide your team step by step and never need your portal password." },
      },
      {
        q: { ar: "كيف تُعالج المرتجعات؟", en: "How are returns handled?" },
        a: { ar: "يُصدر إشعار دائن من الفاتورة في Odoo، ويُرسل إلى JoFotara مع مرجع الفاتورة الأصلية.", en: "A credit note is issued from the invoice in Odoo and sent to JoFotara with a reference to the original invoice." },
      },
      {
        q: { ar: "هل يعمل الربط مع نقاط البيع؟", en: "Does it work with Point of Sale?" },
        a: { ar: "نعم. نضبط إرسال فواتير نقاط البيع حسب نوع الفاتورة ونختبره قبل التشغيل.", en: "Yes. We configure how POS invoices are sent based on the invoice type and test it before go-live." },
      },
      {
        q: { ar: "ماذا لو انقطع الاتصال لحظة الإصدار؟", en: "What if the connection drops when issuing?" },
        a: { ar: "تبقى الفاتورة بحالة غير مرسلة في Odoo، ويُعاد إرسالها عند عودة الاتصال دون إعادة إدخال.", en: "The invoice stays marked as not sent in Odoo and is resent once the connection is back, with no re-entry." },
      },
    ],
  },

  ssc: {
    slug: "ssc",
    seoTitle: {
      ar: "اشتراكات الضمان الاجتماعي في رواتب Odoo | الأردن",
      en: "Social Security (SSC) contributions in Odoo payroll, Jordan",
    },
    headline: {
      ar: "اشتراكات *الضمان الاجتماعي* محسوبة في كل مسير",
      en: "*Social security* contributions in every payroll run",
    },
    intro: {
      ar: "المؤسسة العامة للضمان الاجتماعي في الأردن تحصّل اشتراكات شهرية عن الموظفين المشمولين. تضبط AIODYX رواتب Odoo لتحتسب حصة الموظف والمنشأة وتُرحّلها وتُخرج كشفاً شهرياً جاهزاً للمطابقة.",
      en: "Jordan's Social Security Corporation (SSC) collects monthly contributions for insured employees. AIODYX configures Odoo payroll to calculate the employee and employer shares, post them and produce a monthly statement ready for matching.",
    },
    whyItMatters: {
      ar: "احتساب الضمان في جدول منفصل يسبب فروقات بين الرواتب والكشف المرسل للمؤسسة. التأخر في تحديث الأجر المشمول بعد زيادة يؤدي إلى فروقات وغرامات تأخير.",
      en: "Calculating social security in a separate spreadsheet creates gaps between payroll and the statement filed with SSC. A late update to the insured wage after a raise leads to differences and late fees.",
    },
    automated: [
      { ar: "احتساب حصة الموظف وحصة المنشأة تلقائياً", en: "Employee and employer shares calculated automatically" },
      { ar: "قيود محاسبية للمستحقات مع كل مسير", en: "Liability journal entries with every payroll" },
      { ar: "كشف شهري بالاشتراكات لكل موظف", en: "Monthly contribution statement per employee" },
      { ar: "تنبيه عند تغيّر الأجر المشمول بالضمان", en: "Alert when the insured wage changes" },
      { ar: "تمييز الموظفين غير المشمولين وفق إعدادهم", en: "Non-insured employees handled according to their setup" },
    ],
    requirements: [
      { ar: "رواتب Odoo مفعّلة مع عقود محدثة", en: "Odoo Payroll enabled with up-to-date contracts" },
      { ar: "رقم المنشأة في الضمان والأرقام التأمينية للموظفين", en: "Your SSC establishment number and employee insurance numbers" },
      { ar: "كشف حالي من الضمان للمطابقة عند التشغيل", en: "A current SSC statement for matching at go-live" },
    ],
    faq: [
      {
        q: { ar: "هل يمكن تحديث النسب عند تعديلها؟", en: "Can rates be updated when they change?" },
        a: { ar: "نعم. النسب إعداد في قواعد الرواتب ويمكن تغييرها من تاريخ سريان محدد.", en: "Yes. Rates are settings in the payroll rules and can be changed from a specific effective date." },
      },
      {
        q: { ar: "هل يُرسل الكشف إلى الضمان مباشرة؟", en: "Is the statement sent to SSC directly?" },
        a: { ar: "يجهز Odoo الأرقام والكشف للمطابقة مع حساب المنشأة لدى الضمان، ويبقى السداد من حسابكم.", en: "Odoo prepares the figures and statement for matching with your SSC account. Payment stays with you." },
      },
      {
        q: { ar: "هل يتكامل مع ضريبة الدخل على الرواتب؟", en: "Does it work alongside payroll income tax?" },
        a: { ar: "نعم. تُحتسب الاقتطاعات المختلفة في نفس المسير وتظهر كل واحدة كبند مستقل في قسيمة الراتب.", en: "Yes. Different deductions are calculated in the same payroll run, each as its own line on the payslip." },
      },
      {
        q: { ar: "ماذا عن الموظفين الذين ينضمون منتصف الشهر؟", en: "What about employees who join mid-month?" },
        a: { ar: "يُحتسب الاشتراك على الأجر الفعلي للفترة حسب تاريخ بداية العقد في Odoo.", en: "Contributions follow the actual wage for the period based on the contract start date in Odoo." },
      },
    ],
  },

  banks: {
    slug: "banks",
    seoTitle: {
      ar: "ربط Odoo مع البنوك | استيراد الكشوف وملفات الرواتب",
      en: "Odoo bank integration: statement import and salary files",
    },
    headline: {
      ar: "كشوف البنك تُطابق *تلقائياً* في Odoo",
      en: "Bank statements matched *automatically* in Odoo",
    },
    intro: {
      ar: "تتعامل المنشآت في الأردن والسعودية مع أكثر من بنك، ولكل بنك صيغة كشف وصيغة ملف تحويل. تربط AIODYX حساباتك البنكية بمحاسبة Odoo لاستيراد الكشوف ومطابقتها وإخراج ملفات الرواتب بصيغة كل بنك.",
      en: "Businesses in Jordan and Saudi Arabia often work with several banks, each with its own statement and transfer file format. AIODYX connects your bank accounts to Odoo Accounting to import statements, match them and export salary files in each bank's format.",
    },
    whyItMatters: {
      ar: "المحاسب يقضي أياماً في نسخ حركات الكشف ومطابقتها مع الفواتير يدوياً. ملف تحويل الرواتب يُبنى من جدول بيانات، وأي خطأ في الحساب يعني راتباً متأخراً.",
      en: "Accountants spend days copying statement lines and matching them to invoices by hand. Salary transfer files are built in spreadsheets, and one wrong account number means a late salary.",
    },
    automated: [
      { ar: "استيراد الكشوف بصيغ CAMT أو OFX أو CSV حسب ما يوفره البنك", en: "Statement import in CAMT, OFX or CSV, as your bank provides" },
      { ar: "مطابقة الحركات مع الفواتير والدفعات بقواعد محددة", en: "Lines matched to invoices and payments using defined rules" },
      { ar: "ملف تحويل الرواتب بصيغة البنك من المسير المعتمد", en: "Salary transfer file in the bank's format from approved payroll" },
      { ar: "تقرير نقد يومي لكل الحسابات والعملات", en: "Daily cash report across all accounts and currencies" },
      { ar: "قيود الرسوم والعمولات البنكية تلقائياً", en: "Bank fees and charges posted automatically" },
    ],
    requirements: [
      { ar: "قائمة الحسابات البنكية والعملات المستخدمة", en: "A list of bank accounts and currencies in use" },
      { ar: "نموذج كشف من كل بنك بالصيغة التي يصدرها", en: "A sample statement from each bank in its export format" },
      { ar: "صيغة ملف تحويل الرواتب المعتمدة من كل بنك", en: "Each bank's approved salary transfer file format" },
      { ar: "صلاحية تصدير الكشوف من الخدمات المصرفية للشركات", en: "Access to export statements from corporate online banking" },
    ],
    faq: [
      {
        q: { ar: "هل تعمل المطابقة مع كل البنوك؟", en: "Does matching work with every bank?" },
        a: { ar: "تعمل مع أي بنك يصدر كشفاً بصيغة قابلة للاستيراد. نختبر الصيغة من نموذج حقيقي قبل التشغيل.", en: "It works with any bank that exports statements in an importable format. We test the format on a real sample before go-live." },
      },
      {
        q: { ar: "ماذا يحدث للحركات التي لا تُطابق؟", en: "What happens to lines that don't match?" },
        a: { ar: "تبقى في شاشة التسوية مع اقتراحات، ويختار المحاسب الحل بنقرة واحدة. يمكن حفظ القرار كقاعدة للمرات القادمة.", en: "They stay on the reconciliation screen with suggestions, and the accountant resolves them in one click. The decision can be saved as a rule for next time." },
      },
      {
        q: { ar: "هل يدعم الحسابات بعملات متعددة؟", en: "Are multi-currency accounts supported?" },
        a: { ar: "نعم. يدعم Odoo حسابات بعملات مختلفة مع فروقات الصرف المحققة.", en: "Yes. Odoo supports accounts in different currencies with realised exchange differences." },
      },
      {
        q: { ar: "هل يمكن ربط ملف الرواتب بحماية الأجور؟", en: "Can the salary file tie in with wage protection?" },
        a: { ar: "نعم. في السعودية يُبنى ملف البنك وملف مدد من نفس المسير المعتمد، فتبقى الأرقام متطابقة.", en: "Yes. In Saudi Arabia the bank file and the Mudad file come from the same approved payroll, so figures stay consistent." },
      },
    ],
  },

  payments: {
    slug: "payments",
    seoTitle: {
      ar: "ربط Odoo مع بوابات الدفع HyperPay وTap وMoyasar",
      en: "Odoo payment gateways: HyperPay, Tap and Moyasar",
    },
    headline: {
      ar: "عميلك يدفع من *رابط الفاتورة* مباشرة",
      en: "Customers pay straight from the *invoice link*",
    },
    intro: {
      ar: "بوابات الدفع مثل HyperPay وTap وMoyasar تتيح قبول مدى وفيزا وماستركارد وApple Pay. تربط AIODYX البوابة بحسابات Odoo لتظهر وسيلة الدفع على الفواتير وعروض الأسعار والمتجر الإلكتروني.",
      en: "Payment gateways such as HyperPay, Tap and Moyasar accept mada, Visa, Mastercard and Apple Pay. AIODYX connects your gateway to Odoo so payment options appear on invoices, quotes and your online store.",
    },
    whyItMatters: {
      ar: "إرسال الفاتورة ثم انتظار تحويل بنكي يؤخر التحصيل. عند الدفع خارج النظام يسجل المحاسب الدفعة يدوياً ويطابق تسويات البوابة مع البنك سطراً بسطر.",
      en: "Sending an invoice and waiting for a bank transfer slows collection. When payments happen outside the system, accountants record them by hand and match gateway settlements to the bank line by line.",
    },
    automated: [
      { ar: "رابط دفع آمن على كل فاتورة وعرض سعر", en: "Secure payment link on every invoice and quote" },
      { ar: "قبول مدى وفيزا وماستركارد وApple Pay حسب البوابة", en: "mada, Visa, Mastercard and Apple Pay, depending on the gateway" },
      { ar: "تسجيل الدفعة وإغلاق الفاتورة عند نجاح العملية", en: "Payment recorded and invoice closed on success" },
      { ar: "تأكيد عرض السعر وتحويله لطلب بعد الدفع", en: "Quote confirmed and turned into an order after payment" },
      { ar: "مطابقة تسويات البوابة مع كشف البنك والرسوم", en: "Gateway settlements matched with the bank statement and fees" },
    ],
    requirements: [
      { ar: "حساب تاجر فعّال لدى إحدى البوابات المدعومة", en: "An active merchant account with a supported gateway" },
      { ar: "مفاتيح الربط من لوحة تحكم البوابة (اختبار وإنتاج)", en: "API keys from the gateway dashboard (test and live)" },
      { ar: "نطاق موقع يعمل بشهادة HTTPS لصفحة الدفع", en: "A domain running HTTPS for the payment page" },
    ],
    faq: [
      {
        q: { ar: "هل تحتفظ AIODYX ببيانات البطاقات؟", en: "Does AIODYX store card data?" },
        a: { ar: "لا. يدخل العميل بيانات البطاقة في صفحة البوابة، ولا تمر عبر Odoo أو عبرنا.", en: "No. The customer enters card details on the gateway's page. They never pass through Odoo or us." },
      },
      {
        q: { ar: "أي بوابة نختار؟", en: "Which gateway should we choose?" },
        a: { ar: "يعتمد ذلك على الدولة ووسائل الدفع المطلوبة وشروط التسوية. نساعدك في المقارنة، والتعاقد يتم بينك وبين البوابة.", en: "It depends on your country, the payment methods you need and settlement terms. We help you compare, and you contract directly with the gateway." },
      },
      {
        q: { ar: "هل يمكن الدفع الجزئي أو الدفعات المقدمة؟", en: "Can customers pay part or a deposit?" },
        a: { ar: "نعم. يمكن طلب دفعة مقدمة على عرض السعر، وتُسجل كدفعة جزئية على الفاتورة.", en: "Yes. You can request a down payment on the quote, recorded as a partial payment on the invoice." },
      },
      {
        q: { ar: "كيف نختبر قبل التشغيل؟", en: "How do we test before going live?" },
        a: { ar: "نستخدم بيئة الاختبار في البوابة ببطاقات تجريبية، ثم ننتقل إلى مفاتيح الإنتاج بعد اعتمادك.", en: "We use the gateway's test mode with test cards, then switch to live keys after your sign-off." },
      },
    ],
  },

  shipping: {
    slug: "shipping",
    seoTitle: {
      ar: "ربط Odoo مع Aramex وSMSA | بوالص الشحن والتتبع",
      en: "Odoo shipping integration: Aramex and SMSA waybills",
    },
    headline: {
      ar: "بوليصة الشحن تُنشأ *من أمر التسليم*",
      en: "Waybills created *from the delivery order*",
    },
    intro: {
      ar: "شركات الشحن مثل Aramex وSMSA تخدم التوصيل داخل السعودية والأردن وخارجهما. تربط AIODYX حسابك لديها بتطبيق المخزون في Odoo لتُنشأ البوليصة ويُطبع الملصق من أمر التسليم مباشرة.",
      en: "Carriers such as Aramex and SMSA handle deliveries within Saudi Arabia, Jordan and abroad. AIODYX connects your carrier account to Odoo Inventory so waybills and labels are created straight from the delivery order.",
    },
    whyItMatters: {
      ar: "نسخ عنوان العميل ووزن الشحنة إلى موقع شركة الشحن يستهلك وقت المستودع ويسبب أخطاء في العناوين. مبالغ الدفع عند الاستلام تُتابع في جداول منفصلة وتتأخر تسويتها.",
      en: "Copying the customer's address and parcel weight into the carrier's website wastes warehouse time and causes address errors. Cash-on-delivery amounts get tracked in separate spreadsheets and settle late.",
    },
    automated: [
      { ar: "إنشاء البوليصة عند تأكيد أمر التسليم", en: "Waybill created when the delivery order is validated" },
      { ar: "طباعة ملصق الشحن من Odoo", en: "Shipping label printed from Odoo" },
      { ar: "رقم التتبع محفوظ على الطلب ويُرسل للعميل", en: "Tracking number saved on the order and sent to the customer" },
      { ar: "مبلغ الدفع عند الاستلام يُمرر لشركة الشحن", en: "Cash-on-delivery amount passed to the carrier" },
      { ar: "مطابقة تحويلات الدفع عند الاستلام مع الفواتير", en: "COD remittances matched to invoices" },
    ],
    requirements: [
      { ar: "حساب تجاري لدى شركة الشحن مع بيانات الربط", en: "A business account with the carrier and its API credentials" },
      { ar: "عناوين المستودعات وأوزان المنتجات في Odoo", en: "Warehouse addresses and product weights in Odoo" },
      { ar: "طابعة ملصقات أو طابعة عادية حسب حجم الطلبات", en: "A label printer or standard printer, depending on volume" },
    ],
    faq: [
      {
        q: { ar: "هل يمكن استخدام أكثر من شركة شحن؟", en: "Can we use more than one carrier?" },
        a: { ar: "نعم. يُختار الناقل لكل طلب يدوياً أو بقاعدة حسب المدينة أو الوزن.", en: "Yes. The carrier is chosen per order, manually or by a rule based on city or weight." },
      },
      {
        q: { ar: "هل تظهر تكلفة الشحن على عرض السعر؟", en: "Does shipping cost show on the quote?" },
        a: { ar: "يمكن إضافة سطر الشحن بسعر ثابت أو حسب القواعد التي تحددها على الطلب.", en: "You can add a shipping line at a fixed price or based on rules you set on the order." },
      },
      {
        q: { ar: "كيف يعرف العميل حالة شحنته؟", en: "How does the customer track the parcel?" },
        a: { ar: "يصله رقم التتبع بالبريد أو واتساب، ويظهر أيضاً في بوابة العميل في Odoo.", en: "They receive the tracking number by email or WhatsApp, and it also appears in the Odoo customer portal." },
      },
      {
        q: { ar: "هل يعمل مع طلبات المتجر الإلكتروني؟", en: "Does it work with online store orders?" },
        a: { ar: "نعم. طلبات سلة وزد وShopify ومتجر Odoo تمر بنفس أمر التسليم وتُشحن بنفس الطريقة.", en: "Yes. Orders from Salla, Zid, Shopify and the Odoo store go through the same delivery order and ship the same way." },
      },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    seoTitle: {
      ar: "ربط Odoo مع سلة وزد وShopify | مزامنة الطلبات والمخزون",
      en: "Odoo integration with Salla, Zid and Shopify",
    },
    headline: {
      ar: "متجرك ومخزونك في *نظام واحد*",
      en: "Your store and stock in *one system*",
    },
    intro: {
      ar: "منصات مثل سلة وزد وShopify هي الأكثر استخداماً للمتاجر الإلكترونية في المنطقة. تربط AIODYX متجرك بـ Odoo لتصل الطلبات وتُحدّث الكميات والأسعار تلقائياً، أو تبني لك متجراً على Odoo نفسه.",
      en: "Salla, Zid and Shopify are among the most used e-commerce platforms in the region. AIODYX connects your store to Odoo so orders arrive and stock and prices update automatically, or builds your store on Odoo itself.",
    },
    whyItMatters: {
      ar: "إدخال طلبات المتجر يدوياً في النظام يؤخر التجهيز ويسبب أخطاء. عندما لا يتزامن المخزون، يبيع المتجر منتجات نفدت من المستودع.",
      en: "Typing store orders into the system by hand slows fulfilment and causes errors. When stock does not sync, the store sells products that are already out of stock.",
    },
    automated: [
      { ar: "سحب الطلبات الجديدة إلى Odoo كطلبات بيع", en: "New orders pulled into Odoo as sales orders" },
      { ar: "تحديث الكميات المتاحة على المتجر من المستودع", en: "Available stock updated on the store from the warehouse" },
      { ar: "مزامنة الأسعار من قوائم الأسعار في Odoo", en: "Prices synced from Odoo pricelists" },
      { ar: "فاتورة إلكترونية متوافقة لكل طلب", en: "Compliant e-invoice for every order" },
      { ar: "تسوية مدفوعات المنصة مع الطلبات والرسوم", en: "Platform payouts reconciled with orders and fees" },
    ],
    requirements: [
      { ar: "صلاحية المالك أو المدير على لوحة تحكم المتجر", en: "Owner or admin access to the store dashboard" },
      { ar: "توحيد رموز المنتجات (SKU) بين المتجر وOdoo", en: "Matching product SKUs between the store and Odoo" },
      { ar: "تحديد المستودع الذي يغذي المتجر", en: "A decision on which warehouse feeds the store" },
    ],
    faq: [
      {
        q: { ar: "هل نحتاج للانتقال من سلة أو زد؟", en: "Do we need to leave Salla or Zid?" },
        a: { ar: "لا. يبقى المتجر على منصته ويرتبط بـ Odoo. متجر Odoo خيار إضافي لمن يريد كل شيء في نظام واحد.", en: "No. Your store stays on its platform and connects to Odoo. An Odoo store is an option if you want everything in one system." },
      },
      {
        q: { ar: "ماذا لو كان لدينا أكثر من متجر؟", en: "What if we run several stores?" },
        a: { ar: "يمكن ربط عدة متاجر بنفس Odoo، مع تمييز مصدر كل طلب في التقارير.", en: "Several stores can connect to the same Odoo, with each order's source tracked in reports." },
      },
      {
        q: { ar: "كم مرة يتحدث المخزون؟", en: "How often does stock update?" },
        a: { ar: "يتحدث بشكل دوري حسب إعداد الربط وحدود المنصة، ويمكن تشغيل التحديث يدوياً عند الحاجة.", en: "It updates on a schedule set by the connector and platform limits, and you can trigger it manually when needed." },
      },
      {
        q: { ar: "هل تشمل المزامنة المرتجعات؟", en: "Are returns included?" },
        a: { ar: "نعم. الإلغاء والمرتجع يُعالجان في Odoo مع إشعار دائن وإعادة الكمية للمخزون.", en: "Yes. Cancellations and returns are handled in Odoo with a credit note and stock put back." },
      },
    ],
  },

  whatsapp: {
    slug: "whatsapp",
    seoTitle: {
      ar: "ربط Odoo مع واتساب للأعمال | WhatsApp Business API",
      en: "Odoo WhatsApp Business API integration",
    },
    headline: {
      ar: "فواتيرك وعروضك تصل العميل على *واتساب*",
      en: "Invoices and quotes reach customers on *WhatsApp*",
    },
    intro: {
      ar: "واتساب للأعمال (WhatsApp Business API) هو القناة الرسمية من Meta لمراسلة العملاء من الأنظمة. تربط AIODYX رقم منشأتك بـ Odoo لترسل المستندات والتذكيرات بقوالب معتمدة وتصل الردود إلى النظام.",
      en: "The WhatsApp Business API is Meta's official channel for messaging customers from business systems. AIODYX connects your business number to Odoo so documents and reminders go out through approved templates and replies come back into the system.",
    },
    whyItMatters: {
      ar: "الموظفون يرسلون الفواتير من هواتفهم الشخصية، فتضيع المحادثات ولا يعرف أحد ما أُرسل لمن. التذكير بالدفع أو المواعيد يعتمد على ذاكرة الموظف.",
      en: "Staff send invoices from personal phones, conversations get lost and nobody knows what was sent to whom. Payment and appointment reminders depend on someone remembering.",
    },
    automated: [
      { ar: "إرسال الفاتورة أو عرض السعر من المستند بنقرة", en: "Send an invoice or quote from the document in one click" },
      { ar: "قوالب رسائل معتمدة من Meta لكل حالة", en: "Meta-approved message templates for each case" },
      { ar: "تذكيرات تلقائية بالدفع والمواعيد وحالة الطلب", en: "Automatic reminders for payments, appointments and order status" },
      { ar: "ردود العميل تظهر في سجل المستند في Odoo", en: "Customer replies appear in the document's chatter in Odoo" },
      { ar: "سجل كامل بالمحادثات مرتبط بالعميل", en: "Full conversation history linked to the customer" },
    ],
    requirements: [
      { ar: "حساب أعمال موثق على Meta Business", en: "A verified Meta Business account" },
      { ar: "رقم هاتف مخصص لا يستخدم في تطبيق واتساب العادي", en: "A dedicated phone number not used on the regular WhatsApp app" },
      { ar: "صلاحية المسؤول على حساب Meta لإنشاء الربط", en: "Admin access to the Meta account to set up the connection" },
      { ar: "نصوص القوالب المطلوبة لتقديمها للاعتماد", en: "Template texts ready to submit for approval" },
    ],
    faq: [
      {
        q: { ar: "لماذا نحتاج قوالب معتمدة؟", en: "Why do we need approved templates?" },
        a: { ar: "تشترط Meta استخدام قالب معتمد لبدء محادثة مع العميل. بعد رد العميل يمكن المراسلة بحرية خلال نافذة 24 ساعة.", en: "Meta requires an approved template to start a conversation. Once the customer replies, you can message freely within a 24-hour window." },
      },
      {
        q: { ar: "هل يمكن استخدام رقمنا الحالي؟", en: "Can we use our current number?" },
        a: { ar: "نعم، بشرط نقله من تطبيق واتساب العادي إلى واجهة الأعمال. لا يمكن استخدام الرقم في الاثنين معاً.", en: "Yes, if you move it from the regular WhatsApp app to the Business API. The same number cannot run on both." },
      },
      {
        q: { ar: "هل توجد تكلفة على الرسائل؟", en: "Is there a cost per message?" },
        a: { ar: "تفرض Meta رسوماً حسب نوع المحادثة والدولة، وتُدفع مباشرة لها. نوضح لك النموذج قبل التشغيل.", en: "Meta charges by conversation type and country, paid directly to Meta. We walk you through the model before go-live." },
      },
      {
        q: { ar: "من يرى ردود العملاء؟", en: "Who sees customer replies?" },
        a: { ar: "تصل الردود إلى المستند المعني والمسؤول عنه في Odoo، حسب صلاحيات المستخدمين.", en: "Replies go to the related document and its owner in Odoo, following user access rights." },
      },
    ],
  },

  biometric: {
    slug: "biometric",
    seoTitle: {
      ar: "ربط أجهزة البصمة ZKTeco مع Odoo | الحضور والرواتب",
      en: "ZKTeco biometric integration with Odoo Attendances",
    },
    headline: {
      ar: "حركات *البصمة* تصل Odoo من كل الفروع",
      en: "*Biometric punches* reach Odoo from every branch",
    },
    intro: {
      ar: "أجهزة البصمة مثل ZKTeco وما يماثلها تسجل دخول الموظفين وخروجهم في المكاتب والمستودعات والفروع. تربط AIODYX هذه الأجهزة بتطبيق الحضور في Odoo لتُسحب الحركات وتُحتسب في الرواتب.",
      en: "Biometric devices such as ZKTeco and similar models record employee check-ins and check-outs at offices, warehouses and branches. AIODYX connects these devices to Odoo Attendances so punches are pulled in and counted in payroll.",
    },
    whyItMatters: {
      ar: "تصدير ملف الحضور من كل جهاز ثم دمجه في جدول بيانات يستهلك أياماً من فريق الموارد البشرية كل شهر. التأخير والعمل الإضافي يُحسبان يدوياً، فتكثر الاعتراضات على الرواتب.",
      en: "Exporting attendance files from each device and merging them in a spreadsheet costs HR days every month. Lateness and overtime are worked out by hand, which leads to payroll disputes.",
    },
    automated: [
      { ar: "سحب الحركات من الأجهزة بشكل دوري", en: "Punches pulled from devices on a schedule" },
      { ar: "ربط كل حركة بالموظف الصحيح في Odoo", en: "Each punch matched to the right employee in Odoo" },
      { ar: "احتساب التأخير والخروج المبكر والعمل الإضافي", en: "Lateness, early leave and overtime calculated" },
      { ar: "تمرير ساعات العمل إلى مسير الرواتب", en: "Worked hours fed into payroll" },
      { ar: "عرض موحد لحضور كل الفروع", en: "One view of attendance across all branches" },
    ],
    requirements: [
      { ar: "أجهزة متصلة بالشبكة وعناوين IP ثابتة لها", en: "Network-connected devices with fixed IP addresses" },
      { ar: "وصول من خادم Odoo إلى الأجهزة عبر الشبكة أو VPN", en: "Network or VPN access from the Odoo server to the devices" },
      { ar: "أرقام الموظفين في الجهاز مطابقة لأرقامهم في Odoo", en: "Employee IDs on the device matching their IDs in Odoo" },
      { ar: "جداول الدوام وسياسة التأخير والإضافي", en: "Work schedules and your lateness and overtime policy" },
    ],
    faq: [
      {
        q: { ar: "هل يعمل الربط مع أجهزة غير ZKTeco؟", en: "Does it work with devices other than ZKTeco?" },
        a: { ar: "يعمل مع الأجهزة التي توفر طريقة لسحب الحركات عبر الشبكة. نتحقق من الموديل قبل البدء.", en: "It works with devices that allow punches to be pulled over the network. We check your model before we start." },
      },
      {
        q: { ar: "ماذا لو انقطع اتصال فرع؟", en: "What if a branch loses connection?" },
        a: { ar: "يحتفظ الجهاز بالحركات في ذاكرته، وتُسحب عند عودة الاتصال دون فقدان بيانات.", en: "The device keeps punches in memory, and they are pulled once the connection returns with no data lost." },
      },
      {
        q: { ar: "هل يدعم الورديات الليلية؟", en: "Are night shifts supported?" },
        a: { ar: "نعم. تُضبط الورديات التي تمتد لليوم التالي في جداول الدوام لتُحسب الحركات على الوردية الصحيحة.", en: "Yes. Shifts that run past midnight are set in work schedules so punches count toward the right shift." },
      },
      {
        q: { ar: "هل يستطيع الموظف رؤية حضوره؟", en: "Can employees see their own attendance?" },
        a: { ar: "نعم. يرى الموظف حركاته وساعاته من الخدمة الذاتية في Odoo حسب صلاحياته.", en: "Yes. Employees see their punches and hours through Odoo self-service, based on their access rights." },
      },
    ],
  },
};
