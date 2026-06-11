import { Component } from '@/components';
import { hooks } from '@/hooks';

const FIGMA_LIGHT =
  'https://dulcet-axolotl-191c40.netlify.app/home';
const FIGMA_DARK =
  'https://dulcet-axolotl-191c40.netlify.app/home';

export const Prototyp = () => {
  const { isDark } = hooks.useTheme();
  const src = isDark ? FIGMA_DARK : FIGMA_LIGHT;

  return (
    <section className="section-y container-x reveal">
      <Component.SectionHeading
        num="10" label="INTERAKTIVER PROTOTYP"
        title="CodeScanner zum Anfassen"
        sub="Der finale Figma-Prototyp bildet den Bearbeitungspfad vollständig ab – Übersicht, Bereinigen, Absichern und Optimieren als zusammenhängende Klickstrecke. Nutzende erleben den geführten Workflow direkt im Browser."
      />

      <div className="mt-12 sm:mt-16 rounded-md border border-border-2 bg-grouped-1 p-3 sm:p-4" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="relative w-full aspect-video overflow-hidden rounded-md bg-bg-1">
          <iframe
            key={src}
            src={src}
            title="CodeScanner – Interaktiver Figma-Prototyp"
            loading="lazy"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
