import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
