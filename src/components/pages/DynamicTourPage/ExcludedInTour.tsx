import { Text } from "@/components/ui/text";
import React from "react";

const ExcludedInTour = ({ data, locale }: { data: any; locale: string }) => {
  return (
    <div className="flex flex-col gap-[30px] max-w-[970px] lg:gap-12">
      <div className="flex flex-col">
        <Text
          variant={"darkblue"}
          className="md:text-[24px] md:leading-[34px] text-[20px] leading-[30px] font-bold -tracking-[1.3px]"
        >
          {data.title?.[locale]}
        </Text>
        <hr className="md:max-w-[162px] w-[143px] mt-1 border-[#FFBB0B] text-yellow rounded-full md:rounded-[3px] md:border-b-[3px] border-b-[1px]" />
      </div>

      <div className="grid pl-[28px] pr-[27px] py-[18px] gap-[28px] rounded-2xl md:grid-cols-3 grid-cols-2 items-center bg-[rgba(20,13,49,0.02)]">
        {data.data.map((excData: any, idx: number) => (
          <div
            className={`flex items-center gap-3 ${
              idx === data.data.length - 1 && "justify-self-center mx-auto"
            }`}
            key={idx}
          >
            <img
              src={excData.icon}
              className="md:h-[28px] md:w-[28px] h-[18px] w-[18px]"
              alt="icon"
            />
            <Text
              variant={"darkblue"}
              className="font-medium md:text-[20px] text-[12px] leading-5 md:leading-[28px]"
            >
              {excData.text?.[locale]}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcludedInTour;
