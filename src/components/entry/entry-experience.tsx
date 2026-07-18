"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { EntryGate } from "@/components/entry/entry-gate";

/**
 * Gates the main experience behind a closed invitation cover. The six
 * chapters underneath are always mounted (so imagery can preload) but
 * only become interactive/visible once the guest taps the cover open —
 * this also gives the background-music control a genuine user gesture
 * to work with.
 */
export function EntryExperience({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    window.dispatchEvent(new Event("wedding:gate-opened"));
    setIsOpen(true);
  };

  return (
    <>
      <AnimatePresence>{!isOpen && <EntryGate onOpen={handleOpen} />}</AnimatePresence>
      <div
        aria-hidden={!isOpen}
        className={isOpen ? "" : "pointer-events-none h-screen overflow-hidden"}
      >
        {children}
      </div>
    </>
  );
}
