import Reveal from "@/components/Reveal";
import Link from "next/link";

const highlights = [
  "Professional Guidance",
  "Wellness-Centered Approach",
  "Corporate & Personal Growth",
];

export default function About() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="aspect-[5/4] rounded-[2rem] border border-[#e4d8c4] bg-[#f3eadb] p-4 shadow-xl shadow-[#6b513b]/8">
            <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#c9b693] bg-[linear-gradient(145deg,#fffdf8,#e5eddf)] text-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">Practice Visual</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#76695d]">
                  A calm space for guided reflection and personal growth.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              About Shwaastika Wellness
            </h2>
            <p className="editorial-prose mt-6">
              Shwaastika Wellness creates thoughtful programs for workplace wellness,
              emotional intelligence, leadership readiness, professional behaviour,
              safety capability, and holistic growth. The approach blends practical
              training with <span className="editorial-highlight">human-centered reflection</span>{" "}
              so teams and individuals can build confidence, awareness, resilience, and
              healthier ways of working.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex rounded-full border border-[#cdbd9f] bg-white px-6 py-3 text-sm font-semibold text-[#3f352d] transition hover:border-[#8a9b72] hover:bg-[#fbf8f1]"
            >
              Learn More
            </Link>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-[#eadfce] bg-[#fbf8f1] p-5 shadow-sm">
                  <div className="mb-4 h-10 w-10 rounded-2xl bg-[#dfe9d8]" />
                  <h3 className="text-base font-semibold text-[#3a3028]">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
