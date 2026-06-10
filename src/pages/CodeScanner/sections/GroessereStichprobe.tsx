import { Component } from '@/components';

type Tone = 'primary' | 'quality' | 'security' | 'performance';
type Step = { n: string; title: string; tone: Tone };

const steps: Step[] = [
  { n: 'Schritt 01', title: 'Quantitative Validierung mit mehr als 30 Testpersonen', tone: 'primary' },
  { n: 'Schritt 02', title: 'A/B-Vergleich gegen bestehende Tools', tone: 'quality' },
  { n: 'Schritt 03', title: 'Funktionierender Prototyp mit echter KI-Integration', tone: 'security' },
  { n: 'Schritt 04', title: 'Hilfe und Dokumentation ausarbeiten', tone: 'performance' },
];

const border: Record<Tone, string> = {
  primary: 'border-border-2', quality: 'border-border-2', security: 'border-border-2', performance: 'border-border-2',
};
const text: Record<Tone, string> = {
  primary: 'text-primary', quality: 'text-quality', security: 'text-security', performance: 'text-performance',
};

// Unified card elevation — see --shadow-card in tokens.css
const cardShadow = 'var(--shadow-card)';

export const GroessereStichprobe = () => (
  <section className="section-y container-x reveal" data-node-id="88:16505">
    <Component.SectionHeading
      num="14"
      label="Ausblick"
      title="Größere Stichprobe als nächster Schritt"
      sub="Eine breit angelegte Folgestudie würde die Tragfähigkeit des Konzepts empirisch absichern & gezielt einzelne Heuristiken weiterentwickeln."
    />

    <div className="grid sm:grid-cols-2 gap-8 mt-14 sm:mt-20">
      {steps.map((s) => (
        <div
          key={s.n}
          className={`flex flex-col gap-4 rounded-md border ${border[s.tone]} bg-grouped-1 px-8 py-10`}
          style={{ boxShadow: cardShadow }}
        >
          <span className={`mono text-lg uppercase ${text[s.tone]}`}>{s.n}</span>
          <h3 className="m-0 text-xl font-semibold leading-tight text-text-1">{s.title}</h3>
        </div>
      ))}
    </div>
  </section>
);
