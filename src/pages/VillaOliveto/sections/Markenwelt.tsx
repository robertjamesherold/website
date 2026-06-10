import { Component } from '@/components';
import { Images } from '@/assets/images';
import { Caption } from '../components';

const Img = Images.VillaOlivetoImages;

const bottles = [
  { img: Img.Traditionale, label: 'Traditionale' },
  { img: Img.Basilikum, label: 'Basilikum' },
  { img: Img.Knoblauch, label: 'Knoblauch' },
];

const socialRows = [
  { label: 'Qualität', desc: 'Produktinszenierende Mood-Posts.', imgs: [Img.SocialsQualitat1, Img.SocialsQualitat2, Img.SocialsQualitat3] },
  { label: 'Rezepte', desc: 'Content-Hub mit kuratierten Anwendungsideen.', imgs: [Img.SocialsRecept1, Img.SocialsRecept2, Img.SocialsRecept3] },
  { label: 'Sorten', desc: 'Launch-Content für neue Editionen.', imgs: [Img.SocialsSort1, Img.SocialsSort2, Img.SocialsSort3] },
];

export const Markenwelt = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="03"
      label="MARKENWELT"
      title="Vom Produkt zur Plattform – drei Medien, ein System"
      sub="Die Marke wurde als zusammenhängendes System über drei Hauptmedien hinweg entwickelt – mit konsistenter Bildsprache, wiedererkennbaren Farben (tiefes Anthrazit, goldene Akzente, dunkle Olivgrüns) und einer klassischen Serifenschrift als Marken-Anker."
    />

    <div className="space-y-20 sm:space-y-28 mt-12">
      {/* 03.1 Produktdesign */}
      <div>
        <div className="mono text-[11px] tracking-[.22em] text-primary uppercase">03.1 · Produktdesign</div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3 mb-5">
          Drei Sorten, ein strukturelles System
        </h3>
        <p className="lede max-w-225">
          Traditionale, Basilikum, Knoblauch – jeweils in 250&nbsp;ml Bio-Glasflasche.
          Jede Sorte hat eine eigene Etikettenfarbe, aber dasselbe strukturelle System:
          zentrales Olivenbaum-Emblem, klare Typografie, goldene Akzente. Die Verpackung
          kommuniziert Premium ohne Pomp.
        </p>
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-7 mt-10">
          {bottles.map((b) => (
            <figure key={b.label} className="flex flex-col gap-4">
              <div
                className="relative rounded-md overflow-hidden border border-border-2 bg-linear-to-br from-grouped-2 to-grouped-1 flex items-center justify-center"
                style={{ aspectRatio: '14/10' }}
              >
                <Component.ResponsiveImg
                  image={b.img}
                  sizes="(min-width: 640px) 30vw, 100vw"
                  alt={`Villa Oliveto – Flasche ${b.label}`}
                  className="h-[100%] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                />
              </div>
              <figcaption className="mono text-[11px] tracking-[.22em] text-text-3 uppercase text-center">
                {b.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>



      {/* 03.3 Social Media */}
      <div>
        <div className="mono text-[11px] tracking-[.22em] text-primary uppercase">03.2 · Social Media</div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish mt-3 mb-5">
          Drei Content-Typen, ein Markenkern
        </h3>
        <p className="lede max-w-225">
          Das Social-Media-System wurde in drei Content-Typen strukturiert: Rezepte,
          Qualität (produktinszenierende Mood-Posts) und Sorten (Launch-Content für neue
          Editionen). Jeder Typ hat eine eigene visuelle Sprache, bleibt aber im Markenkern
          verankert.
        </p>

        <div className="mt-12 sm:mt-14 space-y-10 sm:space-y-12">
          {socialRows.map((row) => (
            <div key={row.label}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-4 pb-3 border-b border-border-2">
                <span className="mono text-[11px] tracking-[.22em] text-primary uppercase">{row.label}</span>
                <span className="text-text-3 text-[14px]">{row.desc}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {row.imgs.map((img, n) => (
                  <div
                    key={n}
                    className="rounded-md overflow-hidden border border-border-2 bg-grouped-1"
                    style={{ aspectRatio: '1/1' }}
                  >
                    <Component.ResponsiveImg
                      image={img}
                      sizes="(min-width: 640px) 30vw, 33vw"
                      alt={`Villa Oliveto – Social-Post ${row.label} ${n + 1}`}
                      className="block w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <h4 className="text-lg sm:text-xl font-bold tracking-tightish mb-5">Im Profil-Kontext</h4>
          <div className="flex justify-center">
            <Component.ResponsiveImg
              image={Img.Instagram}
              alt="Villa Oliveto – Instagram-Auftritt"
              className="block max-w-full w-auto h-auto max-h-160 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
            />
          </div>
          <Caption center>
            Drei klar definierte Content-Typen geben dem Auftritt Rhythmus, ohne ihn
            monoton zu machen. Jeder Post folgt eigenen Regeln, aber dem gemeinsamen
            Markenkern.
          </Caption>
        </div>
      </div>
    </div>
  </section>
);
