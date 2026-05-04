// components/Navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { useSound } from "@/context/SoundContext";
import styles from "./navbar.module.css";

const navLinks = [
  { label: "ABOUT",    href: "#about",    icon: "◈" },
  { label: "PROJECTS", href: "#projects", icon: "◈" },
  { label: "CERTS",    href: "#certs",    icon: "◈" },
  { label: "STACK",    href: "#stack",    icon: "◈" },
  { label: "CONTACT",  href: "#contact",  icon: "◈" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen]           = useState(false);
  const { muted, toggleMute }             = useSound();

  // Track active section via IntersectionObserver
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

        {/* Bottom — sound toggle */}
        <div className={styles.bottom}>
          <button
            className={styles.soundBtn}
            onClick={toggleMute}
            aria-label={muted ? "Enable sound" : "Disable sound"}
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
          >
            {muted ? "🔇" : "🔊"}
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
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