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
  eyebrow: "আমাদের পরিবারের আশীর্বাদে",
  saveTheDate: "তারিখটি মনে রাখবেন",
  tagline: "দুটি হৃদয়ের মিলন, সোনালি আর টেরাকোটার আবেশে লেখা এক বাঙালি প্রেমের গল্প।",
  scrollHint: "গল্প শুরু করুন",
};

export const entryContent = {
  bengaliGreeting: "শুভ বিবাহ",
  bengaliSubtitle: "নিমন্ত্রণ",
  prompt: "নিমন্ত্রণপত্র খুলতে স্পর্শ করুন",
};

export const storyBeats = [
  {
    year: "প্রথম দেখা",
    title: "এক পলক, এক থমকে থাকা",
    text: "সাধারণ দিনের ভিড়ে এক নীরব আলাপ কখন যে অনন্ত পথের শুরু হয়ে গেল, টেরই পাইনি।",
    image: "/images/couple/intimate-portrait.jpg",
  },
  {
    year: "পথচলা",
    title: "শিকড়ের মতো গভীর",
    text: "ঋতু বদলেছে, শহর বদলেছে, তবু আমাদের ভাষা ছিল একটাই — ধীর, কোমল, নিশ্চিন্ত।",
    image: "/images/couple/riverboat-portrait.jpg",
  },
  {
    year: "অঙ্গীকার",
    title: "চিরদিন, বাঙালি আভিজাত্যে",
    text: "পায়ে আলপনা, বাতাসে আশীর্বাদ, প্রিয় মানুষদের উপস্থিতিতে আজ শুরু আমাদের চিরকালের পথ।",
    image: "/images/couple/hero-portrait.jpg",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/couple/hero-portrait.jpg",
    alt: "Arna and Ritam in traditional Bengali wedding attire, framed by soft golden light",
    caption: "এখানেই শুরু আমাদের চিরদিন",
    aspect: "portrait",
  },
  {
    src: "/images/couple/intimate-portrait.jpg",
    alt: "An intimate close moment between Arna and Ritam",
    caption: "নির্জন এক মুহূর্ত, শুধু আমাদের",
    aspect: "square",
  },
  {
    src: "/images/couple/riverboat-portrait.jpg",
    alt: "Arna and Ritam on a wooden boat along a Bengal river at dusk",
    caption: "নদী যেখানে ডাকে, সেখানেই আমাদের ঠিকানা",
    aspect: "landscape",
  },
];

export const weddingDetails = [
  {
    label: "তারিখ",
    value: "১১ ফেব্রুয়ারি ২০২৭",
    description: "ভোরের আশীর্বাদ থেকে রাতের উল্লাস পর্যন্ত উৎসব চলবে।",
  },
  {
    label: "স্থান",
    value: `${venue.name}, ${venue.locality}`,
    description: "মার্বেল আর গাঁদা ফুলের সজ্জায় সাজানো প্রাঙ্গণ আপনার অপেক্ষায়।",
  },
  {
    label: "পোশাক",
    value: "ঐতিহ্যবাহী বাঙালি সাজ",
    description: "টেরাকোটা, আইভরি, অ্যান্টিক গোল্ড ও মৃদু মেরুনের ছোঁয়া স্বাগত।",
  },
];

export const blessings = [
  {
    name: "স্নেহভরা পরিবারের পক্ষ থেকে",
    message: "তোমাদের একসাথে থাকা পদ্মফুলের মতো প্রস্ফুটিত হোক — নীরব, অনন্ত, আলোর দিকে মুখ তুলে।",
  },
  {
    name: "আশীর্বাদ রইল বয়োজ্যেষ্ঠদের",
    message: "আজ দুই পরিবার এক হলো। আগামীর প্রতিটি পদক্ষেপ হোক মঙ্গলময় ও শান্ত।",
  },
  {
    name: "প্রিয়জনদের ভালোবাসা",
    message: "তোমাদের সংসার ভরে থাকুক উষ্ণতা, জুঁইয়ের গন্ধ আর মৃদু হাসিতে।",
  },
];

export const thankYouContent = {
  title: "ভালোবাসা ও কৃতজ্ঞতা",
  message:
    "আমাদের গল্প শুরু হওয়ার আগেই আপনি পাশে আছেন, এ আমাদের সৌভাগ্য। আপনাদের সঙ্গে এই আনন্দ ভাগ করে নিতে আমরা অধীর।",
  signOff: `${coupleNames.bride} & ${coupleNames.groom}`,
};
