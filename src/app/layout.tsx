import Link from 'next/link';
"use client";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter', 
});

const disableHeaderAndFooter = ['/auth/login', '/auth/register', '/auth/forgot-password'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldRenderHeaderAndFooter = !disableHeaderAndFooter.includes(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        {shouldRenderHeaderAndFooter && <Header />}
        <main>{children}</main>
        {shouldRenderHeaderAndFooter && <Footer />}
      </body>
    </html>
  );
}