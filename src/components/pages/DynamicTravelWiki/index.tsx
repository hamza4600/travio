"use client";
import React from "react";
import Layout from "@/components/layout";
import { bannerText } from "../DynamicDestinations";
import HeroSection from "./HeroSection";
import { filterWikiData, heroData, wikiData, wikiTabs } from "./data";
import WikiSection from "./WikiSection";
import SectionHeader from "@/components/molecules/secHeader";
import FilterCountry from "./FilterCountry";
import SuggestedTour from "./SuggestedTour";
import GetEarlyNews from "@/components/sections/form/Form";

const DynamicTravelWiki = ({ language }: { language: string }) => {
  return (
    <Layout
      locale={language}
      breadcrumbs={[
        {
          label: "",
          value: "/",
        },
      ]}
      promo_banner={bannerText}
    >
      <HeroSection data={heroData} />

      <div className="md:mt-12 mt-[50px]">
        <SectionHeader
          title={wikiData.tagline}
          subtitle={wikiData.title}
          centerLine
        />
      </div>

      <div className="md:mt-[68px] mt-[50px]">
        <FilterCountry tabs={wikiTabs} />
      </div>

      <div className="md:px-20 px-5">
        <WikiSection wikiData={wikiData} filterWiki={filterWikiData} />
      </div>

      <div className="md:px-20 px-5 md:mt-[68px] mt-[50px]">
        <SuggestedTour />
      </div>

      <div className="mt-20">
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
