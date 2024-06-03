import React from "react"
import Image from "next/image"

// import Container from "@/components/molecules/container";
import SwiperComponent from "@/components/molecules/Swiper"

export const Star = () => (
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
)

import "swiper/css"
import "swiper/css/navigation"
import { urlFor } from "../../../../sanity/lib/client"
import useWindowSize from "@/hooks/useWindows"
import { truncateChar } from "@/utils/utils"
import Container from "@/components/molecules/container"

const TravlerReviews = (props) => {
  const {
    data: { title, subtitle, image, testimonials },
    locale,
  } = props

  const windows = useWindowSize()
  const isMobile = windows.width < 768

  return (
    <div className="w-full bg-[#F2FAFF] md:mt-[84px] mt-[50px] text-black py-[30px]  md:h-full relative  px-5">
      <Container className={"lg:flex max-md:px-0 items-center gap-x-10 "}>
        <div className="lg:max-w-xs font-satoshi shrink-0 w-full text-center md:text-start">
          <h2 className="text-xl md:text-[40px] leading-[30px] md:leading-tight -tracking-[1.2px] font-bold">
            <span className="text-[#3FA9F5] md:text-black">
              {title[locale]?.substring(0, 16)}
            </span>
            <span className="text-[#3FA9F5]">
              {title[locale]?.substring(16)}
            </span>
          </h2>
          <p className="text-sm font-medium lg:font-normal md:text-lg md:leading-[28px] mt-2.5 md:mt-3 text-gray ">
            {subtitle?.[locale]}
          </p>
          <Image
            width={320}
            height={230}
            quality={100}
            priority
            src={urlFor(
              isMobile ? image?.mobile?.asset?._ref : image?.asset?._ref
            )}
            alt=""
            style={{ borderRadius: "10px" }}
            className={
              "my-[30px] md:mt-[38px] w-full max-md:h-[220px] object-cover"
            }
          />
        </div>
        <div className="overflow-x-none md:overflow-hidden lg:block h-full md:pt-8  pb-11 md:pb-0 ">
          <SwiperComponent
            scrollCount={2}
            className={"gap-6 md:gap-[48px]"}
            length={testimonials?.length}
          >
            {testimonials?.map((item, index: any) => {
              return (
                <div key={index} className="flex gap-5 items-center">
                  <div className={"w-[280px] shrink-0"}>
                    <div className="flex gap-x-0.5 mb-1.5">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>

                    <h3 className="mb-1 font-bold text-base font-satoshi">
                      {item.title[locale]}
                    </h3>

                    <p className="text-[12px] md:text-sm font-normal font-satoshi text-darkblue md:font-medium  leading-[20px] md:leading-[22px] max-w-[273px]">
                      {truncateChar(item.text[locale], 220)}
                    </p>
                    <div className="flex gap-x-3 mt-4 items-center">
                      <div>
                        <Image
                          alt={`country-${index}`}
                          className="min-h-[38px] max-w-[38px] max-md:hidden"
                          src={urlFor(item?.avatar?.asset?._ref)}
                          width={38}
                          height={38}
                          priority
                        />
                        <Image
                          alt={`country-mobile-${index}`}
                          className="min-h-[38px] max-w-[38px] md:hidden"
                          width={38}
                          height={38}
                          src={urlFor(item?.avatar?.mobile?.asset?._ref)}
                          quality={100}
                          priority
                        />
                      </div>
                      <div className="gap-1 font-satoshi md:gap-0">
                        <div className="font-bold text-darkblue text-[12px] md:text-sm leading-[20px] md:leading-[22px]">
                          {item?.name}
                        </div>

                        <time className="text-[10px] md:text-xs leading-3 md:leading-[20px] text-gray">
                          {item.time[locale]}
                        </time>
                      </div>
                      {/* <div className="w-[160px] h-[1px] rotate-90 opacity-10 bg-[#3FA9F5]" /> */}
                    </div>
                  </div>

                  <div className="h-[170px] w-[1px] border-r-2 border-[#257ab9] opacity-10 md:hidden block" />
                </div>
              )
            })}
          </SwiperComponent>
        </div>
        <Image
          src="/demo/airp.png"
          height={200}
          width={200}
          quality={100}
          priority
          // className="absolur"
          className="absolute -left-0 md:-left-5 -bottom-[75px] md:-bottom-[235px] max-md:w-[120px] max-md:rotate-12"
          alt="aeroplane"
        />
      </Container>
    </div>
  )
}

export default TravlerReviews
