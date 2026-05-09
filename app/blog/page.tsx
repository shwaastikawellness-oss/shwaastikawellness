import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Blog | SHWAASTIKA WELLNESS",
  description: "Future articles and insights from SHWAASTIKA WELLNESS on wellness, leadership, emotional intelligence, and workplace behaviour.",
};

export default function BlogPage() {
  return (
    <PagePlaceholder
      eyebrow="Insights"
      title="Blog"
      intro="Content will be added soon."
      ctaLabel="Book a Session"
    />
  );
}
