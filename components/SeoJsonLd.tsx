import {
  founderName,
  practiceName,
  siteDescription,
  siteName,
  siteUrl,
} from "@/app/seo";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: founderName,
    url: siteUrl,
    description:
      "Wellness and personal development practitioner offering intuitive healing, inner clarity, womb healing, and corporate wellness workshops.",
    worksFor: {
      "@id": `${siteUrl}/#organization`,
      "@type": "Organization",
      name: practiceName,
    },
    affiliation: {
      "@id": `${siteUrl}/#organization`,
      "@type": "Organization",
      name: practiceName,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: practiceName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: siteDescription,
    founder: {
      "@id": `${siteUrl}/#person`,
      "@type": "Person",
      name: founderName,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
  },
];

export default function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
