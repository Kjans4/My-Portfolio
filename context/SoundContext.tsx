"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface SoundContextValue {
  muted:       boolean;
  toggleMute:  () => void;
  playTick:    () => void;
  playClick:   () => void;
  playWhoosh:  () => void;
}

const SoundContext = createContext<SoundContextValue>({
  muted:      true,
  toggleMute: () => {},
  playTick:   () => {},
  playClick:  () => {},
  playWhoosh: () => {},
});

export function SoundProvider({ children }: { children: ReactNode }) {
  const ctxRef     = useRef<AudioContext | null>(null);
  const unlockedRef = useRef(false);
  const [muted, setMuted] = useState(true);

  // Read saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("px-sound");
    if (saved === "on") setMuted(false);
  }, []);

  // Unlock AudioContext on first user interaction
  useEffect(() => {
    function unlock() {
      if (unlockedRef.current) return;
      unlockedRef.current = true;
      ctxRef.current = new AudioContext();
      // Resume if browser suspended it
      if (ctxRef.current.state === "suspended") {
        ctxRef.current.resume();
      }
      window.removeEventListener("pointerdown", unlock);
    }
    window.addEventListener("pointerdown", unlock);
    return () => window.removeEventListener("pointerdown", unlock);
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      localStorage.setItem("px-sound", next ? "off" : "on");
      return next;
    });
  }, []);

  // ── Sound synthesizers ────────────────────────────────────────────

  /** Short 2-oscillator blip — nav hover */
  const playTick = useCallback(() => {
    if (muted || !ctxRef.current) return;
    const ctx  = ctxRef.current;
    const now  = ctx.currentTime;

    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.04);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  }, [muted]);

  /** Descending confirm blip — button/link click */
  const playClick = useCallback(() => {
    if (muted || !ctxRef.current) return;
    const ctx  = ctxRef.current;
    const now  = ctx.currentTime;

    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "square";
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }, [muted]);

  /** Filtered noise sweep — section reveal / whoosh */
  const playWhoosh = useCallback(() => {
    if (muted || !ctxRef.current) return;
    const ctx  = ctxRef.current;
    const now  = ctx.currentTime;

    // White noise buffer
    const bufLen = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufLen, ctx.sampleRate);
    const data   = buffer.getChannelData(0);
    for (let i = 0; i < bufLen; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Bandpass filter — gives it that 8-bit sweep character
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.15);
    filter.Q.value = 1.5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    source.start(now);
    source.stop(now + 0.15);
  }, [muted]);

  return (
    <SoundContext.Provider value={{ muted, toggleMute, playTick, playClick, playWhoosh }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}