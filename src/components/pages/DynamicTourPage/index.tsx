"use client";

import Layout from "@/components/layout";
import dynamic from "next/dynamic";

import React from "react";
import { TourSectionsMap } from "@/components/sections";
import styled from "styled-components";
import Container from "@/components/molecules/container";
const AppTabs = dynamic(
  () => import("@/components/molecules/AppTabs/AppTabse")
);
import { tabsData } from "./data";

const OverViewCard = dynamic(() => import("./Overview"));
const HeroSection = dynamic(() => import("./HeroSection"));

const Root = styled.div`
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    padding-bottom: 3.5rem;
  }
`;

// move it it global space
function transformArray(inputArray, lang) {
  if (!inputArray || inputArray.length === 0) return [];
  return inputArray.map((item) => {
    return {
      label: item.title[lang] || item.title.en,
      value: item.url,
    };
  });
}

const DynamicTourPage = ({ language, pageData }) => {
  const { layout, data } = pageData || {};

  const breadcrumbs = transformArray(data?.breadcrumb?.breadcrumb, language);

  return (
    <Layout
      globals={layout}
      locale={language}
      maxWidth={false}
      breadcrumbs={breadcrumbs}
      promo_banner={layout?.banner}
    >
      <Container className=" px-0">
        <HeroSection data={data?.hero_section} locale={language} />
      </Container>

      <div className="lg:mt-16">
        <OverViewCard data={data?.overview_card} locale={language} />
      </div>

      <div className="md:mt-12 mt-6">
        <AppTabs tabs={tabsData} />
      </div>
      <Root>
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
      </Root>

      {/* <PriceList data={data.sections[6]} locale={language} slug="" /> */}
    </Layout>
  );
};

export default DynamicTourPage;
