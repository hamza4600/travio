"use client";
import React, { useEffect } from "react";

import { urlFor } from "../../../../sanity/lib/client";
import Container from "@/components/molecules/container";
import Layout from "@/components/layout";

import BlogDetailCard from "@/components/sections/BlogDetailCard";
// import { BlogPageSectionsMap } from "@/components/sections";

// import { Pagination } from "@/components/sections/reviews/Reviews";
import BlogChoose from "@/components/molecules/BlogChose";
import HeroSection from "@/components/sections/hero/HeroSection";
import GallerySect from "./GallerySect";
import { getArticalByTag } from "@/lib/sanity.DynamicBlog";
import useSWR from "swr";
import { Spinner } from "@/components/atom/Spinner";
import { readMoreTn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function BlogPage({
  locale,
  pageData,
  tags,
}: {
  locale: string;
  pageData: any;
  tags: string[];
}) {
  const { layout, data } = pageData || {};
  const sections = data?.sections || [];

  const imageHeaderData = sections.find(
    (s) => s?._type === "image_header_section"
  );
  const featuredImages = sections.find(
    (s) => s?._type === "featured_images_section"
  );
  const latestPosts = sections.find((s) => s?._type === "latest_posts_section");

  const searchParams = useSearchParams();
  const urlTags = searchParams?.getAll("tag")
  const articalTags = urlTags && urlTags.length > 0 ? urlTags : tags

  const { data: tagsArtical, isLoading, mutate } = useSWR("/blogsTags", () =>
    getArticalByTag(articalTags) , {
    }
  );

  useEffect(() => {
    mutate('/blogsTags')
  },[searchParams])

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

          <div
            className={`grid  gap-6 max-lg:grid-cols-2 max-md:grid-cols-1
            ${isLoading ? "h-[500px] grid-cols-1" : " h-[100%] grid-cols-3"}
            `}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner radius={50} />
              </div>
            ) : (
              Array.isArray(tagsArtical) && tagsArtical.length > 0 &&
              tagsArtical.map((article, index) => {
                return (
                  <BlogDetailCard
                    country={(article.destination as any)?.name?.[locale]}
                    excerpt={article.introduction?.[locale]}
                    image={article.cover_image ? article.cover_image : ""}
                    link={`/${locale}/blog${article.slug?.current}`}
                    title={article.title?.[locale]}
                    date={article.time?.[locale]}
                    author={article.auther?.name?.[locale]}
                    linkText={readMoreTn?.[locale]}
                    key={index}
                  />
                );
              })
            )}
          </div>

          {/* make it functional --> for this we just need to slice the array upto the number of pageSize and the blogs or items that are left (can be done when there is more blogs here)  */}
          
          {/* <Pagination
            total={data?.sections[2]?.featured_blogs?.length || 0}
            pageSize={pageSize}
            currentPage={pageNumber}
            onChange={setPageNumber}
          /> */}
        </div>
      </Container>
    </Layout>
  );
}
