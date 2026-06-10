import { Component } from '@/components';

export const Reflexion = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="04"
      label="REFLEXION"
      title="Was ich aus diesem Projekt mitgenommen habe"
    />

    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 mt-12">
      <p className="lede">
        Villa Oliveto war für mich die erste vollständige Cross-Media-Markenentwicklung –
        von strategischer Positionierung bis zum konkreten Touchpoint. Was ich daraus
        gelernt habe: Eine Marke ist erst dann tragfähig, wenn jedes Medium dieselbe
        Geschichte erzählt – mit eigenen Mitteln, aber gemeinsamem Kern.
      </p>
      <p className="lede">
        Im Rückblick würde ich heute zwei Dinge anders machen: die Bildwelt stärker in
        einer Bild-Tonalität verankern (statt mehrerer KI-Stile zu mischen) und das
        Designsystem als eigenständiges Dokument formalisieren – genau das, was ich später
        in der Bachelorarbeit umgesetzt habe.
      </p>
    </div>
  </section>
);
