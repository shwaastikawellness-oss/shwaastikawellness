import Link from "next/link";
import Reveal from "@/components/Reveal";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PagePlaceholder({
  eyebrow,
  title,
  intro = "Articles are being prepared and reviewed before publication.",
  ctaLabel = "Book a Session",
  ctaHref = "/book-a-session",
}: PagePlaceholderProps) {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#fbf8f1] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(199,214,189,0.55),transparent_28%),linear-gradient(135deg,#fbf8f1_0%,#f3eadb_58%,#eef4e9_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] text-[#2f2822] sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-justify text-lg leading-8 text-[#6a5e52]">{intro}</p>
              <Link
                href={ctaHref}
                className="mt-8 inline-flex rounded-full bg-[#3f5f46] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#3f5f46]/15 transition hover:bg-[#334f39]"
              >
                {ctaLabel}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="aspect-[16/10] rounded-[1.75rem] border border-[#e1d3bd] bg-white/70 p-3 shadow-lg shadow-[#6b513b]/10">
              <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#c7b28e] bg-[linear-gradient(145deg,#fffdf8,#e5eddf)] text-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
                    Editorial Notes
                  </p>
                  <p className="mt-3 text-justify text-sm leading-6 text-[#76695d]">
                    New writing is reviewed before it appears on the site.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[#e5d9c7] bg-[#fbf8f1] p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              Editorial Queue
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
              Upcoming insights are being prepared with care.
            </h2>
            <p className="mt-5 max-w-3xl text-justify text-base leading-8 text-[#6a5e52]">
              Future articles will focus on emotional balance, inner clarity, healing
              practices, and workplace well-being.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#fbf8f1] px-5 py-14 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#3f5f46] p-6 text-white shadow-xl shadow-[#3f5f46]/15 sm:p-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#dfe9d8]">
                Begin Here
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Ready to begin your wellness journey?</h2>
            </div>
            <Link
              href={ctaHref}
              className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#3f5f46] transition hover:bg-[#f3eadb]"
            >
              {ctaLabel}
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
