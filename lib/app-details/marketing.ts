import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "marketing",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "تفاعل أعلى عبر واتساب", en: "Higher engagement on WhatsApp" },
      text: {
        ar: "رسائل واتساب بقوالب معتمدة تصل حيث يقرأ عملاؤكم فعلاً، وتُرسل من نفس النظام.",
        en: "WhatsApp messages with approved templates reach customers where they actually read, sent from the same system.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "مبيعات متكررة أكثر من العملاء الحاليين", en: "More repeat sales from existing customers" },
      text: {
        ar: "تستهدف من اشترى منتجاً معيناً أو انقطع عن الشراء بعرض يناسبه.",
        en: "You target people who bought a given product or stopped buying with an offer that fits.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا قوائم تُصدَّر يدوياً", en: "No lists exported by hand" },
      text: {
        ar: "الشرائح تُبنى من بيانات المبيعات والفواتير مباشرة وتتحدث تلقائياً.",
        en: "Segments are built straight from sales and invoice data and update themselves.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "عائد معروف لكل حملة", en: "Known revenue for every campaign" },
      text: {
        ar: "كل رابط في الحملة يُتتبع حتى أمر البيع والفاتورة، فتعرفون ما باعته كل حملة.",
        en: "Every campaign link is tracked through to the order and invoice, so you know what each one sold.",
      },
    },
  ],
  story: {
    title: { ar: "من رسائل عشوائية إلى حملات تعرف جمهورها", en: "From random blasts to campaigns that know their audience" },
    before: {
      ar: "القوائم تُصدَّر من النظام إلى أداة بريد خارجية، وتصبح قديمة بسرعة. العروض تُرسل في مجموعات واتساب يدوية للجميع. ولا أحد يعرف كم بيعت أي حملة.",
      en: "Lists are exported to an outside email tool and go stale quickly. Offers go to everyone through manual WhatsApp groups. Nobody knows how much any campaign sold.",
    },
    after: {
      ar: "الشريحة تُبنى من المبيعات الحقيقية: من اشترى، ومتى، وكم. الحملة تخرج بواتساب أو بريد أو رسالة نصية من نفس المكان. ولوحة الحملة تعرض من فتح ومن ضغط ومن اشترى.",
      en: "Segments come from real sales: who bought, when and how much. The campaign goes out by WhatsApp, email or SMS from one place. The campaign dashboard shows who opened, clicked and bought.",
    },
  },
  workflow: [
    {
      title: { ar: "بناء الشريحة", en: "Build the segment" },
      text: {
        ar: "فلترة العملاء حسب المنتج والمدينة وآخر شراء وقيمة المشتريات.",
        en: "Filter customers by product, city, last purchase and total spend.",
      },
    },
    {
      title: { ar: "تجهيز الرسالة", en: "Prepare the message" },
      text: {
        ar: "تصميم البريد بالسحب والإفلات، أو اختيار قالب واتساب معتمد من Meta.",
        en: "Design the email with drag and drop, or pick a Meta-approved WhatsApp template.",
      },
    },
    {
      title: { ar: "الاختبار والجدولة", en: "Test and schedule" },
      text: {
        ar: "إرسال نسخة تجريبية، واختبار عنوانين على عينة، ثم تحديد موعد الإرسال.",
        en: "Send a test, try two subject lines on a sample, then schedule the send.",
      },
    },
    {
      title: { ar: "الإرسال والمتابعة", en: "Send and track" },
      text: {
        ar: "متابعة التسليم والفتح والنقر والردود لحظة بلحظة.",
        en: "Track delivery, opens, clicks and replies as they happen.",
      },
    },
    {
      title: { ar: "قياس العائد", en: "Measure the return" },
      text: {
        ar: "ربط النقرات بالفرص وأوامر البيع والفواتير، ومقارنة الحملات ببعضها.",
        en: "Link clicks to leads, orders and invoices, and compare campaigns side by side.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "شرائح من بياناتكم الحقيقية", en: "Segments from your real data" },
      text: {
        ar: "العملاء والمبيعات والفواتير في نفس النظام، فالشريحة تُبنى بفلتر مباشر. اختر من اشترى صنفاً معيناً أو لم يشترِ منذ ثلاثة أشهر. الشريحة تتحدث تلقائياً مع كل بيع جديد.",
        en: "Customers, sales and invoices live in one system, so a segment is a direct filter. Pick people who bought a given item or have not bought in three months. The segment updates with every new sale.",
      },
      points: [
        { ar: "فلترة حسب المنتج والمدينة", en: "Filter by product and city" },
        { ar: "العملاء المنقطعون عن الشراء", en: "Customers who stopped buying" },
        { ar: "قوائم بريدية واشتراكات", en: "Mailing lists and subscriptions" },
        { ar: "عملاء المتاجر من سلة وزد وShopify", en: "Store customers from Salla, Zid and Shopify" },
      ],
    },
    {
      title: { ar: "حملات واتساب", en: "WhatsApp campaigns" },
      text: {
        ar: "نربط حساب واتساب للأعمال الرسمي بالنظام. ترسلون قوالب معتمدة من Meta لشريحة محددة مع اسم العميل وتفاصيله. والردود تصل إلى النظام ويتابعها الفريق.",
        en: "We connect your official WhatsApp Business account to the system. You send Meta-approved templates to a segment with each customer's name and details. Replies come back into the system for the team.",
      },
      points: [
        { ar: "قوالب معتمدة بمتغيرات شخصية", en: "Approved templates with personal fields" },
        { ar: "إرسال جماعي لشريحة محددة", en: "Bulk send to a chosen segment" },
        { ar: "ردود العملاء داخل النظام", en: "Customer replies inside the system" },
        { ar: "احترام طلبات إلغاء الاشتراك", en: "Opt-out requests respected" },
      ],
    },
    {
      title: { ar: "البريد والرسائل النصية", en: "Email and SMS" },
      text: {
        ar: "محرر بريد بالسحب والإفلات مع قوالب جاهزة تدعم العربية. اختبار عنوانين على عينة وإرسال الأفضل للباقي. والرسائل النصية القصيرة للتذكير والعروض السريعة.",
        en: "A drag-and-drop email editor with ready templates that support Arabic. Test two subject lines on a sample and send the winner to the rest. SMS for reminders and quick offers.",
      },
      points: [
        { ar: "محرر بريد بالسحب والإفلات", en: "Drag-and-drop email editor" },
        { ar: "اختبار A/B للعنوان والمحتوى", en: "A/B testing on subject and content" },
        { ar: "رسائل نصية قصيرة", en: "SMS campaigns" },
        { ar: "قائمة حظر وإلغاء اشتراك تلقائي", en: "Blacklist and automatic unsubscribe" },
      ],
    },
    {
      title: { ar: "أتمتة التسويق", en: "Marketing automation" },
      text: {
        ar: "سلاسل رسائل تعمل وحدها حسب سلوك العميل. رسالة ترحيب للعميل الجديد، وتذكير لمن لم يفتح، وعرض لمن لم يشترِ منذ مدة. تُبنى مرة وتعمل طوال الوقت.",
        en: "Message sequences that run on their own based on customer behaviour. A welcome for new customers, a nudge for those who did not open, an offer for lapsed buyers. Build it once and it keeps running.",
      },
      points: [
        { ar: "سلسلة ترحيب للعملاء الجدد", en: "Welcome series for new customers" },
        { ar: "متابعة حسب الفتح أو النقر", en: "Follow-ups based on opens or clicks" },
        { ar: "إعادة تنشيط العملاء المنقطعين", en: "Win-back for lapsed customers" },
        { ar: "إنشاء فرصة بيع تلقائياً", en: "Create a sales lead automatically" },
      ],
    },
    {
      title: { ar: "الفعاليات والاستبيانات", en: "Events and surveys" },
      text: {
        ar: "صفحة تسجيل للفعالية أو الورشة، مع دعوات وتذكيرات وتذاكر. واستبيانات رضا بعد الشراء أو الخدمة. النتائج ترتبط بملف العميل.",
        en: "A registration page for events or workshops, with invites, reminders and tickets. Satisfaction surveys after a purchase or service. Results link to the customer record.",
      },
      points: [
        { ar: "صفحة تسجيل وتذاكر", en: "Registration page and tickets" },
        { ar: "تذكير الحضور قبل الموعد", en: "Attendee reminders before the date" },
        { ar: "استبيانات رضا العملاء", en: "Customer satisfaction surveys" },
        { ar: "النتائج في ملف العميل", en: "Results on the customer record" },
      ],
    },
    {
      title: { ar: "قياس العائد", en: "Revenue tracking" },
      text: {
        ar: "كل رابط في الحملة يحمل مصدرها، فيُتتبع حتى الفرصة وأمر البيع والفاتورة. ترون كم فرصة وكم مبيعات جاءت من كل حملة. وتقارنون القنوات لتعرفوا أين تضعون ميزانيتكم.",
        en: "Every campaign link carries its source, so it is tracked to the lead, order and invoice. You see how many leads and sales each campaign produced. Compare channels to decide where your budget goes.",
      },
      points: [
        { ar: "تتبع المصدر والحملة لكل رابط", en: "Source and campaign tracking on every link" },
        { ar: "الفرص والمبيعات لكل حملة", en: "Leads and sales per campaign" },
        { ar: "مقارنة القنوات ببعضها", en: "Channel-by-channel comparison" },
        { ar: "تقارير الفتح والنقر والارتداد", en: "Open, click and bounce reports" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مسؤول التسويق", en: "Marketing lead" },
      gain: {
        ar: "يبني الشريحة ويرسل الحملة ويقيس عائدها من مكان واحد دون تصدير قوائم.",
        en: "Builds the segment, sends the campaign and measures its return in one place, with no list exports.",
      },
    },
    {
      role: { ar: "فريق المبيعات", en: "Sales team" },
      gain: {
        ar: "يستلم فرصاً من الحملات مع سجل تفاعل العميل، فيعرف بماذا يبدأ المكالمة.",
        en: "Receives leads from campaigns with the customer's engagement history, so they know how to open the call.",
      },
    },
    {
      role: { ar: "الإدارة", en: "Management" },
      gain: {
        ar: "ترى كم أنفقت كل حملة وكم باعت، وتوجه الميزانية للقناة الأنجح.",
        en: "Sees what each campaign cost and sold, and moves budget to the channel that works.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "تصدير قوائم إلى أداة خارجية", en: "Exporting lists to an outside tool" },
      after: { ar: "شرائح حية من المبيعات", en: "Live segments from sales data" },
    },
    {
      before: { ar: "مجموعات واتساب يدوية للجميع", en: "Manual WhatsApp groups for everyone" },
      after: { ar: "قوالب معتمدة لشريحة محددة", en: "Approved templates to a chosen segment" },
    },
    {
      before: { ar: "نفس الرسالة لكل العملاء", en: "The same message to every customer" },
      after: { ar: "رسالة حسب ما اشتراه العميل", en: "Messages based on what each one bought" },
    },
    {
      before: { ar: "لا يُعرف عائد أي حملة", en: "No idea what a campaign earned" },
      after: { ar: "مبيعات كل حملة بالأرقام", en: "Sales per campaign in numbers" },
    },
  ],
  faq: [
    {
      q: { ar: "هل نحتاج حساب واتساب للأعمال رسمياً؟", en: "Do we need an official WhatsApp Business account?" },
      a: {
        ar: "نعم، الإرسال الجماعي يتطلب حساب واتساب Business API موثقاً ورقماً مخصصاً. نساعدكم في التسجيل واعتماد القوالب من Meta.",
        en: "Yes. Bulk sending requires a verified WhatsApp Business API account and a dedicated number. We help with registration and template approval from Meta.",
      },
    },
    {
      q: { ar: "هل هناك تكلفة لكل رسالة واتساب؟", en: "Is there a cost per WhatsApp message?" },
      a: {
        ar: "Meta تحتسب رسوماً على المحادثات حسب نوعها والدولة. نوضح لكم التكلفة المتوقعة قبل البدء حسب حجم حملاتكم.",
        en: "Meta charges per conversation depending on its type and country. We explain the expected cost up front based on your campaign volume.",
      },
    },
    {
      q: { ar: "هل يدعم المحرر الكتابة من اليمين لليسار؟", en: "Does the editor support right-to-left text?" },
      a: {
        ar: "نعم، رسائل البريد والقوالب تدعم العربية والاتجاه من اليمين لليسار، ونجهز لكم قوالب بهوية شركتكم.",
        en: "Yes. Emails and templates support Arabic and right-to-left layout, and we prepare templates in your brand style.",
      },
    },
    {
      q: { ar: "هل يمكن ربط عملاء متجر سلة أو زد؟", en: "Can we bring in customers from Salla or Zid?" },
      a: {
        ar: "نعم، عند ربط المتجر بالنظام تدخل الطلبات وبيانات العملاء تلقائياً، فتصبح جزءاً من الشرائح والحملات.",
        en: "Yes. Once the store is connected, orders and customer data flow in automatically and become part of your segments and campaigns.",
      },
    },
    {
      q: { ar: "كيف نتعامل مع طلبات إلغاء الاشتراك؟", en: "How are unsubscribe requests handled?" },
      a: {
        ar: "كل بريد يحمل رابط إلغاء اشتراك، ومن يلغي يُضاف لقائمة الحظر ولا تصله حملات لاحقة. وكذلك من يطلب إيقاف رسائل واتساب.",
        en: "Every email has an unsubscribe link, and anyone who opts out joins a blacklist and gets no further campaigns. The same applies to WhatsApp opt-outs.",
      },
    },
  ],
};

export default d;
