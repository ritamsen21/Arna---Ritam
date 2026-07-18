"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { coupleNames, heroContent, weddingDate } from "@/content/site-content";
import { CountdownDisplay } from "@/components/ui/countdown-display";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { AlponaBackdrop } from "@/components/decor/alpona-backdrop";

/**
 * Opening chapter: full-bleed heritage portrait, the couple's names set in
 * an editorial serif, and a quiet countdown toward the wedding date.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Opening — Save the Date"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-ivory px-6 py-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/couple/hero-portrait.jpg"
          alt="Arna and Ritam together, dressed in traditional Bengali wedding attire"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-[0.16]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/90 to-ivory" />
        <AlponaBackdrop tone="gold" opacity={0.1} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-maroon">
          {heroContent.eyebrow}
        </p>

        <h1 className="font-serif text-6xl font-medium leading-[1.05] text-charcoal sm:text-8xl">
          {coupleNames.bride}
          <span className="mx-4 inline-block text-gold sm:mx-6">&amp;</span>
          {coupleNames.groom}
        </h1>

        <OrnamentalDivider className="my-8" />

        <p className="max-w-xl text-balance font-heading text-lg text-charcoal/70 sm:text-xl">
          {heroContent.tagline}
        </p>

        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-charcoal/50">
          {heroContent.saveTheDate}
        </p>

        <div className="mt-12">
          <CountdownDisplay target={weddingDate} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-charcoal/50"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">{heroContent.scrollHint}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} aria-hidden="true" />
        </motion.span>
      </motion.div>
    </section>
  );
}
