"use client";
import React from "react";
import Layout from "@/components/layout";
// import Breadcrumbs from "@/components/atom/Breadcrumbs";
import HeroSection from "./HeroSection";
import FlexibleThings from "./FlexibleThings";
import CardsSection from "./CardsSection";
import GetEarlyNews from "@/components/molecules/form/Form";
import FAQSection from "@/components/molecules/faq";

const data = [
  {
    question: "Can I change or cancel my Tour?",
    answer:
      "All orders are final once they have been processed through the checkout. Unfortunately, no further changes can be made to your order once processed including and not limited to; removing and/or adding items to your order, combining orders or cancelling your order.",
  },
  {
    question: "Can I change or cancel my Tour?",
    answer:
      "All orders are final once they have been processed through the checkout. Unfortunately, no further changes can be made to your order once processed including and not limited to; removing and/or adding items to your order, combining orders or cancelling your order.",
  },
  {
    question: "Can I change or cancel my Tour?",
    answer:
      "All orders are final once they have been processed through the checkout. Unfortunately, no further changes can be made to your order once processed including and not limited to; removing and/or adding items to your order, combining orders or cancelling your order.",
  },
];

const HomePage = () => {
  return (
    <Layout locale="en" breadcrumbs={[]}>
      <HeroSection />
      <div className="px-20 max-lg:px-0">
        <FlexibleThings />
      </div>
      <div className="px-20 max-lg:px-5">
        <CardsSection />
      </div>
      <div>
        <GetEarlyNews
          title={"Join Our Travel Community and Unlock Exclusive Deals!"}
          description={
            "Be the first to know about our latest travel deals, special promotions, and insider tips"
          }
        />
      </div>
      <FAQSection data={data} />
    </Layout>
  );
};

export default HomePage;
