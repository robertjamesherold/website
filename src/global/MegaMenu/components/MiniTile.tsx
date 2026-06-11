import { Styles } from '@/styles';
import { Link } from 'react-router-dom';
import { Component } from '@/components';
import type { Work } from '@/data/Global/works';

const MiniTile = ({
  work,
  active,
  index,
}: {
  work: Work;
  active: boolean;
  index: number;
}) => {
  return (
    <Link
      to={work.href}
      aria-current={active ? 'page' : undefined}
      tabIndex={active ? -1 : undefined}
      style={Styles.stagger(index)}
      className={`menu-item-stagger group relative flex flex-col rounded-md overflow-hidden border transition shadow-[var(--shadow-card)] ${
        active
          ? 'border-border-2 bg-grouped-1 opacity-50 cursor-default pointer-events-none'
          : 'border-border-1 bg-grouped-1 hover:border-primary-hover hover:-translate-y-0.5'
      }`}
    >
      <div className="relative aspect-16/10 overflow-hidden bg-grouped-2 border-b border-border-2">
        <Component.ResponsiveImg
          image={work.image.source}
          alt={work.image.alt}
          sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 50vw"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
            active ? 'grayscale' : 'group-hover:scale-[1.04]'
          }`}
          style={{ objectPosition: work.image.objectPosition ?? 'center' }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className={`mono text-[9px] tracking-[.22em] uppercase bg-bg/70 backdrop-blur-md ${work.textColor} ${work.border} border border-1/60 rounded-full px-2.5 py-1`}>
            {work.year}
          </span>
          {work.locked && (
            <span className="mono text-[9px] tracking-[.22em] uppercase bg-primary/15 backdrop-blur-md text-[#A8A6FF] border border-primary/40 rounded-full px-2.5 py-1">
              Gesperrt
            </span>
          )}
        </div>
        {active && (
          <span className="absolute top-3 right-3 mono text-[9px] tracking-[.22em] uppercase bg-bg/80 text-text-1 border border-1 rounded-full px-2.5 py-1">
            aktuelle Seite
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <div className="text-[15px] font-bold tracking-tight text-text-1">{work.title}</div>
        <div className="mono text-[10px] tracking-[.18em] text-text-3 uppercase line-clamp-1">
          {work.context}
        </div>
      </div>
    </Link>
  );
};

export { MiniTile };
