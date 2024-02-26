import Image from "next/image";

import Container from "@/components/molecules/container";
import { Text } from "@/components/ui/text";
import useWindowSize from "@/hooks/useWindows";
// import { urlFor } from "../../../../sanity/lib/client";

export default function FlexibleThingsForTour({ data, locale }) {
  const windows = useWindowSize();
  const isMobile = windows.width < 768;

  return (
    <div
      className={
        "bg-[#F2FAFF] max-w-[970px] md:px-20 text-center py-5 md:py-3 mt-5 max-lg:mt-0 xl:rounded-[24px] rounded-none"
      }
    >
      <Container>
        <div className="flex md:items-start items-center justify-center md:justify-start flex-col -tracking-[0.72px]  w-fit mx-auto">
          <Text
            variant={"darkblue"}
            as={"h2"}
            className="text-xl font-bold leading-[30px] md:leading-[34px] max-lg:text-[20px]"
          >
            {data.title[locale]}
          </Text>
        </div>

        {/* <div className="flex justify-between w-full max-lg:flex-wrap gap-[15px] max-lg:mt-5 max-lg:flex-row-reverse"> */}
        <div className="grid grid-cols-4 mt-[15px] max-lg:grid-cols-2 justify-between  max-lg:gap-3">
          {data.features?.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center font-medium text-base max-sm:text-[14px] leading-5 max-sm:px-5 max-md:flex-col max-[320px]:w-[150px]"
            >
              <Image
                src={feature.icon?.asset?._ref}
                alt="as"
                width={isMobile ? 36 : 48}
                height={isMobile ? 36 : 48}
              />
              <Text
                variant={"darkblue"}
                className="font-medium w-[140px] md:w-[200px] md:text-base text-[12px] leading-5"
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
