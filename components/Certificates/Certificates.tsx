import { certificates } from "@/data/placeholder";
import styles from "./Certificates.module.css";

export default function Certificates() {
  return (
    <section className="section" id="certs">
      <div className="page-wrapper">

        <div className="section-title-row">
          <h2 className={styles.sectionTitle}>CERTIFICATES</h2>
        </div>

        <div className={styles.grid}>
          {certificates.map((cert) => (
            <div key={cert.id} className={styles.card}>

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
                  {/* Download PDF */}
                  <a
                    href={cert.pdfFile}
                    download
                    className={styles.downloadBtn}
                  >
                    [ ↓ DOWNLOAD PDF ]
                  </a>

                  {/* Verify link (optional) */}
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