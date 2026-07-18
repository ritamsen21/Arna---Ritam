import { galleryImages } from "@/content/site-content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { AlponaBackdrop } from "@/components/decor/alpona-backdrop";

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
      className="relative w-full overflow-hidden bg-gradient-to-b from-cream via-ivory to-blush px-6 py-28 sm:py-36"
    >
      <AlponaBackdrop tone="maroon" opacity={0.08} />
      <SectionReveal className="relative mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-maroon">Chapter Three</p>
        <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">Gallery</h2>
        <OrnamentalDivider className="mt-6" />
      </SectionReveal>

      <div className="relative mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-8 sm:gap-10">
        {galleryImages.map((image, index) => (
          <SectionReveal
            key={image.src}
            delay={index * 0.1}
            direction="none"
            className="group w-full max-w-[15rem] text-center sm:w-56"
          >
            <PhotoFrame
              src={image.src}
              alt={image.alt}
              sizes="(max-width: 640px) 70vw, 224px"
              className="aspect-[4/5] w-full"
            />
            <p className="mt-4 font-serif text-lg italic text-charcoal/75">{image.caption}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
