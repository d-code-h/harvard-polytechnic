import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Hero from '@/components/global/Hero';
import Image from 'next/image';
import React from 'react';
import { ndData } from '@/lib/data';
import ChatButton from '@/components/ChatButton';

const NationalDiploma = () => {
  const { heroTitle, leftSection, rightSection } = ndData;

  return (
    <div>
      <Hero title={heroTitle} />

      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* Left Section */}
          <div className="flex-1">
            <Image
              src={leftSection.image.src}
              alt={leftSection.image.alt}
              width={1000}
              height={600}
              className="mx-auto w-full object-cover h-[250px] md:h-[500px] object-center"
            />

            <h2 className="font-epilogue font-bold text-3xl md:text-[45px] my-5 text-dark">
              {leftSection.heading}
            </h2>

            <div className="py-3">
              <section>
                <h4 className="uppercase my-3 font-epilogue font-bold text-xl text-dark">
                  Program Description
                </h4>

                <div className="space-y-3">
                  {leftSection.programDescription.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base text-dark tracking-wide"
                    >
                      {paragraph}
                    </p>
                  ))}
                  chatButtonText
                </div>
              </section>

              <section>
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
              </section>
            </div>
          </div>

          {/* Right Section */}
          <div className="px-5 py-6 bg-[#E8E8F4] w-full lg:w-[350px] h-fit">
            <div className="md:flex lg:block gap-6 items-center">
              <Image
                src={rightSection.image.src}
                alt={rightSection.image.alt}
                width={400}
                height={300}
                className="w-full md:w-[300px] h-[200px] object-cover object-bottom"
              />

              <div>
                <h4 className="font-epilogue font-bold text-xl text-dark my-4 text-center">
                  {rightSection.heading}
                </h4>

                <ChatButton rightSection={rightSection} />
              </div>
            </div>

            <ul className="space-y-5 mt-6">
              {rightSection.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-base text-dark"
                >
                  <span>{detail.title}</span>
                  <span>{detail.value}</span>
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

export default NationalDiploma;
