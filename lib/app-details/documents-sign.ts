import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "documents-sign",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "إرسال العقود وتوقيعها بسرعة", en: "Contracts sent and signed quickly" },
      text: {
        ar: "العقد يُرسل برابط من داخل النظام، والعميل يوقّع من جواله دون طباعة أو مسح ضوئي.",
        en: "The contract goes out as a link from the system, and the customer signs on the phone with no printing or scanning.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "الوصول لأي مستند بسهولة", en: "Find any document easily" },
      text: {
        ar: "المستند محفوظ مع العميل أو الموظف أو المشروع، ويُبحث عنه بالاسم أو الوسم.",
        en: "Each document sits on its customer, employee or project, and is found by name or tag.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا وثائق تنتهي دون علمكم", en: "No documents expiring unnoticed" },
      text: {
        ar: "السجل التجاري والتراخيص والإقامات تصلكم تنبيهات قبل انتهائها بوقت كافٍ.",
        en: "Commercial registrations, licences and iqamas trigger alerts well before they expire.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "ورق وطباعة أقل بكثير", en: "Far less paper and printing" },
      text: {
        ar: "العقود والنماذج الداخلية تُوقَّع وتُحفظ إلكترونياً من البداية إلى النهاية.",
        en: "Contracts and internal forms are signed and stored electronically end to end.",
      },
    },
  ],
  story: {
    title: { ar: "من الأرشيف الورقي إلى مستند في مكانه", en: "From paper archives to every document in its place" },
    before: {
      ar: "العقود في خزانة، ونسخها في بريد أحد الموظفين أو على جهازه. إرسال عقد للتوقيع يعني طباعة ومسحاً ضوئياً وانتظاراً طويلاً. إقامة موظف أو سجل تجاري ينتهي ولا ينتبه أحد إلا متأخراً.",
      en: "Contracts sit in a cabinet, with copies in someone's inbox or laptop. Getting a contract signed means printing, scanning and a long wait. An iqama or commercial registration expires and nobody notices until too late.",
    },
    after: {
      ar: "كل مستند مرفوع مرة واحدة ومربوط بسجله. العقد يُرسل للتوقيع برابط ويعود موقعاً ومحفوظاً تلقائياً. والنظام ينبّه المسؤول قبل انتهاء أي وثيقة.",
      en: "Each document is uploaded once and linked to its record. A contract goes out as a signing link and comes back signed and filed automatically. The system alerts the owner before any document expires.",
    },
  },
  workflow: [
    {
      title: { ar: "رفع المستند", en: "Upload the document" },
      text: {
        ar: "بالسحب والإفلات أو المسح الضوئي أو إرساله إلى بريد المجلد.",
        en: "Drag and drop, scan, or email it to the folder's address.",
      },
    },
    {
      title: { ar: "التصنيف والربط", en: "Tag and link" },
      text: {
        ar: "يوضع في مجلده مع الوسوم، ويُربط بالعميل أو الموظف أو المشروع.",
        en: "It goes into its folder with tags and is linked to a customer, employee or project.",
      },
    },
    {
      title: { ar: "تجهيز التوقيع", en: "Prepare for signing" },
      text: {
        ar: "تحدد حقول التوقيع والتاريخ والاسم، وأدوار الموقّعين وترتيبهم.",
        en: "Place signature, date and name fields, and set signer roles and order.",
      },
    },
    {
      title: { ar: "الإرسال والتوقيع", en: "Send and sign" },
      text: {
        ar: "يصل الرابط بالبريد، ويمكن مشاركته عبر واتساب، ويوقّع كل طرف من جواله.",
        en: "The link arrives by email, can be shared on WhatsApp, and each party signs on the phone.",
      },
    },
    {
      title: { ar: "الحفظ والمتابعة", en: "File and follow up" },
      text: {
        ar: "النسخة الموقعة وشهادة التوقيع تُحفظ مع السجل، وتبدأ متابعة تاريخ الانتهاء.",
        en: "The signed copy and its certificate are filed on the record, and expiry tracking starts.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "مجلدات وصلاحيات", en: "Folders and permissions" },
      text: {
        ar: "نبني هيكل مجلدات يعكس طريقة عملكم: مالية وموارد بشرية وعقود ومشاريع. كل مجلد له صلاحيات قراءة وتعديل لمجموعات محددة. فلا يرى أحد ما لا يخصه.",
        en: "We build a folder structure that mirrors how you work: finance, HR, contracts, projects. Each folder has read and edit rights for specific groups. Nobody sees what is not theirs.",
      },
      points: [
        { ar: "مجلدات حسب القسم أو النشاط", en: "Folders by department or activity" },
        { ar: "صلاحيات قراءة وتعديل لكل مجلد", en: "Read and edit rights per folder" },
        { ar: "وسوم لتصنيف وفلترة سريعة", en: "Tags for quick filtering" },
        { ar: "روابط مشاركة محمية لجهات خارجية", en: "Protected share links for outsiders" },
      ],
    },
    {
      title: { ar: "مستند مربوط بسجله", en: "Documents linked to records" },
      text: {
        ar: "مرفقات الفواتير والعقود وملفات الموظفين تظهر في مكان واحد. المستند يبقى مربوطاً بالعميل أو الموظف أو المشروع الذي يخصه. وفاتورة المورد الواردة تتحول إلى مسودة فاتورة في المحاسبة.",
        en: "Invoice attachments, contracts and employee files appear in one place. Each document stays linked to its customer, employee or project. An incoming vendor bill becomes a draft bill in accounting.",
      },
      points: [
        { ar: "ملف كامل لكل موظف", en: "Complete file per employee" },
        { ar: "تحويل فاتورة المورد إلى قيد", en: "Turn vendor bills into entries" },
        { ar: "تقسيم ملف PDF إلى عدة مستندات", en: "Split a PDF into several documents" },
        { ar: "طلب مستند ناقص من الموظف", en: "Request a missing document" },
      ],
    },
    {
      title: { ar: "التوقيع الإلكتروني", en: "E-signature" },
      text: {
        ar: "ارفع العقد وحدد مكان التوقيع، ثم أرسله لطرف واحد أو عدة أطراف بترتيب محدد. الموقّع يفتح الرابط ويوقّع بالرسم أو الكتابة من أي جهاز. هذا توقيع إلكتروني بسيط يناسب العقود التجارية والنماذج الداخلية.",
        en: "Upload the contract, place the signature fields, and send it to one or more parties in a set order. Signers open the link and draw or type their signature on any device. It is a simple e-signature suited to commercial contracts and internal forms.",
      },
      points: [
        { ar: "عدة موقّعين بترتيب محدد", en: "Multiple signers in a set order" },
        { ar: "تحقق اختياري برمز SMS", en: "Optional SMS code verification" },
        { ar: "تذكير تلقائي لمن لم يوقّع", en: "Automatic reminders to pending signers" },
        { ar: "شهادة توقيع بالوقت والعنوان", en: "Signing certificate with time and IP" },
      ],
    },
    {
      title: { ar: "قوالب العقود", en: "Contract templates" },
      text: {
        ar: "عقود العمل واتفاقيات عدم الإفصاح وعقود البيع تُحفظ كقوالب جاهزة بحقولها. يُرسل العقد من القالب بسرعة. ويمكن إرسال عرض السعر للتوقيع من المبيعات مباشرة.",
        en: "Employment contracts, NDAs and sales agreements are saved as ready templates with their fields. A contract is sent from a template quickly. Quotes can go for signature straight from Sales.",
      },
      points: [
        { ar: "قوالب بحقول محددة مسبقاً", en: "Templates with preset fields" },
        { ar: "تعبئة الاسم والبريد تلقائياً", en: "Name and email filled automatically" },
        { ar: "توقيع عرض السعر من المبيعات", en: "Sign quotes from Sales" },
        { ar: "عقود الموظفين من الموارد البشرية", en: "Employee contracts from HR" },
      ],
    },
    {
      title: { ar: "تنبيهات الانتهاء", en: "Expiry alerts" },
      text: {
        ar: "نضيف تواريخ الانتهاء للوثائق المهمة: السجل التجاري والتراخيص البلدية والإقامات وجوازات السفر. النظام ينشئ تذكيراً للمسؤول قبل الموعد بمدة تحددونها. وتقرير واحد يعرض كل ما سينتهي خلال الشهر.",
        en: "We add expiry dates to key documents: commercial registration, municipal licences, iqamas and passports. The system creates a reminder for the owner ahead of a lead time you choose. One report shows everything expiring this month.",
      },
      points: [
        { ar: "السجل التجاري والتراخيص", en: "Commercial registration and licences" },
        { ar: "إقامات وجوازات الموظفين", en: "Employee iqamas and passports" },
        { ar: "تذكير قبل الموعد بمدة محددة", en: "Reminders at a set lead time" },
        { ar: "تقرير بما ينتهي هذا الشهر", en: "Report of what expires this month" },
      ],
    },
    {
      title: { ar: "سجل وتدقيق", en: "History and audit" },
      text: {
        ar: "كل مستند له سجل يبيّن من رفعه ومن عدّله ومن شاركه. المستند الموقّع يُحفظ مع سجل الموقّعين وأوقاتهم. هذا يسهّل الرد على أي استفسار من مدقق أو جهة رسمية.",
        en: "Every document has a history of who uploaded, edited and shared it. Signed documents keep a log of signers and times. Answering an auditor or authority becomes easy.",
      },
      points: [
        { ar: "سجل الرفع والتعديل والمشاركة", en: "Upload, edit and share log" },
        { ar: "نسخ سابقة من المستند", en: "Previous versions kept" },
        { ar: "بصمة رقمية للمستند الموقع", en: "Hash fingerprint on signed files" },
        { ar: "أرشفة بدل الحذف", en: "Archive instead of delete" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "الموارد البشرية", en: "HR" },
      gain: {
        ar: "ملف كامل لكل موظف، وعقود عمل تُوقَّع عن بُعد، وتنبيه قبل انتهاء الإقامة.",
        en: "A complete file per employee, contracts signed remotely, and alerts before iqamas expire.",
      },
    },
    {
      role: { ar: "المبيعات", en: "Sales" },
      gain: {
        ar: "يرسل العرض أو العقد للتوقيع من الجوال ويغلق الصفقة أسرع.",
        en: "Sends a quote or contract for signature from the phone and closes the deal faster.",
      },
    },
    {
      role: { ar: "الإدارة والشؤون القانونية", en: "Management and legal" },
      gain: {
        ar: "كل العقود والتراخيص في مكان واحد بصلاحيات واضحة وسجل كامل.",
        en: "All contracts and licences in one place with clear access rights and a full history.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "طباعة العقد ومسحه وإرساله بالبريد", en: "Print, scan and email the contract" },
      after: { ar: "رابط توقيع يصل الجوال", en: "A signing link on the phone" },
    },
    {
      before: { ar: "ملفات متفرقة على أجهزة الموظفين", en: "Files scattered on staff laptops" },
      after: { ar: "مجلدات مركزية بصلاحيات", en: "Central folders with permissions" },
    },
    {
      before: { ar: "اكتشاف انتهاء الوثيقة بعد فوات الأوان", en: "Finding out a document expired too late" },
      after: { ar: "تنبيه قبل الانتهاء بمدة كافية", en: "An alert well before expiry" },
    },
    {
      before: { ar: "لا أحد يعرف أين النسخة الأخيرة", en: "Nobody knows which copy is final" },
      after: { ar: "نسخة واحدة مع سجل التعديلات", en: "One copy with a change history" },
    },
  ],
  faq: [
    {
      q: { ar: "هل التوقيع الإلكتروني ملزم قانونياً؟", en: "Is the e-signature legally binding?" },
      a: {
        ar: "هو توقيع إلكتروني بسيط مع سجل للموقّعين والأوقات، ويُستخدم عادة للعقود التجارية والنماذج الداخلية. للمعاملات التي تشترط توقيعاً رقمياً معتمداً من جهة حكومية، راجعوا مستشاركم القانوني.",
        en: "It is a simple e-signature with a log of signers and times, commonly used for commercial contracts and internal forms. For transactions that require a government-certified digital signature, check with your legal adviser.",
      },
    },
    {
      q: { ar: "هل يحتاج الموقّع إلى حساب في النظام؟", en: "Does the signer need an account?" },
      a: {
        ar: "لا. الموقّع يستلم رابطاً ويوقّع من المتصفح على أي جهاز دون تسجيل.",
        en: "No. Signers receive a link and sign in the browser on any device without registering.",
      },
    },
    {
      q: { ar: "هل يمكن نقل أرشيفنا الحالي؟", en: "Can we migrate our current archive?" },
      a: {
        ar: "نعم. ننقل الملفات إلى هيكل المجلدات الجديد ونربط ما يمكن ربطه بالعملاء والموظفين، حسب جودة تسمية الملفات الحالية.",
        en: "Yes. We move files into the new folder structure and link what we can to customers and employees, depending on how well current files are named.",
      },
    },
    {
      q: { ar: "كيف تعمل تنبيهات انتهاء الإقامة والسجل التجاري؟", en: "How do iqama and CR expiry alerts work?" },
      a: {
        ar: "نضيف حقل تاريخ انتهاء للوثيقة أو لملف الموظف، ونضبط قاعدة تنشئ نشاطاً للمسؤول قبل الموعد بعدد الأيام الذي تختارونه.",
        en: "We add an expiry date to the document or employee file and set a rule that creates a task for the owner a chosen number of days ahead.",
      },
    },
    {
      q: { ar: "هل يمكن إرسال رابط التوقيع عبر واتساب؟", en: "Can the signing link go out on WhatsApp?" },
      a: {
        ar: "الرابط يُرسل بالبريد افتراضياً ويمكن نسخه ومشاركته. وعند ربط واتساب للأعمال نرسله بقالب رسالة معتمد مباشرة من النظام.",
        en: "The link goes by email by default and can be copied and shared. With WhatsApp Business connected, we send it from the system using an approved message template.",
      },
    },
  ],
};

export default d;
