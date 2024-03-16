"use client";

import React from "react";
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

export default function CurrentBlogPage({ locale, pageData }) {
  const { layout } = pageData || {};

  // const [showBlogSidebar, setShowBlogSidebar] = useState(false);

  // function OpenSidebar() {
  //   setShowBlogSidebar(!showBlogSidebar);
  // }

  return (
    <Layout
      breadcrumbs={[]}
      locale={locale}
      globals={layout}
      promo_banner={layout?.banner}
    >
      <Container className="font-satoshi">
        <div className="flex bg-white w-full xl:pr-20">
          <div className="">
            <ArticleHeroSection
              data={articleDummyData}
              // openSidebar={OpenSidebar}
            />
            <InThisPost data={postDummy} />

            <BlogContentSection data={articleDummy} />
          </div>

          {/* {showBlogSidebar && (
            <div
              className={`${!showBlogSidebar && "max-xl:hidden z-20"}  pr-20`}
            >
              <BlogSidebar />
            </div>
          )} */}
          <div className={"max-xl:hidden z-20  pr-20"}>
            <BlogSidebar />
          </div>
        </div>
        <div>
          <BlogReview data={blogRev} />
        </div>

        <RelatedArticles />
      </Container>
    </Layout>
  );
}
