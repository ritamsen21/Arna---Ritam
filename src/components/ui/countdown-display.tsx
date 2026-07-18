"use client";

import { useCountdown } from "@/hooks/use-countdown";

const units: Array<{ key: "days" | "hours" | "minutes" | "seconds"; label: string }> = [
  { key: "days", label: "দিন" },
  { key: "hours", label: "ঘণ্টা" },
  { key: "minutes", label: "মিনিট" },
  { key: "seconds", label: "সেকেন্ড" },
];

/**
 * Elegant countdown display toward the wedding date. Numerals use the
 * editorial serif to keep the tone consistent with the names above it.
 */
export function CountdownDisplay({ target }: { target: Date }) {
  const countdown = useCountdown(target);

  return (
    <div
      className="flex items-center justify-center gap-5 sm:gap-10"
      role="timer"
      aria-live="polite"
      aria-label="বিবাহের দিন পর্যন্ত কাউন্টডাউন"
    >
      {units.map((unit) => (
        <div key={unit.key} className="flex flex-col items-center">
          <span className="font-serif text-5xl font-semibold tracking-[0.02em] text-charcoal drop-shadow-[0_1px_4px_rgba(255,255,255,0.45)] sm:text-7xl">
            {String(countdown[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[0.62rem] uppercase tracking-[0.34em] text-maroon/70 sm:text-[0.68rem]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
