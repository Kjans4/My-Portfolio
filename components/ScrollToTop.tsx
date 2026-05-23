"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/ScrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`${styles.btn} ${visible ? styles.show : ""}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      <span className={styles.arrow}>▲</span>
      <span className={styles.label}>TOP</span>
    </button>
  );
}