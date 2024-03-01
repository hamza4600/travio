"use client";
import React from "react";
import Layout from "@/components/layout";
import { bannerText } from "../DynamicDestinations";
import HeroSection from "./HeroSection";
import { filterWikiData, heroData, wikiData } from "./data";
import WikiSection from "./WikiSection";

import SuggestedTour from "./SuggestedTour";
import GetEarlyNews from "@/components/sections/form/Form";

const DynamicTravelWiki = ({ language, pageData }: { language: string ,pageData : any  }) => {
  
  const { layout } = pageData || {};
  
  return (
    <Layout
      locale={language}
      globals={layout}
      breadcrumbs={[
        {
          label: "",
          value: "/",
        },
      ]}
      promo_banner={bannerText}
    >
      <HeroSection data={heroData} />

      <div className="">
        <WikiSection wikiData={wikiData} filterWiki={filterWikiData} />
      </div>

      <div className="md:px-20 px-5 md:mt-[68px] mt-[50px]">
        <SuggestedTour />
      </div>

      <div className="mt-20 md:mb-[68px] mb-[52px]">
        <GetEarlyNews
          title={"Join Our Travel Community and Unlock Exclusive Deals!"}
          description={
            "Be the first to know about our latest travel deals, special promotions, and insider tips"
          }
        />
      </div>
    </Layout>
  );
};

export default DynamicTravelWiki;
