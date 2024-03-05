import { Text } from "@/components/ui/text";
import React from "react";
import { urlFor } from "../../../../sanity/lib/client";

const HeroSection = ({ data, locale }) => {
  const linearGradient =
    "linear-gradient(75.52deg, #000000 1.5%, rgba(0, 0, 0, 0.8) 9.18%, rgba(0, 0, 0, 0.7) 15.93%, rgba(0, 0, 0, 0.6) 37.5%, rgba(0, 0, 0, 0) 63.68%)";
  return (
    <>
      <div style={{ boxShadow: linearGradient }} className="w-full relative">
        <img
          className="lg:w-full min-h-[480px] max-md:hidden max-w-[1440px] max-md:h-[480px]"
          src={urlFor(data.image.asset._ref)}
          loading="lazy"
          alt={data?.alt?.[locale]}
        />
        <img
          className="lg:w-full min-h-[480px] md:hidden max-w-[375px] max-md:h-[200px]"
          src={urlFor(data.image.mobile.asset._ref)}
          loading="lazy"
          alt={data?.alt?.[locale]}
        />
        <h1 className="font-satoshi shadow-lg lg:w-full text-white max-lg:hidden font-black absolute z-50 bottom-12 text-center text-[56px] leading-[72px]">
          {data.header?.[locale]}
        </h1>
      </div>
      <div className="md:px-20 px-5 md:mt-12 mt-[18px] items-center flex flex-col">
        <div className="lg:hidden flex flex-col gap-1 items-center mb-[10px]">
          <Text
            variant={"darkblue"}
            className="font-bold text-[20px] leading-[30px]"
          >
            {data.header?.[locale]}
          </Text>
          <hr className="border-b border-[#FFBB0B] w-10" />
        </div>
        <Text
          variant={"darkblue"}
          fontWeight={"default"}
          className="md:text-base leading-6 text-[14px]"
        >
          {data.content?.[locale]}
        </Text>
      </div>
    </>
  );
};

export default HeroSection;
