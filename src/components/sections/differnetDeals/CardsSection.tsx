import Swiper from "@/components/molecules/Swiper";
import TourCard from "@/components/molecules/cards/Card";
import Container from "@/components/molecules/container";

import "swiper/css";
import "swiper/css/navigation";

export const data1 = [
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
    id: 1851,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 2581,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 8851,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 991,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 161,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 152,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 85,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
  {
    id: 9,
    pic: "/cardpic.png",
    title: "Safari Falls: Cape's Exotic Adventure",
    day: "11 days",
    cities: "10 cities",
    countries: "2 Countries",
    old_price: 3000,
    price: 4000,
  },
];

const CardsSection = ({ data, locale }) => {
  return (
    <Container className="text-black w-full smd:mr-0">
      <div className="h-fit relative md:mt-12 mt-6">
        <Swiper className={"gap-6 pb-3"} length={data1.length} scrollCount={4}>
          {data1.map((data) => (
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
    </Container>
  );
};

export default CardsSection;