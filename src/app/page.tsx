import { HeroSection } from "@/components/sections/hero-section";
import { StorySection } from "@/components/sections/story-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { DetailsSection } from "@/components/sections/details-section";
import { BlessingsSection } from "@/components/sections/blessings-section";
import { ThankYouSection } from "@/components/sections/thank-you-section";
import { EntryExperience } from "@/components/entry/entry-experience";

/**
 * The full six-chapter Save the Date experience, composed in narrative
 * order: Hero, Our Story, Gallery, Wedding Details, Blessings, Thank You —
 * gated behind a leather-bound Bengali invitation cover.
 */
export default function Home() {
  return (
    <EntryExperience>
      <main>
        <HeroSection />
        <StorySection />
        <GallerySection />
        <DetailsSection />
        <BlessingsSection />
        <ThankYouSection />
      </main>
    </EntryExperience>
  );
}
