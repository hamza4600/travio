import React from "react";
// import Image from "next/image";

import { displayNumber } from "@/utils/utils";
import { urlFor } from "../../../../sanity/lib/client";
import { tourPackagesTn } from "@/lib/utils";

const DestinationCard = ({ data, tourCount, locale }) => {
  const image = data?.image;

  return (
    <div className="w-full h-fit font-satoshi">
      <div className={"min-h-[250px] md:min-h-[310px]  relative"}>
        {image && (
          <img
            // loading="lazy"
            className="w-full h-full rounded-2xl max-w-[408px] min-h-[310px] max-sm:min-h-[250px]"
            src={urlFor(image)}
            alt=""
          />
        )}
      </div>
      <h3 className="mt-2 md:mt-4 text-lg font-bold">
        {data.destination?.name[locale]}
      </h3>
      {tourCount && (
        <p className="text-gray font-medium mt-0 md:mt-[2px] text-[12px] leading-5">
          {displayNumber(tourCount, tourPackagesTn?.[locale])}
        </p>
      )}
    </div>
  );
};

export default DestinationCard;
