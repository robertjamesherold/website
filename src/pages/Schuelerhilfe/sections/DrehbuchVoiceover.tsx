import { Component } from '@/components';
import { Images } from '@/assets/images';

const drehbuchPages = [
  Images.SchuelerhilfeImages.Drehbuch1,
  Images.SchuelerhilfeImages.Drehbuch2,
  Images.SchuelerhilfeImages.Drehbuch3,
];

export const DrehbuchVoiceover = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="02"
      label="DREHBUCH & VOICE-OVER"
      title="Vom Konzept zum geschriebenen Wort"
      sub="Aus dem Plot wurde ein vollständiges Drehbuch im klassischen Drei-Spalten-Format: Szene, Beschreibung, Voice-Over. Jede Einstellung mit Kameraführung, Bildinhalt und gesprochener Zeile dokumentiert."
    />

    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start mt-12">
      <div>
        <p className="lede">
          Das Voice-Over ist als innerer Monolog des Mädchens gestaltet – nicht als
          Werbestimme, sondern als persönliche Erzählung, die den emotionalen Bogen trägt:
        </p>
        <blockquote className="mt-8 border-l-2 border-primary pl-6 py-5 pr-7 text-[17px] leading-relaxed text-text-2 bg-linear-to-r from-primary/10 to-transparent rounded-r-lg">
          „Wenn ich einmal groß bin, dann werde ich vielleicht mal Ärztin … oder Pilotin
          … vielleicht Designerin … oder Architektin. Oder vielleicht flieg ich auch zum
          Mond und werde Astronautin. Aber das hält mich dabei meine Träume zu erreichen
          nicht ab."
        </blockquote>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        {drehbuchPages.map((img, i) => (
          <div key={i} className="rounded-md overflow-hidden border border-border-2 bg-grouped-1">
            <Component.ResponsiveImg
              image={img}
              sizes="(min-width: 1024px) 18vw, 33vw"
              alt={`Drehbuch Seite ${i + 1}`}
              className="block w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
