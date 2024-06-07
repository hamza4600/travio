import React from "react"
import { urlFor } from "../../../../sanity/lib/client"
import Image from "next/image"
import { PhotoProvider, PhotoView } from "react-photo-view"

import { A11y, Controller, Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Container from "@/components/molecules/container"

const HeroSection = ({ data, locale }) => {
  const [swiper, setSwiper] = React.useState<any>()
  const prevRef = React.useRef<any>()
  const nextRef = React.useRef<any>()

  React.useEffect(() => {
    if (swiper) {
      swiper.params && (swiper.params.navigation.prevEl = prevRef.current)
      swiper.params && (swiper.params.navigation.nextEl = nextRef.current)
      swiper.navigation && swiper.navigation.init()
      swiper.navigation && swiper.navigation.update()
    }
  }, [swiper])
  return (
    <>
      <div className="hidden lg:block">
        <PhotoProvider maskOpacity={0.6}>
          <div className="flex gap-[26px]">
            <div className="relative">
              <div
                className="bottom-0 h-[170px] max-md:h-[100px] max-lg:bottom-10 rounded-b-[16px] max-md:top-[112px] max-lg:rounded-none"
                style={{
                  position: "absolute",
                  width: "100%",
                  background:
                    "linear-gradient(360deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0) 82%)",
                  zIndex: 1,
                }}
              />

              <PhotoView src={urlFor(data?.image?.mobile?.asset?._ref)}>
                <Image
                  className="lg:rounded-[16px] rounded-none min-h-[480px] max-md:min-h-[212px]  object-cover cursor-pointer"
                  src={urlFor(data?.image?.mobile?.asset?._ref)}
                  alt={data?.image?.alt?.[locale]}
                  width={1000}
                  height={212}
                />
              </PhotoView>

              <h1 className="hidden lg:block left-8 font-black absolute z-50 bottom-[13px] text-white font-satoshi text-[56px] leading-[66px]">
                {data?.title?.[locale]}
              </h1>
              <div className="bg-primary">
                <p className="lg:hidden text-center pt-[25px] pb-[8px] font-bold text-darkblue font-satoshi text-[20px] leading-[30px]">
                  {data?.title?.[locale]}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              {data?.images?.map((img: any, i: number) => {
                return (
                  data?.images && (
                    <PhotoView
                      key={i}
                      src={img?.asset?._ref ? urlFor(img.asset._ref) : ""}
                    >
                      <Image
                        key={i}
                        className="h-[226px] max-w-[336px] rounded-2xl object-cover cursor-pointer"
                        src={img?.asset?._ref ? urlFor(img.asset._ref) : ""}
                        alt="hero_supprt_img"
                        width={1000}
                        height={212}
                      />
                    </PhotoView>
                  )
                )
              })}
            </div>
          </div>
        </PhotoProvider>
      </div>
      <div className="lg:hidden ">
        <Swiper
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          updateOnWindowResize
          observer
          observeParents
          onSwiper={setSwiper}
          modules={[Navigation, Scrollbar, A11y, Controller]}
          spaceBetween={8}
          slidesPerView={1.1}
        >
          <SwiperSlide>
            <Image
              className="lg:rounded-[16px]  h-[230px] object-cover cursor-pointer"
              src={urlFor(data?.image?.mobile?.asset?._ref)}
              alt={data?.image?.alt?.[locale]}
              width={1000}
              height={1000}
            />
          </SwiperSlide>
          {data?.images?.map((img: any, i: number) => {
            return (
              data?.images && (
                <SwiperSlide key={i}>
                  <Image
                    key={i}
                    className="  h-[230px] object-cover  cursor-pointer"
                    src={img?.asset?._ref ? urlFor(img.asset._ref) : ""}
                    alt="hero_supprt_img"
                    width={1000}
                    height={212}
                  />
                </SwiperSlide>
              )
            )
          })}
          <Container className="lg:gap-20 gap-[15px] flex md:justify-center justify-between my-4">
            <button
              className={
                "rounded-full  bg-[#3FA9F5] size-8 md:h-10 flex items-center justify-center md:w-10 cursor-pointer "
              }
              ref={prevRef}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={"scale-x-[-1]"}
              >
                <path
                  d="M12.6003 8.97526C12.6009 9.07719 12.581 9.17823 12.5419 9.27259C12.5027 9.36696 12.445 9.45278 12.372 9.52515L7.64945 14.1721C7.50123 14.318 7.30021 14.3999 7.09061 14.3999C6.881 14.3999 6.67998 14.318 6.53177 14.1721C6.38356 14.0263 6.30029 13.8285 6.30029 13.6222C6.30029 13.416 6.38356 13.2182 6.53177 13.0723L10.7034 8.97526L6.53964 4.87817C6.41069 4.73001 6.34331 4.53943 6.35097 4.34451C6.35862 4.14958 6.44074 3.96468 6.58091 3.82675C6.72109 3.68881 6.909 3.60801 7.1071 3.60048C7.30519 3.59295 7.49887 3.65925 7.64945 3.78613L12.372 8.43311C12.5174 8.57737 12.5994 8.77208 12.6003 8.97526Z"
                  fill="white"
                />
              </svg>
            </button>
            {/* <div className="swiper-pagination"></div> */}

            <button
              className={
                "rounded-full bg-[#3FA9F5] size-8  md:h-10 flex items-center justify-center md:w-10 md:top-1/2 cursor-pointer"
              }
              ref={nextRef}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6003 8.97526C12.6009 9.07719 12.581 9.17823 12.5419 9.27259C12.5027 9.36696 12.445 9.45278 12.372 9.52515L7.64945 14.1721C7.50123 14.318 7.30021 14.3999 7.09061 14.3999C6.881 14.3999 6.67998 14.318 6.53177 14.1721C6.38356 14.0263 6.30029 13.8285 6.30029 13.6222C6.30029 13.416 6.38356 13.2182 6.53177 13.0723L10.7034 8.97526L6.53964 4.87817C6.41069 4.73001 6.34331 4.53943 6.35097 4.34451C6.35862 4.14958 6.44074 3.96468 6.58091 3.82675C6.72109 3.68881 6.909 3.60801 7.1071 3.60048C7.30519 3.59295 7.49887 3.65925 7.64945 3.78613L12.372 8.43311C12.5174 8.57737 12.5994 8.77208 12.6003 8.97526Z"
                  fill="white"
                />
              </svg>
            </button>
          </Container>
        </Swiper>
      </div>
    </>
  )
}

export default HeroSection
