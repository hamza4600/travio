"use client";
import Layout from "@/components/layout";
import { FC } from "react";

import HeroSection from "../DynamicDestinations/HeroSection";

// import AppTabs from "@/components/molecules/AppTabs/AppTabse";
import SectionHeader from "@/components/molecules/secHeader";
import InfoSection from "./InfoSection";
import Container from "@/components/molecules/container";
import FilterCountry from "../DynamicTravelWiki/FilterCountry";

interface GuidePageProps {
  language: string;
  pageData: any;
}

const GuidePage: FC<GuidePageProps> = ({ language, pageData }) => {
  const { layout, data, guideList } = pageData || {};

  const slug = data?.slug?.current;

  console.log("Data666: ", data)

  return (
    <Layout
      globals={layout}
      locale={language}
      breadcrumbs={[
        {
          label: "Guide",
          value: `/`
        },
        {
          label: `${data?.tab_title?.[language]}`,
          value: `/guide${slug}`,
        },
      ]}
      promo_banner={layout?.banner}
      maxWidth={false}
    >
      <Container className="px-0">
        <HeroSection
          data={data.image_hero.header_section}
          locale={language}
        />
      </Container>
      <div className="max-md:mt-[40px]">
        <SectionHeader
          title={data?.tagline?.[language]}
          subtitle={data?.title?.[language]}
          centerLine
        />
        <div className="md:mt-[68px] mt-[50px]">
          <FilterCountry tabs={guideList} locale={language} pageType="guide" />
        </div>
        
        <Container className=" px-0">
          <InfoSection data={data?.sections} locale={language} />
        </Container>
      </div>
    </Layout>
  );
};

export default GuidePage;
