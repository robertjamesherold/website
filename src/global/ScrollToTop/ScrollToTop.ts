import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLenis } from "@/hooks/useSmoothScroll";

// Stop the browser from restoring the previous scroll position on back/forward
// navigation — otherwise it overrides our reset below and the page lands where
// it was last left instead of at the top.
if (typeof history !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function ScrollToTop() {
  const location = useLocation();

  // useLayoutEffect runs before the browser paints, so the new page never
  // flashes at the previous scroll position.
  useLayoutEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      // `force` overrides any scroll lock; `immediate` skips the animation so
      // it jumps straight to the top and keeps Lenis' internal state in sync.
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    // Reset the native scroll position too — covers the case where Lenis is
    // disabled (reduced motion) or not yet initialised on first mount.
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export { ScrollToTop };
