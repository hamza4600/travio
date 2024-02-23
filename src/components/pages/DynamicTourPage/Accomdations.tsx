// import { SanityAccommodationSection } from "@/sanity/types";
import React from "react";

import Container from "@/components/molecules/container";
import AccomodationCard from "@/components/molecules/cards/AccondationCard";

export default function AccommdationTypesSection({ data }: { data: any }) {
  return (
    <Container className="flex flex-col py-7  mx-auto max-w-[1312px] px-4 relative gap-10">
      <div className=" w-full">
        <div className=" pl-5 md:pl-0">
          <h2 className="text-black font-satoshi font-bold text-xl lg:text-2xl text-c">
            {data?.title?.en}
          </h2>
          <hr className="md:w-[117px] w-[89px] mt-[5px] border-b-[#FFBB0B]  rounded-full md:border-b-[3px] border-b" />
        </div>
        <div className=" pl-5 mt-2 md:pl-0">
          <span className="text-gray font-satoshi text-base mt-3 lg:text-lg">
            {data.subtitle?.en?.substring(0, 18)}
          </span>
          <span className="text-[#3FA9F5] font-satoshi text-base mt-3 lg:text-lg">
            {data.subtitle?.en?.substring(18)}
          </span>
        </div>
      </div>
      <div className="flex overflow-x-scroll mt-2 max-w-5xl w-full gap-6">
        {data?.accommodation_types?.map((item, index) => (
          <AccomodationCard data={item} key={index} />
        ))}
      </div>
    </Container>
  );
}
