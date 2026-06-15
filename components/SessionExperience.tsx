"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello%0AWelcome+to+Shwaastika+Wellness.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A-+Your+concern+or+goal%0A-+Preferred+service%0A-+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly&type=phone_number&app_absent=0";

const services = [
  {
    title: "Intuitive Healing",
    label: "Intuitive Healing",
    intro: "Energy, yoga and awareness for whole-being support.",
    description: (
      <>
        A personalized session held with{" "}
        <span className="editorial-highlight">calm awareness</span>, intuitive energy work,
        supportive conversation, and practices guided by the individual's current
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
    pricing: [
      ["Single Session", "INR 3,000 · USD 60"],
      ["3-Session Journey", "INR 8,100 · USD 162", "Includes a 10% courtesy reduction"],
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
    pricing: [["Single Session", "INR 2,500 · USD 55"]],
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
    pricing: [
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
        Mindfulness-based corporate wellness sessions shaped around the group's scope,
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
    pricing: [["Custom engagement", "Pricing shared upon discussion"]],
  },
];

type Service = (typeof services)[number];

function InvestmentDetails({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="w-full text-left bg-transparent pt-6 pb-2 mt-6 border-t border-[#d8cab5]/60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: description + pricing */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#717b80] mb-2 opacity-80">
                Session Details
              </p>
              <p className="text-[0.95rem] leading-7 text-[#4a5559]">{service.description}</p>
            </div>

            <div className="border-t border-[#d8cab5]/40 pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#717b80] mb-3 opacity-80">
                Investment
              </p>
              <div className="flex flex-col gap-4">
                {service.pricing.map(([name, price, note]) => (
                  <div key={name} className="flex flex-col gap-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <span className="text-sm font-medium text-[#263136]">{name}</span>
                      <span className="text-[13px] font-semibold text-[#57646b]">{price}</span>
                    </div>
                    {note && <p className="text-[11px] text-[#717b80]">{note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: inclusions + CTA */}
          <div className="flex flex-col justify-between gap-6 md:pl-8 md:border-l md:border-[#d8cab5]/40">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#717b80] mb-3 opacity-80">
                What Is Included
              </p>
              <ul className="flex flex-col gap-3">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.92rem] leading-snug text-[#4a5559]">
                    <span className="mt-[0.4rem] h-[3px] w-[3px] shrink-0 rounded-full bg-[#717b80]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-[#263136] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#4a5559]"
            >
              Connect to Book
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceBlock({
  service,
  index,
  isActive,
  isExpanded,
  onSelect,
}: {
  service: Service;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onSelect: (expand?: boolean) => void;
}) {
  const isEven = index % 2 === 0;

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
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#717b80] mb-4">
            {service.duration}
          </p>

          <h2 className="font-serif text-[2rem] leading-[1.1] text-[#263136] sm:text-[2.5rem] md:text-[2.75rem] mb-4">
            {service.title}
          </h2>

          <p className="text-base leading-relaxed text-[#4a5559] mb-8 max-w-md">
            {service.intro}
          </p>

          <div>
            <button
              type="button"
              onClick={() => onSelect(true)}
              aria-expanded={isActive && isExpanded}
              className="group inline-flex items-center pb-1 border-b border-[#717b80]/40 transition hover:border-[#263136]"
            >
              {isActive && isExpanded ? (
                <span className="text-sm font-semibold tracking-wide text-[#263136]">
                  Close Details
                </span>
              ) : (
                <span className="text-sm font-semibold tracking-wide text-[#263136]">
                  View Session Details
                </span>
              )}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {isActive && isExpanded && (
              <InvestmentDetails service={service} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default function SessionExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const selectService = (index: number, expand = false) => {
    const isCurrent = index === activeIndex;
    setActiveIndex(index);
    setIsExpanded(expand ? (isCurrent ? (value: boolean) => !value : true) : false);
  };

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
           <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <Reveal key={service.title} delay={0.1}>
                  <ServiceBlock
                    service={service}
                    index={index}
                    isActive={isActive}
                    isExpanded={isExpanded}
                    onSelect={(expand = false) => selectService(index, expand)}
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
