import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const categories = [
  {
    icon: '/icons/categories/category-1.svg',
    text: 'Business Management',
    color: '#1B75E8',
  },
  {
    icon: '/icons/categories/category-2.svg',
    text: 'Arts & Design',
    color: '#FF6881',
  },
  {
    icon: '/icons/categories/category-3.svg',
    text: 'Personal Development',
    color: '#00BC65',
  },
  {
    icon: '/icons/categories/category-4.svg',
    text: 'UI/UX Design',
    color: '#F2A700',
  },
  {
    icon: '/icons/categories/category-5.svg',
    text: 'Graphic Design',
    color: '#4500D0',
  },
  {
    icon: '/icons/categories/category-6.svg',
    text: 'Digital Marketing',
    color: '#BB0064',
  },
  {
    icon: '/icons/categories/category-7.svg',
    text: 'Exclusive man',
    color: '#0011BB',
  },
  {
    icon: '/icons/categories/category-8.svg',
    text: 'Product Design',
    color: '#D16900',
  },
  {
    icon: '/icons/categories/category-9.svg',
    text: 'Video & Photgraphy',
    color: '#00A9ED',
  },
];

const Categories = () => {
  return (
    <div className="mb-12">
      <h2 className="text-background-dark font-bold text-5xl text-center mt-8 mb-16">
        Browse By Categories
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {categories.map((category) => (
          <Button
            key={category.text}
            className={`flex items-center justify-start gap-5 rounded-xl px-5 py-6 bg-[${category.color}] w-[380px] h-auto`}
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
              />
            </div>
            <span className="text-background-dark">{category.text}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
