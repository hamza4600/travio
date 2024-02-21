import React from "react";

const HeroSection = () => {
  return (
    <div className="flex gap-[26px]">
      <div className="md:relative">
        <img
          className="md:rounded-[16px] rounded-none max-md:min-h-[212px]"
          loading="lazy"
          src="/demo/hero_tour.png"
          alt="Hero_pic"
        />
        <h1 className="max-lg:hidden left-8 font-black absolute bottom-10 text-white font-satoshi text-[56px] leading-[66px]">
          Explore Ancient Wonders
        </h1>
        <p className="lg:hidden text-center mt-4 font-bold z-50 text-darkblue font-satoshi text-[20px] leading-[30px]">
          Explore Ancient Wonders
        </p>
      </div>

      <img
        className="h-[226px] max-w-[336px] max-lg:hidden"
        src="/demo/ancient.png"
        alt="hero_supprt_img"
      />
    </div>
  );
};

export default HeroSection;
