import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/site";
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

const siteUrl = SITE_URL;
const DESCRIPTION =
  "Senior Full Stack Developer (Backend & AI) with 6+ years building property portals, CRM integrations, payroll and AI lead automation with Python, Laravel and Next.js. Open to remote senior roles.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khuzemah Saeed — Senior Full Stack Developer (Backend & AI)",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "Khuzemah Saeed",
    "Senior Full Stack Developer",
    "Backend Engineer",
    "AI Engineer",
    "Remote Senior Developer",
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
    description: DESCRIPTION,
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Khuzemah Saeed — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@KhuzemahSaeed",
    title: "Khuzemah Saeed — Senior Full Stack Developer (Backend & AI)",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khuzemah Saeed",
  jobTitle: "Senior Full Stack Developer",
  image: `${siteUrl}/headshot.jpg`,
  worksFor: { "@type": "Organization", name: "Saabsoft" },
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
