import Image from "next/image";
import { galleryImages } from "@/content/site-content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { cn } from "@/lib/utils";

const aspectClasses: Record<string, string> = {
  portrait: "aspect-[3/4] sm:row-span-2",
  square: "aspect-square",
  landscape: "aspect-[4/3] sm:col-span-2",
};

/**
 * Editorial masonry gallery. With a deliberately small, curated photo set,
 * the layout leans on asymmetry, negative space, and captioning rather
 * than sheer image count.
 */
export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-label="Gallery"
      className="relative w-full bg-ivory px-6 py-28 sm:py-36"
    >
      <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-maroon">Chapter Three</p>
        <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">Gallery</h2>
        <OrnamentalDivider className="mt-6" />
      </SectionReveal>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {galleryImages.map((image, index) => (
          <SectionReveal
            key={image.src}
            delay={index * 0.1}
            direction="none"
            className={cn(
              "group relative overflow-hidden rounded-sm bg-pearl shadow-[0_20px_50px_-25px_rgba(58,42,32,0.35)]",
              aspectClasses[image.aspect]
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-serif text-lg italic text-pearl">{image.caption}</p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/60" />
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
