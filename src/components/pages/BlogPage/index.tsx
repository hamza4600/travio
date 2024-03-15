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

export default function CurrentBlogPage({ locale }) {
  return (
    <Layout breadcrumbs={[]} locale={locale} promo_banner={""}>
      <Container className="font-satoshi">
        <div className="flex bg-white w-full md:pr-20">
          <div className="">
            <ArticleHeroSection data={articleDummyData} />
            <InThisPost data={postDummy} />

            <BlogContentSection data={articleDummy} />
          </div>
          <div className="max-xl:hidden">
            <BlogSidebar />
          </div>
        </div>
        <div className="px-5">
          <BlogReview data={blogRev} />
        </div>

        <RelatedArticles />
      </Container>
    </Layout>
  );
}
