import React, { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-md:p-5 space-y-12 md:space-y-20 md:w-11/12 xl:w-10/12 mx-auto py-8 md:py-12">
      {children}
    </div>
  );
};

export default Container;
