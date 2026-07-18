import { Quote } from "lucide-react";
import { blessings } from "@/content/site-content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { AlponaBackdrop } from "@/components/decor/alpona-backdrop";

/**
 * Blessings chapter: a quiet wall of guest wishes, styled like handwritten
 * notes tucked into a wedding album rather than review-style cards.
 */
export function BlessingsSection() {
  return (
    <section
      id="blessings"
      aria-label="Blessings"
      className="relative w-full overflow-hidden bg-gradient-to-b from-sage/30 via-blush to-sand px-6 py-28 sm:py-36"
    >
      <AlponaBackdrop tone="gold" opacity={0.1} />
      <SectionReveal className="relative mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-xs tracking-[0.4em] text-maroon">অধ্যায় পাঁচ</p>
        <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
          আশীর্বাদ
        </h2>
        <OrnamentalDivider className="mt-6" />
      </SectionReveal>

      <div className="relative mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        {blessings.map((blessing, index) => (
          <SectionReveal
            key={blessing.name}
            delay={index * 0.12}
            className="flex flex-col gap-4 rounded-sm bg-pearl/80 p-8 shadow-[0_20px_45px_-28px_rgba(58,42,32,0.3)]"
          >
            <Quote className="text-gold" size={22} strokeWidth={1.25} aria-hidden="true" />
            <p className="font-serif text-lg italic leading-relaxed text-charcoal/80">
              &ldquo;{blessing.message}&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-maroon">— {blessing.name}</p>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
