import { Sections } from './sections';
import { NextProjectCTA } from './components';
import { Component } from '@/components';

export const Schuelerhilfe = () => (
  <main>
    <Sections.SchuelerhilfeHero />
    <Component.Reveal><Sections.KonzeptStoryline /></Component.Reveal>
    <Component.Reveal><Sections.DrehbuchVoiceover /></Component.Reveal>
    <Component.Reveal><Sections.Storyboard /></Component.Reveal>
    <Component.Reveal><Sections.AnimationUmsetzung /></Component.Reveal>
    <Component.Reveal><Sections.Reflexion /></Component.Reveal>
    <Component.Reveal><NextProjectCTA /></Component.Reveal>
  </main>
);
