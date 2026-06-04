import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#fffdf8] px-5 py-16 sm:px-8 lg:px-10">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#5d686f] px-6 py-11 text-white shadow-xl shadow-[#5d686f]/14 sm:px-10 lg:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2f5f6]">Start the conversation</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
                Ready to build a healthier, more resilient workplace?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#e9ecef]">
                Plan a custom wellness, leadership, or emotional intelligence program for{" "}
                <span className="font-semibold text-white">your people</span>.
              </p>
            </div>
            <Link
              href="/book-a-session"
              className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#5d686f] shadow-lg transition hover:bg-[#f2f5f6]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
