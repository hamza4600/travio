import Image from "next/image";

import Container from "@/components/molecules/container";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { urlFor } from "../../../../sanity/lib/client";

import React from "react";

const HeroSection = ({ data, locale, banner }) => {
  const linearGradient =
    "linear-gradient(75.52deg, #000000 1.5%, rgba(0, 0, 0, 0.8) 9.18%, rgba(0, 0, 0, 0.7) 15.93%, rgba(0, 0, 0, 0.6) 37.5%, rgba(0, 0, 0, 0) 63.68%)";

  return (
    <section>
      <div
        className={
          "relative z-10 h-[540px] md:h-full bottom-7 flex items-end lg:items-center justify-center"
        }
      >
        <div
          className={
            "w-full h-[540px] rounded-[24px] max-lg:rounded-none lg:h-full absolute top-0 left-0 -z-10"
          }
          style={{ background: linearGradient }}
        ></div>

        <Image
          className={
            "max-sm:hidden absolute min-h-[538px] max-w-[1440px] rounded-[24px] max-sm:rounded-none -z-20 left-0 top-0 w-full h-[540px] lg:h-full object-cover max-xl:rounded-none"
          }
          // style={{ boxShadow: linearGradient }}
          height={538}
          width={1440}
          src={urlFor(data.image?.asset?._ref)}
          alt={"hero"}
          quality={100}
        />
        <Image
          className={
            "absolute sm:hidden min-h-[538px] max-w-[1440px] rounded-[24px] max-sm:rounded-none -z-20 left-0 top-0 w-full h-[540px] lg:h-full object-cover max-xl:rounded-none"
          }
          // style={{ boxShadow: linearGradient }}
          height={538}
          width={1440}
          src={urlFor(data.image?.mobile.asset?._ref)}
          alt={"hero"}
          quality={100}
        />

        <div className="text-white py-5 z-10 w-full">
          <Container className="-mt-20 md:mt-0 flex items-center md:items-start justify-center md:justify-between flex-col">
            <div className="w-full">
              <header className="flex mt-10 flex-col gap-2.5 px-5">
                <Text
                  variant={"tertiary"}
                  as={"h1"}
                  className="text-[28px]  max-w-[552px] md:text-[56px] font-[900] -tracking-[1.68px] leading-[38px] md:leading-[76px] text-center md:text-start "
                >
                  {data.title[locale]}
                </Text>
                <Text
                  variant={"tertiary"}
                  as={"h2"}
                  className="text-sm md:text-[20px] leading-[20px] md:leading-[32px] text-center md:text-start "
                >
                  {data?.subtitle?.[locale]}
                </Text>
              </header>

              <div className="flex px-10 gap-1 md:gap-4 mt-5 md:mt-12 items-center justify-center md:justify-start">
                <Button
                  variant={"sky"}
                  className="font-bold text-base max-md:text-xs max-md:font-medium h-10 md:h-12 md:w-[163px] w-[160px]"
                >
                  {data?.cta_buttons[0]?.label?.[locale]}
                </Button>
                <Button
                  variant={"secondary"}
                  className="font-bold text-base max-md:text-xs max-md:font-medium h-12 max-md:hidden md:w-[260px] w-[160px]"
                >
                  {data?.cta_buttons[1]?.label?.[locale]}
                </Button>
                <Button
                  variant={"secondary"}
                  className="font-bold text-base max-md:text-xs max-md:font-medium h-10 md:h-12 md:hidden"
                >
                  {data?.cta_buttons[1]?.label?.[locale]}
                </Button>
              </div>
              <Text
                className={
                  "text-[12px] leading-5 font-bold md:text-left md:ml-[152px]  text-center  mt-1.5 text-white/60 max-md:text-white max-md:text-[8px] max-md:leading-[12px]"
                }
              >
                {data?.cta_helper_text?.[locale]}
              </Text>
            </div>
            <footer className="mt-[28px] px-10 md:mt-[71px] flex items-center relative bottom-0">
              <div className="flex">
                <Image
                  src={urlFor(data?.cta_buttons[0]?.icon?.asset._ref)}
                  width={136}
                  height={73}
                  alt=""
                  quality={100}
                />

                <svg
                  className="mx-[18px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="75"
                  viewBox="0 0 2 75"
                  fill="none"
                >
                  <path
                    d="M1 74L1 0.999997"
                    stroke="#FFBB0B"
                    stroke-width="0.689655"
                    stroke-linecap="round"
                  />
                </svg>

                <Image
                  src={urlFor(data?.cta_buttons[1]?.icon?.asset._ref)}
                  width={136}
                  height={73}
                  alt=""
                  quality={100}
                />
              </div>
            </footer>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
