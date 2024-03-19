import React from "react";
import BlogDetailCard from "@/components/sections/BlogDetailCard";
import SectionHeader from "@/components/molecules/secHeader";
import Swiper from "@/components/molecules/Swiper";
import dummyArticles from "../Dynamic-Blog-Page/data";

const FeatureBlogs = () => {
  return (
    <div className="h-fit relative md:px-20 px-5">
      <SectionHeader title="Articles" subtitle="Featured Articles" centerLine />
      <Swiper
        className={"gap-6 md:mt-[48px] mt-[30px]"}
        length={dummyArticles.length}
        scrollCount={3}
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

export default FeatureBlogs;
