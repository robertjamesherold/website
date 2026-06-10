import { Component } from '@/components';
import { Images } from '@/assets/images';

export const DoubleDiamond = () => (
  <section className="section-y container-x reveal" data-node-id="89:16885">
    <Component.SectionHeading
      num="06"
      label="Wiederholungen"
      title="Double Diamond, erweitert durch KI-gestützte Ideation"
      sub="Der Designprozess folgte einem adaptierten Double-Diamond-Modell, das um eine fünfte, durchgängige Methode ergänzt wurde."
    />

    <Component.ResponsiveImg
      image={Images.KiCodeImages.DoubleDiamond}
      sizes="100vw"
      alt="Adaptiertes Double-Diamond-Modell: Problemraum (Erkunden, Definieren) und Lösungsraum (Entwickeln, Verdichten) mit den Meilensteinen Forschungserkenntnis, Problem verstanden, Gestaltungsanforderungen, Konzept evaluiert und Designkonzept – ergänzt um die durchgängige Methode „KI-gestützte Ideation“."
      className="w-full h-auto mt-14 sm:mt-20"
    />
  </section>
);
