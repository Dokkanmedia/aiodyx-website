import type { L } from "./i18n";

export type Block =
  | { type: "p"; text: L }
  | { type: "h2"; text: L }
  | { type: "ul"; items: L[] }
  | { type: "ol"; items: L[] }
  | { type: "note"; text: L }; // highlighted callout

export type Article = {
  slug: string;
  date: string; // ISO yyyy-mm-dd
  readMin: number;
  category: L;
  title: L;
  excerpt: L;
  related: { apps: string[]; platforms: string[] }; // slugs from lib/content.ts
  body: Block[];
  faq: { q: L; a: L }[];
};

const cat = {
  einvoicing: { ar: "الفوترة الإلكترونية", en: "E-invoicing" },
  odoo: { ar: "دليل Odoo", en: "Odoo guide" },
  implementation: { ar: "تطبيق الأنظمة", en: "Implementation" },
  payroll: { ar: "الرواتب والموارد البشرية", en: "Payroll & HR" },
};

export const articles: Article[] = [
  /* ------------------------------------------------------------------ */
  /* 1. ZATCA Phase 2                                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "zatca-phase-2-odoo-guide",
    date: "2026-10-09",
    readMin: 8,
    category: cat.einvoicing,
    title: {
      ar: "المرحلة الثانية من فاتورة (ZATCA) مع Odoo: دليل عملي",
      en: "FATOORA Phase 2 with Odoo: a practical guide",
    },
    excerpt: {
      ar: "ما معنى الاعتماد والإبلاغ، وكيف تسجل وحدة الفوترة برمز OTP، وما دور شهادات CSID والختم التشفيري، وأشهر أسباب رفض الفواتير، مع قائمة تحقق قبل التشغيل.",
      en: "What clearance and reporting mean, how to onboard an e-invoicing unit with an OTP, what CSIDs and the cryptographic stamp do, the most common rejection reasons, and a pre-go-live checklist.",
    },
    related: { apps: ["accounting", "point-of-sale"], platforms: ["zatca"] },
    body: [
      {
        type: "p",
        text: {
          ar: "منصة فاتورة هي نظام الفوترة الإلكترونية لهيئة الزكاة والضريبة والجمارك في السعودية. المرحلة الأولى طلبت إصدار الفواتير من نظام إلكتروني بصيغة محددة. المرحلة الثانية، وتسمى مرحلة الربط والتكامل، تطلب أن يرتبط نظام الفوترة لديك بالمنصة مباشرة وأن تُرسل كل فاتورة إليها. يشرح هذا الدليل ما يحدث فعلياً عند تشغيل الربط من Odoo، وما الذي تحتاج تجهيزه قبل البدء.",
          en: "FATOORA is the e-invoicing platform of Saudi Arabia's Zakat, Tax and Customs Authority (ZATCA). Phase 1 required invoices to be generated electronically in a set format. Phase 2, the integration phase, requires your invoicing system to connect to the platform and send every invoice to it. This guide explains what actually happens when you run the integration from Odoo and what you need to prepare first.",
        },
      },
      {
        type: "note",
        text: {
          ar: "تُبلَّغ المنشآت بموعد دخولها المرحلة الثانية على دفعات. لا نذكر هنا مواعيد أو حدوداً للإيرادات لأنها تتغير. تحقق من موعدك ومتطلباتك الحالية مباشرة مع الهيئة أو عبر بوابة فاتورة.",
          en: "ZATCA notifies businesses of their Phase 2 date in waves. We do not list dates or revenue thresholds here because they change. Check your own date and current requirements directly with ZATCA or on the FATOORA portal.",
        },
      },
      { type: "h2", text: { ar: "الاعتماد والإبلاغ: نوعان من الفواتير", en: "Clearance and reporting: two invoice flows" } },
      {
        type: "p",
        text: {
          ar: "تفرق المرحلة الثانية بين الفاتورة الضريبية القياسية والفاتورة الضريبية المبسطة. لكل نوع مسار مختلف مع المنصة.",
          en: "Phase 2 separates the standard tax invoice from the simplified tax invoice. Each type follows a different path with the platform.",
        },
      },
      {
        type: "ul",
        items: [
          {
            ar: "الاعتماد (Clearance): يخص الفواتير القياسية بين المنشآت B2B. يرسل النظام الفاتورة إلى فاتورة، وتتحقق منها المنصة وتعيدها مختومة. بعد ذلك فقط تُشارك الفاتورة مع العميل.",
            en: "Clearance: applies to standard B2B invoices. The system sends the invoice to FATOORA, the platform validates it and returns it stamped. Only then do you share it with the customer.",
          },
          {
            ar: "الإبلاغ (Reporting): يخص الفواتير المبسطة للأفراد B2C، مثل فواتير نقاط البيع. تُسلم الفاتورة للعميل فوراً، ثم يبلغ عنها النظام للمنصة خلال 24 ساعة.",
            en: "Reporting: applies to simplified B2C invoices, such as point-of-sale receipts. The customer gets the invoice immediately, and the system reports it to the platform within 24 hours.",
          },
          {
            ar: "الإشعارات الدائنة والمدينة تتبع نوع الفاتورة الأصلية، ويجب أن تشير إليها وأن تذكر سبب الإصدار.",
            en: "Credit and debit notes follow the type of the original invoice. They must reference it and state the reason for issuing.",
          },
        ],
      },
      { type: "h2", text: { ar: "تسجيل وحدة الفوترة برمز OTP", en: "Onboarding the e-invoicing unit with an OTP" } },
      {
        type: "p",
        text: {
          ar: "كل نظام يصدر فواتير يُسجل لدى الهيئة كوحدة فوترة إلكترونية (EGS). في Odoo يُسجل كل دفتر مبيعات كوحدة مستقلة. إذا كان لديك عدة فروع أو دفاتر، فكل منها يحتاج تسجيلاً خاصاً.",
          en: "Every system that issues invoices is registered with ZATCA as an e-invoicing generation solution (EGS) unit. In Odoo, each sales journal is onboarded as its own unit. If you have several branches or journals, each one needs its own onboarding.",
        },
      },
      {
        type: "ol",
        items: [
          {
            ar: "أكمل بيانات الشركة في Odoo: الرقم الضريبي، ومعرّف المنشأة مثل السجل التجاري، والعنوان الوطني كاملاً.",
            en: "Complete the company record in Odoo: VAT number, a company identifier such as the CR number, and the full national address.",
          },
          {
            ar: "ادخل بوابة فاتورة بحساب المنشأة، وولّد رمز OTP لتسجيل وحدة جديدة. الرمز صالح لمدة قصيرة، لذلك جهّز Odoo قبل توليده.",
            en: "Log in to the FATOORA portal with the business account and generate an OTP to onboard a new unit. The code expires quickly, so have Odoo ready before you generate it.",
          },
          {
            ar: "أدخل الرمز في إعدادات دفتر المبيعات في Odoo. ينشئ النظام طلب شهادة (CSR) ويرسله للهيئة.",
            en: "Enter the code in the sales journal's ZATCA settings in Odoo. The system creates a certificate signing request (CSR) and sends it to ZATCA.",
          },
          {
            ar: "تعيد الهيئة شهادة الامتثال (Compliance CSID). يرسل Odoo بها فواتير اختبار تغطي الأنواع التي ستصدرها.",
            en: "ZATCA returns a compliance CSID. Odoo uses it to submit test invoices covering the types you will issue.",
          },
          {
            ar: "بعد نجاح فحوص الامتثال، يطلب Odoo شهادة الإنتاج (Production CSID). بها تُرسل الفواتير الحقيقية.",
            en: "Once the compliance checks pass, Odoo requests the production CSID. Real invoices are sent with it.",
          },
        ],
      },
      {
        type: "p",
        text: {
          ar: "يدعم Odoo بيئات مختلفة: بيئة تجريبية للمطورين، وبيئة محاكاة، وبيئة الإنتاج. ابدأ دائماً ببيئة المحاكاة على نسخة اختبار من قاعدة بياناتك، ولا تنتقل للإنتاج قبل نجاح الاختبارات على بيانات حقيقية.",
          en: "Odoo supports separate environments: a developer sandbox, a simulation environment and production. Always start with simulation on a test copy of your database. Move to production only after tests pass on real data.",
        },
      },
      { type: "h2", text: { ar: "الختم التشفيري ورمز QR", en: "The cryptographic stamp and QR code" } },
      {
        type: "p",
        text: {
          ar: "كل فاتورة في المرحلة الثانية تُنشأ بصيغة XML وفق معيار UBL 2.1. يوقعها النظام بالختم التشفيري باستخدام شهادة الوحدة. يحتوي رمز QR على بيانات الفاتورة الأساسية مع التوقيع، فيمكن لأي طرف التحقق منها. كما ترتبط كل فاتورة بالفاتورة السابقة عبر قيمة تجزئة (Hash) وعداد تسلسلي. لهذا السبب لا يجوز حذف فاتورة أُرسلت أو تعديلها، والتصحيح يتم بإشعار دائن أو مدين.",
          en: "Every Phase 2 invoice is produced as XML following the UBL 2.1 standard. The system signs it with the cryptographic stamp using the unit's certificate. The QR code carries the key invoice data with the signature, so any party can verify it. Each invoice is also chained to the previous one through a hash value and a sequential counter. That is why a sent invoice cannot be deleted or edited. Corrections go through a credit or debit note.",
        },
      },
      { type: "h2", text: { ar: "ما الذي يقدمه Odoo عبر l10n_sa_edi", en: "What Odoo's l10n_sa_edi does" } },
      {
        type: "p",
        text: {
          ar: "حزمة التوطين السعودية للفوترة الإلكترونية جزء من Odoo. لا تحتاج برنامجاً وسيطاً خارجياً. تتولى الحزمة المهام التالية:",
          en: "The Saudi e-invoicing localisation is part of Odoo. You do not need external middleware. The module handles the following:",
        },
      },
      {
        type: "ul",
        items: [
          { ar: "تسجيل الدفاتر كوحدات فوترة والحصول على شهادات الامتثال والإنتاج.", en: "Onboarding journals as e-invoicing units and obtaining compliance and production CSIDs." },
          { ar: "إنشاء ملف XML لكل فاتورة وتوقيعه وتوليد رمز QR.", en: "Building and signing the XML for each invoice and generating the QR code." },
          { ar: "إرسال الفواتير القياسية للاعتماد والإبلاغ عن الفواتير المبسطة.", en: "Sending standard invoices for clearance and reporting simplified ones." },
          { ar: "عرض حالة الفاتورة ورسائل التحذير أو الرفض على الفاتورة نفسها.", en: "Showing the invoice status and any warning or rejection messages on the invoice itself." },
          { ar: "ربط نقطة البيع بالمسار نفسه للفواتير المبسطة.", en: "Connecting Point of Sale to the same flow for simplified invoices." },
        ],
      },
      {
        type: "p",
        text: {
          ar: "يحدد Odoo نوع الفاتورة غالباً حسب نوع العميل. العميل المسجل كشركة يحصل على فاتورة قياسية، والعميل الفرد يحصل على فاتورة مبسطة. لذلك فإن ضبط بطاقات العملاء خطوة أساسية.",
          en: "Odoo usually decides the invoice type from the customer type. A customer set up as a company gets a standard invoice, and an individual gets a simplified one. That makes clean customer records an essential step.",
        },
      },
      { type: "h2", text: { ar: "أشهر أسباب رفض الفواتير", en: "Common rejection reasons" } },
      {
        type: "ul",
        items: [
          {
            ar: "رقم ضريبي غير صحيح للمشتري، أو مكتوب بمسافات أو بأرقام عربية.",
            en: "An invalid buyer VAT number, or one typed with spaces or Arabic-Indic digits.",
          },
          {
            ar: "عنوان المشتري ناقص في الفاتورة القياسية: رقم المبنى، أو الحي، أو المدينة، أو الرمز البريدي.",
            en: "An incomplete buyer address on a standard invoice: building number, district, city or postal code.",
          },
          {
            ar: "عميل مسجل كفرد وهو منشأة، فتخرج فاتورة مبسطة بدل فاتورة قياسية، أو العكس.",
            en: "A business customer set up as an individual, so a simplified invoice goes out instead of a standard one, or the reverse.",
          },
          {
            ar: "إشعار دائن بلا إشارة للفاتورة الأصلية أو بلا سبب.",
            en: "A credit note with no reference to the original invoice or no reason.",
          },
          {
            ar: "رمز ضريبي غير مناسب، مثل بند معفى أو بنسبة صفر دون تحديد سبب الإعفاء.",
            en: "A wrong tax code, such as an exempt or zero-rated line with no exemption reason.",
          },
          {
            ar: "بيانات المنشأة البائعة ناقصة، خصوصاً العنوان الوطني ومعرّف المنشأة.",
            en: "Missing seller data, especially the national address and the company identifier.",
          },
        ],
      },
      {
        type: "p",
        text: {
          ar: "تفرق المنصة بين التحذير والرفض. الفاتورة مع تحذير تُقبل، لكن الأفضل معالجة سبب التحذير قبل أن يتحول إلى رفض في تحديثات لاحقة.",
          en: "The platform separates warnings from rejections. An invoice with a warning is accepted, but fix the cause early before it becomes a rejection in a later update.",
        },
      },
      { type: "h2", text: { ar: "قائمة تحقق قبل التشغيل", en: "Pre-go-live checklist" } },
      {
        type: "ol",
        items: [
          { ar: "تأكد من حساب فعّال على بوابة فاتورة وصلاحية توليد OTP.", en: "Confirm an active FATOORA portal account with rights to generate OTPs." },
          { ar: "راجع بيانات الشركة: الرقم الضريبي والسجل التجاري والعنوان الوطني.", en: "Review company data: VAT number, CR number and national address." },
          { ar: "حدد الدفاتر والفروع ونقاط البيع التي تحتاج وحدة فوترة.", en: "List the journals, branches and points of sale that need a unit." },
          { ar: "نظف بيانات العملاء: نوع العميل والرقم الضريبي والعنوان.", en: "Clean customer data: customer type, VAT number and address." },
          { ar: "راجع الضرائب وأسباب الإعفاء على المنتجات والخدمات.", en: "Review taxes and exemption reasons on products and services." },
          { ar: "اختبر كل نوع: فاتورة قياسية، ومبسطة، وإشعار دائن، وإشعار مدين، وفاتورة نقطة بيع.", en: "Test each type: standard, simplified, credit note, debit note and POS receipt." },
          { ar: "درّب فريق المحاسبة على قراءة رسائل الرفض وإعادة الإرسال.", en: "Train the accounting team to read rejection messages and resend." },
          { ar: "حدد شخصاً مسؤولاً عن متابعة الفواتير غير المرسلة يومياً.", en: "Name one person to check unsent invoices every day." },
        ],
      },
      { type: "h2", text: { ar: "الخلاصة", en: "Conclusion" } },
      {
        type: "p",
        text: {
          ar: "الربط التقني في Odoo جاهز، ومعظم المشاكل تأتي من البيانات. ركّز على نظافة بيانات العملاء والضرائب، واختبر في بيئة المحاكاة قبل الإنتاج. يتولى فريق AIODYX في الرياض وعمّان هذا الإعداد والتسجيل والاختبار، ويمكنه مراجعة جاهزية بياناتك قبل موعدك.",
          en: "The technical connection in Odoo is ready. Most problems come from data. Focus on clean customer and tax data, and test in simulation before production. The AIODYX team in Riyadh and Amman handles this setup, onboarding and testing, and can review your data readiness before your date.",
        },
      },
    ],
    faq: [
      {
        q: { ar: "هل نحتاج وحدة فوترة لكل فرع؟", en: "Do we need a unit for every branch?" },
        a: {
          ar: "كل دفتر مبيعات يُسجل كوحدة مستقلة في Odoo. عدد الوحدات يعتمد على طريقة تقسيم دفاترك وفروعك ونقاط البيع.",
          en: "Each sales journal is onboarded as its own unit in Odoo. The number of units depends on how you split journals, branches and points of sale.",
        },
      },
      {
        q: { ar: "هل يمكن تعديل فاتورة بعد اعتمادها؟", en: "Can we edit an invoice after clearance?" },
        a: {
          ar: "لا. التصحيح يتم بإشعار دائن يشير إلى الفاتورة الأصلية، ثم تصدر فاتورة جديدة إذا لزم.",
          en: "No. You correct it with a credit note that references the original, then issue a new invoice if needed.",
        },
      },
      {
        q: { ar: "ماذا لو انقطع الاتصال بالمنصة؟", en: "What if the connection to the platform drops?" },
        a: {
          ar: "تبقى الفاتورة في Odoo بحالة غير مرسلة، ويمكن إعادة إرسالها عند عودة الاتصال. تابع الفواتير المبسطة خصوصاً لأن لها مهلة إبلاغ.",
          en: "The invoice stays in Odoo as unsent, and you can resend it when the connection returns. Watch simplified invoices closely because they have a reporting window.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. JoFotara                                                         */
  /* ------------------------------------------------------------------ */
  {
    slug: "jofotara-odoo-integration",
    date: "2026-10-09",
    readMin: 7,
    category: cat.einvoicing,
    title: {
      ar: "ربط Odoo مع نظام الفوترة الوطني الأردني JoFotara",
      en: "Connecting Odoo to Jordan's JoFotara e-invoicing system",
    },
    excerpt: {
      ar: "ما هو نظام JoFotara، وكيف تحصل على معرّف العميل والرمز السري من بوابة المكلف، وكيف يرسل Odoo الفواتير ويستلم رمز QR، وكيف تُربط الإشعارات الدائنة بالفاتورة الأصلية.",
      en: "What JoFotara is, how to get the client ID and secret from the taxpayer portal, how Odoo submits invoices and receives the QR code, and how credit notes reference the original invoice.",
    },
    related: { apps: ["accounting", "point-of-sale"], platforms: ["jofotara"] },
    body: [
      {
        type: "p",
        text: {
          ar: "JoFotara هو نظام الفوترة الوطني في الأردن، وتديره دائرة ضريبة الدخل والمبيعات. يستقبل النظام الفواتير من أنظمة المكلفين، ويسجلها، ويعيد لكل فاتورة رمز QR يثبت تسجيلها. يمكن للمكلف إدخال الفواتير يدوياً على البوابة، أو ربط نظامه المحاسبي ليرسلها تلقائياً. هذا الدليل يشرح الطريقة الثانية مع Odoo.",
          en: "JoFotara is Jordan's national e-invoicing system, run by the Income and Sales Tax Department (ISTD). It receives invoices from taxpayers' systems, records them and returns a QR code for each invoice as proof of registration. Taxpayers can enter invoices manually on the portal or connect their accounting system to send them automatically. This guide covers the second option with Odoo.",
        },
      },
      {
        type: "note",
        text: {
          ar: "متطلبات الإلزام ونطاق المكلفين وأي مواعيد تحددها الدائرة وقد تتغير. تحقق من المتطلب الحالي الذي ينطبق على منشأتك مع دائرة ضريبة الدخل والمبيعات.",
          en: "Scope, obligations and any deadlines are set by ISTD and may change. Check the current requirement that applies to your business with the Income and Sales Tax Department.",
        },
      },
      { type: "h2", text: { ar: "لماذا الربط أفضل من الإدخال اليدوي", en: "Why integrate instead of entering invoices by hand" } },
      {
        type: "p",
        text: {
          ar: "الإدخال اليدوي يعني كتابة كل فاتورة مرتين: مرة في نظامك ومرة على البوابة. هذا يضاعف الوقت ويفتح باب الأخطاء في المبالغ والضرائب وبيانات المشتري. كما أن الفاتورة التي تُسلم للعميل يجب أن تحمل رمز QR الصادر من النظام الوطني. مع الربط، تخرج الفاتورة من Odoo مسجلة ومعها الرمز، دون أي خطوة إضافية من المحاسب.",
          en: "Manual entry means typing every invoice twice: once in your system and once on the portal. That doubles the time and invites errors in amounts, taxes and buyer data. The invoice you hand to the customer also needs the QR code issued by the national system. With integration, the invoice leaves Odoo already registered and carrying its code, with no extra step for the accountant.",
        },
      },
      { type: "h2", text: { ar: "الحصول على معرّف العميل والرمز السري", en: "Getting the client ID and secret key" } },
      {
        type: "ol",
        items: [
          {
            ar: "ادخل حساب المكلف على بوابة JoFotara.",
            en: "Log in to your taxpayer account on the JoFotara portal.",
          },
          {
            ar: "افتح قسم ربط الأنظمة، وأنشئ بيانات ربط جديدة لنظامك.",
            en: "Open the system integration section and create new integration credentials for your system.",
          },
          {
            ar: "انسخ معرّف العميل (Client ID) والرمز السري (Secret Key) واحفظهما في مكان آمن.",
            en: "Copy the client ID and secret key and store them somewhere secure.",
          },
          {
            ar: "سجّل رقم تسلسل مصدر الدخل الظاهر في حسابك، فهو مطلوب في الإعداد.",
            en: "Note the income source sequence number shown in your account. The setup needs it.",
          },
        ],
      },
      {
        type: "p",
        text: {
          ar: "هذه البيانات تعادل صلاحية إصدار فواتير باسم منشأتك. لا تشاركها عبر البريد أو المحادثات، وأدخلها مباشرة في إعدادات Odoo. الشريك المنفذ لا يحتاج كلمة مرور البوابة.",
          en: "These credentials amount to the right to issue invoices in your company's name. Do not share them by email or chat. Enter them directly in Odoo settings. Your implementation partner does not need your portal password.",
        },
      },
      { type: "h2", text: { ar: "ما الذي يقدمه Odoo عبر l10n_jo_edi", en: "What Odoo's l10n_jo_edi provides" } },
      {
        type: "p",
        text: {
          ar: "يحتوي Odoo على حزمة التوطين الأردنية للفوترة الإلكترونية. بعد تفعيلها، تُدخل في إعدادات المحاسبة معرّف العميل والرمز السري ورقم تسلسل مصدر الدخل، وتحدد تصنيف المكلف الضريبي. يتحدد هذا التصنيف حسب تسجيلك: ضريبة دخل فقط، أو ضريبة مبيعات عامة، أو ضريبة خاصة.",
          en: "Odoo includes the Jordanian e-invoicing localisation. Once it is active, you enter the client ID, secret key and income source sequence number in the accounting settings, and set your taxpayer type. That type follows your registration: income tax only, general sales tax, or special sales tax.",
        },
      },
      {
        type: "ul",
        items: [
          { ar: "إنشاء الفاتورة بصيغة XML المعتمدة لدى النظام الوطني.", en: "Building the invoice in the XML format the national system expects." },
          { ar: "إرسال الفاتورة إلى JoFotara من شاشة الفاتورة.", en: "Sending the invoice to JoFotara from the invoice screen." },
          { ar: "استلام رمز QR وطباعته على الفاتورة.", en: "Receiving the QR code and printing it on the invoice." },
          { ar: "عرض حالة الإرسال ورسائل الخطأ على كل فاتورة.", en: "Showing the send status and error messages on each invoice." },
          { ar: "إرسال الإشعارات الدائنة مع الإشارة للفاتورة الأصلية.", en: "Sending credit notes with a reference to the original invoice." },
        ],
      },
      { type: "h2", text: { ar: "الإشعارات الدائنة والمرتجعات", en: "Credit notes and returns" } },
      {
        type: "p",
        text: {
          ar: "بعد تسجيل الفاتورة في JoFotara لا يمكن تعديلها. أي مرتجع أو خصم لاحق أو تصحيح يتم بإشعار دائن. يجب أن يشير الإشعار إلى الفاتورة الأصلية، وأن تكون الفاتورة الأصلية نفسها مسجلة في النظام قبل ذلك. في Odoo يُنشأ الإشعار من الفاتورة الأصلية مباشرة، فيُحفظ الربط بينهما تلقائياً. اكتب سبب الإرجاع بوضوح لأنه جزء من البيانات المرسلة.",
          en: "Once an invoice is registered in JoFotara, it cannot be edited. Any return, later discount or correction goes through a credit note. The note must reference the original invoice, and that original must already be registered in the system. In Odoo, you create the credit note from the original invoice, so the link is kept automatically. Write the return reason clearly because it is part of the data sent.",
        },
      },
      { type: "h2", text: { ar: "نقاط تحتاج انتباهاً", en: "Points that need attention" } },
      {
        type: "ul",
        items: [
          {
            ar: "تصنيف المكلف: اختيار تصنيف لا يطابق تسجيلك يسبب رفض الفواتير.",
            en: "Taxpayer type: a type that does not match your registration causes rejections.",
          },
          {
            ar: "بيانات المشتري: راجع متى يلزم الرقم الضريبي أو الرقم الوطني للمشتري، وطابق بطاقات العملاء مع ذلك.",
            en: "Buyer data: check when the buyer's tax number or national ID is required, and align customer records with it.",
          },
          {
            ar: "الضرائب: تأكد أن كل ضريبة في Odoo مربوطة بالرمز الصحيح، خصوصاً البنود المعفاة أو الخاضعة لضريبة خاصة.",
            en: "Taxes: make sure every tax in Odoo maps to the right code, especially exempt lines or lines under special tax.",
          },
          {
            ar: "التقريب: الدينار الأردني بثلاث خانات عشرية، فراجع إعدادات التقريب على المبالغ والضرائب.",
            en: "Rounding: the Jordanian dinar uses three decimal places, so review rounding on amounts and taxes.",
          },
          {
            ar: "نقطة البيع: حدد كيف ستُرسل فواتير نقطة البيع، واختبرها قبل التشغيل.",
            en: "Point of Sale: decide how POS invoices will be sent and test it before go-live.",
          },
        ],
      },
      { type: "h2", text: { ar: "قائمة تحقق قبل التشغيل", en: "Pre-go-live checklist" } },
      {
        type: "ol",
        items: [
          { ar: "حساب مكلف فعّال على بوابة JoFotara.", en: "An active taxpayer account on the JoFotara portal." },
          { ar: "معرّف العميل والرمز السري ورقم تسلسل مصدر الدخل.", en: "Client ID, secret key and income source sequence number." },
          { ar: "الرقم الضريبي واسم المنشأة مطابقان لتسجيل الدائرة.", en: "Tax number and company name matching the ISTD registration." },
          { ar: "تصنيف المكلف وأنواع الفواتير التي تصدرها.", en: "Your taxpayer type and the invoice types you issue." },
          { ar: "مراجعة الضرائب في Odoo وبيانات العملاء.", en: "A review of taxes in Odoo and of customer data." },
          { ar: "اختبار فاتورة نقدية، وفاتورة آجلة، وإشعار دائن، وفاتورة نقطة بيع.", en: "Tests for a cash invoice, a credit invoice, a credit note and a POS invoice." },
          { ar: "تدريب المحاسبين على متابعة الفواتير غير المرسلة ورسائل الخطأ.", en: "Training accountants to follow up unsent invoices and error messages." },
        ],
      },
      { type: "h2", text: { ar: "الخلاصة", en: "Conclusion" } },
      {
        type: "p",
        text: {
          ar: "ربط Odoo مع JoFotara يوفر الإدخال المزدوج ويضمن أن كل فاتورة تخرج برمزها. الجزء التقني جاهز في Odoo، والعمل الحقيقي في الإعداد الصحيح للتصنيف والضرائب وبيانات العملاء. يرافق فريق AIODYX في عمّان المحاسبين خطوة بخطوة من إنشاء بيانات الربط حتى أول فاتورة حقيقية.",
          en: "Connecting Odoo to JoFotara removes double entry and ensures every invoice leaves with its code. The technical part is ready in Odoo. The real work is setting up the taxpayer type, taxes and customer data correctly. The AIODYX team in Amman walks accountants through each step, from creating the credentials to the first live invoice.",
        },
      },
    ],
    faq: [
      {
        q: { ar: "هل نحتاج إرسال كلمة مرور البوابة للشريك؟", en: "Do we need to share our portal password with the partner?" },
        a: {
          ar: "لا. يكفي أن يولد فريقك معرّف العميل والرمز السري ويدخلهما في Odoo.",
          en: "No. Your team generates the client ID and secret key and enters them in Odoo.",
        },
      },
      {
        q: { ar: "ماذا لو فشل إرسال فاتورة؟", en: "What if an invoice fails to send?" },
        a: {
          ar: "تظهر رسالة الخطأ على الفاتورة في Odoo. تصحح البيانات ثم تعيد الإرسال من الشاشة نفسها.",
          en: "The error message appears on the invoice in Odoo. You fix the data and resend from the same screen.",
        },
      },
      {
        q: { ar: "هل يمكن إلغاء فاتورة مسجلة؟", en: "Can a registered invoice be cancelled?" },
        a: {
          ar: "لا يمكن تعديلها أو حذفها. يتم عكسها كلياً أو جزئياً بإشعار دائن يشير إليها.",
          en: "It cannot be edited or deleted. You reverse it fully or partly with a credit note that references it.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. Community vs Enterprise                                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "odoo-community-vs-enterprise",
    date: "2026-10-09",
    readMin: 8,
    category: cat.odoo,
    title: {
      ar: "أيهما تختار: Odoo Community أم Enterprise؟",
      en: "Odoo Community or Enterprise? How to choose",
    },
    excerpt: {
      ar: "الفرق بين النسختين في التطبيقات والاستضافة والترخيص والتحديثات، ومتى تكفي النسخة المجانية، ومتى تحتاج Enterprise.",
      en: "How the two editions differ in apps, hosting, licensing and upgrades, when the free edition is enough, and when you need Enterprise.",
    },
    related: { apps: ["accounting", "helpdesk", "attendance-payroll", "documents-sign"], platforms: [] },
    body: [
      {
        type: "p",
        text: {
          ar: "يصدر Odoo بنسختين. Community نسخة مفتوحة المصدر ومجانية بترخيص LGPL. Enterprise نسخة باشتراك تدفعه لشركة Odoo، وتضيف تطبيقات وميزات فوق Community. النسختان تشتركان في نفس الأساس، لذلك فالسؤال الحقيقي: هل تحتاج أعمالك التطبيقات والميزات الإضافية؟",
          en: "Odoo comes in two editions. Community is open source and free under the LGPL licence. Enterprise is a paid subscription to Odoo S.A. that adds apps and features on top of Community. Both share the same core, so the real question is whether your business needs the extra apps and features.",
        },
      },
      {
        type: "note",
        text: {
          ar: "قائمة التطبيقات في كل نسخة تتغير بين الإصدارات. راجع صفحة المقارنة الرسمية على موقع Odoo للإصدار الذي ستستخدمه قبل القرار.",
          en: "The list of apps in each edition changes between versions. Check the official comparison page on odoo.com for the version you plan to use before deciding.",
        },
      },
      { type: "h2", text: { ar: "تطبيقات متاحة في Enterprise فقط", en: "Apps available only in Enterprise" } },
      {
        type: "p",
        text: {
          ar: "هذه أبرز التطبيقات التي لا تتوفر في Community في الإصدارات الحديثة:",
          en: "These are the main apps not available in Community in recent versions:",
        },
      },
      {
        type: "ul",
        items: [
          {
            ar: "المحاسبة الكاملة: Community يقدم الفوترة والقيود الأساسية. التقارير المالية مثل الميزانية وقائمة الدخل وتقرير الضريبة والمطابقة البنكية المتقدمة وإدارة الأصول في Enterprise.",
            en: "Full Accounting: Community provides invoicing and basic entries. Financial reports such as the balance sheet, profit and loss, the tax report, advanced bank reconciliation and asset management are in Enterprise.",
          },
          { ar: "الرواتب (Payroll) وتقييم الأداء (Appraisals).", en: "Payroll and Appraisals." },
          { ar: "مكتب المساعدة (Helpdesk) والخدمة الميدانية (Field Service).", en: "Helpdesk and Field Service." },
          { ar: "التوقيع الإلكتروني (Sign) والمستندات (Documents) والمعرفة (Knowledge).", en: "Sign, Documents and Knowledge." },
          { ar: "استوديو Odoo (Studio) لتعديل الشاشات والحقول دون برمجة.", en: "Odoo Studio for changing screens and fields without code." },
          { ar: "الجودة وإدارة دورة حياة المنتج (PLM) في التصنيع.", en: "Quality and PLM for manufacturing." },
          { ar: "تطبيق الباركود للمستودعات والتخطيط (Planning) والاشتراكات والتأجير.", en: "The Barcode app for warehouses, Planning, Subscriptions and Rental." },
          { ar: "تحرير جداول البيانات واللوحات التحليلية المتقدمة.", en: "Spreadsheet editing and advanced dashboards." },
        ],
      },
      {
        type: "p",
        text: {
          ar: "تطبيقات كثيرة متاحة في النسختين، مثل المبيعات والمشتريات والمخزون والتصنيع الأساسي ونقطة البيع وإدارة علاقات العملاء والمشاريع والموظفين والإجازات والحضور والموقع الإلكتروني. لكن Enterprise يضيف إليها أحياناً ميزات، مثل التنبؤ أو الجدولة أو التكامل مع تطبيقات Enterprise الأخرى. كما أن واجهة الجوال في Enterprise أكثر اكتمالاً.",
          en: "Many apps exist in both editions, such as Sales, Purchase, Inventory, basic Manufacturing, Point of Sale, CRM, Project, Employees, Time Off, Attendances and Website. Enterprise sometimes adds features to them, such as forecasting, scheduling or links to other Enterprise apps. The mobile experience is also more complete in Enterprise.",
        },
      },
      { type: "h2", text: { ar: "خيارات الاستضافة", en: "Hosting options" } },
      {
        type: "ul",
        items: [
          {
            ar: "Odoo Online: استضافة سحابية تديرها Odoo. متاحة لـ Enterprise فقط. سريعة البدء، لكن لا تسمح بتثبيت وحدات برمجية مخصصة، والتخصيص يتم عبر Studio.",
            en: "Odoo Online: cloud hosting managed by Odoo. Enterprise only. Quick to start, but it does not allow custom code modules. Customisation is done through Studio.",
          },
          {
            ar: "Odoo.sh: منصة سحابية من Odoo لـ Enterprise. تسمح بالوحدات المخصصة، وتوفر فروع اختبار ونسخاً احتياطية وربطاً مع GitHub. مناسبة لمن يحتاج تطويراً خاصاً.",
            en: "Odoo.sh: Odoo's cloud platform for Enterprise. It allows custom modules and provides staging branches, backups and a GitHub link. It suits companies that need custom development.",
          },
          {
            ar: "الاستضافة الخاصة (On-premise): على خوادمك أو سحابة تختارها. متاحة للنسختين. تمنحك تحكماً كاملاً، لكنك تتحمل الصيانة والنسخ الاحتياطي والأمان والتحديثات.",
            en: "On-premise: on your own servers or a cloud of your choice. Available for both editions. You get full control, but you carry maintenance, backups, security and upgrades.",
          },
        ],
      },
      { type: "h2", text: { ar: "الترخيص والتحديثات والدعم", en: "Licensing, upgrades and support" } },
      {
        type: "p",
        text: {
          ar: "اشتراك Enterprise يُحسب أساساً حسب عدد المستخدمين، ويُدفع لشركة Odoo مباشرة أو عبر شريك. الخطط تختلف في ما تسمح به من استضافة وتخصيص، لذلك راجع الشروط الحالية على موقع Odoo. الاشتراك يشمل خدمة الترقية إلى الإصدارات الجديدة ودعم Odoo لأخطاء النظام القياسي. في Community تكون الترقية مسؤوليتك، وغالباً تحتاج جهداً تقنياً لنقل البيانات بين الإصدارات.",
          en: "An Enterprise subscription is priced mainly per user and paid to Odoo S.A., directly or through a partner. Plans differ in the hosting and customisation they allow, so check the current terms on odoo.com. The subscription includes the upgrade service to new versions and Odoo's support for bugs in the standard product. In Community, upgrades are your responsibility and usually need technical effort to migrate data between versions.",
        },
      },
      { type: "h2", text: { ar: "متى تكفي Community", en: "When Community is enough" } },
      {
        type: "ul",
        items: [
          { ar: "تحتاج المبيعات والمشتريات والمخزون والفوترة دون تقارير مالية متقدمة داخل النظام.", en: "You need sales, purchase, inventory and invoicing without advanced financial reports inside the system." },
          { ar: "لديك فريق تقني يدير الخادم والنسخ الاحتياطي والترقيات.", en: "You have a technical team to run the server, backups and upgrades." },
          { ar: "لا تحتاج الرواتب أو مكتب المساعدة أو التوقيع الإلكتروني داخل Odoo.", en: "You do not need Payroll, Helpdesk or Sign inside Odoo." },
          { ar: "أنت مستعد لاستخدام وحدات من مطورين آخرين وتحمل جودتها وصيانتها.", en: "You accept using third-party modules and owning their quality and maintenance." },
        ],
      },
      {
        type: "p",
        text: {
          ar: "انتبه لتكلفة سد الفجوات. بناء تقارير مالية أو نظام رواتب على Community يحتاج تطويراً وصيانة مستمرة مع كل إصدار. في حالات كثيرة تكون هذه التكلفة أعلى من اشتراك Enterprise.",
          en: "Watch the cost of filling gaps. Building financial reports or payroll on Community needs development and ongoing maintenance with every version. In many cases that cost exceeds the Enterprise subscription.",
        },
      },
      { type: "h2", text: { ar: "متى تحتاج Enterprise", en: "When you need Enterprise" } },
      {
        type: "ul",
        items: [
          { ar: "تريد محاسبة كاملة بتقارير مالية وضريبية جاهزة.", en: "You want full accounting with ready financial and tax reports." },
          { ar: "تريد تشغيل الرواتب والحضور والإجازات في نظام واحد.", en: "You want payroll, attendance and leave in one system." },
          { ar: "تحتاج مكتب مساعدة أو توقيعاً إلكترونياً أو إدارة مستندات.", en: "You need a helpdesk, e-signatures or document management." },
          { ar: "تفضل استضافة مُدارة وترقيات مضمونة دون فريق تقني داخلي.", en: "You prefer managed hosting and guaranteed upgrades without an in-house technical team." },
        ],
      },
      { type: "h2", text: { ar: "الخلاصة", en: "Conclusion" } },
      {
        type: "p",
        text: {
          ar: "ابدأ بقائمة العمليات التي تريد تشغيلها، ثم طابقها مع التطبيقات المتاحة في كل نسخة، ثم احسب تكلفة الاستضافة والصيانة والترقيات على مدى عدة سنوات. بصفتها شريكاً رسمياً لـ Odoo، تساعد AIODYX الشركات في عمّان والرياض على هذه المقارنة بناءً على عملياتها الفعلية.",
          en: "Start with the list of processes you want to run, map them to the apps in each edition, then add up hosting, maintenance and upgrade costs over several years. As an official Odoo partner, AIODYX helps companies in Amman and Riyadh make this comparison based on their actual processes.",
        },
      },
    ],
    faq: [
      {
        q: { ar: "هل يمكن الانتقال من Community إلى Enterprise لاحقاً؟", en: "Can we move from Community to Enterprise later?" },
        a: {
          ar: "نعم. Enterprise يُبنى فوق Community، وتنتقل البيانات نفسها. يحتاج الانتقال تخطيطاً واختباراً، خصوصاً مع الوحدات المخصصة.",
          en: "Yes. Enterprise sits on top of Community, and the same data carries over. The move needs planning and testing, especially with custom modules.",
        },
      },
      {
        q: { ar: "هل يمكن تثبيت وحدات مخصصة على Odoo Online؟", en: "Can we install custom modules on Odoo Online?" },
        a: {
          ar: "لا. Odoo Online لا يقبل وحدات برمجية مخصصة. إذا احتجت تطويراً خاصاً فاختر Odoo.sh أو الاستضافة الخاصة.",
          en: "No. Odoo Online does not accept custom code modules. If you need custom development, choose Odoo.sh or on-premise.",
        },
      },
      {
        q: { ar: "لمن يُدفع ترخيص Enterprise؟", en: "Who receives the Enterprise licence fee?" },
        a: {
          ar: "لشركة Odoo، ويُحسب حسب عدد المستخدمين والخطة. أتعاب الشريك المنفذ للتطبيق والتدريب منفصلة عن الترخيص.",
          en: "Odoo S.A., based on users and plan. The implementation partner's fees for setup and training are separate from the licence.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 4. ERP implementation steps                                         */
  /* ------------------------------------------------------------------ */
  {
    slug: "erp-implementation-steps",
    date: "2026-10-09",
    readMin: 8,
    category: cat.implementation,
    title: {
      ar: "مراحل تطبيق نظام ERP خطوة بخطوة",
      en: "ERP implementation, step by step",
    },
    excerpt: {
      ar: "كيف يسير مشروع تطبيق ERP من التحليل حتى الدعم بعد التشغيل، وما الذي يجب أن تجهزه شركتك، وأكثر الأخطاء شيوعاً، ومدد زمنية واقعية.",
      en: "How an ERP project runs from analysis to post-go-live support, what your company must prepare, the most common mistakes, and realistic timelines.",
    },
    related: { apps: ["accounting", "inventory-purchase", "hr"], platforms: [] },
    body: [
      {
        type: "p",
        text: {
          ar: "تطبيق نظام ERP مشروع تغيير في طريقة عمل الشركة، والبرنامج جزء منه. نجاح المشروع يعتمد على وضوح العمليات وجودة البيانات والتزام الفريق الداخلي بقدر ما يعتمد على النظام نفسه. هذه هي المراحل التي يمر بها أغلب المشاريع، مع ما يُطلب من الشركة في كل مرحلة.",
          en: "Implementing an ERP is a change in how the company works, and the software is one part of it. Success depends on clear processes, data quality and the commitment of the internal team as much as on the system. These are the stages most projects go through, with what the company must provide at each one.",
        },
      },
      { type: "h2", text: { ar: "المراحل السبع", en: "The seven stages" } },
      {
        type: "ol",
        items: [
          {
            ar: "التحليل: يجلس الشريك مع كل قسم لفهم العمليات الحالية والمشاكل والتقارير المطلوبة. الناتج وثيقة متطلبات ونطاق واضح يحدد ما يدخل في المشروع وما يُؤجل.",
            en: "Analysis: the partner meets each department to understand current processes, pain points and required reports. The output is a requirements document and a clear scope of what is in the project and what is deferred.",
          },
          {
            ar: "التصميم: تُطابق العمليات مع النظام القياسي. تُحدد الإعدادات، وتُحصر الفجوات التي تحتاج تطويراً، وتُرسم الصلاحيات ومسارات الموافقة.",
            en: "Design: processes are mapped to the standard system. Settings are defined, gaps that need development are listed, and access rights and approval flows are drawn up.",
          },
          {
            ar: "الإعداد والتطوير: يُجهز النظام حسب التصميم، وتُبنى الإضافات والتكاملات المتفق عليها، مثل الفوترة الإلكترونية والبنوك وأجهزة البصمة.",
            en: "Configuration and development: the system is set up per the design, and agreed extensions and integrations are built, such as e-invoicing, banks and biometric devices.",
          },
          {
            ar: "ترحيل البيانات: تُنقل البيانات الرئيسية مثل العملاء والموردين والمنتجات والموظفين، ثم الأرصدة الافتتاحية والحركات المفتوحة.",
            en: "Data migration: master data such as customers, vendors, products and employees is loaded, then opening balances and open transactions.",
          },
          {
            ar: "الاختبار: يختبر مستخدمو الشركة العمليات كاملة من البداية للنهاية على بياناتهم، ويوقعون على قبولها.",
            en: "Testing: the company's users test full end-to-end processes on their own data and sign off on them.",
          },
          {
            ar: "التدريب: يُدرب كل مستخدم على مهامه الفعلية، ويُدرب مستخدمون رئيسيون ليصبحوا مرجعاً داخلياً.",
            en: "Training: each user is trained on their actual tasks, and key users are trained to become the internal reference.",
          },
          {
            ar: "التشغيل والدعم: يبدأ العمل على النظام في تاريخ محدد، ثم تأتي فترة دعم مكثف لمعالجة الملاحظات وضبط ما يلزم.",
            en: "Go-live and support: work moves to the system on a set date, followed by a period of close support to handle issues and fine-tune.",
          },
        ],
      },
      { type: "h2", text: { ar: "ما الذي يجب أن تجهزه الشركة", en: "What the company must prepare" } },
      {
        type: "ul",
        items: [
          {
            ar: "صاحب قرار من الإدارة يحسم الخلافات بين الأقسام ويعتمد النطاق.",
            en: "A decision-maker from management who settles disputes between departments and approves the scope.",
          },
          {
            ar: "مدير مشروع داخلي يتابع المهام والمواعيد مع الشريك.",
            en: "An internal project manager who tracks tasks and dates with the partner.",
          },
          {
            ar: "مستخدم رئيسي من كل قسم يملك الوقت للمشاركة في التحليل والاختبار.",
            en: "A key user from each department with time to take part in analysis and testing.",
          },
          {
            ar: "بيانات نظيفة: قوائم العملاء والموردين والمنتجات بلا تكرار، وأرصدة مطابقة.",
            en: "Clean data: customer, vendor and product lists without duplicates, and reconciled balances.",
          },
          {
            ar: "نماذج التقارير والمستندات الحالية التي يجب أن يخرجها النظام.",
            en: "Samples of the current reports and documents the system must produce.",
          },
          {
            ar: "حسابات وصلاحيات المنصات الحكومية والبنوك التي يحتاجها الربط.",
            en: "Accounts and access for the government platforms and banks the integrations need.",
          },
        ],
      },
      { type: "h2", text: { ar: "أخطاء شائعة", en: "Common mistakes" } },
      {
        type: "ul",
        items: [
          {
            ar: "نقل الطريقة القديمة كما هي: طلب تعديلات كثيرة لتقليد النظام السابق يرفع التكلفة ويصعّب الترقيات. ابدأ بالعملية القياسية وعدّل عند الحاجة الفعلية فقط.",
            en: "Copying the old way as is: many changes to mimic the previous system raise cost and make upgrades harder. Start from the standard process and change it only where there is a real need.",
          },
          {
            ar: "نطاق يتوسع بلا ضبط: كل طلب جديد أثناء المشروع يؤخر التشغيل. سجّل الطلبات الجديدة لمرحلة لاحقة.",
            en: "Uncontrolled scope growth: every new request mid-project delays go-live. Log new requests for a later phase.",
          },
          {
            ar: "تأجيل تنظيف البيانات: البيانات الخاطئة تنتقل إلى النظام الجديد وتفقد الثقة به من اليوم الأول.",
            en: "Leaving data cleanup for later: bad data moves into the new system and destroys trust in it from day one.",
          },
          {
            ar: "اختبار سطحي: اختبار شاشات منفصلة بدل دورة كاملة من الطلب حتى القيد المحاسبي.",
            en: "Shallow testing: checking separate screens instead of a full cycle from order to journal entry.",
          },
          {
            ar: "تدريب متأخر أو عام: المستخدم يحتاج تدريباً على مهامه هو، قريباً من موعد التشغيل.",
            en: "Late or generic training: users need training on their own tasks, close to go-live.",
          },
          {
            ar: "تشغيل في نهاية فترة مالية مزدحمة: اختر تاريخاً يسمح بإقفال نظيف وأرصدة افتتاحية واضحة.",
            en: "Going live during a busy period close: pick a date that allows a clean close and clear opening balances.",
          },
        ],
      },
      { type: "h2", text: { ar: "مدد زمنية واقعية", en: "Realistic timelines" } },
      {
        type: "p",
        text: {
          ar: "المدة تعتمد على عدد التطبيقات والشركات والفروع، وحجم البيانات، وعدد التكاملات والتطويرات، وسرعة قرارات الشركة. كمدى تقريبي:",
          en: "Duration depends on the number of apps, companies and branches, data volume, the number of integrations and custom developments, and how fast the company makes decisions. As a rough range:",
        },
      },
      {
        type: "ul",
        items: [
          {
            ar: "شركة صغيرة بتطبيقات قياسية قليلة: من عدة أسابيع إلى نحو ثلاثة أشهر.",
            en: "A small company with a few standard apps: from several weeks to about three months.",
          },
          {
            ar: "شركة متوسطة بعدة أقسام وتكاملات حكومية: من ثلاثة إلى ستة أشهر تقريباً.",
            en: "A mid-sized company with several departments and government integrations: roughly three to six months.",
          },
          {
            ar: "مجموعة شركات أو تصنيع معقد أو تطوير كبير: ستة أشهر أو أكثر، وغالباً على مراحل.",
            en: "A group of companies, complex manufacturing or heavy development: six months or more, often in phases.",
          },
        ],
      },
      {
        type: "note",
        text: {
          ar: "هذه مديات عامة من واقع السوق، فاعتبرها دليلاً فقط. أي شريك يعطيك مدة دقيقة قبل التحليل يخمن. اطلب خطة زمنية بعد مرحلة التحليل.",
          en: "These are general market ranges. Treat them as a guide only. A partner who gives an exact duration before analysis is guessing. Ask for a timeline after the analysis stage.",
        },
      },
      { type: "h2", text: { ar: "التشغيل على مراحل", en: "Going live in phases" } },
      {
        type: "p",
        text: {
          ar: "في المشاريع الكبيرة، التشغيل على مراحل يقلل المخاطر. مثلاً: المحاسبة والمبيعات والمشتريات والمخزون أولاً، ثم الموارد البشرية والرواتب، ثم التصنيع أو المشاريع. كل مرحلة تستقر قبل التي بعدها، ويتعلم الفريق من كل تشغيل.",
          en: "In large projects, a phased go-live reduces risk. For example: accounting, sales, purchase and inventory first, then HR and payroll, then manufacturing or projects. Each phase settles before the next, and the team learns from each launch.",
        },
      },
      { type: "h2", text: { ar: "الخلاصة", en: "Conclusion" } },
      {
        type: "p",
        text: {
          ar: "مشروع ERP الناجح يقوم على نطاق واضح وبيانات نظيفة وفريق داخلي متفرغ بما يكفي. الشريك يجلب المعرفة بالنظام، والشركة تجلب المعرفة بأعمالها. تعمل AIODYX بهذه المراحل نفسها مع عملائها في الأردن والسعودية، وتبدأ كل مشروع بجلسة تحليل قبل أي التزام بالمدة.",
          en: "A successful ERP project rests on a clear scope, clean data and an internal team with enough time. The partner brings system knowledge, and the company brings business knowledge. AIODYX follows these same stages with clients in Jordan and Saudi Arabia, and starts every project with an analysis session before committing to a timeline.",
        },
      },
    ],
    faq: [
      {
        q: { ar: "هل ننقل كل البيانات التاريخية؟", en: "Should we migrate all historical data?" },
        a: {
          ar: "غالباً لا. يُنقل عادة البيانات الرئيسية والأرصدة الافتتاحية والحركات المفتوحة، ويبقى الأرشيف القديم مرجعاً للاطلاع. القرار يعتمد على حاجتك للتقارير المقارنة.",
          en: "Usually not. Projects typically move master data, opening balances and open transactions, and keep the old archive for reference. The decision depends on your need for comparative reports.",
        },
      },
      {
        q: { ar: "هل نشغّل النظامين معاً لفترة؟", en: "Should we run both systems in parallel for a while?" },
        a: {
          ar: "التشغيل المتوازي يضاعف العمل على الفريق. الأفضل اختبار جيد قبل التشغيل ثم انتقال كامل، مع إبقاء النظام القديم للاطلاع فقط.",
          en: "Parallel running doubles the team's workload. Thorough testing before go-live followed by a full switch works better, with the old system kept read-only.",
        },
      },
      {
        q: { ar: "كم من وقت فريقنا يحتاج المشروع؟", en: "How much of our team's time does the project need?" },
        a: {
          ar: "يحتاج المستخدمون الرئيسيون وقتاً منتظماً كل أسبوع، ويزيد الوقت في مرحلتي الاختبار والتدريب. خطط لذلك مع مدرائهم من البداية.",
          en: "Key users need regular time every week, and more during testing and training. Plan this with their managers from the start.",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 5. Saudi payroll                                                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "saudi-payroll-mudad-gosi-odoo",
    date: "2026-10-09",
    readMin: 8,
    category: cat.payroll,
    title: {
      ar: "الرواتب السعودية في Odoo: مدد والتأمينات ونهاية الخدمة",
      en: "Saudi payroll in Odoo: Mudad, GOSI and end of service",
    },
    excerpt: {
      ar: "كيف تشغل الرواتب في السعودية على Odoo: ملف حماية الأجور لمدد، واشتراكات التأمينات الاجتماعية، ومكافأة نهاية الخدمة، والعمل الإضافي، وربط أجهزة البصمة.",
      en: "How to run Saudi payroll on Odoo: the WPS file for Mudad, GOSI contributions, end-of-service benefits, overtime and biometric attendance.",
    },
    related: { apps: ["attendance-payroll", "hr", "accounting"], platforms: ["mudad", "gosi", "qiwa", "biometric", "banks"] },
    body: [
      {
        type: "p",
        text: {
          ar: "الرواتب في السعودية لا تنتهي عند حساب صافي الراتب. هناك ملف حماية الأجور الذي يُرفع إلى مدد، واشتراكات التأمينات الاجتماعية، ومخصص مكافأة نهاية الخدمة، والعمل الإضافي المبني على الحضور. يجمع Odoo هذه العناصر في دورة واحدة تبدأ من البصمة وتنتهي بالقيد المحاسبي. يشرح هذا المقال ما يقدمه Odoo جاهزاً، وما يحتاج إعداداً من الشريك المنفذ.",
          en: "Saudi payroll does not end at net pay. There is the wage protection file uploaded to Mudad, GOSI contributions, the end-of-service provision and overtime based on attendance. Odoo brings these into one cycle that starts at the fingerprint reader and ends at the journal entry. This article explains what Odoo provides out of the box and what the implementer needs to configure.",
        },
      },
      {
        type: "note",
        text: {
          ar: "نسب الاشتراكات وقواعد نهاية الخدمة والعمل الإضافي تحددها الأنظمة وقد تتغير. لا نذكر هنا أرقاماً. تحقق من المتطلب الحالي مع الجهة المختصة، مثل التأمينات الاجتماعية ووزارة الموارد البشرية، ومع مستشارك القانوني.",
          en: "Contribution rates and end-of-service and overtime rules are set by regulation and may change. We list no figures here. Check the current requirement with the relevant authority, such as GOSI and the Ministry of Human Resources, and with your legal adviser.",
        },
      },
      { type: "h2", text: { ar: "ما يقدمه Odoo وما يضبطه المنفذ", en: "What Odoo provides and what the implementer configures" } },
      {
        type: "p",
        text: {
          ar: "تطبيق الرواتب في Odoo جزء من نسخة Enterprise. يتضمن حزمة توطين سعودية فيها هيكل رواتب وقواعد أساسية تختلف تفاصيلها حسب الإصدار. يبني الشريك المنفذ فوقها ما يخص منشأتك.",
          en: "Odoo Payroll is part of the Enterprise edition. It includes a Saudi localisation with a salary structure and base rules whose details vary by version. The implementer builds what is specific to your establishment on top of it.",
        },
      },
      {
        type: "ul",
        items: [
          {
            ar: "من Odoo: العقود، وهياكل الرواتب، وقواعد الحساب، وقسائم الراتب، ودفعات الرواتب، والقيود المحاسبية، وربط الحضور والإجازات بأيام العمل.",
            en: "From Odoo: contracts, salary structures, calculation rules, payslips, payslip batches, journal entries, and linking attendance and leave to work days.",
          },
          {
            ar: "من المنفذ: البدلات الخاصة بمنشأتك، وقواعد التأمينات حسب نوع التغطية، وصيغة ملف حماية الأجور المطلوبة، وسياسة العمل الإضافي، وربط الحسابات المحاسبية، والصلاحيات.",
            en: "From the implementer: your own allowances, GOSI rules by coverage type, the required WPS file format, the overtime policy, account mapping and access rights.",
          },
        ],
      },
      { type: "h2", text: { ar: "ملف حماية الأجور ومدد", en: "The WPS file and Mudad" } },
      {
        type: "p",
        text: {
          ar: "مدد منصة حماية الأجور في السعودية. تتحقق من أن الرواتب تُدفع في موعدها وبالمبالغ المتفق عليها في العقود. يُبنى ملف الأجور من نتيجة الرواتب المعتمدة في Odoo، فلا يُعاد إدخال الأرقام في جدول منفصل.",
          en: "Mudad is Saudi Arabia's wage protection platform. It checks that salaries are paid on time and in the amounts agreed in contracts. The wage file is built from the approved payroll result in Odoo, so nobody retypes figures into a separate spreadsheet.",
        },
      },
      {
        type: "ul",
        items: [
          { ar: "يجب أن يحمل كل موظف رقم الهوية أو الإقامة ورقم الآيبان الصحيح.", en: "Every employee needs a correct national ID or iqama number and IBAN." },
          { ar: "يُفصّل الملف الراتب الأساسي والبدلات والخصومات كما في العقد.", en: "The file breaks down basic pay, allowances and deductions as in the contract." },
          { ar: "صيغة الملف تُطابق متطلبات مدد والبنك الذي تتعامل معه.", en: "The file format matches Mudad's requirements and your bank's." },
          { ar: "يُنشأ ملف مستقل لكل منشأة أو سجل تجاري حسب إعداد الشركات في Odoo.", en: "A separate file is produced per establishment or CR, based on the company setup in Odoo." },
        ],
      },
      {
        type: "p",
        text: {
          ar: "الفرق بين المدفوع وما في العقد المسجل يظهر كمخالفة في حماية الأجور. لذلك يجب أن تطابق العقود في Odoo العقود الموثقة في قوى.",
          en: "Any gap between what is paid and the registered contract shows up as a wage protection issue. That is why contracts in Odoo must match the contracts documented in Qiwa.",
        },
      },
      { type: "h2", text: { ar: "اشتراكات التأمينات الاجتماعية", en: "GOSI contributions" } },
      {
        type: "p",
        text: {
          ar: "تُحسب اشتراكات التأمينات في كل مسير رواتب كقواعد داخل هيكل الراتب. تختلف القواعد بين الموظف السعودي وغير السعودي وحسب نوع التغطية. تُحفظ النسب كإعدادات قابلة للتعديل من تاريخ سريان، فلا يلزم تعديل برمجي عند تغيرها. يُسجل نصيب الموظف كخصم، ونصيب المنشأة كمصروف والتزام في المحاسبة.",
          en: "GOSI contributions are calculated in every payroll as rules in the salary structure. Rules differ for Saudi and non-Saudi employees and by coverage type. Rates are stored as settings that can change from an effective date, so no code change is needed when they change. The employee share is posted as a deduction, and the employer share as an expense and a liability in accounting.",
        },
      },
      {
        type: "p",
        text: {
          ar: "النقطة الأهم هي الأجر الخاضع للاشتراك. اتفق مع فريقك على البدلات التي تدخل فيه، وراجع الأجر المسجل لدى التأمينات بعد كل زيادة أو ترقية. قارن كل شهر ما حسبه Odoo مع كشف التأمينات.",
          en: "The key point is the contributory wage. Agree with your team which allowances count toward it, and review the wage registered with GOSI after every raise or promotion. Compare what Odoo calculated with the GOSI statement every month.",
        },
      },
      { type: "h2", text: { ar: "نهاية الخدمة والعمل الإضافي", en: "End of service and overtime" } },
      {
        type: "p",
        text: {
          ar: "مكافأة نهاية الخدمة تعتمد على مدة الخدمة والأجر وسبب انتهاء العلاقة. في Odoo يمكن احتساب مخصص شهري لها في المحاسبة، واحتساب المبلغ النهائي في قسيمة التسوية عند المغادرة. يضبط المنفذ القاعدة حسب النظام الحالي وسياسة منشأتك، ويراجعها مستشارك.",
          en: "The end-of-service benefit depends on length of service, wage and the reason the employment ended. In Odoo you can book a monthly provision in accounting and calculate the final amount in the settlement payslip on exit. The implementer sets the rule per current regulation and your company policy, and your adviser reviews it.",
        },
      },
      {
        type: "p",
        text: {
          ar: "العمل الإضافي يبدأ من الحضور. يحسب Odoo الساعات الإضافية من سجلات الدخول والخروج مقارنة بجدول العمل، ثم تنتقل إلى الرواتب كمدخل يُضرب في المعامل الذي تحدده سياسة المنشأة والنظام. يمكن إضافة موافقة المدير قبل احتساب الساعات.",
          en: "Overtime starts with attendance. Odoo calculates extra hours from check-in and check-out records against the work schedule, then passes them to payroll as an input multiplied by the factor set by company policy and regulation. A manager approval can be added before the hours count.",
        },
      },
      { type: "h2", text: { ar: "ربط أجهزة البصمة", en: "Linking biometric attendance" } },
      {
        type: "p",
        text: {
          ar: "تُربط أجهزة البصمة مثل ZKTeco بتطبيق الحضور في Odoo، فتُسحب السجلات تلقائياً بدل استيراد ملفات. يُطابق رقم الموظف في الجهاز مع بطاقته في Odoo. بعد ذلك تظهر الغيابات والتأخير والساعات الإضافية في Odoo، وتنتقل إلى الرواتب حسب القواعد المتفق عليها.",
          en: "Biometric devices such as ZKTeco connect to Odoo Attendances, so records are pulled automatically instead of imported from files. The employee number on the device is matched to the employee record in Odoo. Absences, late arrivals and extra hours then show in Odoo and flow into payroll according to the agreed rules.",
        },
      },
      { type: "h2", text: { ar: "قائمة تحقق", en: "Checklist" } },
      {
        type: "ol",
        items: [
          { ar: "عقود محدثة في Odoo تطابق قوى.", en: "Up-to-date contracts in Odoo that match Qiwa." },
          { ar: "رقم الهوية أو الإقامة والآيبان لكل موظف.", en: "National ID or iqama and IBAN for every employee." },
          { ar: "رقم المنشأة في التأمينات وأرقام تسجيل الموظفين.", en: "Your GOSI establishment number and employee registration numbers." },
          { ar: "قائمة البدلات وما يدخل منها في الأجر الخاضع للاشتراك.", en: "A list of allowances and which ones count toward the contributory wage." },
          { ar: "سياسة مكتوبة للعمل الإضافي ونهاية الخدمة.", en: "A written policy for overtime and end of service." },
          { ar: "صيغة ملف الرواتب المطلوبة من البنك ومدد.", en: "The payroll file format required by your bank and Mudad." },
          { ar: "مسير رواتب تجريبي يقارن بالمسير السابق قبل التشغيل.", en: "A trial payroll compared with the previous run before go-live." },
        ],
      },
      { type: "h2", text: { ar: "الخلاصة", en: "Conclusion" } },
      {
        type: "p",
        text: {
          ar: "يقدم Odoo الأساس الكامل للرواتب السعودية، والدقة تأتي من الإعداد الصحيح للقواعد والبيانات. ابدأ بمسير تجريبي على بيانات شهر حقيقي وقارن النتائج بندا ببند. تتولى AIODYX في الرياض إعداد الرواتب والتأمينات وملف مدد وربط البصمة، وتراجع النتائج مع فريق الموارد البشرية قبل أول مسير فعلي.",
          en: "Odoo provides the full foundation for Saudi payroll, and accuracy comes from setting up rules and data correctly. Start with a trial run on a real month's data and compare the results line by line. AIODYX in Riyadh sets up payroll, GOSI, the Mudad file and biometric links, and reviews the results with your HR team before the first live run.",
        },
      },
    ],
    faq: [
      {
        q: { ar: "هل يرسل Odoo الملف إلى مدد مباشرة؟", en: "Does Odoo send the file to Mudad directly?" },
        a: {
          ar: "يُجهز Odoo الملف من الرواتب المعتمدة، ويرفعه فريقك عبر حساب المنشأة في مدد أو قناة البنك حسب ترتيبك.",
          en: "Odoo prepares the file from the approved payroll, and your team uploads it through the establishment's Mudad account or your bank channel, depending on your setup.",
        },
      },
      {
        q: { ar: "ماذا لو تغيرت نسب التأمينات؟", en: "What if GOSI rates change?" },
        a: {
          ar: "النسب محفوظة كإعدادات في قواعد الرواتب، وتُحدّث من تاريخ سريان دون تعديل برمجي.",
          en: "Rates are stored as settings in the payroll rules and updated from an effective date without code changes.",
        },
      },
      {
        q: { ar: "هل نحتاج نسخة Enterprise للرواتب؟", en: "Do we need Enterprise for payroll?" },
        a: {
          ar: "نعم. تطبيق الرواتب وحزمة التوطين السعودية للرواتب جزء من Odoo Enterprise.",
          en: "Yes. The Payroll app and the Saudi payroll localisation are part of Odoo Enterprise.",
        },
      },
    ],
  },
];

export const articleBySlug = (s: string) => articles.find((a) => a.slug === s);
