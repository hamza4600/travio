import React from "react";
import Link from "next/link";

// import { localizedString } from '@/contexts/LocaleProvider'
import { SanityLink } from "../../../../sanity/lib/types";
import { Text } from "@/components/ui/text";

const Footer__links = ({
  heading,
  items,
  locale,
}: {
  heading: string;
  items: SanityLink[];
  // items: any;
  locale: string;
}) => {
  return (
    <div className="flex gap-2 flex-col text-darkblue font-satoshi">
      <Text
        variant={"darkblue"}
        className="psb-2 font-bold text-base md:text-lg leading-[24px]"
      >
        {heading}
      </Text>
      {items.map((item, index) => {
        return (
          <Link
            href={locale + item.url || ""}
            key={index}
            className="text-[12px] md:text-[16px] md:font-medium leading-[24px] md:leading-normal text-dimSecondary"
          >
            {item?.text?.[locale]}
            {/* {localizedString(item.text)} */}
          </Link>
        );
      })}
    </div>
  );
};

export default Footer__links;
