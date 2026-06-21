import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "@/components/NewsletterSignup";
import { createPageMetadata } from "../seo";
import { blogArticles } from "@/data/blogData";

export const metadata: Metadata = createPageMetadata({
  title: "Journal — Reflections, Healing & Insights",
  description:
    "A collection of writings by Preeti Semwal exploring healing, self-awareness, personal growth, intuition, and conscious living through Shwaastika Wellness.",
  path: "/blog",
});

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function BlogIndexPage() {
  return (
    <main className="bg-[#fffdf8]">

      {/* ── HERO ───────────────────────────────── */}
      <section className="journal-hero" aria-labelledby="journal-heading">
        {/* Decorative background orbs */}
        <div className="journal-hero-orb journal-hero-orb--left" aria-hidden="true" />
        <div className="journal-hero-orb journal-hero-orb--right" aria-hidden="true" />

        <div className="journal-hero-inner">
          <p className="journal-label">Journal</p>
          <h1 className="journal-heading" id="journal-heading">
            Reflections, Healing &amp;&nbsp;Insights
          </h1>
          <div className="journal-hero-rule" aria-hidden="true" />
          <p className="journal-intro">
            A collection of writings exploring healing, self-awareness, personal growth,
            intuition, and conscious living.
          </p>
          <p className="journal-hero-author">
            By <em>Preeti Semwal</em>
          </p>
        </div>
      </section>

      {/* ── EDITORIAL ARTICLE GRID ─────────────── */}
      {blogArticles.length > 0 && (
        <section className="journal-grid-section" aria-label="All articles">
          <div className="journal-editorial-grid">
            {blogArticles.map((article, index) => (
              <article
                key={article.slug}
                className="journal-editorial-card"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="journal-editorial-card-link"
                  aria-label={`Read ${article.title}`}
                >
                  {/* Card Image */}
                  <div className="journal-editorial-card-image-wrap">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={720}
                      height={420}
                      className="journal-editorial-card-image"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="journal-editorial-card-body">
                    <p className="journal-editorial-card-category">
                      {article.category}
                    </p>
                    <h2 className="journal-editorial-card-title">
                      {article.title}
                    </h2>
                    <p className="journal-editorial-card-excerpt">
                      {article.excerpt}
                    </p>
                    <div className="journal-editorial-card-meta">
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── TRANSITION TO NEWSLETTER ─────────── */}
      <div className="journal-newsletter-bridge" aria-hidden="true" />

      <NewsletterSignup />

    </main>
  );
}
