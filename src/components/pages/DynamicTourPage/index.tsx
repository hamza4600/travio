"use client";

import React from "react";
import Layout from "@/components/layout";
import { bannerText } from "../DynamicDestinations";
import dynamic from "next/dynamic";

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
    </Layout>
  );
};

export default DynamicTourPage;
