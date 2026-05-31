import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Preeti Semwal",
  description:
    "Upcoming articles from Preeti Semwal on healing, emotional balance, inner clarity, prenatal support, and workplace well-being.",
  path: "/blog",
  noIndex: true,
});

const articles = [
  {
    title: "The Gentle Practice of Returning to Yourself",
    excerpt:
      "A reflection on inner awareness, emotional steadiness, and the small practices that help us come back into balance.",
    category: "Inner Clarity",
    date: "Coming soon",
    href: "",
  },
  {
    title: "Healing as a Conversation with the Body",
    excerpt:
      "Notes on listening to subtle signals, working with stress patterns, and creating space for deeper well-being.",
    category: "Intuitive Healing",
    date: "Coming soon",
    href: "",
  },
  {
    title: "Nurturing the Inner Atmosphere",
    excerpt:
      "A soft exploration of emotional support, conscious motherhood, and the sacred pace of womb-centered healing.",
    category: "Womb Healing",
    date: "Coming soon",
    href: "",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(234,223,206,0.5),transparent_28%),linear-gradient(135deg,#fffdf8_0%,#fffaf2_58%,#f8f1e8_100%)]" />
        <Reveal>
          <div className="mx-auto max-w-[52rem] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8d735f]">
              Insights
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-[#241d18] sm:text-5xl lg:text-6xl">
              Blog
            </h1>
            <p className="editorial-prose editorial-prose-center mt-6">
              Reflections on healing, inner clarity, emotional balance, and mindful living
              from Shwaastika Wellness.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-[52rem] text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">
              Published Reflections
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f2822] sm:text-4xl">
              Read gentle notes for the journey inward.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {articles.map((article) => {
              const isPublished = Boolean(article.href);
              const cardContent = (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d735f]">
                    {article.category} · {article.date}
                  </p>
                  <h3 className="mt-4 text-2xl leading-tight text-[#241d18]">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#5d5045]">
                    {article.excerpt}
                  </p>
                  {isPublished ? (
                    <span className="mt-6 inline-flex text-sm font-semibold text-[#3f5f46]">
                      Read Article
                    </span>
                  ) : (
                    <p className="mt-6 text-sm font-semibold text-[#8a7764]">
                      External article link coming soon.
                    </p>
                  )}
                </>
              );

              return (
                <Reveal key={article.title}>
                  {isPublished ? (
                    <Link
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full rounded-[1.75rem] border border-[#eadfce] bg-white p-6 shadow-sm shadow-[#6b513b]/4 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#6b513b]/8"
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    <article className="h-full rounded-[1.75rem] border border-[#eadfce] bg-white p-6 shadow-sm shadow-[#6b513b]/4">
                      {cardContent}
                    </article>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}
