import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "fleet",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "كلفة تشغيل أقل للأسطول", en: "Lower fleet running costs" },
      text: {
        ar: "ترون كلفة كل مركبة شهرياً، فتكتشفون المركبات المكلفة وتقررون صيانتها أو استبدالها.",
        en: "You see each vehicle's monthly cost, spot the expensive ones and decide to service or replace them.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا استمارة أو تأمين ينتهي دون تنبيه", en: "No registration or insurance expiring unnoticed" },
      text: {
        ar: "النظام ينبّه المسؤول قبل انتهاء الاستمارة والتأمين والفحص الدوري بمدة تحددونها.",
        en: "The system alerts the owner before registration, insurance and inspection expire, at a lead time you set.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "صيانة في موعدها", en: "Services done on time" },
      text: {
        ar: "مواعيد الصيانة حسب العداد أو التاريخ تظهر للمسؤول قبل أن تتحول إلى أعطال.",
        en: "Service due by odometer or date shows up for the owner before it becomes a breakdown.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "كل مخالفة معروف سائقها", en: "Every fine matched to a driver" },
      text: {
        ar: "سجل من يقود كل مركبة وفي أي تاريخ يحدد المسؤول عن كل مخالفة مرورية.",
        en: "A log of who drove each vehicle on which date identifies who is responsible for each traffic fine.",
      },
    },
  ],
  story: {
    title: { ar: "من جدول المركبات إلى سجل حي لكل مركبة", en: "From a vehicle spreadsheet to a live record per vehicle" },
    before: {
      ar: "المركبات في جدول لا يحدّثه أحد. فواتير الوقود والورشة تضيع بين المحاسبة والعمليات. الاستمارة تنتهي فتُوقف المركبة، والمخالفة تصل ولا أحد يعرف من كان يقود.",
      en: "Vehicles live in a spreadsheet nobody updates. Fuel and workshop bills get lost between accounting and operations. A registration expires and the vehicle is stopped, and a fine arrives with no idea who was driving.",
    },
    after: {
      ar: "كل مركبة لها ملف بسائقها وعقدها ووقودها وصيانتها. التنبيهات تصل قبل الانتهاء. والكلفة الشهرية لكل مركبة ظاهرة للإدارة دون تجميع يدوي.",
      en: "Each vehicle has a file with its driver, contract, fuel and service. Alerts arrive before anything expires. Management sees monthly cost per vehicle with no manual collation.",
    },
  },
  workflow: [
    {
      title: { ar: "تسجيل المركبة", en: "Register the vehicle" },
      text: {
        ar: "رقم اللوحة والشاصي والطراز وتاريخ الاستمارة والتأمين وقيمة الشراء أو الإيجار.",
        en: "Plate, chassis, model, registration and insurance dates, and purchase or lease value.",
      },
    },
    {
      title: { ar: "تسليمها للسائق", en: "Assign the driver" },
      text: {
        ar: "تُسلَّم المركبة لموظف كعهدة بتاريخ وقراءة عداد، ويُحفظ سجل السائقين السابقين.",
        en: "The vehicle is handed to an employee as custody with a date and odometer reading, keeping past drivers on file.",
      },
    },
    {
      title: { ar: "تسجيل الاستخدام", en: "Log usage" },
      text: {
        ar: "قراءات العداد وتعبئة الوقود والمخالفات تُسجَّل على المركبة أولاً بأول.",
        en: "Odometer readings, fuel fill-ups and fines are logged against the vehicle as they happen.",
      },
    },
    {
      title: { ar: "الصيانة والتجديد", en: "Service and renew" },
      text: {
        ar: "تنبيه بموعد الصيانة وانتهاء العقود، وأمر صيانة يُسجَّل بكلفته وفاتورة الورشة.",
        en: "Alerts for service and contract expiry, with each service logged with its cost and workshop bill.",
      },
    },
    {
      title: { ar: "تحليل الكلفة", en: "Analyse cost" },
      text: {
        ar: "تقرير شهري بكلفة كل مركبة وكل سائق وكل فئة، للقرار بالإبقاء أو الاستبدال.",
        en: "A monthly report of cost per vehicle, driver and category, to decide whether to keep or replace.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "سجل المركبات", en: "Vehicle register" },
      text: {
        ar: "كل مركبة لها ملف كامل: اللوحة والشاصي والطراز وسنة الصنع ونوع الوقود. تُصنَّف حسب الحالة والفئة والموقع. وترفق بها صور الاستمارة والتأمين.",
        en: "Each vehicle has a full file: plate, chassis, model, year and fuel type. Vehicles are grouped by status, category and site. Registration and insurance copies are attached.",
      },
      points: [
        { ar: "بيانات اللوحة والشاصي والطراز", en: "Plate, chassis and model details" },
        { ar: "حالات مثل نشطة وفي الورشة", en: "Statuses like active or in workshop" },
        { ar: "فئات مثل سيارات وشاحنات ومعدات", en: "Categories like cars, trucks, equipment" },
        { ar: "مرفقات الاستمارة والتأمين", en: "Registration and insurance attachments" },
      ],
    },
    {
      title: { ar: "السائقون والعهدة", en: "Drivers and custody" },
      text: {
        ar: "المركبة مربوطة بالموظف الذي يقودها، مع تاريخ التسليم والاستلام. يمكن جدولة السائق القادم مسبقاً. وسجل السائقين يبقى محفوظاً لكل مركبة.",
        en: "Each vehicle is linked to the employee who drives it, with handover and return dates. The next driver can be scheduled in advance. The driver history stays on every vehicle.",
      },
      points: [
        { ar: "ربط المركبة بملف الموظف", en: "Vehicle linked to the employee file" },
        { ar: "تاريخ التسليم وقراءة العداد", en: "Handover date and odometer reading" },
        { ar: "جدولة السائق القادم", en: "Schedule the next driver" },
        { ar: "سجل كامل للسائقين السابقين", en: "Full history of past drivers" },
      ],
    },
    {
      title: { ar: "الوقود والعدادات", en: "Fuel and odometer" },
      text: {
        ar: "تعبئة الوقود تُسجَّل بالكمية والمبلغ وقراءة العداد. النظام يحسب الاستهلاك ويكشف الأرقام غير المنطقية. ويمكن للسائق رفع إيصال الوقود من جواله كمصروف.",
        en: "Each fill-up is logged with litres, amount and odometer. The system works out consumption and flags odd figures. Drivers can submit fuel receipts from their phone as expenses.",
      },
      points: [
        { ar: "سجل تعبئة بالكمية والمبلغ", en: "Fill-up log with litres and amount" },
        { ar: "قراءات العداد بالتاريخ", en: "Dated odometer readings" },
        { ar: "مقارنة استهلاك المركبات", en: "Compare consumption across vehicles" },
        { ar: "إيصالات الوقود من الجوال", en: "Fuel receipts from the phone" },
      ],
    },
    {
      title: { ar: "الصيانة الدورية", en: "Scheduled service" },
      text: {
        ar: "كل صيانة تُسجَّل بنوعها وكلفتها والورشة التي نفذتها. مواعيد تغيير الزيت والإطارات والفحص الدوري تصل كتنبيه. وفاتورة الورشة في المحاسبة تُربط بالمركبة.",
        en: "Each service is logged with its type, cost and workshop. Oil changes, tyres and periodic inspection come up as reminders. The workshop bill in accounting is linked to the vehicle.",
      },
      points: [
        { ar: "أنواع صيانة بكلفتها", en: "Service types with their cost" },
        { ar: "تنبيه بالفحص الدوري", en: "Periodic inspection reminders" },
        { ar: "فاتورة الورشة مربوطة بالمركبة", en: "Workshop bills linked to the vehicle" },
        { ar: "سجل الأعطال والحوادث", en: "Breakdown and accident history" },
      ],
    },
    {
      title: { ar: "العقود والتأمين والمخالفات", en: "Contracts, insurance and fines" },
      text: {
        ar: "عقود الإيجار والتأمين تُسجَّل بتاريخ بدايتها ونهايتها وكلفتها الدورية. النظام ينبّه قبل انتهائها بمدة محددة. والمخالفات المرورية تُسجَّل على المركبة وتُنسب للسائق في ذلك التاريخ.",
        en: "Lease and insurance contracts are logged with start, end and recurring cost. The system alerts ahead of expiry by a set lead time. Traffic fines are logged on the vehicle and assigned to that day's driver.",
      },
      points: [
        { ar: "عقود إيجار بقسط شهري", en: "Leases with a monthly instalment" },
        { ar: "تنبيه انتهاء التأمين والاستمارة", en: "Insurance and registration expiry alerts" },
        { ar: "مخالفة منسوبة للسائق المسؤول", en: "Fines assigned to the responsible driver" },
        { ar: "خصم المخالفة من الراتب عند الحاجة", en: "Deduct fines from payroll if needed" },
      ],
    },
    {
      title: { ar: "تقارير الكلفة", en: "Cost reports" },
      text: {
        ar: "الوقود والصيانة والإيجار والتأمين تُجمع في كلفة واحدة لكل مركبة. يمكن تحميل الكلفة على مركز كلفة أو مشروع. فتعرف الإدارة كم تكلّف كل مركبة وكل فرع.",
        en: "Fuel, service, lease and insurance roll up into one cost per vehicle. Costs can be charged to a cost centre or project. Management knows what each vehicle and branch costs.",
      },
      points: [
        { ar: "كلفة شهرية لكل مركبة", en: "Monthly cost per vehicle" },
        { ar: "تحليل حسب الفئة والفرع", en: "Analysis by category and branch" },
        { ar: "تحميل على مراكز الكلفة", en: "Charge to cost centres" },
        { ar: "قرار الإبقاء أو الاستبدال", en: "Keep-or-replace decisions" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مسؤول الأسطول", en: "Fleet manager" },
      gain: {
        ar: "يرى كل المركبات وحالتها وما سينتهي هذا الشهر في شاشة واحدة.",
        en: "Sees every vehicle, its status and what expires this month on one screen.",
      },
    },
    {
      role: { ar: "المحاسب", en: "Accountant" },
      gain: {
        ar: "فواتير الوقود والورش والإيجار مربوطة بالمركبة ومركز الكلفة دون فرز يدوي.",
        en: "Fuel, workshop and lease bills are tied to the vehicle and cost centre with no manual sorting.",
      },
    },
    {
      role: { ar: "الإدارة", en: "Management" },
      gain: {
        ar: "تعرف كلفة الأسطول الحقيقية وتقرر متى تستبدل المركبة أو تستأجر بدل الشراء.",
        en: "Knows the true fleet cost and decides when to replace a vehicle or lease instead of buying.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "جدول مركبات لا يُحدَّث", en: "A vehicle sheet nobody updates" },
      after: { ar: "ملف حي لكل مركبة", en: "A live file per vehicle" },
    },
    {
      before: { ar: "استمارة منتهية تُوقف المركبة", en: "An expired registration grounds a vehicle" },
      after: { ar: "تنبيه قبل الانتهاء بمدة كافية", en: "An alert well before expiry" },
    },
    {
      before: { ar: "مخالفة لا يُعرف سائقها", en: "A fine with no known driver" },
      after: { ar: "سائق محدد لكل تاريخ", en: "A named driver for every date" },
    },
    {
      before: { ar: "كلفة الأسطول مجهولة", en: "Fleet cost unknown" },
      after: { ar: "كلفة شهرية لكل مركبة", en: "Monthly cost per vehicle" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يتابع النظام موقع المركبة لحظياً؟", en: "Does the system track vehicle location live?" },
      a: {
        ar: "تطبيق الأسطول يدير السجلات والكلفة والعقود. تتبع الموقع يحتاج جهاز تتبع خارجي، ويمكن دراسة ربط بياناته حسب المزود الذي تستخدمونه.",
        en: "The Fleet app manages records, cost and contracts. Live location needs an external tracking device, and linking its data can be scoped based on your provider.",
      },
    },
    {
      q: { ar: "كيف تُسجَّل المخالفات المرورية؟", en: "How are traffic fines recorded?" },
      a: {
        ar: "تُسجَّل المخالفة على المركبة بتاريخها ومبلغها، ويُحدد السائق من سجل العهدة في ذلك اليوم. ويمكن تحويلها لخصم في الراتب إذا كانت سياستكم كذلك.",
        en: "The fine is logged on the vehicle with date and amount, and the driver is taken from that day's custody record. It can become a payroll deduction if your policy says so.",
      },
    },
    {
      q: { ar: "هل يناسب المعدات الثقيلة وليس السيارات فقط؟", en: "Does it work for heavy equipment too?" },
      a: {
        ar: "نعم، يمكن تعريف فئات للشاحنات والرافعات والمعدات، ومتابعة ساعات التشغيل أو العداد حسب نوع المعدة.",
        en: "Yes. You can define categories for trucks, forklifts and equipment, and track hours or odometer depending on the asset.",
      },
    },
    {
      q: { ar: "هل تُربط فواتير الوقود والورش بالمحاسبة؟", en: "Are fuel and workshop bills linked to accounting?" },
      a: {
        ar: "نعم، بند فاتورة المورد يُربط بالمركبة، فتظهر الكلفة في ملفها وفي التقارير المالية معاً دون إدخال مزدوج.",
        en: "Yes. A vendor bill line is linked to the vehicle, so the cost shows on its file and in financial reports with no double entry.",
      },
    },
    {
      q: { ar: "هل نستطيع نقل بيانات المركبات من جدول Excel؟", en: "Can we import vehicles from Excel?" },
      a: {
        ar: "نعم، نستورد المركبات والسائقين وتواريخ الانتهاء من جدولكم الحالي، ونراجع البيانات معكم قبل التشغيل.",
        en: "Yes. We import vehicles, drivers and expiry dates from your current sheet and review the data with you before go-live.",
      },
    },
  ],
};

export default d;
