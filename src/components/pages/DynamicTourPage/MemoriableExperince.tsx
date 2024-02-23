import React from "react";
import Image from "next/image";
import Link from "next/link";
import { A11y, Controller, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

import Container from "@/components/molecules/container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MemorableExperiencesSection({
  data,
  locale,
}: {
  data: any;
  locale: string;
}) {
  const [swiper, setSwiper] = React.useState<any>();
  const prevRef = React.useRef<any>();
  const nextRef = React.useRef<any>();

  React.useEffect(() => {
    if (swiper) {
      swiper.params && (swiper.params.navigation.prevEl = prevRef.current);
      swiper.params && (swiper.params.navigation.nextEl = nextRef.current);
      swiper.navigation && swiper.navigation.init();
      swiper.navigation && swiper.navigation.update();
    }
  }, [swiper]);
  // console.log(data)
  return (
    <div className="flex flex-col gap-12">
      <div className="flex gap-3 flex-col justify-center w-fit mx-auto items-center">
        <h1 className="text-[#3FA9F5] font-satoshi text-base font-medium">
          {data?.tagline?.[locale]}
        </h1>
        <div>
          <h2 className="text-darkblue font-satoshi font-bold md:text-[40px] md:leading-[50px]">
            {data?.title?.[locale]}
          </h2>
          <hr className="lg:w-1/3 w-1/3 my-2 m-auto border-b-[#FFBB0B] rounded-full md:border-b-[3px] border-b-2" />
        </div>
      </div>
      <div className="w-full bg-primary">
        <Container className="flex mx-auto max-w-[1312px] px-4 flex-col py-7 relative">
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Controller]}
            className="external-buttons mySwiper w-full"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              690: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1040: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1390: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            navigation={{
              prevEl: prevRef?.current,
              nextEl: nextRef?.current,
            }}
            updateOnWindowResize
            observer
            observeParents
            onSwiper={setSwiper}
          >
            {data?.experience_cards?.map((card, index) => (
              <SwiperSlide key={index}>
                <Card data={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
      <Container className="gap-12 mx-auto max-w-[1312px] px-4  relative flex justify-center">
        <button
          className={
            "rounded-full z-[1000] bg-[#3FA9F5] h-7 w-7 md:h-10 flex items-center justify-center md:w-10  md:right-0 md:left-4 md:top-1/2 -translate-y-1/2 cursor-pointer "
          }
          ref={nextRef}
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

        <button
          className={
            "rounded-full bg-[#3FA9F5] h-7 w-7  md:h-10 z-[600] flex items-center justify-center md:w-10 md:top-1/2 -translate-y-1/2 cursor-pointer"
          }
          ref={prevRef}
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
    </div>
  );
}

const Card = ({ data }: { data: any }) => {
  if (!data) return null;
  return (
    <Link href={"/#" + data.slug?.current}>
      <div className="w-full min-w-[300px] rounded-2xl overflow-hidden bg-white shadow-md m-1">
        <div className="h-[220px] relative">
          <Image alt="" src={data?.image} fill className="object-cover" />
        </div>
        <div className="p-4 flex flex-col gap-1">
          <p className="font-bold text-xl font-satoshi text-darkblue">
            {data.title?.en}
          </p>
          <p className="font-medium text-sm font-satoshi text-gray">
            {data.description?.en}
          </p>
        </div>
      </div>
    </Link>
  );
};
