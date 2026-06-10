import { Component } from '@/components';

export const Reflexion = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="05"
      label="REFLEXION"
      title="Was Bewegtbild für UX/UI bedeutet"
    />

    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 mt-12">
      <p className="lede">
        Auf den ersten Blick ist ein Werbespot weit weg von Interface Design. Beim zweiten
        Blick nicht: Storytelling, Rhythmus und gezielte Aufmerksamkeitslenkung sind
        dieselben Skills, die in modernen App-Interfaces über Page-Transitions,
        Mikro-Interaktionen und Onboarding-Flows entscheiden.
      </p>
      <p className="lede">
        Was ich aus diesem Projekt mitgenommen habe: <strong className="text-text-1">Timing
        ist Design.</strong> Eine halbe Sekunde länger oder kürzer kann eine Aussage
        komplett verändern. Diese Sensibilität für Bewegung und Rhythmus fließt heute in
        jedes Interface-Projekt ein, an dem ich arbeite.
      </p>
    </div>
  </section>
);
