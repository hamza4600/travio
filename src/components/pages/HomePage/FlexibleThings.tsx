import Image from "next/image";

import Container from "@/components/molecules/container";
import { Text } from "@/components/ui/text";
import useWindowSize from "@/hooks/useWindows";
import { urlFor } from "../../../../sanity/lib/client";

export default function FlexibleThings({ data, locale }) {
  const windows = useWindowSize();
  const isMobile = windows.width < 768;

  return (
    <div
      className={
        "bg-[#F2FAFF] md:px-20 text-center py-5 md:py-3 mt-5 max-lg:mt-0 xl:rounded-[24px] rounded-none"
      }
    >
      <Container>
        <div className="flex md:items-start items-center justify-center md:justify-start flex-col -tracking-[0.72px]  w-fit mx-auto">
          <Text
            variant={"darkblue"}
            as={"h2"}
            className="text-2xl font-bold leading-[30px] md:leading-[34px] max-lg:mt-5 max-lg:text-[20px]"
          >
            {data.title[locale]}
          </Text>
          <hr
            aria-hidden="true"
            className="w-[85px] md:w-[103px] border-[#FFBB0B] text-yellow rounded-full md:rounded-[3px] md:border-b-[2px] border-b-[2px] mb-4 mt-1"
          />
        </div>

        {/* <div className="flex justify-between w-full max-lg:flex-wrap gap-[15px] max-lg:mt-5 max-lg:flex-row-reverse"> */}
        <div className="grid grid-cols-4 max-lg:grid-cols-2 justify-between  max-lg:gap-3">
          {data.features?.map((feature, index) => (
            <div
              key={index}
              className="flex gap-3 items-center font-medium text-base max-sm:text-[14px] leading-5 max-sm:px-5 max-md:flex-col max-[320px]:w-[150px]"
            >
              <Image
                src={urlFor(feature.icon?.asset?._ref)}
                alt=""
                width={isMobile ? 36 : 48}
                height={isMobile ? 36 : 48}
              />
              <Text
                variant={"darkblue"}
                className="font-medium max-sm:w-[140px] max-md:w-[200px] text-base max-sm:text-[12px] leading-5"
              >
                {feature.title[locale]}
              </Text>
            </div>
          ))}
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
}
