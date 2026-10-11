import type { AppDetail } from "./types";
import accounting from "./accounting";
import crm_sales from "./crm-sales";
import inventory_purchase from "./inventory-purchase";
import hr from "./hr";
import attendance_payroll from "./attendance-payroll";
import projects from "./projects";
import manufacturing from "./manufacturing";
import helpdesk from "./helpdesk";
import business_intelligence from "./business-intelligence";
import ai_automation from "./ai-automation";
import point_of_sale from "./point-of-sale";
import ecommerce from "./ecommerce";
import expenses from "./expenses";
import documents_sign from "./documents-sign";
import marketing from "./marketing";
import fleet from "./fleet";

export const appDetails: Record<string, AppDetail> = Object.fromEntries(
  [accounting, crm_sales, inventory_purchase, hr, attendance_payroll, projects, manufacturing, helpdesk, business_intelligence, ai_automation, point_of_sale, ecommerce, expenses, documents_sign, marketing, fleet].map((d) => [d.slug, d]),
);
