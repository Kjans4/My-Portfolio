"use client";

import { useEffect } from "react";

// Palette cycles through brand colors
const COLORS = ["#f7d51d", "#3fbcb4", "#e43b44", "#f7d51d", "#7b5ea7"];
const PARTICLE_SIZE  = 6;   // px — square pixel dot
const THROTTLE_MS    = 30;  // ms between particles
const DURATION_MS    = 400; // ms for fade+shrink animation
const STEPS          = 4;   // anime steps() — chunky pixel disappear

export default function PixelCursor() {
  useEffect(() => {
    // Disable on touch devices — no cursor to trail
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let colorIndex  = 0;
    let lastTime    = 0;
    let rafId       = 0;
    let mouseX      = 0;
    let mouseY      = 0;
    let pendingSpawn = false;

    async function spawnParticle(x: number, y: number) {
      const { animate } = await import("animejs");

      const dot = document.createElement("div");

      dot.style.cssText = `
        position: fixed;
        left: ${x - PARTICLE_SIZE / 2}px;
        top:  ${y - PARTICLE_SIZE / 2}px;
        width:  ${PARTICLE_SIZE}px;
        height: ${PARTICLE_SIZE}px;
        background: ${COLORS[colorIndex % COLORS.length]};
        pointer-events: none;
        z-index: 99999;
        image-rendering: pixelated;
      `;

      colorIndex++;
      document.body.appendChild(dot);

      // Animate out in chunky pixel steps
      await animate(dot, {
        opacity:   [1, 0],
        scale:     [1, 0],
        duration:  DURATION_MS,
        easing:    `steps(${STEPS})`,
      });

      dot.remove();
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!pendingSpawn) {
        pendingSpawn = true;
        rafId = requestAnimationFrame((now) => {
          pendingSpawn = false;
          if (now - lastTime >= THROTTLE_MS) {
            lastTime = now;
            spawnParticle(mouseX, mouseY);
          }
        });
      }
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // No DOM output — effect only
  return null;
}