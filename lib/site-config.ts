export const siteConfig = {
  name: "Ordain Destiny",
  owner: "Valerie Nong",
  author: "Princess Elector",
  bookTitle: "God, Divine Dogs and Royals",
  tagline: "Faith • Purpose • Destiny",
  description:
    "Ordain Destiny by Valerie Nong, writing as Princess Elector. Discover God, Divine Dogs and Royals and faith-based guidance for your journey.",
  email: "vnong11@gmail.com",
  phone: "661-812-7176",
  phoneHref: "tel:+16618127176",
  announcement: "Buy 2 books, get the 3rd at 50% off",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
  ],
  offer: {
    eyebrow: "A gift for your journey",
    headline: "Buy 2, get the third at 50% off",
    sub: "Plus a complimentary consultation",
    note: "Offer terms and eligibility will be confirmed at the time of your order.",
  },
} as const;

/** Locally generated royal imagery. See public/images/asset-manifest.json. */
export const images = {
  heroArchitecture: "/images/royal-hero.webp",
  library: "/images/ivory-library.webp",
  flowers: "/images/ivory-flowers.webp",
  palace: "/images/navy-palace.webp",
  bookCover: "/images/book-cover.webp",
  specialOffer: "/images/burgundy-offer.webp",
} as const;

export const inquiryTypes = [
  "Book order",
  "Spiritual consultation",
  "Dream interpretation",
  "Relationships and restoration",
  "General inquiry",
] as const;
