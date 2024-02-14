import React from "react";
import Link from "next/link";

import Container from "@/components/molecules/container";
import DestinationCard from "@/components/molecules/cards/DestinationCard";

const DestinationsSection = ({ data }) => {
  console.log("destinations data: ", data);

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
    <Container>
      <div>
        <header>
          <p className="text-[#3FA9F5] font-satoshi text-xs md:text-base font-medium uppercase leading-tight md:leading-normal ">
            {data.tagline}
          </p>

          <div className="text-2xl md:text-[40px] font-satoshi w-fit leading-tight my-3 font-bold -tracking-[1.2px] md:leading-[50px]">
            <h2>{data.title}</h2>
            <hr className="w-[117px] md:w-1/3 mt-1 lg:mt-[9px] rounded-full border-b-[#FFBB0B] border-b-[3px]" />
          </div>
        </header>

        <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 md:gap-7 mt-[30px] md:mt-12">
          {validDestinations.map((destination: any, idx: number) => (
            <Link
              key={idx}
              href={"/#" + destination.destination?.slug?.current}
            >
              <DestinationCard
                key={destination._key + idx}
                data={destination}
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
