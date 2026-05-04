"use client";

import { useEffect } from "react";
import { useSound } from "@/context/SoundContext";

// Elements that trigger the tick on hover
const HOVER_SELECTORS = [
  "a",
  "button",
  '[role="button"]',
].join(", ");

// Elements that trigger the click sound
const CLICK_SELECTORS = [
  "a",
  "button",
  '[role="button"]',
].join(", ");

export default function PixelSound() {
  const { playTick, playClick } = useSound();

  useEffect(() => {
    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest(HOVER_SELECTORS)) {
        playTick();
      }
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest(CLICK_SELECTORS)) {
        playClick();
      }
    }

    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("click", onClick);
    };
  }, [playTick, playClick]);

  return null;
}