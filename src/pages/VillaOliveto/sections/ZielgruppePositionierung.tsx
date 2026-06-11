import { Component } from '@/components';
import { Images } from '@/assets/images';
import { Caption } from '../components';

const krezDiagrams = [
  { img: Images.VillaOlivetoImages.GesundesKreuz, label: 'Exklusiv × Gesund', alt: 'Positionierungsmatrix: Exklusiv vs. Gesund – Villa Oliveto im oberen rechten Quadranten' },
  { img: Images.VillaOlivetoImages.QualitatsKreuz, label: 'Qualität × Design', alt: 'Positionierungsmatrix: Qualität vs. Design – Villa Oliveto im oberen rechten Quadranten' },
];

export const ZielgruppePositionierung = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="02"
      label="ZIELGRUPPE & POSITIONIERUNG"
      title="Marko & Silvia – zwei Wege, eine Marke"
      sub="Aus der strategischen Analyse entstanden zwei Personas, die das Käuferspektrum abdecken."
    />

    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-12">
      <div className="card-base flex flex-col gap-4 p-7">
        <div className="mono text-[11px] tracking-[.18em] text-primary uppercase">Persona 01</div>
        <h3 className="text-2xl font-bold tracking-tight">Marko</h3>
        <p className="text-text-2 text-[15px] leading-relaxed">
          Lifestyle-orientierter Genießer mit hohem Lebensstandard. Bereit, für Qualität
          mehr zu bezahlen, sofern Optik und Geschmack überzeugen.
        </p>
      </div>
      <div className="card-base flex flex-col gap-4 p-7">
        <div className="mono text-[11px] tracking-[.18em] text-primary uppercase">Persona 02</div>
        <h3 className="text-2xl font-bold tracking-tight">Silvia</h3>
        <p className="text-text-2 text-[15px] leading-relaxed">
          Sterneköchin – fachlich anspruchsvoll. Will durch Authentizität und Qualität
          überzeugt werden, nicht durch Marketing.
        </p>
      </div>
    </div>

    <div className="mt-16 sm:mt-20">
      <p className="lede max-w-275">
        Beide Personas teilen einen Anspruch: kein Standard. Daraus ergab sich die
        Positionierung in zwei Achsen-Diagrammen – zur Konkurrenz (Farchioni, Ölmühle Solling,
        Bio Kontor) deutlich abgehoben in den Quadranten „hochwertiges Design × hohe Qualität"
        sowie „exklusiv × gesund".
      </p>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">
        {krezDiagrams.map((d) => (
          <figure key={d.label} className="flex flex-col gap-4">
            <div className="rounded-md overflow-hidden border border-border-2 bg-grouped-1">
              <Component.ResponsiveImg
                image={d.img}
                sizes="(min-width: 640px) 45vw, 100vw"
                alt={d.alt}
                className="block w-full h-auto"
              />
            </div>
            <figcaption className="mono text-[11px] tracking-[.22em] text-text-3 uppercase text-center">
              {d.label}
            </figcaption>
          </figure>
        ))}
      </div>
      <Caption center>
        Die Positionierung wurde gegen drei reale Wettbewerber kartiert. Villa Oliveto
        besetzt bewusst die Premium-Nische, in der Design-Anspruch und Qualitätsversprechen
        zusammenfallen.
      </Caption>
    </div>
  </section>
);
