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
      <HeroSection data={data.hero_section} locale={language} />

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
      {/* <div className="lg:px-20 px-0">
        <HeroSection />
      </div>

      <div className="lg:mt-16">
        <OverViewCard data={overviewData} />
      </div>

      <div className="md:mt-12 mt-6">
        <AppTabs tabs={tabsData} />
      </div>

      <div className="lg:px-20 md:mt-[50px] mt-0">
        <SummarySection />
      </div>

      <div className="lg:mt-[90px] md:mt-[60px] mt-[50px]">
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
        <div className="md:w-[117px] w-[89px] md:mt-1 border-[#FFBB0B] text-yellow rounded-full md:rounded-[3px] md:border-b-[3px] border-b-[1px]" />
        <div className="mt-10">
          <FlexibleThingsForTour data={flexibleThingsData} locale={language} />
        </div>
      </div>

      <div className="lg:mt-[78px] mt-[50px] md:px-20 px-0">
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
      </div> */}
    </Layout>
  );
};
{
  /* <div>
            <TourGallery data={dummyPics} locale="en"  />
          </div> */
}

export default DynamicTourPage;
