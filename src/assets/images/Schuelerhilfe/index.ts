import { collectResponsive } from '../responsive';

// Auto-collects every AVIF here with its size variants. Add an image by
// dropping the files in (foo.avif + foo-400/-800/-1200.avif) and mapping a key.
const sources = collectResponsive(
  import.meta.glob('./*.avif', { eager: true, import: 'default' }),
);

export const SchuelerhilfeImages = {
  Plot: sources['plot'],
  Thumbnail: sources['thumbnail'],
  Drehbuch1: sources['drehbuch_01'],
  Drehbuch2: sources['drehbuch_02'],
  Drehbuch3: sources['drehbuch_03'],
  Szene1: sources['szene_01'],
  Szene2: sources['szene_02'],
  Szene3: sources['szene_03'],
  Szene4: sources['szene_04'],
  Szene5: sources['szene_05'],
  Szene6: sources['szene_06'],
  Szene7: sources['szene_07'],
  Szene8: sources['szene_08'],
  Schluesselmoment1: sources['schluesselmoment_01'],
  Schluesselmoment2: sources['schluesselmoment_02'],
  Schluesselmoment3: sources['schluesselmoment_03'],
  Schluesselmoment4: sources['schluesselmoment_04'],
};
