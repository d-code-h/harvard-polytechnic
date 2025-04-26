import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import clsx from 'clsx';

const Social = ({ variant }: { variant: 'solid' | 'ghost' }) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-5 px-9 py-4',

        variant === 'solid' && 'bg-tertiary ',
        variant === 'ghost' &&
          'rounded-full bg-transparent border border-tertiary',
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
