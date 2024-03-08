"use client";
import React from "react";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";
import Slicer from "../../../../sanity/slicer";

const Popup = dynamic(() => import("@/components/molecules/Popup"));

import "react-photo-view/dist/react-photo-view.css";
import { SectionMap } from "@/components/sections";
import NewsletterSection from "@/components/sections/NewsletterSection";

const HomePage = ({ pageData, locale }) => {
  const {
    layout,
    // pageData: SECTIONS_DATA
  } = pageData || {};

  return (
    <Layout
      breadcrumbs={[]}
      locale={locale}
      promo_banner={layout?.banner}
      globals={layout}
    >
      <Popup />

      <Slicer
        locale={locale}
        components={SectionMap}
        sections={pageData?.pageData?.sections}
      />
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;
