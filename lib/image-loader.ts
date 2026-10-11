/* next/image loader for the static GitHub Pages build: images are served as-is, under the base path. */
export default function loader({ src }: { src: string; width: number; quality?: number }) {
  return src.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src;
}
