"use client";
import React from "react";
// import Image from "next/image";

// import { urlFor } from "../../../../sanity/lib/client";
// import Slicer from "../../../../sanity/slicer";

// import {
//   SanityArticle,
//   SanityBlogPage,
//   SanityDestinationPage,
//   SanityGlobals,
//   SanityImageHeaderSection,
//   SanityLocaleString,
//   SanityPhoto,
//   SanityTag,
// } from "../../../../sanity/lib/types";

import Container from "@/components/molecules/container";
import Layout from "@/components/layout";

import BlogDetailCard from "@/components/sections/BlogDetailCard";
// import { BlogPageSectionsMap } from "@/components/sections";

import { Pagination } from "@/components/sections/reviews/Reviews";

// import HeroSection from "../DynamicDestinations/HeroSection";
import dummyArticles, { destinations, hrData, tags } from "./data";
import BlogChoose from "@/components/molecules/BlogChose";
import HeroSection from "@/components/sections/hero/HeroSection";
import GallerySect from "./GallerySect";

// type BlogPageProps = {
//   slug: string;
//   locale: string;
//   articles: SanityArticle[];
//   content: SanityTag | SanityDestinationPage | SanityBlogPage;
//   globals: SanityGlobals;
//   destinations: { name: SanityLocaleString; slug: string; icon: SanityPhoto }[];
//   tags: { name: SanityLocaleString; slug: string; icon: SanityPhoto }[];
// };

export default function BlogPage({ locale }: { locale: string }) {
  //   const imageHeaderData =
  //     content?._type === "tag"
  //       ? {
  //           header: content?.name,
  //           image: content.hero_image,
  //           _type: "image_header_section" as const,
  //         }
  //       : content?._type === "destination_page"
  //       ? (content?.sections?.find(
  //           (s) => s?._type === "image_header_section"
  //         ) as SanityImageHeaderSection)
  //       : (content?.sections?.find(
  //           (s) => s?._type === "image_header_section"
  //         ) as SanityImageHeaderSection);
  // console.log(articles)
  const [value, setValue] = React.useState(0);
  return (
    <Layout
      breadcrumbs={[
        {
          value: `${locale}/blogs`,
          label: "Blogs",
        },
        {
          value: `${locale}/blogs/egypt`,
          label: "Egypt",
        },
      ]}
      locale={locale}
    >
      <HeroSection data={hrData} />
      <GallerySect />
      <Container className={"my-[67px]"}>
        {/* {JSON.stringify(content)} */}

        {dummyArticles && (
          <div className="lg:px-20 px-5">
            <h4 className="font-[700] text-[24px] text-darkblue font-satoshi">
              Latest Articles
            </h4>
            <div className="text-yellow md:border-b-[3px] border-b-[#FFBB0B] md:w-[117px] w-[85px] rounded-full border-b-2 my-2" />

            <BlogChoose
              items={[...destinations, ...tags].map((item) => {
                return {
                  title: item?.name,
                  link: `/blogs${item.slug}`,
                  images: [item.icon],
                };
              })}
            />

            <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {dummyArticles?.map((article, index) => {
                return (
                  <BlogDetailCard
                    country={(article.destination as any)?.name}
                    excerpt={article.introduction}
                    image={article.cover_image ? article.cover_image : ""}
                    link={`/blogs${article.slug?.current}`}
                    title={article.title}
                    date={article.time}
                    author={article.author?.name}
                    key={index}
                  />
                );
              })}
            </div>

            <Pagination
              total={dummyArticles?.length || 0}
              pageSize={9}
              currentPage={value}
              onChange={setValue}
            />
          </div>
        )}
      </Container>
    </Layout>
  );
}
