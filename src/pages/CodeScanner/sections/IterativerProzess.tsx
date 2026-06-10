import { Component } from '@/components';
import { Images } from '@/assets/images';

type Tone = 'critical' | 'high' | 'medium' | 'low';
const toneText: Record<Tone, string> = {
  critical: 'text-critical', high: 'text-high', medium: 'text-medium', low: 'text-low',
};
const toneTag: Record<Tone, string> = {
  critical: 'bg-critical/15 text-critical border-critical/30',
  high: 'bg-high/15 text-high border-high/30',
  medium: 'bg-medium/15 text-medium border-medium/30',
  low: 'bg-low/15 text-low border-low/30',
};

const versions: { v: string; tone: Tone; label: string; title: string; desc: string; insight: string }[] = [
  { v: 'V1', tone: 'critical', label: 'MODULAR, ABER FRAGMENTIERT', title: 'Explorativer Prototyp', desc: 'Sieben isolierte Funktionsmodule, ohne Workflow-Verbindungen.', insight: 'Die einzelnen Module funktionierten in sich, aber es fehlte ein roter Faden.' },
  { v: 'V2', tone: 'high', label: 'ERSTER WORKFLOW-PFAD', title: 'Konzeptionelle Neuausrichtung', desc: 'Konsolidierung auf vier Bereiche: Übersicht, Bereinigen, Absichern, Optimieren.', insight: 'Damit entstand der erste klare Bearbeitungspfad – aber die Hierarchie war noch zu flach.' },
  { v: 'V3', tone: 'medium', label: 'GEFÜHRT, NICHT ZWINGEND', title: 'Hierarchie & Handlungsführung', desc: 'Einführung gerichteter Workflow-Verbindungen und  Sidebar mit kontextspezifischer Navigation.', insight: 'Der Workflow wurde lenkend, ohne dabei etwas zu erzwingen.' },
  { v: 'V4', tone: 'low', label: 'FINAL – KOHÄRENTES SYSTEM', title: 'Visuelle Konsolidierung', desc: 'Vereinheitlichung aller Komponenten zu einem kohärenten Designsystem.', insight: 'Schriftart, Farben, Rundungen, Spacings – alles auf einen gemeinsamen Standard gebracht.' },
];

export const IterativerProzess = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="08" label="ITERATIVER PROZESS"
      title="Vier Versionen, vier Erkenntnisstufen"
      sub="Vom ersten explorativen Prototyp bis zum finalen Konzept entstanden vier vollständige Versionen – jede mit eigener Stärken-Schwächen-Analyse, dokumentiert und kritisch bewertet."
    />

    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
      {versions.map((v) => (
        <Component.Card key={v.v} className="flex flex-col gap-3 p-7">
          <span className={`self-start inline-flex items-center justify-center px-2.5 py-1 rounded-md mono text-[12px] font-semibold border ${toneTag[v.tone]}`}>
            {v.v}
          </span>
          <span className={`mono text-[11px] tracking-[.14em] ${toneText[v.tone]}`}>{v.label}</span>
          <h4 className="m-0 mt-2 text-xl font-bold">{v.title}</h4>
          <p className="m-0 text-text-2 text-sm leading-snug">{v.desc}</p>
          <hr className="border-border-2 my-3" />
          <span className="mono text-[11px] tracking-[.14em] text-text-3">ERKENNTNIS</span>
          <p className="m-0 text-text-1 text-sm leading-snug font-medium">{v.insight}</p>
        </Component.Card>
      ))}
    </div>

    <Component.Subheading>Entwicklung des Prototyps</Component.Subheading>
    <div className="grid xl:grid-cols-2 gap-6 sm:gap-8 xl:gap-10 items-start">
      <figure className="m-0">
        <Component.ResponsiveImg
          image={Images.CodeScannerImages.Iteration1}
          sizes="(min-width: 1280px) 50vw, 100vw"
          alt="Iterativer Prozess Diagramm"
          className="w-full"
        />
      </figure>
      <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6 sm:gap-8">
        <Component.Card className="flex flex-col gap-4 p-6">
          <div className="inline-flex gap-2 items-center text-[12px] font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-critical shadow-[0_0_8px_var(--critical)]" />
            <span className="mono text-critical">Variante 1</span>
          </div>
          <Component.ResponsiveImg
            image={Images.CodeScannerImages.Iteration2}
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            alt="Variante 1"
            className="rounded-md border border-border-2"
          />
          <p className="text-text-3 text-sm">Exploratives Modul-Layout. Sieben Bereiche, kein klarer Einstiegspunkt.</p>
        </Component.Card>
        <Component.Card className="flex flex-col gap-4 p-6">
          <div className="inline-flex gap-2 items-center text-[12px] font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-low shadow-[0_0_8px_var(--low)]" />
            <span className="mono text-low">Variante 4</span>
          </div>
          <Component.ResponsiveImg
            image={Images.CodeScannerImages.Iteration3}
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            alt="Variante 4"
            className="rounded-md border border-border-2"
          />
          <p className="text-text-3 text-sm">Geführter Workflow-Einstieg. Drei Bereiche, ein empfohlener nächster Schritt.</p>
        </Component.Card>
      </div>
    </div>
  </section>
);
