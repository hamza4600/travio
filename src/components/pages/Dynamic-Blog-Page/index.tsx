"use client";
import React from "react";
// import Image from "next/image";

import { urlFor } from "../../../../sanity/lib/client";
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
import dummyArticles from "./data";
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

export default function BlogPage({
  locale,
  pageData,
}: {
  locale: string;
  pageData: any;
}) {
  const { layout, data } = pageData || {};
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
  const sections = data?.sections || [];
  
  const  imageHeaderData = sections.find((s) => s?._type === "image_header_section")
  const featuredImages = sections.find((s) => s?._type === "featured_images_section")
  const latestPosts = sections.find((s) => s?._type === "latest_posts_section")

  console.log("BlogsData: ", latestPosts)


  const [pageNumber, setPageNumber] = React.useState(0);

  const pageSize = 3
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
      globals={layout}
      promo_banner={layout?.banner}
    >
      <HeroSection data={imageHeaderData} locale={locale} />
        <GallerySect data={featuredImages} locale={locale} />
        <Container>
          {dummyArticles && (
            <div className="mt-[50px]">
              <h4 className="font-[700] text-[24px] text-darkblue font-satoshi">
                {latestPosts?.tagline?.[locale] || "Latest Posts"}
              </h4>
              <div className="text-yellow md:border-b-[3px] border-b-[#FFBB0B] md:w-[117px] w-[85px] rounded-full border-b-2 my-2" />

              <BlogChoose
                items={[...latestPosts?.filter_tags].map((item) => {
                  return {
                    title: item?.name?.[locale] || "All",
                    link: `${item.slug?.current}`,
                    images: [urlFor(item.icon?.asset?._ref)],

                  };
                })}
              />

              <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
                {data?.sections[2]?.featured_blogs?.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize)?.map((article, index) => {
                  return (
                    <BlogDetailCard
                      country={(article.destination as any)?.name?.[locale]}
                      excerpt={article.introduction?.[locale]}
                      image={article.cover_image ? article.cover_image : ""}
                      link={`${locale}/blog${article.slug?.current}`}
                      title={article.title?.[locale]}
                      date={article.time?.[locale]}
                      author={article.author?.name}
                      key={index}
                    />
                  );
                })}
              </div>

              <Pagination
                total={data?.sections[2]?.featured_blogs?.length || 0}
                pageSize={pageSize}
                currentPage={pageNumber}
                onChange={setPageNumber}
              />
            </div>
          )}
        </Container>
    </Layout>
  );
}
