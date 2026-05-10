"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { projects } from "@/data/placeholder";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SectionTitle from "./SectionTitle";
import styles from "../styles/Projects.module.css";

type Project = (typeof projects)[number];

// ── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({
  project,
  index,
  onClose,
}: {
  project: Project;
  index: number;
  onClose: () => void;
}) {
  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className={styles.modal}>
        {/* Header bar */}
        <div className={styles.modalHeader}>
          <span className={styles.modalNum}>
            PROJECT_{String(index + 1).padStart(2, "0")}
          </span>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            [ ✕ CLOSE ]
          </button>
        </div>

        {/* Screenshot */}
        <div className={styles.modalImg}>
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              style={{ objectFit: "cover", imageRendering: "pixelated" }}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          ) : (
            <div className={styles.imgFallback}>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          )}
          {project.featured && (
            <span className={styles.modalFeaturedBadge}>★ FEATURED</span>
          )}
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDesc}>{project.description}</p>

          <div className={styles.modalTagRow}>
            {project.tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.modalLinks}>
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
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef);

  const [selected, setSelected] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <section className="section" id="projects">
      <div className="page-wrapper">
        <SectionTitle title="PROJECTS" className={styles.sectionTitle} />

        <div ref={gridRef} className={styles.grid}>
          {projects.map((project: Project, i: number) => (
            <div
              key={project.id}
              className={`${styles.card} ${project.featured ? styles.featured : ""} ${styles.revealItem}`}
              onClick={() => setSelected({ project, index: i })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setSelected({ project, index: i });
              }}
              aria-label={`View details for ${project.title}`}
            >
              {/* Thumbnail */}
              <div className={styles.thumbnail}>
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover", imageRendering: "pixelated" }}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                ) : null}
                <div className={styles.thumbnailInner}>
                  <span className={styles.projectNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.featured && (
                    <span className={styles.featuredBadge}>★ FEATURED</span>
                  )}
                </div>
                {/* Hover overlay hint */}
                <div className={styles.thumbnailHover}>
                  <span className={styles.hoverLabel}>[ VIEW DETAILS ]</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                <div className={styles.tagRow}>
                  {project.tags.map((tag: string) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardLinks}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    onClick={(e) => e.stopPropagation()}
                  >
                    [ GITHUB ]
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.linkBtn} ${styles.linkBtnLive}`}
                      onClick={(e) => e.stopPropagation()}
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

      {/* Modal — rendered outside grid so it's not clipped */}
      {selected && (
        <ProjectModal
          project={selected.project}
          index={selected.index}
          onClose={handleClose}
        />
      )}
    </section>
  );
}