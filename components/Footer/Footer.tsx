import { personal } from "@/data/placeholder";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="page-wrapper">
        <div className={styles.inner}>
          <p className={styles.copy}>
            © {year} {personal.name.toUpperCase()} · BUILT WITH NEXT.JS · DEPLOYED ON VERCEL
          </p>
          <div className={styles.links}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.link}>GITHUB</a>
            <span className={styles.divider}>·</span>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>LINKEDIN</a>
            <span className={styles.divider}>·</span>
            <a href={`mailto:${personal.email}`} className={styles.link}>EMAIL</a>
          </div>
          <p className={styles.pixel}>· · · ■ · · ·</p>
        </div>
      </div>
    </footer>
  );
}