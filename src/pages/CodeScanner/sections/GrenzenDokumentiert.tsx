import { Component } from '@/components';

type Tone = 'critical' | 'high' | 'medium' | 'low';
type Limit = { label: string; title: string; tone: Tone };

const limits: Limit[] = [
  { label: 'Empirisch', title: 'Geringe Stichprobengröße', tone: 'critical' },
  { label: 'Methodisch', title: 'Lerneffekte über Iterationen', tone: 'high' },
  { label: 'Geltungsbereich', title: 'Klickprototyp ≠ Anwendung', tone: 'medium' },
  { label: 'Funktionen', title: 'Technische Umsetzbarkeit offen', tone: 'low' },
];

const border: Record<Tone, string> = {
  critical: 'border-border-2', high: 'border-border-2', medium: 'border-border-2', low: 'border-border-2',
};

// Unified card elevation — see --shadow-card in tokens.css
const cardShadow = 'var(--shadow-card)';

export const GrenzenDokumentiert = () => (
  <section className="section-y container-x reveal" data-node-id="88:16639">
    <Component.SectionHeading
      num="12"
      label="Kritische Reflexion"
      title="Grenzen bewusst dokumentiert"
      sub="Methodische & inhaltliche Einschränkungen sind keine Schwächen, sondern Teil des gestaltungsorientierten Charakters dieser Arbeit."
    />

    <div className="grid sm:grid-cols-2 gap-8 mt-14 sm:mt-20">
      {limits.map((l) => (
        <div
          key={l.title}
          className={`flex flex-col gap-4 rounded-md border ${border[l.tone]} bg-grouped-1 px-8 py-10`}
          style={{ boxShadow: cardShadow }}
        >
          <span className="mono text-lg text-info">{l.label}</span>
          <h3 className="m-0 text-xl font-semibold leading-tight text-text-1">{l.title}</h3>
        </div>
      ))}
    </div>
  </section>
);
