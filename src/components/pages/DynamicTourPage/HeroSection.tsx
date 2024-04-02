import React from "react";
import { urlFor } from "../../../../sanity/lib/client";

const HeroSection = ({ data, locale }) => {
  return (
    <div className="flex gap-[26px]">
      <div className="relative">
        <div
          className="bottom-0 h-[170px] max-md:h-[100px] max-lg:bottom-10 rounded-b-[16px] max-md:top-[112px] max-lg:rounded-none"
          style={{
            position: "absolute",
            width: "100%",
            background:
              "linear-gradient(360deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0) 82%)",
            zIndex: 1,
          }}
        />
        <img
          className="lg:rounded-[16px] rounded-none min-h-[480px] max-md:min-h-[212px] max-sm:hidden"
          src={urlFor(data?.image?.asset?._ref)}
          alt={data?.image?.alt?.[locale]}
        />
        <img
          className="lg:rounded-[16px] rounded-none min-h-[480px] max-md:min-h-[212px] sm:hidden"
          src={urlFor(data?.image?.mobile?.asset?._ref)}
          alt={data?.image?.alt?.[locale]}
        />

        <h1 className="max-lg:hidden left-8 font-black absolute z-50 bottom-[13px] text-white font-satoshi text-[56px] leading-[66px]">
          {data?.title?.[locale]}
        </h1>
        <div className="bg-primary">
          <p className="lg:hidden text-center pt-[25px] pb-[8px] font-bold text-darkblue font-satoshi text-[20px] leading-[30px]">
            {data?.title?.[locale]}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-7 max-lg:hidden">
        {data.images.map((img: any, i: number) => {
          return (
            data.images && (
              <img
                key={i}
                className="h-[226px] max-w-[336px] max-lg:hidden rounded-2xl"
                src={urlFor(img.asset._ref)}
                alt="hero_supprt_img"
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
