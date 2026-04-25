"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/placeholder";
import styles from "./hero.module.css";

const phrases = [
  "FULL-STACK DEVELOPER",
  "IT GRADUATE",
  "GAME ENTHUSIAST",
  "PROBLEM SOLVER",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <section className={styles.hero} id="about">
      <div className="page-wrapper">
        <div className={styles.inner}>

          {/* Pixel avatar / placeholder */}
          <div className={styles.avatarWrap}>
            <div className={styles.avatarFrame}>
              <div className={styles.avatarPlaceholder}>
                {/* Replace with <Image> when you have a real photo */}
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated", width: "100%", height: "100%" }}>
                  <rect x="20" y="8"  width="24" height="20" fill="#f7c59f"/>
                  <rect x="16" y="10" width="4"  height="14" fill="#f7c59f"/>
                  <rect x="44" y="10" width="4"  height="14" fill="#f7c59f"/>
                  <rect x="24" y="16" width="4"  height="4"  fill="#2c2c2a"/>
                  <rect x="36" y="16" width="4"  height="4"  fill="#2c2c2a"/>
                  <rect x="24" y="24" width="16" height="4"  fill="#e43b44"/>
                  <rect x="16" y="28" width="32" height="20" fill="#3fbcb4"/>
                  <rect x="8"  y="32" width="8"  height="12" fill="#3fbcb4"/>
                  <rect x="48" y="32" width="8"  height="12" fill="#3fbcb4"/>
                  <rect x="16" y="48" width="12" height="12" fill="#2c2c2a"/>
                  <rect x="36" y="48" width="12" height="12" fill="#2c2c2a"/>
                  <rect x="18" y="4"  width="28" height="8"  fill="#3d2b1f"/>
                  <rect x="14" y="8"  width="8"  height="4"  fill="#3d2b1f"/>
                  <rect x="42" y="8"  width="8"  height="4"  fill="#3d2b1f"/>
                </svg>
              </div>
              <div className={styles.avatarLabel}>PLAYER 1</div>
            </div>

            {/* Stat box */}
            <div className={styles.statBox}>
              <div className={styles.statRow}>
                <span>LVL</span><span className={styles.statVal}>04</span>
              </div>
              <div className={styles.statRow}>
                <span>XP</span>
                <div className={styles.xpBar}>
                  <div className={styles.xpFill} style={{ width: "72%" }} />
                </div>
              </div>
              <div className={styles.statRow}>
                <span>CLASS</span><span className={styles.statVal}>DEV</span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className={styles.textContent}>
            <p className={styles.greeting}>HELLO, WORLD! I AM</p>
            <h1 className={styles.name}>{personal.name.toUpperCase()}</h1>
            <div className={styles.typewriterRow}>
              <span className={styles.typewriter}>{displayed}</span>
              <span className={`${styles.cursor} animate-blink`}>▌</span>
            </div>
            <p className={styles.bio}>{personal.bio}</p>

            <div className={styles.actions}>
              <a href="#projects" className={styles.btnPrimary}>
                [ VIEW PROJECTS ]
              </a>
              <a href="#contact" className={styles.btnSecondary}>
                [ CONTACT ME ]
              </a>
            </div>

            <div className={styles.socials}>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GH
              </a>
              <span className={styles.divider}>//</span>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LI
              </a>
              <span className={styles.divider}>//</span>
              <a href={`mailto:${personal.email}`} className={styles.socialLink}>
                ML
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}