"use client";

import React, { useSyncExternalStore, JSX } from "react";
import clsx from "clsx";
import { useTheme } from "@/src/context/ThemeProvider";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<Record<string, unknown>>;
  size?: number;
  sizeTablet?: number;
  sizeMobile?: number;
  weight?: number;
  weightTablet?: number;
  weightMobile?: number;
  lineHeight?: number;
  lineHeightTablet?: number;
  lineHeightMobile?: number;
  letterSpacing?: number;
  letterSpacingTablet?: number;
  letterSpacingMobile?: number;
  color?: string;
  darkColor?: string;
  noDarkMode?: boolean;
  heading?: boolean;
  className?: string;
}

const MOBILE_BP = 480;
const TABLET_BP = 1024;

// Shared width subscription — one listener for ALL Typography instances
let sharedWidth: number | null = typeof window !== "undefined" ? window.innerWidth : null;
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    sharedWidth = window.innerWidth;
    listeners.forEach((l) => l());
  });
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
function getSnapshot() { return sharedWidth; }
function getServerSnapshot() { return null; }

function pickResponsiveValue(
  desktop?: number,
  tablet?: number,
  mobile?: number,
  width?: number | null
) {
  if (width == null) return desktop; // SSR fallback
  if (width <= MOBILE_BP) return mobile ?? tablet ?? desktop;
  if (width <= TABLET_BP) return tablet ?? desktop;
  return desktop;
}

const Typography: React.FC<TypographyProps> = ({
  as: Tag = "p",
  size = 16,
  sizeTablet,
  sizeMobile,
  weight = 400,
  weightTablet,
  weightMobile,
  lineHeight,
  lineHeightTablet,
  lineHeightMobile,
  letterSpacing,
  letterSpacingTablet,
  letterSpacingMobile,
  color = "#070707",
  darkColor,
  noDarkMode = false,
  heading = false,
  className = "",
  children,
  ...props
}) => {
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const { theme } = useTheme();

  const fontSize = pickResponsiveValue(size, sizeTablet, sizeMobile, width);
  const fontWeight = pickResponsiveValue(weight, weightTablet, weightMobile, width);
  const lh = pickResponsiveValue(lineHeight, lineHeightTablet, lineHeightMobile, width);
  const ls = pickResponsiveValue(letterSpacing, letterSpacingTablet, letterSpacingMobile, width);

  return React.createElement(
  Tag,
  {
    className: clsx(
      "text-balance",
      !noDarkMode && "dark:text-white",
      color === "#070707" ? "text-[#070707]" : "",
      heading && "font-heading",
      className
    ),
    style: {
      fontSize: fontSize ? `${fontSize}px` : undefined,
      fontWeight: fontWeight,
      lineHeight: lh ? `${lh}px` : undefined,
      letterSpacing: ls ? `${ls}px` : undefined,
      ...(noDarkMode && color
        ? { color: theme === "dark" && darkColor ? darkColor : color }
        : {}),
    },
    ...props,
  },
  children
);
};

export default Typography;
