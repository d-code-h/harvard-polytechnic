import React from 'react';
import CustomButton from './CustomButton';
import Post from './Post';
import { PostsData } from '@/lib/data';

const Posts = () => {
  return (
    <div className="max-md:p-5 space-y-12 md:space-y-20 lg:flex-row md:w-11/12 xl:w-10/12 mx-auto py-8 md:py-12">
      <div className="flex flex-wrap max-md:gap-2 items-center justify-between">
        <hgroup className="space-y-6">
          <h6 className="bg-[#E9E2FF] text-primary px-5 py-2 uppercase text-sm w-fit rounded-lg">
            Blog Post
          </h6>
          <h3 className="font-epilogue font-bold text-5xl">
            Most Popular Post.
          </h3>
        </hgroup>
        <CustomButton text="All Blog Post" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {PostsData.map((post) => (
          <Post key={post.src} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
