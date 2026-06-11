import { Component } from '@/components';
import { Icon } from '@assets/icons';
import { Data } from '@/data';
import { Link } from 'react-router';

export const WorkGrid = () => (
  <section id="work" className="section-y container-x reveal">
    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-end mb-16 sm:mb-20">
      <div>
        <Component.Eyebrow num="01" label="ARBEITSPROBEN" />
        <h2 className="title mt-5 sm:mt-6">Ausgewählte Fallstudien</h2>
      </div>
      <p className="lede">
        Drei Projekte aus dem Studium – jedes mit anderem Schwerpunkt:
        argumentative UX-Tiefe, cross-mediale Markenführung, Mobile UX und narratives
        Bewegtbild.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
      {Data.Global.Works.map((w) => (
        <Link          
          key={w.href}
          to={w.href}
         className="group relative card-base bg-grouped-1 border border-border-2 rounded-md overflow-hidden flex flex-col p-0 transition hover:border-border-1 shadow-[var(--shadow-card)]"
          style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}
        >
          {/* Preview image */}
          <div className="relative aspect-16/10 overflow-hidden border-b border-border-2 bg-grouped-2">
            <Component.ResponsiveImg
              image={w.image.source}
              sizes="(min-width: 640px) 50vw, 100vw"
              alt={w.image.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: w.image.objectPosition ?? 'center' }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className={`mono text-[10px] tracking-[.22em] uppercase bg-bg/70 backdrop-blur-md ${w.textColor} border ${w.border} rounded-full px-3 py-1.5`}>
                {w.year}
              </span>
            </div>
          </div>

          {/* Card content */}
          <div className="p-7 sm:p-8 flex flex-col gap-5 flex-1">
            <div className="mono text-[11px] tracking-[.18em] text-text-3 uppercase">
              {w.context}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {w.title}
            </h3>

            <p className="text-text-2 text-[15px] leading-relaxed">{w.blurb}</p>

            {/* Discipline chips — the part that says what kind of work this was */}
            <ul className="flex flex-wrap gap-2 mt-1">
              {w.disciplines.map((d) => (
                <li
                  key={d}
                >
                    <Component.Pill tone="primary" radius="rounded-full">
                  {d}</Component.Pill>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end mt-auto pt-5 border-t border-border-2">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary group-hover:translate-x-1 transition-transform">
                Case Study ansehen
                <Icon.ArrowRight width="16px" height="16px" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
