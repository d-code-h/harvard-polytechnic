import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Hero from '@/components/global/Hero';
import Image from 'next/image';
import React from 'react';
// import ChatButton from '@/components/ChatButton';
import { PostsData } from '@/lib/data';
import { redirect } from 'next/navigation';

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const newsId = (await params).newsId;
  console.log('News Id', newsId);
  const post = PostsData.find((post) => post.id === Number(newsId));

  if (post === undefined) {
    redirect('/news');
  }

  return (
    <div>
      <Hero title="News Details" />

      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Left Section */}
          <div className="flex-1">
            <Image
              src={post.src[0]}
              alt={post.title}
              width={1000}
              height={600}
              className="mx-auto w-full object-cover h-[250px] md:h-[500px] object-center"
            />

            <h2 className="font-epilogue font-bold text-3xl md:text-[45px] my-5 text-dark">
              {post.title}
            </h2>

            <div className="py-3">
              <section>
                <h4 className="uppercase my-3 font-epilogue font-bold text-xl text-dark">
                  Post Details
                </h4>

                {/* <div className="space-y-3">
                  {leftSection.programDescription.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base text-dark tracking-wide"
                    >
                      {paragraph}
                    </p>
                  ))}
                  chatButtonText
                </div> */}
              </section>

              {/* <section>
                <h4 className="uppercase my-3 font-epilogue font-bold text-xl text-dark">
                  What Will You Gain?
                </h4>

                <ul className="list-disc ml-5 mt-3">
                  {leftSection.whatYouGain.map((item, index) => (
                    <li
                      key={index}
                      className="text-base text-dark tracking-wide"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section> */}
            </div>
          </div>

          {/* Right Section */}
          <div className="px-5 py-6 bg-white w-full lg:w-[350px] h-fit">
            <div className="md:flex lg:block gap-6 items-center">
              <div>
                <h4 className="font-epilogue font-bold text-2xl text-dark my-4">
                  Related Posts
                </h4>

                {/* <ChatButton rightSection={rightSection} /> */}
              </div>
            </div>

            <ul className="space-y-5 mt-6">
              {PostsData.filter(
                (filteredPost) => filteredPost.category === post.category,
              ).map((relatedPost, index) => (
                <li
                  key={index}
                  className="flex flex-wrap gap-4 text-base text-dark border-b-2 border-gray-100 pb-6"
                >
                  <Image
                    src={relatedPost.src[0]}
                    alt={relatedPost.title}
                    width={200}
                    height={200}
                    className="object-cover w-20"
                  />
                  <div className="flex flex-col justify-between">
                    <h5 className="flex items-center gap-2">
                      <Image
                        src="/icons/calendar.svg"
                        alt="calendar"
                        width={13}
                        height={15}
                      />
                      <span>{relatedPost.date}</span>
                    </h5>
                    <p className="text-base">
                      {relatedPost.text.slice(0, 35)}...
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default NewsDetails;
