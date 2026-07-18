import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * A small, museum-style matted photo frame: an ivory mat border, a hairline
 * gold inner rule, and a soft lifted shadow. Used to keep photography
 * intentionally contained rather than full-bleed, so a small image set
 * still reads as curated art rather than filler.
 */
export function PhotoFrame({ src, alt, className, sizes = "50vw", priority }: PhotoFrameProps) {
  return (
    <div
      className={cn(
        "group relative bg-pearl p-2.5 shadow-[0_25px_55px_-28px_rgba(58,42,32,0.5)] sm:p-3.5",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
      </div>
      <span
        className="pointer-events-none absolute inset-2.5 border border-gold/40 sm:inset-3.5"
        aria-hidden="true"
      />
    </div>
  );
}
