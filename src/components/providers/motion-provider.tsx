"use client";

import { MotionConfig } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Global Framer Motion configuration. Reduces all motion to instant,
 * non-distracting transitions when the user prefers reduced motion.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
