"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroContent, weddingDate } from "@/content/site-content";
import { CountdownDisplay } from "@/components/ui/countdown-display";
import { AlponaBackdrop } from "@/components/decor/alpona-backdrop";

/**
 * Opening chapter: a small framed heritage portrait, the couple's names set
 * in an editorial serif, and a quiet countdown toward the wedding date —
 * set against a warm, colourful courtyard-inspired backdrop.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Opening — Save the Date"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-blush to-sand px-4 py-8 sm:px-6 sm:py-10"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-90">
          <AlponaBackdrop tone="maroon" opacity={0.12} />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_35%),linear-gradient(180deg,rgba(243,227,222,0.62),rgba(237,224,200,0.38))]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-6xl flex-col items-center"
      >
        <div className="w-full overflow-hidden rounded-[2rem] border border-gold/30 bg-[linear-gradient(180deg,rgba(109,33,48,0.08),rgba(179,135,61,0.12))] shadow-[0_24px_70px_-30px_rgba(58,42,32,0.55)]">
          <div className="relative aspect-[7/10] w-full overflow-hidden bg-[linear-gradient(180deg,rgba(243,227,222,0.35),rgba(237,224,200,0.55))] sm:aspect-[7/10] lg:aspect-[7/10]">
            <Image
              src="/images/couple/top-slide.jpeg"
              alt="Arna and Ritam together, dressed in traditional Bengali wedding attire"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1100px"
              className="object-contain object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/10 via-charcoal/20 to-charcoal/55" />
          </div>

          <div className="px-5 py-6 text-center text-charcoal sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <CountdownDisplay target={weddingDate} />
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center gap-2 text-charcoal/55 sm:mt-6">
          <span className="text-[0.65rem] uppercase tracking-[0.4em]">{heroContent.scrollHint}</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            <ChevronDown size={18} aria-hidden="true" />
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
