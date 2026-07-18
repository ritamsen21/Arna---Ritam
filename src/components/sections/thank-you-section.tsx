import Image from "next/image";
import { thankYouContent } from "@/content/site-content";
import { SectionReveal } from "@/components/motion/section-reveal";
import { OrnamentalDivider } from "@/components/ui/ornamental-divider";
import { AlponaBackdrop } from "@/components/decor/alpona-backdrop";

/**
 * Closing chapter: a quiet, full-bleed farewell — the last page of the
 * album rather than a typical footer.
 */
export function ThankYouSection() {
  return (
    <section
      id="thank-you"
      aria-label="Thank You"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-charcoal px-6 py-28 text-pearl"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/couple/riverboat-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/60" />
        <AlponaBackdrop tone="gold" opacity={0.12} />
      </div>

      <SectionReveal className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <p className="mb-4 text-xs tracking-[0.4em] text-gold">অধ্যায় ছয়</p>
        <h2 className="font-serif text-4xl text-pearl sm:text-6xl">{thankYouContent.title}</h2>
        <OrnamentalDivider className="my-8" />
        <p className="text-balance font-body text-lg leading-relaxed text-pearl/75">
          {thankYouContent.message}
        </p>
        <p className="mt-10 font-serif text-3xl italic text-gold">{thankYouContent.signOff}</p>
      </SectionReveal>
    </section>
  );
}
