import React from "react";
import Image from "next/image";
import { Text } from "@/components/ui/text";

const Address = ({
  heading,
  address,
  number,
  email,
}: {
  heading: string;
  address: string;
  number: string;
  email: string;
}) => {
  return (
    <div className="flex flex-col flex-none text-sm gap-3 md:max-w-[218px]">
      <Text
        // variant={"darkblue"}
        className="text-[16px] font-medium leading-6 md:text-base text-dimSecondary"
      >
        {heading}
      </Text>
      <div className="flex items-start gap-2">
        <Image width={20} height={20} alt="" src="/map_icon.svg"></Image>
        <Text
          variant={"gray"}
          className="font-normal md:leading-5 md:text-[14px] text-[12px]"
        >
          {address}
        </Text>
      </div>
      <div className="flex items-start gap-2">
        <Image width={20} height={20} alt="" src="/call_icon.svg"></Image>
        <Text
          variant={"gray"}
          className="font-normal md:leading-5 md:text-[14px] text-[12px]"
        >
          {number}
        </Text>
      </div>
      <div className="flex items-start gap-2">
        <Image width={20} height={20} alt="" src="/email_icon.svg"></Image>
        <Text
          variant={"gray"}
          className="font-normal md:leading-5 md:text-[14px] text-[12px]"
        >
          {email}
        </Text>
      </div>
    </div>
  );
};

export default Address;
