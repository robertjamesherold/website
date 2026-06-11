import { MegaMenuComponents } from '../components';
import { Link } from 'react-router-dom';
import { Icon } from '@/assets/icons';
import { Styles } from '@/styles';
import { Data } from '@/data';

const ProjectsContent = ({ route }: { route: string }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
    <Link
      to="/"
      style={Styles.stagger(0)}
      className="menu-item-stagger group relative sm:row-span-2 rounded-md overflow-hidden border border-border-2 shadow-[var(--shadow-card)] hover:border-primary/50 transition flex flex-col justify-between min-h-[260px] p-6"
      css-bg=""
      data-no-zoom
    >
      <div
        className="absolute inset-0 -z-10 bg-grouped-1"
           
      />
      <div>
        <div className="mono text-[10px] tracking-[.22em] text-primary uppercase">
          Übersicht
        </div>
        <div className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 leading-tight text-text-1">
          Zurück zur<br />Startseite
        </div>
        <p className="text-text-2 text-[14px] leading-relaxed mt-4 max-w-[260px]">
          Alle Fallstudien, Hero und Kontakt auf einen Blick.
        </p>
      </div>
      <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary-soft group-hover:translate-x-1 transition-transform">
        Zur Übersicht
        <Icon.ArrowRight width="16px" height="16px" />
      </span>
    </Link>
    { Data.Global.Works.map((work, i) => (
      <MegaMenuComponents.MiniTile
        key={work.title}
        work={work}
        active={route === work.route}
        index={i + 1}
      />
    )) }
  </div>
);

export { ProjectsContent };