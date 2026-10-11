import type { Locale } from "@/lib/i18n";

/* Floating WhatsApp contact. Number: AIODYX Amman front desk (+962 7 7599 9908). */
export const WHATSAPP = "962775999908";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const text = encodeURIComponent(locale === "ar" ? "مرحباً، أريد استشارة عن نظام Odoo لشركتي" : "Hi, I'd like a consultation about Odoo for my company");
  return (
    <a className="wa-fab" href={`https://wa.me/${WHATSAPP}?text=${text}`} target="_blank" rel="noopener" aria-label={locale === "ar" ? "تواصل معنا على واتساب" : "Chat with us on WhatsApp"}>
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path fill="#fff" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.6 5.8 5 2.1.9 3 1 4 .8.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5l-.6-.3Z"/></svg>
    </a>
  );
}
