export type ProductFormat = "print" | "digital";
export type MockupKind = "softcover" | "hardcover" | "ebook" | "audiobook";

export interface Product {
  slug: string;
  name: string;
  formatGroup: ProductFormat;
  mockup: MockupKind;
  price: number;
  short: string;
  description: string;
  highlights: string[];
}

export const products: Product[] = [
  {
    slug: "softcover",
    name: "Softcover",
    formatGroup: "print",
    mockup: "softcover",
    price: 19.99,
    short: "A beautiful, accessible edition for your journey.",
    description:
      "The softcover edition of God, Divine Dogs and Royals is a lightweight, approachable companion for reading at home, sharing with family, or carrying through your week.",
    highlights: ["Paperback print edition", "Easy to carry and share", "Ideal for personal reading and gifting"],
  },
  {
    slug: "hardcover",
    name: "Hardcover",
    formatGroup: "print",
    mockup: "hardcover",
    price: 29.99,
    short: "A premium edition to treasure for years to come.",
    description:
      "The hardcover edition is a keepsake presentation of the book, made for your shelf, your study, or a meaningful gift to someone on their own journey of faith.",
    highlights: ["Durable hardbound print edition", "A lasting keepsake", "A thoughtful gift"],
  },
  {
    slug: "ebook",
    name: "eBook",
    formatGroup: "digital",
    mockup: "ebook",
    price: 4.99,
    short: "Read anytime, anywhere.",
    description:
      "The eBook edition brings the full text to your phone, tablet, or e-reader so you can return to its reflections wherever you are.",
    highlights: ["Digital edition", "Read on supported devices", "Convenient for reading on the go"],
  },
  {
    slug: "audiobook",
    name: "Audiobook",
    formatGroup: "digital",
    mockup: "audiobook",
    price: 12.99,
    short: "Listen and be inspired on the go.",
    description:
      "The audiobook edition lets you listen to the reflections of God, Divine Dogs and Royals during quiet moments, travel, or your daily routine.",
    highlights: ["Audio edition", "Listen during your daily routine", "Great for reflective listening"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
