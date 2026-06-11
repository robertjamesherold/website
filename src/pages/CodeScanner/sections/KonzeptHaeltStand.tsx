import { Component } from '@/components';

// Unified card elevation — see --shadow-card in tokens.css
const boxShadow = 'var(--shadow-card)';

type Finding = { label: string; text: string; color: string };
const findings: Finding[] = [
  { label: 'Visuelle Orientierung', text: 'Die Farbkodierung ermöglicht eine sofortige Orientierung.', color: 'text-primary' },
  { label: 'Transparenz der KI-Analyse', text: 'Fördert eine angemessene Vertrauensbildung gegenüber den Ergebnissen.', color: 'text-quality' },
  { label: 'Bewusste Kontrolle', text: 'Der Nutzer wird nicht zu Handlungen gezwungen.', color: 'text-security' },
  { label: 'Auffindbarkeit von Funktionen', text: 'Die konsistente Gestaltung ermöglicht den Zugriff auf alle Arbeitsschritte ohne Umwege.', color: 'text-performance' },
];

type Rating = 'sehrgut' | 'gut' | 'mittel';
const ratingMeta: Record<Rating, { label: string; cls: string }> = {
  sehrgut: { label: 'Sehr gut', cls: 'bg-low/12 text-low' },
  gut: { label: 'Gut', cls: 'bg-medium/12 text-medium' },
  mittel: { label: 'Mittel', cls: 'bg-high/12 text-high' },
};

type Heuristic = { n: string; name: string; rating: Rating };
const heuristics: Heuristic[] = [
  { n: '01', name: 'Übereinstimmung mit der realen Welt', rating: 'sehrgut' },
  { n: '02', name: 'Nutzerkontrolle und Freiheit', rating: 'sehrgut' },
  { n: '03', name: 'Konsistenz und Standards', rating: 'sehrgut' },
  { n: '04', name: 'Ästhetik und minimalistisches Design', rating: 'sehrgut' },
  { n: '05', name: 'Sichtbarkeit des Systemstatus', rating: 'gut' },
  { n: '06', name: 'Fehlervermeidung', rating: 'gut' },
  { n: '07', name: 'Wiedererkennung', rating: 'gut' },
  { n: '08', name: 'Flexibilität', rating: 'gut' },
  { n: '09', name: 'Fehlererkennung', rating: 'gut' },
  { n: '10', name: 'Hilfe und Dokumentation', rating: 'mittel' },
];

export const KonzeptHaeltStand = () => (
  <section className="section-y container-x reveal" data-node-id="88:16328">
    <Component.SectionHeading num="11" label="Evaluation" title="Das Konzept hält stand" />

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-14 sm:mt-20">
      {/* Thematische Analyse */}
      <div className="flex flex-col gap-5">
        <p className="m-0 mono text-sm text-text-3">Thematische Analyse nach Braun und Clarke</p>
        {findings.map((f) => (
          <div
            key={f.label}
            className="rounded-md border border-border-2 bg-grouped-1 px-6 py-4 flex flex-col gap-2"
            style={{ boxShadow }}
          >
            <span className={`mono text-base uppercase tracking-wide ${f.color}`}>{f.label}</span>
            <span className="text-base sm:text-lg text-text-2 leading-snug">{f.text}</span>
          </div>
        ))}
      </div>

      {/* Heuristische Evaluation */}
      <div className="flex flex-col gap-5">
        <p className="m-0 mono text-sm text-text-3">Heuristische Evaluation nach Nielsen</p>
        <div className="flex flex-col gap-3">
          {heuristics.map((h) => {
            const m = ratingMeta[h.rating];
            return (
              <div
                key={h.n}
                className="rounded-md border border-border-2 bg-grouped-1 px-5 py-3 flex items-center gap-4"
                style={{ boxShadow }}
              >
                <span className="mono text-sm text-text-3 shrink-0">{h.n}</span>
                <span className="flex-1 text-base sm:text-lg text-text-2 leading-snug min-w-0 break-words">{h.name}</span>
                <span className={`shrink-0 rounded-full px-3 py-1 mono text-xs uppercase tracking-wide ${m.cls}`}>
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
