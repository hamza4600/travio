import React from "react";
import Swiper from "@/components/molecules/Swiper";
import BlogDetailCard from "@/components/sections/BlogDetailCard";
import dummyArticles from "../Dynamic-Blog-Page/data";
import SectionHeader from "@/components/molecules/secHeader";

const RelatedArticles = () => {
  return (
    <div className="h-fit relative md:mt-[70px] mt-[50px] md:px-20 px-5 md:pb-[78px] pb-[90px]">
      <SectionHeader title="Articles" subtitle="Related Articles" centerLine />
      <Swiper
        className={"gap-6 pb-3 md:mt-[48px] mt-[30px]"}
        length={dummyArticles.length}
        scrollCount={4}
      >
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
      </Swiper>
      <div className=" absolute hidden md:block w-[150px] top-0 p-3 h-full z-[100] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.5)] to-white right-0" />
    </div>
  );
};

export default RelatedArticles;
