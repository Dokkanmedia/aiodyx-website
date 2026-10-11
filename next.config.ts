import type { NextConfig } from "next";

/*
 * PAGES=1 builds a static copy for the GitHub Pages preview (served from /aiodyx-website):
 * no server, so no redirects and no contact API; images are served unoptimised.
 */
const pages = process.env.PAGES === "1";
const basePath = pages ? "/aiodyx-website" : "";

const nextConfig: NextConfig = pages
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_STATIC: "1" },
      images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
    }
  : {
      async redirects() {
        return [
          { source: "/", destination: "/ar", permanent: false },
          { source: "/:locale(ar|en)/savings", destination: "/:locale/start", permanent: true },
        ];
      },
    };

export default nextConfig;
