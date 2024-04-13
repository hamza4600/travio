import React from "react";
import BlogDetailCard from "@/components/sections/BlogDetailCard";
// import SectionHeader from "@/components/molecules/secHeader";
import Swiper from "@/components/molecules/Swiper";

import { urlFor } from "../../../../sanity/lib/client";
import SectionHeader from "@/components/molecules/secHeader";

const FeatureBlogs = ({ data, locale }) => {
  console.log("FeatureBlogs -> data", data);
  return (
    <>
      <SectionHeader
        title={data?.tagline?.[locale]}
        subtitle={data?.title?.[locale]}
        centerLine
      />
      <div className="h-fit relative md:px-20 px-5">
        <Swiper
          className={"gap-6 md:mt-[48px] mt-[30px]"}
          length={data?.blogs?.length}
          scrollCount={3}
        >
          {/* <Container className="flex flex-col mx-auto max-w-[1312px] px-4 mt-20 items-center"> */}
          <div className="flex flex-wrap w-full pl-2">
            {data?.blogs?.map((blog, index) => {
              return (
                <BlogDetailCard
                  country={blog?.destination?.name?.[locale]}
                  excerpt={blog?.introduction?.[locale]}
                  image={blog?.cover_image ? urlFor(blog.cover_image) : ""}
                  link={`/blogs/${blog.slug?.current}`}
                  title={blog?.title?.[locale]}
                  date={blog?.time?.[locale]}
                  author={blog?.author?.name?.[locale]}
                  key={index}
                />
              );
            })}
          </div>
          {/* </Container> */}
        </Swiper>
        <div className=" absolute hidden md:block w-[150px] top-0 p-3 h-full z-[100] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.5)] to-white right-0" />
      </div>
    </>
  );
};

export default FeatureBlogs;
