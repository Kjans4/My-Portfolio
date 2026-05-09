"use client";

import { education, personal } from "@/data/placeholder";
import SectionTitle from "@/components/SectionTitle";
import styles from "@/styles/Education.module.css";

export default function Education() {
  return (
    <section className="section" id="about">
      <div className="page-wrapper">

        <SectionTitle title="ABOUT & EDUCATION" className={styles.sectionTitle} />

        <div className={styles.inner}>

          {/* Left — Bio card */}
          <div className={styles.bioCard}>
            <p className={styles.bioLabel}>// WHO AM I</p>
            <p className={styles.bioText}>{personal.bio}</p>
            <div className={styles.bioMeta}>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>◈</span>
                <span>{personal.location}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>✉</span>
                <a href={`mailto:${personal.email}`} className={styles.metaLink}>
                  {personal.email}
                </a>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>⌨</span>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.metaLink}>
                  GitHub
                </a>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaIcon}>◉</span>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.metaLink}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right — Education timeline */}
          <div className={styles.timelineCol}>
            <p className={styles.bioLabel}>// EDUCATION</p>
            <div className={styles.timeline}>
              {education.map((edu: any, i: number) => (
                <div key={i} className={styles.timelineItem}>

                  {/* Connector dot + line */}
                  <div className={styles.connector}>
                    <div className={styles.dot} />
                    {i < education.length - 1 && <div className={styles.line} />}
                  </div>

                  {/* Content */}
                  <div className={styles.eduCard}>
                    <div className={styles.eduHeader}>
                      <div className={styles.eduLogoPlaceholder}>
                        {edu.school.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className={styles.eduSchool}>{edu.school}</h3>
                        <p className={styles.eduYear}>{edu.year}</p>
                      </div>
                    </div>
                    <p className={styles.eduDegree}>{edu.degree}</p>
                    {edu.honors && (
                      <span className={styles.honorsBadge}>★ {edu.honors}</span>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}