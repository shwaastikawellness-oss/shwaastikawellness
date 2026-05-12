"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const videoTestimonials = [
  {
    title: "Healing Experience",
    label: "Video testimonial 1",
    note: "A personal reflection on clarity and emotional alignment.",
  },
  {
    title: "Mind Body Spirit Alignment",
    label: "Video testimonial 2",
    note: "A shared experience after a guided wellness session.",
  },
  {
    title: "Journey of Support",
    label: "Video testimonial 3",
    note: "A story of feeling supported and seen.",
  },
];

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = videoTestimonials[activeIndex];

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="mb-8 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
            Video Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
            Video Experiences
          </h2>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.button
            key={activeVideo.title}
            type="button"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-[#e5d9c7] bg-[#fbf8f1] p-3 text-left shadow-xl shadow-[#6b513b]/10"
            aria-label={`Play ${activeVideo.title}`}
          >
            <div className="relative flex aspect-video items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#ead7c8,#fff8ef_48%,#dfe9d8)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.75),transparent_28%),radial-gradient(circle_at_76%_68%,rgba(63,95,70,0.18),transparent_26%)]" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#2f2822] text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition group-hover:scale-[1.03]">
                Play
              </span>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/75 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d8b65]">
                  {activeVideo.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#2f2822]">
                  {activeVideo.title}
                </h3>
                <p className="mt-1 text-sm text-[#66584d]">{activeVideo.note}</p>
              </div>
            </div>
          </motion.button>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {videoTestimonials.map((video, index) => (
              <button
                key={video.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[1.5rem] border p-3 text-left transition ${
                  activeIndex === index
                    ? "border-[#3f5f46] bg-[#f3eadb]"
                    : "border-[#e5d9c7] bg-white hover:bg-[#fbf8f1]"
                }`}
                aria-pressed={activeIndex === index}
              >
                <div className="flex gap-4">
                  <div className="flex aspect-video w-28 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#fff8ef,#dfe9d8)] text-xs font-semibold uppercase tracking-[0.12em] text-[#3f5f46]">
                    Play
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8b65]">
                      Preview
                    </p>
                    <h3 className="mt-1 font-semibold text-[#2f2822]">{video.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
