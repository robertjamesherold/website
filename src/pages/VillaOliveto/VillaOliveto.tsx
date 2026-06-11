import { Sections } from './sections';
import { NextProjectCTA } from './components';
import { Component } from '@/components';

export const VillaOliveto = () => (
  <main>
    <Sections.VillaOlivetoHero />
    <Component.Reveal><Sections.BriefingMarkenkern /></Component.Reveal>
    <Component.Reveal><Sections.ZielgruppePositionierung /></Component.Reveal>
    <Component.Reveal><Sections.Markenwelt /></Component.Reveal>
    <Component.Reveal><Sections.Reflexion /></Component.Reveal>
    <Component.Reveal><NextProjectCTA /></Component.Reveal>
  </main>
);
