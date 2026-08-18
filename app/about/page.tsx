import type { Metadata } from "next";
import Image from "next/image";
import FeaturedConversation from "@/components/FeaturedConversation";
import IcasSignature from "@/components/IcasSignature";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Preeti Semwal | Intuitive Healer & Wellness Guide",
  description:
    "Meet Preeti Semwal, founder of Shwaastika Wellness, and learn about her intuitive healing work, ancestral wisdom, resilience, and holistic approach.",
  path: "/about",
});

const featureBlocks = [
  {
    title: "Specialized Gift",
    text: "I hold a unique ability to connect with babies in the womb, support mothers through pregnancy, and guide infants toward joyful, spiritually attuned lives. As a certified Pre & Post Natal Yoga teacher, I blend intuitive depth with gentle expertise to nurture both mother and child.",
  },
  {
    title: "Beyond Healing",
    text: "A retired Squadron Leader from the Indian Air Force, I hold degrees in Law and Management, yet chose to follow my soul's path of healing. I am also an advanced mountaineer, endurance runner, swimmer, horse rider, and motorcyclist — these experiences shaped my resilience and zest for life.",
  },
  {
    title: "A Life of Service & Balance",
    text: "A devoted mother of two and wife of a retired Army officer, I live by the values of discipline, compassion, and grace. Fluent in English and Hindi, I work across cultures and age groups with one purpose: to help people awaken their inner healing potential.",
  },
];

const aboutImages = [
  {
    src: "/images/About/About1.JPG",
    alt: "Preeti Semwal at Shwaastika Wellness",
  },
  {
    src: "/images/About/About2.JPG",
    alt: "Preeti Semwal's Shwaastika Wellness healing practice",
  },
  {
    src: "/images/About/About3.jpeg",
    alt: "Preeti Semwal guiding wellness work",
  },
];

const featureIcons = [
  // Specialized Gift — lotus/leaf
  <svg key="gift" viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
    <path d="M16 4C16 4 9.5 10 9.5 17.5a6.5 6.5 0 0013 0C22.5 10 16 4 16 4z" stroke="#7d8b65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17.5V27" stroke="#7d8b65" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 22c1.2-.8 2-2 3-2.5" stroke="#7d8b65" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
  // Beyond Healing — sun/radiance
  <svg key="healing" viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
    <circle cx="16" cy="16" r="5.5" stroke="#7d8b65" strokeWidth="1.5"/>
    <path d="M16 3v3.5M16 25.5V29M3 16h3.5M25.5 16H29M6.7 6.7l2.5 2.5M22.8 22.8l2.5 2.5M6.7 25.3l2.5-2.5M22.8 9.2l2.5-2.5" stroke="#7d8b65" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // A Life of Service — person/community
  <svg key="service" viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
    <circle cx="16" cy="10" r="4.5" stroke="#7d8b65" strokeWidth="1.5"/>
    <path d="M7 28c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#7d8b65" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M23.5 14.5c2 .8 3.5 2.8 3.5 5.5" stroke="#7d8b65" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M8.5 14.5C6.5 15.3 5 17.3 5 20" stroke="#7d8b65" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>,
];

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#fffdf8] px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-24 lg:pt-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(234,223,206,0.58),transparent_26%),radial-gradient(circle_at_85%_8%,rgba(255,255,255,0.82),transparent_30%),linear-gradient(135deg,#fff7ec_0%,#fffdf8_58%,#f8f1e8_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[#fffdf8]" />

        <div className="mx-auto max-w-7xl">
          {/* Desktop: heading left, ICAS seal right — intentionally asymmetric */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:pl-4">

            {/* Left — page heading */}
            <Reveal>
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8d735f]">
                  Shwaastika Wellness
                </p>
                <h1 className="mt-3 text-4xl font-semibold leading-[1.08] text-[#241d18] sm:text-5xl lg:text-6xl">
                  About Preeti Semwal
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-9 text-[#4f463e] sm:text-xl sm:leading-10">
                  <span className="editorial-highlight">Guided healing</span> rooted in intuition,
                  ancestral wisdom, and holistic well-being.
                </p>
                <div className="mt-5 h-px w-24 bg-[#b9a27e]" />

                {/* Mobile-only: ICAS centered below the divider */}
                <div className="mt-10 flex justify-center lg:hidden">
                  <IcasSignature />
                </div>
              </div>
            </Reveal>

            {/* Desktop-only: ICAS seal in right negative space, offset down */}
            <div className="hidden lg:block lg:pt-14">
              <IcasSignature />
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured Conversation ─────────────────────────────────── */}
      <FeaturedConversation />

      {/* ── Introduction + Photos (two-column) ───────────────────── */}
      <section className="relative bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        {/* Faint warm wash behind the text column */}
        <div className="pointer-events-none absolute inset-y-0 left-0 -z-0 w-1/2 bg-[radial-gradient(ellipse_at_20%_40%,rgba(250,244,234,0.7),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl">

          {/* ── Row 1: Label + first paragraph  |  Photos ── */}
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* Left — section label, heading, first paragraph */}
            <Reveal>
              <article>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                  Introduction
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
                  A sacred space for balance, resilience and well-being.
                </h2>
                <div className="mt-7 h-px w-24 bg-[#d7c6a9]" />
                <div className="editorial-prose mt-8">
                  <p>
                    I am an intuitive energy healer devoted to helping individuals restore{" "}
                    <span className="editorial-highlight">balance, resilience and well-being</span>.
                    Born into a sacred lineage of Himalayan healers, astrologers, and temple priests,
                    I was raised in an environment where intuitive gifts, spiritual rituals, and
                    energetic wisdom were part of daily life.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Right — photo collage */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <Reveal delay={0.06} className="row-span-2">
                <div className="h-full rounded-[1.75rem] border border-[#e4d8c4] bg-white/75 p-3 shadow-xl shadow-[#6b513b]/8">
                  <div className="relative h-full min-h-[280px] overflow-hidden rounded-[1.25rem] bg-[#f3eadb]">
                    <Image
                      src={aboutImages[0].src}
                      alt={aboutImages[0].alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      quality={90}
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-[1.75rem] border border-[#e4d8c4] bg-white/75 p-3 shadow-xl shadow-[#6b513b]/8">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#f3eadb]">
                    <Image
                      src={aboutImages[1].src}
                      alt={aboutImages[1].alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      loading="lazy"
                      quality={90}
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-[1.75rem] border border-[#e4d8c4] bg-white/75 p-3 shadow-xl shadow-[#6b513b]/8">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#f3eadb]">
                    <Image
                      src={aboutImages[2].src}
                      alt={aboutImages[2].alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      loading="lazy"
                      quality={90}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── Row 2: Pull-quote + continuation — full width ── */}
          <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <Reveal delay={0.08}>
              <blockquote className="about-pull-quote">
                <p>
                  "Every session I hold is guided by ancestral threads — enabling me to sense the unseen and channel healing with clarity, compassion and grace."
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="editorial-prose mt-8">
                <p>
                  From childhood, I was naturally sensitive to subtle energy fields and received
                  intuitive insights through dreams and spontaneous knowing. These ancestral gifts
                  allow me to perceive imbalances even from afar and guide people toward{" "}
                  <span className="editorial-highlight">deep healing and transformation</span>.
                  My sessions are integrative and multidimensional, addressing the physical,
                  emotional, mental and spiritual layers of being.
                </p>
                <p>
                  While I am trained in modalities like Craniosacral Therapy and Bach Flower
                  Remedies, my work is guided entirely by intuition and{" "}
                  <span className="editorial-highlight">ancestral wisdom</span> rather than learned
                  technique. Each session is a sacred space where clients feel safe, seen and
                  supported.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>


      {/* ── Gentle breathing divider between Introduction and Philosophy ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#e0d2ba] to-transparent" />

      {/* ── Healing Philosophy ────────────────────────────────────── */}
      <section className="bg-[#fbf8f1] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-[52rem] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              Healing Philosophy
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              A practice shaped by intuition, service and lived experience.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#6b5f54]">
              Three dimensions of Preeti's work and life that converge in every healing session.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {featureBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.1}>
                <article className="flex h-full flex-col rounded-[2rem] border border-[#eadfce] bg-white px-8 py-9 shadow-sm shadow-[#6b513b]/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e4d8c4] bg-[#f8f5ef]">
                    {featureIcons[index]}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#241d18]">{block.title}</h3>
                  <p className="mt-4 flex-1 text-[15px] leading-[1.85] text-[#675b50]">
                    {block.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
