import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="bg-white p-28">
      <div className="flex flex-col lg:flex-row gap-20 xl:w-10/12 mx-auto">
        <div className="flex gap-5 items-center  sm:max-w-[400px] xl:max-w-[500px] mx-auto">
          <Image
            src="/images/profile-1.png"
            alt="Profile"
            width={230}
            height={500}
            className="max-sm:w-1/2"
          />

          <div className="space-y-5">
            <div className="text-[#C4C4C4] flex flex-col items-center justify-center border-2 border-red-500 border-dashed p-6">
              <div className="font-bold w-24 h-24 rounded-full bg-white flex items-center justify-center text-[#FE543D] text-3xl border">
                35+
              </div>
              <p className="text-[#4D5756]">Years Experience</p>
            </div>
            <Image
              src="/images/profile-2.png"
              alt="Profile"
              width={318}
              height={303}
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

          <h2 className="text-5xl mt-6 mb-7 font-bold">
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
