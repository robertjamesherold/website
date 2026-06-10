import { Component } from '@/components';
import { Images } from '@/assets/images';

const meta: { k: string; v: string }[] = [
  { k: 'ROLLE', v: 'Brand-Konzept, Visual Design, Webdesign,\nSocial-Media-Konzept' },
  { k: 'DAUER', v: 'Studienprojekt – Modul Cross-Media-Webdesign' },
  { k: 'TOOLS', v: 'Adobe Illustrator, Photoshop, Figma,\nKI-Bildgenerierung' },
  { k: 'SCHWERPUNKT', v: 'Markenentwicklung & Cross-Media-Konsistenz' },
];

export const VillaOlivetoHero = () => (
  <section className="container-x pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 reveal">
    <Component.BackLink />
    <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
      <Component.Pill>STUDIENPROJEKT · CROSS-MEDIA WEBDESIGN · 2024</Component.Pill>
    </div>
    <div className="grid xl:grid-cols-[1.4fr_1fr] gap-12 xl:gap-20 mt-10 sm:mt-12">
      <div>
        <h2 className="display mt-5 sm:mt-6">Villa Oliveto</h2>
        <p className="lede mt-6">
          Wie überträgt man die tief verwurzelte Tradition eines italienischen Familienbetriebs in eine zeitgemäße
          Markensprache, ohne die Authentizität zu verlieren? Villa Oliveto ist eine konzeptionelle Markenentwicklung
          für ein fiktives Premium-Olivenöl – vom Markenkern über die Verpackung bis zur digitalen Inszenierung in
          Web und Social Media.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="card-base p-7 sm:p-8 flex flex-col gap-4 h-fit">
          {meta.map((m) => (
            <div key={m.k} className="flex flex-col gap-1 sm:grid sm:grid-cols-[120px_1fr] sm:gap-5 sm:items-start text-[15px] text-text-2">
              <span className="mono text-[11px] tracking-[.16em] text-text-3">{m.k}</span>
              <span style={{ whiteSpace: 'pre-line' }}>{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-16 sm:mt-20 rounded-md overflow-hidden border border-border-2 bg-grouped-1 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <Component.ResponsiveImg
        image={Images.VillaOlivetoImages.Thumbnail}
        sizes="(min-width: 1760px) 1720px, 100vw"
        alt="Villa Oliveto – Cover-Slide mit goldenem Olivenbaum-Logo und Flasche"
        className="block w-full h-auto"
      />
    </div>
  </section>
);
