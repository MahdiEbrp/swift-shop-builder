import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';

const inter = Vazirmatn({ subsets: ['arabic','latin'] });

export const metadata: Metadata = {
  title: 'فروشگاه لباس دنیا',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
