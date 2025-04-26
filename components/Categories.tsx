import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { courseCategories } from '@/lib/data';

const Categories = () => {
  return (
    <div className="mb-8">
      <h2 className="text-dark font-epilogue font-bold text-5xl text-center mt-16 mb-12">
        Browse By Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-14">
        {courseCategories.map((category) => (
          <Button
            key={category.text}
            className={`flex items-center justify-start gap-3 md:gap-5 rounded-xl px-3 py-4 md:px-5 md:py-6 bg-[${category.color}]  h-auto`}
            style={{
              backgroundColor: category.color + '30',
            }}
          >
            <div
              className={`p-3 lg:p-5 rounded-full border border-[${category.color}]`}
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
            <span className="text-dark font-epilogue font-bold text-base lg:text-xl whitespace-break-spaces">
              {category.text}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
