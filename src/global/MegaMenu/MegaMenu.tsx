import { useEffect, useRef } from 'react';
import type { MenuType } from './types';
import { hooks } from '@/hooks';
import { Sections } from './sections';


export const MegaMenu = ({
  type,
  open,
  route  ,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  type: MenuType;
  open: boolean;
  route  : string;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { mounted, visible } = hooks.useEnterExit(open, 280);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const label =
    type === 'projects' ? 'Arbeitsproben' : type === 'contact' ? 'Kontakt' : 'Menü';

  const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

  return (
    <div
      ref={ref}
      onMouseEnter={() => isDesktop() && onMouseEnter?.()}
      onMouseLeave={() => isDesktop() && onMouseLeave?.()}
      className={`absolute left-0 right-0 top-full border-t border-line-subtle bg-bg-1/95 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.4)] origin-top transition-all duration-300 h-[calc(100dvh-73px)] md:h-auto md:max-h-[75vh] overflow-y-auto overscroll-contain ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
    >
      <div className="mx-auto max-w-[1760px] px-6 sm:px-10 lg:px-20 py-8 sm:py-10">
        <div className="flex items-baseline justify-between mb-6">
          <div className="mono text-[11px] tracking-[.22em] text-text-3 uppercase">
            {label}
          </div>
          <div className="hidden md:block mono text-[11px] tracking-[.22em] text-text-3 uppercase">
            ESC zum Schließen
          </div>
        </div>

        {type === 'projects' ? (
          <Sections.Projects route={route} />
        ) : type === 'contact' ? (
          <Sections.Contact />
        ) : (
          <div className="flex flex-col gap-10">
            <section>
              <div className="mono text-[11px] tracking-[.22em] text-text-3 uppercase mb-5">
                Arbeitsproben
              </div>
              <Sections.Projects route={route} />
            </section>
            <section>
              <div className="mono text-[11px] tracking-[.22em] text-text-3 uppercase mb-5">
                Kontakt
              </div>
              <Sections.Contact />
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
