import { Sections } from './sections';
import { Component } from '@/components';

export const CodeScanner = () => {
  return (
    <main>
      <Sections.CodeScannerHero />
      <Component.Reveal><Sections.VomSchreibenZumPruefen /></Component.Reveal>
      <Component.Reveal><Sections.VertrauenKalibrieren /></Component.Reveal>
      <Component.Reveal><Sections.Fundament /></Component.Reveal>
      <Component.Reveal><Sections.Research /></Component.Reveal>
      <Component.Reveal><Sections.ToolsBefunde /></Component.Reveal>
      <Component.Reveal><Sections.DoubleDiamond /></Component.Reveal>
      <Component.Reveal><Sections.DreiPerspektiven /></Component.Reveal>
      <Component.Reveal><Sections.IterativerProzess /></Component.Reveal>
      <Component.Reveal><Sections.Loesung /></Component.Reveal>
      <Component.Reveal><Sections.DesignSystem /></Component.Reveal>
      <Component.Reveal><Sections.KonzeptHaeltStand /></Component.Reveal>
      <Component.Reveal><Sections.GrenzenDokumentiert /></Component.Reveal>
      <Component.Reveal><Sections.GroessereStichprobe /></Component.Reveal>
      <Component.Reveal><Sections.Fazit /></Component.Reveal>
      <Component.Reveal><Sections.DownloadArbeit /></Component.Reveal>
    </main>
  );
};
