import Image from "next/image";
import { techStack } from "@/data/placeholder";
import styles from "./TechStack.module.css";

const categories = ["Frontend", "Backend", "Database"];

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="page-wrapper">

        <div className="section-title-row">
          <h2 className={styles.sectionTitle}>TECH STACK</h2>
        </div>

        {categories.map((cat) => (
          <div key={cat} className={styles.categoryBlock}>
            <p className={styles.catLabel}>// {cat.toUpperCase()}</p>
            <div className={styles.grid}>
              {techStack
                .filter((t) => t.category === cat)
                .map((tech) => (
                  <div key={tech.name} className={styles.techCard}>
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
        ))}

      </div>
    </section>
  );
}