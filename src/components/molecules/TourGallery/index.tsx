import React from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

// import { urlFor } from '@/sanity/client'

import Container from "../container";
import SwiperComponent from "../Swiper";

// import { SanityGallerySection, SanityImage } from '../../sanity/types'

import "react-photo-view/dist/react-photo-view.css";

import "swiper/css";
import "swiper/css/navigation";
export type GallerySectionProps = {
  // data: SanityGallerySection
  data: any;
  banner?: any;
};

const TourGallery = (props: GallerySectionProps) => {
  const {
    data: { title, subtitle, images },
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

  console.log(imgs);

  return (
    <div className="pt-5 md:pt-10 bg-[#F2FAFF] min-h-[482px] md:min-h-[522px] text-black">
      <Container>
        <h2
          id="triphighlights"
          className="text-[24px] font-satoshi text-darkblue px-5 md:text-[40px] leading-[32px] md:leading-[50px] -tracking-[1.2px] font-bold text-center"
        >
          {title}
        </h2>

        <p className="text-sm font-satoshi px-5 md:text-lg mt-[10px] md:mt-1.5 text-gray text-center md:leading-[28px] leading-[24px]">
          {subtitle?.substring(0, 5)}
          <span className="text-[#3FA9F5] font-satoshi font-medium opacity-100">
            {subtitle?.substring(5, 32)}
          </span>
          {subtitle?.substring(32)}
        </p>
        <div className={"mt-[10px] md:mt-2 mb-[30px]"}>
          <Image
            width={80}
            height={40}
            src={"/small-logo.svg"}
            alt={"small logo"}
            className={"mx-auto"}
          />
        </div>

        <PhotoProvider maskOpacity={0.6}>
          <SwiperComponent
            className="gap-2 md:gap-2 lg:gap-2.5 !pb-0 "
            scrollCount={4}
            length={7}
          >
            {imgs.slice(0, 3)?.map((image, i) =>
              i % 2 == 0 ? (
                <div
                  key={i}
                  className={
                    "min-w-[233px] md:min-w-[350px] w-full md:max-w-[350px] h-[190px] md:h-[320px]  overflow-hidden rounded-xl"
                  }
                >
                  <PhotoView key={i} src={image[0]}>
                    <Image
                      src={image[0]}
                      width={350}
                      height={320}
                      alt={"image"}
                      className={"w-full h-full flex-shrink-0 object-cover"}
                    />
                  </PhotoView>
                </div>
              ) : (
                <div
                  key={i}
                  className={
                    "w-full h-[190px] md:h-[320px] flex flex-col gap-2 lg:gap-2.5"
                  }
                >
                  <div
                    className={
                      "w-[94px] h-[91px] md:h-[160px] md:w-[160px] overflow-hidden rounded-xl "
                    }
                  >
                    <PhotoView key={i} src={image[0]}>
                      <Image
                        src={image[0]}
                        width={160}
                        height={160}
                        alt={"image"}
                        className={"object-cover w-full h-full"}
                      />
                    </PhotoView>
                  </div>
                  {image[1] && (
                    <div
                      className={
                        "w-[94px] h-[91px] md:h-[160px] md:w-[160px] overflow-hidden rounded-xl "
                      }
                    >
                      <PhotoView key={i} src={image[1]}>
                        <Image
                          src={image[1]}
                          width={160}
                          height={160}
                          alt={"image"}
                          className={"object-cover w-full h-full"}
                        />
                      </PhotoView>
                    </div>
                  )}
                </div>
              )
            )}
            <div
              className={
                "w-full  h-[190px]  md:h-[320px] flex flex-col gap-2 lg:gap-2.5 "
              }
            >
              <div
                className={
                  "w-[94px] md:w-[200px] h-full overflow-hidden rounded-xl "
                }
              >
                <PhotoView src={imgs[5][0]}>
                  <Image
                    src={imgs[5][0]}
                    width={160}
                    height={160}
                    alt={"image"}
                    className={"object-cover w-full h-full"}
                  />
                </PhotoView>
              </div>
            </div>
            {imgs.slice(3, 6)?.map((image, i) =>
              i % 2 == 1 ? (
                <div
                  key={i}
                  className={
                    "min-w-[233px] w-full h-[190px]  md:h-[320px]   md:min-w-[310px] md:max-w-[400px]  overflow-hidden rounded-xl"
                  }
                >
                  <PhotoView key={i} src={image[0]}>
                    <Image
                      src={image[0]}
                      width={320}
                      height={320}
                      alt={"image"}
                      className={"w-full h-full flex-shrink-0 object-cover "}
                    />
                  </PhotoView>
                </div>
              ) : (
                <div
                  key={i}
                  className={
                    "w-full  h-[190px]  md:h-[320px] flex flex-col gap-2 lg:gap-2.5 "
                  }
                >
                  <div
                    className={
                      "w-[94px] h-[91px] md:h-[160px] md:w-[160px] overflow-hidden rounded-xl "
                    }
                  >
                    <PhotoView key={i} src={image[0]}>
                      <Image
                        src={image[0]}
                        width={160}
                        height={160}
                        alt={"image"}
                        className={"object-cover w-full h-full"}
                      />
                    </PhotoView>
                  </div>
                  {image[1] && (
                    <div
                      className={
                        "w-[94px] h-[91px] md:h-[160px] md:w-[160px] overflow-hidden rounded-xl "
                      }
                    >
                      <PhotoView key={i} src={image[1]}>
                        <Image
                          src={image[1]}
                          width={160}
                          height={160}
                          alt={"image"}
                          className={"object-cover w-full h-full"}
                        />
                      </PhotoView>
                    </div>
                  )}
                </div>
              )
            )}
          </SwiperComponent>
        </PhotoProvider>
      </Container>
    </div>
  );
};

export default TourGallery;
