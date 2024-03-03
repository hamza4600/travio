import React from "react";
import Link from "next/link";

import Container from "@/components/molecules/container";
import DestinationCard from "@/components/molecules/cards/DestinationCard";

const DestinationsSection = ({ data, locale }) => {
  // console.log("destinations data: ", data);

  const validDestinations =
    data.destinations?.filter((destination) => destination.destination) || [];
  if (
    process.env.NEXT_PUBLIC_DEVELOPMENT &&
    data.destinations?.length &&
    data.destinations.length < 4
  ) {
    data.destinations?.push(data.destinations[0]);
    data.destinations?.push(data.destinations[0]);
    data.destinations?.push(data.destinations[0]);
  }

  return (
    <Container className="px-20 max-md:px-5 md:mt-20 mt-[60px]">
      <div>
        <header>
          <p className="text-[#3FA9F5] font-satoshi text-[12px] md:text-base font-medium uppercase leading-5 md:leading-normal ">
            {data.tagline[locale]}
          </p>

          <div className="text-2xl md:text-[40px] font-satoshi w-fit leading-tight my-3 font-bold -tracking-[1.2px] md:leading-[50px]">
            <h2>{data.title[locale]}</h2>
            <hr className="w-[85px] md:w-1/3 mt-1 lg:mt-[9px] rounded-full border-b-[#FFBB0B] md:border-b-[3px] border-b-[2px]" />
          </div>
        </header>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 mt-[30px] md:mt-12 max-sm:justify-center">
          {validDestinations.map((destination: any, idx: number) => (
            <Link
              key={idx}
              href={locale + destination.destination?.slug?.current}
            >
              <DestinationCard
                key={destination._key + idx}
                data={destination}
                locale={locale}
                tourCount={destination.destination?.count?.length}
              />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DestinationsSection;
