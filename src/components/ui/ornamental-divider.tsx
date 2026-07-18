import { cn } from "@/lib/utils";

/**
 * A restrained hand-drawn-style ornamental divider inspired by Bengali
 * alpona linework — a single flourish, never a busy pattern.
 */
export function OrnamentalDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
      <span className="h-px w-10 bg-gold/50" />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-gold">
        <path
          d="M12 2c1.5 3 4 4.5 4 8s-2 6-4 12c-2-6-4-8.5-4-12s2.5-5 4-8Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-gold/50" />
    </div>
  );
}
