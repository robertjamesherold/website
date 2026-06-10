import { Component } from '@/components';
import { Icon } from '@/assets/icons';
import { Images } from '@/assets/images';
import { data } from '../data';


export const Hero = () => (
  <section id="about" className="section-y container-x pt-20 sm:pt-24 lg:pt-28">
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
      <div>
        <Component.Pill tone='success'>DESIGN PORTFOLIO</Component.Pill>
        <h1 className="display mt-5 sm:mt-6">
          Von der Idee zum Interface – durchdacht und crossmedial.
        </h1>
        <p className="lede mt-6 max-w-195 text-text-2">
          Ich bin <b className="text-primary">Robert James Herold</b>, UX/UI Designer mit Leidenschaft für
          konzeptionell fundierte Gestaltung. Ob Mobile App, Markenauftritt oder Bewegtbild – ich denke
          Produkte <b className="text-primary">vom Nutzer aus</b> und bringe sie visuell auf den Punkt.
          Was alle Arbeiten verbindet: <b className="text-primary">Timing, Rhythmus und gezielte Aufmerksamkeitsführung</b> –
          ob in einer Page-Transition oder einem Storyboard.
        </p>
        <div className="flex flex-wrap gap-3.5 mt-8">
          <Component.Button href="#work" icon={<Icon.Briefcase />}>Projekte ansehen</Component.Button>
          <Component.Button variant="secondaryOutlined" href="#contact" icon={<Icon.Send />}>Kontaktiere mich</Component.Button>
        </div>
        <ul className="grid grid-cols-2 xl:grid-cols-4 gap-6 mt-12 sm:mt-16 pt-8 border-t border-line-subtle max-w-195">
          {data.stats.map((s) => (
            <li key={s.b} className="flex flex-col gap-1">
              <b className="text-2xl sm:text-3xl font-bold text-primary">{s.b}</b>
              <span className="mono text-[10px] sm:text-[11px] uppercase tracking-[.18em] text-text-3">{s.s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center">
          <Component.ResponsiveImg
            image={Images.HomeImages.Hero}
            alt="Portrait Robert James Herold"
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-[320px] lg:max-w-none h-auto lg:h-full object-cover"
            style={{ borderRadius: 'inherit', filter: 'saturate(.95) contrast(1.05)' }}
          />
       </div>
    </div>
  </section>
);