"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/src/context/LenisContext";
import { usePageTransition } from "@/src/context/TransitionContext";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { isTransitioningRef } = usePageTransition();

  useEffect(() => {
    // Skip if the transition system is handling scroll
    if (isTransitioningRef.current) return;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, lenis, isTransitioningRef]);

  return null;
}
