"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

const whatsappBaseUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&type=phone_number&app_absent=0";

const getServiceName = (serviceTitle: string) => {
  if (serviceTitle === "Corporate Workshop") {
    return "Corporate Workshops at Shwaastika Wellness";
  }

  return serviceTitle;
};

const getWhatsappUrl = (serviceTitle: string) =>
  `${whatsappBaseUrl}&text=${encodeURIComponent(
    serviceTitle === "Corporate Workshop"
      ? "Hello, I am interested in learning more about Corporate Workshops at Shwaastika Wellness. Please share the details and next steps."
      : `Hello, I am interested in booking ${serviceTitle === "Womb Healing & Prenatal Support" ? "a" : "an"} ${getServiceName(serviceTitle)} session. Please share the available timings and booking details.`,
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
    pricing: [
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
    pricing: [["Single Session", "INR 3,500 · USD 75"]],
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

function WhatsappLink({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <a
      href={getWhatsappUrl(service.title)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire about ${service.title} on WhatsApp`}
      className={className}
    >
      Enquire on WhatsApp
    </a>
  );
}

function PricingSummary({ service }: { service: Service }) {
  return (
    <div className="mt-6">
      <WhatsappLink
        service={service}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#3f5f46] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#263136] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5d686f] focus-visible:ring-offset-2 sm:w-fit"
      />
    </div>
  );
}

function AccordionSection({
  label,
  id,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-y border-[#d8cab5]/50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5d686f] focus-visible:ring-offset-2"
      >
        <span className="text-sm font-medium tracking-wide text-[#263136]">{label}</span>
        <span
          aria-hidden="true"
          className={`h-2 w-2 shrink-0 rotate-45 border-b border-r border-[#717b80] transition-transform duration-300 ${
            isOpen ? "rotate-[225deg]" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pt-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceBlock({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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
          <p className="order-1 mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#717b80] md:order-none">
            {service.duration}
          </p>

          <h2 className="order-2 mb-4 font-serif text-[2rem] leading-[1.1] text-[#263136] sm:text-[2.5rem] md:order-none md:text-[2.75rem]">
            {service.title}
          </h2>

          <p className="order-3 mb-6 max-w-md text-base leading-relaxed text-[#4a5559] md:order-none">
            {service.intro}
          </p>

          <div className="order-4 md:order-none">
            <PricingSummary service={service} />
          </div>

          <div className="order-5 mt-6 md:order-none">
            <AccordionSection
              label="Explore Session Details"
              id={`session-details-${index}`}
              isOpen={isDetailsOpen}
              onToggle={() => setIsDetailsOpen((current) => !current)}
            >
              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#717b80]">
                    What the session is
                  </p>
                  <p className="text-[0.95rem] leading-7 text-[#4a5559]">{service.description}</p>
                </div>

                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#717b80]">
                    What&apos;s included
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

                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#717b80]">
                    Fee Details
                  </p>
                  <div className="flex flex-col gap-4">
                    {service.pricing.map(([name, price, note]) => (
                      <div key={name} className="flex flex-col gap-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                          <span className="text-sm font-medium text-[#263136]">{name}</span>
                          <span className="text-sm font-semibold text-[#57646b]">{price}</span>
                        </div>
                        {note && <p className="text-xs text-[#717b80]">{note}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionSection>
          </div>
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
