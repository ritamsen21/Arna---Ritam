import { cn } from "@/lib/utils";

/**
 * A quiet leather-grain texture, built from layered radial gradients and an
 * SVG fractal-noise filter — no external image asset required. Used behind
 * the entry cover so it reads like a leather-bound Bengali wedding card
 * rather than a flat web background.
 */
export function LeatherTexture({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 15%, rgba(255,255,255,0.06), transparent 45%)," +
            "radial-gradient(ellipse at 80% 85%, rgba(0,0,0,0.35), transparent 55%)," +
            "linear-gradient(160deg, #4a1c26 0%, #6d2130 45%, #4a1c26 100%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full mix-blend-overlay" aria-hidden="true">
        <filter id="leather-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.18" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#leather-grain)" />
      </svg>
    </div>
  );
}
