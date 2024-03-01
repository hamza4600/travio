import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { wikiTabs } from "./data";
import FilterCountry from "./FilterCountry";
import SectionHeader from "@/components/molecules/secHeader";

const WikiSection = ({ wikiData, filterWiki }) => {
  const [open, setOpen] = React.useState(-1);
  const [isShadow, setShadow] = useState<number>(-1);

  // for testing later it will change to the exact logic
  const [filteredItems, setFilteredItems] = useState(-1);

  console.log(filteredItems);

  return (
    <section className="md:mt-[68px] mt-[277px]">
      <div className="">
        <SectionHeader
          title={wikiData.tagline}
          subtitle={wikiData.title}
          centerLine
        />
        <div className="md:mt-12 mt-[50px]">
          <FilterCountry tabs={wikiTabs} />
        </div>
      </div>
      <div className="flex gap-[80px] md:px-20 px-5 md:mt-[68px] mt-[50px] max-lg:flex-col max-lg:items-center">
        <div className="flex flex-col md:gap-[18px] gap-[15px]">
          {wikiData.accr.map((data: any, index: number) => (
            <>
              <Accordion
                type="single"
                collapsible
                className={`md:w-[390px] w-[335px] ${
                  isShadow === index && "rounded-b-2xl shadow-md"
                }`}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger
                    className={`font-satoshi pt-3 px-[18px] bg-primary rounded-t-2xl`}
                    key={index}
                    onClick={() => setShadow(isShadow === index ? -1 : index)}
                  >
                    {data.title}
                  </AccordionTrigger>
                  {data.accrData.map((accData: any, idx: number) => (
                    <AccordionContent
                      key={idx}
                      className="font-satoshi md:px-6 px-[18px] py-[10px] flex gap-5 cursor-pointer"
                    >
                      <div>
                        <div
                          className="flex gap-5"
                          onClick={() => setOpen(open === idx ? -1 : idx)}
                        >
                          <Image
                            src="/down_icon.svg"
                            height={20}
                            width={20}
                            alt=""
                            className={`${
                              open === idx ? "-rotate-180" : ""
                            } transition-all`}
                          />

                          <p
                            className={`text-[14px] leading-[22px] ${
                              open === idx ? " text-primary" : "text-gray"
                            }`}
                          >
                            {accData.name}
                          </p>
                        </div>

                        {accData.data.map((acData: any, i: number) => (
                          <div
                            onClick={() =>
                              setFilteredItems(filteredItems === i ? -1 : i)
                            }
                            key={i}
                            className={`${
                              open === idx ? "" : "hidden"
                            } text-gray
                          font-satoshi flex gap-2 pl-10 mt-4
                          `}
                          >
                            {filteredItems === i ? (
                              <Image
                                src={"/minus_icon_blue.svg"}
                                width={20}
                                height={20}
                                alt="Minus Icon"
                              />
                            ) : (
                              <Image
                                src={"/minus_icon.svg"}
                                width={20}
                                height={20}
                                alt="Minus Icon"
                              />
                            )}
                            <p
                              className={`${
                                filteredItems === i
                                  ? "text-primary"
                                  : "text-gray"
                              }`}
                            >
                              {acData.toShow}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </div>

        {/* Filter Country Wiki will be here */}
        <div>
          <Text
            className="font-bold text-[24px] leading-[34px] -tracking-[1.3px]"
            variant={"darkblue"}
          >
            {filterWiki.location.title}
          </Text>
          <hr className="w-[138px] border-b-[#FFBB0B] border-b-[3px]" />
          <div className="mt-[28px] flex flex-col gap-5">
            <div>
              <Text className="text-base font-bold" variant={"darkblue"}>
                {filterWiki.location.location.title}
              </Text>
              <Text variant={"darkblue"} className="text-[16px] leading-[28px]">
                {filterWiki.location.location.desc}
              </Text>
            </div>

            <div>
              <Text className="text-base font-bold" variant={"darkblue"}>
                {filterWiki.location.reachUs.title}
              </Text>
              <Text variant={"darkblue"} className="text-[16px] leading-[28px]">
                {filterWiki.location.reachUs.desc}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WikiSection;
