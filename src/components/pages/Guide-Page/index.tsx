"use client";
import Layout from "@/components/layout";
import { FC } from "react";
// import { wikiData } from "../DynamicTravelWiki/data";
// import HeroSection from "@/components/sections/hero/HeroSection";
// import { WikiSectionHeader } from "../DynamicTravelWiki/WikiSection";
// import { hrData } from "../Dynamic-Blog-Page/data";

import HeroSection from "../DynamicDestinations/HeroSection";

import AppTabs from "@/components/molecules/AppTabs/AppTabse";
import SectionHeader from "@/components/molecules/secHeader";
import InfoSection from "./InfoSection";

interface GuidePageProps {
  language: string;
  pageData: any;
}

const tabs = [
  { name: "Egypt", href: "#" },
  { name: "Jordan", href: "#" },
  { name: "Dubai", href: "#" },
  { name: "Saudi Arabia", href: "#" },
  { name: "Israel", href: "#" },
  { name: "Turkey", href: "#" },
];

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
      <HeroSection data={data.image_hero.header_section} locale={language} />
      <div className="max-md:mt-[40px]">
        <SectionHeader
          title={data?.tagline?.[language]}
          subtitle={data?.title?.[language]}
          centerLine
        />
        <div className="md:mt-[68px] mt-[50px]">
          <AppTabs tabs={tabs} />
        </div>
        <InfoSection data={data?.sections} locale={language} />
      </div>
    </Layout>
  );
};

export default GuidePage;
