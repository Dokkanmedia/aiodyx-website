import type { ShotKind } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

/*
 * Product "screenshots" drawn in HTML/SVG. They use their own fixed light palette
 * (.shot scope in globals.css) so they read as captured screens in both site themes.
 */

type P = { locale: Locale };
const tr = (locale: Locale, ar: string, en: string) => (locale === "ar" ? ar : en);

function Chrome({ locale, app, children, wide }: P & { app: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={`shot ${wide ? "shot-wide" : ""}`} dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="s-top">
        <span className="s-dots"><i /><i /><i /></span>
        <b>{app}</b>
        <span className="s-search">{tr(locale, "بحث…", "Search…")}</span>
        <span className="s-av">MS</span>
      </div>
      <div className="s-body">{children}</div>
    </div>
  );
}

/* deterministic QR-like matrix with the three finder squares */
function Qr({ size = 84, seed = 7 }: { size?: number; seed?: number }) {
  const n = 21, cells: React.ReactNode[] = [];
  let x = seed;
  const rnd = () => ((x = (x * 9301 + 49297) % 233280) / 233280);
  const finder = (r: number, c: number) =>
    (r < 7 && c < 7) || (r < 7 && c >= n - 7) || (r >= n - 7 && c < 7);
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++) {
      if (finder(r, c)) continue;
      if (rnd() > 0.52) cells.push(<rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" />);
    }
  const F = ({ r, c }: { r: number; c: number }) => (
    <g transform={`translate(${c} ${r})`}>
      <rect width="7" height="7" />
      <rect x="1" y="1" width="5" height="5" fill="#fff" />
      <rect x="2" y="2" width="3" height="3" />
    </g>
  );
  return (
    <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} width={size} height={size} fill="#14161f" shapeRendering="crispEdges" aria-hidden="true">
      <rect x="-1" y="-1" width={n + 2} height={n + 2} fill="#fff" />
      {cells}
      <F r={0} c={0} /><F r={0} c={n - 7} /><F r={n - 7} c={0} />
    </svg>
  );
}

function Invoice({ locale }: P) {
  const rows = [
    [tr(locale, "كرسي مكتب تنفيذي", "Executive office chair"), "12", "450.00", "5,400.00"],
    [tr(locale, "طاولة اجتماعات 8 أشخاص", "8-seat meeting table"), "2", "1,850.00", "3,700.00"],
    [tr(locale, "خزانة ملفات معدنية", "Steel file cabinet"), "6", "320.00", "1,920.00"],
  ];
  return (
    <Chrome locale={locale} app={tr(locale, "المحاسبة", "Accounting")} wide>
      <div className="s-split">
        <div className="s-paper">
          <div className="s-paper-head">
            <div>
              <span className="s-logo">AN</span>
              <b>{tr(locale, "شركة أفق الحديثة", "Ofoq Modern Co.")}</b>
              <small>{tr(locale, "الرقم الضريبي", "VAT")} 310245678900003</small>
            </div>
            <div className="s-doc-title">
              <b>{tr(locale, "فاتورة ضريبية", "Tax Invoice")}</b>
              <small className="ltr">INV/2026/0412</small>
              <small>2026-10-06</small>
            </div>
          </div>
          <table className="s-table">
            <thead><tr><th>{tr(locale, "الصنف", "Item")}</th><th>{tr(locale, "الكمية", "Qty")}</th><th>{tr(locale, "السعر", "Price")}</th><th>{tr(locale, "الإجمالي", "Total")}</th></tr></thead>
            <tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
          </table>
          <div className="s-paper-foot">
            <Qr />
            <dl className="s-totals">
              <dt>{tr(locale, "المجموع", "Subtotal")}</dt><dd>11,020.00</dd>
              <dt>{tr(locale, "ضريبة 15%", "VAT 15%")}</dt><dd>1,653.00</dd>
              <dt className="b">{tr(locale, "الإجمالي", "Total")}</dt><dd className="b">12,673.00 {tr(locale, "ر.س", "SAR")}</dd>
            </dl>
          </div>
          <span className="s-stamp">{tr(locale, "معتمدة · ZATCA", "CLEARED · ZATCA")}</span>
        </div>
        <aside className="s-side">
          <b className="s-side-h">{tr(locale, "الفوترة الإلكترونية", "E-invoicing")}</b>
          <ol className="s-timeline">
            <li className="ok">{tr(locale, "تم توقيع الفاتورة", "Invoice signed")}<small>10:42:03</small></li>
            <li className="ok">{tr(locale, "أُرسلت إلى فاتورة", "Sent to FATOORA")}<small>10:42:04</small></li>
            <li className="ok">{tr(locale, "اعتُمدت", "Cleared")}<small>10:42:06</small></li>
            <li>{tr(locale, "أُرسلت للعميل على واتساب", "Sent to customer on WhatsApp")}<small>10:42:10</small></li>
          </ol>
          <div className="s-mini-kpi"><small>{tr(locale, "فواتير اليوم", "Today's invoices")}</small><b>48</b><span className="s-ok">{tr(locale, "كلها معتمدة", "All cleared")}</span></div>
        </aside>
      </div>
    </Chrome>
  );
}

function Bars({ data, color = "#7C3AED", h = 120 }: { data: number[]; color?: string; h?: number }) {
  const max = Math.max(...data), w = 300, bw = w / data.length;
  return (
    <svg viewBox={`0 0 ${w} ${h + 18}`} className="s-chart" aria-hidden="true">
      {[0.25, 0.5, 0.75, 1].map((g) => <line key={g} x1="0" x2={w} y1={h - h * g} y2={h - h * g} stroke="#E8EAF2" />)}
      {data.map((v, i) => {
        const bh = (v / max) * (h - 6);
        return <rect key={i} x={i * bw + bw * 0.2} y={h - bh} width={bw * 0.6} height={bh} rx="3" fill={i === data.length - 1 ? color : `${color}66`} />;
      })}
      <line x1="0" x2={w} y1={h} y2={h} stroke="#C9CDDA" />
    </svg>
  );
}

function Dashboard({ locale }: P) {
  const kpis = [
    { l: tr(locale, "المبيعات هذا الشهر", "Revenue this month"), v: "1.24M", d: "+12%", ok: true },
    { l: tr(locale, "النقد المتاح", "Cash on hand"), v: "640K", d: "+8%", ok: true },
    { l: tr(locale, "الذمم المتأخرة", "Overdue receivables"), v: "86K", d: "−21%", ok: true },
  ];
  return (
    <Chrome locale={locale} app={tr(locale, "لوحة الإدارة", "Management dashboard")} wide>
      <div className="s-kpis">{kpis.map((k) => (
        <div key={k.l} className="s-kpi"><small>{k.l}</small><b>{k.v}</b><span className={k.ok ? "s-ok" : "s-warn"}>{k.d}</span></div>
      ))}</div>
      <div className="s-grid2">
        <div className="s-card">
          <b className="s-card-h">{tr(locale, "المبيعات الشهرية", "Monthly sales")}</b>
          <Bars data={[62, 70, 66, 81, 77, 90, 86, 95, 92, 104, 110, 124]} />
        </div>
        <div className="s-card">
          <b className="s-card-h">{tr(locale, "المبيعات حسب الفرع", "Sales by branch")}</b>
          <div className="s-donut-row">
            <svg viewBox="0 0 42 42" width="110" height="110" aria-hidden="true">
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#EEF0F6" strokeWidth="6" />
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#7C3AED" strokeWidth="6" strokeDasharray="46 54" strokeDashoffset="25" />
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#14B8A6" strokeWidth="6" strokeDasharray="30 70" strokeDashoffset="79" />
              <circle cx="21" cy="21" r="15.9" fill="none" stroke="#FF7A45" strokeWidth="6" strokeDasharray="24 76" strokeDashoffset="49" />
            </svg>
            <ul className="s-legend">
              <li><i style={{ background: "#7C3AED" }} />{tr(locale, "الرياض", "Riyadh")} <b>46%</b></li>
              <li><i style={{ background: "#14B8A6" }} />{tr(locale, "عمّان", "Amman")} <b>30%</b></li>
              <li><i style={{ background: "#FF7A45" }} />{tr(locale, "جدة", "Jeddah")} <b>24%</b></li>
            </ul>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

function Kanban({ locale }: P) {
  const cols = [
    { h: tr(locale, "جديد", "New"), n: 4, cards: [
      { t: tr(locale, "توريد أثاث مكتبي", "Office furniture supply"), v: "48,000", a: "SR", c: "#EC4899", tag: tr(locale, "حكومي", "Gov") },
      { t: tr(locale, "عقد نظافة سنوي", "Annual cleaning contract"), v: "18,000", a: "KH", c: "#3B82F6" },
    ] },
    { h: tr(locale, "عرض سعر", "Quoted"), n: 3, cards: [
      { t: tr(locale, "تجهيز فرع جدة", "Jeddah branch fit-out"), v: "130,000", a: "RM", c: "#14B8A6", tag: tr(locale, "أولوية", "Priority") },
      { t: tr(locale, "أجهزة نقاط بيع", "POS hardware"), v: "26,400", a: "SR", c: "#EC4899" },
    ] },
    { h: tr(locale, "تفاوض", "Negotiation"), n: 2, cards: [
      { t: tr(locale, "عقد صيانة سنوي", "Annual maintenance"), v: "22,500", a: "KH", c: "#3B82F6" },
    ] },
    { h: tr(locale, "تم الفوز", "Won"), n: 5, cards: [
      { t: tr(locale, "مستودع الدمام", "Dammam warehouse"), v: "96,000", a: "RM", c: "#14B8A6", tag: tr(locale, "فاتورة", "Invoiced") },
    ] },
  ];
  return (
    <Chrome locale={locale} app={tr(locale, "المبيعات", "Sales")} wide>
      <div className="s-kanban">
        {cols.map((c, i) => (
          <div key={c.h} className="s-col">
            <div className="s-col-h"><b>{c.h}</b><span>{c.n}</span></div>
            <div className="s-col-bar"><i style={{ width: `${40 + i * 18}%` }} /></div>
            {c.cards.map((k) => (
              <div key={k.t} className="s-kcard">
                <b>{k.t}</b>
                {k.tag && <span className="s-tag">{k.tag}</span>}
                <div className="s-kfoot"><span>{k.v}</span><span className="s-avatar" style={{ background: k.c }}>{k.a}</span></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Chrome>
  );
}

function Payroll({ locale }: P) {
  const rows = [
    [tr(locale, "أحمد سالم", "Ahmad Salem"), "30", "0", "8,450"],
    [tr(locale, "لينا حداد", "Lina Haddad"), "28", "4", "6,920"],
    [tr(locale, "عمر العتيبي", "Omar Alotaibi"), "30", "6", "7,300"],
    [tr(locale, "سارة الزعبي", "Sara Alzoubi"), "30", "0", "9,100"],
  ];
  return (
    <Chrome locale={locale} app={tr(locale, "الرواتب", "Payroll")} wide>
      <div className="s-split">
        <div>
          <div className="s-row-h"><b>{tr(locale, "مسير رواتب أكتوبر 2026", "October 2026 payroll")}</b><span className="s-pill ok">{tr(locale, "معتمد", "Approved")}</span></div>
          <table className="s-table">
            <thead><tr><th>{tr(locale, "الموظف", "Employee")}</th><th>{tr(locale, "أيام", "Days")}</th><th>{tr(locale, "إضافي", "OT h")}</th><th>{tr(locale, "الصافي", "Net")}</th></tr></thead>
            <tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <aside className="s-side">
          <b className="s-side-h">{tr(locale, "حماية الأجور", "Wage protection")}</b>
          <div className="s-upload">
            <span className="s-file">WPS_2026_10.csv</span>
            <div className="s-progress"><i style={{ width: "100%" }} /></div>
            <span className="s-ok">{tr(locale, "رُفع إلى مدد ✓", "Uploaded to Mudad ✓")}</span>
          </div>
          <div className="s-upload">
            <span className="s-file">{tr(locale, "ملف تحويل البنك", "Bank transfer file")}</span>
            <div className="s-progress"><i style={{ width: "100%" }} /></div>
            <span className="s-ok">{tr(locale, "جاهز للبنك ✓", "Ready for bank ✓")}</span>
          </div>
          <div className="s-mini-kpi"><small>{tr(locale, "إجمالي الصافي", "Total net")}</small><b>412,860</b><span className="s-muted">{tr(locale, "57 موظفاً", "57 employees")}</span></div>
        </aside>
      </div>
    </Chrome>
  );
}

function Phone({ locale, children }: P & { children: React.ReactNode }) {
  return (
    <div className="phone" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
  );
}

function PhoneAttendance({ locale }: P) {
  return (
    <div className="shot-phones">
      <Phone locale={locale}>
        <small className="p-muted">{tr(locale, "صباح الخير، لينا", "Good morning, Lina")}</small>
        <b className="p-time">08:02</b>
        <span className="p-loc">{tr(locale, "داخل نطاق فرع عمّان", "Inside Amman branch zone")}</span>
        <span className="p-check">{tr(locale, "تسجيل حضور", "Check in")}</span>
        <div className="p-list">
          <div><span>{tr(locale, "رصيد الإجازات", "Leave balance")}</span><b>14</b></div>
          <div><span>{tr(locale, "ساعات هذا الأسبوع", "Hours this week")}</span><b>31.5</b></div>
        </div>
      </Phone>
      <Phone locale={locale}>
        <b className="p-h">{tr(locale, "طلب إجازة", "Time off request")}</b>
        <div className="p-cal">{Array.from({ length: 28 }, (_, i) => <i key={i} className={i >= 15 && i <= 18 ? "on" : ""}>{i + 1}</i>)}</div>
        <div className="p-list">
          <div><span>{tr(locale, "النوع", "Type")}</span><b>{tr(locale, "سنوية", "Annual")}</b></div>
          <div><span>{tr(locale, "الأيام", "Days")}</span><b>4</b></div>
        </div>
        <span className="p-pill">{tr(locale, "بانتظار موافقة المدير", "Awaiting manager")}</span>
      </Phone>
    </div>
  );
}

function PhoneExpense({ locale }: P) {
  return (
    <div className="shot-phones">
      <Phone locale={locale}>
        <b className="p-h">{tr(locale, "مصروف جديد", "New expense")}</b>
        <div className="p-receipt">
          <b>{tr(locale, "محطة وقود الشمال", "North Fuel Station")}</b>
          <span>----------------</span>
          <span>{tr(locale, "بنزين 91", "Petrol 91")} · 210.00</span>
          <span>{tr(locale, "ضريبة", "VAT")} · 31.50</span>
          <b>{tr(locale, "الإجمالي", "Total")} 241.50</b>
        </div>
        <span className="p-pill ok">{tr(locale, "قُرئ تلقائياً ✓", "Read automatically ✓")}</span>
      </Phone>
      <Phone locale={locale}>
        <b className="p-h">{tr(locale, "مصروفاتي", "My expenses")}</b>
        <div className="p-list">
          <div><span>{tr(locale, "وقود", "Fuel")}</span><b className="p-ok">{tr(locale, "معتمد", "Approved")}</b></div>
          <div><span>{tr(locale, "ضيافة عميل", "Client meal")}</span><b className="p-warn">{tr(locale, "عند المالية", "At finance")}</b></div>
          <div><span>{tr(locale, "مواصلات", "Taxi")}</span><b className="p-ok">{tr(locale, "مدفوع", "Paid")}</b></div>
        </div>
        <span className="p-check">{tr(locale, "إضافة مصروف", "Add expense")}</span>
      </Phone>
    </div>
  );
}

function Inventory({ locale }: P) {
  const items = [
    { n: tr(locale, "كرسي مكتب", "Office chair"), q: 1240, max: 1500, c: "#14B8A6" },
    { n: tr(locale, "طاولة اجتماعات", "Meeting table"), q: 36, max: 300, c: "#FF7A45" },
    { n: tr(locale, "خزانة ملفات", "File cabinet"), q: 512, max: 800, c: "#14B8A6" },
    { n: tr(locale, "رف معدني", "Steel shelf"), q: 88, max: 600, c: "#F5B82E" },
  ];
  return (
    <Chrome locale={locale} app={tr(locale, "المخزون", "Inventory")} wide>
      <div className="s-split">
        <div className="s-card">
          <b className="s-card-h">{tr(locale, "الأرصدة · مستودع الرياض", "Stock · Riyadh warehouse")}</b>
          <div className="s-stock">
            {items.map((it) => (
              <div key={it.n}>
                <span>{it.n}</span>
                <div className="s-progress thin"><i style={{ width: `${(it.q / it.max) * 100}%`, background: it.c }} /></div>
                <b>{it.q.toLocaleString("en-US")}</b>
              </div>
            ))}
          </div>
          <div className="s-alert">{tr(locale, "طاولة اجتماعات أقل من الحد الأدنى · أُنشئ طلب شراء PO/0098", "Meeting table below minimum · PO/0098 created")}</div>
        </div>
        <aside className="s-side s-scan">
          <svg viewBox="0 0 120 50" width="100%" height="60" aria-hidden="true">
            {Array.from({ length: 38 }, (_, i) => <rect key={i} x={i * 3.1} y="0" width={i % 3 === 0 ? 2 : 1} height="42" fill="#14161f" />)}
            <line x1="0" x2="120" y1="21" y2="21" stroke="#EF4444" strokeWidth="1.2" />
          </svg>
          <b className="ltr">SKU-2210</b>
          <span>{tr(locale, "طاولة اجتماعات 8 أشخاص", "8-seat meeting table")}</span>
          <div className="s-mini-kpi"><small>{tr(locale, "استلام من المورد", "Receiving from vendor")}</small><b>+24</b><span className="s-ok">{tr(locale, "تم التحديث", "Updated")}</span></div>
        </aside>
      </div>
    </Chrome>
  );
}

function Helpdesk({ locale }: P) {
  return (
    <Chrome locale={locale} app={tr(locale, "دعم العملاء", "Helpdesk")} wide>
      <div className="s-split">
        <div className="s-tickets">
          {[
            { id: "#1882", t: tr(locale, "الطلب لم يصل بعد", "Order not delivered yet"), ch: "WhatsApp", sla: "0:42", hot: true },
            { id: "#1881", t: tr(locale, "طلب نسخة من الفاتورة", "Need invoice copy"), ch: "Email", sla: "3:10" },
            { id: "#1879", t: tr(locale, "استفسار عن الضمان", "Warranty question"), ch: "Web", sla: "5:55" },
            { id: "#1876", t: tr(locale, "تغيير عنوان التسليم", "Change delivery address"), ch: "WhatsApp", sla: "6:20" },
          ].map((k) => (
            <div key={k.id} className={`s-ticket ${k.hot ? "hot" : ""}`}>
              <span className="ltr">{k.id}</span><b>{k.t}</b><small>{k.ch}</small><span className="s-sla">{k.sla}</span>
            </div>
          ))}
        </div>
        <aside className="s-side s-wa">
          <b className="s-side-h">WhatsApp · #1882</b>
          <div className="s-bubble in">{tr(locale, "السلام عليكم، طلبي رقم 4471 لم يصل", "Hi, my order 4471 hasn't arrived")}</div>
          <div className="s-bubble out">{tr(locale, "أهلاً بك، الشحنة مع أرامكس وتصل اليوم. رقم التتبع 7731…", "Hello! It's with Aramex and arrives today. Tracking 7731…")}</div>
          <div className="s-bubble in">{tr(locale, "شكراً 🙏", "Thanks 🙏")}</div>
        </aside>
      </div>
    </Chrome>
  );
}

function Ai({ locale }: P) {
  return (
    <Chrome locale={locale} app={tr(locale, "المساعد", "Assistant")}>
      <div className="s-chat">
        <div className="s-bubble out">{tr(locale, "كم فاتورة لم تُعتمد هذا الشهر؟", "How many invoices are not cleared this month?")}</div>
        <div className="s-bubble in">
          {tr(locale, "3 فواتير بقيمة 18,450 ر.س، كلها بانتظار رقم ضريبي صحيح.", "3 invoices worth SAR 18,450, all waiting for a valid VAT number.")}
          <table className="s-table compact"><tbody>
            <tr><td className="ltr">INV/0412</td><td>9,200</td></tr>
            <tr><td className="ltr">INV/0418</td><td>6,750</td></tr>
            <tr><td className="ltr">INV/0421</td><td>2,500</td></tr>
          </tbody></table>
        </div>
        <div className="s-bubble out">{tr(locale, "ذكّر المحاسب بها", "Remind the accountant")}</div>
        <div className="s-bubble in">{tr(locale, "تم إنشاء مهمة بموعد غداً ✓", "Task created, due tomorrow ✓")}</div>
      </div>
    </Chrome>
  );
}

function Pos({ locale }: P) {
  const prods = [
    { n: tr(locale, "قهوة عربية", "Arabic coffee"), p: "12", c: "#F5B82E" },
    { n: tr(locale, "كرواسون", "Croissant"), p: "9", c: "#FF7A45" },
    { n: tr(locale, "عصير برتقال", "Orange juice"), p: "14", c: "#F59E0B" },
    { n: tr(locale, "ماء", "Water"), p: "3", c: "#3B82F6" },
    { n: tr(locale, "كيكة تمر", "Date cake"), p: "16", c: "#7C3AED" },
    { n: tr(locale, "لاتيه", "Latte"), p: "15", c: "#14B8A6" },
  ];
  return (
    <Chrome locale={locale} app={tr(locale, "نقاط البيع · فرع العليا", "POS · Olaya branch")} wide>
      <div className="s-split pos">
        <div className="s-prods">{prods.map((p) => (
          <div key={p.n} className="s-prod"><i style={{ background: p.c }} /><b>{p.n}</b><span>{p.p}</span></div>
        ))}</div>
        <aside className="s-side">
          <b className="s-side-h">{tr(locale, "الطلب", "Order")} #A-1043</b>
          <div className="s-lines">
            <div><span>2 × {tr(locale, "قهوة عربية", "Arabic coffee")}</span><b>24.00</b></div>
            <div><span>1 × {tr(locale, "كيكة تمر", "Date cake")}</span><b>16.00</b></div>
            <div><span>1 × {tr(locale, "لاتيه", "Latte")}</span><b>15.00</b></div>
          </div>
          <div className="s-total"><span>{tr(locale, "الإجمالي", "Total")}</span><b>55.00</b></div>
          <span className="s-pay">{tr(locale, "دفع · مدى", "Pay · mada")}</span>
        </aside>
      </div>
    </Chrome>
  );
}

function Store({ locale }: P) {
  const prods = [
    { n: tr(locale, "كرسي مكتب", "Office chair"), p: "450", c: "#7C3AED", s: tr(locale, "متوفر 1,240", "1,240 in stock") },
    { n: tr(locale, "مصباح مكتب", "Desk lamp"), p: "120", c: "#F5B82E", s: tr(locale, "متوفر 86", "86 in stock") },
    { n: tr(locale, "رف كتب", "Bookshelf"), p: "380", c: "#14B8A6", s: tr(locale, "متوفر 12", "12 in stock") },
  ];
  return (
    <Chrome locale={locale} app={tr(locale, "المتجر · مزامنة سلة", "Store · Salla sync")} wide>
      <div className="s-store">{prods.map((p) => (
        <div key={p.n} className="s-sprod">
          <div className="s-img" style={{ background: `${p.c}22` }}><i style={{ background: p.c }} /></div>
          <b>{p.n}</b><span>{p.p} {tr(locale, "ر.س", "SAR")}</span><small className="s-ok">{p.s}</small>
        </div>
      ))}</div>
      <div className="s-alert ok">{tr(locale, "طلب جديد #5521 من سلة · خُصم من المخزون · أُنشئت بوليصة SMSA", "New Salla order #5521 · stock deducted · SMSA waybill created")}</div>
    </Chrome>
  );
}

function Sign({ locale }: P) {
  return (
    <Chrome locale={locale} app={tr(locale, "التوقيع", "Sign")} wide>
      <div className="s-split">
        <div className="s-paper">
          <b className="s-doc-title-c">{tr(locale, "عقد تقديم خدمات", "Service Agreement")}</b>
          {Array.from({ length: 6 }, (_, i) => <span key={i} className="s-line" style={{ width: `${92 - (i % 3) * 14}%` }} />)}
          <div className="s-sigs">
            <div><small>{tr(locale, "الطرف الأول", "Party A")}</small><svg viewBox="0 0 120 40" width="120" height="40"><path d="M5 30c15-25 22 10 34-6s14 12 26-4 18 8 30-10" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round" /></svg></div>
            <div><small>{tr(locale, "الطرف الثاني", "Party B")}</small><span className="s-sign-here">{tr(locale, "وقّع هنا", "Sign here")}</span></div>
          </div>
        </div>
        <aside className="s-side">
          <b className="s-side-h">{tr(locale, "حالة التوقيع", "Signature status")}</b>
          <ol className="s-timeline">
            <li className="ok">{tr(locale, "أُرسل للعميل", "Sent to client")}<small>09:10</small></li>
            <li className="ok">{tr(locale, "فتح العميل العقد", "Client opened")}<small>09:14</small></li>
            <li>{tr(locale, "بانتظار التوقيع", "Awaiting signature")}<small>—</small></li>
          </ol>
        </aside>
      </div>
    </Chrome>
  );
}

function Campaign({ locale }: P) {
  return (
    <Chrome locale={locale} app={tr(locale, "التسويق", "Marketing")} wide>
      <div className="s-kpis">
        <div className="s-kpi"><small>{tr(locale, "أُرسلت", "Sent")}</small><b>4,820</b></div>
        <div className="s-kpi"><small>{tr(locale, "قُرئت", "Read")}</small><b>3,912</b><span className="s-ok">81%</span></div>
        <div className="s-kpi"><small>{tr(locale, "طلبات", "Orders")}</small><b>214</b><span className="s-ok">96,300</span></div>
      </div>
      <div className="s-grid2">
        <div className="s-card"><b className="s-card-h">{tr(locale, "التفاعل اليومي", "Daily engagement")}</b><Bars data={[20, 64, 88, 72, 51, 40, 33]} color="#EC4899" h={100} /></div>
        <div className="s-card s-wa">
          <div className="s-bubble in">{tr(locale, "عرض نهاية الأسبوع: خصم 20% على الأثاث المكتبي. اطلب الآن ←", "Weekend offer: 20% off office furniture. Order now →")}</div>
        </div>
      </div>
    </Chrome>
  );
}

export function Shot({ kind, locale }: { kind: ShotKind; locale: Locale }) {
  switch (kind) {
    case "invoice": return <Invoice locale={locale} />;
    case "dashboard": return <Dashboard locale={locale} />;
    case "kanban": return <Kanban locale={locale} />;
    case "payroll": return <Payroll locale={locale} />;
    case "phone": return <PhoneAttendance locale={locale} />;
    case "expense": return <PhoneExpense locale={locale} />;
    case "inventory": return <Inventory locale={locale} />;
    case "helpdesk": return <Helpdesk locale={locale} />;
    case "ai": return <Ai locale={locale} />;
    case "pos": return <Pos locale={locale} />;
    case "store": return <Store locale={locale} />;
    case "sign": return <Sign locale={locale} />;
    case "campaign": return <Campaign locale={locale} />;
  }
}
