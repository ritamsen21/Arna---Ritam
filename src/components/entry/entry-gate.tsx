"use client";

import { motion } from "framer-motion";
import { coupleNames, entryContent } from "@/content/site-content";
import { LeatherTexture } from "@/components/decor/leather-texture";
import { AlponaBackdrop } from "@/components/decor/alpona-backdrop";

type EntryGateProps = {
  onOpen: () => void;
};

/**
 * The closed cover of the invitation: a leather-bound Bengali wedding card
 * with an embossed gold seal. Clicking (or pressing Enter/Space) opens the
 * card, revealing the full Save the Date experience underneath.
 */
export function EntryGate({ onOpen }: EntryGateProps) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      aria-label={entryContent.prompt}
      className="fixed inset-0 z-[60] flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden text-pearl"
    >
      <LeatherTexture />
      <AlponaBackdrop tone="gold" opacity={0.12} className="mix-blend-soft-light" />

      <div className="absolute inset-4 border border-gold/40 sm:inset-8" aria-hidden="true" />
      <div className="absolute inset-6 border border-gold/20 sm:inset-10" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 sm:h-20 sm:w-20">
          <span className="font-heading text-2xl text-gold sm:text-3xl">
            {coupleNames.bride.charAt(0)}
            <span className="mx-0.5 text-gold/70">&amp;</span>
            {coupleNames.groom.charAt(0)}
          </span>
        </span>

        <p className="font-heading text-3xl text-gold sm:text-4xl">
          {entryContent.bengaliGreeting}
        </p>

        <p className="mt-3 font-heading text-lg text-pearl/80 sm:text-xl">
          {entryContent.bengaliSubtitle}
        </p>

        <p className="mt-1 font-serif text-2xl italic text-pearl sm:text-3xl">
          {coupleNames.bride} &amp; {coupleNames.groom}
        </p>

        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
          className="mt-10 text-[0.65rem] uppercase tracking-[0.4em] text-gold/80"
        >
          {entryContent.prompt}
        </motion.p>
      </motion.div>
    </motion.button>
  );
}
