"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@/src/context/ThemeProvider";
import { TransitionProvider } from "@/src/context/TransitionContext";
import { LenisContext } from "@/src/context/LenisContext";
import Lenis from "lenis";
import PageTransition from "@/src/component/PageTransition";

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

  return (
    <ThemeProvider>
      <LenisContext.Provider value={lenis}>
        <TransitionProvider>
          <PageTransition />
          {children}
        </TransitionProvider>
      </LenisContext.Provider>
    </ThemeProvider>
  );
}
