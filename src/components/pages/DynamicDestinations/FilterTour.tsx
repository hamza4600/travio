import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";
import React, { useEffect } from "react";
import { filterItems } from "./data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ToureTags from "./touerTags";
import { getTourByTags } from "@/lib/sanity.TourPage";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import TourCard from "@/components/molecules/cards/Card";
import styled from "styled-components";

const RootStyle = styled.div`
  a {
    max-width: 100%;
  
      
   
  }
  img {
        max-width: 100%;
      }
`;

function FilterSidebar() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full flex flex-col gap-3 font-satoshi shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] rounded-t-[16px] max-md:p-4 max-md:rounded-b-[16px]"
    >
      {filterItems.map((item: any, index: number) => (
        <AccordionItem key={index} value={item.name}>
          <AccordionTrigger
            className={`text-darkblue md:text-lg font-medium p-[18px] bg-[#F2FAFF] ${
              index == 0 && " md:rounded-t-[16px]"
            } max-md:rounded-[8px\]`}
          >
            {item.name}
          </AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-y-2.5 justify-between items-center">
            {item.countries.map((country: any, index: number) => (
              <div key={index} className="flex gap-2 px-6 items-center py-2.5">
                <input type="radio" className="w-3.5 h-3.5" id={country} />
                <label
                  className="text-xs text-gray font-medium"
                  htmlFor={country}
                >
                  {country}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const FilterTourSection = ({ data, locale }) => {
  const searchParams = useSearchParams();
  const urlTags = searchParams?.getAll("tag");
  const articalTags = urlTags && urlTags.length > 0 ? urlTags : [];

  const { data: tagsToures, mutate } = useSWR("/tagsToures", () =>
    getTourByTags(articalTags)
  );

  useEffect(() => {
    mutate("/blogsTags");
  }, [mutate, searchParams]);

  console.log(tagsToures, "tagsToures");
  return (
    <Container className="md:mb-[90px] mb-[50px]">
      <SectionHeader
        title={data.title?.[locale]}
        subtitle={data.tagline?.[locale]}
        centerLine
      />

      <section className="flex max-xl:flex-col gap-6 md:mt-12 mt-[46px]">
        <div className="w-full max-w-[302px] max-xl:max-w-full">
          <FilterSidebar />
        </div>

        <div className="max-md:mt-10">
          <p className="md:font-medium md:text-gray  md:text-[20px] md:leading-7 font-satoshi">
            Found 148 Tours - Egypt
          </p>

          <ToureTags data={data.tags} locale={locale} />

          <div className="grid xl:grid-cols-3 mt-5 gap-6 lg:grid-cols-2 max-md:-grid-cols-1">
            {Array.isArray(tagsToures) &&
              tagsToures.length > 0 &&
              tagsToures.map((data: any, i: number) => (
                <RootStyle>
                  <TourCard
                    key={i}
                    locale={locale}
                    link={data?.slug.current}
                    label={data?.label?.[locale]}
                    pic={data.hero_section.image?.asset._ref}
                    mobilePic={data.hero_section.image.mobile?.asset._ref}
                    tourType={data.hero_section.title?.[locale]}
                    days={data.overview_card?.duration?.[locale]}
                    cities={data.overview_card.cities}
                    countries={data.overview_card.countries}
                    old_price={
                      data.price_overrides[0].price.discounted_price[locale]
                    }
                    price={data.price_overrides[0].price.initial_price[locale]}
                  />
                </RootStyle>
              ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FilterTourSection;
