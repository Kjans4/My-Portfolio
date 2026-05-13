"use client";

import { useRef } from "react";
import Image from "next/image";
import { techStack } from "@/data/placeholder";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SectionTitle from "./SectionTitle";
import styles from "../styles/TechStack.module.css";

const MAX_LEVEL = 10;
const categories = ["Frontend", "Backend", "Database", "Tools", "AI"];

function MasteryBar({ level }: { level: number }) {
  const pct = (level / MAX_LEVEL) * 100;

  return (
    <div className={styles.masteryWrap}>
      <div className={styles.masteryRow}>
        <span className={styles.masteryLabel}>LVL</span>
        <span className={styles.masteryNum}>
          {String(level).padStart(2, "0")}
          <span className={styles.masteryMax}>/10</span>
        </span>
      </div>
      <div className={styles.xpTrack}>
        <div className={styles.xpFill} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function CategoryBlock({ cat }: { cat: string }) {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef, { staggerDelay: 80, duration: 240 });

  const items = techStack.filter((t: any) => t.category === cat);

  return (
    <div className={styles.categoryBlock}>
      <p className={styles.catLabel}>// {cat.toUpperCase()}</p>
      <div ref={gridRef} className={styles.grid}>
        {items.map((tech: any) => (
          <div key={tech.name} className={`${styles.techCard} ${styles.revealItem}`}>
            <div className={styles.iconBox}>
              <Image
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            <span className={styles.techName}>{tech.name}</span>
            <MasteryBar level={tech.level} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="page-wrapper">
        <SectionTitle title="TECH STACK" className={styles.sectionTitle} />
        {categories.map((cat) => (
          <CategoryBlock key={cat} cat={cat} />
        ))}
      </div>
    </section>
  );
}