import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khuzemah Saeed | Senior Software Engineer',
  description: 'Next.js portfolio for Khuzemah Saeed, Senior Software Engineer specializing in Laravel, API integrations, Bitrix24, automation, and eCommerce systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
