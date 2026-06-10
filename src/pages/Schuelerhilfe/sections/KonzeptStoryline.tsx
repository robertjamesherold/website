import { Component } from '@/components';
import { Images } from '@/assets/images';

const acts = [
  {
    n: 'Akt 1',
    title: 'Der Traum beginnt.',
    body:
      'Ein Mädchen sitzt im Klassenzimmer und träumt von ihrer Zukunft: Ärztin, Pilotin, Designerin, Architektin, Astronautin. Die Szene verschwimmt, die Berufe wechseln im Rhythmus.',
  },
  {
    n: 'Akt 2',
    title: 'Die Realität.',
    body:
      'Schnitt auf ein Matheheft. Eine rote „5−" in dicken Kreisen. Der Bruch ist hart und gewollt.',
  },
  {
    n: 'Akt 3',
    title: 'Die Lösung.',
    body:
      'Eine Lehrerin beugt sich über das Mädchen. Geduldig, konzentriert. Aus dem Bruch wird eine Brücke. Endkarte: „Schülerhilfe. Gemeinsam zu besseren Noten."',
  },
];

export const KonzeptStoryline = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="01"
      label="KONZEPT & STORYLINE"
      title="Drei Akte in dreißig Sekunden"
      sub="Jede Werbung muss in den ersten Sekunden eine Geschichte aufmachen. Mein Konzept folgt einer klassischen Drei-Akt-Struktur – komprimiert auf 30 Sekunden."
    />

    <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
      {acts.map((a) => (
        <div key={a.n} className="card-base flex flex-col gap-3 p-7">
          <div className="mono text-[11px] tracking-[.22em] text-primary uppercase">{a.n}</div>
          <h3 className="text-xl font-bold tracking-tightish">{a.title}</h3>
          <p className="text-text-2 text-[15px] leading-relaxed">{a.body}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 rounded-md overflow-hidden border border-border-2 bg-grouped-1">
      <Component.ResponsiveImg
        image={Images.SchuelerhilfeImages.Plot}
        sizes="(min-width: 1760px) 1720px, 100vw"
        alt="Plot-Übersicht mit Drei-Akt-Struktur"
        className="block w-full h-auto"
      />
    </div>
  </section>
);
