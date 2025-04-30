import React from 'react';
import CustomButton from './CustomButton';
import Post from './Post';
import { PostsData } from '@/lib/data';
import Container from './Container';
import SectionHeader from './SectionHeader';

const Posts = () => {
  return (
    <Container>
      <SectionHeader
        title="Most Popular Post."
        caption="Blog Post"
        btn="All Blog Post"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {PostsData.map((post) => (
          <Post key={post.src} {...post} />
        ))}
      </div>
    </Container>
  );
};

export default Posts;
