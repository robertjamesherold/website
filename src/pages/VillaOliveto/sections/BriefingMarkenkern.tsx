import { Component } from '@/components';
import { Images } from '@/assets/images';
import { Caption } from '../components';

export const BriefingMarkenkern = () => (
  <section className="section-y container-x reveal">
    <Component.SectionHeading
      num="01"
      label="BRIEFING & MARKENKERN"
      title="Tradition trifft Premium-Markt"
      sub="Villa Oliveto ist ein fiktiver, italienischer Olivenöl-Hersteller in sechster Generation – mit Sitz in der Region La Marchesa, Foggia. Der Markenkern: traditionelles Handwerk, biologischer Anbau, limitierte Editionen. Der Anspruch: ein Premium-Produkt, das sich klar vom Einheitslook der Olivenöl-Regale abhebt."
    />

    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start mt-12">
      <div className="text-text-2 text-[16px] sm:text-[17px] leading-relaxed space-y-5">
        <p>Das Briefing forderte eine vollständige Markenwelt über drei Medien hinweg:</p>
        <ul className="space-y-3 pl-5 list-disc marker:text-primary">
          <li>Produktdesign mit Verpackungssystem für drei Sorten</li>
          <li>Website mit Online-Shop-Anbindung</li>
          <li>Social-Media-Auftritt mit kuratiertem Content-System</li>
        </ul>
        <blockquote className="border-l-2 border-primary pl-6 py-4 pr-4 text-[17px] leading-relaxed text-text-2 bg-linear-to-r from-primary/10 to-transparent rounded-r-lg">
          Die zentrale Gestaltungsfrage: Wie kommuniziert man „traditionell", ohne „altmodisch" zu wirken?
        </blockquote>
      </div>
      <div>
        <div
          className="relative rounded-md overflow-hidden border border-border-2 bg-linear-to-br from-grouped-2 to-grouped-1 flex items-center justify-center"
          style={{ aspectRatio: '4/5' }}
        >
          <Component.ResponsiveImg
            image={Images.VillaOlivetoImages.Bottle}
            sizes="(min-width: 1024px) 40vw, 100vw"
            alt="Villa Oliveto – Flasche Traditionale mit Olivenbaum-Logo"
            className="h-[90%] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
          />
        </div>
        <Caption>
          Der Markenkern wurde in einem zentralen Logo verankert: ein stilisierter Olivenbaum
          in metallischem Gold, der Tradition und Premium-Anspruch zugleich trägt.
        </Caption>
      </div>
    </div>
  </section>
);
