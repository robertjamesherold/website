import { collectThemedResponsive } from '../responsive';

// Auto-collects every AVIF here and groups it by base name into light/dark
// pairs with size variants (e.g. diagramm_light.avif + diagramm_light-400.avif
// + diagramm_dark.avif → { light, dark }). Source images live in ./_src and
// are converted to AVIF variants via ./_src/generate.sh.
const sources = collectThemedResponsive(
  import.meta.glob('./*.avif', { eager: true, import: 'default' }),
);

export const KiCodeImages = {
  Marktanalyse: sources['diagramm'],
  DoubleDiamond: sources['doubleDiamond'],
  Prototyp1: sources['Prototyp_01'],
  Prototyp2: sources['Prototyp_02'],
  Prototyp3: sources['Prototyp_03'],
  Prototyp4: sources['Prototyp_04'],
  Sichtbarkeit: sources['sichtbarkeit'],
  Erklaerbarkeit: sources['erklaerbarkeit'],
  Kontrolle: sources['kontrolle'],
};
