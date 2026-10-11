#!/bin/sh
# Static build for the GitHub Pages preview -> ./out
# The contact API needs a server, so it is moved aside for this build only.
set -e
cd "$(dirname "$0")/.."
mv app/api .api-off
trap 'mv .api-off app/api' EXIT
rm -rf out .next
PAGES=1 SITE_URL=https://dokkanmedia.github.io/aiodyx-website npx next build
touch out/.nojekyll
cat > out/index.html <<'HTML'
<!doctype html><html lang="ar"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=/aiodyx-website/ar/"><link rel="canonical" href="/aiodyx-website/ar/"><title>AIODYX</title></head><body><a href="/aiodyx-website/ar/">AIODYX</a></body></html>
HTML
[ -f out/404.html ] || cp out/index.html out/404.html
echo "static site ready in ./out"
