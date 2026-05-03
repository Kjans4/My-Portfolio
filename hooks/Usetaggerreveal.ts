import { useEffect, RefObject } from "react";

interface StaggerRevealOptions {
  /** px offset before the grid is considered "in view" (default: -60) */
  rootMargin?: string;
  /** ms delay between each card (default: 100) */
  staggerDelay?: number;
  /** animation duration per card in ms (default: 320) */
  duration?: number;
  /** translateY start value in px (default: 12) */
  translateY?: number;
}

export function useStaggerReveal(
  gridRef: RefObject<HTMLElement | null>,
  options: StaggerRevealOptions = {}
) {
  const {
    rootMargin   = "0px 0px -60px 0px",
    staggerDelay = 100,
    duration     = 320,
    translateY   = 12,
  } = options;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;

        // Fire once then stop watching
        observer.disconnect();

        const items = Array.from(grid.children) as HTMLElement[];
        if (!items.length) return;

        const { animate, stagger } = await import("animejs");

        animate(items, {
          opacity:    [0, 1],
          translateY: [translateY, 0],
          duration,
          delay:      stagger(staggerDelay),
          easing:     "steps(3)",
        });
      },
      { rootMargin }
    );

    observer.observe(grid);

    return () => observer.disconnect();
  }, [gridRef, rootMargin, staggerDelay, duration, translateY]);
}