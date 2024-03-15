"use client";
import Layout from "@/components/layout";
import { FC } from "react";
import { wikiData } from "../DynamicTravelWiki/data";
import HeroSection from "@/components/sections/hero/HeroSection";
import { WikiSectionHeader } from "../DynamicTravelWiki/WikiSection";
import { hrData } from "../Dynamic-Blog-Page/data";

interface GuidePageProps {
  language: string;
  pageData: any;
}

const GuidePage: FC<GuidePageProps> = ({ language, pageData }) => {
  const { layout, data } = pageData || {};
  
  console.log(data, "pageData555");
  const slug = data?.slug?.current;
  
  return (
    <Layout
      globals={layout}
      locale={language}
      breadcrumbs={[
        {
          label: "Egypt",
          value: `/${language}/guide${slug}`,
        },
      ]}
      promo_banner={layout?.banner}
    >
      <HeroSection data={hrData} />
      <div className="md:px-20 px-5 md:mt-[68px] mt-[50px]">
        <WikiSectionHeader wikiData={wikiData} />
      </div>
    </Layout>
  );
};

export default GuidePage;
