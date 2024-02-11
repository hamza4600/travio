"use client";
import React from "react";
import Image from "next/image";
import { WhatsappIcon } from "@/components/icons";
import useWindowSize from "@/hooks/useWindows";

import Container from "../container";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const GetEarlyNews = ({ title, description }) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;
  return (
    <Container className="px-0 flex justify-center items-center md:px-5">
      <div className="pt-[30px] md:pt-[55px] pb-[45px] px-[60px] h-[300px] md:h-full max-w-[1280px] bg-[#3FA9F5] md:w-full md:rounded-3xl overflow-hidden relative">
        <Image
          width={640}
          height={222}
          src={"/authBackground.png"}
          alt={""}
          sizes={`
              100vw
            `}
          className={"absolute w-full h-full top-0 left-0 object-cover"}
        />
        <div className="flex relative z-10 flex-col justify-center md:justify-start items-center md:items-start ">
          <header>
            <Text
              variant={"tertiary"}
              fontWeight={"700"}
              className="text-center max-sm:w-[335px] -tracking-[1.2px] max-w-3xl md:text-start text-[24px] md:text-[40px] leading-[32px] md:leading-[50px]"
            >
              {title}
            </Text>

            <Text
              variant={"tertiary"}
              fontWeight={"500"}
              className="w-[335px] md:w-full  text-center max-w-[610px] -tracking-[0.6px] mt-2.5 mb-[30px] md:text-start text-[14px] md:text-[20px]  md:font-normal leading-[20px] md:leading-[32px]"
            >
              {description}
            </Text>
          </header>
          <div className="relative shadow-sm flex items-center  ">
            <input
              className="font-satoshi text-black w-[335px] md:w-[420px] h-10 md:h-12 rounded-full px-3 md:px-4 placeholder:text-gray text-xs md:text-base leading-[22px] md:leading-normal"
              type="text"
              placeholder={"Enter your email"}
            />
            <Button
              size={`${isMobile ? "md" : "default"}`}
              variant={"golden"}
              className="absolute text-[16px] leading-6 font-satoshi right-[5px] top-1/2 -translate-y-1/2 font-bold max-sm:font-medium max-sm:h-[30px] max-sm:text-[12px] max-sm:leading-[17px]  "
            >
              Sign Up
            </Button>
          </div>

          <footer className="flex md:flex-col w-[310px] items-center md:items-start gap-1.5 mt-2 md:mt-[30px]">
            <Text
              variant={"tertiary"}
              className="text-[12px] md:text-[20px] font-bold leading-[20px] md:leading-[32px] "
            >
              Have any questions?
            </Text>
            <div className="flex items-center gap-0.5 md:gap-1">
              <WhatsappIcon />
              <Text
                variant={"tertiary"}
                className="text-[10px] md:text-base font-bold md:font-medium leading-[14px] md:leading-normal "
              >
                +1 0000 000 000
              </Text>
            </div>
          </footer>
        </div>
      </div>
    </Container>
  );
};

export default GetEarlyNews;
