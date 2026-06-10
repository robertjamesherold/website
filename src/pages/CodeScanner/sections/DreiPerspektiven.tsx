import { RefreshCw } from 'lucide-react';
import { Component } from '@/components';

type Tone = 'quality' | 'security' | 'performance';
type Col = {
  num: string;
  kicker: string;
  title: [string, string];
  methods: string[];
  tone: Tone;
  badge?: string;
};

const cols: Col[] = [
  { num: '01', kicker: 'Grundlage', title: ['Empirische', 'Grundlage'], methods: ['Umfrage', 'Literaturrecherche', 'Marktanalyse'], tone: 'quality' },
  { num: '02', kicker: 'Iteration', title: ['Iterativer', 'Designprozess'], methods: ['Selbstreflexion', 'Expertenfeedback', 'Nutzerfeedback'], tone: 'security', badge: 'Zyklischer Prozess' },
  { num: '03', kicker: 'Evaluation', title: ['Methodische', 'Evaluation'], methods: ['Thematische Analyse', 'Heuristiken'], tone: 'performance' },
];

const txt: Record<Tone, string> = { quality: 'text-quality', security: 'text-security', performance: 'text-performance' };
const bg: Record<Tone, string> = { quality: 'bg-quality', security: 'bg-security', performance: 'bg-performance' };
const hover: Record<Tone, string> = {
  quality: 'hover:bg-quality/[0.04]', security: 'hover:bg-security/[0.04]', performance: 'hover:bg-performance/[0.04]',
};

export const DreiPerspektiven = () => (
  <section className="section-y container-x reveal" data-node-id="88:9729">
    <Component.SectionHeading num="07" label="Methodik" title="Drei Perspektiven, ein Prozess" />

    <div className="grid md:grid-cols-3 border-t border-border-2 mt-16 sm:mt-20">
      {cols.map((c, i) => (
        <div
          key={c.num}
          className={`group relative overflow-hidden px-2 sm:px-4 py-14 sm:py-16 transition-colors duration-300 ${hover[c.tone]} ${
            i > 0 ? 'border-t md:border-t-0 md:border-l border-border-2' : ''
          }`}
        >
          {/* ghost number */}
          <span
            className={`pointer-events-none select-none absolute -right-2 -bottom-7 mono font-black leading-none tracking-[-0.04em] ${txt[c.tone]} opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-300`}
            style={{ fontSize: 'clamp(96px, 13vw, 230px)' }}
            aria-hidden
          >
            {c.num}
          </span>

          {/* accent rule */}
          <div className={`h-1 w-12 rounded-full ${bg[c.tone]} mb-9 transition-[width] duration-500 ease-out group-hover:w-20`} />

          <div className={`mono text-sm font-bold tracking-[.2em] uppercase ${txt[c.tone]} mb-4`}>{c.kicker}</div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tightish leading-tight mb-10 text-text-1">
            {c.title[0]}<br />{c.title[1]}
          </h3>

          <div className="flex flex-col gap-5 relative">
            {c.methods.map((m) => (
              <div key={m} className="flex items-start gap-3.5 text-lg sm:text-xl font-medium leading-snug text-text-2">
                <span className={`w-2 h-2 rounded-full ${bg[c.tone]} mt-[.5em] shrink-0 transition-transform duration-200 ease-out group-hover:scale-150`} />
                {m}
              </div>
            ))}

            {c.badge && (
              <span className="inline-flex items-center gap-2 mt-7 w-fit mono text-xs font-semibold tracking-[.14em] uppercase text-security px-3.5 py-1.5 rounded-full border border-security/30 bg-security/[0.07]">
                <RefreshCw size={13} aria-hidden />
                {c.badge}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>


  </section>
);
