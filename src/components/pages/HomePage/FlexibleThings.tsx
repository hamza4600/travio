import Image from "next/image";

import Container from "@/components/molecules/container";
import { Text } from "@/components/ui/text";
import useWindowSize from "@/hooks/useWindows";

const data = [
  {
    icon: "/wallet.svg",
    title: "Book with $200 deposit",
  },
  {
    icon: "/wallet.svg",
    title: "Interest free payment plans",
  },
  {
    icon: "/wallet.svg",
    title: "No fees for booking modifications",
  },
  {
    icon: "/wallet.svg",
    title: "24/7 Support",
  },
];

export default function FlexibleThings() {
  const windows = useWindowSize();
  const isMobile = windows.width < 768;

  console.log(data);
  return (
    <div
      className={
        "bg-[#F2FAFF] md:px-20 text-center py-5 md:py-3 mt-5 max-lg:mt-0 max-w-[1280px] xl:rounded-[24px] rounded-none"
      }
    >
      <Container>
        <div className="flex md:items-start items-center justify-center md:justify-start flex-col -tracking-[0.72px]  w-fit mx-auto">
          <Text
            variant={"darkblue"}
            className="text-2xl font-bold leading-[30px] md:leading-[34px] max-lg:mt-5 max-lg:text-[20px]"
          >
            Keep things flexible
          </Text>
          <hr className="w-[85px] md:w-1/2 mt-[6px] bg-[#FFBB0B] h-0.5  mb-4" />
        </div>

        {/* <div className="flex justify-between w-full max-lg:flex-wrap gap-[15px] max-lg:mt-5 max-lg:flex-row-reverse"> */}
        <div className="grid grid-cols-4 max-lg:grid-cols-2 justify-between  max-lg:gap-3">
          {data?.map((feature, index) => (
            <div
              key={index}
              className="flex gap-3 items-center font-medium text-base max-sm:text-[14px] leading-5 max-sm:px-5 max-md:flex-col max-[320px]:w-[150px]"
            >
              <Image
                src={feature.icon}
                alt=""
                width={isMobile ? 36 : 48}
                height={isMobile ? 36 : 48}
              />
              <Text
                variant={"darkblue"}
                className="font-medium max-sm:w-[140px] max-md:w-[200px] text-base max-sm:text-[12px] leading-5"
              >
                {feature.title}
              </Text>
            </div>
          ))}
        </div>
        {/* </div> */}
      </Container>
    </div>
  );
}
