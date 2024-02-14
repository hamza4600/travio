import React from "react";
import Swiper from "@/components/molecules/Swiper";
import TourCard from "@/components/molecules/cards/Card";
import Container from "@/components/molecules/container";
import { Text } from "@/components/ui/text";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 1,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
];

const CardsSection = () => {
  return (
    // <div>
    <>
      <Container className="pt-[50px] pb-[72px] text-black w-full smd:mr-0  ">
        <div className="">
          <div className="flex flex-col gap-2">
            <Text className="font-medium text-base maxs-sm:text[12px] leading-5">
              Cheap Trips
            </Text>
            <Text
              variant={"darkblue"}
              className="font-bold leading-[50px] text-[40px] max-sm:text-2xl"
            >
              Hot Travel Deals
            </Text>
            <hr className="border-b-[#FFBB0B] border-b-[3px] max-w-[117px]" />
          </div>

          <div className="h-fit relative mt-12">
            <Swiper
              className={"gap-6 pb-3"}
              length={data?.length}
              scrollCount={4}
            >
              {data.map((data) => (
                <TourCard
                  key={data.id}
                  pic={data.pic}
                  tourType={data.title}
                  days={data.day}
                  cities={data.cities}
                  countries={data.countries}
                  old_price={data.old_price}
                  price={data.price}
                />
              ))}
            </Swiper>
            <div className=" absolute hidden md:block w-[150px] top-0 p-3 h-full z-[100] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.5)] to-white right-0" />
          </div>
        </div>
      </Container>
    </>
    // </div>
  );
};

export default CardsSection;
