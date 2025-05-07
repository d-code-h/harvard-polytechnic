import React from 'react';
import Post from './Post';
import { PostsData } from '@/lib/data';
import Container from './Container';
import SectionHeader from './SectionHeader';

const Posts = () => {
  return (
    <div className="bg-[#E8E8F440]">
      <Container>
        <SectionHeader
          title="Most Popular Post."
          caption="Blog Post"
          btn="All Blog Post"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          {PostsData.slice(0, 3).map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Posts;
