import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Modal from '@/components/Modal';

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
    <div>
      <Modal />
      <Contact />
      <Header />

      {children}
    </div>
  );
}
