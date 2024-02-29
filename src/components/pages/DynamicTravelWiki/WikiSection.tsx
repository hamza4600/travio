import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Text } from "@/components/ui/text";

const WikiSection = ({ wikiData, filterWiki }) => {
  const [open, setOpen] = React.useState(-1);
  const [isShadow, setShadow] = useState<number>(-1);

  return (
    <section className="md:mt-12 mt-[50px]">
      <div className="flex gap-[80px] max-lg:flex-col max-lg:items-center">
        <div className="flex flex-col gap-[18px]">
          {wikiData.accr.map((data: any, index: number) => (
            <>
              <Accordion
                type="single"
                collapsible
                className={`md:w-[390px] max-w-[335px] ${
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
                      className="font-satoshi px-[18px] py-[10px] flex gap-5 cursor-pointer"
                      onClick={() => setOpen(open === idx ? -1 : idx)}
                    >
                      {/* <div></div> */}
                      <Image
                        src="/down_icon.svg"
                        height={20}
                        width={20}
                        alt=""
                        className={`${
                          open === idx ? "-rotate-180" : ""
                        } transition-all`}
                      />

                      <div className="flex flex-col">
                        <p
                          className={`text-gray text-[14px] leading-[22px] ${
                            open === idx ? " text-[#3FA9F5]" : " "
                          }`}
                        >
                          {accData.name}
                        </p>
                        {accData.data.map((acData: any, i: number) => (
                          <div
                            key={i}
                            className={`${
                              open === idx ? "" : "hidden"
                            } text-gray
                          font-satoshi
                          `}
                          >
                            <p>{acData.toShow}</p>
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

        {/* Filter Country Wiki here */}
        <div>
          <Text
            className="font-bold text-[24px] leading-[34px] -tracking-[1.3px]"
            variant={"darkblue"}
          >
            {filterWiki.location.title}
          </Text>
          <hr className="w-[138px] border-b-[#FFBB0B] border-b-[3px]" />
        </div>
      </div>
    </section>
  );
};

export default WikiSection;
