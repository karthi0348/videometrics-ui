import Link from 'next/link';

import './globals.css';
import Header from '@/app/components/Header';

import Footer from '@/app/components/Footer';


export const metadata = {
  title: 'VideoMetrics.ai',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}