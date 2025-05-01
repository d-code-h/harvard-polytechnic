import type { Metadata } from 'next';
import { Sora, Epilogue, Poppins } from 'next/font/google';
import './globals.css';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Modal from '@/components/Modal';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
      <body
        className={`${sora.className} ${epilogue.variable} ${poppins.variable} antialiased`}
      >
        <Modal />
        <Contact />
        <Header />

        {children}
      </body>
    </html>
  );
}
