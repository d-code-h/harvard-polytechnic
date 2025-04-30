'use client';
import React from 'react';
import { Button } from './ui/button';

const IJMBChatButton = ({ text }: { text: string }) => {
  return (
    <Button
      className="text-center text-lg py-6 my-3 w-full"
      onClick={() =>
        window.open(
          'https://wa.me/2347047730748?text=Hello, I am interested in applying for the IJMB program at Harvard Polytechnic.',
          '_blank',
        )
      }
    >
      {text}
    </Button>
  );
};

export default IJMBChatButton;
