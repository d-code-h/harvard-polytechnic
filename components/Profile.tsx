import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';
import { profileData } from '../lib/data';
import Container from './Container';

const Profile = () => {
  const { aboutUs, stats } = profileData;

  return (
    <Container>
      <div className="bg-white flex flex-col md:flex-row gap-12 md:gap-20 mx-auto">
        <div className="flex flex-col md:flex-row gap-5 items-center w-auto md:max-w-[390px] lg:max-w-[470px] mx-auto">
          <Image
            src="/images/profile-1.png"
            alt="Profile"
            width={230}
            height={700}
            className="max-md:w-full max-md:hidden h-[390px] object-cover object-top"
          />

          <div className="flex flex-col sm:flex-row md:flex-col flex-1 md:gap-5 w-full md:w-1/2">
            <div className="relative text-[#C4C4C4] flex flex-col items-center justify-center gap-2 p-4 md:p-6 w-full">
              <div className="font-bold w-24 h-24 rounded-full bg-white flex items-center justify-center text-[#FE543D] text-3xl border">
                {stats.yearsOfExcellence}
              </div>
              <p className="text-[#4D5756] whitespace-nowrap">
                Years of Excellence
              </p>
            </div>
            <Image
              src="/images/profile-2.png"
              alt="Profile"
              width={318}
              height={303}
              className="max-sm:h-auto h-64 md:w-full lg:w-64 lg:h-64 object-cover object-top"
            />
          </div>
        </div>

        <section className="flex-1">
          <div className="flex items-center">
            <Image
              src="/icons/about-us.svg"
              alt={aboutUs.heading}
              width={23}
              height={17}
            />
            <h6 className="uppercase text-sm text-[#FE543D]">
              {aboutUs.heading}
            </h6>
          </div>

          <h2 className="text-5xl md:text-4xl mt-6 mb-7 font-bold font-poppins">
            {aboutUs.title.split(' ')[0]}{' '}
            <span className="text-[#FE543D] font-bold">
              {aboutUs.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>
          <p className="text-[#4D5756] text-lg">{aboutUs.description}</p>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-8 mb-9">
            <section className="space-y-4">
              <h4 className="uppercase text-[#0E2A46] font-bold">
                {aboutUs.mission.title}
              </h4>
              <p className="text-[#333931] tracking-wider">
                {aboutUs.mission.text}
              </p>
            </section>
            <section className="space-y-4">
              <h4 className="uppercase text-[#0E2A46] font-bold">
                {aboutUs.vision.title}
              </h4>
              <p className="text-[#333931] tracking-wider">
                {aboutUs.vision.text}
              </p>
            </section>
          </div>

          <CustomButton text={aboutUs.buttonText} />
        </section>
      </div>
    </Container>
  );
};

export default Profile;
