"use client";

import { useRef, useState, useCallback } from "react";
import { useTitleReveal } from "@/hooks/useTitleReveal";
import styles from "@/styles/SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  /** Pass your section's .sectionTitle class for font-size overrides if needed */
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  const containerRef             = useRef<HTMLDivElement>(null);
  const lineRef                  = useRef<HTMLSpanElement>(null);
  const [text, setText]          = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [lineReady, setLineReady]   = useState(false);

  const onTyped = useCallback(async () => {
    // Brief pause, then hide cursor and draw the line
    setTimeout(async () => {
      setShowCursor(false);
      setLineReady(true);

      if (lineRef.current) {
        const { animate } = await import("animejs");
        animate(lineRef.current, {
          scaleX:   [0, 1],
          duration: 400,
          easing:   "steps(6)",
        });
      }
    }, 120);
  }, []);

  useTitleReveal(containerRef, title, setText, { onTyped });

  return (
    <div ref={containerRef} className={styles.titleRow}>
      <h2 className={`${styles.title} ${className ?? ""}`}>
        {text}
        {showCursor && (
          <span className={styles.cursor}>▌</span>
        )}
      </h2>
      {/* The decorative line — scaleX animated by Anime.js */}
      <span
        ref={lineRef}
        className={`${styles.line} ${lineReady ? styles.lineReady : ""}`}
      />
    </div>
  );
}