const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const source = 'C:/Users/PC/.codex/generated_images/01a1548d-261f-79c0-b712-333af019c1ff';
const assets = [
  { name: 'royal-hero', file: 'exec-5d478e8d-0acb-44ca-8b38-993e11c408e7.png', prompt: 'Photorealistic luxury website hero background, landscape 3:2. Midnight navy and antique gold royal palace library with gilded stone arches on the right, golden sunlight and distant garden, dark uncluttered left two thirds for heading, marble and cream magnolias at edges. No books, text, logos or interface.' },
  { name: 'ivory-library', file: 'exec-279fd56f-7621-4848-9b90-a6cdbe26a65f.png', prompt: 'Photorealistic luxury editorial background, landscape 3:2. Warm ivory and gold royal library, gilded moldings, cream bookshelves, softly lit arched window. White marble tabletop, small antique crown at far left, cream magnolias at far right, empty center for separate book mockup. No foreground books, people, text, logos or interface.' },
  { name: 'navy-palace', file: 'exec-99e16ef5-8e76-48d4-add6-10854af6a9de.png', prompt: 'Photorealistic luxury palace background, landscape 3:2. Midnight navy vaulted royal hall with symmetrical antique gold columns at edges, subtle warm candles, distant arched doorway, cream flowers at bottom corners. Dark uncluttered center for service cards. No books, people, text, icons or interface.' },
  { name: 'ivory-flowers', file: 'exec-fd3f1867-700d-4103-bdda-7bbb5b944bbc.png', prompt: 'Photorealistic premium floral still life, landscape 3:2, for luxury faith-based bookstore Ordain Destiny. Cream ivory magnolia flowers with a few delicate ivory roses, muted olive leaves, small antique gold botanical sprigs resting elegantly on warm ivory white marble tabletop, soft royal library background out of focus. Bouquet mainly on the right with airy clean ivory negative space to left. Warm morning sunlight, delicate realistic petal texture, subtle soft shadows, quiet regal elegant mood, antique gold #C6A052 and warm ivory #F8F4EB. No text, no typography, no watermark, no books, no people, no interface.' },
  { name: 'book-cover', file: 'exec-021db54c-ec62-4005-ba64-3ec4950aabff.png', prompt: 'Flat front conceptual book cover, portrait 2:3, no perspective. Midnight navy leather, fine gold foil botanical rectangular border, small crown at top, readable gold serif title God, Divine Dogs and Royals, seated golden dog engraved below title, Princess Elector at bottom. Cover fills entire canvas. No other text, publisher logos or watermark.' },
  { name: 'burgundy-offer', file: 'exec-b2001cee-9bf1-46d4-bfbe-e7f503672da1.png', prompt: 'Photorealistic luxury offer background, landscape 3:2. Deep burgundy silk with realistic folds, exquisite burgundy gift box with bow, gold ribbon and tiny crown on far lower left. Antique gold botanical leaves at edges. Dark empty burgundy center for website heading. No words, letters, UI or watermark.' }
];
function edit(file, transform) {
  const before = fs.readFileSync(file, 'utf8');
  const after = transform(before);
  if (after === before) throw new Error('Expected edit missing: ' + file);
  fs.writeFileSync(file, after, 'utf8');
}
async function main() {
  const target = path.resolve('public/images');
  fs.mkdirSync(target, { recursive: true });
  for (const asset of assets) {
    const dest = path.join(target, asset.name + '.webp');
    if (fs.existsSync(dest)) throw new Error('Refusing to overwrite existing asset: ' + dest);
    const info = await sharp(path.join(source, asset.file)).webp({quality: asset.name === 'book-cover' ? 92 : 86, effort: 6}).toFile(dest);
    asset.output = '/images/' + asset.name + '.webp';
    asset.width = info.width; asset.height = info.height; asset.bytes = info.size;
    console.log(asset.name + ': ' + info.width + 'x' + info.height + ', ' + Math.round(info.size/1024) + ' KB');
  }
  fs.writeFileSync(path.join(target, 'asset-manifest.json'), JSON.stringify({ generator: 'Built-in image_gen', note: 'Generated concept artwork. Book cover is a design concept pending the actual client cover. Prompts below summarize the generation direction.', assets }, null, 2) + '\n');
  edit('lib/site-config.ts', s => s.replace(/\/\*\* Supporting imagery[\s\S]*?export const images = \{[\s\S]*?\} as const;/, `/** Locally generated royal imagery. See public/images/asset-manifest.json. */
export const images = {
  heroArchitecture: "/images/royal-hero.webp",
  library: "/images/ivory-library.webp",
  flowers: "/images/ivory-flowers.webp",
  palace: "/images/navy-palace.webp",
  bookCover: "/images/book-cover.webp",
  specialOffer: "/images/burgundy-offer.webp",
} as const;`));
  fs.writeFileSync('components/ui/BookCover.tsx', `import Image from "next/image";
import { images, siteConfig } from "@/lib/site-config";

/** Generated concept artwork; replace images.bookCover when the final cover arrives. */
export function BookCover({ className }: { className?: string }) {
  return (
    <Image
      src={images.bookCover}
      alt={siteConfig.bookTitle + " by " + siteConfig.author + ", conceptual book cover"}
      width={1024}
      height={1536}
      sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 70vw"
      className={className}
    />
  );
}
`);
  edit('components/ui/BookMockup.tsx', s => s.replace('SVG cover with a CSS spine', 'Generated cover with a CSS spine'));
  edit('components/home/Hero.tsx', s => s.replace('object-center opacity-30', 'object-center opacity-80').replace('from-navy via-navy/85 to-navy/30', 'from-navy via-navy/70 to-navy/10').replace('to-navy/40', 'to-navy/20'));
  edit('components/home/BookIntro.tsx', s => s.replace('object-cover opacity-20', 'object-cover opacity-80').replace('from-ivory/70 via-ivory/40 to-ivory-200/90', 'from-ivory/30 via-ivory/10 to-ivory-200/50'));
  edit('components/home/ServicesOverview.tsx', s => s.replace('object-cover opacity-15', 'object-cover opacity-60').replace('from-navy/80 via-navy/90 to-navy', 'from-navy/60 via-navy/70 to-navy/90'));
  edit('components/ui/PageHero.tsx', s => s.replace('object-cover opacity-25', 'object-cover opacity-60').replace('from-navy via-navy/90 to-navy/60', 'from-navy/90 via-navy/70 to-navy/50'));
  edit('components/home/SpecialOffer.tsx', s => {
    s = 'import Image from "next/image";\n' + s;
    s = s.replace('import { siteConfig }', 'import { images, siteConfig }');
    s = s.replace(/function GiftBox\([\s\S]*?\nexport function SpecialOffer/, 'export function SpecialOffer');
    s = s.replace(/      <GiftBox[^\n]*\/>/, `      <Image src={images.specialOffer} alt="" fill sizes="100vw" className="-z-20 object-cover object-[center_65%]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-burgundy/65 md:bg-gradient-to-r md:from-burgundy/25 md:via-burgundy/65 md:to-burgundy/35" />`);
    return s;
  });
  edit('components/about/AboutContent.tsx', s => {
    s = 'import Image from "next/image";\n' + s;
    s = s.replace('import { siteConfig }', 'import { images, siteConfig }');
    s = s.replace('<section className="bg-ivory py-20 text-center">', `<section className="relative isolate overflow-hidden bg-ivory py-20 text-center">
      <Image src={images.flowers} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-40" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ivory/95 via-ivory/85 to-ivory/50" />`);
    return s;
  });
  edit('next.config.ts', s => s.replace('    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],\r\n', '').replace('    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],\n', ''));
  edit('README.md', s => s.replace('- **Book cover:** `components/ui/BookCover.tsx` is a placeholder SVG cover. Once the final cover is ready, add it to `/public` and render it with `next/image` inside this component. Every mockup on the site uses it.', '- **Generated images:** Six optimized WebP assets live in `public/images`. Local paths are centralized in `lib/site-config.ts`; `public/images/asset-manifest.json` records asset dimensions and generation directions. Images were created with the built-in image generator.\n- **Book cover:** `components/ui/BookCover.tsx` renders the generated conceptual cover. Update `images.bookCover` when the actual client cover arrives; every print, eBook and audiobook mockup uses it.'));
  console.log('Installed 6 local WebP images and updated all consuming components.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
