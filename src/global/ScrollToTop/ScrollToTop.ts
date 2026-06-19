import { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "@/hooks/useSmoothScroll";

// Stop the browser from restoring the previous scroll position on back/forward
// navigation — otherwise it overrides our reset below and the page lands where
// it was last left instead of at the top.
if (typeof history !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Fixed navbar height — hash targets are offset by this so the section isn't
// hidden underneath it.
const NAV_OFFSET = 80;

function ScrollToTop() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  // useLayoutEffect runs before the browser paints, so the new page never
  // flashes at the previous scroll position.
  useLayoutEffect(() => {
    const lenis = getLenis();
    const changedPage = prevPath.current !== location.pathname;
    prevPath.current = location.pathname;

    // Hash present (e.g. "/#work") → scroll to that section instead of the top.
    const id = location.hash ? decodeURIComponent(location.hash.slice(1)) : "";
    const target = id ? document.getElementById(id) : null;

    if (target) {
      if (lenis) {
        // On a cross-page jump, land at the top first so the scroll-to-anchor
        // animates from a known position, not the previous page's offset.
        if (changedPage) lenis.scrollTo(0, { immediate: true, force: true });
        lenis.scrollTo(target, { offset: -NAV_OFFSET, force: true });
      } else {
        // Lenis disabled (reduced motion) or not yet initialised.
        const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo(0, top);
      }
      return;
    }

    // No hash → reset to the top.
    if (lenis) {
      // `force` overrides any scroll lock; `immediate` skips the animation so
      // it jumps straight to the top and keeps Lenis' internal state in sync.
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    // Reset the native scroll position too — covers the case where Lenis is
    // disabled (reduced motion) or not yet initialised on first mount.
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.key]);

  return null;
}

export { ScrollToTop };
