"use client";

import Layout from "@/components/layout";
import dynamic from "next/dynamic";

import React from "react";
import { TourSectionsMap } from "@/components/sections";

// Dynamic imports
// const ReviewSection = dynamic(
//   () => import("@/components/sections/reviews/Reviews")
// );

const OverViewCard = dynamic(() => import("./Overview"));
// import PriceList from "./PriceList";

// import TourGallery from "@/components/molecules/TourGallery";

const HeroSection = dynamic(() => import("./HeroSection"));

const DynamicTourPage = ({ language, pageData }) => {
  const { layout, data } = pageData || {};

  console.log(data, "tour");
  return (
    <Layout
      globals={layout}
      locale={language}
      breadcrumbs={[
        {
          label: "Destinations",
          value: "/",
        },
        {
          label: "Egypt",
          value: "/egypt",
        },
        {
          label: "Explore Ancient Wonders",
          value: "/#",
        },
      ]}
      promo_banner={layout?.banner}
    >
      <HeroSection data={data?.hero_section} locale={language} />

      <div className="lg:mt-16">
        <OverViewCard data={data?.overview_card} locale={language} />
      </div>

      {/* <div className="md:mt-12 mt-6">
        <AppTabs tabs={tabsData} />
      </div> */}

      {data?.sections?.map((section) => {
        const Component = TourSectionsMap[section?._type];
        return (
          <React.Fragment key={section._key}>
            {Component &&
              React.createElement(Component, {
                data: section,
                slug: data.slug,
                locale: language,
              })}
          </React.Fragment>
        );
      })}
      {/* <PriceList data={data.sections[6]} locale={language} slug="" /> */}
    </Layout>
  );
};

export default DynamicTourPage;
