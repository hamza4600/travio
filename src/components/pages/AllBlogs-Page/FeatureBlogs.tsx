import React from "react";
import BlogDetailCard from "@/components/sections/BlogDetailCard";
// import SectionHeader from "@/components/molecules/secHeader";
import Swiper from "@/components/molecules/Swiper";
import dummyArticles from "../Dynamic-Blog-Page/data";
import { urlFor } from "../../../../sanity/lib/client";

const FeatureBlogs = ({ data, locale }) => {
  console.log("FeatureBlogs -> data", data);
  return (
    <div className="h-fit relative md:px-20 px-5">
      {/* <SectionHeader title="Articles" subtitle="Featured Articles" centerLine /> */}
      <Swiper
        className={"gap-6 md:mt-[48px] mt-[30px]"}
        length={dummyArticles.length}
        scrollCount={3}
      >
        {/* <Container className="flex flex-col mx-auto max-w-[1312px] px-4 mt-20 items-center"> */}
        <div>
          <h2 className="text-blue text-base font-medium text-center">
            {data.tagline?.[locale]}
          </h2>
          <h4 className="lg:text-4xl text-2xl font-[700] mt-2  text-center">
            {data.title?.[locale]}
          </h4>
          <hr className="w-32 my-2 text-yellow m-auto bg-yellow  rounded-full border-2" />
        </div>
        <div className="flex flex-wrap mt-10 w-full">
          {data?.blogs?.map((blog, index) => {
            return (
              <BlogDetailCard
                country={blog.destination?.name?.[locale]}
                excerpt={blog.introduction?.[locale]}
                image={blog.cover_image ? urlFor(blog.cover_image) : ""}
                link={`/blogs/${blog.slug?.current}`}
                title={blog.title?.[locale]}
                date={blog.time?.[locale]}
                author={blog.author?.name?.[locale]}
                key={index}
              />
            );
          })}
        </div>
        {/* </Container> */}
      </Swiper>
      <div className=" absolute hidden md:block w-[150px] top-0 p-3 h-full z-[100] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.5)] to-white right-0" />
    </div>
  );
};

export default FeatureBlogs;
