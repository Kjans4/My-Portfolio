import { resume, personal } from "@/data/placeholder";
import styles from "@/styles/ResumeDownload.module.css";

export default function ResumeDownload() {
  return (
    <section className={styles.section}>
      <div className="page-wrapper">
        <div className={styles.inner}>

          <div className={styles.pixelDoc}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.docLine} style={{ width: `${90 - i * 10}%` }} />
            ))}
          </div>

          <div className={styles.content}>
            <p className={styles.label}>// RESUME </p>
            <h2 className={styles.title}>DOWNLOAD MY RESUME</h2>
            <p className={styles.sub}>
              Last updated: {resume.lastUpdated} &nbsp;|&nbsp; {personal.location}
            </p>
            <a
              href={resume.pdfFile}
              download={'Keshier Jan Pialan Resume.pdf'}
              className={styles.downloadBtn}
            >
              [ ↓ DOWNLOAD PDF ]
            </a>
            <p className={styles.note}>
              PDF format · Opens in your browser or downloads directly
            </p>
          </div>

          <div className={styles.pixelDoc}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.docLine} style={{ width: `${60 + i * 8}%` }} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}