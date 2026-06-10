import { Component } from '@/components';
import { Images } from '@/assets/images';

const momente = [
  Images.SchuelerhilfeImages.Schluesselmoment1,
  Images.SchuelerhilfeImages.Schluesselmoment2,
  Images.SchuelerhilfeImages.Schluesselmoment3,
  Images.SchuelerhilfeImages.Schluesselmoment4,
];

export const AnimationUmsetzung = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="04"
      label="ANIMATION & UMSETZUNG"
      title="Aus dem Storyboard wird ein Spot"
      sub="Aus dem Storyboard entstand das fertige Animatic – mit eigens gezeichneten Figuren, gestalteten Hintergründen, Voice-Over (KI-generiert), Sound-Effekten und orchestralem Score. 30 Sekunden, 8 Szenen, eine durchgängige Charakterführung."
    />

    <p className="lede max-w-275 mt-8">
      Die Animation arbeitet bewusst mit Standbild-Kompositionen plus Kamera-Moves – statt
      aufwändiger Charakteranimation. Das hat zwei Gründe: Erstens passt es zum
      Werbespot-Tempo (kurze, prägnante Bilder), zweitens lenkt es nicht vom Voice-Over ab.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10">
      {momente.map((img, i) => (
        <figure key={i} className="rounded-md overflow-hidden border border-border-2 bg-grouped-1">
          <Component.ResponsiveImg
            image={img}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            alt={`Animatic – Schlüsselmoment ${i + 1}`}
            className="block w-full h-auto"
            style={{ aspectRatio: '16/9', objectFit: 'cover' }}
          />
          <figcaption className="mono text-[10px] tracking-[.22em] text-text-3 uppercase text-center px-2 py-2 border-t border-border-2">
            Moment {i + 1}
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);
