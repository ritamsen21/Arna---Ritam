import { storyBeats } from "@/content/site-content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { AlponaBackdrop } from "@/components/decor/alpona-backdrop";

/**
 * "Our Story" chapter: an editorial split layout, each beat alternating
 * image and text sides so the timeline reads like a printed spread.
 */
export function StorySection() {
  return (
    <section
      id="story"
      aria-label="Our Story"
      className="relative w-full overflow-hidden bg-gradient-to-b from-sand via-blush to-cream px-6 py-28 sm:py-36"
    >
      <AlponaBackdrop tone="gold" opacity={0.09} />
      <SectionReveal className="relative mx-auto mb-20 max-w-2xl text-center">
        <p className="mb-4 text-xs tracking-[0.4em] text-maroon">অধ্যায় দুই</p>
        <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
          আমাদের গল্প
        </h2>
        <OrnamentalDivider className="mt-6" />
      </SectionReveal>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 sm:gap-28">
        {storyBeats.map((beat, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={beat.title}
              className={`flex flex-col items-center gap-8 sm:gap-12 lg:flex-row ${
                reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <SectionReveal direction="none" className="w-full max-w-xs lg:w-2/5">
                <PhotoFrame
                  src={beat.image}
                  alt={`${beat.title} — a chapter in Arna and Ritam's story`}
                  sizes="(max-width: 1024px) 60vw, 320px"
                  className="aspect-[4/5] w-full"
                />
              </SectionReveal>

              <SectionReveal className="w-full max-w-md text-center lg:w-3/5 lg:text-left">
                <p className="text-xs uppercase tracking-[0.35em] text-gold">{beat.year}</p>
                <h3 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                  {beat.title}
                </h3>
                <p className="mt-5 text-balance font-body leading-relaxed text-charcoal/70">
                  {beat.text}
                </p>
              </SectionReveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
