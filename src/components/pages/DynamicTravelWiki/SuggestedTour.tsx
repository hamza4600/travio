import React from "react";
import CardsSection from "@/components/sections/differnetDeals/CardsSection";
import { Text } from "@/components/ui/text";
import SectionHeader from "@/components/molecules/secHeader";

const SuggestedTour = () => {
  return (
    <div>
      <Text
        variant={"darkblue"}
        className="font-bold max-md:hidden text-[24px] leading-[34px] -tracking-[1.3px]"
      >
        Suggested Tours
      </Text>
      <hr className="mt-[10px] w-[88px] max-md:hidden border-b-[3px] border-b-[#FFBB0B]" />
      <div className="md:hidden">
        <SectionHeader title="TOUR" subtitle="You Might Also Like" centerLine />
      </div>
      <CardsSection data={""} locale={""} />
    </div>
  );
};

export default SuggestedTour;
