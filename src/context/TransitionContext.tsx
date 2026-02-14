"use client";

import { createContext, useContext, useRef, useMemo, ReactNode } from "react";

interface TransitionContextValue {
  isTransitioningRef: React.MutableRefObject<boolean>;
}

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const isTransitioningRef = useRef(false);
  const value = useMemo(() => ({ isTransitioningRef }), []);

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used within TransitionProvider");
  return ctx;
}
