"use client";

import Image from "next/image";
import type { Review } from "@/data/reviews";

type ReviewCardProps = {
  review: Review;
  variant?: "default" | "mobile";
  onClick?: () => void;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? "text-[#bda98b]" : "text-[#eae3d9]"}
          aria-hidden="true"
          style={{ fontSize: "1.1rem", lineHeight: 1 }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewCard({ review, variant = "default", onClick }: ReviewCardProps) {
  const isMobileVariant = variant === "mobile";

  return (
    <article
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(event) => {
        if (!onClick) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={[
        "flex flex-col rounded-[1.75rem] border border-[#eae3d9] bg-[#fffdf8] p-6 sm:p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(77,75,55,0.08)]",
        onClick ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8d7158]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf8]" : "",
        isMobileVariant ? "h-[420px]" : "h-[380px] sm:h-[420px]",
      ].join(" ")}
    >
      <div className="shrink-0 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-11 w-11 shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3eadb] text-sm font-semibold text-[#8d7158] border border-[#e5d9c7]">
              {getInitials(review.name) || "R"}
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-[0.95rem] font-semibold text-[#2f2822]">
              {review.name}
            </h3>
            <p className="mt-0.5 text-xs text-[#8a7a6a]">{review.time}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center h-8 w-8 rounded-full bg-[#f8f4ec] border border-[#eae3d9]">
          <Image
            src="/images/google.png"
            alt="Google review"
            width={14}
            height={14}
            className="object-contain opacity-80"
          />
        </div>
      </div>

      <div className="mt-5">
        <StarRating rating={review.rating} />
      </div>

      <div className="relative mt-5 min-h-0 flex-1 overflow-hidden">
        {/* Subtle decorative quote mark */}
        <span className="absolute -top-3 -left-2 text-[4rem] leading-none text-[#f3eadb] font-serif z-0 select-none opacity-60">
          "
        </span>
        <div className="relative z-10 h-full overflow-y-auto pr-3 [scrollbar-color:#d7c8ad_transparent] [scrollbar-width:thin]">
          <p className="font-serif italic text-[1.05rem] leading-relaxed text-[#5c5249] whitespace-pre-line">
            {review.review}
          </p>
        </div>
      </div>
      
      {onClick && (
         <div className="mt-4 border-t border-[#eae3d9]/60 pt-4 flex justify-end">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bda98b] group-hover:text-[#8d7158] transition-colors">
              Read Full Review →
            </span>
         </div>
      )}
    </article>
  );
}
