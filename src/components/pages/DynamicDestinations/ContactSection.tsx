import Container from "@/components/molecules/container";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import React from "react";
import { urlFor } from "../../../../sanity/lib/client";

const ContactSection = ({ data, locale }: { data: any; locale: string }) => {
  return (
    <Container className="md:px-20 px-0 md:pt-20 pt-[50px] md:pb-[68px] pb-[49px]">
      <div className="max-w-[1280px] min-h-[502px] bg-[#edf7fe] md:rounded-[24px] rounded-none">
        <div className="flex max-md:flex-col relative">
          <div className="flex flex-col z-50 max-md:items-center md:gap-[68px] gap-6 md:py-[68px] md:pl-12 py-10 px-5">
            <Text
              variant={"darkblue"}
              className="md:text-[48px] max-md:text-center font-bold md:leading-[68px] text-2xl md:max-w-[720px]"
            >
              {data.title?.[locale]}
            </Text>
            <Button
              variant={"sky"}
              className="md:h-12 h-10 md:max-w-[312px] max-md:text-[14px] max-md:leading-6 max-md:font-medium max-w-[245px] max-md:px-5 font-bold"
            >
              {data.cta?.label?.[locale]}
            </Button>
          </div>

          <div className="absolute">
            <img
              src={urlFor(data.hero_image.asset._ref)}
              className="max-md:hidden"
              alt=""
            />
            <img
              src={urlFor(data.hero_image.mobile.asset._ref)}
              className="md:hidden"
              alt=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
