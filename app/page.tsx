import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import HomeIntro from "@/components/HomeIntro";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SHWAASTIKA WELLNESS",
    alternateName: "AKR WELLNESS Landing Page",
    description:
      "Professional wellness, leadership, emotional intelligence, safety, and workplace behaviour training programs for individuals and organizations.",
    areaServed: "India",
    serviceType: [
      "Workplace Wellness Training",
      "Leadership Training",
      "Emotional Intelligence Training",
      "Soft Skills Training",
      "Safety Capability Building",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <HomeIntro />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}
