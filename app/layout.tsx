import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Rizo — Frontend Developer',
  description:
    'Frontend developer crafting premium, cinematic digital experiences. Designing interfaces that feel like the future.',
  openGraph: {
    title: 'Muhammad Rizo — Frontend Developer',
    description:
      'Frontend developer crafting premium, cinematic digital experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Rizo — Frontend Developer',
    description:
      'Frontend developer crafting premium, cinematic digital experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
