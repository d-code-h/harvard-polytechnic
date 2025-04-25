import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { courseCategories } from '@/lib/data';

const Categories = () => {
  return (
    <div className="mb-12">
      <h2 className="text-dark font-bold text-5xl text-center mt-8 mb-16">
        Browse By Categories
      </h2>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-6 px-2">
        {courseCategories.map((category) => (
          <Button
            key={category.text}
            className={`flex items-center justify-start gap-3 md:gap-5 rounded-xl px-5 py-6 bg-[${category.color}] w-full sm:w-[380px] h-auto`}
            style={{
              backgroundColor: category.color + '30',
            }}
          >
            <div
              className={`p-5 rounded-full border border-[${category.color}]`}
              style={{
                backgroundColor: category.color + '2A',
                border: '2px solid ' + category.color,
              }}
            >
              <Image
                src={category.icon}
                alt={category.text}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <span className="text-dark text-base font-semibold">
              {category.text}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
