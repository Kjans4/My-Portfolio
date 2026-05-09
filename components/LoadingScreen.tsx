"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/LoadingScreen.module.css";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  "LOADING ASSETS.......",
  "SPAWNING PLAYER......",
  "RENDERING DUNGEON....",
  "READY.",
];

export default function LoadingScreen() {
  const [done, setDone]       = useState(false);
  const [lines, setLines]     = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const screenRef  = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);
  const termRef    = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const barPctRef  = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) {
      setDone(true);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let animeInstance: any = null;

    async function runBootSequence() {
      // Anime.js v4 — named exports, animate(target, params) signature
      const { animate } = await import("animejs");

      // ── TIMING CONSTANTS ────────────────────────────────────────────
      const CHAR_SPEED       = 25;  // ms per char for normal lines (was 38)
      const CHAR_SPEED_READY = 80;  // ms per char for "READY."    (was 120)
      const LINE_PAUSE       = 140; // ms between lines             (was 220)
      const READY_PAUSE      = 300; // ms pause after "READY."      (was 500)

      // ── 1. LOGO flicker-in (400ms, was 600ms) ───────────────────────
      if (logoRef.current) {
        animeInstance = animate(logoRef.current, {
          opacity:  [0, 0.2, 0, 0.6, 0, 1],
          duration: 400,
          easing:   "steps(6)",
        });
        await animeInstance;
      }

      // ── 2. TYPE each boot line, then advance progress bar ──────────
      for (let i = 0; i < BOOT_LINES.length; i++) {
        const lineText = BOOT_LINES[i];
        const isReady  = lineText === "READY.";

        // Push an empty string first so the <p> exists in the DOM
        await new Promise<void>((resolve) => {
          setLines((prev) => [...prev, ""]);
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        });

        // Animate each character one-by-one
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
          }, isReady ? CHAR_SPEED_READY : CHAR_SPEED);
        });

        // Advance progress bar
        const targetPct = Math.round(((i + 1) / BOOT_LINES.length) * 100);
        if (barFillRef.current && barPctRef.current) {
          const obj = { value: progress };
          animate(obj, {
            value:    targetPct,
            duration: 200,
            easing:   "steps(6)",
            onUpdate() {
              setProgress(Math.round(obj.value));
            },
          });
        }

        await new Promise((r) => setTimeout(r, isReady ? READY_PAUSE : LINE_PAUSE));
      }

      // ── 3. "READY." yellow pulse (350ms, was 500ms) ──────────────────
      const readyEl = termRef.current?.querySelector<HTMLElement>(
        `.${styles.lineReady}`
      );
      if (readyEl) {
        await animate(readyEl, {
          color:    ["#3fbcb4", "#f7d51d", "#3fbcb4"],
          duration: 350,
          easing:   "steps(4)",
        });
      }

      // ── 4. Fade out (150ms pause + 400ms fade, was 200ms + 500ms) ────
      await new Promise((r) => setTimeout(r, 150));
      setFadeOut(true);

      if (screenRef.current) {
        await animate(screenRef.current, {
          opacity:  [1, 0],
          duration: 400,
          easing:   "steps(4)",
        });
      }

      setDone(true);
      sessionStorage.setItem("booted", "1");
    }

    runBootSequence();

    return () => {
      animeInstance?.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (done) return null;

  return (
    <div
      ref={screenRef}
      className={`${styles.screen} ${fadeOut ? styles.fadeOut : ""}`}
    >
      <div className={styles.inner}>

        {/* Pixel logo */}
        <div ref={logoRef} className={styles.logo} style={{ opacity: 0 }}>
          <span className={styles.bracket}>[</span>
          <span className={styles.logoText}>PORTFOLIO.EXE</span>
          <span className={styles.bracket}>]</span>
        </div>

        {/* Boot lines */}
        <div ref={termRef} className={styles.terminal}>
          {lines.map((text, i) => {
            const isReady    = BOOT_LINES[i] === "READY.";
            const isLastLine = i === lines.length - 1;
            const isTyping   = text.length < BOOT_LINES[i]?.length;

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

        {/* Progress bar */}
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