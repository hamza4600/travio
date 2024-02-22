"use client";

import React from "react";
import Layout from "@/components/layout";
import { bannerText } from "../DynamicDestinations";
import dynamic from "next/dynamic";
import OverViewCard from "./Overview";
import {
  iternaryData,
  // dummyPics
  overviewData,
} from "./data";
import CardsSection, {
  data1,
} from "@/components/sections/differnetDeals/CardsSection";
import SectionHeader from "@/components/molecules/secHeader";
import ReviewSection from "@/components/sections/reviews/Reviews";
import { reviewData } from "../DynamicDestinations/data";
import ItinerarySection from "./ItinarySection";
// import TourGallery from "@/components/molecules/TourGallery";

const HeroSection = dynamic(() => import("./HeroSection"));

const DynamicTourPage = ({ language }) => {
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
        {
          label: "Explore Ancient Wonders",
          value: "/#",
        },
      ]}
      promo_banner={bannerText}
    >
      <div className="md:px-20 px-0">
        <HeroSection />
      </div>

      <div className="mt-16">
        <OverViewCard data={overviewData} />
      </div>

      <div>
        <ReviewSection data={reviewData} locale="en" />
      </div>

      {/* <div>
        <TourGallery data={dummyPics} locale="en"  />
      </div> */}
      <div className="md:px-20 px-5">
        <SectionHeader
          title="OTHER TOURS"
          subtitle="Other tours you make like"
          centerLine
        />
        <CardsSection data={data1} locale={"en"} />
      </div>

      <div>
        <ItinerarySection data={iternaryData} locale="en" />
      </div>
    </Layout>
  );
};

export default DynamicTourPage;
