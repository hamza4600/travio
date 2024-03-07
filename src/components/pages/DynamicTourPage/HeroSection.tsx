import React from "react";
import { urlFor } from "../../../../sanity/lib/client";

const HeroSection = ({ data, locale }) => {
  return (
    <div className="flex gap-[26px] md:px-20 px-0">
      <div className="md:relative">
        <img
          className="lg:rounded-[16px] rounded-none min-h-[480px] max-md:min-h-[212px] max-sm:hidden"
          loading="lazy"
          src={urlFor(data?.image?.asset?._ref)}
          alt={data?.image?.alt?.[locale]}
        />
        <img
          className="lg:rounded-[16px] rounded-none min-h-[480px] max-md:min-h-[212px] sm:hidden"
          loading="lazy"
          src={urlFor(data?.image?.mobile?.asset?._ref)}
          alt={data?.image?.alt?.[locale]}
        />
        <h1 className="max-lg:hidden left-8 font-black absolute bottom-[13px] text-white font-satoshi text-[56px] leading-[66px]">
          {data?.title?.[locale]}
        </h1>
        <div className="bg-primary">
          <p className="lg:hidden text-center pt-[10px] font-bold text-darkblue font-satoshi text-[20px] leading-[30px]">
            {data?.title?.[locale]}
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
