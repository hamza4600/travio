import { Text } from "@/components/ui/text";
import React from "react";

const HeroSection = ({ data }) => {
  return (
    <div className="relative">
      <img src={data.img} loading="lazy" alt="heroImg" />
      <div className="absolute max-lg:hidden bottom-10 left-[645px]">
        <Text
          className="font-black text-[56px] tracking-tight m-[-3%] leading-[72px]"
          variant={"tertiary"}
        >
          {data.title}
        </Text>
      </div>
    </div>
  );
};

export default HeroSection;
