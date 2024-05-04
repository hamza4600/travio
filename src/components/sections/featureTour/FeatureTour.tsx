import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import { urlFor } from "../../../../sanity/lib/client";
import { SanityFeaturedToursSection } from "../../../../sanity/lib/types";

import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";
import FeatureCard from "./FeatureCard";
import Swiper from "@/components/molecules/Swiper";

export type FeaturedTour = {
  data: SanityFeaturedToursSection;
};

const FeatureTourSection = (FeaturedTour: any) => {
  const { locale } = FeaturedTour;

  return (
    <Container className="text-black w-full mt-[50px] md:mb-[90px] mb:[50px]">
      <SectionHeader
        subtitle={FeaturedTour?.data.tagline?.en}
        title={FeaturedTour?.data.title?.en}
        centerLine
      />
      {FeaturedTour?.data.tour_cards && (
        <div className="h-fit relative md:mt-12 mt-[30px]">
          <Swiper
            className={"gap-6 pb-3"}
            length={FeaturedTour?.data?.tour_cards.length ?? 0}
            scrollCount={4}
          >
            {Array.isArray(FeaturedTour?.data?.tour_cards) &&
              FeaturedTour?.data?.tour_cards.length > 0 &&
              FeaturedTour?.data?.tour_cards?.map((item: any, i: number) => (
                <FeatureCard
                  key={i}
                  locale={locale}
                  link={item?.content?.slug?.current}
                  label={item?.badge_content?.[locale]}
                  pic={item?.content?.hero_section?.image.asset._ref}
                  mobilePic={
                    item?.content?.hero_section?.image.mobile.asset._ref
                  }
                  tourType={item?.content?.hero_section?.title?.[locale]}
                  days={item?.content?.overview_card?.duration?.[locale]}
                  cities={item?.content?.overview_card?.cities}
                  countries={item?.content?.overview_card?.countries}
                  old_price={
                    item?.content?.price_overrides[0]?.price?.initial_price[
                      locale
                    ]
                  }
                  price={
                    item?.content?.price_overrides[0]?.price?.initial_price[
                      locale
                    ]
                  }
                />
              ))}
          </Swiper>
          <div className=" absolute hidden md:block w-[50px] top-0 p-3 h-full z-[100] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.5)] to-white right-0" />
        </div>
      )}
    </Container>
  );
};

export default FeatureTourSection;
