import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Preeti Semwal",
  description:
    "Upcoming articles from Preeti Semwal on healing, emotional balance, inner clarity, prenatal support, and workplace well-being.",
  path: "/blog",
  noIndex: true,
});

export default function BlogPage() {
  return (
    <PagePlaceholder
      eyebrow="Insights"
      title="Blog"
      intro="Articles are being prepared and reviewed before publication."
      ctaLabel="Book a Session"
    />
  );
}
