import { useEffect, useState } from "react";

type Breakpoints = {
  mobile: string;
  tablet: string;
  desktop: string;
};

const breakpoints: Breakpoints = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1279px)",
  desktop: "(min-width: 1280px)",
};

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<
    "mobile" | "tablet" | "desktop"
  >("desktop");

  useEffect(() => {
    const queries = Object.entries(breakpoints).map(([name, query]) => ({
      name: name as keyof Breakpoints,
      query,
      mediaQuery: window.matchMedia(query),
    }));

    const updateBreakpoint = () => {
      const active = queries.find(({ mediaQuery }) => mediaQuery.matches);

      if (active) {
        setBreakpoint(active.name);
      }
    };

    updateBreakpoint();

    queries.forEach(({ mediaQuery }) => {
      mediaQuery.addEventListener("change", updateBreakpoint);
    });

    return () => {
      queries.forEach(({ mediaQuery }) => {
        mediaQuery.removeEventListener("change", updateBreakpoint);
      });
    };
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
  };
}