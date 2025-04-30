import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Hero from '@/components/global/Hero';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const ijmbDetails = [
  {
    title: 'Enrolled',
    value: '100',
  },
  {
    title: 'Lectures',
    value: '80',
  },
  {
    title: 'Language',
    value: 'English',
  },
  {
    title: 'Start Date',
    value: 'May 2, 2025',
  },
  {
    title: 'Duration',
    value: '6 months',
  },
];

const IJMB = () => {
  return (
    <div>
      <Hero title="IJMB" />

      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="flex-1">
            <Image
              src="/images/ijmb.png"
              alt="About IJMB"
              width={900}
              height={500}
              className="mx-auto w-full object-cover h-[500px] object-top"
            />

            <h2 className="font-epilogue font-bold text-3xl md:text-[45px] my-5 text-dark">
              Web Development Fully Complete Guideline
            </h2>

            <div className="space-x-3">
              <Button>Overview</Button>
              <Button variant="secondary">Curriculum</Button>
              <Button variant="secondary">Instructor</Button>
              <Button variant="secondary">Review</Button>
            </div>

            <div className="space-y-8 mt-12">
              <section>
                <h4 className="uppercase my-3 font-epilogue font-bold text-xl text-dark">
                  Course Description
                </h4>

                <div className="space-y-3">
                  <p className="text-base text-dark tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim..
                  </p>

                  <p className="text-base text-dark tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum..
                  </p>
                </div>
              </section>

              <section>
                <h4 className="uppercase my-3 font-epilogue font-bold text-xl text-dark">
                  What Will I Learn From This Course?
                </h4>

                <p className="text-base text-dark tracking-wide">
                  Himenaeos. Vestibulum sollicitudin varius mauris non
                  dignissim. Sed quis iaculis est. Nulla quam neque, interdum
                  vitae fermentum lacinia, interdum eu magna. Mauris non posuere
                  tellus. Donec quis euismod tellus. Nam vel lacus eu nisl
                  bibendum accumsan vitae vitae nibh. Nam nec eros id magna
                  hendrerit sagittis Nullam sed mi non odio feugiat volutpat sit
                  amet nec elit. Maecenas id hendrerit ipsum
                </p>
              </section>
            </div>
          </div>

          <div className="px-5 py-6 bg-[#E8E8F4] w-full lg:w-[350px] h-fit">
            <Image
              src="/images/ijmb-apply.png"
              alt="Apply for IJMB"
              width={300}
              height={200}
              className="w-full md:[300px] object-cover"
            />

            <h4></h4>

            <Button className="text-center text-lg py-6 my-3">
              Chat to Apply
            </Button>

            <ul className="space-y-5">
              {ijmbDetails.map((each) => (
                <li
                  key={each.title}
                  className="flex items-center justify-between text-base text-dark"
                >
                  <span>{each.title}</span>
                  <span>{each.value}</span>
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

export default IJMB;
