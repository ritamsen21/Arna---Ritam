export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  aspect: "portrait" | "square" | "landscape";
};

export const coupleNames = {
  bride: "Arna",
  groom: "Ritam",
};

export const weddingDate = new Date("2027-02-11T10:00:00+05:30");

export const venue = {
  name: "Atlas",
  locality: "Harharitala",
};

export const heroContent = {
  eyebrow: "Together with our families",
  saveTheDate: "Save the Date",
  tagline: "Two hearts, one Bengali tale of love, unfolding in gold and terracotta.",
  scrollHint: "Begin the story",
};

export const storyBeats = [
  {
    year: "The Beginning",
    title: "A Glance, A Pause",
    text: "Somewhere between ordinary days, a quiet conversation turned into something we never wanted to end.",
    image: "/images/couple/intimate-portrait.jpg",
  },
  {
    year: "The Journey",
    title: "Growing Roots",
    text: "Across seasons and cities, we built a language only we understood — patient, gentle, unhurried.",
    image: "/images/couple/riverboat-portrait.jpg",
  },
  {
    year: "The Promise",
    title: "Forever, Bengali Style",
    text: "Now, with alpona at our feet and blessings in the air, we begin our forever — surrounded by everyone we love.",
    image: "/images/couple/hero-portrait.jpg",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/couple/hero-portrait.jpg",
    alt: "Arna and Ritam in traditional Bengali wedding attire, framed by soft golden light",
    caption: "Where our forever begins",
    aspect: "portrait",
  },
  {
    src: "/images/couple/intimate-portrait.jpg",
    alt: "An intimate close moment between Arna and Ritam",
    caption: "A quiet moment, just for us",
    aspect: "square",
  },
  {
    src: "/images/couple/riverboat-portrait.jpg",
    alt: "Arna and Ritam on a wooden boat along a Bengal river at dusk",
    caption: "Home is wherever the river takes us",
    aspect: "landscape",
  },
];

export const weddingDetails = [
  {
    label: "The Date",
    value: "11th February 2027",
    description: "Blessings begin at dawn, celebrations linger till dusk.",
  },
  {
    label: "The Venue",
    value: `${venue.name}, ${venue.locality}`,
    description: "A courtyard of marble and marigold, awaiting your presence.",
  },
  {
    label: "The Attire",
    value: "Traditional Bengali Elegance",
    description: "Terracotta, ivory, antique gold and muted maroon are always welcome.",
  },
];

export const blessings = [
  {
    name: "With Love, Our Families",
    message: "May your togetherness bloom like the lotus — quietly, endlessly, always turning toward the light.",
  },
  {
    name: "With Love, Our Elders",
    message: "Two families become one today. May every step ahead be blessed and gentle.",
  },
  {
    name: "With Love, Our Dear Ones",
    message: "May your home always be full of warmth, jasmine, and quiet laughter.",
  },
];

export const thankYouContent = {
  title: "With Love & Gratitude",
  message:
    "Thank you for being a part of our story before it has even begun. We cannot wait to celebrate with you.",
  signOff: `${coupleNames.bride} & ${coupleNames.groom}`,
};
