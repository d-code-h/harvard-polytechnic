import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import clsx from 'clsx';

const Social = ({ variant }: { variant: 'solid' | 'ghost' }) => {
  return (
    <div
      className={clsx(
        'flex flex-wrap items-center gap-3 sm:gap-5 px-4 py-2 sm:px-9 sm:py-4',

        variant === 'solid' && 'bg-tertiary ',
        variant === 'ghost' &&
          'sm:rounded-full bg-transparent sm:border border-tertiary',
      )}
    >
      {/* <Image src={facebook} alt="Logo" width={28} height={28} /> */}
      <Facebook
        className={clsx(
          variant === 'solid' && 'text-dark',
          variant === 'ghost' && 'text-tertiary',
        )}
      />

      <Instagram
        className={clsx(
          variant === 'solid' && 'text-dark',
          variant === 'ghost' && 'text-tertiary',
        )}
      />
      <Linkedin
        className={clsx(
          variant === 'solid' && 'text-dark',
          variant === 'ghost' && 'text-tertiary',
        )}
      />
      <Youtube
        className={clsx(
          variant === 'solid' && 'text-dark',
          variant === 'ghost' && 'text-tertiary',
        )}
      />
    </div>
  );
};

export default Social;
