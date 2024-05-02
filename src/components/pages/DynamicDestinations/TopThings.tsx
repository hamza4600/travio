import React from "react";
import SwiperComponent from "@/components/molecules/Swiper";
import Link from "next/link";

// import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";
import { urlFor } from "../../../../sanity/lib/client";

const TopThingsToDo = (props) => {
  const { data, locale } = props;
  
  return (
    <div className="md:px-20 px-5">
      <div>
        <SectionHeader
          title={data.tagline?.[locale]}
          subtitle={data?.title?.[locale]}
          centerLine
        />
        <>
          <SwiperComponent
            className={"gap-6 pb-3 md:mt-12 mt-[30px]"}
            scrollCount={4}
            length={data.top_things.length}
          >
            {data?.top_things?.map((item: any, index: any) => {
              if (!item) return null;
              return (
                <div
                  key={index}
                  className="rounded-[16px] md:max-w-[302px] max-w-[270px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] bg-white relative h-min"
                >
                  <Link href={item?.link?.en} className="">
                    <img
                      loading="lazy"
                      alt={""}
                      className="md:max-w-[302px] max-w-[270px] min-h-[220px] "
                      src={urlFor(item?.image.asset._ref)}
                    />
                  </Link>
                  <div className="p-4 font-satoshi flex flex-col gap-2">
                    <h2 className="my-1 text-xl text-darkblue max-w-[270px] font-bold max-md:text-base">
                      {item?.title?.[locale]}
                    </h2>
                    <h3 className="md:font-medium text-gray max-w-[270px] md:text-[14px] md:leading-[22px] leading-5 text-[12px] font-normal">
                      {item?.description?.[locale]}
                    </h3>

                    <Link href={item?.link?.en} className="">
                      <Button
                        variant={"sky"}
                        className="md:h-[42px] h-10 mt-[10px] font-bold w-full"
                      >
                        Read More
                      </Button>
                    </Link>
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
