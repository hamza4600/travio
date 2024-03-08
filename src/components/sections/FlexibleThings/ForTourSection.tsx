import React from "react";
import Image from "next/image";
import { Text } from "@/components/ui/text";

import { urlFor } from "../../../../sanity/lib/client";

import {
  SanityFeature,
  SanityFeatureSection,
} from "../../../../sanity/lib/types";
import Container from "@/components/molecules/container";

export type FeatureSectionProps = {
  data: SanityFeatureSection;
};

const TourFeature = ({
  data,
  locale,
}: {
  data: SanityFeatureSection;
  locale: string;
}) => {
  return (
    <Container className="my-20 mx-auto max-w-[1312px] px-4 mb-[69px] ">
      {data.title?.[locale] && (
        <div className="mb-10 px-5 md:px-0">
          <h2 className="text-[20px] md:text-[24px] font-satoshi text-darkblue font-[700] leading-[30px] md:leading-[34px] pt-[20px] md:pt-[16px] ">
            {data.title?.[locale]}
          </h2>
          <div className="w-[143px] md:w-[110px]  my-2 border-b-[3px] border-[#FFBB0B] text-yellow rounded-full md:rounded-[3px] mb-5" />
        </div>
      )}
      <div
        className={
          data?.type == "small"
            ? "bg-[#F2FAFF] rounded-2xl text-center max-w-[970px] w-full pb-8"
            : "bg-[#F2FAFF] text-center rounded-2xl  max-w-[970px] w-full pb-8"
        }
      >
        {data?.type == "small" ? (
          <div className=" px-5 ">
            <div className="lg:text-xl font-satoshi text-darkblue text-base py-8 lg:py-6 font-bold">
              Keep Things Simple
            </div>
            <div className="grid grid-cols-2 gap-[67px] lg:grid-cols-4 w-fit px-7">
              {data?.features?.map((feature, index) => (
                <Feature key={index} data={feature} locale={locale} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid pl-[28px] pr-[27px] py-[18px] gap-[28px] rounded-2xl md:grid-cols-3 grid-cols-2 items-center bg-[rgba(20,13,49,0.02)]">
            {data?.features?.map((feature, index) => (
              <LargeFeature key={index} data={feature} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export type FeatureProps = { data: SanityFeature };

const Feature = ({ data, locale }: { data: SanityFeature; locale: string }) => {
  return (
    <div className=" w-full max-w-5xl text-center flex flex-col items-center z-[2]">
      {data.icon?.asset?._ref && (
        <Image src={urlFor(data.icon)} width={28} height={28} alt="" />
      )}

      {/* {data.title?.en} */}

      <p className="font-[500] lg:text-[15px] text-darkblue font-satoshi text-[12px] mb-2">
        {data.title?.[locale]}
      </p>
      <p className="mx-20 opacity-60 font-satoshi text-darkblue">
        {" "}
        {data.description?.[locale]}
      </p>
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
    <div className="flex flex-col gap-[30px] max-w-[970px] lg:gap-12">
      <div className="flex flex-col">
        <Text
          variant={"darkblue"}
          className="md:text-[24px] md:leading-[34px] text-[20px] leading-[30px] font-bold -tracking-[1.3px]"
        >
          {data.title?.[locale]}
        </Text>
        <div className="md:max-w-[162px] w-[143px] mt-1 border-[#FFBB0B] text-yellow rounded-full md:rounded-[3px] md:border-b-[3px] border-b-[1px]" />
      </div>

      <div className="grid pl-[28px] pr-[27px] py-[18px] gap-[28px] rounded-2xl md:grid-cols-3 grid-cols-2 items-center bg-[rgba(20,13,49,0.02)]">
        <div
          className={`flex items-center gap-3 
             "justify-self-center mx-auto"
            `}
        >
          {data.icon?.asset?._ref && (
            <Image src={urlFor(data.icon)} width={28} height={28} alt="" />
          )}
          <Text
            variant={"darkblue"}
            className="font-medium md:text-[20px] text-[12px] leading-5 md:leading-[28px]"
          >
            {data.description?.[locale]}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TourFeature;
