'use client';

import { persianLanguage } from '@/data/persian';
import './globals.css';
import { Vazirmatn } from 'next/font/google';
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
const inter = Vazirmatn({ subsets: ['arabic', 'latin'] });
import 'preline';

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) {
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
        {children}
      </body>
    </html>
  );
}
