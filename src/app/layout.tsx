import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vote for MERA25',
  description:
    'Frame your profile with "I Vote for MERA25". Let your profile picture show your support for MERA25.',
  metadataBase: new URL('https://ppm.techforpalestine.org'),
  openGraph: {
    title: 'Vote for MERA25',
    description: 'Create your MERA25 profile picture to show your support',
    siteName: 'Vote for MERA25',
    images: '/vote-for-mera.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
