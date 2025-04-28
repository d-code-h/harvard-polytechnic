import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="bg-white px-5  md:px-14 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-20 xl:w-10/12 mx-auto ">
        <div className="flex flex-col md:flex-row gap-5 items-center w-auto md:max-w-[390px] lg:max-w-[470px] mx-auto">
          <Image
            src="/images/profile-1.png"
            alt="Profile"
            width={230}
            height={700}
            className="max-md:w-full max-md:hidden h-[390px]  object-cover object-top"
          />

          <div className="flex flex-col sm:flex-row md:flex-col flex-1 md:gap-5 w-full md:w-1/2">
            <div className="relative text-[#C4C4C4] flex flex-col items-center justify-center gap-2 p-4 md:p-6 w-full">
              <div className="absolute top-0 left-0 w-2 h-2 bg-red-500"></div>
              <div className="absolute top-1 left-0 w-full h-0.5 border-t border-dashed border-red-500"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500"></div>
              <div className="absolute top-1 left-0.5 w-0.5 h-full border-r border-dashed border-red-500"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500"></div>
              <div className="absolute bottom-0.5 left-0 w-full h-0.5 border-t border-dashed border-red-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500"></div>
              <div className="absolute top-1 right-0.5 w-0.5 h-full border-l border-dashed border-red-500"></div>
              <div className="font-bold w-24 h-24 rounded-full bg-white flex items-center justify-center text-[#FE543D] text-3xl border">
                35+
              </div>
              <p className="text-[#4D5756] whitespace-nowrap">
                Years Experience
              </p>
            </div>
            <Image
              src="/images/profile-2.png"
              alt="Profile"
              width={318}
              height={303}
              className="h-48 md:w-full lg:w-64 lg:h-64 object-cover object-top"
            />
          </div>
        </div>

        <section className="flex-1">
          <div className="flex items-center">
            <Image
              src="/icons/about-us.svg"
              alt="Profile"
              width={23}
              height={17}
            />
            <h6 className="uppercase text-sm text-[#FE543D]">About Us</h6>
          </div>

          <h2 className="text-5xl md:text-4xl mt-6 mb-7 font-bold font-poppins">
            Benefit from our online learning expertise earn{' '}
            <span className="text-[#FE543D] font-bold">professional</span>
          </h2>
          <p className="text-[#4D5756] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-8 mb-9">
            <section className="space-y-4">
              <h4 className="uppercase text-[#0E2A46] font-bold">
                Our Mission:
              </h4>
              <p className="text-[#333931] tracking-wider">
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </section>
            <section className="space-y-4">
              <h4 className="uppercase text-[#0E2A46] font-bold">
                Our Vission:
              </h4>
              <p className="text-[#333931] tracking-wider">
                Suspendisse ultrice gravida dictum fusce placerat ultricies
                integer quis auctor elit sed vulputate mi sit.
              </p>
            </section>
          </div>

          <CustomButton text="Admission Open" />
        </section>
      </div>
    </div>
  );
};

export default Profile;
