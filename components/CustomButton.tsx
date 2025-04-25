import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CustomButton = ({ text }: { text: string }) => {
  return (
    <Button className="w-auto h-auto px-5 rounded-full">
      <span className="text-base">{text}</span>

      <div className="rounded-full bg-primary-light p-5">
        <ArrowRight />
      </div>
    </Button>
  );
};

export default CustomButton;
