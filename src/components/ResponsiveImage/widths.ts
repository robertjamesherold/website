/** The fixed AVIF variant widths every responsive image is exported at. */
export const RESPONSIVE_WIDTHS = [400, 800, 1200, 1600] as const;

export type ResponsiveWidth = (typeof RESPONSIVE_WIDTHS)[number];

/**
 * Build a `srcSet` string from variant URLs keyed by width.
 * Missing widths are skipped, so partial maps are fine.
 *
 * buildSrcSet({ 400: a, 800: b }) -> "a 400w, b 800w"
 */
export const buildSrcSet = (
  variants: Partial<Record<ResponsiveWidth, string>>,
): string =>
  RESPONSIVE_WIDTHS.filter((w) => variants[w])
    .map((w) => `${variants[w]} ${w}w`)
    .join(', ');
