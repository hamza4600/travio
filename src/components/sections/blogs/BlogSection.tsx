import React from "react";
import Link from "next/link";

import DateFormat from "@/utils/utils";

import Container from "@/components/molecules/container";
import SwiperComponent from "@/components/molecules/Swiper";

import "swiper/css";
import "swiper/css/navigation";
import { urlFor } from "../../../../sanity/lib/client";

const BlogCard = ({ blog, locale }) => {
  return (
    blog && (
      <Link
        className={"flex-shrink-0 md:mt-12 mt-[30px]"}
        href={locale + "/blog" + blog?.slug?.current}
      >
        <div className=" w-full">
          <div className={"rounded-3xl max-sm:rounded-[8px] overflow-hidden"}>
            {blog?.cover_image && (
              <img
                loading="lazy"
                className="w-full min-h-[460px] max-w-[410px] max-sm:min-h-[280px] max-sm:max-w-[250px]"
                src={urlFor(blog?.cover_image)}
                alt="cover_image"
              />
            )}
          </div>
          <div className="mt-4 font-satoshi">
            <h3 className="md:text-[20px] text-base max-w-[250px] md:max-w-[380px] font-bold md:font-medium md:leading-[32px] ">
              {process.env.NEXT_PUBLIC_DEVELOPMENT
                ? "10 Indonesian Destinations you should visit in this year"
                : blog?.title?.[locale]}
            </h3>

            <p className="mt-[6px] md:mt-2 text-[10px] md:text-xs font-normal leading-3 md:leading-[20px]  text-gray ">{`By ${
              blog?.author?.name?.[locale]
            } ${
              blog?._updatedAt
                ? "on " + DateFormat(new Date(blog?._updatedAt))
                : ""
            }`}</p>
          </div>
        </div>
      </Link>
    )
  );
};

const BlogSection = (props) => {
  if (!props.data) return null;

  const {
    data: { tagline, title, featured_blogs },
    locale,
  } = props;

  return (
    <Container className="text-darkblue md:mt-[84px] mt-[50px] md:mb-[68px] mb-[70px]">
      {/* <SectionHeader
        title={tagline?.[locale]}
        subtitle={title?.[locale]}
        centerLine
      /> */}
      <header className="font-satoshi">
        <p className="text-[#3FA9F5] text-[12px] md:text-base font-medium text-center uppercase leading-5">
          {tagline?.[locale]}
        </p>
        <div className="mt-2 md:mt-3 -tracking-[1.2px] w-fit mx-auto md:text-[40px] font-bold text-2xl md:leading-[50px] text-center">
          <h2>{title?.[locale]}</h2>
          <div className="w-[40px] mt-[4px] md:mt-[12px] md:w-[117px] mx-auto text-yellow  border-b-[#FFBB0B]  rounded-full border-b-[3px]" />
        </div>
      </header>
      <div className="relative">
        <SwiperComponent
          className={"gap-3 md:gap-6 w-full overflow-hidden "}
          length={featured_blogs?.length}
          scrollCount={2}
        >
          {featured_blogs?.map((blog: any, i) => (
            <BlogCard blog={blog} key={i} locale={locale} />
          ))}
        </SwiperComponent>

        <div className=" absolute hidden md:block w-40 top-0 p-3 h-full z-[300] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.2)] to-white right-0" />
      </div>
    </Container>
  );
};

export default BlogSection;
