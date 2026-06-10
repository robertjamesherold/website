import { Component } from '@/components';
import { Images } from '@/assets/images';
import animatic from '@/assets/images/Schuelerhilfe/animatic.mp4';

const meta: { k: string; v: string }[] = [
  { k: 'ROLLE', v: 'Konzept, Drehbuch, Storyboard, Animation, Schnitt' },
  { k: 'DAUER', v: 'Studienprojekt – Modul Design audio-visueller Medien' },
  { k: 'TOOLS', v: 'Adobe After Effects, Premiere Pro,\nKI-Voice-Over' },
  { k: 'FORMAT', v: '30 Sekunden · 16:9 · Full HD' },
  { k: 'SCHWERPUNKT', v: 'Storytelling, Storyboard, Animation' },
];

export const SchuelerhilfeHero = () => (
  <section className="container-x pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28 reveal">
    <Component.BackLink />
    <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
      <Component.Pill>STUDIENPROJEKT · DESIGN AUDIO-VISUELLER MEDIEN · 2025</Component.Pill>
    </div>
    <div className="grid xl:grid-cols-[1.4fr_1fr] gap-12 xl:gap-20 mt-10 sm:mt-12">
      <div>
        <h2 className="display mt-5 sm:mt-6">Träume werden wahr</h2>
        <p className="lede mt-6">
          Wie übersetzt man eine Markenbotschaft in eine emotionale Mini-Geschichte? „Träume werden wahr" ist ein
          konzeptioneller TV-Werbespot für die Schülerhilfe – von Plot über Drehbuch und Storyboard bis zum fertigen
          Animatic. 30 Sekunden, drei Akte, eine klare Botschaft: Bildung öffnet Wege.
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
      <video
        src={animatic}
        autoPlay
        muted
        playsInline
        controls
        preload="metadata"
        poster={Images.SchuelerhilfeImages.Schluesselmoment1.src}
        className="block w-full h-auto"
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  </section>
);
