"use client";
import { CoverArt } from "./CoverArt";
import Link from "next/link";
import { useState } from "react";

export type Card = { slug: string; href: string; title: string; excerpt: string; category: string; readMin: string; cover: string; kind: "shot" | "photo" | "doc"; accent: string; logos: string[] };

/* Article cards with category filter chips. */
export function LearnGrid({ cards, allLabel }: { cards: Card[]; allLabel: string }) {
  const cats = [...new Set(cards.map((c) => c.category))];
  const [cat, setCat] = useState<string | null>(null);
  const shown = cat ? cards.filter((c) => c.category === cat) : cards;
  return (
    <>
      <div className="chips-filter" role="group">
        <button type="button" aria-pressed={!cat} onClick={() => setCat(null)}>{allLabel}</button>
        {cats.map((c) => <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div className="cover-grid">
        {shown.map((c) => (
          <Link key={c.slug} href={c.href} className="cover-card" style={{ ["--accent" as string]: c.accent }}>
            <div className="cover-img"><CoverArt src={c.cover} kind={c.kind} accent={c.accent} logos={c.logos} sizes="(max-width: 900px) 100vw, 33vw" /></div>
            <div className="cover-body">
              <span className="cat-pill">{c.category}</span>
              <h3>{c.title}</h3>
              <p>{c.excerpt}</p>
              <span className="meta">{c.readMin}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
