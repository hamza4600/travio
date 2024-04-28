import React from "react";
import Link from "next/link";

import Container from "@/components/molecules/container";

const OtherTours = (props) => {
  const {
    data: { tours },
    locale,
  } = props;

  console.log("otherTours: ", props)
  return (
    <Container className="my-5 font-satoshi md:my-10">
      <h2 className="font-[700] text-darkblue text-[24px] leading-8">
        Popular Attractions
      </h2>
      <div className="text-yellow bg-yellow w-[85px] md:w-[101px] rounded-full border-b-[2px] md:border-b-[3px] border-b-[#FFBB0B] mt-2" />
      <div className="md:py-12 py-8 mds:mt-10 flex flex-wrap text-gray ">
        {tours?.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className="text-[12px] md:text-sm leading-[20px] text-[#433d5a] md:leading-[22px] font-normal md:font-medium flex space-x-2 pr-2"
            >
              <Link key={index} href={item?.url ? item?.url : "/#"}>
                {item?.text?.[locale] ? item?.text?.[locale] : "page"}
              </Link>
              <span className="text-gray ">|</span>
            </div>
          );
        })}
      </div>
      {/* 
      <div className="text-[#F2FAFF] w-full rounded-full border-[2px] max-w-[1280px] max-md:hidden" /> */}
    </Container>
  );
};

export default OtherTours;
