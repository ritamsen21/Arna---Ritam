"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type EditorialButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

/**
 * A restrained luxury button treatment: soft scale, a slow gold underline
 * sweep, no bootstrap-style fills or shadows.
 */
export function EditorialButton({ children, href, onClick, className }: EditorialButtonProps) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative inline-flex items-center gap-2 border border-charcoal/30 px-8 py-3 text-xs uppercase tracking-[0.3em] text-charcoal transition-colors hover:border-gold",
        className
      )}
    >
      <span>{children}</span>
      <span className="absolute inset-x-8 bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
    </Component>
  );
}
