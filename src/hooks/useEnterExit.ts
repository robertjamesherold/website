import { useEffect, useState } from 'react';

/**
 * Mount/unmount with separate "visible" state so CSS transitions can play
 * on enter AND exit. Use:
 *
 *   const { mounted, visible } = useEnterExit(open, 280);
 *   if (!mounted) return null;
 *   return <div className={`transition-all duration-300 ${visible ? '...' : '...'}`}>
 */
export const useEnterExit = (open: boolean, exitMs = 280) => {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      // Two RAFs ensure the element is mounted with initial classes
      // before we toggle to visible — guarantees the transition fires.
      const id1 = requestAnimationFrame(() => {
        setMounted(true);
        const id2 = requestAnimationFrame(() => setVisible(true));
        cleanup = () => cancelAnimationFrame(id2);
      });
      let cleanup = () => cancelAnimationFrame(id1);
      return () => cleanup();
    } else {
      const id1 = requestAnimationFrame(() => setVisible(false));
      const id2 = window.setTimeout(() => setMounted(false), exitMs);
      return () => {
        cancelAnimationFrame(id1);
        window.clearTimeout(id2);
      };
    }
  }, [open, exitMs]);

  return { mounted, visible };
};
