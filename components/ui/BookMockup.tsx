import { cn } from "@/lib/utils";
import { BookCover } from "./BookCover";

interface BookMockupProps {
  className?: string;
  /** Visual thickness of the spine/page block in px. */
  depth?: number;
  hover?: boolean;
}

/** Dimensional book: Generated cover with a CSS spine, page edge and cast shadow. */
export function BookMockup({ className, depth = 22, hover = false }: BookMockupProps) {
  return (
    <div className={cn("relative [perspective:1400px]", className)}>
      <div
        className={cn(
          "relative aspect-[2/3] w-full [transform-style:preserve-3d] [transform:rotateY(-18deg)_rotateX(2deg)]",
          hover && "transition-transform duration-700 ease-out hover:[transform:rotateY(-10deg)_rotateX(1deg)_translateY(-6px)]"
        )}
      >
        {/* page block */}
        <div
          className="absolute top-[1.2%] h-[97.6%] bg-[repeating-linear-gradient(90deg,#efe6d2_0_1px,#d9cdb3_1px_2px)]"
          style={{ width: depth, left: "100%", transform: "rotateY(90deg)", transformOrigin: "left" }}
        />
        {/* spine */}
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#02101b] via-[#0c2a43] to-[#061B2B]"
          style={{ width: depth, transform: "rotateY(-90deg)", transformOrigin: "left" }}
        />
        <div className="absolute inset-0 overflow-hidden rounded-r-[3px] shadow-[18px_26px_40px_-12px_rgba(0,0,0,.55)]">
          <BookCover className="h-full w-full" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/45 via-white/10 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/[0.14]" />
        </div>
      </div>
    </div>
  );
}
