"use client";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./HeroSection"));
import {
  blogSectionData,
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

import { data1 } from "@/components/sections/differnetDeals/CardsSection";

import FAQSection from "@/components/sections/faq";
const BlogSection = dynamic(
  () => import("@/components/sections/blogs/BlogSection")
);

const TopThingsToDo = dynamic(() => import("./TopThings"));
const CountryFacts = dynamic(() => import("./CountryFacts"));
import ContactSection from "./ContactSection";

export const bannerText = {
  text: "More summer for less. Save up to 20% off selected trips*.",
  link: {
    text: "Book now",
  },
};

const DynamicDestionations = ({ language, pageData }) => {
  
  const { layout, data } = pageData;
  console.log(data , "555555");

  return (
    <Layout
    locale={`${language}`}
    promo_banner={layout.navbar.info_banner}
    globals={layout}
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
      // promo_banner={bannerText}
    >
      <HeroSection data={heroData} locale={language} />;
      <div className="md:px-20 px-5 md:mt-12 mt-[50px]">
        <CardsSection data={data1} locale={language} />
      </div>
      <div>
        <ReviewSection data={reviewData} locale={language} />
      </div>
      <CountryFacts data={countryFactsData} locale={language} />
      <div className="md:px-20 px-5 md:mt-[74px] mt-[50px]">
        <TopThingsToDo data={dataTop} />
      </div>
      <FAQSection data={faqSectionData} locale={language} />
      <div className="md:px-20 px-5">
        <BlogSection data={blogSectionData} locale={language} />
      </div>
      <div className="px-0 mb-5 md:px-20 md:mb-[68px] md:mt-20 mt-[120px]">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default DynamicDestionations;
