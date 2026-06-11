import { useEffect, useRef, useState } from 'react';

type ScrollRevealOptions = {
  /** How much of the element must be visible before it reveals (0–1). */
  threshold?: number;
  /** Margin around the viewport, e.g. '0px 0px -10% 0px' to trigger a bit early. */
  rootMargin?: string;
  /** Reveal only once (default) or re-hide when scrolled out of view. */
  once?: boolean;
};

/**
 * Reveal content on scroll via IntersectionObserver. Attach the ref to the
 * element you want to animate and drive a CSS transition with `visible`.
 * Respects `prefers-reduced-motion` (reveals immediately, no animation).
 *
 *   const { ref, visible } = useScrollReveal();
 *   return (
 *     <div
 *       ref={ref}
 *       className={`transition-all duration-700 ${
 *         visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
 *       }`}
 *     >
 *       ...
 *     </div>
 *   );
 */
export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: ScrollRevealOptions = {}) => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honor users who opt out of motion: show content right away.
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
};
