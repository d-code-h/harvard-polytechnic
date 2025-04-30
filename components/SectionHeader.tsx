import React from 'react';
import CustomButton from './CustomButton';

const SectionHeader = ({
  title,
  caption,
  btn,
}: {
  title: string;
  caption: string;
  btn?: string;
}) => {
  return (
    <div className="flex flex-wrap max-md:gap-2 items-center justify-between">
      <hgroup className="space-y-6">
        <h6 className="bg-[#E9E2FF] text-primary px-5 py-2 uppercase text-sm w-fit rounded-lg">
          {caption}
        </h6>
        <h3 className="font-epilogue font-bold text-4xl md:text-5xl md:max-w-[390px] lg:max-w-[500px] xl:max-w-[700px]">
          {title}
        </h3>
      </hgroup>
      {btn && <CustomButton text={btn} />}
    </div>
  );
};

export default SectionHeader;
