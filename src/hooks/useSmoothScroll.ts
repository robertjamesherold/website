import { useEffect } from 'react';
import Lenis from 'lenis';

let lenis: Lenis | null = null;

/** Access the active Lenis instance (e.g. for programmatic scrolling). */
export const getLenis = () => lenis;

/**
 * Smooth momentum scrolling for the whole page via Lenis.
 * Disabled when the user prefers reduced motion. Touch devices keep their
 * native momentum (Lenis only smooths wheel input here).
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      syncTouch: false,
    });
    lenis = instance;

    let rafId = 0;
    const raf = (time: number) => {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      if (lenis === instance) lenis = null;
    };
  }, []);
};
