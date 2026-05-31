"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello%0AWelcome+to+SHWAASTIKA+WELLNESS.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A-+Your+concern+or+goal%0A-+Preferred+service%0A-+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly&type=phone_number&app_absent=0";

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
    duration: "60-65 mins",
    included: [
      "Intuitive energy work",
      "Guided awareness and grounding",
      "Supportive practices based on what emerges",
    ],
    pricing: [
      ["Single Session", "INR 3,000 | USD 60"],
      ["3-Session Journey", "INR 8,100 | USD 162", "Includes a 10% courtesy reduction"],
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
    duration: "40-45 mins",
    included: [
      "Space to ask questions openly",
      "Practical guidance and self-reflection",
      "Emotional grounding and clarity",
    ],
    pricing: [["Single Session", "INR 2,500 | USD 55"]],
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
    duration: "60-65 mins",
    included: [
      "Personalized womb and prenatal support",
      "Emotional holding and grounding",
      "Gentle practices based on individual needs",
    ],
    pricing: [
      ["Single Session", "INR 3,500 | USD 45"],
      ["3-Session Support Journey", "INR 9,500 | USD 120", "Includes a courtesy reduction"],
      [
        "Monthly Deep Support Program - 8 Sessions",
        "INR 18,400 | USD 225",
        "Approximately 2 sessions per week across the month",
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
    pricing: [["Custom engagement", "Pricing shared upon discussion"]],
  },
];

type Service = (typeof services)[number];

function InvestmentDetails({ service }: { service: Service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="rounded-[2rem] bg-[#fffefa] p-6 text-left shadow-[0_24px_70px_rgba(77,75,55,0.08)] sm:rounded-[2.25rem] sm:p-7 lg:p-9">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8d7158]">
            Session Details
          </p>
          <h3 className="mt-4 text-2xl leading-tight text-[#171412] sm:text-3xl">
            {service.title}
          </h3>
          <p className="mt-4 max-w-[42rem] text-[1.02rem] leading-8 text-[#4f463e]">
            {service.description}
          </p>
          <p className="mt-4 text-sm text-[#6c6259]">
            <span className="font-semibold text-[#171412]">Duration:</span> {service.duration}
          </p>
        </div>

        <div className="mt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8d7158]">
            What Is Included
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[#4f463e]">
            {service.included.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-px w-5 shrink-0 bg-[#bda98b]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 space-y-2.5">
          {service.pricing.map(([name, price, note]) => (
            <div key={name} className="border-t border-[#efe6d8] pt-3">
              <div>
                <p className="font-medium text-[#171412]">{name}</p>
                {note ? <p className="mt-1 text-sm text-[#7a6b5e]">{note}</p> : null}
              </div>
              <p className="mt-1 text-sm font-semibold text-[#5f6f55]">{price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center rounded-full bg-[#565c43] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-[0_14px_30px_rgba(86,92,67,0.18)] transition hover:bg-[#4b513a]"
          >
            WhatsApp / Contact
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({
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
  return (
    <motion.article
      layout
      className={`mx-auto w-full max-w-[29rem] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_68px_rgba(77,75,55,0.10)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_32px_80px_rgba(77,75,55,0.13)] sm:rounded-[2.25rem] ${
        isActive ? "ring-1 ring-[#565c43]/40" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect(false)}
        className="block w-full text-left"
        aria-pressed={isActive}
      >
        <div className="relative aspect-[16/9] max-h-[17.5rem] overflow-hidden bg-[#d8d2c0]">
          <Image
            src={service.image}
            alt={`${service.title} booking option`}
            fill
            className="object-cover"
            style={{ objectPosition: service.imagePosition }}
            sizes="(max-width: 768px) 92vw, (max-width: 1180px) 46vw, 460px"
            priority={index === 0}
            quality={90}
          />
        </div>

        <div className="px-6 pb-6 pt-5 text-center sm:px-7 sm:pb-7">
          <h2 className="text-[1.55rem] leading-tight text-[#171412] sm:text-[1.65rem]">
            {service.title}
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#5f5349]">
            {service.intro}
          </p>
        </div>
      </button>

      <div className="px-6 pb-7 text-center sm:px-7">
        <button
          type="button"
          onClick={() => onSelect(true)}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#565c43] px-7 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_14px_30px_rgba(86,92,67,0.22)] transition hover:-translate-y-0.5 hover:bg-[#4b513a]"
          aria-expanded={isActive && isExpanded}
        >
          {isActive && isExpanded ? "Hide Details" : "View Details"}
          <span aria-hidden="true" className="text-lg leading-none">
            &rarr;
          </span>
        </button>

        <div className="lg:hidden">
          <AnimatePresence initial={false}>
            {isActive && isExpanded ? (
              <div className="mt-6">
                <InvestmentDetails service={service} />
              </div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default function SessionExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const selectService = (index: number, expand = false) => {
    const isCurrent = index === activeIndex;
    setActiveIndex(index);
    setIsExpanded(expand ? (isCurrent ? (value) => !value : true) : false);
  };

  return (
    <section className="overflow-hidden bg-[#fffefa] px-0 pb-10 pt-0 sm:pb-14">
      <div className="mx-auto max-w-[118rem] rounded-b-[2.75rem] bg-[#eeede5] px-5 pb-14 pt-12 sm:rounded-b-[4rem] sm:px-8 sm:pb-16 sm:pt-14 lg:px-12">
        <div className="mx-auto mb-11 max-w-3xl text-center lg:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8d7158]">
            Book a Session
          </p>
          <h1 className="mt-5 text-4xl leading-[1.08] text-[#2f312d] sm:text-5xl lg:text-[3.35rem]">
            Choose the experience that supports this season of your life.
          </h1>
        </div>

        <div className="mx-auto max-w-[78rem] space-y-11 sm:space-y-14 lg:space-y-16">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isReversed = index % 2 === 1;

            return (
              <motion.section
                key={service.title}
                layout
                className={`grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-10 ${
                  isReversed ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
                }`}
              >
                {isReversed ? (
                  <div className="hidden lg:block">
                    <AnimatePresence initial={false}>
                      {isActive && isExpanded ? (
                        <InvestmentDetails service={service} />
                      ) : (
                        <div />
                      )}
                    </AnimatePresence>
                  </div>
                ) : null}

                <ServiceCard
                  service={service}
                  index={index}
                  isActive={isActive}
                  isExpanded={isExpanded}
                  onSelect={(expand = false) => selectService(index, expand)}
                />

                {!isReversed ? (
                  <div className="hidden lg:block">
                    <AnimatePresence initial={false}>
                      {isActive && isExpanded ? (
                        <InvestmentDetails service={service} />
                      ) : (
                        <div />
                      )}
                    </AnimatePresence>
                  </div>
                ) : null}
              </motion.section>
            );
          })}
        </div>

        <p className="mx-auto mt-14 max-w-[88rem] border-t border-[#d8d2c0] pt-5 text-center text-[11px] uppercase tracking-[0.18em] text-[#7c7667]">
          Shwaastika Wellness by Preeti Semwal
        </p>
      </div>
    </section>
  );
}
