import React from "react"
import { urlFor } from "../../../../sanity/lib/client"
import Image from "next/image"
import { PhotoProvider, PhotoView } from "react-photo-view"
import SwiperComponent from "@/components/molecules/Swiper"

const HeroSection = ({ data, locale }) => {
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
    </>
  )
}

export default HeroSection
