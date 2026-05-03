"use client";

import { useRef } from "react";
import { certificates } from "@/data/placeholder";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./Certificates.module.css";

export default function Certificates() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef);

  return (
    <section className="section" id="certs">
      <div className="page-wrapper">

        <SectionTitle title="CERTIFICATES" className={styles.sectionTitle} />

        <div ref={gridRef} className={styles.grid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={`${styles.card} ${styles.revealItem}`}>

              {/* Badge area */}
              <div className={styles.badgeArea}>
                <div className={styles.badgePlaceholder}>
                  <span className={styles.badgeIcon}>🏅</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDate}>ISSUED: {cert.date.toUpperCase()}</p>

                <div className={styles.actions}>
                  <a
                    href={cert.pdfFile}
                    download
                    className={styles.downloadBtn}
                  >
                    [ ↓ DOWNLOAD PDF ]
                  </a>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.verifyBtn}
                    >
                      [ VERIFY ↗ ]
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