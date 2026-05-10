// components/Navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { useSound } from "@/context/SoundContext";
import { useSpin } from "@/context/SpinContext";
import styles from "../styles/navbar.module.css";

const navLinks = [
  { label: "ABOUT",    href: "#about",    icon: "◈" },
  { label: "PROJECTS", href: "#projects", icon: "◈" },
  { label: "STACK",    href: "#stack",    icon: "◈" },
  { label: "CERTS",    href: "#certs",    icon: "◈" },
  { label: "CONTACT",  href: "#contact",  icon: "◈" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen]           = useState(false);
  const { muted, toggleMute }             = useSound();
  const { spinSpeed, toggleSpin }         = useSpin();

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <nav className={styles.sidebar}>

        {/* Logo */}
        <div className={styles.logoWrap}>
          <span className={styles.logoIcon}>K</span>
          <span className={styles.logoText}>
            <span className={styles.bracket}>[</span>
            KESHIERJAN
            <span className={styles.bracket}>]</span>
          </span>
        </div>

        {/* Nav links */}
        <ul className={styles.links}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.linkItem} ${isActive ? styles.active : ""}`}
                >
                  <span className={styles.linkIcon}>
                    {isActive ? "▶" : link.icon}
                  </span>
                  <span className={styles.linkLabel}>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Bottom — sound + spin toggles */}
        <div className={styles.bottom}>
          {/* Spin speed toggle */}
          <button
            className={styles.soundBtn}
            onClick={toggleSpin}
            aria-label={spinSpeed === "fast" ? "Slow down donut" : "Speed up donut"}
            suppressHydrationWarning
          >
            <span className={styles.soundIcon}>◎</span>
            <span className={styles.soundLabel}>
              {spinSpeed === "fast" ? "SPIN: FAST" : "SPIN: SLOW"}
            </span>
          </button>

          {/* Sound toggle */}
          <button
            className={styles.soundBtn}
            onClick={toggleMute}
            aria-label={muted ? "Enable sound" : "Disable sound"}
            suppressHydrationWarning
          >
            <span className={styles.soundIcon}>{muted ? "🔇" : "🔊"}</span>
            <span className={styles.soundLabel}>
              {muted ? "SOUND: OFF" : "SOUND: ON"}
            </span>
          </button>
        </div>

      </nav>

      {/* ── Mobile top bar ── */}
      <div className={styles.mobileBar}>
        <span className={styles.mobileLogo}>
          <span className={styles.bracket}>[</span>
          KESHIERJAN
          <span className={styles.bracket}>]</span>
        </span>

        <div className={styles.mobileControls}>
          <button
            className={styles.mobileSoundBtn}
            onClick={toggleMute}
            aria-label={muted ? "Enable sound" : "Disable sound"}
            suppressHydrationWarning
          >
            {muted ? "🔇" : "🔊"}
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            suppressHydrationWarning
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className={styles.mobileMenu}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.mobileLink} ${isActive ? styles.active : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {isActive ? "▶ " : "◈ "}{link.label}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}