import React from "react";
import Image from "next/image";

// import { localizedString, PropsWithLocale } from "@/contexts/LocaleProvider";
// import { FreeMode, Navigation } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { urlFor } from "@/sanity/client";
// import { SanityTestimonialSection } from "@/sanity/types";

import Container from "@/components/molecules/container";
import SwiperComponent from "@/components/molecules/Swiper";

// import Schema from "@/components/atoms/Schema";

const Star = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.80979 0.58541C9.86966 0.401148 10.1303 0.401148 10.1902 0.58541L12.2002 6.77163C12.227 6.85404 12.3038 6.90983 12.3904 6.90983H20.895C19.0888 6.90983 19.1693 7.15775 19.0126 7.27163L13.7503 11.0949C13.6802 11.1459 13.6508 11.2361 13.6776 11.3185L15.6876 17.5048C15.7475 17.689 15.5366 17.8422 15.3799 17.7284L10.1176 13.9051C10.0475 13.8541 9.95254 13.8541 9.88244 13.9051L4.62013 17.7284C4.46338 17.8422 4.25249 17.689 4.31236 17.5048L6.32238 11.3185C6.34916 11.2361 6.31983 11.1459 6.24973 11.0949L0.987415 7.27163C0.830672 7.15775 0.911227 6.90983 1.10497 6.90983H7.60955C7.6962 6.90983 7.77299 6.85404 7.79976 6.77163L9.80979 0.58541Z"
      fill="#FFBB0B"
    />
  </svg>
);

import "swiper/css";
import "swiper/css/navigation";
// import ReactStars from 'react-stars'

export type TestimonialSectionProps = {
  //   data: SanityTestimonialSection;
};

const TravlerReviews = (
  props
  // :
  // PropsWithLocale<TestimonialSectionProps>
) => {
  const {
    data: { title, subtitle, image, testimonials },
    // locale,
  } = props;

  return (
    <div className="w-full bg-[#F2FAFF] !mt-[84px]   text-black py-[30px]  md:h-full relative">
      <Container className={"lg:flex px-5 md:pr-0 items-center gap-x-10 "}>
        <div className="lg:max-w-xs font-satoshi shrink-0 w-full text-center md:text-start">
          {/* <h3 className='font-semibold text-4xl'>{title?.en}</h3> */}
          {/* <div class="w-[335px] text-center text-sky-400 text-xl font-bold font-['Satoshi Variable'] leading-[30px]">Hear it from our Happy travelers</div> */}
          <h2 className="text-xl md:text-[40px] leading-[30px] md:leading-tight -tracking-[1.2px] font-bold">
            {/* <div class="w-[335px] text-center text-gray-500 text-sm font-medium font-['Satoshi Variable'] leading-tight">Adored by Countless Explorers of Egypt, Dubai, Saudi Arabia, Turkey, and Israel</div> */}
            {/* .. */}
            {/* <div class="w-80 text-gray-500 text-lg font-normal font-['Satoshi Variable'] leading-7">Adored by Countless Explorers of Egypt, Dubai, Saudi Arabia, Turkey, and Israel</div> */}
            <span className="text-[#3FA9F5] md:text-black">
              {title.substring(0, 16)}
            </span>
            <span className="text-[#3FA9F5]">{title.substring(16)}</span>
          </h2>
          <p className="text-sm font-medium lg:font-normal md:text-lg md:leading-[28px] mt-2.5 md:mt-3 text-gray ">
            {subtitle}
          </p>
          <Image
            src={image ? image : ""}
            width={260}
            height={73}
            alt=""
            style={{ borderRadius: "10px" }}
            className={
              "my-[30px] md:mt-[38px] h-[160px] md:h-full md:w-[260px] w-full "
            }
          />
        </div>
        <div className="overflow-x-none md:overflow-hidden pr-5    lg:block h-full  pb-11 md:pb-0 ">
          <SwiperComponent
            scrollCount={2}
            className={"gap-[40px] md:gap-[48px] md:!mr-10  "}
            length={testimonials?.length}
          >
            {testimonials?.map((item, index: any) => {
              return (
                <div key={index} className={"w-[284px] shrink-0 "}>
                  {/* <Schema
                    data={{
                      "@context": "https://schema.org/",
                      "@type": "Review",
                      itemReviewed: {
                        "@type": "TravelAgency",
                        name: "Traviio",
                      },
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                      },
                      name: localizedString(item.title, props.locale),
                      author: {
                        "@type": "Person",
                        name: localizedString(item?.name, props.locale),
                      },
                      publisher: {
                        "@type": "Organization",
                        name: "Traviio",
                      },
                    }}
                  /> */}
                  <div className="flex gap-x-0.5 mb-1.5">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>

                  <h3 className="mb-1 font-bold text-base font-satoshi">
                    {item.title}
                  </h3>
                  {/* <div class="w-[280px] text-gray-500 text-xs font-normal font-['Satoshi Variable'] leading-tight">We had an unforgettable stay with Michelle & Michael. Everything was perfect and even better than the pictures, better than the pictures.</div> */}
                  <p className="text-xs md:text-sm font-normal font-satoshi text-darkblue md:font-medium  leading-[20px] md:leading-[22px] max-w-[273px]">
                    {item.text}
                  </p>
                  <div className="flex gap-x-3 mt-4 items-center">
                    <div>
                      <Image
                        alt={""}
                        width={38}
                        height={38}
                        src={item?.avatar}
                      />
                    </div>
                    <div className="gap-1 font-satoshi md:gap-0">
                      {/* <div class="text-slate-900 text-xs font-bold font-['Satoshi Variable'] leading-tight">Andrzej Przybylski</div> */}
                      <div className="font-bold text-darkblue text-xs md:text-sm leading-[20px] md:leading-[22px]">
                        {item?.name}
                      </div>

                      <time className="text-[10px] md:text-xs leading-3 md:leading-[20px] text-gray">
                        {item.time}
                      </time>
                    </div>
                  </div>
                </div>
              );
            })}
          </SwiperComponent>
        </div>
        <Image
          src="/plane.svg"
          height={200}
          width={200}
          className="absolute -left-0 md:-left-5 h-[200px] w-[300px] md:h-[300px] md:w-[400px] -bottom-[90px] md:-bottom-[250px]"
          alt=""
        />
      </Container>
    </div>
  );
};

export default TravlerReviews;
