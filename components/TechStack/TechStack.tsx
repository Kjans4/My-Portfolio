"use client";

import { useRef } from "react";
import Image from "next/image";
import { techStack } from "@/data/placeholder";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./TechStack.module.css";

const categories = ["Frontend", "Backend", "Database"];

// Each category grid gets its own stagger reveal
function CategoryBlock({ cat }: { cat: string }) {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef, { staggerDelay: 80, duration: 240 });

  const items = techStack.filter((t) => t.category === cat);

  return (
    <div className={styles.categoryBlock}>
      <p className={styles.catLabel}>// {cat.toUpperCase()}</p>
      <div ref={gridRef} className={styles.grid}>
        {items.map((tech) => (
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