import React from "react";
import Image from "next/image";
// import Plane from "../../../public/plane.svg";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { urlFor } from "../../../../sanity/lib/client";

import Container from "../container";
import Swiper from "../Swiper";

import {
  //   SanityImage,
  SanityGallerySection,
} from "../../../../sanity/lib/types";

import "react-photo-view/dist/react-photo-view.css";

import "swiper/css";
import "swiper/css/navigation";
export type GallerySectionProps = {
  data: SanityGallerySection;
  locale;
};
const TourGallerySection = (props: GallerySectionProps) => {
  const {
    data: { title, subtitle, images },
    locale,
  } = props;
  const imgs: any[][] = [];
  if (images) {
    let single = true;
    for (let i = 0; i < images.length; i++) {
      if (single) {
        imgs.push([images[i]]);
      } else {
        imgs.push(images.slice(i, i + 2));
        i++;
      }
      single = !single;
    }
  }

  return (
    <div className="py-10  text-black">
      <Container>
        <div className=" mx-auto max-w-[1312px] md:px-4">
          <h3 className="text-[24px] font-satoshi  text-center lg:text-start leading-tight -tracking-[1.2px] font-bold ">
            {title?.[locale]}
          </h3>
          <div className="hidden lg:block border-b-[#FFBB0B] w-[112px] border-b-[3px] my-2 h-1 rounded-full md:block" />
          <div className="text-lg font-satoshi text-center lg:text-start  mt-1.5 text-gray  leading-[28px]">
            {subtitle?.[locale]?.substring(0, 5)[locale]}
            <span className="text-primary opacity-100">
              {subtitle?.[locale]?.substring(5, 32)}
            </span>
            {subtitle?.[locale]?.substring(32)}
          </div>
        </div>
        <div className={"mt-2 mb-[40px]"}>
          <img
            width={100}
            height={40}
            src={"/small-logo.svg"}
            alt={"small logo"}
            className={"mx-auto"}
          />
        </div>
      </Container>
      <Swiper className="gap-x-2.5">
        {imgs?.map((image, i) =>
          i % 2 == 0 ? (
            <div
              key={i}
              className={
                "min-w-[233px] md:min-w-[320px] w-full md:max-w-[320px] h-[190px] md:h-[320px]  overflow-hidden rounded-xl pb-4 md:pb-0"
              }
            >
              <PhotoProvider>
                <PhotoView key={i} src={urlFor(image[0])}>
                  <Image
                    src={urlFor(image[0])}
                    width={320}
                    height={320}
                    alt={"image"}
                    className={"w-full h-full flex-shrink-0"}
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          ) : (
            <div
              key={i}
              className={
                "h-[190px] md:h-[320px] flex flex-col gap-2 lg:gap-2.5 pb-4 md:pb-0"
              }
            >
              <div
                className={
                  "w-[94px] h-[91px] md:h-[160px] md:w-[160px] overflow-hidden rounded-xl "
                }
              >
                <PhotoProvider>
                  <PhotoView key={i} src={urlFor(image[0])}>
                    <Image
                      src={urlFor(image[0])}
                      width={160}
                      height={160}
                      alt={"image"}
                      className={"object-cover h-full"}
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
              {image[1] && (
                <div
                  className={
                    "w-[94px] h-[91px] md:h-[160px] md:w-[160px] overflow-hidden rounded-xl "
                  }
                >
                  <PhotoProvider>
                    <PhotoView key={i} src={urlFor(image[1])}>
                      <Image
                        src={urlFor(image[1])}
                        width={160}
                        height={160}
                        alt={"image"}
                        className={"object-cover"}
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
              )}
            </div>
          )
        )}
      </Swiper>
      <div>
        <img
          width={80}
          height={40}
          src={"/Plane.png"}
          className="w-auto -left-10 absolute max-md:w-[200px] max-md:left-16"
          alt="plane"
        />
      </div>
    </div>
  );
};

export default TourGallerySection;
