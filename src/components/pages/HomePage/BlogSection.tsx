import React from "react";
import Image from "next/image";
import Link from "next/link";

import DateFormat from "@/utils/utils";

import Container from "@/components/molecules/container";
import SwiperComponent from "@/components/molecules/Swiper";

import "swiper/css";
import "swiper/css/navigation";

const BlogCard = ({ blog }) => {
  return (
    blog && (
      <Link className={"flex-shrink-0 "} href={"/#" + blog?.slug?.current}>
        <div className=" w-full">
          <div
            className={
              "  relative rounded-3xl overflow-hidden w-[250px] h-[280px] md:w-[410px] md:h-[460px]"
            }
          >
            {blog?.cover_image && (
              <Image
                width={410}
                height={460}
                className=" absolute h-full w-full "
                src={blog?.cover_image}
                alt="cover_image"
                sizes={`
              (max-width: 640px) 100vw, 410px
            `}
              />
            )}
          </div>
          <div className="mt-4 font-satoshi">
            <h3 className="text-base md:text-xl max-w-[250px] md:max-w-[380px] font-bold md:font-medium leading-normal md:leading-[32px] ">
              {process.env.NEXT_PUBLIC_DEVELOPMENT
                ? "10 Indonesian Destinations you should visit in this year"
                : blog?.title}
            </h3>

            <p className="mt-[6px] md:mt-2 text-[10px] md:text-xs font-normal leading-3 md:leading-[20px]  text-gray ">{`By ${
              blog?.author?.name
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
  const {
    data: { tagline, title, featured_blogs },
  } = props;
  return (
    <Container className="text-darkblue">
      <header className="pb-5 font-satoshi">
        <p className="text-[#3FA9F5] text-xs md:text-base font-medium text-center uppercase leading-tight md:leading-normal">
          {tagline}
        </p>
        <div className="text-2xl mt-2 md:mt-3 -tracking-[1.2px] mb-[30px] md:mb-12 w-fit mx-auto md:text-[40px] font-bold leading-[32px] md:leading-[50px] text-center">
          <h2>{title}</h2>
          <hr className=" mt-[4px] md:mt-[12px] w-2/3 md:w-[117px] mx-auto text-yellow  border-b-[#FFBB0B]  rounded-full border-b-[3px]" />
        </div>
      </header>
      <div className="relative">
        <SwiperComponent
          className={"gap-3 md:gap-6 w-full overflow-hidden "}
          length={featured_blogs?.length}
          scrollCount={2}
        >
          {featured_blogs?.map((blog: any, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </SwiperComponent>

        <div className=" absolute hidden md:block w-40 top-0 p-3 h-full z-[300] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.2)] to-white right-0" />
      </div>
    </Container>
  );
};

export default BlogSection;
