import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const CustomButton = ({ text, styles, arrowStyles }: CustomButtonProps) => {
  return (
    <Button className={'w-auto h-auto px-5 rounded-full ' + styles}>
      <span className="text-base">{text}</span>

      <div
        className={clsx(
          'rounded-full p-5 md:p-4',
          arrowStyles ? arrowStyles : 'bg-primary-light',
        )}
      >
        <ArrowRight />
      </div>
    </Button>
  );
};

export default CustomButton;
