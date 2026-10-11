"use client";
import { useEffect, useState } from "react";

/* Thin bar under the nav that fills as you read the article. */
export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = document.querySelector(".prose");
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      setP(Math.min(1, Math.max(0, -r.top / Math.max(1, total))));
    };
    on(); window.addEventListener("scroll", on, { passive: true }); window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  return <div className="read-progress" aria-hidden="true"><i style={{ transform: `scaleX(${p})` }} /></div>;
}

/* Table of contents that highlights the section in view. */
export function Toc({ items, title }: { items: { id: string; label: string }[]; title: string }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      const vis = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (vis[0]) setActive(vis[0].target.id);
    }, { rootMargin: "-20% 0px -65% 0px" });
    items.forEach((i) => { const el = document.getElementById(i.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [items]);
  return (
    <nav className="toc" aria-label={title}>
      <b>{title}</b>
      <ol>{items.map((i, n) => (
        <li key={i.id} className={active === i.id ? "on" : ""}><a href={`#${i.id}`}><span>{String(n + 1).padStart(2, "0")}</span>{i.label}</a></li>
      ))}</ol>
    </nav>
  );
}

/* A checklist readers can tick; progress is kept in this browser only. */
export function Checklist({ id, items, labels }: { id: string; items: string[]; labels: { done: string; reset: string } }) {
  const key = `aiodyx-check-${id}`;
  const [done, setDone] = useState<boolean[]>(() => items.map(() => false));
  useEffect(() => {
    try { const v = JSON.parse(localStorage.getItem(key) ?? "null"); if (Array.isArray(v) && v.length === items.length) setDone(v); } catch {}
  }, [key, items.length]);
  const save = (v: boolean[]) => { setDone(v); try { localStorage.setItem(key, JSON.stringify(v)); } catch {} };
  const n = done.filter(Boolean).length;
  return (
    <div className="checklist">
      <div className="checklist-head">
        <span>{n} / {items.length} {labels.done}</span>
        <div className="checklist-bar"><i style={{ width: `${(n / items.length) * 100}%` }} /></div>
        {n > 0 && <button type="button" onClick={() => save(items.map(() => false))}>{labels.reset}</button>}
      </div>
      {items.map((t, i) => (
        <label key={i} className={done[i] ? "done" : ""}>
          <input type="checkbox" checked={done[i]} onChange={() => save(done.map((d, k) => (k === i ? !d : d)))} />
          <span>{t}</span>
        </label>
      ))}
    </div>
  );
}

/* Copy link + share on WhatsApp. */
export function ShareBar({ title, labels }: { title: string; labels: { copy: string; copied: string; share: string } }) {
  const [ok, setOk] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(location.href); setOk(true); setTimeout(() => setOk(false), 1800); } catch { /* clipboard blocked */ }
  };
  return (
    <div className="share">
      <button type="button" onClick={copy}>{ok ? labels.copied : labels.copy}</button>
      <a href={`https://wa.me/?text=${encodeURIComponent(title + " ")}`} onClick={(e) => { e.currentTarget.href = `https://wa.me/?text=${encodeURIComponent(title + " " + location.href)}`; }} target="_blank" rel="noopener">{labels.share}</a>
    </div>
  );
}
