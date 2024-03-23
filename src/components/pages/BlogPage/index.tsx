"use client";

import React, { useState } from "react";
import Container from "@/components/molecules/container";
import Layout from "@/components/layout/index";
import ArticleHeroSection from "./ArticleHeroSection";
import BlogContentSection from "./BlogContentSection";
import InThisPost from "./InThisPost";

import BlogReview from "@/components/organisms/BlogReview";
import BlogSidebar from "@/components/organisms/BlogSidebar";
import { articleDummy, articleDummyData, blogRev, postDummy } from "./data";

import "swiper/css";
import "swiper/css/navigation";
import RelatedArticles from "./RelatedArticles";
import { Facebook, Messenger, Twitter, WhatpsApp } from "./style";
import useWindowSize from "@/hooks/useWindows";

export default function CurrentBlogPage({ locale, pageData }) {
  const { layout } = pageData || {};

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
    >
      <Container className="font-satoshi">
        <div className="flex gap-8 bg-white w-full xl:pr-20">
          <div className="w-full max-w-[1000px]">
            <ArticleHeroSection
              data={articleDummyData}
              openSidebar={OpenSidebar}
            />

            <InThisPost data={postDummy} />

            <div className="flex flex-col gap-[10px] items-center justify-center mt-5">
              <p className="lg:hidden text-primary">Share</p>
              <div className="lg:hidden flex items-center justify-center gap-1">
                <Facebook />
                <Twitter />
                <Messenger />
                <WhatpsApp />
              </div>

              <BlogContentSection data={articleDummy} />
            </div>
          </div>

          {showBlogSidebar && isLaptop ? (
            <div
              className={`${"absolute z-30 ml-auto right-5 max-xl:top-[140px] max-lg:top-[100px] max-md:top-[80px]"}`}
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

        <RelatedArticles />
      </Container>
    </Layout>
  );
}
