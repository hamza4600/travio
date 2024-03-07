import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../../ui/text";
import { Button } from "../../ui/button";
import { urlFor } from "../../../../sanity/lib/client";

const type =
  "text-darkblue font-medium font-satoshi md:text-[14px] md:leading-[22px] text-[12px] leading-4 flex gap-[6px] items-center";

const TourCard = ({
  pic,
  tourType,
  label,
  days,
  cities,
  countries,
  mobilePic,
  old_price,
  price,
  link,
  locale,
}) => {
  // const savings = price - old_price;

  console.log("mb pic: ", mobilePic, "desk pic: ", pic);
  return (
    <Link
      className={"flex-shrink-0 max-w-[250px] md:max-w-[302px]"}
      href={locale + "/tours" + link}
    >
      <div className="bg-white relative h-min shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] transition-all rounded-2xl cursor-pointer">
        {label && (
          <Text
            variant={"tertiary"}
            className="bg-[#D10002] absolute m-3 right-0 px-3 py-1 text-white font-bold text-[10px] md:text-[12px] md:leading-5 rounded-full"
          >
            {label}
          </Text>
        )}

        <Image
          width={302}
          height={100}
          // alt={image.alt}
          className="rounded-t-2xl h-[220px] max-sm:hidden"
          src={urlFor(pic)}
          alt=""
          quality={100}
        />
        <Image
          width={302}
          height={100}
          // alt={image.alt}
          className="rounded-t-2xl h-[180px] sm:hidden"
          src={urlFor(mobilePic)}
          alt=""
          quality={100}
        />
        <div className="p-4">
          <Text className="text-base md:text-xl text-darkblue font-bold">
            {tourType}
          </Text>
          <div className="flex mt-3 justify-between">
            <div className={type}>
              <img
                height={100}
                width={100}
                alt=""
                src="/calendar.svg"
                className="h-4 w-4 md:h-[18px] md:w-[18px]"
              />
              <Text variant={"darkblue"} fontWeight={"500"}>
                {days}
              </Text>
            </div>
            <div className={type}>
              <img
                height={100}
                width={100}
                alt=""
                src="/map_plain.svg"
                className="h-4 w-4 md:h-[18px] md:w-[18px]"
              />
              <Text variant={"darkblue"} fontWeight={"500"}>
                {cities} Cites
              </Text>
            </div>
            <div className={type}>
              <Image
                height={100}
                width={100}
                alt=""
                src="/globe.svg"
                className="h-4 w-4 md:h-[18px] md:w-[18px]"
                quality={100}
              />
              <Text fontWeight={"500"} variant={"darkblue"}>
                {countries} Countries
              </Text>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-start">
            <Text className="line-through opacity-50 text-gray font-bold text-sm md:text-[18px] leading-[20px] md:leading-[28px]">
              ${old_price}
            </Text>

            <div className="text-right">
              <Text className="text-base md:text-lg font-black text-darkblue leading-[20px] md:leading-[28px]">
                From ${price}
              </Text>
              <Text
                variant={"destructive"}
                className="text-[10px] md:-mt-2 md:text-xs font-bold leading-[20px] md:leading-[28px]"
              >
                You Save ${old_price - price}
              </Text>
            </div>
          </div>
          <Button
            className={
              "mt-3 !mb-0 !py-2.5 !px-7 text-[14px] md:leading-[22px] leading-6 font-bold max-sm:h-10 h-[42px]"
            }
            variant={"sky"}
            style={{ width: "100%" }}
          >
            View Trip
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
