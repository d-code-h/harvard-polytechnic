import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Hero from '@/components/global/Hero';
import Post from '@/components/Post';
import { PostsData } from '@/lib/data';
import React from 'react';

const News = () => {
  return (
    <main>
      <Hero title="News & Events" />
      <div className="bg-[#E8E8F440]">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            {PostsData.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default News;
