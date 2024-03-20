"use client";
import Layout from "@/components/layout";
import { wikiTabs } from "./data";
// import WikiSection from "./WikiSection";
import HeroSection from "../DynamicDestinations/HeroSection";

import NewsletterSection from "@/components/sections/NewsletterSection";
import FeatureTourSection from "@/components/sections/featureTour/FeatureTour";
import Sidebar from "./Sidebar";
import Content from "./Content";
// import AppTabs from "@/components/molecules/AppTabs/AppTabse";
import FilterCountry from "./FilterCountry";
import SectionHeader from "@/components/molecules/secHeader";

const DynamicTravelWiki = ({
  language,
  pageData,
  newLetterSection,
}: {
  language: string;
  pageData: any;
  newLetterSection: any;
}) => {
  const { layout, data } = pageData || {};
  const { sections, suggested_tour } = data || {};

  console.log("dataTravelwiki555: ", data);

  return (
    <Layout
      locale={language}
      globals={layout}
      promo_banner={layout?.banner}
      breadcrumbs={[]}
    >
      <HeroSection data={data?.image_hero?.header_section} locale={language} />

      <div className="max-lg:mt-[50px]">
        <SectionHeader
          title={data?.tagline?.[language]}
          subtitle={data?.title?.[language]}
          centerLine
        />
      </div>

      {/* <WikiSection wikiData={wikiData} filterWiki={filterWikiData} /> */}
      <div className="md:mt-12 mt-[50px]">
        <FilterCountry tabs={wikiTabs} />
      </div>
      <div className="flex xl:flex-row flex-col justify-between gap-10 md:px-20 px-5 md:mt-[68px] mt-[50px]">
        <Sidebar sections={sections} locale={language} />
        <Content sections={sections} locale={language} />
      </div>
      <FeatureTourSection data={suggested_tour} locale={language} />

      <div className="mt-20 md:mb-[68px] mb-[52px]">
        <NewsletterSection data={newLetterSection} locale={language} />
      </div>
    </Layout>
  );
};

export default DynamicTravelWiki;
