"use client";

import { useEffect, useRef } from "react";
import { useSpin } from "@/context/SpinContext";
import styles from "../styles/DonutCanvas.module.css";

// ── Color ramp: deep maroon → dark red → red → bright red ────────────────────
// 12 levels, index 0 = darkest shadow, 11 = brightest highlight
const COLOR_RAMP = [
  "rgba(30,  5,   5,  0.55)",   // 0  .  deep shadow — almost invisible
  "rgba(48,  8,   8,  0.60)",   // 1  ,
  "rgba(65,  12,  12, 0.65)",   // 2  -
  "rgba(88,  18,  18, 0.70)",   // 3  ~
  "rgba(110, 22,  22, 0.75)",   // 4  :
  "rgba(132, 28,  28, 0.78)",   // 5  ;
  "rgba(158, 36,  36, 0.82)",   // 6  =
  "rgba(178, 46,  46, 0.85)",   // 7  !
  "rgba(202, 58,  58, 0.88)",   // 8  *
  "rgba(222, 72,  72, 0.91)",   // 9  #
  "rgba(242, 92,  92, 0.94)",   // 10 $
  "rgba(255, 115, 115, 0.97)",  // 11 @  brightest highlight
];

const CHARS = ".,-~:;=!*#$@";

// ── Andy Sloane donut algorithm — exact original math ────────────────────────
function computeFrame(A: number, B: number, gridW: number, gridH: number) {
  const b: string[] = new Array(gridW * gridH).fill(" ");
  const z: number[] = new Array(gridW * gridH).fill(0);

  const cA = Math.cos(A), sA = Math.sin(A);
  const cB = Math.cos(B), sB = Math.sin(B);

  for (let j = 0; j < 6.28; j += 0.07) {
    const ct = Math.cos(j);
    const st = Math.sin(j);

    for (let i = 0; i < 6.28; i += 0.02) {
      const sp = Math.sin(i);
      const cp = Math.cos(i);
      const h  = ct + 2;
      const D  = 1 / (sp * h * sA + st * cA + 5);
      const t  = sp * h * cA - st * sA;

      const x = Math.floor(gridW / 2 + (gridW / 4) * D * (cp * h * cB - t * sB));
      const y = Math.floor(gridH / 2 + (gridH / 2) * D * (cp * h * sB + t * cB));
      const o = x + gridW * y;

      const N = Math.floor(
        8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB)
      );

      if (y >= 0 && y < gridH && x >= 0 && x < gridW && D > z[o]) {
        z[o] = D;
        b[o] = CHARS[Math.max(N, 0)] ?? ".";
      }
    }
  }

  return b;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function DonutCanvas() {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const { spinSpeed }  = useSpin();
  const spinSpeedRef   = useRef(spinSpeed);
  spinSpeedRef.current = spinSpeed;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Capture as non-nullable aliases — TypeScript loses narrowing inside closures
    const c  = canvas;
    const cx = ctx;

    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    let A     = 1;
    let B     = 1;
    let rafId = 0;
    let lastT = 0;

    // Logical grid — original algorithm proportions (200×80 = 2.5:1 ratio)
    const GRID_W = 200;
    const GRID_H = 80;

    // Character size — 18px for the sweet spot between detail and chunkiness
    const CHAR_SIZE = 18;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w   = c.offsetWidth;
      const h   = c.offsetHeight;
      c.width  = w * dpr;
      c.height = h * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function frame(timestamp: number) {
      // Throttle to target FPS — fast=20fps, slow=8fps, mobile=8fps always
      const targetFps = isMobile
        ? 8
        : spinSpeedRef.current === "fast" ? 20 : 8;
      const interval  = 1000 / targetFps;

      if (timestamp - lastT >= interval) {
        lastT = timestamp;

        // Rotation — original 0.07 / 0.03 increments, scaled by speed
        const mult = spinSpeedRef.current === "fast" ? 1 : 0.35;
        A += 0.07 * mult;
        B += 0.03 * mult;

        const cW = c.offsetWidth;
        const cH = c.offsetHeight;

        cx.clearRect(0, 0, cW, cH);

        const cells = computeFrame(A, B, GRID_W, GRID_H);

        // Map each logical cell to canvas pixels
        // scaleX/Y stretch the 200×80 grid to fill the full canvas
        const scaleX = cW / GRID_W;
        const scaleY = cH / GRID_H;

        cx.font         = `bold ${CHAR_SIZE}px 'Courier New', monospace`;
        cx.textBaseline = "middle";
        cx.textAlign    = "center";

        for (let row = 0; row < GRID_H; row++) {
          for (let col = 0; col < GRID_W; col++) {
            const ch = cells[col + row * GRID_W];
            if (ch === " ") continue;

            const lumIdx = CHARS.indexOf(ch);
            if (lumIdx < 0) continue;

            cx.fillStyle = COLOR_RAMP[lumIdx];

            // Center of each logical cell in canvas pixels
            const px = (col + 0.5) * scaleX;
            const py = (row + 0.5) * scaleY;

            cx.fillText(ch, px, py);
          }
        }
      }

      rafId = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      cx.clearRect(0, 0, c.width, c.height);
    };
  }, []); // spinSpeedRef handles live updates without re-mounting

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
    />
  );
}