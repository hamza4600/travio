"use client";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";
import React from "react";

const HeroSection = dynamic(() => import("./HeroSection"));
import {
  countryFactsData,
  // blogSectionData,
  dataTop,
  faqSectionData,
  heroData,
  reviewData,
} from "./data";
const CardsSection = dynamic(
  () => import("@/components/sections/differnetDeals/CardsSection")
);
const ReviewSection = dynamic(
  () => import("@/components/sections/reviews/Reviews")
);

import SectionHeader from "@/components/molecules/secHeader";
import { data1 } from "@/components/sections/differnetDeals/CardsSection";
// import BlogSection from "@/components/sections/blogs/BlogSection";
import FAQSection from "@/components/sections/faq";
// import BlogSection from "@/components/sections/blogs/BlogSection";
const TopThingsToDo = dynamic(() => import("./TopThings"));
const CountryFacts = dynamic(() => import("./CountryFacts"));

const banner = {
  text: "More summer for less. Save up to 20% off selected trips*.",
  link: {
    text: "Book now",
  },
};

const DynamicDestionations = ({ language }) => {
  return (
    <Layout
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
      ]}
      promo_banner={banner}
    >
      <HeroSection data={heroData} locale={language} />;
      <div className="md:px-20 px-5 md:mt-12 mt-[50px]">
        <SectionHeader
          subtitle="Top Tours in Egypt"
          title="Top tours"
          centerLine
        />
        <CardsSection data={data1} locale={language} />
      </div>
      <div>
        <ReviewSection data={reviewData} locale={language} />
      </div>
      {/* <div className="md:px-20 px-5 md:mt-[70px] mt-[50px]">
        <BlogSection data={blogSectionData} locale={language} />
    </div> */}
      {/* <div className="md:px-20 px-5 md:mt-[90px] mt-[60px]"> */}
      <CountryFacts data={countryFactsData} locale={language} />
      {/* </div> */}
      <div className="md:px-20 px-5 md:mt-[74px] mt-[50px]">
        <TopThingsToDo data={dataTop} />
      </div>
      {/* <div className="md:px-20 px-5 md:mt-[90px] mt-[60px]"> */}
      <FAQSection data={faqSectionData} locale={language} />
      {/* </div> */}
    </Layout>
  );
};

export default DynamicDestionations;
