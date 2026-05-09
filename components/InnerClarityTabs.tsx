"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  {
    label: "How a Session Works",
    imageLabel: "Session image",
    items: [
      "Modes: in-person, live online (video), or voice call all equally transformative",
      "We begin with simple breathwork to settle your energy and quiet mental noise",
      "I intuitively scan your field, share insights, and translate messages into clear next steps",
      "You only need to be honest and open. Do not hold back your energy carries the information",
      "The session is collaborative: ask questions anytime and we'll co-create practical solutions",
    ],
  },
  {
    label: "How You'll Know It's Time",
    imageLabel: "Clarity image",
    items: [
      "Decision fatigue has you second-guessing every option",
      "You've tried strategy and logic but still feel confused",
      "Emotional triggers derail you at key moments",
      "You long for guidance that feels both compassionate and actionable",
    ],
    note: "If any of these resonate, Psychic Guidance will help you access the insights already inside you and turn them into clear, confident next steps.",
  },
  {
    label: "Is Psychic Guidance Right for You?",
    imageLabel: "Guidance image",
    items: [
      "Psychic Guidance isn't about mystifying the process, it's for anyone who senses there's more beneath the surface of their life and wants to translate subtle signals into real-world clarity. Book a session when you:",
      "Feel stuck or overwhelmed by a decision",
      "Sense recurring relationship or work patterns you can't shake",
      "Face a major transition (career pivot, breakup, loss) and need grounded support",
      "Carry past wounds that keep replaying and crave a gentle path to healing",
      "Hear an inner whisper you can't quite interpret",
      "Experience creative blocks or energetic \"fog\"",
      "Seek deeper alignment with your purpose or next chapter",
    ],
  },
  {
    label: "Who Benefits",
    imageLabel: "Benefits image",
    note: "Anyone seeking clarity, closure or direction regardless of age or background gains from this work. It's best if you come present, honest with yourself and ready to engage with the guidance offered.",
  },
];

export default function InnerClarityTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto rounded-full border border-[#e6dac7] bg-[#fbf8f1] p-1 shadow-sm">
          <div className="flex min-w-max gap-1 lg:min-w-0">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition sm:px-6 lg:flex-1 ${
                    isActive
                      ? "bg-[#be7b54] text-white shadow-md shadow-[#6b513b]/10"
                      : "text-[#5f5349] hover:bg-white hover:text-[#3f5f46]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeTab.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mt-6 rounded-[2rem] border border-[#eadfce] bg-[#f5e9f7] p-6 shadow-xl shadow-[#6b513b]/5 sm:p-8 lg:p-10"
          >
            <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/70 bg-white p-3 shadow-lg shadow-[#6b513b]/8">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[1.1rem] bg-[linear-gradient(145deg,#fffdf8,#dfe9d8)] text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                    {activeTab.imageLabel}
                  </p>
                </div>
              </div>

              <div className="text-lg leading-9 text-[#332b24]">
                {activeTab.items ? (
                  <ul className="space-y-3">
                    {activeTab.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-4 h-2 w-2 shrink-0 rounded-full bg-[#3f5f46]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {activeTab.note ? (
                  <p className={`${activeTab.items ? "mt-8" : ""}`}>{activeTab.note}</p>
                ) : null}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
