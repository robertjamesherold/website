import {
  RESPONSIVE_WIDTHS,
  type ResponsiveWidth,
  type ResponsiveSource,
  type ThemedSource,
} from '@/components/ResponsiveImage';

const LARGEST = RESPONSIVE_WIDTHS[RESPONSIVE_WIDTHS.length - 1];

/**
 * Groups a flat map of imported image URLs into responsive sources, keyed by
 * base filename. The `-<width>` suffix is parsed automatically; the unsuffixed
 * file is treated as the full-size original (and the largest srcSet entry).
 *
 * Feed it a Vite glob:
 *   collectResponsive(
 *     import.meta.glob('./*.avif', { eager: true, import: 'default' })
 *   )
 *
 * Files `portrait.avif`, `portrait-400.avif`, `portrait-800.avif`
 *   -> { portrait: { src: <1600>, variants: { 1600, 400, 800 } } }
 */
export const collectResponsive = (
  modules: Record<string, unknown>,
): Record<string, ResponsiveSource> => {
  const sources: Record<string, ResponsiveSource> = {};

  for (const [path, url] of Object.entries(modules)) {
    // Normalize to NFC so non-ASCII keys (e.g. umlauts) match string literals
    // regardless of how the filesystem stored them (macOS uses NFD).
    const file = path.split('/').pop()!.replace(/\.[^.]+$/, '').normalize('NFC');
    const match = file.match(/^(.+)-(\d+)$/);
    const base = match ? match[1] : file;
    const width = (match ? Number(match[2]) : LARGEST) as ResponsiveWidth;

    const entry = (sources[base] ??= { src: '', variants: {} });
    entry.variants[width] = url as string;
    if (!match) entry.src = url as string;
  }

  return sources;
};

/**
 * Like `collectResponsive`, but additionally groups `_light` / `_dark`
 * filename suffixes into themed pairs, keyed by the base name without the
 * suffix. A file with no mode suffix is stored as `light` (so it still works
 * as a single-mode image).
 *
 * Files `kontext_light.avif`, `kontext_light-400.avif`, `kontext_dark.avif`, …
 *   -> { kontext: { light: { src, variants }, dark: { src, variants } } }
 */
export const collectThemedResponsive = (
  modules: Record<string, unknown>,
): Record<string, ThemedSource> => {
  const flat = collectResponsive(modules); // keyed by e.g. 'kontext_dark'
  const themed: Record<string, ThemedSource> = {};

  for (const [key, source] of Object.entries(flat)) {
    const match = key.match(/^(.+)_(light|dark)$/);
    const base = match ? match[1] : key;
    const mode = (match ? match[2] : 'light') as 'light' | 'dark';
    (themed[base] ??= {})[mode] = source;
  }

  return themed;
};
