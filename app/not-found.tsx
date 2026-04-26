import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>

        <div className={styles.glitch}>
          <span className={styles.code}>404</span>
        </div>

        <div className={styles.sprite}>
          {/* Pixel tombstone / lost character */}
          <svg viewBox="0 0 48 64" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated", width: 96, height: 128 }}>
            {/* body */}
            <rect x="14" y="24" width="20" height="18" fill="#3fbcb4"/>
            {/* head */}
            <rect x="16" y="8"  width="16" height="14" fill="#f7c59f"/>
            {/* hair */}
            <rect x="14" y="6"  width="20" height="4"  fill="#3d2b1f"/>
            <rect x="12" y="8"  width="4"  height="4"  fill="#3d2b1f"/>
            <rect x="32" y="8"  width="4"  height="4"  fill="#3d2b1f"/>
            {/* eyes — X marks (dead) */}
            <rect x="19" y="14" width="2"  height="2"  fill="#e43b44"/>
            <rect x="21" y="16" width="2"  height="2"  fill="#e43b44"/>
            <rect x="21" y="14" width="2"  height="2"  fill="#e43b44"/>
            <rect x="19" y="16" width="2"  height="2"  fill="#e43b44"/>
            <rect x="27" y="14" width="2"  height="2"  fill="#e43b44"/>
            <rect x="29" y="16" width="2"  height="2"  fill="#e43b44"/>
            <rect x="29" y="14" width="2"  height="2"  fill="#e43b44"/>
            <rect x="27" y="16" width="2"  height="2"  fill="#e43b44"/>
            {/* arms */}
            <rect x="6"  y="26" width="8"  height="6"  fill="#3fbcb4"/>
            <rect x="34" y="26" width="8"  height="6"  fill="#3fbcb4"/>
            {/* legs */}
            <rect x="14" y="42" width="8"  height="10" fill="#2c2c2a"/>
            <rect x="26" y="42" width="8"  height="10" fill="#2c2c2a"/>
            {/* feet */}
            <rect x="12" y="50" width="10" height="4"  fill="#2c2c2a"/>
            <rect x="26" y="50" width="10" height="4"  fill="#2c2c2a"/>
            {/* dizzy stars */}
            <rect x="8"  y="4"  width="4"  height="4"  fill="#f7d51d"/>
            <rect x="36" y="2"  width="4"  height="4"  fill="#f7d51d"/>
            <rect x="22" y="0"  width="4"  height="4"  fill="#f7d51d"/>
          </svg>
        </div>

        <h1 className={styles.title}>PAGE NOT FOUND</h1>
        <p className={styles.sub}>Oops! You wandered into an empty dungeon room.</p>
        <p className={styles.sub2}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>

        <div className={styles.actions}>
          <Link href="/" className={styles.homeBtn}>
            [ ← RETURN TO HOME ]
          </Link>
          <Link href="/#projects" className={styles.projectsBtn}>
            [ VIEW PROJECTS ]
          </Link>
        </div>

        <p className={styles.flavor}>
          <span className={styles.blink}>▌</span>
          &nbsp;GAME OVER — PRESS START TO CONTINUE
          &nbsp;<span className={styles.blink}>▌</span>
        </p>

      </div>
    </div>
  );
}