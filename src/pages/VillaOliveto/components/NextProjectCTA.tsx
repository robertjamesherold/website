import { Component } from '@/components';
import { Icon } from '@/assets/icons';

/** Closing call-to-action that points back to the project overview. */
export const NextProjectCTA = () => (
  <section className="container-x pb-24 sm:pb-32">
    <Component.Card className="p-10 sm:p-12 lg:p-14 flex flex-col gap-6 items-start sm:items-center sm:text-center bg-linear-to-b from-primary/8 to-transparent border-primary/25">
      <span className="mono text-[11px] tracking-[.22em] text-text-3 uppercase">Weiter geht's</span>
      <h3 className="m-0 text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tightish">
        Weitere Projekte ansehen
      </h3>
      <p className="m-0 text-text-2 text-base sm:text-lg max-w-160 leading-snug">
        Zurück zur Übersicht aller Fallstudien.
      </p>
      <Component.Button
        href="/#work"
        icon={<Icon.ArrowRight width="18px" height="18px" />}
        className="mt-2"
      >
        Zu den Projekten
      </Component.Button>
    </Component.Card>
  </section>
);
