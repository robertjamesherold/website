import { Images } from '@/assets/images';
import type { ResponsiveSource, ThemedSource } from '@/components/ResponsiveImage';

export type Work = {
  route: string;
  href: string;
  year: string;
  context: string;
  title: string;
  blurb: string;
    textColor: string;
    border: string;
  image: { source: ResponsiveSource | ThemedSource; alt: string; objectPosition?: string };
  disciplines: string[];
  locked?: boolean;
};

const works: Work[] = [
  {
    route: 'codescanner',
    href: '/codescanner',
    year: '2026',
    context: 'Bachelorarbeit · IU Internationale Hochschule',
    title: 'CodeScanner',
        textColor: 'text-text-1',
        border: 'border-text-1',
    blurb:
      'Ein KI-gestütztes Analyse-Tool für mehr Vertrauen in KI-generierten Code – vom Research bis zum vollständigen Designsystem.',
    disciplines: ['UX/UI Design', 'Research', 'Designsystem', 'Visual Design'],
    image: {
      source: Images.HomeImages.CodeScanner,
      alt: 'CodeScanner Dashboard auf MacBook',
      objectPosition: 'center',
    },
  },
  {
    route: 'villa-oliveto',
    href: '/villa-oliveto',
    year: '2024',
    context: 'Studienprojekt · Product & Social Media Design',
    title: 'Villa Oliveto',
    blurb:
      'Italienische Familientradition aus 6 Generationen, modern erzählt. Markenwelt über Produkt, Web und Social Media hinweg.',
    disciplines: ['Brand Design', 'Webdesign', 'Social Media', 'Packaging'],
    textColor: 'text-black',
    border: 'border-black',
    image: {
      source: Images.HomeImages.Oliveto,
      alt: 'Villa Oliveto – Cover-Slide mit Logo und Flasche',
      objectPosition: 'center',
    },
  },
  {
    route: 'schuelerhilfe',
    href: '/schuelerhilfe',
    year: '2025',

    context: 'Studienprojekt · Design audio-visueller Medien',
    title: 'Träume werden wahr',
    blurb:
      'Ein 30-Sekunden-Werbespot für die Schülerhilfe – von Plot über Drehbuch und Storyboard bis zum fertigen Animatic.',
    disciplines: ['Konzept & Drehbuch', 'Storyboard', 'Animation', 'Schnitt'],
    textColor: 'text-white',
    border: 'border-white',
    image: {
      source: Images.HomeImages.Schuelerhilfe,
      alt: 'Schülerhilfe – Animatic Schlüsselmoment',
      objectPosition: 'center',
    },
  },
];

export { works };