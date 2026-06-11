import type { ReactNode } from 'react';
import { Component } from '@/components';
import { Icon } from '@/assets/icons';
import { Images } from '@/assets/images';
import { Caption } from '../components';
import type { ResponsiveSource, ThemedSource } from '@/components/ResponsiveImage';
import { hooks } from '@/hooks';

const FIGMA_LIGHT =
  'https://dulcet-axolotl-191c40.netlify.app/home';
const FIGMA_DARK =
  'https://dulcet-axolotl-191c40.netlify.app/home';

type ImageSource = ResponsiveSource | ThemedSource;

type StepTone = 'blue' | 'cyan' | 'violet';
const stepStyles: Record<StepTone, { card: string; icon: string }> = {
  blue:   { card: 'border-border-2 bg-linear-to-br from-quality/12 to-transparent', icon: 'bg-quality/15 text-quality' },
  cyan:   { card: 'border-border-2 bg-linear-to-br from-security/12 to-transparent', icon: 'bg-security/15 text-security' },
  violet: { card: 'border-border-2 bg-linear-to-br from-performance/15 to-transparent', icon: 'bg-performance/15 text-performance' },
};

const Step = ({ n, title, tone, icon }: { n: string; title: string; tone: StepTone; icon: ReactNode }) => (
  <div className={`flex-1 lg:min-w-65 flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-md border ${stepStyles[tone].card}`} style={{ boxShadow: 'var(--shadow-card)' }}>
    <div className={`w-16 h-16 rounded-md flex items-center justify-center flex-none ${stepStyles[tone].icon}`}>{icon}</div>
    <div>
      <span className="mono block text-[11px] tracking-[.16em] text-text-3 mb-1.5">Schritt {n}</span>
      <h3 className="m-0 text-xl font-bold">{title}</h3>
    </div>
  </div>
);

type IxTone = 'blue' | 'cyan' | 'violet' | 'success';
const ixStyles: Record<IxTone, string> = {
  blue:   'bg-quality/20 text-quality',
  cyan:   'bg-security/20 text-security',
  violet: 'bg-performance/20 text-performance',
  success: 'bg-success/20 text-success',
};

const ItemHeading = ({ ix, ixTone, label, title }: { ix: string; ixTone: IxTone; label: string; title: string }) => (
  <>
    <div className="flex gap-3.5 items-center mb-3.5">
      <span className={`inline-flex w-11 h-7 items-center justify-center rounded-md mono text-[13px] font-semibold ${ixStyles[ixTone]}`}>{ix}</span>
      <span className="mono text-[11px] tracking-[.16em] text-text-3">{label}</span>
    </div>
    <h3 className="text-2xl sm:text-3xl font-bold tracking-tightish leading-[1.1] m-0 mb-4">{title}</h3>
  </>
);

const Item = ({
  ix, ixTone, label, title, lede, image, reverse,
}: {
  ix: string; ixTone: IxTone; label: string; title: string; lede: string;
  image: ImageSource; reverse?: boolean;
}) => (
  <article className={`${reverse ? 'lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_0.85fr]' : 'lg:grid-cols-[1fr_1fr] xl:grid-cols-[0.85fr_1fr]'} grid gap-10 lg:gap-16 items-center mt-20 sm:mt-28 reveal`}>
    <div className={reverse ? 'lg:order-2' : ''}>
      <ItemHeading ix={ix} ixTone={ixTone} label={label} title={title} />
      <p className="lede">{lede}</p>
    </div>
    <Component.ResponsiveImg
      image={image}
      sizes="(min-width: 1024px) 55vw, 100vw"
      alt={title}
      className={`rounded-md  card-base p-0  border border-border-2 w-full ${reverse ? 'lg:order-1' : ''}`}
    />
  </article>
);

export const Loesung = () =>{ 
    const { isDark } = hooks.useTheme();
  const src = isDark ? FIGMA_DARK : FIGMA_LIGHT;
return (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="09" label="DIE LÖSUNG"
      title="Bereinigen → Absichern → Optimieren"
      sub="Das Herzstück des finalen Konzepts ist ein dreischrittiger Bearbeitungspfad, der Komplexität nicht versteckt, sondern in eine logische Reihenfolge bringt. Statt alle Probleme gleichzeitig anzuzeigen, führt CodeScanner Nutzende vom strukturell Niedrigschwelligen zum funktional Kritischen – und macht jede Entscheidung nachvollziehbar."
    />

    <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-5 lg:gap-6 mt-12 mb-12 sm:mb-16">
      <Step n="01" title="Bereinigen" tone="blue" icon={<Icon.Wand width={28} height={28} />} />
      <div className="text-text-3 self-center rotate-90 lg:rotate-0"><Icon.ArrowRight width={24} height={24} /></div>
      <Step n="02" title="Absichern" tone="cyan" icon={<Icon.Shield width={28} height={28} />} />
      <div className="text-text-3 self-center rotate-90 lg:rotate-0"><Icon.ArrowRight width={24} height={24} /></div>
      <Step n="03" title="Optimieren" tone="violet" icon={<Icon.Chart width={28} height={28} />} />
    </div>

    <Item ix="9.1" ixTone="blue" label="BEREINIGEN" title="Struktur vor Sicherheit"
      lede="Bevor Sicherheits- oder Performance-Probleme analysiert werden, geht es um die Grundlage: Redundanz, Ballast und Strukturklarheit. Doppelte Dateien, ungenutzte Pakete, inkonsistente Benennungen werden gebündelt und mit dreistufiger Konfidenzklassifikation versehen – damit klar ist, was sicher automatisierbar ist und was menschliches Urteil braucht."
      image={Images.CodeScannerImages.Prototyp1}
    />
    <Caption>Die Bereinigungsphase reduziert Komplexität, bevor sicherheits- und qualitätskritische Analysen ansetzen.</Caption>

    <Item ix="9.2" ixTone="cyan" label="ABSICHERN" title="Sicherheitsbefunde mit Kontext" reverse
      lede="Im Sicherheitsbereich werden Befunde nach Severity-Stufen (Kritisch › Hoch › Mittel › Niedrig) gegliedert und mit den offiziellen CWE-Codes (Common Weakness Enumeration) der MITRE-Klassifikation verknüpft. Jeder Befund zeigt Vorher-/Nachher-Code-Vergleich, betroffene Datei und Zeilennummer sowie eine kontextbezogene Erklärung des Problems – damit Nutzende nicht nur sehen was, sondern auch warum."
      image={Images.CodeScannerImages.Prototyp2}
    />
    <Caption>Pattern-basierte Befundgruppierung mit dateibezogener Detailansicht. Der direkte Vorher-/Nachher-Vergleich macht die Wirkung jeder Änderung nachvollziehbar.</Caption>

    <Item ix="9.3" ixTone="violet" label="OPTIMIEREN" title="Qualität schrittweise verbessern"
      lede="Im Optimierungsbereich liegt der Fokus weniger auf Kritikalität, sondern auf schrittweiser Verbesserung. Bundle-Größe, Performance, Architektur, API-Effizienz – jede Kategorie wird in eigener Tiefe behandelt, mit demselben Vertrauensprinzip wie in den vorherigen Schritten: Vorschläge, keine Vorgaben."
      image={Images.CodeScannerImages.Prototyp3}
    />
    <Caption>Der Optimierungsbereich übernimmt die Logik der vorherigen Schritte – aber mit dem Fokus auf inkrementelle Qualitätssteigerung statt Kritikalität.</Caption>

    {/* 5.4 Übersicht – text top, full-width image below */}
    <article className="mt-20 sm:mt-28 reveal">
      <div className="max-w-275">
        <ItemHeading ix="9.4" ixTone="blue" label="ÜBERSICHT" title="Der rote Faden" />
        <p className="lede">
          Verbindendes Element ist die Projektübersicht: Hier laufen empfohlene nächste Schritte, Sicherheitswarnungen,
          Bereichszusammenfassungen und der Risikoverlauf zusammen. Nutzende behalten jederzeit den Überblick – und können
          den geführten Pfad verlassen, ohne ihn zu verlieren.
        </p>
      </div>
      <Component.ResponsiveImg
        image={Images.CodeScannerImages.Prototyp4}
        sizes="(min-width: 1760px) 1720px, 100vw"
        alt="Der rote Faden"
        className="rounded-md card-base p-0 border border-border-2 w-full mt-10 sm:mt-14"
      />
    </article>
    <Caption>Die Übersicht verdichtet alle drei Workflow-Bereiche zu einer einzigen Handlungsempfehlung – der „empfohlene nächste Schritt" als roter Faden durch das Tool.</Caption>
        <article className="mt-20 sm:mt-28 reveal hidden 2xl:block">
      <div className="max-w-275">
        <ItemHeading ix="9.5" ixTone="success" label="Prototyp" title="CodeScanner zum Anfassen" />
        <p className="lede">
         Der finale Prototyp bildet den Bearbeitungspfad vollständig ab – Übersicht, Bereinigen, Absichern und Optimieren als zusammenhängende Klickstrecke. Nutzende erleben den geführten Workflow direkt im Browser.
        </p>
      </div>
       <div className="mt-12 sm:mt-16 rounded-md border border-border-2 bg-grouped-1 " style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="relative w-full aspect-16/14 overflow-hidden rounded-md bg-bg-1">
          <iframe
            key={src}
            src={src}
            title="CodeScanner – Interaktiver Figma-Prototyp"
            loading="lazy"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      </article>
  </section>
);
}