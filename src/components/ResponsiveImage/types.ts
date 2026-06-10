import type { ImgHTMLAttributes } from 'react';
import type { ResponsiveWidth } from './widths';

/**
 * A responsive image grouped as one object: the full-size fallback plus its
 * width-keyed variants. Produced by `collectResponsive` from the image folder.
 */
export type ResponsiveSource = {
  src: string;
  variants: Partial<Record<ResponsiveWidth, string>>;
};

/**
 * A pair of sources for light and dark color schemes. Both are optional: if
 * only one is provided, that one is used for both schemes (the component never
 * forces a missing mode). Produced by `collectThemedResponsive`.
 */
export type ThemedSource = {
  light?: ResponsiveSource;
  dark?: ResponsiveSource;
};

export type ResponsiveImgProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt'
> & {
  /** Always required for accessibility. */
  alt: string;
  /**
   * Preferred: a grouped source (`{ src, variants }`), or a themed pair
   * (`{ light, dark }`) that switches by `prefers-color-scheme`. When set,
   * both `src` and `srcSet` are derived automatically.
   */
  image?: ResponsiveSource | ThemedSource;
  /** Fallback / largest source. Ignored when `image` is provided. */
  src?: string;
  /** Width-keyed variant sources. Ignored when `image` is provided. */
  variants?: Partial<Record<ResponsiveWidth, string>>;
  /**
   * Opting out of the global lightbox/zoom behavior is the default — set
   * `zoomable` to keep the image interactive (omits `data-no-zoom`).
   */
  zoomable?: boolean;
};
