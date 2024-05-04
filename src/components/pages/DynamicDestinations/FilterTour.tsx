import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";
import React, { useEffect } from "react";

import ToureTags from "./touerTags";
import { getTourByTags } from "@/lib/sanity.TourPage";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import TourCard from "@/components/molecules/cards/Card";
import styled from "styled-components";
import FilterSidebar from "./FilterSideebar";

const RootStyle = styled.div`
  a {
    max-width: 100%;
  }
  a > div > img {
    width: 100%;
  }
`;



const FilterTourSection = ({ data, locale }) => {
  const searchParams = useSearchParams();
  const urlTags = searchParams?.getAll("tag");
  const articalTags = urlTags && urlTags.length > 0 ? urlTags : [];

  const { data: tagsToures, mutate } = useSWR("/tagsToures", () =>
    getTourByTags(articalTags)
  );

  console.log(data, "tagsToures");
  useEffect(() => {
    mutate("/blogsTags");
  }, [mutate, searchParams]);

  console.log("DataCountries: ", data);

  // console.log(tagsToures, "tagsToures");
  return (
    <Container className="md:mb-[90px] mb-[50px]">
      <SectionHeader
        title={data.title?.[locale]}
        subtitle={data.tagline?.[locale]}
        centerLine
      />

      <section className="flex max-xl:flex-col gap-6 md:mt-12 mt-[46px]">
        <div className="w-full max-w-[302px] max-xl:max-w-full">
          <FilterSidebar locale={locale} data={data?.destination_tags} />
        </div>

        <div className="max-md:mt-10">
          <p className="md:font-medium md:text-gray  md:text-[20px] md:leading-7 font-satoshi">
            Found 148 Tours - Egypt
          </p>

          <ToureTags data={data.tags} locale={locale} />

          <div className="grid xl:grid-cols-3 md:mt-5 mt-10 gap-6 lg:grid-cols-2 max-md:-grid-cols-1">
            {Array.isArray(tagsToures) &&
              tagsToures.length > 0 &&
              tagsToures.map((data: any, i: number) => (
                <RootStyle key={i}>
                  <TourCard
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
