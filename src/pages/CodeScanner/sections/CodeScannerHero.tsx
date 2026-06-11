import { Component } from '@/components';
import { Images } from '@/assets/images';
import { ImageSlider } from '../components';

const meta: { k: string; v: string }[] = [
  { k: 'ROLLE', v: 'UX/UI Konzeption, Research, Visual Design' },
  { k: 'DAUER', v: '6 Monate (Bachelorarbeit)' },
  { k: 'TOOLS', v: 'Figma, Adobe InDesign' },
  { k: 'METHODEN', v: 'Literaturrecherche, Online-Umfrage (N=121), Heuristische Evaluation, Thematische Analyse' },
  { k: 'ABSCHLUSS', v: 'Bachelor of Arts – Mediendesign,\nIU Internationale Hochschule' },
];

const heroSlides = [
  Images.CodeScannerImages.Hero1,
  Images.CodeScannerImages.Hero2,
  Images.CodeScannerImages.Hero3,
];

export const CodeScannerHero = () => (
  <section className="container-x pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 reveal">
    <Component.BackLink />
    <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
      <Component.Pill>BACHELORARBEIT · UX/UI · 2026</Component.Pill>
      <Component.Pill tone="warning">BEWERTET MIT 1,0</Component.Pill>
    </div>
    <div className="grid xl:grid-cols-[1.4fr_1fr] gap-12 xl:gap-20 mt-10 sm:mt-12">
      <div>
        <h2 className="display mt-5 sm:mt-6">CodeScanner</h2>
        <p className="text-xl sm:text-2xl text-text-2 mt-5 max-w-250 leading-snug">
          Ein KI-gestütztes Analyse-Tool für mehr Vertrauen in KI-generierten Code.
        </p>

        <p className="lede mt-16">
          KI-Assistenten wie ChatGPT und Claude generieren heute massenhaft Code – schnell, plausibel und oft überzeugend.
          Doch wer prüft, ob der Code sicher, wartbar und logisch korrekt ist?
          <br /><br />
          CodeScanner ist ein Konzept für ein visuelles Analyse-Tool, das Entwicklerinnen und Entwickler dabei
          unterstützt, KI-generierten Code strukturiert zu prüfen – ohne den Workflow zu unterbrechen und ohne
          Vertrauen blind zu schenken.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="card-base p-7 sm:p-8 flex flex-col gap-4 h-fit">
          {meta.map((m) => (
            <div key={m.k} className="flex flex-col gap-1 sm:grid sm:grid-cols-[120px_1fr] sm:gap-5 sm:items-start text-[15px] text-text-2">
              <span className="mono text-[11px] tracking-[.16em] text-text-3">{m.k}</span>
              <span style={{ whiteSpace: 'pre-line' }}>{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <ImageSlider images={heroSlides} alt="CodeScanner Screen" />
  </section>
);
