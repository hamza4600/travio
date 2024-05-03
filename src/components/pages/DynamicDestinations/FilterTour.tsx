import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";
import { Button } from "@/components/ui/button";
import React from "react";
import { filterItems, tags } from "./data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FilterSidebar() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3 font-satoshi shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] rounded-t-[16px] max-md:p-4 max-md:rounded-b-[16px]"
    >
      {filterItems.map((item: any, index: number) => (
        <AccordionItem key={index} value={item.name}>
          <AccordionTrigger className={`text-darkblue md:text-lg font-medium p-[18px] bg-[#F2FAFF] ${index == 0 && ' md:rounded-t-[16px]'} max-md:rounded-[8px\]`}>
            {item.name}
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-y-2.5 justify-between items-center">
            {item.countries.map((country: any, index: number) => (
              <div key={index} className="flex gap-2 px-6 items-center py-2.5">
                <input type="radio" className="w-3.5 h-3.5" id={country} />
                <label className="text-xs text-gray font-medium" htmlFor={country}>{country}</label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const FilterTour = () => {
  return (
    <Container className="md:mb-[90px] mb-[50px]">
      <SectionHeader
        title="Tours & Trips"
        subtitle="Best Tours of Egypt"
        centerLine
      />

      <section className="flex max-md:flex-col gap-6 md:mt-12 mt-[46px]">
        <div className="w-full max-w-[302px] max-md:max-w-full">
          <FilterSidebar />
        </div>

        <div className="max-md:mt-10">
          <p className="md:font-medium md:text-gray  md:text-[20px] md:leading-7 font-satoshi">
            Found 148 Tours - Egypt
          </p>

          <div className="mt-4 flex gap-2.5 flex-wrap">
            {tags.map((tag: any, index: number) => (
              <Button
                key={index}
                variant="roundedOutline"
                className="rounded-full text-gray text-xs font-medium max-md:h-7"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FilterTour;
