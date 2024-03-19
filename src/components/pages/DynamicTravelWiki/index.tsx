"use client";
import Layout from "@/components/layout";
import { filterWikiData, wikiData } from "./data";
import WikiSection from "./WikiSection";
import HeroSection from "../DynamicDestinations/HeroSection";

import NewsletterSection from "@/components/sections/NewsletterSection";
import FeatureTourSection from "@/components/sections/featureTour/FeatureTour";

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

  console.log("dataTravelwiki555: ", sections);

  return (
    <Layout
      locale={language}
      globals={layout}
      promo_banner={layout?.banner}
      breadcrumbs={[]}
    >
      <HeroSection data={data?.image_hero?.header_section} locale={language} />
      <WikiSection wikiData={wikiData} filterWiki={filterWikiData} />

      <FeatureTourSection data={suggested_tour} locale={language} />

      <div className="mt-20 md:mb-[68px] mb-[52px]">
        <NewsletterSection data={newLetterSection} locale={language} />
      </div>
    </Layout>
  );
};

export default DynamicTravelWiki;
