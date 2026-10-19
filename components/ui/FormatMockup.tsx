import type { MockupKind } from "@/lib/products";
import { cn } from "@/lib/utils";
import { BookCover } from "./BookCover";
import { BookMockup } from "./BookMockup";

function TabletMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[3/4.4] rounded-[14px] bg-[#111] p-[6%] shadow-[10px_18px_30px_-10px_rgba(0,0,0,.5)] ring-1 ring-black", className)}>
      <div className="h-full w-full overflow-hidden rounded-[4px]">
        <BookCover className="h-full w-full" />
      </div>
    </div>
  );
}

function AudiobookMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square", className)}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M30 120V95a70 70 0 01140 0v25" fill="none" stroke="#141414" strokeWidth="12" strokeLinecap="round" />
        <path d="M30 120V95a70 70 0 01140 0v25" fill="none" stroke="#3a3a3a" strokeWidth="2" strokeLinecap="round" />
        <rect x="14" y="108" width="34" height="62" rx="14" fill="#151515" />
        <rect x="152" y="108" width="34" height="62" rx="14" fill="#151515" />
      </svg>
      <div className="absolute left-1/2 top-[30%] w-[42%] -translate-x-1/2 overflow-hidden rounded-sm shadow-lg">
        <BookCover className="block aspect-[2/3] w-full" />
      </div>
    </div>
  );
}

export function FormatMockup({ kind, className }: { kind: MockupKind; className?: string }) {
  switch (kind) {
    case "softcover":
      return <BookMockup depth={10} className={className} />;
    case "hardcover":
      return <BookMockup depth={20} className={className} />;
    case "ebook":
      return <TabletMockup className={className} />;
    case "audiobook":
      return <AudiobookMockup className={className} />;
  }
}
