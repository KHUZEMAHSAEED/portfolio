import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://khuzemahsaeed.vercel.app");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khuzemah Saeed — Senior Full Stack & AI Systems Engineer",
  description:
    "Senior Full Stack & AI Systems Engineer with 6+ years specializing in Python, Laravel, Next.js, enterprise CRM integrations, and AI workflow automation across UAE real estate, e-commerce, and HRM.",
  keywords: [
    "Khuzemah Saeed",
    "Senior Full Stack Developer",
    "AI Systems Engineer",
    "Python Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Bitrix24 Integration",
    "UAE Real Estate Developer",
    "Property Finder API",
    "Bayut API",
    "Cin7 ERP",
    "Enterprise Automation"
  ],
  authors: [{ name: "Khuzemah Saeed" }],
  openGraph: {
    title: "Khuzemah Saeed — Senior Full Stack & AI Systems Engineer",
    description:
      "6+ years architecting scalable platforms, enterprise integrations (Bitrix24, Property Finder, Cin7), and AI automations. NUST CS graduate.",
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Khuzemah Saeed — Cinematic Engineering Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khuzemah Saeed — Senior Full Stack & AI Systems Engineer",
    description:
      "6+ years architecting scalable platforms, enterprise integrations (Bitrix24, Property Finder, Cin7), and AI automations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khuzemah Saeed",
  jobTitle: "Senior Full Stack & AI Systems Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "National University of Sciences and Technology (NUST)",
  },
  knowsAbout: [
    "Python",
    "Django",
    "Laravel",
    "PHP",
    "Next.js",
    "React",
    "REST APIs",
    "AI Lead Chatbots",
    "LLM Integrations",
    "Bitrix24 CRM",
    "System Integration",
    "UAE Real Estate Platforms"
  ],
  url: "https://github.com/KHUZEMAHSAEED",
  sameAs: [
    "https://github.com/KHUZEMAHSAEED",
    "https://www.linkedin.com/in/khuzemah-saeed/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
