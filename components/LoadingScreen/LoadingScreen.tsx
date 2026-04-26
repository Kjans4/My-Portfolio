"use client";

import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  "LOADING ASSETS.......",
  "SPAWNING PLAYER......",
  "RENDERING DUNGEON....",
  "READY.",
];

export default function LoadingScreen() {
  const [lines, setLines]       = useState<string[]>([]);
  const [done, setDone]         = useState(false);
  const [fadeOut, setFadeOut]   = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Don't show on second+ visits in the same session
    if (sessionStorage.getItem("booted")) {
      setDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setDone(true);
            sessionStorage.setItem("booted", "1");
          }, 500);
        }, 600);
      }
    }, 340);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div className={`${styles.screen} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.inner}>

        {/* Pixel logo */}
        <div className={styles.logo}>
          <span className={styles.bracket}>[</span>
          <span className={styles.logoText}>PORTFOLIO.EXE</span>
          <span className={styles.bracket}>]</span>
        </div>

        {/* Boot lines */}
        <div className={styles.terminal}>
          {lines.map((line, i) => (
            <p key={i} className={styles.line}>
              <span className={styles.prompt}>&gt; </span>
              {line}
              {i === lines.length - 1 && line !== "READY." && (
                <span className={styles.cursor}>▌</span>
              )}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className={styles.barWrap}>
          <div className={styles.barTrack}>
            <div className={styles.barFill} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.barPct}>{progress}%</span>
        </div>

      </div>
    </div>
  );
}