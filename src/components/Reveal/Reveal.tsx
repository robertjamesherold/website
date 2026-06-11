import type { ReactNode } from 'react';
import { hooks } from '@/hooks';

type RevealProps = {
  children: ReactNode;
  /** Tailwind duration class for the transition. */
  duration?: string;
  /** Delay before the transition starts (e.g. 'delay-100'). */
  delay?: string;
  /** How much of the element must be visible before revealing (0–1). */
  threshold?: number;
  className?: string;
  /** Render as a different element (default 'div'). */
  as?: 'div' | 'section';
};

/**
 * Wraps content and fades/slides it in once it scrolls into view.
 * Built on `useScrollReveal`, so it respects `prefers-reduced-motion`.
 */
export const Reveal = ({
  children,
  duration = 'duration-700',
  delay = '',
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}: RevealProps) => {
  const { ref, visible } = hooks.useScrollReveal<HTMLDivElement>({ threshold });

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${duration} ${delay} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </Tag>
  );
};
