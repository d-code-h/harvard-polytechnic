'use client';
import React from 'react';
import { Button } from './ui/button';

const IJMBChatButton = ({
  rightSection,
}: {
  rightSection: {
    whatsappLink: string;
    chatButtonText: string;
  };
}) => {
  return (
    <Button
      className="text-center text-lg py-6 my-3 w-full"
      onClick={() => window.open(rightSection.whatsappLink, '_blank')}
    >
      {rightSection.chatButtonText}
    </Button>
  );
};

export default IJMBChatButton;
