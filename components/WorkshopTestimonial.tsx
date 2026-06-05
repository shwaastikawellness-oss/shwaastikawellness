"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const WORKSHOP_ID = "workshop-video";

export default function WorkshopTestimonial() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handler = (e: CustomEvent<{ id: string }>) => {
      if (e.detail.id !== WORKSHOP_ID) {
        videoRef.current?.pause();
      }
    };
    window.addEventListener("testimonial-play", handler as EventListener);
    return () =>
      window.removeEventListener("testimonial-play", handler as EventListener);
  }, []);

  return (
    <section className="bg-[#fffdf8] px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8d735f]">
          Corporate Workshops
        </p>
        <h3 className="mt-2 text-2xl font-bold text-[#17120f] sm:text-3xl">
          Workshop Experiences
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto w-full max-w-[420px] lg:max-w-[500px]"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-[#eadfce] bg-[#17130f] shadow-xl shadow-[#6b513b]/7">
          <video
            ref={videoRef}
            src="/combinedree.mp4"
            controls
            playsInline
            preload="metadata"
            onPlay={() => {
              window.dispatchEvent(
                new CustomEvent("testimonial-play", {
                  detail: { id: WORKSHOP_ID },
                }),
              );
            }}
            className="h-full w-full object-cover object-[center_20%]"
          />
        </div>
      </motion.div>
    </section>
  );
}
