"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = ".sec-head, .feature, .icon-tile, .ind-photo-card, .text-cols > div, .benefit-list > div, .flow-steps li, .plat, .faq-list details, .story, .price-card, .value-row, .case-card, .office";

/* Fades sections in as they scroll into view. Content is fully visible without JS or with reduced motion. */
export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return; // already on screen: leave as is
      el.classList.add("rv");
      el.style.transitionDelay = `${(i % 4) * 60}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
  return null;
}
