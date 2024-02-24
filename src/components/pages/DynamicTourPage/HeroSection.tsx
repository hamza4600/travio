import React from "react";

const HeroSection = () => {
  return (
    <div className="flex gap-[26px]">
      <div className="md:relative">
        <img
          className="lg:rounded-[16px] rounded-none min-h-[480px] max-md:min-h-[212px]"
          loading="lazy"
          src="/demo/hero_tour.png"
          alt="Hero_pic"
        />
        <h1 className="max-lg:hidden left-8 font-black absolute bottom-10 text-white font-satoshi text-[56px] leading-[66px]">
          Explore Ancient Wonders
        </h1>
        <div className="bg-primary">
          <p className="lg:hidden text-center pt-[10px] font-bold text-darkblue font-satoshi text-[20px] leading-[30px]">
            Explore Ancient Wonders
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 max-lg:hidden">
        <img
          className="h-[226px] max-w-[336px] max-lg:hidden"
          src="/demo/ancient.png"
          alt="hero_supprt_img"
        />
        <img
          className="h-[226px] max-w-[336px] max-lg:hidden"
          src="/demo/ancient.png"
          alt="hero_supprt_img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
