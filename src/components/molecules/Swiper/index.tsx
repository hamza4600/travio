import { PropsWithChildren, useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function SwiperComponent({
  children,
  length,
  scrollCount = 1,
  className,
}: PropsWithChildren<{
  className?: string;
  length?: number;
  scrollCount?: number;
}>) {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);

  useEffect(() => {
    if (
      (swiperRef.current?.scrollWidth || 0) >
        (swiperRef.current?.clientWidth || 0) &&
      (swiperRef.current?.scrollLeft || 0) <
        (swiperRef.current?.scrollWidth || 0) -
          (swiperRef.current?.clientWidth || 0)
    )
      setShowNext(true);
    swiperRef.current?.addEventListener("scroll", (e: any) => {
      if (e.target?.scrollLeft <= 0) {
        setShowPrev(false);
      } else setShowPrev(true);
      if (
        e.target?.scrollLeft >=
        e.target?.scrollWidth - e.target?.clientWidth
      ) {
        setShowNext(false);
      } else setShowNext(true);
    });
  }, []);

  function onNext() {
    swiperRef.current?.scrollBy(
      length
        ? (swiperRef.current.scrollWidth / length) *
            (window.innerWidth <= 768 ? 1 : scrollCount)
        : 100,
      0
    );
  }
  function onPrev() {
    swiperRef.current?.scrollBy(
      length
        ? -(swiperRef.current.scrollWidth / length) *
            (window.innerWidth <= 768 ? 1 : scrollCount)
        : -100,
      0
    );
  }

  return (
    <div className={"relative"}>
      <div
        className={
          "flex justify-start overflow-hidden relative overflow-x-auto " +
          className
        }
        ref={swiperRef}
      >
        {/* <SwiperSlide> */}
        {children}
        {/* </SwiperSlide> */}
      </div>
      {showNext && (
        <button
          className={
            "rounded-full bg-[#3FA9F5] h-7 w-7  md:h-10 z-[600] flex items-center justify-center md:w-10 absolute right-2.5 md:-bottom-10 -bottom-14 md:top-1/2 -translate-y-1/2 cursor-pointer"
          }
          onClick={onNext}
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
      )}
      {showPrev && (
        <button
          className={
            "rounded-full z-[1000] bg-[#3FA9F5] h-7 w-7 md:h-10 flex items-center justify-center md:w-10 absolute right-16 md:-bottom-10 -bottom-14 md:right-0 md:left-0 md:top-1/2 -translate-y-1/2 cursor-pointer "
          }
          onClick={onPrev}
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
      )}
    </div>
  );
}
