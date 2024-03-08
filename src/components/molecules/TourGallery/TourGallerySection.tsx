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
        <div className=" mx-auto max-w-[1312px] px-4">
          <h3 className="text-[24px] font-satoshi  text-center lg:text-start leading-tight -tracking-[1.2px] font-bold ">
            {title?.[locale]}
          </h3>
          <div className="text-yellow hidden lg:block bg-yellow my-2 h-1 rounded-full border-1 w-1/6" />
          <div className="text-lg font-satoshi text-center lg:text-start  mt-1.5 text-gray  leading-[28px]">
            {subtitle?.[locale]?.substring(0, 5)[locale]}
            <span className="text-primary opacity-100">
              {subtitle?.[locale]?.substring(5, 32)}
            </span>
            {subtitle?.[locale]?.substring(32)}
          </div>
        </div>
        <div className={"mt-2 mb-[40px]"}>
          <Image
            width={100}
            height={40}
            src={"/small-logo.svg"}
            alt={"small logo"}
            className={"mx-auto"}
          />
        </div>
        <Swiper className="gap-x-2.5 !pl-5 !pb-0">
          {imgs?.map((image, i) =>
            i % 2 == 0 ? (
              <div
                key={i}
                className={"min-w-[320px] h-[320px] overflow-hidden rounded-xl"}
              >
                <PhotoProvider>
                  <PhotoView key={i} src={urlFor(image[0])}>
                    <Image
                      src={urlFor(image[0])}
                      width={320}
                      height={320}
                      alt={"image"}
                      className={"w-full h-full flex-shrink-0 object-cover"}
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            ) : (
              <div
                key={i}
                className={"min-w-[160px] h-[320px] flex flex-col gap-2.5"}
              >
                <div
                  className={"h-[160px] w-[160px] overflow-hidden rounded-xl"}
                >
                  <PhotoProvider>
                    <PhotoView key={i} src={urlFor(image[0])}>
                      <Image
                        src={urlFor(image[0])}
                        width={160}
                        height={160}
                        alt={"image"}
                        className={"object-cover"}
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
                {image[1] && (
                  <div
                    className={"h-[160px] w-[160px] overflow-hidden rounded-xl"}
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
          <Image
            width={80}
            height={40}
            src={"/plane.svg"}
            className="w-auto -mt-[40px]  -left-10 h-60 rotate-45  absolute "
            alt="plane"
          />
        </div>
      </Container>
    </div>
  );
};

export default TourGallerySection;
