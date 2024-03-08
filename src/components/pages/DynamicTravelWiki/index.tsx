"use client";
import Layout from "@/components/layout";
import { bannerText } from "../DynamicDestinations";
import HeroSection from "./HeroSection";
import { filterWikiData, heroData, wikiData } from "./data";
import WikiSection from "./WikiSection";

import SuggestedTour from "./SuggestedTour";
// import GetEarlyNews from "@/components/sections/form/Form";
import NewsletterSection from "@/components/sections/NewsletterSection";

const dummyNewsData = {
  subtitle: {
    en: "Be the first to know about our latest travel deals, special promotions, and insider tips",
    es: "Be the first to know about our latest travel deals, special promotions, and insider tips",
    por: "Be the first to know about our latest travel deals, special promotions, and insider tips",
  },
  title: {
    en: "Join Our Travel Community and Unlock Exclusive Deals!",
    es: "Join Our Travel Community and Unlock Exclusive Deals!",
    por: "Join Our Travel Community and Unlock Exclusive Deals!",
  },
};

const DynamicTravelWiki = ({
  language,
  pageData,
}: {
  language: string;
  pageData: any;
}) => {
  const { layout } = pageData || {};

  console.log("dataTravelwiki: ", pageData);

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

      <WikiSection wikiData={wikiData} filterWiki={filterWikiData} />

      <div className="md:px-20 px-5 md:mt-[68px] mt-[50px]">
        <SuggestedTour />
      </div>

      <div className="mt-20 md:mb-[68px] mb-[52px]">
        {/* <GetEarlyNews /> */}
        <NewsletterSection data={dummyNewsData} locale={language} />
      </div>
    </Layout>
  );
};

export default DynamicTravelWiki;
