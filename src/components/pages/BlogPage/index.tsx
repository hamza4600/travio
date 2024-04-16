"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/index";
import ArticleHeroSection from "./ArticleHeroSection";
import BlogContentSection from "./BlogContentSection";
import InThisPost from "./InThisPost";

import BlogReview from "@/components/organisms/BlogReview";
import BlogSidebar from "@/components/organisms/BlogSidebar";
import { articleDummy, blogRev, postDummy } from "./data";

import "swiper/css";
import "swiper/css/navigation";
import RelatedArticles from "./RelatedArticles";
import {
  FacebookShare,
  TwitterShare,
  LinkedinShare,
  FacebookMessengerShare,
} from "react-share-kit";
import useWindowSize from "@/hooks/useWindows";
import FeatureTourSection from "@/components/sections/featureTour/FeatureTour";
import ArticalTestinomial from "./Testimonila";

export default function CurrentBlogPage({ locale, pageData }) {
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
      // maxWidth
    >
      <div className="font-satoshi">
        <div className="flex md:gap-8 bg-white w-full xl:pr-20">
          <div className="w-full max-w-[1000px]">
            <ArticleHeroSection
              title={data?.title}
              image={data?.cover_image}
              introduction={data?.introduction}
              time={data?.time}
              locale={locale}
              openSidebar={OpenSidebar}
            />

            <InThisPost data={postDummy} />

            <div className="flex flex-col gap-[10px] items-center justify-center mt-5">
              <p className="lg:hidden text-primary">Share</p>
              <div className="lg:hidden flex items-center justify-center gap-1">
                <FacebookShare url="#" size={25} borderRadius={50} />

                <FacebookMessengerShare
                  url="#"
                  size={25}
                  borderRadius={50}
                  appId={"dmm4kj9djk203k4liuf994p"}
                />

                <LinkedinShare url="#" size={25} borderRadius={71} />

                <TwitterShare url="#" size={25} borderRadius={71} />
              </div>

              <BlogContentSection data={articleDummy} />
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
              <BlogSidebar />
            </div>
          ) : (
            <div className={"max-xl:hidden z-20"}>
              <BlogSidebar />
            </div>
          )}
        </div>
        <div>
          <BlogReview data={blogRev} />
        </div>

        <FeatureTourSection data={data?.suggested_tour} locale={locale} />

        <RelatedArticles />
          <ArticalTestinomial />
      </div>
    </Layout>
  );
}
