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
// import RelatedArticles from "./RelatedArticles";
import {
  FacebookShare,
  TwitterShare,
  LinkedinShare,
  FacebookMessengerShare,
} from "react-share-kit";
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
  console.log("dataBlogPage: ", data);
  const [showBlogSidebar, setShowBlogSidebar] = useState(false);
  const windows = useWindowSize();
  const isLaptop = windows.width < 1284;

  function OpenSidebar() {
    setShowBlogSidebar(!showBlogSidebar);
  }

  return (
    <Layout
      breadcrumbs={[]}
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
              <p className="lg:hidden text-primary">Share</p>
              <div className="lg:hidden flex items-center justify-center gap-1">
                <FacebookShare
                  url={`https://travio-seven.vercel.app/en/blog${data?.slug?.current}`}
                  size={25}
                  borderRadius={50}
                />

                <FacebookMessengerShare
                  url={`https://travio-seven.vercel.app/en/blog${data?.slug?.current}`}
                  size={25}
                  borderRadius={50}
                  appId={"dmm4kj9djk203k4liuf994p"}
                />

                <LinkedinShare
                  url={`https://travio-seven.vercel.app/en/blog${data?.slug?.current}`}
                  size={25}
                  borderRadius={71}
                />

                <TwitterShare
                  url={`https://travio-seven.vercel.app/en/blog${data?.slug?.current}`}
                  size={25}
                  borderRadius={71}
                />
              </div>

              <BlogContentSection
                actualData={data?.subsections}
                locale={locale}
              />
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

        <div className="w-full max-w-[1440px] mx-auto max-md:mt-[50px]">
          <FeatureBlogs data={data?.related_articles} locale={locale} />
        </div>

        <ArticalTestinomial locale={locale} />

        <NewsletterSection data={newsLetterSection} locale={locale} />
      </div>
    </Layout>
  );
}
