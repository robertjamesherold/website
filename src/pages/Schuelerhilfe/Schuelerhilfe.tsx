import { Sections } from './sections';
import { NextProjectCTA } from './components';

export const Schuelerhilfe = () => (
  <main>
    <Sections.SchuelerhilfeHero />
    <Sections.KonzeptStoryline />
    <Sections.DrehbuchVoiceover />
    <Sections.Storyboard />
    <Sections.AnimationUmsetzung />
    <Sections.Reflexion />
    <NextProjectCTA />
  </main>
);
