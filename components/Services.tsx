"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Link from "next/link";

const services = [
  {
    title: "Workplace Wellness & Resilience",
    description: "Programs that help teams manage stress, restore focus, and build healthier daily routines.",
  },
  {
    title: "Leadership & Team Development",
    description: "Practical facilitation for trust, ownership, communication, and people-first leadership.",
  },
  {
    title: "Soft Skills & Professional Growth",
    description: "Interactive sessions for confidence, collaboration, presentation, and workplace readiness.",
  },
  {
    title: "Diversity, Equity & Sensitivity",
    description: "Respectful learning experiences that support inclusion, awareness, and safer conversations.",
  },
  {
    title: "Safety & Capability Building",
    description: "Training that strengthens safety mindset, behavioural awareness, and responsible action.",
  },
  {
    title: "Emotional Intelligence & Workplace Behaviour",
    description: "Guidance for self-awareness, empathy, conflict response, and professional conduct.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#fbf8f1] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">Services</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
            Training experiences designed for real workplace change.
          </h2>
          <p className="mt-5 max-w-[46rem] text-lg leading-9 text-[#6a5e52]">
            Choose focused modules or combine them into a{" "}
            <span className="editorial-highlight">custom development journey</span> for your team.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full rounded-[1.75rem] border border-[#e5d9c7] bg-white p-7 shadow-sm transition hover:border-[#b7c5a9] hover:shadow-xl hover:shadow-[#6b513b]/8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5eddf]">
                  <span className="h-5 w-5 rounded-full border-2 border-[#6b7d55]" />
                </div>
                <h3 className="text-xl font-semibold text-[#332b24]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6f6256]">{service.description}</p>
                <Link
                  href="/corporate-workshop"
                  className="mt-6 inline-flex text-sm font-semibold text-[#3f5f46] hover:text-[#2f4734]"
                >
                  Explore
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
