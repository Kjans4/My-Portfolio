import { useEffect, RefObject } from "react";

interface TitleRevealOptions {
  /** ms per character (default: 55) */
  charSpeed?: number;
  /** ms before animation starts after entering viewport (default: 80) */
  delay?: number;
  /** rootMargin for IntersectionObserver (default: "0px 0px -40px 0px") */
  rootMargin?: string;
  /** called when typewriter finishes — use to trigger the line animation */
  onTyped?: () => void;
}

export function useTitleReveal(
  containerRef: RefObject<HTMLElement | null>,
  title: string,
  setText: (t: string) => void,
  options: TitleRevealOptions = {}
) {
  const {
    charSpeed   = 55,
    delay       = 80,
    rootMargin  = "0px 0px -40px 0px",
    onTyped,
  } = options;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        setTimeout(() => {
          let i = 0;
          const iv = setInterval(() => {
            if (i <= title.length) {
              setText(title.slice(0, i));
              i++;
            } else {
              clearInterval(iv);
              onTyped?.();
            }
          }, charSpeed);
        }, delay);
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}