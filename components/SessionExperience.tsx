"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const whatsappBaseUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&type=phone_number&app_absent=0";

const getWhatsappUrl = (serviceTitle: string) =>
  `${whatsappBaseUrl}&text=${encodeURIComponent(
    serviceTitle === "Corporate Workshop"
      ? "Hello, I am interested in learning more about Corporate Workshops at Shwaastika Wellness. Please share the details and next steps."
      : `Hello, I am interested in booking ${serviceTitle === "Womb Healing & Prenatal Support" ? "a" : "an"} ${serviceTitle} session. Please share the available timings and booking details.`,
  )}`;

const services = [
  {
    title: "Intuitive Healing",
    label: "Intuitive Healing",
    intro: "Energy, yoga and awareness for whole-being support.",
    description: (
      <>
        A personalized session held with{" "}
        <span className="editorial-highlight">calm awareness</span>, intuitive energy work,
        supportive conversation, and practices guided by the individual&apos;s current
        physical, emotional, and mental state.
      </>
    ),
    image: "/images/Book%20a%20Session/Intutive%20healing%20book%20a%20seesion.png",
    imagePosition: "center center",
    duration: "60–65 mins",
    included: [
      "Intuitive energy work",
      "Guided awareness and grounding",
      "Supportive practices based on what emerges",
    ],
    contribution: [
      ["Single Session", "INR 4,000 · USD 80"],
      ["3 Sessions", "INR 11,500 · USD 230"],
    ],
  },
  {
    title: "Inner Clarity Guidance",
    label: "Inner Clarity Guidance",
    intro: "Gentle intuitive guidance for clarity, direction and next steps.",
    description: (
      <>
        A reflective guidance session for{" "}
        <span className="editorial-highlight">emotional understanding</span>, relationship
        patterns, life transitions, decision-making, and a more grounded connection with
        yourself.
      </>
    ),
    image: "/images/Book%20a%20Session/inner%20clarity%20guidance%20book%20a%20session.png",
    imagePosition: "center center",
    duration: "40–45 mins",
    included: [
      "Space to ask questions openly",
      "Practical guidance and self-reflection",
      "Emotional grounding and clarity",
    ],
    contribution: [["Single Session", "INR 3,500 · USD 75"]],
  },
  {
    title: "Womb Healing & Prenatal Support",
    label: "Womb Healing & Prenatal Support",
    intro: "Nurturing support through pregnancy, birth and postpartum recovery.",
    description: (
      <>
        A gentle, responsive session for womb connection, pregnancy, birth preparation,
        postpartum recovery, <span className="editorial-highlight">emotional support</span>,
        and deeper feminine well-being.
      </>
    ),
    image: "/images/Book%20a%20Session/womb%20healing%20book%20a%20session.jpeg",
    imagePosition: "center top",
    duration: "60–65 mins",
    included: [
      "Personalized womb and prenatal support",
      "Emotional holding and grounding",
      "Gentle practices based on individual needs",
    ],
    contribution: [
      ["Single Session", "INR 3,500 · USD 45"],
      ["3-Session Support Journey", "INR 9,500 · USD 120", "Includes a courtesy reduction"],
      [
        "Monthly Deep Support — 8 Sessions",
        "INR 18,400 · USD 225",
        "Approx. 2 sessions per week across the month",
      ],
    ],
  },
  {
    title: "Corporate Workshop",
    label: "Corporate Workshops",
    intro: "Customized wellness and awareness work for groups.",
    description: (
      <>
        Mindfulness-based corporate wellness sessions shaped around the group&apos;s scope,
        needs, format, and <span className="editorial-highlight">desired outcomes</span>.
      </>
    ),
    image: "/images/Book%20a%20Session/corporate%20workshop%20book%20a%20session.jpg",
    imagePosition: "center center",
    duration: "Customized",
    included: [
      "Scope-based workshop planning",
      "Mindfulness, breath and awareness practices",
      "Format adapted for the group",
    ],
    contribution: [["Custom engagement", "Contribution shared upon discussion"]],
  },
];

type Service = (typeof services)[number];

function ServiceBlock({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const [isContributionOpen, setIsContributionOpen] = useState(false);
  return (
    <article className="w-full">
      <div
        className={`mx-auto max-w-[64rem] flex flex-col items-center gap-10 md:gap-16 ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="relative aspect-[4/3] w-full max-w-[28rem] md:w-[45%] md:shrink-0 md:aspect-square overflow-hidden rounded-[2rem] shadow-xl shadow-[#263136]/5">
          <Image
            src={service.image}
            alt={`${service.title} session`}
            fill
            className="object-cover"
            style={{ objectPosition: service.imagePosition }}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full md:w-[55%] py-4 md:py-8">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#717b80]">
            {service.duration}
          </p>

          <h2 className="mb-4 font-serif text-[2rem] leading-[1.1] text-[#263136] sm:text-[2.5rem] md:text-[2.75rem]">
            {service.title}
          </h2>

          <p className="mb-6 max-w-md text-base leading-relaxed text-[#4a5559]">
            {service.intro}
          </p>

          <p className="mb-6 max-w-xl text-[0.95rem] leading-7 text-[#4a5559]">
            {service.description}
          </p>

          <button
            type="button"
            onClick={() => setIsContributionOpen((current) => !current)}
            aria-expanded={isContributionOpen}
            aria-controls={`contribution-${index}`}
            aria-label={`${isContributionOpen ? "Hide" : "View"} session contribution for ${service.title}`}
            className="mt-6 flex w-full max-w-xl items-center justify-between border-y border-[#d8cab5]/70 py-4 text-left transition-colors hover:border-[#263136]/60"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#717b80]">
              Session Contribution
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#263136]">
              {isContributionOpen ? "Hide" : "View"}
              <span aria-hidden="true" className="text-base font-normal leading-none">
                {isContributionOpen ? "-" : "+"}
              </span>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {isContributionOpen && (
              <motion.div
                id={`contribution-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-5">
                  <div className="flex flex-col gap-4">
                    {service.contribution.map(([name, price, note]) => (
                      <div key={name} className="flex flex-col gap-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                          <span className="text-sm font-medium text-[#263136]">{name}</span>
                          <span className="text-sm font-semibold text-[#57646b]">{price}</span>
                        </div>
                        {note && <p className="text-xs text-[#717b80]">{note}</p>}
                      </div>
                    ))}
                  </div>
                  <a
                    href={getWhatsappUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book a ${service.title} session on WhatsApp`}
                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#3f5f46] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#263136] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5d686f] focus-visible:ring-offset-2"
                  >
                    Book a Session
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default function SessionExperience() {
  return (
    <main>
      {/* ── About-Style Header ── */}
      <section className="relative isolate overflow-hidden bg-[#fffdf8] px-5 pb-7 pt-10 sm:px-8 sm:pb-8 sm:pt-12 lg:px-10 lg:pb-12 lg:pt-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(234,223,206,0.58),transparent_26%),radial-gradient(circle_at_85%_8%,rgba(255,255,255,0.82),transparent_30%),linear-gradient(135deg,#fff7ec_0%,#fffdf8_58%,#f8f1e8_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-b from-transparent to-[#fffdf8]" />
        <div className="mx-auto max-w-7xl text-center">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8d735f]">
                Ways We Can Work Together
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#241d18] sm:text-5xl lg:text-6xl">
                Book a Session
              </h1>
              <p className="mt-5 mx-auto max-w-2xl text-lg leading-8 text-[#4f463e] sm:text-xl">
                Choose the experience that supports <span className="editorial-highlight italic font-medium">this season of your life</span>.
              </p>
              <div className="mt-6 mx-auto h-px w-24 bg-[#b9a27e]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Service Blocks Section (Stojo Zigzag Style with Bluish Slate Tint) ── */}
      <section className="bg-[#e9ecef] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto w-full">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => {
              return (
                <Reveal key={service.title} delay={0.1}>
                  <ServiceBlock
                    service={service}
                    index={index}
                  />
                </Reveal>
              );
            })}
           </div>
        </div>
      </section>
    </main>
  );
}
