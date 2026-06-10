import { Component } from '@/components';
import { Images } from '@/assets/images';

// Unified card elevation — see --shadow-card in tokens.css
const boxShadow = 'var(--shadow-card)';

export const ToolsBefunde = () => (
  <section className="section-y container-x reveal" data-node-id="88:9508">
    <Component.SectionHeading
      num="05"
      label="Marktanalyse"
      title="Tools liefern Befunde, aber kein Vertrauen"
      sub={'Bestehende Werkzeuge erkennen Probleme. Die Frage „wie sehr darf ich diesem Befund vertrauen?" bleibt auf der Strecke.'}
    />

    <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-center mt-14 sm:mt-20">
      <Component.ResponsiveImg
        image={Images.KiCodeImages.Marktanalyse}
        sizes="(min-width: 1024px) 70vw, 100vw"
        alt="Positionierungs-Diagramm: bestehende Tools (SonarQube, Amazon Q, GitHub Copilot) gegenüber CodeScanner – nach Erklärbarkeit & Workflow-Integration und Vertrauenskalibrierung."
        className="w-full h-auto rounded-md"
      />

      <div
        className="rounded-md border border-border-2 bg-grouped-1 px-8 py-10"
        style={{ boxShadow }}
      >
        <p className="m-0 text-xl leading-relaxed text-text-1">
          Nur <span className="font-bold text-primary">CodeScanner</span>{' '}
          <span className="text-text-1">kombiniert</span>
        </p>
        <ul className="mt-3 ml-5 list-disc text-xl leading-relaxed text-text-1 marker:text-text-3">
          <li>Erklärbarkeit,</li>
          <li>Workflow-Führung</li>
          <li>und Vertrauenskalibrierung</li>
        </ul>
      </div>
    </div>
  </section>
);
