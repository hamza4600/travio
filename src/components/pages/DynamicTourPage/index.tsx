"use client";

import React from "react";
import Layout from "@/components/layout";
import { bannerText } from "../DynamicDestinations";
import dynamic from "next/dynamic";
import OverViewCard from "./Overview";
import {
  accommodationData,
  excData,
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
import ExcludedInTour from "./ExcludedInTour";

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
        <div className="lg:px-20 px-0">
          <HeroSection />
        </div>

        <div className="lg:mt-16">
          <OverViewCard data={overviewData} />
        </div>

        <div className="md:mt-12 mt-10">
          <AppTabs tabs={tabsData} />
        </div>

        <div className="lg:px-20 mt-[100px]">
          <SummarySection />
        </div>

        <div className="lg:mt-[90px] mt-[60px]">
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

        <div className="md:px-20 px-5">
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

        <div className="mt-[78px]">
          <PriceList data={tourData} slug="1234" locale="en" />
        </div>

        <div className="lg:px-20 px-5 lg:mt-[78px] mt-[50px]">
          <ExcludedInTour data={excData} locale={language} />
        </div>

        <div className="mt-[50px] md:mt-[88px]">
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

        <div className="max-md:mt-[50px]">
          <FAQSection data={faqSectionData} locale="en" />
        </div>
      </React.Suspense>
    </Layout>
  );
};

export default DynamicTourPage;
