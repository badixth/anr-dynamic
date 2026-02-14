"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePageTransition } from "@/src/context/TransitionContext";
import { useLenis } from "@/src/context/LenisContext";

gsap.registerPlugin(ScrollTrigger);

export default function PageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const prevPathname = useRef(pathname);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isTransitioningRef } = usePageTransition();
  const lenis = useLenis();
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Use refs for values accessed inside the click handler
  // so the handler doesn't need to be re-installed on every change
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  // Phase 1: Intercept internal link clicks
  // Plays cover animation over OLD page, THEN navigates
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Skip external, mailto, tel, hash-only links
      if (/^(https?:|mailto:|tel:|#)/.test(href)) return;

      // Skip target="_blank" and download links
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      // Skip modifier keys (open in new tab, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Extract pathname portion (strip hash and query)
      const hrefPathname = href.split("#")[0].split("?")[0];

      // Skip same page navigation (hash links, query changes)
      if (hrefPathname === pathnameRef.current || hrefPathname === "") return;

      e.preventDefault();

      const overlay = overlayRef.current;
      if (!overlay) {
        router.push(href);
        return;
      }

      // If already transitioning (rapid click), snap overlay and navigate
      if (isTransitioningRef.current) {
        if (timelineRef.current) timelineRef.current.kill();
        gsap.set(overlay, { display: "block", y: "0%" });
        router.push(href);
        return;
      }

      // Kill any residual animation
      if (timelineRef.current) timelineRef.current.kill();

      const currentLenis = lenisRef.current;
      if (currentLenis) currentLenis.stop();
      isTransitioningRef.current = true;

      // Set overlay color to match current theme
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      overlay.style.backgroundColor = isDark ? "#070707" : "#ffffff";

      // Cover: overlay slides DOWN from above to cover the screen
      gsap.set(overlay, { display: "block", y: "-100%" });

      const tl = gsap.timeline({
        onComplete: () => {
          // After cover animation finishes, trigger navigation
          router.push(href);
          timelineRef.current = null;
        },
      });
      timelineRef.current = tl;

      tl.to(overlay, { y: "0%", duration: 0.6, ease: "power4.inOut" });
    };

    // Use capture phase so we fire BEFORE Next.js Link handler
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router, isTransitioningRef]);

  // Phase 2: When pathname changes (navigation done), play reveal animation
  useLayoutEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;

    const overlay = overlayRef.current;
    if (!overlay) return;

    const currentLenis = lenisRef.current;

    if (isTransitioningRef.current) {
      // Normal link-click flow: cover animation already played
      // Re-assert overlay state (React re-render may have reset inline styles)
      gsap.set(overlay, { display: "block", y: "0%" });

      // Scroll to top while hidden behind overlay
      if (currentLenis) {
        currentLenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }

      // Reveal: overlay slides DOWN out of viewport
      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
          gsap.set(overlay, { display: "none", y: "-100%" });
          if (currentLenis) currentLenis.start();
          ScrollTrigger.refresh();
          timelineRef.current = null;
        },
      });
      timelineRef.current = tl;

      tl.to({}, { duration: 0.2 }) // brief hold for content to settle
        .to(overlay, { y: "100%", duration: 0.6, ease: "power4.inOut" });
    } else {
      // Browser back/forward: no cover animation was played
      // Play full cover + reveal transition
      if (currentLenis) currentLenis.stop();
      isTransitioningRef.current = true;

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      overlay.style.backgroundColor = isDark ? "#070707" : "#ffffff";

      gsap.set(overlay, { display: "block", y: "-100%" });

      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioningRef.current = false;
          gsap.set(overlay, { display: "none", y: "-100%" });
          if (currentLenis) currentLenis.start();
          ScrollTrigger.refresh();
          timelineRef.current = null;
        },
      });
      timelineRef.current = tl;

      tl.to(overlay, { y: "0%", duration: 0.6, ease: "power4.inOut" })
        .call(() => {
          if (currentLenis) currentLenis.scrollTo(0, { immediate: true });
          else window.scrollTo({ top: 0, behavior: "instant" });
        })
        .to({}, { duration: 0.15 })
        .to(overlay, { y: "100%", duration: 0.6, ease: "power4.inOut" });
    }
  }, [pathname, isTransitioningRef]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#070707",
        zIndex: 9999,
        pointerEvents: "none",
        display: "none",
        willChange: "transform",
      }}
    />
  );
}
