"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const LocationMap = dynamic(() => import("@/components/LocationMap"), {
  ssr: false,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  ssr: false,
});

export default function HomeDeferredSections() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldLoad) {
      return;
    }

    const sentinel = sentinelRef.current;

    if (!sentinel || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      {shouldLoad ? (
        <>
          <Testimonials />
          <LocationMap />
          <FAQ />
        </>
      ) : null}
    </>
  );
}
