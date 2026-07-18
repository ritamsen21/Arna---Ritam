import { cn } from "@/lib/utils";

type AlponaBackdropProps = {
  className?: string;
  tone?: "gold" | "maroon";
  opacity?: number;
};

/**
 * A hand-drawn-style Bengali alpona motif, tiled as a quiet full-bleed
 * backdrop. Inspired by traditional rice-paste courtyard art — lotus
 * petals and paisley curls repeated in fine linework, never a busy or
 * literal pattern print.
 */
export function AlponaBackdrop({ className, tone = "gold", opacity = 0.08 }: AlponaBackdropProps) {
  const color = tone === "gold" ? "#b3873d" : "#6d2130";
  const patternId = `alpona-${tone}`;

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{ opacity }}
    >
      <defs>
        <pattern
          id={patternId}
          width="220"
          height="220"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1)"
        >
          {/* central lotus */}
          <g stroke={color} strokeWidth="1" fill="none" transform="translate(110 110)">
            <path d="M0,-46 C14,-30 22,-14 0,0 C-22,-14 -14,-30 0,-46 Z" />
            <path d="M0,46 C14,30 22,14 0,0 C-22,14 -14,30 0,46 Z" />
            <path d="M46,0 C30,14 14,22 0,0 C14,-22 30,-14 46,0 Z" />
            <path d="M-46,0 C-30,14 -14,22 0,0 C-14,-22 -30,-14 -46,0 Z" />
            <path d="M32,-32 C20,-22 12,-12 0,0 C-12,-12 -20,-22 -32,-32 Z" transform="rotate(0)" />
            <circle r="6" />
          </g>
          {/* corner paisley flourishes */}
          <path
            d="M14,14 C34,10 40,30 24,40 C40,44 44,60 24,66 C6,60 4,40 14,14 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
            transform="translate(0 0) scale(0.55)"
          />
          <path
            d="M14,14 C34,10 40,30 24,40 C40,44 44,60 24,66 C6,60 4,40 14,14 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
            transform="translate(220 0) scale(-0.55 0.55)"
          />
          <path
            d="M14,14 C34,10 40,30 24,40 C40,44 44,60 24,66 C6,60 4,40 14,14 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
            transform="translate(0 220) scale(0.55 -0.55)"
          />
          <path
            d="M14,14 C34,10 40,30 24,40 C40,44 44,60 24,66 C6,60 4,40 14,14 Z"
            stroke={color}
            strokeWidth="1"
            fill="none"
            transform="translate(220 220) scale(-0.55 -0.55)"
          />
          {/* dotted rice-art border */}
          <g fill={color}>
            <circle cx="110" cy="10" r="1.6" />
            <circle cx="110" cy="210" r="1.6" />
            <circle cx="10" cy="110" r="1.6" />
            <circle cx="210" cy="110" r="1.6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
