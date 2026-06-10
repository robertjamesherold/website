import { Component } from '@/components';
import { Images } from '@/assets/images';
import { Caption } from '../components';

const szenen = [
  Images.SchuelerhilfeImages.Szene1,
  Images.SchuelerhilfeImages.Szene2,
  Images.SchuelerhilfeImages.Szene3,
  Images.SchuelerhilfeImages.Szene4,
  Images.SchuelerhilfeImages.Szene5,
  Images.SchuelerhilfeImages.Szene6,
  Images.SchuelerhilfeImages.Szene7,
  Images.SchuelerhilfeImages.Szene8,
];

export const Storyboard = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="03"
      label="STORYBOARD"
      title="Bildkomposition und Kameraführung"
      sub="Das Storyboard wurde frame-genau ausgearbeitet – nicht als grobe Skizze, sondern mit klaren Bildkompositionen, Kameraanweisungen und Übergangslogik. Pro Szene: Bildinhalt, Kamerabewegung, Voice-Over-Zuordnung, Übergang zur nächsten Szene."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12">
      {szenen.map((img, i) => (
        <figure key={i} className="rounded-md overflow-hidden border border-border-2 bg-grouped-1">
          <Component.ResponsiveImg
            image={img}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            alt={`Storyboard Szene ${i + 1}`}
            className="block w-full h-auto"
            style={{ aspectRatio: '16/9', objectFit: 'cover' }}
          />
          <figcaption className="mono text-[10px] tracking-[.22em] text-text-3 uppercase text-center px-2 py-2 border-t border-border-2">
            Szene {i + 1}
          </figcaption>
        </figure>
      ))}
    </div>

    <div className="mt-12 grid lg:grid-cols-[1fr_1fr] gap-10">
      <div>
        <h4 className="text-lg font-bold tracking-tightish mb-3">Übergangslogik</h4>
        <ul className="space-y-3 text-text-2 text-[15px] leading-relaxed pl-5 list-disc marker:text-primary">
          <li>Sanfte Überblendungen in den Traumsequenzen → Fluss, Rhythmus</li>
          <li>Maskierte Wipes zwischen den Berufen → Flow ohne harte Schnitte</li>
          <li>Harter Zoom-Punch beim Übergang zum Matheheft → emotionaler Bruch</li>
          <li>Langsamer Zoom-Out in der Nachhilfe-Szene → Auflösung, Ruhe</li>
        </ul>
      </div>
      <Caption>
        Jede Szene wurde mit Bildkomposition, Kamerabewegung und Übergangslogik
        dokumentiert. Die Übergänge folgen dem dramaturgischen Bogen.
      </Caption>
    </div>
  </section>
);
