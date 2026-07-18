import { storyBeats } from "@/content/site-content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";

/**
 * "Our Story" chapter: an editorial split layout, each beat alternating
 * image and text sides so the timeline reads like a printed spread.
 */
export function StorySection() {
  return (
    <section
      id="story"
      aria-label="Our Story"
      className="relative w-full bg-sand px-6 py-28 sm:py-36"
    >
      <SectionReveal className="mx-auto mb-20 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-maroon">Chapter Two</p>
        <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
          Our Story
        </h2>
        <OrnamentalDivider className="mt-6" />
      </SectionReveal>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 sm:gap-28">
        {storyBeats.map((beat, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={beat.title}
              className={`flex flex-col items-center gap-8 sm:gap-12 lg:flex-row ${
                reversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              <SectionReveal
                direction="none"
                className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(58,42,32,0.4)] lg:w-1/2"
              >
                <ParallaxImage
                  src={beat.image}
                  alt={`${beat.title} — a chapter in Arna and Ritam's story`}
                  className="h-full w-full"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </SectionReveal>

              <SectionReveal className="w-full max-w-md text-center lg:w-1/2 lg:text-left">
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
