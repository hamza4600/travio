import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import React from "react";

const ContactSection = () => {
  return (
    <div className="max-w-[1280px] min-h-[502px] bg-[#edf7fe] md:rounded-[24px] rounded-none">
      <div className="flex">
        <div className="flex flex-col max-md:items-center md:gap-[68px] gap-6 md:py-[68px] md:pl-12 py-10 px-5">
          <Text
            variant={"darkblue"}
            className="md:text-[48px] max-md:px-5 font-bold md:leading-[68px] text-2xl md:max-w-[720px]"
          >
            Let us take care of the hassle and enjoy your vacation that you
            deserve
          </Text>
          <Button
            variant={"sky"}
            className="md:h-12 h-10 md:max-w-[312px] max-md:text-[14px] max-md:leading-6 max-md:font-medium max-w-[245px] max-md:px-5 font-bold"
          >
            Contact One of Our Tour Agents
          </Button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ContactSection;
