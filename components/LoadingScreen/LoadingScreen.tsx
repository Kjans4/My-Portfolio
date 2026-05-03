"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LoadingScreen.module.css";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  "LOADING ASSETS.......",
  "SPAWNING PLAYER......",
  "RENDERING DUNGEON....",
  "READY.",
];

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const screenRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const barPctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) {
      setDone(true);
      return;
    }

    let animeInstance: any = null;

    async function runBootSequence() {
      // Anime.js v4 uses named exports
      const { animate } = await import("animejs");

      // ── 1. LOGO flicker-in ──────────────────────────────────────────
      if (logoRef.current) {
        // v4: animate(targets, parameters)
        animeInstance = animate(logoRef.current, {
          opacity: [0, 0.2, 0, 0.6, 0, 1],
          duration: 600,
          easing: "steps(6)",
        });
        // v4 uses .thenable or you can simply await the instance
        await animeInstance;
      }

      // ── 2. TYPE each boot line, then advance progress bar ──────────
      for (let i = 0; i < BOOT_LINES.length; i++) {
        const lineText = BOOT_LINES[i];
        const isReady = lineText === "READY.";

        await new Promise<void>((resolve) => {
          setLines((prev) => [...prev, ""]);
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        });

        await new Promise<void>((resolve) => {
          let charIndex = 0;
          const charInterval = setInterval(() => {
            if (charIndex <= lineText.length) {
              setLines((prev) => {
                const next = [...prev];
                next[i] = lineText.slice(0, charIndex);
                return next;
              });
              charIndex++;
            } else {
              clearInterval(charInterval);
              resolve();
            }
          }, isReady ? 120 : 38);
        });

        const targetPct = Math.round(((i + 1) / BOOT_LINES.length) * 100);
        if (barFillRef.current && barPctRef.current) {
          const obj = { value: progress };
          animate(obj, {
            value: targetPct,
            duration: 280,
            easing: "steps(8)",
            onUpdate() { // Note: 'update' is often 'onUpdate' in stricter v4 types
              const v = Math.round(obj.value);
              setProgress(v);
            },
          });
        }

        await new Promise((r) => setTimeout(r, isReady ? 500 : 220));
      }

      // ── 3. "READY." yellow pulse ─────────────────────────────────────
      const readyEl = termRef.current?.querySelector<HTMLElement>(
        `.${styles.lineReady}`
      );
      if (readyEl) {
        await animate(readyEl, {
          color: ["#3fbcb4", "#f7d51d", "#3fbcb4"],
          duration: 500,
          easing: "steps(4)",
        });
      }

      // ── 4. Fade out entire screen ────────────────────────────────────
      await new Promise((r) => setTimeout(r, 200));
      setFadeOut(true);

      if (screenRef.current) {
        await animate(screenRef.current, {
          opacity: [1, 0],
          duration: 500,
          easing: "steps(5)",
        });
      }

      setDone(true);
      sessionStorage.setItem("booted", "1");
    }

    runBootSequence();

    return () => {
      if (animeInstance && typeof animeInstance.pause === "function") {
        animeInstance.pause();
      }
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={screenRef}
      className={`${styles.screen} ${fadeOut ? styles.fadeOut : ""}`}
    >
      <div className={styles.inner}>
        <div ref={logoRef} className={styles.logo} style={{ opacity: 0 }}>
          <span className={styles.bracket}>[</span>
          <span className={styles.logoText}>PORTFOLIO.EXE</span>
          <span className={styles.bracket}>]</span>
        </div>

        <div ref={termRef} className={styles.terminal}>
          {lines.map((text, i) => {
            const isReady = BOOT_LINES[i] === "READY.";
            const isLastLine = i === lines.length - 1;
            const isTyping = text.length < (BOOT_LINES[i]?.length || 0);

            return (
              <p
                key={i}
                className={`${styles.line} ${isReady ? styles.lineReady : ""}`}
              >
                <span className={styles.prompt}>&gt; </span>
                {text}
                {isLastLine && isTyping && (
                  <span className={styles.cursor}>▌</span>
                )}
              </p>
            );
          })}
        </div>

        <div className={styles.barWrap}>
          <div className={styles.barTrack}>
            <div
              ref={barFillRef}
              className={styles.barFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span ref={barPctRef} className={styles.barPct}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}