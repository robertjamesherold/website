import { collectThemedResponsive } from '../responsive';

// Auto-collects every AVIF in this folder and groups it into light/dark pairs
// with size variants. Images with a `_light`/`_dark` suffix become a themed
// pair; an image without a suffix becomes a single-mode source (used for both
// schemes). Add a new image by dropping the files in and mapping a key below.
const sources = collectThemedResponsive(
  import.meta.glob('./*.avif', { eager: true, import: 'default' }),
);

export const HomeImages = {
  Hero: sources['portrait'],
  Oliveto: sources['oliveto-thumbnail'],
  CodeScanner: sources['codescanner-thumbnail'],
  Schuelerhilfe: sources['schuelerhilfe-thumbnail'],
  Landscape: sources['landscape'],
};
