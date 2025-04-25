import type { Metadata } from 'next';
import { Sora, Epilogue } from 'next/font/google';
import './globals.css';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Harvard Polytechnic',
  description:
    'This is the full school management system for Harvard Polytechnic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${epilogue.variable} antialiased`}>
        <Contact />
        <Header />

        {children}
      </body>
    </html>
  );
}
