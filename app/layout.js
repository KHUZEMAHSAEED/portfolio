import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    "Senior Full Stack & AI Systems Engineer with 6+ years specializing in Laravel, Python, Next.js, enterprise CRM integrations, and AI workflow automation across UAE real estate, e-commerce, and HRM.",
  keywords: [
    "Khuzemah Saeed",
    "Senior Full Stack Developer",
    "AI Systems Engineer",
    "Laravel Developer",
    "Python Developer",
    "Next.js Developer",
    "Bitrix24 Integration",
    "UAE Real Estate Developer",
    "Property Finder API",
    "Bayut API"
  ],
  authors: [{ name: "Khuzemah Saeed" }],
  openGraph: {
    title: "Khuzemah Saeed — Senior Full Stack & AI Systems Engineer",
    description:
      "6+ years architecting scalable platforms, enterprise integrations (Bitrix24, Property Finder, Cin7), and AI automations. NUST CS graduate.",
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Khuzemah Saeed Portfolio",
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
    "PHP",
    "Laravel",
    "Python",
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
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable}`}>
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
