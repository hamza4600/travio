import React from "react";
import Image from "next/image";

import { displayNumber } from "@/utils/utils";

const DestinationCard = ({ data, tourCount }) => {
  const image = data?.image;

  return (
    <div className="w-full h-fit font-satoshi">
      <div className={"min-h-[250px] md:min-h-[310px]  relative"}>
        {image && (
          <Image
            height={310}
            width={408}
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src={image}
            alt=""
          />
        )}
      </div>
      <h3 className="mt-2 md:mt-4 text-lg font-bold">
        {data.destination?.name}
      </h3>
      {tourCount && (
        <p className="text-gray font-medium mt-0 md:mt-[2px] text-[12px] leading-5">
          {displayNumber(tourCount, "Tour Package")}
        </p>
      )}
    </div>
  );
};

export default DestinationCard;
