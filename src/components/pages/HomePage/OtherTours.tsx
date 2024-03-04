import React from "react";
import Link from "next/link";

import Container from "@/components/molecules/container";

const OtherTours = (props) => {
  const {
    data: { title, tours },
    locale,
  } = props;

  return (
    <Container className="my-5 px-20 max-md:px-5 font-satoshi md:my-10">
      <h2 className="font-[700] text-darkblue text-[24px] tracking-[-0.72px]">
        Popular Attractions
      </h2>
      <hr className="text-yellow bg-yellow w-[85px] md:w-1/12 rounded-full border-b-[2px] md:border-b-[3px] border-b-[#FFBB0B] mt-2" />
      <div className="md:py-12 py-8 mds:mt-10 flex flex-wrap text-gray ">
        {tours?.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className="text-[12px] md:text-sm leading-[20px] md:leading-[22px] font-normal md:font-medium flex space-x-2 pr-2"
            >
              <Link key={index} href={item?.url ? item?.url : "/#"}>
                {item?.text?.[locale] ? item?.text?.[locale] : "page"}
              </Link>
              <span className="text-gray ">|</span>
            </div>
          );
        })}
      </div>
      {title === "Popular Tours" && (
        <hr className="text-[#F2FAFF] w-full rounded-full border-[2px] max-w-[1280px] max-md:hidden" />
      )}
    </Container>
  );
};

export default OtherTours;
