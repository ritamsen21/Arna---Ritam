"use client";

import { useCountdown } from "@/hooks/use-countdown";

const units: Array<{ key: "days" | "hours" | "minutes" | "seconds"; label: string }> = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

/**
 * Elegant countdown display toward the wedding date. Numerals use the
 * editorial serif to keep the tone consistent with the names above it.
 */
export function CountdownDisplay({ target }: { target: Date }) {
  const countdown = useCountdown(target);

  return (
    <div
      className="flex items-center justify-center gap-6 sm:gap-10"
      role="timer"
      aria-live="polite"
      aria-label="Countdown to the wedding day"
    >
      {units.map((unit) => (
        <div key={unit.key} className="flex flex-col items-center">
          <span className="font-serif text-4xl font-medium text-charcoal sm:text-6xl">
            {String(countdown[unit.key]).padStart(2, "0")}
          </span>
          <span className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-charcoal/60">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
