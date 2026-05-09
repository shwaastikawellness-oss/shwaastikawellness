"use client";

import ImageCarousel, { type CarouselImage } from "@/components/ImageCarousel";

type ReviewCarouselProps = {
  images: CarouselImage[];
};

export default function ReviewCarousel({ images }: ReviewCarouselProps) {
  return (
    <ImageCarousel
      eyebrow="Reviews"
      heading="Google Reviews"
      images={images}
    />
  );
}
