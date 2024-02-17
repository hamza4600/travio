"use client";
import React from "react";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import("./HeroSection"));

const FlexibleThings = dynamic(() => import("./FlexibleThings"));
const CardsSection = dynamic(() => import("./CardsSection"));
const GetEarlyNews = dynamic(() => import("@/components/sections/form/Form"));
const FAQSection = dynamic(() => import("@/components/sections/faq"));
const TourGallery = dynamic(() => import("@/components/molecules/TourGallery"));
const FeatureSection = dynamic(() => import("./FeatureSection"));
const TravlerReviews = dynamic(
  () => import("@/components/sections/HappyTravelers")
);
const Destination = dynamic(() => import("./Destination"));
const BlogSection = dynamic(() => import("./BlogSection"));
const OtherTours = dynamic(() => import("./OtherTours"));

import {
  featureData,
  data,
  tourData,
  reviews,
  destinations,
  articles,
  toursPopular,
  attractions,
} from "./data";

const HomePage = ({pageData}) => {
  console.log(pageData , "pageData");
  return (
    <Layout locale="en" breadcrumbs={[]}>
      <HeroSection />

      <div className="px-20 max-xl:px-0">
        <FlexibleThings />
      </div>

      <div className="px-20 max-lg:px-5 mt-[68px]">
        <CardsSection />
      </div>

      <div className="mt-[84px]">
        <TourGallery data={tourData} />
      </div>

      <div className="lg:px-20 ">
        <FeatureSection data={featureData} />
      </div>

      <div className="px-20 max-md:px-5 md:mt-20 mt-[60px]">
        <Destination data={destinations} />
      </div>

      <div className="md:mt-[84px] mt-[50px]">
        <TravlerReviews data={reviews} />
      </div>

      <div className="px-20 max-lg:px-5 md:mt-[84px] mt-[50px]">
        <BlogSection data={articles} />
      </div>

      <div className="mt-20">
        <GetEarlyNews
          title={"Join Our Travel Community and Unlock Exclusive Deals!"}
          description={
            "Be the first to know about our latest travel deals, special promotions, and insider tips"
          }
        />
      </div>

      <FAQSection data={data} />

      <div className="px-20 max-md:px-5">
        <OtherTours data={toursPopular} />
        <OtherTours data={attractions} />
      </div>
    </Layout>
  );
};

export default HomePage;
