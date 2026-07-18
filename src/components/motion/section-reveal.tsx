"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "none";
  as?: "div" | "span";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const variantsNoRise: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Scroll-triggered reveal used across every chapter for a consistent,
 * unhurried entrance — a soft blur-to-focus rise rather than a hard cut.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: SectionRevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={direction === "up" ? variants : variantsNoRise}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
