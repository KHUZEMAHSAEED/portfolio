import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khuzemah Saeed | Senior Software Engineer | Laravel & Automation Expert",
  description:
    "Senior Software Engineer with 5+ years of experience in Laravel, API Integrations, Automation Systems, Bitrix24, WordPress, Next.js, AWS, and scalable web applications.",

  keywords: [
    "Khuzemah Saeed",
    "Laravel Developer",
    "PHP Developer",
    "Senior Software Engineer",
    "Bitrix24 Developer",
    "WordPress Developer",
    "Next.js Developer",
    "API Integration",
    "Automation Engineer",
    "AWS S3",
    "Lahore Pakistan",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Khuzemah Saeed" }],
  creator: "Khuzemah Saeed",

  openGraph: {
    title: "Khuzemah Saeed | Senior Software Engineer",
    description:
      "Portfolio showcasing Laravel, WordPress, Bitrix24, Automation, API Integrations and Enterprise Solutions.",
    url: "https://khuzemah.growthpulse.space/",
    siteName: "Khuzemah Saeed Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khuzemah Saeed Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Khuzemah Saeed | Senior Software Engineer",
    description:
      "Laravel, WordPress, Bitrix24, API Integrations, Automation & Scalable Web Applications.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://khuzemah.growthpulse.space"),
};