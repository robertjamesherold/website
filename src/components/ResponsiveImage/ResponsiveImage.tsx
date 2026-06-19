import { hooks } from '@/hooks';
import type {
  ResponsiveImgProps,
  ResponsiveSource,
  ThemedSource,
} from './types';
import { buildSrcSet } from './widths';

/**
 * Thin <img> wrapper that centralizes the responsive-image boilerplate.
 *
 * Pass a grouped `image={{ src, variants }}` and the `srcSet` is generated
 * automatically. Pass a themed pair `image={{ light, dark }}` and it follows
 * the active theme (incl. a manual override from the navbar toggle) — if only
 * one mode is provided, that one is used for both (the other is never forced).
 *
 * Art direction: pass `desktopImage` to serve a genuinely *different*
 * composition (not just a larger crop) above `desktopMedia`. This renders a
 * <picture> so the choice is driven by the viewport via a media query, not by
 * the device pixel ratio — width descriptors alone can't tell a narrow viewport
 * apart from a low-DPR one, so a high-DPR phone would otherwise pull the
 * desktop-sized variant.
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
  desktopImage,
  desktopMedia = '(min-width: 768px)',
  ...rest
}: ResponsiveImgProps) => {
  const noZoom = zoomable ? undefined : '';
  const { isDark } = hooks.useTheme();

  // Resolve any accepted `image` shape (themed pair or grouped source) down to
  // the concrete src/variants for the active theme.
  const resolve = (
    img: ResponsiveSource | ThemedSource | undefined,
  ): ResponsiveSource | undefined => {
    if (!img) return undefined;
    if ('light' in img || 'dark' in img) {
      const themed = img as ThemedSource;
      return isDark
        ? (themed.dark ?? themed.light)
        : (themed.light ?? themed.dark);
    }
    return img as ResponsiveSource;
  };

  const base = resolve(image);
  const resolvedSrc = base?.src ?? src;
  const resolvedVariants = base?.variants ?? variants;
  const resolvedSrcSet = resolvedVariants
    ? buildSrcSet(resolvedVariants)
    : srcSet;

  const img = (
    <img
      src={resolvedSrc}
      alt={alt}
      srcSet={resolvedSrcSet}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      data-no-zoom={noZoom}
      {...rest}
    />
  );

  // No art direction → plain <img>.
  const desktop = resolve(desktopImage);
  if (!desktop) return img;

  // Art direction: the desktop composition is chosen by viewport width, while
  // the <img> stays the mobile fallback (and keeps resolution-based srcSet).
  return (
    <picture>
      <source
        media={desktopMedia}
        srcSet={buildSrcSet(desktop.variants) || undefined}
        sizes={sizes}
      />
      {img}
    </picture>
  );
};
