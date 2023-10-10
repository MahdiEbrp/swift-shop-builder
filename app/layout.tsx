'use client';
import { persianLanguage } from '@/data/persian';
import './globals.css';
import { Vazirmatn } from 'next/font/google';
import React, { useEffect } from 'react';
import Navbar from '@/components/navbar/Navbar';
const inter = Vazirmatn({ subsets: ['arabic', 'latin'] });

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('preline');
  }, []);
  return (
    <html lang='fa'>
      <head>
        <title>{persianLanguage.storeName}</title>
        <meta name='description' content='Description' />
      </head>
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
