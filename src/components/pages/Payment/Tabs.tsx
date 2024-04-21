import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Control, useForm } from "react-hook-form";

import {
  localizedNumber,
  urlFor,
  // localizedString,
} from "../../../../sanity/lib/client";

// import { urlFor } from "../../../../sanity/lib/client";

import {
  SanityLocale,
  SanityPricingSection,
  SanityPromoCode,
  SanityTourPage,
} from "../../../../sanity/lib/types";

import { Button } from "@/components/ui/button";
import Container from "@/components/molecules/container";

import Input from "../TrailYourTour/Input";
import { generatePriceList } from "@/utils/dates/generatePriceList";
import { notFound } from "next/navigation";
import { getPriceSymbol } from "@/utils/utils";

export default function Tabs({
  children,
  tour,
  startDate,
  endDate,
  pricingData,
  adultsNumber,
  childrenNumber,
  addons,
  onSubmit,
  locale,
  setTotalPrice,
  control,
  trigger,
  loading,
  promo,
}: {
  children?: any[];
  tour: SanityTourPage;
  startDate: Date;
  endDate: Date;
  pricingData: SanityPricingSection;
  adultsNumber: number;
  childrenNumber: number;
  addons: number;
  onSubmit: () => void;
  setTotalPrice: (a: number) => void;
  control: Control<any>;
  trigger: () => any;
  loading: boolean;
  locale: SanityLocale;
  promo: SanityPromoCode[];
}) {
  const [promoCode, setPromoCode] = useState<SanityPromoCode>();
  let discount = 0;
  let actualPrice = 0;
  let currentPrice = 0;

  // @ts-ignore
  const data = {
    // @ts-ignore
    days: tour?.timeline?.days,
    disabled: tour?.timeline?.disabled,
    // @ts-ignore
    fixed_days: tour?.timeline?.fixed_days,
    price: tour?.overview_card?.price,
    // @ts-ignore
    price_overrides: tour?.price_overrides,
    title: tour?.hero_section?.title,
    weekly_schedule: tour?.timeline?.timeline,
  };
  const prices = generatePriceList(data);

  const actual_tour = prices.find((p) => {
    return (
      p.from.getTime() === startDate.getTime() &&
      p.to.getTime() === endDate.getTime()
    );
  });

  if (!actual_tour || actual_tour === undefined) {
    // show 404
    console.log("tour not found");

    return notFound();
  }

  if (actual_tour) {
    actualPrice = Number(actual_tour.actualPrice[locale]);
    currentPrice = Number(actual_tour.currentPrice[locale]);
  }

  if (promoCode) {
    discount = (currentPrice * promoCode.percent) / 100;

    if (promoCode.max_discount && discount > promoCode.max_discount) {
      discount = promoCode.max_discount;
    }
  }
  const [page, setPage] = useState(1);
  useEffect(() => {}, [page]);

  return (
    <Container className="flex flex-col gap-16 py-16 xl:px-[108px] max-md:px-5">
      <div className="flex items-center font-satoshi gap-1 px-6 max-w-[800px] mx-auto w-full h-[68px] ">
        <div
          className="relative cursor-pointer"
          onClick={async () => {
            if (await trigger()) setPage(1);
          }}
        >
          {page == 1 || page > 1 ? (
            <div className="bg-[#3FA9F5] w-7 h-7 font-medium text-center text-[12px] leading-4 text-white rounded-full pl-[9.44px] pr-[10.44px] py-[4.44px]">
              1
            </div>
          ) : (
            <Image alt="" src={"/circleTick.svg"} height={36} width={36} />
          )}
          <p className="absolute top-[110%] -translate-x-1/4 text-primary text-base font-medium whitespace-nowrap">
            Trip Extra
          </p>
        </div>
        <div className="flex-1 bg-[#FFBB0B] text-yellow h-[2px]" />
        <div
          className="relative cursor-pointer"
          onClick={async () => {
            if (await trigger()) setPage(2);
          }}
        >
          {page == 2 || page > 2 ? (
            <div className="bg-[#3FA9F5] w-7 h-7 font-medium text-center text-[12px] leading-4 text-white rounded-full pl-[9.44px] pr-[10.44px] py-[4.44px]">
              2
            </div>
          ) : (
            <Image alt="" src={"/circleTick.svg"} height={36} width={36} />
          )}
          <p className="absolute top-[110%] -translate-x-1/4 text-primary text-base font-medium whitespace-nowrap">
            Your Details
          </p>
        </div>
        <div className="flex-1 bg-[#FFBB0B] text-yellow h-[2px]" />
        <div
          className="relative cursor-pointer"
          onClick={async () => {
            if (await trigger()) setPage(3);
          }}
        >
          {page == 3 ? (
            <div className="bg-[#3FA9F5] w-7 h-7 font-medium text-center text-[12px] leading-4 text-white rounded-full pl-[9.44px] pr-[10.44px] py-[4.44px]">
              3
            </div>
          ) : (
            <Image alt="" src={"/circleTick.svg"} height={36} width={36} />
          )}
          <p className="absolute top-[110%] -translate-x-1/4 text-primary text-base font-medium whitespace-nowrap">
            Payment
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse font-satoshi lg:grid lg:grid-cols-2 xl:grid-cols-[5fr_3fr] gap-12 relative">
        {children && (
          <div className="flex flex-col gap-10">
            {children.length >= page ? (
              children[page - 1]
            ) : (
              <div>Under Construction</div>
            )}
            <div className="grid grid-cols-2 gap-12">
              {page > 1 ? (
                <Button
                  className="max-w-[246px] h-12 ml-[25px]"
                  variant={"outline"}
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  Back
                </Button>
              ) : (
                <div></div>
              )}
              {page < children.length ? (
                <Button
                  variant="sky"
                  className="max-w-[246px] h-12"
                  disabled={loading}
                  onClick={async () => {
                    if (await trigger()) setPage(page + 1);
                  }}
                >
                  {loading ? "Loading..." : "Next"}
                </Button>
              ) : (
                <Button variant="sky" disabled={loading} onClick={onSubmit}>
                  {loading ? "Booking..." : "Pay"}
                </Button>
              )}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-7 sticky top-0">
          <SelectedTour tour={tour} locale={locale} />
          <TripDuration startDate={startDate} endDate={endDate} />
          <Costing
            clearPromoCode={() => setPromoCode(undefined)}
            setPromoCode={(x: string) => {
              const values = Object.values(promo);
              console.log("values: ", values);

              const code = values.filter((p) => p.code === x)[0];
              console.log("code: ", code);

              if (code) {
                setPromoCode(code);
                return true;
              }
              return false;
            }}
            promoCode={promoCode?.code}
            promoCodeDiscount={discount}
            actualPrice={actualPrice}
            currentPrice={currentPrice}
            adults={adultsNumber || 0}
            childrenNumber={childrenNumber || 0}
            addons={addons}
            locale={locale}
          />
        </div>
      </div>
    </Container>
  );
}

const SelectedTour = ({
  tour,
  locale,
}: {
  tour: SanityTourPage;
  locale: string;
}) => {
  //   const { locale } = useContext(LocaleContext);
  // const locale = "en";
  return (
    <div className="max-lg:hidden pb-10 px-10 pt-4 bg-primary border border-darkblue/10 rounded-2xl flex flex-col gap-4">
      <div>
        <h1 className="md:text-[20px] md:leading-8 text-base font-bold text-center text-darkblue">
          Selected Tour
        </h1>
        <div className="w-1/4 m-auto mt-2 rounded-full border-b-2 md:border-b-[3px] border-[#FFBB0B] text-yellow " />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <div className="h-[220px] w-full relative">
          <Image
            alt=""
            src={
              (tour.hero_section?.image && urlFor(tour.hero_section?.image)) ||
              ""
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="bg-white flex flex-col gap-3 p-4">
          <p className="text-darkblue font-bold text-xl">
            {tour.hero_section?.title?.[locale]}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[6px]">
              <Image alt="" src={"/calendar.svg"} height={18} width={18} />
              <p className="text-[14px] leading-[22px] font-medium">
                {tour.overview_card?.duration?.[locale]}
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <Image alt="" src={"/globe.svg"} height={18} width={18} />
              <p className="text-[14px] leading-[22px] font-medium">
                {tour.overview_card?.countries} Countries
              </p>
            </div>
            <div className="flex items-center gap-[6px]">
              <Image alt="" src={"/map_plain.svg"} height={18} width={18} />
              <p className="text-[14px] leading-[22px] font-medium">
                {tour.overview_card?.cities} Cities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TripDuration = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  return (
    <div className="bg-primary border border-darkblue/10 rounded-2xl overflow-hidden max-lg:hidden">
      <div className="grid grid-cols-2 bg-[#3FA9F5] p-2">
        <p className="text-sm font-bold text-white place-self-center">
          Trip Start
        </p>
        <p className="text-sm font-bold text-white place-self-center">
          Trip End
        </p>
      </div>
      <div className="grid grid-cols-3 p-3">
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-darkblue">{startDate.toDateString()}</p>
          <p className="text-gray">London, UK</p>
        </div>
        <div className="w-12 ml-auto border-b rotate-90 border-[#FFBB0B]" />
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-darkblue">{endDate.toDateString()}</p>
          <p className="text-gray">London, UK</p>
        </div>
      </div>
    </div>
  );
};

const Costing = ({
  adults,
  childrenNumber,
  actualPrice,
  currentPrice,
  promoCodeDiscount,
  setPromoCode,
  clearPromoCode,
  promoCode,
  addons,
  locale,
}: {
  adults: number;
  childrenNumber: number;
  actualPrice: number;
  currentPrice: number;
  promoCodeDiscount: number;
  setPromoCode: (x: string) => boolean;
  clearPromoCode: () => void;
  promoCode?: string;
  addons?: number;
  locale: string;
}) => {
  const { control, handleSubmit, setError } = useForm();
  const people = adults + childrenNumber;
  const originalPrice =
    people * actualPrice + parseInt(people.toString()) * (addons || 0);
  const totalPrice =
    people * (currentPrice + (addons || 0)) - promoCodeDiscount;

  return (
    <div className="bg-primary border border-darkblue/10 rounded-2xl overflow-hidden md:p-10 p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-2">
            <p className="md:text-base text-[14px] leading-6 font-bold text-darkblue">
              Passengers
            </p>
            <p className="text-base font-bold text-darkblue">
              {adults > 0 && `${adults} Adults`}
              {childrenNumber > 0 && (
                <>
                  <br />
                  {`${childrenNumber} Children`}
                </>
              )}
            </p>
          </div>
          <div className="flex justify-between gap-2">
            <p className="md:text-base text-[14px] leading-5 font-medium text-gray">
              Tour Package
            </p>
            <p className="md:text-base text-[14px] leading-5 font-medium text-gray">
              {`${parseInt(people.toString())} x $ ${actualPrice}`}
            </p>
          </div>
          {addons != 0 && (
            <div className="flex justify-between gap-2">
              <p className="text-base font-medium text-gray">Addons</p>
              <p className="text-base font-medium text-gray">
                {parseInt(people.toString())} x $ {addons}
              </p>
            </div>
          )}
          {actualPrice != currentPrice && parseInt(adults.toString()) != 0 && (
            <div className="flex justify-between gap-2">
              <p className="text-base font-medium text-gray">Discount</p>
              <p className="md:text-base text-[14px] leading-5 font-medium text-[#4CAF50]">
                - {getPriceSymbol(locale)}{" "}
                {parseInt(people.toString()) * (actualPrice - currentPrice)}
              </p>
            </div>
          )}
          {promoCodeDiscount > 0 && (
            <div className="flex justify-between gap-2">
              <p className="text-base font-medium text-gray">Promo Code</p>
              <p className="text-base font-medium text-[#4CAF50]">
                - {getPriceSymbol(locale)} {promoCodeDiscount}
              </p>
            </div>
          )}
        </div>
        <hr className="w-full border border-[#FFBB0B]" />
        <div className="flex flex-col gap-5">
          {originalPrice != totalPrice && (
            <div className="flex justify-between gap-2">
              <p className="text-base font-bold text-darkblue">
                Original Price
              </p>
              <p className="text-base font-bold text-darkblue line-through">
                {getPriceSymbol(locale)} {originalPrice}
              </p>
            </div>
          )}
          <div>
            <div className="flex justify-between gap-2">
              <p className="text-base font-bold text-darkblue">Total Price</p>
              <p className="text-base font-bold text-darkblue">
                {getPriceSymbol(locale)} {totalPrice}
              </p>
            </div>
            {originalPrice != totalPrice && (
              <div>
                <p className="text-[#D10002] font-medium text-[10px] text-end">
                  You save {getPriceSymbol(locale)}
                  {(originalPrice - totalPrice).toFixed(2)}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between gap-2 items-center">
            <p className="text-base font-bold text-darkblue">Total Price</p>
            <p className="font-bold text-darkblue">
              {getPriceSymbol(locale)} {totalPrice}
            </p>
          </div>
        </div>

        {promoCode ? (
          <div
            className="flex flex-col items-center gap-2"
            onClick={clearPromoCode}
          >
            <div className="w-full text-center py-2 bg-white font-medium text-darkblue text-sm border border-gray rounded">
              {promoCode}
            </div>
            <p className="font-medium text-primary text-base ">
              Promocode applied
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit((data) => {
              if (!setPromoCode(data.promoCode)) {
                setError("promoCode", {
                  type: "invalid",
                  message: "This code is invalid",
                });
              }
            })}
            className="w-full relative"
          >
            <Input
              rules={{ required: true }}
              placeholder="Add promo code"
              type="text"
              control={control}
              name="promoCode"
            />
            <button className="absolute right-2 inset-y-0 text-primary font-medium">
              Apply
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
