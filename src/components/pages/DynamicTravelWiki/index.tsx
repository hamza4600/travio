"use client";
import Layout from "@/components/layout";
import { filterWikiData, wikiData } from "./data";
import WikiSection from "./WikiSection";
import HeroSection from "../DynamicDestinations/HeroSection";

// import SuggestedTour from "./SuggestedTour";
import NewsletterSection from "@/components/sections/NewsletterSection";

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
  // const { sections, suggested_tours } = data || {};

  console.log("dataTravelwiki555: ", data);

  return (
    <Layout
      locale={language}
      globals={layout}
      promo_banner={layout?.banner}
      breadcrumbs={[]}
    >
      <HeroSection data={data?.image_hero?.header_section} locale={language} />
      <WikiSection wikiData={wikiData} filterWiki={filterWikiData} />

      {/* <div className="md:px-20 px-5 md:mt-[68px] mt-[50px]">
        <SuggestedTour />
      </div> */}

      <div className="mt-20 md:mb-[68px] mb-[52px]">
        <NewsletterSection data={newLetterSection} locale={language} />
      </div>
    </Layout>
  );
};

export default DynamicTravelWiki;
