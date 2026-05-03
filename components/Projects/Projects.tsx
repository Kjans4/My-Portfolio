"use client";

import { useRef } from "react";
import { projects } from "@/data/placeholder";
import { useStaggerReveal } from "@/hooks/Usetaggerreveal";
import styles from "./Projects.module.css";

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef);

  return (
    <section className="section" id="projects">
      <div className="page-wrapper">

        <div className="section-title-row">
          <h2 className={styles.sectionTitle}>PROJECTS</h2>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ""} ${styles.revealItem}`}
            >
              {/* Thumbnail placeholder */}
              <div className={styles.thumbnail}>
                <div className={styles.thumbnailInner}>
                  <span className={styles.projectNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.featured && (
                    <span className={styles.featuredBadge}>★ FEATURED</span>
                  )}
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.tagRow}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    [ GITHUB ]
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.linkBtn} ${styles.linkBtnLive}`}
                    >
                      [ LIVE ↗ ]
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}