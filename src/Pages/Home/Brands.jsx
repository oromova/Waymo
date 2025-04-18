import React from 'react';
import logo1 from '../../assets/brand1.svg';
import logo2 from '../../assets/brand2.svg';
import Marquee from 'react-fast-marquee';

const Brands = () => {
  return (
    <section className="my-[50px]">
      <div className="relative max-w-[1320px] mx-auto overflow-hidden px-4">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 md:w-20 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 md:w-20 z-10 bg-gradient-to-l from-white to-transparent" />
        <Marquee>
          <div className="flex items-center justify-around gap-10 sm:gap-[60px] md:gap-[80px] py-10 sm:py-[60px] md:py-[80px]">
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo1} alt="Framer logo" />
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo2} alt="afterpay logo" />
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo1} alt="Framer logo" />
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo2} alt="afterpay logo" />
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo1} alt="Framer logo" />
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo2} alt="afterpay logo" />
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo1} alt="Framer logo" />
            <img className="w-[150px] sm:w-[200px] md:w-[230px] h-auto" src={logo2} alt="afterpay logo" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;
