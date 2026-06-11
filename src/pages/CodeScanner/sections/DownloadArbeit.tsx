import { Component } from '@/components/';
import { Icon } from '@/assets/icons';
import { hooks } from '@/hooks';

export const DownloadArbeit = () => {
  const { isDark } = hooks.useTheme();
  // Open the documentation that matches the active theme. Drop the two PDFs
  // into public/docs/ (see public/docs/README.md).
  const pdf = isDark ? '/docs/dokumentation-dark.pdf' : '/docs/dokumentation-light.pdf';

  return (
    <section className="container-x py-16 sm:py-24 reveal">
      <Component.Card className="p-10 sm:p-12 lg:p-14 text-center flex flex-col gap-6 items-center sm:text-center bg-linear-to-b from-primary/8 to-transparent">
        <Component.Pill tone="success">BACHELORARBEIT · BEWERTET MIT 1,0</Component.Pill>
        <h3 className="m-0 text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight">
          Die komplette Dokumentation ansehen
        </h3>
        <p className="m-0 text-text-2 text-base sm:text-lg max-w-160 leading-snug">
          Vollständige Bachelorarbeit als PDF — bewertet mit der Bestnote 1,0.
          Öffnet automatisch die zum aktiven Theme passende Light- oder Dark-Mode-Fassung.
        </p>
        <Component.Button
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Komplette Dokumentation als PDF in neuem Tab öffnen"
          icon={<Icon.ArrowRight width="18px" height="18px" />}
          className="mt-2"
        >
          Komplette Dokumentation ansehen (PDF)
        </Component.Button>
      </Component.Card>
    </section>
  );
};
