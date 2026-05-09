import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "SHWAASTIKA WELLNESS | Workplace Wellness, Leadership & Emotional Intelligence Training",
  description:
    "Professional wellness, leadership, emotional intelligence, safety, and workplace behaviour training programs for individuals and organizations.",
  keywords: [
    "SHWAASTIKA WELLNESS",
    "workplace wellness",
    "leadership training",
    "emotional intelligence training",
    "corporate wellness programs",
    "workplace behaviour training",
    "soft skills training",
  ],
  openGraph: {
    title:
      "SHWAASTIKA WELLNESS | Workplace Wellness, Leadership & Emotional Intelligence Training",
    description:
      "Professional wellness, leadership, emotional intelligence, safety, and workplace behaviour training programs for individuals and organizations.",
    type: "website",
    locale: "en_IN",
    siteName: "SHWAASTIKA WELLNESS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#fbf8f1] text-[#2f2822]">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
