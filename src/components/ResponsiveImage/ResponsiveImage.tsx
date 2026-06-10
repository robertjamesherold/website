import { hooks } from '@/hooks';
import type { ResponsiveImgProps, ResponsiveSource } from './types';
import { buildSrcSet } from './widths';

/**
 * Thin <img> wrapper that centralizes the responsive-image boilerplate.
 *
 * Pass a grouped `image={{ src, variants }}` and the `srcSet` is generated
 * automatically. Pass a themed pair `image={{ light, dark }}` and it follows
 * the active theme (incl. a manual override from the navbar toggle) — if only
 * one mode is provided, that one is used for both (the other is never forced).
 *
 * Project defaults (`decoding="async"`, lazy loading, `data-no-zoom`) are
 * applied and remain overridable.
 */
export const ResponsiveImg = ({
  image,
  src,
  alt,
  variants,
  srcSet,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  zoomable = false,
  ...rest
}: ResponsiveImgProps) => {
  const noZoom = zoomable ? undefined : '';
  const { isDark } = hooks.useTheme();

  // Themed pair: pick the source that matches the active theme. A missing mode
  // falls back to the other, so a lone light/dark image is never forced.
  if (image && ('light' in image || 'dark' in image)) {
    const chosen = isDark
      ? (image.dark ?? image.light)
      : (image.light ?? image.dark);
    if (!chosen) return null;

    return (
      <img
        src={chosen.src}
        alt={alt}
        srcSet={buildSrcSet(chosen.variants)}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        data-no-zoom={noZoom}
        {...rest}
      />
    );
  }

  // Single grouped source, or direct src/variants/srcSet props.
  const single = image as ResponsiveSource | undefined;
  const resolvedSrc = single?.src ?? src;
  const resolvedVariants = single?.variants ?? variants;

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      srcSet={resolvedVariants ? buildSrcSet(resolvedVariants) : srcSet}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      data-no-zoom={noZoom}
      {...rest}
    />
  );
};
