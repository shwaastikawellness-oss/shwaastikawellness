import type { Metadata } from "next";
import Link from "next/link";
import ContinueReading from "@/components/ContinueReading";
import NewsletterSignup from "@/components/NewsletterSignup";
import ReadingProgress from "@/components/ReadingProgress";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Yog: The Ultimate Guide to Knowing Yourself",
  description:
    "Yog is the philosophy of being — the ultimate guide to knowing yourself. Explore the eight limbs of Yog, the journey to Samadhi, and how self-awareness transforms every relationship — by Preeti Semwal.",
  path: "/blog/yog-the-ultimate-guide",
});

/* ─────────────────────────────────────────────
   EDITORIAL BLOCK COMPONENTS
───────────────────────────────────────────── */

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="blog-pull-quote" role="note">
      <p>{children}</p>
    </blockquote>
  );
}

function ReflectionBlock({ children, label = "Reflection" }: { children: React.ReactNode; label?: string }) {
  return (
    <aside className="blog-reflection" aria-label={label}>
      <span className="blog-block-label">{label}</span>
      <div>{children}</div>
    </aside>
  );
}

function KeyInsight({ children }: { children: React.ReactNode }) {
  return (
    <aside className="blog-key-insight" aria-label="Key Insight">
      <p className="blog-insight-text">{children}</p>
    </aside>
  );
}

function JournalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <aside className="blog-journal-prompt" aria-label="Journal Prompt">
      <span className="blog-block-label">Journal Prompt</span>
      <p className="blog-journal-text">{children}</p>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────── */

const tocItems = [
  { id: "toc-philosophy", label: "The Philosophy of Being" },
  { id: "toc-ashtanga", label: "The Eight Limbs" },
  { id: "toc-roots", label: "Roots & Inheritance" },
  { id: "toc-inner-reflection", label: "Inner Reflection" },
  { id: "toc-samadhi", label: "The State of Samadhi" },
  { id: "toc-knowing", label: "Do I Know Myself?" },
  { id: "toc-understanding", label: "Understanding Others" },
  { id: "toc-wholeness", label: "Embracing Wholeness" },
  { id: "toc-call", label: "A Call to Practice" },
];

function TableOfContents() {
  return (
    <nav aria-label="Table of contents" className="blog-toc">
      <p className="blog-toc-label">In This Article</p>
      <ol className="blog-toc-list">
        {tocItems.map((item, i) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="blog-toc-link">
              <span className="blog-toc-num">{String(i + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function YogArticlePage() {
  return (
    <>
      <ReadingProgress />

      <main className="bg-[#fffdf8]">

        {/* ── BREADCRUMB ─────────────────────── */}
        <nav className="blog-breadcrumb-bar" aria-label="Breadcrumb">
          <div className="blog-breadcrumb-inner">
            <Link href="/blog" className="blog-breadcrumb-link">
              Journal
            </Link>
            <span className="blog-breadcrumb-sep" aria-hidden="true">/</span>
            <span className="blog-breadcrumb-current">Yog</span>
          </div>
        </nav>

        {/* ── HERO HEADER ───────────────────────── */}
        <header className="blog-header">
          <div className="blog-header-inner">
            <p className="blog-eyebrow">
              <span>Yog &amp; Philosophy</span>
            </p>

            <h1 className="blog-title">
              Yog: The Ultimate Guide to Knowing Yourself
            </h1>

            <div className="blog-header-rule" aria-hidden="true" />

            <p className="blog-subtitle">
              Yog is the philosophy of being. It is my introduction to my own self.
              Understanding the eight limbs of Yog and how they lead us to Samadhi —
              the union with yourself, the ultimate truth.
            </p>

            <div className="blog-author">
              <span className="blog-author-byline">
                By <em>Preeti Semwal</em>
              </span>
            </div>
          </div>
        </header>

        {/* ── ARTICLE LAYOUT ────────────────────── */}
        <div className="blog-layout">

          <aside className="blog-toc-sidebar" aria-label="Article navigation">
            <TableOfContents />
          </aside>

          <article className="blog-article" id="article-content">

            {/* ── The Philosophy of Being ── */}
            <p className="blog-lede" id="toc-philosophy">
              Yog is the philosophy of being. Yog is who I am in my purest, simplest form.
              Yog is my introduction to my own self. Asanas are a subset of the whole of Yog.
            </p>

            {/* ── The Eight Limbs ── */}
            <section className="blog-section-block" aria-labelledby="toc-ashtanga">
              <h2 className="blog-section-heading" id="toc-ashtanga">
                The Eight Limbs — Ashtanga
              </h2>
              <p className="blog-section-intro">
                There are a total of eight parts (Ashtanga) that, when combined and followed
                together, are said to be Yog, and the one who follows them is called a Yogi.
              </p>

              <div className="blog-layers">
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">01</span>
                  <p><strong>Yama</strong> — Ethical restraints</p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">02</span>
                  <p><strong>Niyama</strong> — Personal observances</p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">03</span>
                  <p><strong>Asana</strong> — Physical postures</p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">04</span>
                  <p><strong>Pranayama</strong> — Breath control</p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">05</span>
                  <p><strong>Pratyahara</strong> — Withdrawal of the senses</p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">06</span>
                  <p><strong>Dharana</strong> — Concentration</p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">07</span>
                  <p><strong>Dhyana</strong> — Meditation</p>
                </div>
                <div className="blog-layer">
                  <span className="blog-layer-num" aria-hidden="true">08</span>
                  <p><strong>Samadhi</strong> — Absorption / Enlightenment</p>
                </div>
              </div>

              <p>
                I am not going to dwell on these individually in detail. Great rishis, saints,
                and scholars have passed on that knowledge to us in the form of their wonderful
                scriptures and writings. Understanding and absorbing that knowledge in itself
                can take a lifetime or more.
              </p>
            </section>

            {/* ── Roots & Inheritance ── */}
            <section className="blog-section-block" aria-labelledby="toc-roots">
              <h2 className="blog-section-heading" id="toc-roots">
                Roots &amp; Inheritance
              </h2>

              <p>
                I have been fortunate to be born into a family of knowledge and traditions where
                some practices ran in the genes and some as a lifestyle. That is how I know Yog.
                My mother, who is a personification of Bhakti Yog, and my father, a Karm Yogi.
                They did not choose these individual paths of Yog consciously, but these were
                the most natural to them.
              </p>

              <ReflectionBlock label="Honouring My Being">
                <p>
                  On this day today, I want to honour every part of me as a being. My existence
                  is an extension of my family, the roots of which I do not even know beyond my
                  great-grandparents. So is my existence at the level of my energetic being, a
                  part of each one of you with whom I have been connected briefly or over the
                  years. In happiness, sadness, anger, grief, urges, jealousy, or peace, I have
                  exchanged parts with each one of those people. Those parts, I carry within me.
                  I am all of those exchanges today.
                </p>
              </ReflectionBlock>
            </section>

            {/* ── Inner Reflection ── */}
            <section className="blog-section-block blog-section-cream" aria-labelledby="toc-inner-reflection">
              <h2 className="blog-section-heading" id="toc-inner-reflection">
                The Journey Inward
              </h2>

              <p>
                If I am not at peace, I need to reflect inwards to see what I carry within.
                The answers are not outside. No one has the answers for me but me.
              </p>

              <PullQuote>
                Bliss is the state of Samadhi. The union with yourself is the ultimate truth.
                When I can see and embrace myself, I am in Samadhi, I am non-existent, and
                I am Shunya.
              </PullQuote>
            </section>

            {/* ── The State of Samadhi ── */}
            <section className="blog-section-block" aria-labelledby="toc-samadhi">
              <h2 className="blog-section-heading" id="toc-samadhi">
                The Sound of Shunya
              </h2>

              <p>
                How to experience this ultimate state of existence is Yog.
              </p>

              <p>
                There is so much chatter all around us, day in and day out, that hearing this
                sound of Shunya is impossible till the time we know how to quieten all the
                sounds around us. This is what Yog teaches us. The ultimate guide to know
                yourself is Yog.
              </p>

              <KeyInsight>
                The ultimate guide to know yourself is Yog. It teaches us how to quieten all
                the sounds around us so we may finally hear the sound of Shunya.
              </KeyInsight>
            </section>

            {/* ── Do I Know Myself? ── */}
            <section className="blog-section-block blog-section-cream" aria-labelledby="toc-knowing">
              <h2 className="blog-section-heading" id="toc-knowing">
                I Know Myself — Or Do I?
              </h2>

              <p>
                I know myself!! Sure, we all think that. It&apos;s a good thought too. However,
                I want to share one of my innumerable interesting experiences in life.
              </p>

              <ReflectionBlock label="A Moment of Realisation">
                <p>
                  On the hospital bed, waiting for the doctor to take me to the labour room for
                  the delivery of my firstborn, one of my seniors from the Air Force came to see
                  me. She was a mother of one.
                </p>
                <p>
                  She held my hand and asked, &ldquo;Have the labour pains started?&rdquo; and
                  I said yes.
                </p>
                <p>
                  She looked at me for a couple of seconds and said, &ldquo;No, they
                  haven&apos;t.&rdquo;
                </p>
                <p>
                  I was very upset with her and thought she was insensitive. That thought stayed
                  with me for the next few minutes, and then the labour pains started. That was
                  my moment of realisation. Till this time, what I considered to be the real pain
                  was not even 0.1% of what happened to me on the labour table.
                </p>
              </ReflectionBlock>

              <p>
                So yes, till the time I don&apos;t have a reference, how do I know what is being
                said? Until I have started quietening myself by withdrawing all my senses, how
                do I know what &lsquo;quiet&rsquo; is? I need to truly know the other person;
                I need to know myself.
              </p>

              <JournalPrompt>
                Till the time I do not know myself, I cannot feel unhappy about others not
                getting me. Why should anyone else bear the responsibility of understanding me
                till the time I haven&apos;t bothered to know myself?
              </JournalPrompt>
            </section>

            {/* ── Understanding Others ── */}
            <section className="blog-section-block" aria-labelledby="toc-understanding">
              <h2 className="blog-section-heading" id="toc-understanding">
                The Power of Understanding Others
              </h2>

              <ReflectionBlock label="A Conversation">
                <p>
                  I had someone saying this to me: &ldquo;Why should I bother about my
                  employee&apos;s personal issues? My relationship with them is professional.
                  They should deal with their issues on their own and not bring it to
                  work.&rdquo;
                </p>
              </ReflectionBlock>

              <p>
                It is a thought from the perspective of an employer who is paying money for work.
                It comes from a limitation of short-sightedness. But not from a person who has
                foresight and a deeper understanding of human behaviour. Not from a person who
                can understand the power of collective force. Not from a person who wants to
                walk tirelessly towards the goal of life, whatever it may be to that person.
              </p>

              <PullQuote>
                When we know ourselves, we also understand how important it is to know everyone
                around us — where they are coming from in their disinterest, withdrawal, silence,
                or anger.
              </PullQuote>
            </section>

            {/* ── Embracing Wholeness ── */}
            <section className="blog-section-block blog-section-cream" aria-labelledby="toc-wholeness">
              <h2 className="blog-section-heading" id="toc-wholeness">
                Beyond Roles — Embracing Wholeness
              </h2>

              <p>
                We cannot be divided into personal and professional beings at the level of
                existence. We are one whole. When I identify people only by the role they are
                playing in my life at a particular point in time, I risk missing who they truly
                are. My mother is my mother, but at a deeper level of existence, she is a human
                being with her own likes, dislikes, dreams, fears, opinions, experiences, and
                journey.
              </p>

              <p>
                If we care to know people beyond the roles they play in our lives, we begin to
                know them more completely. Our understanding becomes deeper, our relationships
                become more meaningful, and our interactions become more honest. It is in that
                space that relationships — be they personal or professional — become real.
              </p>

              <KeyInsight>
                As a successful person in life, you must be beyond feverishness — the
                feverishness of doubt towards the people you live or work with. You have to
                have an expanse in your heart to embrace one and all.
              </KeyInsight>

              <p>
                To embrace, you need warmth, and warmth comes from within. To feel the warmth,
                you need to make peace with every part of yourself. Peace comes from embracing
                yourself. To embrace yourself, you need to know yourself. To know yourself, you
                should have the right tool. That tool is Yog.
              </p>

              <PullQuote>
                Yog is not the buzzword. Yog is THE WORD. Faded over a period, but now
                thankfully catching attention.
              </PullQuote>
            </section>

            {/* ── A Call to Practice ── */}
            <section className="blog-section-block" aria-labelledby="toc-call">
              <h2 className="blog-section-heading" id="toc-call">
                A Call to Practice
              </h2>

              <p>
                To celebrate International Day of Yoga, let us become curious to know more about
                Yog. Let us try to bring Yog into our lives consciously. If you haven&apos;t
                till date brought the practice into your life, or maybe not moved beyond asanas
                to merely lose weight, then today is the day to become curious, to know more.
                Use Yog to unleash your full potential.
              </p>

              <p>
                Become curious to know who you are, who the people in your life are, and move
                towards unravelling the mysteries of your successes and failures.
              </p>

              <p>
                Let us today take a step towards becoming a responsible parent, spouse, partner,
                child, sibling, friend, colleague, employer, or employee. We can make this world
                a better and a happier experience for all, including ourselves.
              </p>

              <PullQuote>
                Let&apos;s do this.
              </PullQuote>
            </section>

          </article>
        </div>

        <ContinueReading currentSlug="yog-the-ultimate-guide" />

        <NewsletterSignup />

      </main>
    </>
  );
}
