"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const faqs = [
  {
    question: "How long is a session?",
    answer:
      "Typically lasting 60-65 minutes, each session is designed to feel immersive, engaging, and thoughtfully paced from beginning to end.",
  },
  {
    question: "Is online as effective as in-person?",
    answer:
      "Yes - many participants describe online experiences as equally deep, engaging, and impactful as sessions held in person.",
  },
  {
    question: "Is this a medical treatment?",
    answer:
      "This is intuitive healing-alternative treatments for deep rooted chronic issues. It not a substitute for licensed medical or mental-health care.",
  },
  {
    question: "Can I seek guidance about someone else?",
    answer:
      "Yes, if the guidance is intended for the well-being of a loved one",
  },
];

export default function IntuitiveHealingFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeFaq = activeIndex === null ? null : faqs[activeIndex];

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <section className="bg-[#eee7d2] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group flex w-full items-center justify-between gap-5 rounded-[1.75rem] border border-[#2f2822]/80 bg-[#eee7d2] px-5 py-5 text-left shadow-sm transition hover:bg-[#f7f1df] sm:rounded-full sm:px-8 sm:py-6"
                  aria-haspopup="dialog"
                >
                  <span className="text-lg font-semibold text-[#15120f] sm:text-xl">
                    Q. {faq.question}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2f2822] text-2xl leading-none transition group-hover:bg-white sm:h-12 sm:w-12">
                    Open
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeFaq ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17130f]/68 px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setActiveIndex(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="intuitive-faq-title"
              className="relative w-full max-w-lg overflow-hidden rounded-[1.5rem] bg-[#f5eadc] p-4 shadow-xl shadow-black/30 sm:p-5"
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-3xl font-light text-[#16120f] transition hover:bg-white"
                aria-label="Close FAQ popup"
              >
                x
              </button>

              <div className="relative min-h-[340px] overflow-hidden rounded-[1.25rem] bg-[radial-gradient(circle_at_22%_72%,rgba(190,123,84,0.18),transparent_24%),radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.72),transparent_28%),linear-gradient(135deg,#f3dfcf_0%,#fff8ef_48%,#ead7c8_100%)] p-7 sm:min-h-[400px] sm:p-9">
                <div className="absolute inset-0 bg-white/18" />
                <div className="absolute bottom-8 left-8 h-40 w-40 rounded-full border border-white/40 bg-white/20 blur-[1px]" />
                <div className="relative z-10 pr-10">
                  <p id="intuitive-faq-title" className="sr-only">
                    {activeFaq.question}
                  </p>
                  <p className="max-w-md text-xl font-semibold italic leading-[1.55] text-black sm:text-2xl">
                    {activeFaq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
