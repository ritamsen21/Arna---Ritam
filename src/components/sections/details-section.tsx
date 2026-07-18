import { CalendarHeart, MapPin, Shirt } from "lucide-react";
import { weddingDetails } from "@/content/site-content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";

const icons = [CalendarHeart, MapPin, Shirt];

/**
 * Wedding Details chapter: three sculpted cards, each with a single icon
 * accent, kept quiet and typographic rather than iconography-heavy.
 */
export function DetailsSection() {
  return (
    <section
      id="details"
      aria-label="Wedding Details"
      className="relative w-full bg-blush px-6 py-28 sm:py-36"
    >
      <SectionReveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-maroon">Chapter Four</p>
        <h2 className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
          Wedding Details
        </h2>
        <OrnamentalDivider className="mt-6" />
      </SectionReveal>

      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        {weddingDetails.map((detail, index) => {
          const Icon = icons[index];
          return (
            <SectionReveal
              key={detail.label}
              delay={index * 0.12}
              className="flex flex-col items-center gap-5 rounded-sm border border-charcoal/10 bg-pearl/70 px-8 py-12 text-center shadow-[0_25px_50px_-30px_rgba(58,42,32,0.3)]"
            >
              <Icon className="text-gold" size={28} strokeWidth={1.25} aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.35em] text-maroon">{detail.label}</p>
              <p className="font-serif text-2xl text-charcoal">{detail.value}</p>
              <p className="text-sm leading-relaxed text-charcoal/60">{detail.description}</p>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
