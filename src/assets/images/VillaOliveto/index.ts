import { collectResponsive } from '../responsive';

// Auto-collects every AVIF here with its size variants. Add an image by
// dropping the files in (foo.avif + foo-400/-800/-1200.avif) and mapping a key.
const sources = collectResponsive(
  import.meta.glob('./*.avif', { eager: true, import: 'default' }),
);

export const VillaOlivetoImages = {
  Thumbnail: sources['thumbnail'],
  Bottle: sources['bottle'],
  GesundesKreuz: sources['gesundes-kreuz'],
  QualitatsKreuz: sources['qualitats-kreuz'],
  Traditionale: sources['traditionale'],
  Basilikum: sources['basilikum'],
  Knoblauch: sources['knoblauch'],
  Website: sources['website'],
  Instagram: sources['instagram'],
  SocialsQualitat1: sources['socials-qualitat_1'],
  SocialsQualitat2: sources['socials-qualitat_2'],
  SocialsQualitat3: sources['socials-qualitat_3'],
  SocialsRecept1: sources['socials-recept_1'],
  SocialsRecept2: sources['socials-recept_2'],
  SocialsRecept3: sources['socials-recept_3'],
  SocialsSort1: sources['socials-sort_1'],
  SocialsSort2: sources['socials-sort_2'],
  SocialsSort3: sources['socials-sort_3'],
};
