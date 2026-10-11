import Image from "next/image";

/* Real screenshots captured from an Odoo 19 demo database (Arabic UI, fictional company). */
export const odooShots = new Set([
  "accounting", "attendance-payroll", "business-intelligence", "crm-sales", "expenses", "fleet",
  "hr", "inventory-purchase", "manufacturing", "marketing", "projects", "purchase", "sales",
  "point-of-sale", "ecommerce",
]);

export function OdooShot({ name, alt, priority = false }: { name: string; alt: string; priority?: boolean }) {
  return (
    <figure className="oshot">
      <div className="oshot-bar" aria-hidden="true"><i /><i /><i /><span>aiodyx.odoo.com</span></div>
      <Image src={`/odoo/${name}.jpg`} width={1800} height={1075} alt={alt} priority={priority}
        sizes="(max-width: 960px) 100vw, 60vw" />
    </figure>
  );
}
