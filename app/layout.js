import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://khuzemah.growthpulse.space";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khuzemah Saeed — Senior Full Stack Developer (Backend & AI)",
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
    title: "Khuzemah Saeed — Senior Full Stack Developer (Backend & AI)",
    description:
      "6+ years architecting scalable platforms, enterprise integrations (Bitrix24, Property Finder, Cin7), and AI automations. NUST CS graduate.",
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Khuzemah Saeed — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@KhuzemahSaeed",
    title: "Khuzemah Saeed — Senior Full Stack Developer (Backend & AI)",
    description:
      "6+ years architecting scalable platforms, enterprise integrations (Bitrix24, Property Finder, Cin7), and AI automations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khuzemah Saeed",
  jobTitle: "Senior Full Stack & AI Systems Engineer",
  email: "mailto:khuzemasaeed@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
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
  url: siteUrl,
  sameAs: [
    "https://x.com/KhuzemahSaeed",
    "https://github.com/KHUZEMAHSAEED",
    "https://www.linkedin.com/in/khuzemah-saeed/"
  ]
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0E1013" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
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
