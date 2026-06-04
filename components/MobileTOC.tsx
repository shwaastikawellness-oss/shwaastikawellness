"use client";

import { useState } from "react";

const tocItems = [
  { id: "toc-perception", label: "The Perception of Safety" },
  { id: "toc-answer", label: "What Is the Answer?" },
  { id: "toc-how-to-stay-safe", label: "How to Stay Safe" },
  { id: "toc-closing", label: "Integration & Capacity" },
];

export default function MobileTOC() {
  const [open, setOpen] = useState(false);

  return (
    <div className="blog-toc-mobile-wrap">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-toc-list"
        className="blog-toc-mobile-toggle"
      >
        <span className="blog-toc-label" style={{ marginBottom: 0 }}>
          In This Article
        </span>
        <span
          aria-hidden="true"
          className="blog-toc-chevron"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▾
        </span>
      </button>

      {open && (
        <nav id="mobile-toc-list" aria-label="Table of contents" className="blog-toc-mobile-list">
          <ol className="blog-toc-list">
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="blog-toc-link"
                  onClick={() => setOpen(false)}
                >
                  <span className="blog-toc-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </div>
  );
}
