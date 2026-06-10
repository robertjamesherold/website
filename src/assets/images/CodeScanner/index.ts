import { collectThemedResponsive } from '../responsive';

// Auto-collects every AVIF here and groups it by base name into light/dark
// pairs with size variants (e.g. kontext_light.avif + kontext_light-400.avif
// + kontext_dark.avif → { light, dark }). Add an image by dropping the files
// in and mapping a key to its base filename below.
const sources = collectThemedResponsive(
  import.meta.glob('./*.avif', { eager: true, import: 'default' }),
);

export const CodeScannerImages = {
  Hero1: sources['hero-01'],
  Hero2: sources['hero-02'],
  Hero3: sources['hero-03'],
  Iteration1: sources['iteration-01'],
  Iteration2: sources['iteration-02'],
  Iteration3: sources['iteration-03'],
  Kontext: sources['kontext'],
  Methodik: sources['methodik'],
  Prototyp1: sources['prototyp-01'],
  Prototyp2: sources['prototyp-02'],
  Prototyp3: sources['prototyp-03'],
  Prototyp4: sources['prototyp-04'],
  Sidebar: sources['sidebar'],
  Topbar: sources['topbar'],
  Alex: sources['alex'],
  Sarah: sources['sarah'],
};
