import React from "react";
import Image from "next/image";

// import { localizedString, PropsWithLocale } from "@/contexts/LocaleProvider";
// import { urlFor } from "@/sanity/client";
// import { SanityTravelInfoSection } from "@/sanity/types";

import Container from "@/components/molecules/container";

import { Button } from "@/components/ui/button";

const TravelInformation = ({ data, locale }: { data: any; locale: string }) => {
  return (
    <Container className={"mx-auto max-w-[1312px] px-4"}>
      <div
        id="essentials"
        className="flex flex-col gap-5 text-center items-center justify-center px-5 rounded-2xl border-[#FFBB0B] border-[1px] shadow-md shadow-[#f5f5f5] lg:px-20 py-10 pb-7"
      >
        <img
          src={data.icon}
          alt={data.icon?.alt?.en ?? ""}
          className="lg:h-[78px] lg:w-[78px] h-[58px] w-[58px]"
        />

        <h2
          style={{ letterSpacing: "-3%" }}
          className=" text-[24px] leading-[32px] font-satoshi md:text-[40px] md:leading-[50px] font-medium"
        >
          {data.title?.[locale]}
        </h2>
        <h5 className="md:text-base text-[14px] leading-6 font-satoshi px-0 md:px-20 opacity-60">
          {data.subtitle?.[locale]}
        </h5>
        <Button
          variant={data.cta?.type}
          className="lg:px-10 md:text-base text-[14px] leading-6 font-bold w-[180px] lg:w-[180px] py-3"
        >
          {data.cta?.label?.[locale]}
        </Button>
      </div>
    </Container>
  );
};

export default TravelInformation;
