import React from "react";
import Image from "next/image";

import { urlFor } from "../../../../sanity/lib/client";

import {
  SanityFeature,
  SanityFeatureSection,
} from "../../../../sanity/lib/types";

import Container from "@/components/molecules/container";

export type FeatureSectionProps = {
  data: SanityFeatureSection;
};
const TourFeature = ({ data, locale }) => {
  console.log("locale: ", locale);
  return (
    <Container className="my-20 font-satoshi mx-auto max-w-[1312px] px-4 mb-[69px] text-darkblue">
      {data.title?.en && (
        <div className="md:mb-12 mb-[30px]">
          <p className="text-[20px] md:text-[24px] font-[700] leading-[30px] md:leading-[34px]">
            {data.title?.[locale]}
          </p>
          <div
            className={`${
              data?.type == "small"
                ? " w-[89px] md:w-[120px] "
                : " w-[143px] md:w-[120px] "
            } border-b  md:my-2 md:border-b-[3px] border-b-[#FFBB0B] rounded-full md:rounded-[3px] mb-5`}
          />
        </div>
      )}
      <div
        className={
          data?.type == "small"
            ? "bg-[#F2FAFF] rounded-2xl text-center max-w-5xl w-full"
            : "bg-[rgba(20,13,49,0.02)] text-center rounded-2xl  max-w-5xl w-full"
        }
      >
        {data?.type == "small" ? (
          <div className="px-7 py-[18px]">
            <div className="lg:text-xl text-base font-bold pb-5 md:pb-[18px]">
              Keep Things Simple
            </div>
            <div className="grid grid-cols-2 gap-7 lg:grid-cols-4 mx-auto">
              {data?.features?.map((feature, index) => (
                <Feature key={index} data={feature} locale={locale} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-y-7 gap-y-5 max-md:gap-x-[38px] w-full md:px-7 md:py-[18px] px-5 py-5 lg:px-[60px] relative">
            {data?.features?.map((feature, index) => (
              <LargeFeature key={index} data={feature} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

const Feature = ({ data, locale }: { data: SanityFeature; locale: string }) => {
  return (
    <div className="w-full max-w-5xl text-center max-md:gap-2 flex flex-col items-center z-[2]">
      {data.icon?.asset?._ref && (
        <img
          src={urlFor(data.icon)}
          className="md:w-12 md:h-12 h-9 w-9"
          alt=""
        />
      )}

      {/* {data.title?.en} */}

      <p className="font-[500] lg:text-base leading-5 text-[12px]">
        {data.title?.[locale]}
      </p>
      <p className="mx-20 opacity-60"> {data.description?.[locale]}</p>
    </div>
  );
};

const LargeFeature = ({
  data,
  locale,
}: {
  data: SanityFeature;
  locale: string;
}) => {
  return (
    <div className=" w-full text-start flex  gap-3 md:px-7 md:py-3  items-center z-[2]">
      {data.icon?.asset?._ref && (
        <Image
          src={urlFor(data.icon)}
          className="max-md:h-[18px] max-md:w-[18px]"
          width={28}
          height={28}
          alt=""
        />
      )}

      <div className=" flex-1">
        <p className="font-[500] md:text-xl text-[12px] leading-5">
          {data.title?.[locale]}
        </p>
        <p className="opacity-60"> {data.description?.[locale]}</p>
      </div>
    </div>
  );
};

export default TourFeature;
