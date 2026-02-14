"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@/src/context/ThemeProvider";
import { LenisContext } from "@/src/context/LenisContext";
import Lenis from "lenis";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const _lenis = new Lenis({ smoothWheel: true });
    setLenis(_lenis);

    const raf = (time: number) => {
      _lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    };
    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      _lenis.destroy();
    };
  }, []);

  // Always render children — don't block on Lenis initialization
  return (
    <ThemeProvider>
      <LenisContext.Provider value={lenis}>
        {children}
      </LenisContext.Provider>
    </ThemeProvider>
  );
}
