import type { LucideIcon } from 'lucide-react';
import { Copy, EyeOff, SearchX, Bug, UserX, EyeClosed, ArrowDown } from 'lucide-react';
import { Component } from '@/components';

type Tone = 'quality' | 'security' | 'performance';
type Step = {
  n: string;
  tone: Tone;
  cause: { text: string; icon: LucideIcon };
  effect: { text: string; icon: LucideIcon };
};

const steps: Step[] = [
  {
    n: '01', tone: 'quality',
    cause: { text: 'Codemengen steigen an', icon: Copy },
    effect: { text: 'Die Transparenz sinkt', icon: EyeOff },
  },
  {
    n: '02', tone: 'security',
    cause: { text: 'Risiken bleiben unentdeckt', icon: SearchX },
    effect: { text: 'Reproduzierte Mängel', icon: Bug },
  },
  {
    n: '03', tone: 'performance',
    cause: { text: 'Übervertrauen entsteht', icon: UserX },
    effect: { text: 'Vernachlässigte Aufsicht', icon: EyeClosed },
  },
];

const text: Record<Tone, string> = { quality: 'text-quality', security: 'text-security', performance: 'text-performance' };
const borderC: Record<Tone, string> = { quality: 'border-border-2', security: 'border-border-2', performance: 'border-border-2' };
const toneVar: Record<Tone, string> = { quality: '--quality', security: '--security', performance: '--performance' };

const Label = ({ children }: React.PropsWithChildren) => (
  <span className="mono text-sm tracking-[.16em] uppercase text-text-3">{children}</span>
);

export const VomSchreibenZumPruefen = () => (
  <section className="section-y container-x reveal" data-node-id="466:17511">
    <Component.SectionHeading
      num="01"
      label="Relevanz"
      title="Vom Schreiben zum Prüfen"
      sub="KI generiert plausibel wirkenden Code in Sekunden. Risiken bleiben oft unsichtbar — und das Vertrauen wächst trotzdem."
    />

    <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mt-14 sm:mt-20">
      {steps.map((s) => {
        const Cause = s.cause.icon;
        const Effect = s.effect.icon;
        return (
          <div
            key={s.n}
            className={`relative overflow-hidden rounded-md border ${borderC[s.tone]} bg-grouped-1 px-10 py-12 flex flex-col`}
            style={{
              ['--acc' as string]: `var(${toneVar[s.tone]})`,
              backgroundImage:
                'radial-gradient(110% 110% at 0% 100%, color-mix(in srgb, var(--acc) 15%, transparent), transparent 58%)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {/* corner icons */}
            <Cause className={`absolute top-8 right-8 ${text[s.tone]} opacity-40`} size={84} strokeWidth={1.5} aria-hidden />
            <Effect className={`absolute bottom-8 right-8 ${text[s.tone]} opacity-70`} size={84} strokeWidth={1.5} aria-hidden />

            <span className={`mono text-lg sm:text-xl font-bold tracking-[.12em] uppercase ${text[s.tone]}`}>
              Problem {s.n}
            </span>

            <div className="relative z-10 mt-8 flex flex-col gap-2 pr-16">
              <Label>Ursache</Label>
              <span className="text-xl font-bold text-text-1 leading-snug">{s.cause.text}</span>
            </div>

            <ArrowDown className={`${text[s.tone]} opacity-40 my-5`} size={26} strokeWidth={1.75} aria-hidden />

            <div className="relative z-10 flex flex-col gap-2 pr-16">
              <Label>Wirkung</Label>
              <span className="text-xl font-bold text-text-1 leading-snug">{s.effect.text}</span>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
