import type { Metadata } from "next";

export const siteUrl = "https://www.preetisemwal.in";
export const founderName = "Preeti Semwal";
export const practiceName = "Shwaastika Wellness";
export const siteName = "Preeti Semwal | Shwaastika Wellness";
export const siteDescription =
  "Preeti Semwal offers intuitive healing, inner clarity sessions, womb healing, prenatal support, and corporate wellness workshops through Shwaastika Wellness.";
export const socialDescription =
  "Wellness and personal development guidance through intuitive healing, inner clarity, womb healing, and corporate wellness workshops.";

const defaultImage = {
  url: "/images/Home.jpg",
  width: 1600,
  height: 1071,
  alt: "Preeti Semwal at Shwaastika Wellness",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: typeof defaultImage;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  noIndex = false,
}: PageMetadataInput): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "en_IN",
      siteName,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
    robots: {
      index: !noIndex,
      follow: true,
    },
  };
}
