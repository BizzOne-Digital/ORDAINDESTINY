import Image from "next/image";
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
