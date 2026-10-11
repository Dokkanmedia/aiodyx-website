import { NextResponse } from "next/server";
import { apps } from "@/lib/content";

/*
 * Consultation requests from the contact form.
 * 1) If ODOO_URL, ODOO_DB, ODOO_LOGIN and ODOO_API_KEY are set, a CRM lead is created in that Odoo database.
 * 2) If CONTACT_WEBHOOK_URL is set, the request is also POSTed there as JSON.
 * Without either, requests are written to the server log only.
 */
type Lead = {
  name: string; phone: string; company: string; email: string; country: string; size: string;
  apps: string[]; message: string; locale: string; receivedAt: string;
};

async function rpc(url: string, service: string, method: string, args: unknown[]) {
  const res = await fetch(`${url.replace(/\/$/, "")}/jsonrpc`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: { service, method, args }, id: Date.now() }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.data?.message ?? data.error.message);
  return data.result;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

async function createOdooLead(lead: Lead) {
  const { ODOO_URL, ODOO_DB, ODOO_LOGIN, ODOO_API_KEY } = process.env;
  if (!ODOO_URL || !ODOO_DB || !ODOO_LOGIN || !ODOO_API_KEY) return null;
  const uid = await rpc(ODOO_URL, "common", "authenticate", [ODOO_DB, ODOO_LOGIN, ODOO_API_KEY, {}]);
  if (!uid) throw new Error("Odoo authentication failed");
  const appNames = lead.apps.map((s) => apps.find((a) => a.slug === s)?.name.ar ?? s);
  const country = { sa: "السعودية", jo: "الأردن", other: "دولة أخرى" }[lead.country] ?? lead.country;
  const description = [
    `<p><b>المصدر:</b> نموذج الموقع (${lead.locale})</p>`,
    `<p><b>الدولة:</b> ${esc(country)} · <b>عدد الموظفين:</b> ${esc(lead.size)}</p>`,
    appNames.length ? `<p><b>التطبيقات:</b> ${appNames.map(esc).join("، ")}</p>` : "",
    lead.message ? `<p><b>الرسالة:</b><br>${esc(lead.message).replace(/\n/g, "<br>")}</p>` : "",
  ].join("");
  return rpc(ODOO_URL, "object", "execute_kw", [ODOO_DB, uid, ODOO_API_KEY, "crm.lead", "create", [{
    name: `استشارة من الموقع: ${lead.company || lead.name}`,
    contact_name: lead.name,
    partner_name: lead.company || false,
    phone: lead.phone,
    email_from: lead.email || false,
    description,
  }]]);
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }
  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  if (name.length < 2 || phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "name_and_phone_required" }, { status: 422 });
  }

  const lead: Lead = {
    name: name.slice(0, 120),
    phone: phone.slice(0, 40),
    company: String(data.company ?? "").slice(0, 200),
    email: String(data.email ?? "").slice(0, 200),
    country: String(data.country ?? ""),
    size: String(data.size ?? ""),
    apps: Array.isArray(data.apps) ? data.apps.map(String).filter((s) => apps.some((a) => a.slug === s)) : [],
    message: String(data.message ?? "").slice(0, 4000),
    locale: String(data.locale ?? "ar"),
    receivedAt: new Date().toISOString(),
  };

  let delivered = false;
  try {
    const id = await createOdooLead(lead);
    if (id) { delivered = true; console.log("[contact] Odoo lead created", id); }
  } catch (e) {
    console.error("[contact] Odoo lead failed", e);
  }
  const hook = process.env.CONTACT_WEBHOOK_URL;
  if (hook) {
    const res = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(lead) }).catch(() => null);
    if (res?.ok) delivered = true;
  }
  if (!delivered) {
    if (process.env.ODOO_URL || hook) return NextResponse.json({ error: "forward_failed" }, { status: 502 });
    console.log("[contact] new lead (not forwarded, no ODOO_* or CONTACT_WEBHOOK_URL set)", lead);
  }
  return NextResponse.json({ ok: true });
}
