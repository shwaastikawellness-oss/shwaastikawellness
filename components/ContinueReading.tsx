import Link from "next/link";
import Image from "next/image";
import { getOtherArticles } from "@/data/blogData";

/* ─────────────────────────────────────────────
   CONTINUE READING — Editorial recommendation
   Placed at the end of each blog article to
   guide readers into the next reflection.
───────────────────────────────────────────── */

export default function ContinueReading({ currentSlug }: { currentSlug: string }) {
  const otherArticles = getOtherArticles(currentSlug);

  if (otherArticles.length === 0) return null;

  const nextArticle = otherArticles[0];

  return (
    <section className="blog-continue-reading" aria-label="Continue reading">
      <div className="blog-continue-reading-inner">

        {/* Section heading */}
        <div className="blog-continue-reading-header">
          <p className="blog-continue-reading-label">Continue Reading</p>
          <div className="blog-continue-reading-rule" aria-hidden="true" />
        </div>

        {/* Recommendation card */}
        <article className="blog-continue-reading-card">
          <Link
            href={`/blog/${nextArticle.slug}`}
            className="blog-continue-reading-card-link"
            aria-label={`Read ${nextArticle.title}`}
          >
            {/* Card Image */}
            <div className="blog-continue-reading-card-image-wrap">
              <Image
                src={nextArticle.image}
                alt={nextArticle.title}
                width={720}
                height={420}
                className="blog-continue-reading-card-image"
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>

            {/* Card Body */}
            <div className="blog-continue-reading-card-body">
              <p className="blog-continue-reading-card-category">
                {nextArticle.category}
              </p>
              <h3 className="blog-continue-reading-card-title">
                {nextArticle.title}
              </h3>
              <p className="blog-continue-reading-card-excerpt">
                {nextArticle.excerpt}
              </p>
              <div className="blog-continue-reading-card-footer">
                <span className="blog-continue-reading-card-meta">
                  {nextArticle.readingTime}
                </span>
                <span className="blog-continue-reading-card-cta">
                  Read Article
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </article>

        {/* Subtle return to journal link */}
        <div className="blog-continue-reading-back">
          <Link href="/blog" className="blog-continue-reading-back-link">
            ← Back to Journal
          </Link>
        </div>

      </div>
    </section>
  );
}
