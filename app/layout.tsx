import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khuzemah.growthpulse.space"),
  title: {
    default: "Khuzemah Saeed | Senior Software Engineer",
    template: "%s | Khuzemah Saeed",
  },
  description:
    "Senior Software Engineer specializing in Laravel, PHP, WordPress, Next.js, Bitrix24 integrations, API automation, and scalable web applications.",
  keywords: [
    "Khuzemah Saeed",
    "Senior Software Engineer",
    "Laravel Developer",
    "PHP Developer",
    "WordPress Developer",
    "Next.js Developer",
    "Bitrix24 Developer",
    "API Integration",
    "Automation Engineer",
    "Pakistan Developer",
  ],
  authors: [{ name: "Khuzemah Saeed" }],
  creator: "Khuzemah Saeed",
  openGraph: {
    title: "Khuzemah Saeed | Senior Software Engineer",
    description:
      "Portfolio of Khuzemah Saeed, Senior Software Engineer specializing in Laravel, WordPress, Bitrix24, APIs and automation.",
    url: "https://khuzemah.growthpulse.space",
    siteName: "Khuzemah Saeed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khuzemah Saeed | Senior Software Engineer",
    description:
      "Laravel, WordPress, Bitrix24, API integrations, automation and scalable web applications.",
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
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}