import type { ThemedSource } from '@/components/ResponsiveImage';
import { Component } from '@/components';
import { Images } from '@/assets/images';

type Circle = { label: string; image: ThemedSource };

const circles: Circle[] = [
  { label: 'Sichtbarkeit', image: Images.KiCodeImages.Sichtbarkeit },
  { label: 'Erklärbarkeit', image: Images.KiCodeImages.Erklaerbarkeit },
  { label: 'Kontrolle', image: Images.KiCodeImages.Kontrolle },
];

export const VertrauenKalibrieren = () => (
  <section className="section-y container-x reveal" data-node-id="88:9483">
    <Component.SectionHeading
      num="02"
      label="Forschungsgegenstand"
      title="Vertrauen kalibrieren"
      sub="Kein Tool für bessere Prompts — sondern ein Designkonzept, das KI-Output sichtbar, erklärbar und kontrollierbar macht."
    />

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-16 sm:mt-20">
      {circles.map((c) => (
        <Component.ResponsiveImg
          key={c.label}
          image={c.image}
          sizes="(min-width: 1024px) 30vw, 33vw"
          alt={`Vertrauensprinzip „${c.label}“`}
          className="w-full h-auto"
        />
      ))}
    </div>
  </section>
);
