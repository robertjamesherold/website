#!/usr/bin/env bash
# Converts source images in this folder (_src/) into responsive AVIF variants
# in the parent KiCode/ image folder.
#
# Source naming:  <name>_<light|dark>.<png|jpg|jpeg|webp>
#   e.g.  marktanalyse_light.png, marktanalyse_dark.png,
#         double-diamond_light.png, double-diamond_dark.png
#
# Output (picked up automatically by ../index.ts):
#   <name>_<scheme>.avif        (full, ≤1600px wide)
#   <name>_<scheme>-1200.avif
#   <name>_<scheme>-800.avif
#   <name>_<scheme>-400.avif
#
# Usage:  bash src/assets/images/KiCode/_src/generate.sh
set -euo pipefail
cd "$(dirname "$0")"
out=".."
shopt -s nullglob nocaseglob

for src in *.png *.jpg *.jpeg *.webp *.tif *.tiff; do
  [ -e "$src" ] || continue
  name="$(basename "${src%.*}")"
  # Detail-heavy diagrams (thin lines, small labels) need higher quality;
  # UI screenshots look fine at 75.
  case "$name" in
    diagramm_*|doubleDiamond_*) q=90 ;;
    *) q=75 ;;
  esac
  magick "$src" -resize '1600x>' -quality "$q" "$out/${name}.avif"
  for w in 1200 800 400; do
    magick "$src" -resize "${w}x>" -quality "$q" "$out/${name}-${w}.avif"
  done
  echo "✓ ${name}: base + 1200/800/400 (q$q)"
done

echo "Done. AVIF variants written to KiCode/"
