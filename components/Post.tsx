import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomButton';

const Post = (post: PostProps) => {
  return (
    <div className="bg-[#EFEFEF] rounded-lg max-md:mx-auto p-7 hover:shadow-lg transition-all duration-100 ease-in-out hover:border-1 border-dark">
      <Image
        src={post.src}
        alt="post"
        width={360}
        height={200}
        className="w-full object-cover rounded-lg"
      />
      <div className="flex flex-wrap items-center gap-6 mt-6">
        <h6 className="flex items-center gap-2">
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={13}
            height={15}
          />
          <span>{post.date}</span>
        </h6>
        <h6 className="flex items-center gap-2">
          <Image src="/icons/chat.svg" alt="chat" width={17} height={15} />

          <span>{post.comments} Comments</span>
        </h6>
      </div>

      <p className="text-dark mt-3.5 mb-5 font-epilogue font-semibold text-lg">
        {post.text}
      </p>
      <div className="flex flex-col gap-5">
        <CustomButton
          styles="bg-[#E9E2FF] text-primary w-fit"
          arrowStyles="bg-[#E3DBFF]"
          text="Read More"
        />
      </div>
    </div>
  );
};

export default Post;
