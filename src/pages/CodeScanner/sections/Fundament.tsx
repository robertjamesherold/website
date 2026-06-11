import { Component } from '@/components';

type Method = { n: string; title: string; sub?: string };
const methods: Method[] = [
  { n: '01', title: 'Literaturrecherche' },
  { n: '02', title: 'Online-Umfrage', sub: 'N = 121 Teilnehmer' },
  { n: '03', title: 'Marktanalyse' },
];

type Stat = { value: number; label: string };
const stats: Stat[] = [
  { value: 92, label: 'nutzen regelmäßig KI-Assistenten beim Coden' },
  { value: 76, label: 'würden KI bei nachvollziehbarerem Output vertrauen' },
  { value: 84, label: 'sehen Einstufungen nach Schweregrad als hilfreich' },
  { value: 64, label: 'finden eine Vorher-/Nachher-Ansicht sehr gut' },
];

export const Fundament = () => (
  <section className="section-y container-x reveal" data-node-id="88:9679">
    <Component.SectionHeading num="03" label="Empirische Grundlage" title="Das Fundament" />

    {/* Methods — numbered steps on a connector line */}
    <div className="relative flex flex-col items-center gap-10 sm:grid sm:grid-cols-3 sm:items-stretch sm:gap-0 mt-16 sm:mt-24 mb-16 sm:mb-24 px-2 sm:px-12">
      <div className="hidden sm:block absolute top-8 left-[8%] right-[8%] h-px bg-border-1" />
      {methods.map((m) => (
        <div key={m.n} className={`relative z-10 flex flex-col items-center gap-3 sm:gap-6 ${m.n === '01' ? 'sm:items-start' : m.n === '02' ? 'sm:items-center' : 'sm:items-end'}`}>
          <div
            className="grid place-items-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-white mono text-2xl sm:text-3xl font-bold tracking-[.04em]"
            style={{ boxShadow: '0 0 0 8px color-mix(in srgb, var(--primary) 12%, transparent)' }}
          >
            {m.n}
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
            <span className="text-xl font-bold tracking-tight leading-tight text-text-1 mb-1 sm:mb-2">{m.title}</span>
            {m.sub && (
              <span className="mono text-xs sm:text-lg tracking-[.1em] sm:tracking-[.13em] uppercase text-primary bg-primary/12 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                {m.sub}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Stats — large % + label + animated bar, grouped into one elevated card */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-md border border-border-2 bg-border-2 overflow-hidden"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {stats.map((s, i) => (
        <div key={s.value} className="bg-grouped-1 px-6 sm:px-12 py-10 sm:py-16 flex flex-col gap-7">
          <div className="flex items-center gap-5 sm:gap-9">
            <span className="font-extrabold tracking-[-0.035em] text-primary leading-none shrink-0 min-w-0 sm:min-w-45"
              style={{ fontSize: 'clamp(3.5rem, 2rem + 3.4vw, 5.5rem)' }}>
              {s.value}%
            </span>
            <span className="text-lg sm:text-xl leading-snug text-text-2 text-pretty">{s.label}</span>
          </div>
          <div className="h-2 bg-grouped-2 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-primary origin-left"
              style={{
                width: `${s.value}%`,
                animation: 'barGrow .9s cubic-bezier(.22,1,.36,1) both',
                animationDelay: `${0.05 + i * 0.1}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);
