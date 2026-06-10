import { Styles } from '@/styles';
import { Icon } from '@/assets/icons';
import type { ContactCardProps } from '../types';

const ContactCard = ({
  href,
  icon,
  label,
  value,
  hint,
  index,
  target,
  rel,
  ariaLabel,
}: ContactCardProps) => (
  <a
    href={href}
    target={target}
    rel={rel}
    aria-label={ariaLabel}
    style={typeof Styles.stagger === 'function' ? Styles.stagger(index) : undefined}
    className="menu-item-stagger group relative flex flex-col rounded-md overflow-hidden border border-border-2 bg-grouped-1 shadow-[var(--shadow-card)] hover:border-primary/50 hover:-translate-y-0.5 transition p-6 sm:p-7 min-h-[180px]"
  >
    <div className="flex items-start justify-between">
      <span className="inline-flex w-11 h-11 items-center justify-center rounded-md bg-primary/15 border border-primary/30 text-primary-soft">
        {icon}
      </span>
      <span className="text-text-3 group-hover:text-primary-soft group-hover:translate-x-1 transition-all">
        <Icon.ArrowRight width="18px" height="18px" />
      </span>
    </div>
    <div className="mt-5 mono text-[10px] tracking-[.22em] text-text-3 uppercase">{label}</div>
    <div className="text-lg sm:text-xl font-bold tracking-tightish mt-1.5 break-all">
      {value}
    </div>
    <div className="text-text-3 text-[13px] mt-3">{hint}</div>
  </a>
);

export { ContactCard };