import { collectThemedResponsive } from '../responsive';
import type {
  ResponsiveSource,
  ThemedSource,
} from '@/components/ResponsiveImage';

// Auto-collects every AVIF here and groups it by base name into light/dark
// pairs with size variants (e.g. diagramm_light.avif + diagramm_light-400.avif
// + diagramm_dark.avif → { light, dark }). Source images live in ./_src and
// are converted to AVIF variants via ./_src/generate.sh.
const sources = collectThemedResponsive(
  import.meta.glob('./*.avif', { eager: true, import: 'default' }),
);

// `doubleDiamond` is special: it ships TWO art-directed compositions under one
// base name — a portrait diagram for narrow screens (the -400/-800/-1200
// variants) and a landscape diagram for wide screens (the unsuffixed full-size,
// stored as the 1600w variant). They are NOT one picture at different
// resolutions, so they must not share a srcSet (width descriptors describe
// pixels, not layout — a high-DPR phone would otherwise pull the landscape one).
// Split them into a portrait mobile source and a landscape desktop source so the
// section can art-direct them with <picture>.
const splitDouble = (
  pick: (s: ResponsiveSource) => ResponsiveSource,
): ThemedSource => {
  const src = sources['doubleDiamond'];
  return {
    light: src?.light && pick(src.light),
    dark: src?.dark && pick(src.dark),
  };
};

const doubleDiamondMobile = splitDouble((s) => ({
  src: s.variants[1200] ?? s.variants[800] ?? s.variants[400] ?? s.src,
  variants: { 400: s.variants[400], 800: s.variants[800], 1200: s.variants[1200] },
}));

const doubleDiamondDesktop = splitDouble((s) => ({
  src: s.src,
  variants: { 1600: s.variants[1600] ?? s.src },
}));

export const KiCodeImages = {
  Marktanalyse: sources['diagramm'],
  DoubleDiamond: doubleDiamondMobile,
  DoubleDiamondDesktop: doubleDiamondDesktop,
  Prototyp1: sources['Prototyp_01'],
  Prototyp2: sources['Prototyp_02'],
  Prototyp3: sources['Prototyp_03'],
  Prototyp4: sources['Prototyp_04'],
  Sichtbarkeit: sources['sichtbarkeit'],
  Erklaerbarkeit: sources['erklaerbarkeit'],
  Kontrolle: sources['kontrolle'],
};
