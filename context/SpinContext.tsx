"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SpinSpeed = "fast" | "slow";

interface SpinContextValue {
  spinSpeed: SpinSpeed;
  toggleSpin: () => void;
}

const SpinContext = createContext<SpinContextValue>({
  spinSpeed: "fast",
  toggleSpin: () => {},
});

export function SpinProvider({ children }: { children: ReactNode }) {
  const [spinSpeed, setSpinSpeed] = useState<SpinSpeed>("fast");

  const toggleSpin = () =>
    setSpinSpeed((prev) => (prev === "fast" ? "slow" : "fast"));

  return (
    <SpinContext.Provider value={{ spinSpeed, toggleSpin }}>
      {children}
    </SpinContext.Provider>
  );
}

export function useSpin() {
  return useContext(SpinContext);
}