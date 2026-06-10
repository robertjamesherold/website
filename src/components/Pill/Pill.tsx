import type { PillTone } from './types';
import pillTones from './pillTones';

export const Pills = ({ tone = 'primary', children, radius = 'rounded-md' }: React.PropsWithChildren<{ tone?: PillTone, radius?: string }>) => (
  <span className={`inline-flex items-center gap-2 px-3.5 py-2 ${radius} mono text-[11px] sm:text-[12px] tracking-[.18em] border ${pillTones[tone]}`} >
    {children}
  </span>
);
