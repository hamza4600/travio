"use client";
import React from "react";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./HeroSection"));

const FlexibleThings = dynamic(() => import("./FlexibleThings"));
const CardsSection = dynamic(
  () => import("../../sections/differnetDeals/CardsSection")
);
const GetEarlyNews = dynamic(() => import("@/components/sections/form/Form"));
const FAQSection = dynamic(() => import("@/components/sections/faq"));
const TourGallery = dynamic(() => import("@/components/molecules/TourGallery"));
const FeatureSection = dynamic(() => import("./FeatureSection"));
import SectionHeader from "@/components/molecules/secHeader";
const TravlerReviews = dynamic(
  () => import("@/components/sections/HappyTravelers")
);
const Destination = dynamic(() => import("./Destination"));
const BlogSection = dynamic(() => import("../../sections/blogs/BlogSection"));
const OtherTours = dynamic(() => import("./OtherTours"));
const Popup = dynamic(() => import("@/components/molecules/Popup"));

import {
  // featureData,
  // data,
  // tourData,
  // reviews,
  // destinations,
  // articles,
  toursPopular,
  attractions,
} from "./data";
import { blogSectionData } from "../DynamicDestinations/data";

const HomePage = ({ pageData, language }) => {

  const { layout, pageData: SECTIONS_DATA } = pageData || {};

  const {
    // promo_banner,
    sections: SECTIONS,
    // slug
  } = SECTIONS_DATA || {};

  const {
    [0]: HERO_SECTION,
    [1]: FEATURE_SECTION_1,
    [2]: DEALS_SECTION,
    [3]: GALLERY_SECTION,
    [4]: FEATURE_SECTION_2,
    [5]: DESTINATIONS_SECTION,
    [6]: TESTIMONIAL_SECTION,
    // [7]: FEATURED_BLOGS_SECTION,
    [8]: FAQ_SECTION,
    // [9]: INDEX_SECTION,
  } = SECTIONS || {};

  return (
    <Layout globals={layout} locale={language} breadcrumbs={[]}>
      <HeroSection
        data={HERO_SECTION}
        banner={layout?.navbar?.info_banner}
        locale={language}
      />
      <Popup />

      <div className="px-20 max-xl:px-0">
        <FlexibleThings data={FEATURE_SECTION_1} locale={language} />
      </div>

      <div className="px-20 max-lg:px-5 mt-[68px]">
        <SectionHeader title={"Cheap Trips"} subtitle={"Hot Travel Deals"} />
        <CardsSection data={DEALS_SECTION} locale={language} />
      </div>

      <div className="mt-[84px]">
        <TourGallery data={GALLERY_SECTION} locale={language} />
      </div>

      <div className="lg:px-20 ">
        <FeatureSection data={FEATURE_SECTION_2} locale={language} />
      </div>

      <div className="px-20 max-md:px-5 md:mt-20 mt-[60px]">
        <Destination data={DESTINATIONS_SECTION} locale={language} />
      </div>

      <div className="md:mt-[84px] mt-[50px]">
        <TravlerReviews data={TESTIMONIAL_SECTION} locale={language} />
      </div>

      <div className="px-20 max-lg:px-5 md:mt-[84px] mt-[50px]">
        <BlogSection data={blogSectionData} locale={language} />
      </div>

      <div className="mt-20">
        <GetEarlyNews
          title={"Join Our Travel Community and Unlock Exclusive Deals!"}
          description={
            "Be the first to know about our latest travel deals, special promotions, and insider tips"
          }
        />
      </div>

      <FAQSection data={FAQ_SECTION} locale={language} />

      <div className="px-20 max-md:px-5">
        <OtherTours data={toursPopular} />
        <OtherTours data={attractions} />
      </div>
    </Layout>
  );
};

export default HomePage;
