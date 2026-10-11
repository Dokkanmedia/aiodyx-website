/* Prefixes files from /public with the base path when the site is served from a sub-folder (GitHub Pages preview). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => (p.startsWith("/") ? `${BASE_PATH}${p}` : p);
