"use client";

import { personal } from "@/data/placeholder";
import styles from "@/styles/hero.module.css";
import { useEffect, useRef, useState } from "react";

const phrases = [
  "FULL-STACK DEVELOPER",
  "IT GRADUATE",
  "GAME ENTHUSIAST",
  "PROBLEM SOLVER",
];

const AVATAR_LABEL = "PLAYER 1";

export default function Hero() {
  // ── Typewriter state (unchanged) ──────────────────────────────────
  const [phraseIndex, setPhraseIndex]   = useState(0);
  const [displayed, setDisplayed]       = useState("");
  const [deleting, setDeleting]         = useState(false);

  // ── Entrance animation state ──────────────────────────────────────
  const [lvlDisplay, setLvlDisplay]     = useState("00");
  const [xpWidth, setXpWidth]           = useState(0);
  const [labelText, setLabelText]       = useState("");
  const [statsVisible, setStatsVisible] = useState(false);

  // ── Refs ──────────────────────────────────────────────────────────
  const avatarFrameRef  = useRef<HTMLDivElement>(null);
  const statBoxRef      = useRef<HTMLDivElement>(null);
  const textContentRef  = useRef<HTMLDivElement>(null);
  const statRowsRef     = useRef<HTMLDivElement[]>([]);

  // ── Typewriter effect (unchanged) ─────────────────────────────────
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

  // ── Entrance animation sequence ───────────────────────────────────
  useEffect(() => {
    async function runEntrance() {
      const { animate, stagger } = await import("animejs");

      // Short delay so page paint settles first
      await new Promise((r) => setTimeout(r, 120));

      // ── 1. Avatar frame spawns in ──────────────────────────────────
      if (avatarFrameRef.current) {
        await animate(avatarFrameRef.current, {
          opacity:    [0, 1],
          translateY: [-20, 0],
          duration:   400,
          easing:     "steps(4)",
        });
      }

      // ── 2. "PLAYER 1" label types in ──────────────────────────────
      await new Promise<void>((resolve) => {
        let i = 0;
        const iv = setInterval(() => {
          if (i <= AVATAR_LABEL.length) {
            setLabelText(AVATAR_LABEL.slice(0, i));
            i++;
          } else {
            clearInterval(iv);
            resolve();
          }
        }, 60);
      });

      await new Promise((r) => setTimeout(r, 100));

      // ── 3. Stat rows flash in staggered ───────────────────────────
      setStatsVisible(true);
      // Wait one frame for React to render the rows
      await new Promise<void>((r) =>
        requestAnimationFrame(() => requestAnimationFrame(() => r()))
      );

      const rows = statRowsRef.current.filter(Boolean);
      if (rows.length) {
        await animate(rows, {
          opacity:  [0, 1],
          duration: 80,
          delay:    stagger(120),
          easing:   "steps(1)",
        });
      }

      await new Promise((r) => setTimeout(r, 80));

      // ── 4. LVL counts up 00 → 04 ─────────────────────────────────
      const lvlObj = { val: 0 };
      await animate(lvlObj, {
        val:      4,
        duration: 400,
        easing:   "steps(4)",
        onUpdate() {
          setLvlDisplay(String(Math.round(lvlObj.val)).padStart(2, "0"));
        },
      });

      // ── 5. XP bar fills 0 → 72 ───────────────────────────────────
      const xpObj = { val: 0 };
      await animate(xpObj, {
        val:      72,
        duration: 600,
        easing:   "steps(10)",
        onUpdate() {
          setXpWidth(Math.round(xpObj.val));
        },
      });

      await new Promise((r) => setTimeout(r, 100));

      // ── 6. Text content slides in from right ──────────────────────
      if (textContentRef.current) {
        await animate(textContentRef.current, {
          opacity:    [0, 1],
          translateX: [16, 0],
          duration:   320,
          easing:     "steps(4)",
        });
      }
    }

    runEntrance();
  }, []);

  return (
    <section className={styles.hero} id="about">
      <div className="page-wrapper">
        <div className={styles.inner}>

          {/* ── Avatar col ── */}
          <div className={styles.avatarWrap}>

            {/* Frame — starts invisible, Anime drops it in */}
            <div
              ref={avatarFrameRef}
              className={styles.avatarFrame}
              style={{ opacity: 0 }}
            >
              <div className={styles.avatarPlaceholder}>
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ imageRendering: "pixelated", width: "100%", height: "100%" }}
                >
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

              {/* Label types in via state */}
              <div className={styles.avatarLabel}>
                {labelText}
                {labelText.length < AVATAR_LABEL.length && (
                  <span className={styles.labelCursor}>▌</span>
                )}
              </div>
            </div>

            {/* Stat box — rows hidden until statsVisible */}
            <div ref={statBoxRef} className={styles.statBox}>

              <div
                className={styles.statRow}
                ref={(el) => { if (el) statRowsRef.current[0] = el; }}
                style={{ opacity: statsVisible ? undefined : 0 }}
              >
                <span>LVL</span>
                <span className={styles.statVal}>{lvlDisplay}</span>
              </div>

              <div
                className={styles.statRow}
                ref={(el) => { if (el) statRowsRef.current[1] = el; }}
                style={{ opacity: statsVisible ? undefined : 0 }}
              >
                <span>XP</span>
                <div className={styles.xpBar}>
                  <div className={styles.xpFill} style={{ width: `${xpWidth}%` }} />
                </div>
              </div>

              <div
                className={styles.statRow}
                ref={(el) => { if (el) statRowsRef.current[2] = el; }}
                style={{ opacity: statsVisible ? undefined : 0 }}
              >
                <span>CLASS</span>
                <span className={styles.statVal}>DEV</span>
              </div>

            </div>
          </div>

          {/* ── Text content — starts invisible, slides in last ── */}
          <div
            ref={textContentRef}
            className={styles.textContent}
            style={{ opacity: 0 }}
          >
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