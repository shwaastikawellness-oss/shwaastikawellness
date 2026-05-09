"use client";

import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import LightboxModal from "@/components/LightboxModal";

export type CarouselImage = {
  title: string;
  label: string;
  tone: string;
};

type ImageCarouselProps = {
  eyebrow: string;
  heading: string;
  images: CarouselImage[];
};

export default function ImageCarousel({ eyebrow, heading, images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleImages = useMemo(() => {
    return [0, 1, 2].map((offset) => images[(index + offset) % images.length]);
  }, [images, index]);

  const goPrevious = useCallback(() => {
    setIndex((value) => (value - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((value) => (value + 1) % images.length);
  }, [images.length]);

  const activeLightboxImage = lightboxIndex === null ? null : images[lightboxIndex];

  return (
    <section className="bg-[#fbf8f1] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              {heading}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goPrevious}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-white text-xl text-[#2f2822] shadow-sm hover:bg-[#f3eadb]"
              aria-label={`Previous ${heading}`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cdbd9f] bg-white text-xl text-[#2f2822] shadow-sm hover:bg-[#f3eadb]"
              aria-label={`Next ${heading}`}
            >
              →
            </button>
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-3">
          {visibleImages.map((image, offset) => {
            const realIndex = (index + offset) % images.length;

            return (
              <motion.button
                layout
                key={`${image.title}-${realIndex}`}
                type="button"
                onClick={() => setLightboxIndex(realIndex)}
                className="group rounded-[1.75rem] border border-[#e5d9c7] bg-white p-3 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6b513b]/10"
                aria-label={`Open ${image.title}`}
              >
                <div className={`flex aspect-[4/5] items-center justify-center rounded-[1.35rem] bg-gradient-to-br ${image.tone} p-5`}>
                  <div className="rounded-2xl bg-white/78 p-5 text-center backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
                      {image.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#2f2822]">{image.title}</h3>
                    <p className="mt-3 text-sm text-[#66584d]">Click to view full screenshot</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <div className="mt-7 flex justify-center gap-2">
          {images.map((image, dotIndex) => (
            <button
              key={image.title}
              type="button"
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition ${
                index === dotIndex ? "w-8 bg-[#3f5f46]" : "w-2.5 bg-[#d2c3a9]"
              }`}
              aria-label={`Go to ${image.title}`}
            />
          ))}
        </div>
      </div>

      <LightboxModal
        isOpen={Boolean(activeLightboxImage)}
        title={activeLightboxImage?.title ?? "Testimonial screenshot"}
        onClose={() => setLightboxIndex(null)}
      >
        {activeLightboxImage ? (
          <div className={`flex min-h-[70vh] items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${activeLightboxImage.tone} p-8`}>
            <div className="max-w-xl rounded-[1.5rem] bg-white/85 p-8 text-center shadow-xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
                {activeLightboxImage.label}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-[#2f2822]">
                {activeLightboxImage.title}
              </h3>
              <p className="mt-4 text-[#66584d]">Full screenshot placeholder</p>
            </div>
          </div>
        ) : null}
      </LightboxModal>
    </section>
  );
}
