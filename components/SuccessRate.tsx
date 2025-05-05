import Image from 'next/image';
import React from 'react';

const ratings = [
  {
    src: '/icons/ratings/trained.svg',
    title: '3K+',
    caption: 'Successfully Trained',
  },
  {
    src: '/icons/ratings/classes.svg',
    title: '15K+',
    caption: 'Classes Completed',
  },
  {
    src: '/icons/ratings/satisfaction.svg',
    title: '97K+',
    caption: 'Satisfaction Rate',
  },
  {
    src: '/icons/ratings/community.svg',
    title: '102K+',
    caption: 'Students Community',
  },
];
const SuccessRate = () => {
  return (
    <div className="rounded-[200px] max-lg:hidden bg-[#E3DBFF] px-6 xl:px-16 py-14 flex items-center gap-7 w-fit mx-auto absolute -bottom-20 left-1/2 -translate-x-1/2">
      {ratings.map((rating) => (
        <div key={rating.caption} className="flex items-center gap-1">
          <div className="bg-white flex justify-between items-center rounded-full w-12 h-12 p-2">
            <Image src={rating.src} alt={rating.title} width={38} height={38} />
          </div>
          <div className="text-dark">
            <h3 className="text-4xl font-epilogue font-bold">{rating.title}</h3>
            <p className="text-base whitespace-nowrap">{rating.caption}</p>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default SuccessRate;
