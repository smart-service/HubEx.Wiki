#!/usr/bin/env bash
# Builds the wiki from the current checkout and atomically swaps it live.
# Run from the repository root (this is what azure-pipelines.yml does).
#
# Layout on the server:
#   $SITE_ROOT/releases/<timestamp>/   one directory per build
#   $SITE_ROOT/current                 symlink nginx actually serves — swapped last
#
# Safety property: every step before the symlink swap can fail (set -e stops
# the script) without touching the live site — the old release just stays up.
set -euo pipefail

SITE_ROOT="${SITE_ROOT:-/var/www/wiki.hubex.ru}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"
TIMESTAMP="$(date +%Y%m%d%H%M%S)"
RELEASE_DIR="$SITE_ROOT/releases/$TIMESTAMP"

echo "==> Installing tooling dependencies"
npm ci

echo "==> Validating front matter (full corpus)"
node scripts/validate-front-matter.js $(git ls-files 'docs/FAQ/RU/**/*.md')

echo "==> Installing Ruby gems"
bundle install

echo "==> Building Jekyll site"
rm -rf _site
bundle exec jekyll build -d _site

echo "==> Indexing with Pagefind"
npx pagefind --site _site

echo "==> Publishing release $TIMESTAMP"
mkdir -p "$SITE_ROOT/releases"
mv _site "$RELEASE_DIR"
ln -sfn "$RELEASE_DIR" "$SITE_ROOT/current.tmp"
mv -Tf "$SITE_ROOT/current.tmp" "$SITE_ROOT/current"

echo "==> Pruning old releases (keeping last $KEEP_RELEASES)"
cd "$SITE_ROOT/releases"
ls -1t | tail -n "+$((KEEP_RELEASES + 1))" | xargs -r rm -rf --

echo "==> Done. Live release: $RELEASE_DIR"
