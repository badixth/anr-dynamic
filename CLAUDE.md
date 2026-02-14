# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build (TS errors ignored in config)
npm run start     # Start production server
npm run lint      # ESLint (next/core-web-vitals + next/typescript)
```

Documentation site (Docusaurus, in `documentation/`):
```bash
cd documentation && npm start   # Dev server
cd documentation && npm run build  # Build docs
```

No test framework is configured.

## Architecture

**Next.js 16 App Router** with two route groups:
- `app/(main)/` — pages with Header + Footer (home, about, services, contact, portofolio, pricing)
- `app/(withOutFooter)/` — pages with Header only (error page)
- `app/not-found.tsx` — 404 page

**Provider chain** (in `app/ClientLayout.tsx`):
`ThemeProvider` → `LenisContext.Provider` — wraps all pages. Lenis smooth scroll is initialized here with a RAF loop.

**Root layout** (`app/layout.tsx`) sets `data-theme="light"` on `<html>` and wraps content in `ClientLayout`.

## Key Patterns

**Page composition**: Pages are composed from lazy-loaded sections in `src/page-section/<page>/`. Shared sections (Faq, PricingSection, Testimonials) live directly in `src/page-section/`.

**Dark mode**: Uses `data-theme` attribute on `document.documentElement`, not CSS `prefers-color-scheme`. TailwindCSS v4 custom variant: `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *))`. Many components accept a `noDarkMode` prop to opt out.

**Theme state**: `src/context/ThemeProvider.tsx` — persists to localStorage, provides `useTheme()` hook.

**SVG imports**: SVGs are imported as React components via `@svgr/webpack` (configured in `next.config.ts` for both webpack and Turbopack). Usage: `import Logo from "@/src/assets/images/Logo.svg"` → `<Logo />`.

**Animations**: GSAP with ScrollTrigger, TextPlugin, ScrollToPlugin. Plugins are registered at page level. GSAP is used for scroll animations, header hamburger menu, and carousel.

**Typography component** (`src/component/Typography.tsx`): Polymorphic (`as` prop), responsive via breakpoint-specific props (size/sizeTablet/sizeMobile, etc.). Breakpoints: Mobile ≤480px, Tablet ≤1024px.

**Import alias**: `@/*` maps to project root. Example: `@/src/component/Button`.

**Styling**: TailwindCSS v4 utility classes only (no CSS modules). Font: Manrope (Google Fonts, loaded in `globals.css`).

**ScrollToTop** (`src/utils/ScrollToTop.ts`): Auto-scrolls to top on route change using Lenis.

## Component Conventions

- All UI components are client components (`"use client"`)
- Props extend native HTML element types via TypeScript interfaces
- `clsx` for conditional class composition
- Component files are PascalCase in `src/component/`
