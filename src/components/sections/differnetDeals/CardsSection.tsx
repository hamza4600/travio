import Swiper from "@/components/molecules/Swiper";
import TourCard from "@/components/molecules/cards/Card";
import Container from "@/components/molecules/container";
import SectionHeader from "@/components/molecules/secHeader";

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

const CardsSection = ({ data, locale }, props) => {
  console.log("dataDeals: ", data);
  // console.log("props8585", props);

  return (
    <Container className="text-black w-full mt-[50px]">
      <SectionHeader
        subtitle={data?.title?.[locale]}
        title={data?.tagline?.[locale]}
      />
      <div className="h-fit relative z-20 md:mt-12 mt-[30px]">
        <Swiper
          className={"gap-6 pb-2 pl-1.5"}
          length={data.deals.length}
          scrollCount={4}
        >
          {data.deals.map((data: any, i: number) => (
            <TourCard
              key={i}
              locale={locale}
              link={data?.tour?.slug.current}
              label={data?.label?.[locale]}
              pic={data.tour.hero_section.image?.asset._ref}
              mobilePic={data.tour.hero_section.image.mobile?.asset._ref}
              tourType={data.tour.hero_section.title?.[locale]}
              days={data.tour.overview_card?.duration?.[locale]}
              cities={data.tour.overview_card.cities}
              countries={data.tour.overview_card.countries}
              old_price={
                data.tour.price_overrides[0].price.discounted_price[locale]
              }
              price={data.tour.price_overrides[0].price.initial_price[locale]}
            />
          ))}
        </Swiper>
        <div className=" absolute hidden md:block w-[50px] top-0 p-3 h-full z-[100] bg-gradient-to-r from-transparent  via-[rgba(255,255,255,0.5)] to-white right-0" />
      </div>
    </Container>
  );
};

export default CardsSection;
