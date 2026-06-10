import { Component } from '@/components';

// Unified card elevation — see --shadow-card in tokens.css
const boxShadow = 'var(--shadow-card)';

type Col = { label: string; text: string; border: string; accent: string };
const cols: Col[] = [
  {
    label: 'Erkenntnis', border: 'border-quality', accent: 'text-quality',
    text: 'Das Problem ist nicht die Geschwindigkeit von KI – sondern fehlende Werkzeuge, ihr Output kritisch zu beurteilen.',
  },
  {
    label: 'Beitrag', border: 'border-security', accent: 'text-security',
    text: 'Ein Designkonzept, das Transparenz, Kontrolle und Vertrauen systematisch in den Workflow integriert.',
  },
  {
    label: 'Reichweite', border: 'border-performance', accent: 'text-performance',
    text: 'Das Prinzip gilt überall, wo Menschen komplexen Systemen vertrauen müssen – nicht nur im Code.',
  },
];

export const Fazit = () => (
  <section className="section-y container-x reveal" data-node-id="88:16666">
    <Component.SectionHeading num="15" label="Fazit" title="Gestaltung als Werkzeug kritischer KI-Aufsicht." />

    <div className="grid md:grid-cols-3 gap-8 lg:gap-16 mt-14 sm:mt-20">
      {cols.map((c) => (
        <div key={c.label} className={`border-l-2 ${c.border} pl-5 sm:pl-8 py-6 flex flex-col gap-4`}>
          <span className={`mono text-lg ${c.accent}`}>{c.label}</span>
          <p className="m-0 text-xl leading-relaxed text-text-3">{c.text}</p>
        </div>
      ))}
    </div>

    <div
      className="rounded-md border border-border-2 bg-grouped-1 px-6 sm:px-8 py-8 sm:py-10 mt-10"
      style={{ boxShadow }}
    >
      <p className="m-0 text-xl sm:text-2xl leading-snug text-text-1">
        <span className="font-semibold">Gutes Design macht das Unsichtbare sichtbar.</span>{' '}
        <span className="font-normal text-text-2">
          Nicht durch mehr Information – sondern durch die richtige Information, zur richtigen Zeit,
          in der richtigen Form. Das ist die Aufgabe von Content Design.
        </span>
      </p>
    </div>
  </section>
);
