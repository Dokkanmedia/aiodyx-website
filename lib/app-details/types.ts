import type { L } from "../i18n";

/* Long-form content for an app's detail page. Every string is bilingual. */
export type AppDetail = {
  slug: string;
  /** 4 concrete gains, e.g. { value: "3 أيام", label: "أسرع في إقفال الشهر", text: one sentence on how } */
  benefits: { value: L; label: L; text: L }[];
  /** short narrative shown next to the photo: how the work looks before and after */
  story: { title: L; before: L; after: L };
  /** 5 ordered steps showing the end-to-end flow inside the app */
  workflow: { title: L; text: L }[];
  /** 6 detailed feature sections, each with 3–4 points */
  sections: { title: L; text: L; points: L[] }[];
  /** 3 roles in the company and what each one gains */
  roles: { role: L; gain: L }[];
  /** 4 before/after pairs */
  compare: { before: L; after: L }[];
  /** 5 frequently asked questions */
  faq: { q: L; a: L }[];
};
