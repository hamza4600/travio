"use client";

import Layout from "@/components/layout";
import dynamic from "next/dynamic";

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
import { faqSectionData, reviewData } from "../DynamicDestinations/data";
import CardsSection, {
  data1,
} from "@/components/sections/differnetDeals/CardsSection";
import SectionHeader from "@/components/molecules/secHeader";
import { Text } from "@/components/ui/text";
import AppTabs from "@/components/molecules/AppTabs/AppTabse";

// Dynamic imports
const ReviewSection = dynamic(
  () => import("@/components/sections/reviews/Reviews")
);

const OverViewCard = dynamic(() => import("./Overview"));
const ItinerarySection = dynamic(() => import("./ItinarySection"));
const AccommdationTypesSection = dynamic(() => import("./Accomdations"));
const PriceList = dynamic(() => import("./PriceList"));

const WhatsIncludedSection = dynamic(() => import("./InccludedInTour"));
const FAQSection = dynamic(() => import("@/components/sections/faq"));
const FlexibleThingsForTour = dynamic(
  () => import("@/components/sections/FlexibleThings/ForTourSection")
);

const TravelInformation = dynamic(() => import("./TraveInformation"));

const MemorableExperiencesSection = dynamic(
  () => import("./MemoriableExperince")
);

const SummarySection = dynamic(() => import("./SummarySection"));
const ExcludedInTour = dynamic(() => import("./ExcludedInTour"));

// import TourGallery from "@/components/molecules/TourGallery";

const HeroSection = dynamic(() => import("./HeroSection"));

const DynamicTourPage = ({ language, pageData }) => {
  
  const { layout } = pageData || {};
  
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
      promo_banner={layout?.navbar?.info_banner}
    >
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
    </Layout>
  );
};

export default DynamicTourPage;
