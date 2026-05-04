"use client";

import { useState, useEffect } from "react";
import { useSound } from "@/context/SoundContext";
import styles from "./navbar.module.css";

const navLinks = [
  { label: "ABOUT",    href: "#about"    },
  { label: "PROJECTS", href: "#projects" },
  { label: "CERTS",    href: "#certs"    },
  { label: "STACK",    href: "#stack"    },
  { label: "CONTACT",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { muted, toggleMute }     = useSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <span className={styles.bracket}>[</span>
        KESHIERJAN
        <span className={styles.bracket}>]</span>
      </div>

      <ul className={styles.links}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side controls */}
      <div className={styles.controls}>
        {/* Sound toggle */}
        <button
          className={styles.soundBtn}
          onClick={toggleMute}
          aria-label={muted ? "Enable sound" : "Disable sound"}
          title={muted ? "[ SOUND: OFF ]" : "[ SOUND: ON ]"}
        >
          {muted ? "🔇" : "🔊"}
        </button>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <ul className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}