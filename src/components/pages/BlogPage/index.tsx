"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/index";
import ArticleHeroSection from "./ArticleHeroSection";
import BlogContentSection from "./BlogContentSection";
import InThisPost from "./InThisPost";

import BlogReview from "@/components/organisms/BlogReview";
import BlogSidebar from "@/components/organisms/BlogSidebar";

import "swiper/css";
import "swiper/css/navigation";
import SharingOpt from "@/components/atom/SharingOpt"
import useWindowSize from "@/hooks/useWindows";
import FeatureTourSection from "@/components/sections/featureTour/FeatureTour";
import ArticalTestinomial from "./Testimonila";
import NewsletterSection from "@/components/sections/NewsletterSection";
import FeatureBlogs from "../AllBlogs-Page/FeatureBlogs";

export default function CurrentBlogPage({
  locale,
  pageData,
  newsLetterSection,
}) {
  const { layout, data } = pageData || {};
  // console.log("dataBlogPage: ", data);
  const [showBlogSidebar, setShowBlogSidebar] = useState(false);
  const windows = useWindowSize();
  const isLaptop = windows.width < 1284;

  function OpenSidebar() {
    setShowBlogSidebar(!showBlogSidebar);
  }

  return (
    <Layout
      breadcrumbs={[
        {
          value: "/blogs",
          label: "Blog",
        },
        {
          value: "/egypt-blog",
          label: "8 best things to do in Cairo",
        },
      ]}
      locale={locale}
      globals={layout}
      promo_banner={layout?.banner}
      maxWidth={false}
    >
      <div className="font-satoshi">
        <div className="flex md:gap-8 bg-white w-full max-w-[1440px] mx-auto">
          <div className="w-full max-w-[1000px]">
            <ArticleHeroSection
              title={data?.title}
              image={data?.cover_image}
              author={data?.auther?.name?.[locale]}
              introduction={data?.introduction}
              time={data?.time}
              locale={locale}
              openSidebar={OpenSidebar}
              slug={data?.slug?.current}
            />

            <InThisPost data={data?.subsections} locale={locale} />

            <div className="flex flex-col gap-[10px] items-center justify-center mt-5">
              <p className="lg:hidden text-primary text-[12px] leading-3">Share</p>
              <div className="lg:hidden flex items-center justify-center gap-1">
                <SharingOpt  url={`https://travio-seven.vercel.app/en/blog${data?.slug?.current}`} appId="dmm4kj9djk203k4liuf994p" />
              </div>

              <BlogContentSection
                actualData={data?.subsections}
                locale={locale}
              />

              <div className="lg:hidden flex items-center justify-center gap-1">
                <SharingOpt  url={`https://travio-seven.vercel.app/en/blog${data?.slug?.current}`} />
              </div>
            </div>
          </div>

          {showBlogSidebar && isLaptop ? (
            <div
              className={`absolute z-30 ml-auto right-0 max-xl:top-[140px] max-lg:top-[100px] max-md:top-[80px] sidebar  ${
                showBlogSidebar
                  ? "transition ease-in-out delay-150 translate-x-1"
                  : "transition-transform translate-x-full"
              }`}
            >
              <BlogSidebar data={data?.sidebar} locale={locale} />
            </div>
          ) : (
            <div className={"max-xl:hidden z-20"}>
              <BlogSidebar data={data?.sidebar} locale={locale} />
            </div>
          )}
        </div>

        <div>
          <BlogReview data={data?.auther} locale={locale} />
        </div>

        <FeatureTourSection data={data?.suggested_tour} locale={locale} />

        <div className="w-full max-w-[1440px] mx-auto max-md:mt-[50px] bg-transparent">
          <FeatureBlogs data={data?.related_articles} locale={locale} />
        </div>

        <ArticalTestinomial locale={locale} />

        <NewsletterSection data={newsLetterSection} locale={locale} />
      </div>
    </Layout>
  );
}
