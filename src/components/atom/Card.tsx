import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Text } from "../ui/text";
import { Button } from "../ui/button";

const type =
  "text-[12px] md:text-sm items-center font-medium leading-[16px] md:leading-[22px] flex gap-1.5";

const TourCard = ({
  pic,
  tourType,
  days,
  cities,
  countries,
  old_price,
  price,
}) => {
  return (
    // <Link href={"#"}>
    <Link className={"flex-shrink-0 max-w-[250px] md:max-w-[302px]"} href={"#"}>
      {/* <Schema
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: title,
          startDate: new Date().toISOString(),
          endDate: new Date().toISOString(),
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          image: [image.src],
          description: duration,
          offers: {
            "@type": "Offer",
            url: "https://www.example.com/event_offer/12345_201803180430",
            price: ,
            priceCurrency: currency,
            availability: "https://schema.org/InStock",
            validFrom: new Date().toISOString(),
          },
        }}
      /> */}
      <div className="bg-white relative h-min shadow-[0px_4px_20px_0px_rgba(0,0,0,0.06)] transition-all rounded-2xl cursor-pointer">
        <Text
          variant={"tertiary"}
          className="bg-red-600 absolute m-3 right-0 px-3 py-1 leading-[20px] text-white font-bold text-[10px] md:text-xs rounded-full"
        >
          Hot Deal
        </Text>

        <Image
          width={302}
          height={100}
          // alt={image.alt}
          className="rounded-t-2xl h-[180px] md:h-[220px]"
          src={pic}
          alt=""
        />
        <div className="p-4">
          <Text className="text-base md:text-xl text-darkblue font-bold">
            {/* {process.env.NEXT_PUBLIC_DEVELOPMENT */}
            {/* ?  */}
            {tourType}
          </Text>
          <div className="flex mt-3 justify-between">
            <div className={type}>
              <Image
                height={100}
                width={100}
                alt=""
                src="/calendar.svg"
                className="h-4 w-4 md:h-[18px] md:w-[18px]"
              ></Image>
              <Text
                variant={"darkblue"}
                className="text-[14px] leading-[22px] max-sm:text[12px] max-sm:leading-4"
              >
                {days}
              </Text>
            </div>
            <div className={type}>
              <Image
                height={100}
                width={100}
                alt=""
                src="/map_plain.svg"
                className="h-4 w-4 md:h-[18px] md:w-[18px]"
              ></Image>
              <Text variant={"darkblue"} className="">
                {cities}
              </Text>
            </div>
            <div className={type}>
              <Image
                height={100}
                width={100}
                alt=""
                src="/globe.svg"
                className="h-4 w-4 md:h-[18px] md:w-[18px]"
              ></Image>
              <Text variant={"darkblue"} className="">
                {countries}
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
            className={"!!mt-3 !mb-0 !py-2.5 !px-7 !leading-[22px]"}
            variant={"sky"}
            style={{ width: "100%" }}
          >
            View Trip
          </Button>
        </div>
      </div>
    </Link>
    // </div>
    // </Link>
  );
};

export default TourCard;
