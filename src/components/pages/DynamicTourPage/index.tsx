"use client";

import React from "react";
import Layout from "@/components/layout";
import { bannerText } from "../DynamicDestinations";
import dynamic from "next/dynamic";
import OverViewCard from "./Overview";
import {
  accommodationData,
  excludedData,
  flexibleThingsData,
  iternaryData,
  memorableExperiencesData,
  // dummyPics
  overviewData,
  tabsData,
  tourData,
  travelInformationData,
} from "./data";
import CardsSection, {
  data1,
} from "@/components/sections/differnetDeals/CardsSection";
import SectionHeader from "@/components/molecules/secHeader";
import ReviewSection from "@/components/sections/reviews/Reviews";
import { faqSectionData, reviewData } from "../DynamicDestinations/data";
import ItinerarySection from "./ItinarySection";
import AccommdationTypesSection from "./Accomdations";
import PriceList from "./PriceList";

import WhatsIncludedSection from "./InccludedInTour";
import FAQSection from "@/components/sections/faq";
import FlexibleThingsForTour from "@/components/sections/FlexibleThings/ForTourSection";
import { Text } from "@/components/ui/text";
import TravelInformation from "./TraveInformation";

import MemorableExperiencesSection from "./MemoriableExperince";
import AppTabs from "@/components/molecules/AppTabs/AppTabse";
import SummarySection from "./SummarySection";

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
      <React.Suspense>
        <div className="md:px-20 px-0">
          <HeroSection />
        </div>

        <div className="mt-16">
          <OverViewCard data={overviewData} />
        </div>

        <div className="mt-12">
          <AppTabs tabs={tabsData} />
        </div>

        <div className="md:px-20 px-5 mt-[100px]">
          <SummarySection />
        </div>

        <div className="mt-[90px]">
          <MemorableExperiencesSection
            data={memorableExperiencesData}
            locale={language}
          />
        </div>

        <div id="itinerary">
          <ItinerarySection data={iternaryData} locale="en" />
        </div>

        <div>
          <WhatsIncludedSection data={excludedData} />
        </div>

        <div>
          <AccommdationTypesSection data={accommodationData} />
        </div>

        <div className="md:px-20 px-5 md:mt-[50px]">
          <Text variant={"darkblue"} className="text-2xl font-bold">
            Dates & Availability
          </Text>
          <hr className="border-b-[#FFBB0B] mt-[5px] border-b md:border-b-[3px] md:max-w-[117px] w-[89px]" />
          <div className="mt-10">
            <FlexibleThingsForTour
              data={flexibleThingsData}
              locale={language}
            />
          </div>
        </div>

        <div className="mt-[58px]">
          <PriceList data={tourData} slug="1234" locale="en" />
        </div>

        <div id="travel-info">
          <TravelInformation data={travelInformationData} locale={language} />
        </div>

        <div id="reviews">
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
          <FAQSection data={faqSectionData} locale="en" />
        </div>
      </React.Suspense>
    </Layout>
  );
};

export default DynamicTourPage;
