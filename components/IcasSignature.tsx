"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function IcasHeroSeal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Hero is always above the fold. Delay slightly so the
    // animation is perceptible as an editorial reveal.
    const t = setTimeout(() => setVisible(true), 180);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="icas-hero-seal"
      data-visible={visible}
      aria-label="Professional affiliation: Life Member, Indian Council of Astrological Sciences"
    >
      {/* Official ICAS emblem — no wrapper, no border, no background */}
      <div className="icas-hero-emblem">
        <Image
          src="/images/icas-logo.png"
          alt="Indian Council of Astrological Sciences emblem"
          width={110}
          height={110}
          priority
          className="icas-hero-img"
        />
      </div>

      {/* Three-tier text hierarchy */}
      <div className="icas-hero-text">
        {/* Eyebrow — matches existing section label styling */}
        <span className="icas-hero-eyebrow">Professional Affiliation</span>

        {/* Primary credential */}
        <span className="icas-hero-membership">Life Member</span>

        {/* Secondary — quieter, muted */}
        <span className="icas-hero-org">
          Indian Council of Astrological Sciences
        </span>

        {/* Editorial punctuation rule — last to appear */}
        <span className="icas-hero-rule" aria-hidden="true" />
      </div>
    </div>
  );
}
