import React from "react";
import SwiperComponent from "@/components/molecules/Swiper";
import Link from "next/link";

// import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";

const TopThingsToDo = (props) => {
  //   console.log("things: ", props);
  const { data } = props;
  return (
    <div>
      <div>
        <SectionHeader
          title={data.data.tagline}
          subtitle={data.data.title}
          centerLine
        />
        <>
          <SwiperComponent
            className={"gap-6 pb-3 md:mt-12 mt-[30px]"}
            scrollCount={4}
            length={data.data.top_things.length}
          >
            {data?.data?.top_things?.map((item: any, index: any) => {
              if (!item) return null;
              return (
                <div
                  key={index}
                  className="rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] bg-white relative h-min"
                >
                  <Link href={item?.link?.en} className="">
                    <img
                      loading="lazy"
                      alt={""}
                      className="max-w-[302px] min-h-[220px] "
                      src={item?.image}
                    />
                  </Link>
                  <div className="p-4 font-satoshi flex flex-col gap-2">
                    <h2 className="my-1 text-xl text-darkblue font-bold max-md:text-base">
                      {item?.title?.en}
                    </h2>
                    <h3 className="md:font-medium text-gray md:text-[14px] md:leading-[22px] leading-5 text-[12px] font-normal">
                      {item?.description?.en}
                    </h3>

                    <Button
                      variant={"sky"}
                      className="md:h-[42px] h-10 mt-[10px] font-bold max-w-[270px]"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              );
            })}
          </SwiperComponent>
        </>
      </div>
    </div>
  );
};

export default TopThingsToDo;
