import type { AppDetail } from "./types";

const d: AppDetail = {
  slug: "helpdesk",
  benefits: [
    {
      value: { ar: "", en: "" },
      label: { ar: "رد أول أسرع", en: "Faster first response" },
      text: {
        ar: "التذكرة تُسند للفريق الصحيح فور وصولها، ومؤقت اتفاقية الخدمة يظهر أمام الموظف.",
        en: "Each ticket goes to the right team on arrival, with the SLA timer in front of the agent.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "لا طلبات ضائعة", en: "No lost requests" },
      text: {
        ar: "رسائل البريد والواتساب ونموذج الموقع تصبح تذاكر مرقمة لها مسؤول وحالة.",
        en: "Email, WhatsApp and web form messages become numbered tickets with an owner and a status.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "تذاكر متكررة أقل", en: "Fewer repeat tickets" },
      text: {
        ar: "قاعدة المعرفة في البوابة تجيب عن الأسئلة الشائعة قبل أن يفتح العميل تذكرة.",
        en: "The knowledge base on the portal answers common questions before a customer opens a ticket.",
      },
    },
    {
      value: { ar: "", en: "" },
      label: { ar: "قياس مستمر لرضا العملاء", en: "Customer satisfaction measured continuously" },
      text: {
        ar: "استبيان قصير يُرسل عند إغلاق كل تذكرة، والنتائج تظهر لكل موظف وفريق.",
        en: "A short survey goes out when each ticket closes, with results per agent and team.",
      },
    },
  ],
  story: {
    title: { ar: "من رسائل متفرقة إلى قائمة واحدة واضحة", en: "From scattered messages to one clear queue" },
    before: {
      ar: "الطلبات تصل إلى بريد مشترك وأرقام واتساب شخصية، ولا أحد يعرف من رد على من. العميل يتصل ليسأل عن طلبه، والمدير لا يعرف عدد الطلبات المتأخرة.",
      en: "Requests arrive in a shared inbox and personal WhatsApp numbers, and nobody knows who answered whom. Customers call to chase their request, and the manager cannot tell how many are late.",
    },
    after: {
      ar: "كل رسالة تصبح تذكرة في قائمة الفريق المناسب، مع أولوية ومؤقت لاتفاقية الخدمة. الموظف يرى سجل العميل وفواتيره وطلباته السابقة، والتذكرة تُصعّد قبل أن تتأخر.",
      en: "Every message becomes a ticket in the right team's queue, with a priority and an SLA timer. Agents see the customer's history, invoices and past tickets, and the ticket escalates before it runs late.",
    },
  },
  workflow: [
    {
      title: { ar: "استقبال الطلب", en: "Receive the request" },
      text: {
        ar: "رسالة بريد أو واتساب أو نموذج من الموقع تنشئ تذكرة مرتبطة بالعميل تلقائياً.",
        en: "An email, WhatsApp message or web form creates a ticket linked to the customer automatically.",
      },
    },
    {
      title: { ar: "التصنيف والإسناد", en: "Classify and assign" },
      text: {
        ar: "قواعد التوزيع تحدد الفريق والأولوية حسب نوع الطلب والعميل، وتسند التذكرة لموظف متاح.",
        en: "Routing rules set the team and priority by request type and customer, and assign the ticket to an available agent.",
      },
    },
    {
      title: { ar: "المعالجة والرد", en: "Work and respond" },
      text: {
        ar: "الموظف يرد من التذكرة نفسها، ويستخدم ردوداً جاهزة ومقالات المعرفة، ويسجل الوقت المستغرق.",
        en: "The agent replies from the ticket using canned responses and knowledge articles, and logs the time spent.",
      },
    },
    {
      title: { ar: "التصعيد عند الحاجة", en: "Escalate when needed" },
      text: {
        ar: "إذا اقترب موعد اتفاقية الخدمة تُرسل تنبيهات للمشرف، ويمكن تحويل التذكرة لفريق آخر أو لإصلاح أو زيارة ميدانية.",
        en: "As the SLA deadline nears, the supervisor is alerted, and the ticket can move to another team, a repair or a field visit.",
      },
    },
    {
      title: { ar: "الإغلاق والتقييم", en: "Close and rate" },
      text: {
        ar: "عند الحل يُغلق الطلب ويستلم العميل استبيان رضا، والنتيجة تدخل تقارير الأداء.",
        en: "When solved, the ticket closes and the customer receives a satisfaction survey that feeds performance reports.",
      },
    },
  ],
  sections: [
    {
      title: { ar: "قنوات موحدة", en: "Unified channels" },
      text: {
        ar: "نربط البريد الإلكتروني ونماذج الموقع والمحادثة المباشرة بفرق الدعم. ونربط واتساب للأعمال ليصل كل حوار إلى تذكرة واحدة.",
        en: "We connect email, website forms and live chat to your support teams. We also connect WhatsApp Business so each conversation lands in a single ticket.",
      },
      points: [
        { ar: "عنوان بريد مستقل لكل فريق", en: "Separate email address per team" },
        { ar: "واتساب للأعمال برقم الشركة", en: "WhatsApp Business on the company number" },
        { ar: "نموذج طلب على موقعك", en: "Request form on your website" },
        { ar: "دمج التذاكر المكررة", en: "Merge duplicate tickets" },
      ],
    },
    {
      title: { ar: "اتفاقيات مستوى الخدمة", en: "Service level agreements" },
      text: {
        ar: "تحدد لكل أولوية أو فئة عملاء وقتاً للرد الأول ووقتاً للحل. المؤقت يحتسب ساعات الدوام فقط ويتوقف أثناء انتظار رد العميل.",
        en: "Set a first-response and resolution time for each priority or customer tier. The timer counts working hours only and pauses while waiting on the customer.",
      },
      points: [
        { ar: "سياسات مختلفة لعملاء العقود", en: "Different policies for contract customers" },
        { ar: "تقويم دوام وعطل رسمية", en: "Working calendar and public holidays" },
        { ar: "تنبيه قبل تجاوز الموعد", en: "Alert before the deadline passes" },
        { ar: "نسبة الالتزام لكل فريق", en: "Compliance rate per team" },
      ],
    },
    {
      title: { ar: "الإسناد والتصعيد", en: "Assignment and escalation" },
      text: {
        ar: "التذاكر توزع بالتناوب أو حسب حمل كل موظف. القواعد الآلية تغير الأولوية أو المسؤول عند تأخر الرد.",
        en: "Tickets are assigned in rotation or by each agent's load. Automated rules change the priority or owner when a reply is late.",
      },
      points: [
        { ar: "توزيع تلقائي متوازن", en: "Balanced automatic assignment" },
        { ar: "فرق حسب المنتج أو المنطقة", en: "Teams by product or region" },
        { ar: "تصعيد للمشرف عند التأخير", en: "Escalation to supervisor on delay" },
        { ar: "ملاحظات داخلية لا يراها العميل", en: "Internal notes hidden from customers" },
      ],
    },
    {
      title: { ar: "بوابة العملاء وقاعدة المعرفة", en: "Customer portal and knowledge base" },
      text: {
        ar: "العميل يفتح طلباته ويتابع حالتها ويرد عليها من البوابة. مقالات المعرفة بالعربية والإنجليزية تحل الأسئلة الشائعة دون انتظار.",
        en: "Customers open, track and reply to their tickets on the portal. Knowledge articles in Arabic and English solve common questions without waiting.",
      },
      points: [
        { ar: "متابعة الطلب دون اتصال", en: "Track requests without calling" },
        { ar: "مقالات مقترحة أثناء كتابة الطلب", en: "Suggested articles while typing" },
        { ar: "منتدى أو أسئلة شائعة عامة", en: "Public FAQ or forum" },
        { ar: "دخول آمن لكل عميل", en: "Secure login for each customer" },
      ],
    },
    {
      title: { ar: "مرتبط ببقية النظام", en: "Connected to the rest of the system" },
      text: {
        ar: "الموظف يرى أوامر البيع والفواتير والضمان للعميل من التذكرة. ويمكنه إنشاء إرجاع أو استبدال أو إشعار دائن أو أمر إصلاح دون مغادرتها.",
        en: "Agents see the customer's orders, invoices and warranty from the ticket. They can create a return, exchange, credit note or repair order without leaving it.",
      },
      points: [
        { ar: "سجل العميل الكامل في التذكرة", en: "Full customer history on the ticket" },
        { ar: "إرجاع واستبدال من التذكرة", en: "Returns and exchanges from the ticket" },
        { ar: "فوترة ساعات الدعم المدفوع", en: "Billing for paid support hours" },
        { ar: "زيارة ميدانية للفني", en: "Field visit for a technician" },
      ],
    },
    {
      title: { ar: "الرضا والتقارير", en: "Satisfaction and reporting" },
      text: {
        ar: "استبيان بنقرة واحدة يُرسل عند الإغلاق. لوحات الأداء تعرض حجم التذاكر وزمن الحل والالتزام بالاتفاقيات لكل فريق وموظف.",
        en: "A one-click survey goes out on closing. Performance dashboards show ticket volume, resolution time and SLA compliance by team and agent.",
      },
      points: [
        { ar: "تقييم العميل لكل تذكرة", en: "Customer rating per ticket" },
        { ar: "أكثر أسباب الطلبات تكراراً", en: "Most frequent request reasons" },
        { ar: "زمن الحل حسب الفريق", en: "Resolution time by team" },
        { ar: "تقارير أسبوعية تلقائية للإدارة", en: "Automatic weekly reports for management" },
      ],
    },
  ],
  roles: [
    {
      role: { ar: "مدير خدمة العملاء", en: "Customer service manager" },
      gain: {
        ar: "يرى الطلبات المفتوحة والمتأخرة لحظياً، ويوزع الحمل قبل أن يشتكي العميل.",
        en: "Sees open and late tickets in real time, and rebalances the load before customers complain.",
      },
    },
    {
      role: { ar: "موظف الدعم", en: "Support agent" },
      gain: {
        ar: "يعمل من قائمة واحدة مرتبة بالأولوية، وكل ما يحتاجه عن العميل أمامه.",
        en: "Works from one queue sorted by priority, with everything about the customer in front of them.",
      },
    },
    {
      role: { ar: "العميل", en: "Customer" },
      gain: {
        ar: "يحصل على رقم لطلبه ويتابعه من البوابة أو واتساب، دون تكرار القصة لكل موظف.",
        en: "Gets a reference number and tracks it on the portal or WhatsApp, without repeating the story to each agent.",
      },
    },
  ],
  compare: [
    {
      before: { ar: "طلبات على أرقام واتساب شخصية", en: "Requests on personal WhatsApp numbers" },
      after: { ar: "رقم واتساب للشركة مربوط بالتذاكر", en: "Company WhatsApp number linked to tickets" },
    },
    {
      before: { ar: "بريد مشترك بلا مسؤول واضح", en: "Shared inbox with no clear owner" },
      after: { ar: "كل تذكرة لها مسؤول وحالة", en: "Every ticket has an owner and status" },
    },
    {
      before: { ar: "التأخير يُكتشف بعد شكوى العميل", en: "Delays found after a complaint" },
      after: { ar: "تنبيه قبل تجاوز موعد الخدمة", en: "Alert before the SLA is breached" },
    },
    {
      before: { ar: "لا أرقام عن أداء الدعم", en: "No numbers on support performance" },
      after: { ar: "رضا وزمن حل لكل فريق", en: "Satisfaction and resolution time per team" },
    },
  ],
  faq: [
    {
      q: { ar: "هل يمكن نقل التذاكر من Zendesk أو Freshdesk؟", en: "Can we move tickets from Zendesk or Freshdesk?" },
      a: {
        ar: "نعم. ننقل العملاء والتذاكر المفتوحة ومقالات المعرفة، ونقرر معكم كم سنة من التذاكر المغلقة تستحق النقل.",
        en: "Yes. We move customers, open tickets and knowledge articles, and agree with you how many years of closed tickets are worth bringing over.",
      },
    },
    {
      q: { ar: "كيف يعمل ربط واتساب؟", en: "How does the WhatsApp connection work?" },
      a: {
        ar: "نربط رقم الشركة عبر واتساب للأعمال API، فتصل الرسائل إلى النظام ويرد الموظف منه. الرسائل خارج نافذة 24 ساعة تحتاج قوالب معتمدة من Meta ونجهزها معكم.",
        en: "We connect your company number through the WhatsApp Business API, so messages arrive in the system and agents reply from it. Messages outside the 24-hour window need Meta-approved templates, which we prepare with you.",
      },
    },
    {
      q: { ar: "هل يمكن أن يكون لكل فرع أو منتج فريق مستقل؟", en: "Can each branch or product have its own team?" },
      a: {
        ar: "نعم. كل فريق له قائمته وقنواته واتفاقياته، والمدير العام يرى الصورة المجمعة.",
        en: "Yes. Each team has its own queue, channels and SLAs, and the general manager sees the combined picture.",
      },
    },
    {
      q: { ar: "هل نستطيع فوترة الدعم للعملاء؟", en: "Can we bill customers for support?" },
      a: {
        ar: "نعم. الساعات المسجلة على التذكرة أو باقات الدعم المسبقة تتحول إلى فواتير بالضريبة الصحيحة، ومتوافقة مع فاتورة أو جو فوترة.",
        en: "Yes. Hours logged on tickets or prepaid support packages become invoices with the correct tax, compliant with ZATCA FATOORA or JoFotara.",
      },
    },
    {
      q: { ar: "كم يستغرق تشغيل الدعم؟", en: "How long does it take to go live?" },
      a: {
        ar: "نقدّرها مبدئياً من 2 إلى 4 أسابيع للقنوات والاتفاقيات وقاعدة المعرفة، ويضاف وقت لربط واتساب حسب موافقة Meta على الحساب.",
        en: "We estimate 2 to 4 weeks for channels, SLAs and the knowledge base, plus time for WhatsApp depending on Meta's account approval.",
      },
    },
  ],
};

export default d;
