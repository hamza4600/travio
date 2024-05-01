import Image from "next/image";
import { useEffect, useState } from "react";
import { Control, useController, useForm } from "react-hook-form";
import ReactStars from "react-stars";

import { localizedString } from "../../../../sanity/lib/client";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { urlFor } from "../../../../sanity/lib/client";
import { SanityTourPage } from "../../../../sanity/lib/types";

import { ERROR_MESSAGES } from "../TrailYourTour/Input";
import Input from "../TrailYourTour/Input";
export interface IPaymentTourExtras {
  adultMembers: number;
  childrenMembers: number;
  hotelChoice: string;
  roomType: string;
  sharingRoomWith: string;
  optionalVisits: any;
}
export default function Page1({
  payment,
  control,
  errors,
  locale,
  getValues,
}: {
  payment: any;
  control: any;
  errors: any;
  locale: string;
  getValues: (key: string) => any;
}) {
  return (
    <div className="flex flex-col gap-7">
      <div className="md:p-[38px] p-6 bg-primary border border-darkblue/10 rounded-2xl">
        <p className="md:text-[24px] md:leading-8 text-[19px] leading-[30px] font-bold text-darkblue">
          How many people are traveling?
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2.5 md:mt-6 mt-5">
          <Input
            control={control}
            name="adultMembers"
            placeholder="Adults (+ 12 year)"
            type="buttonNumber"
            variant="secondary"
            rules={{ required: true, min: 1 }}
          />
          <Input
            name="childrenMembers"
            placeholder="Children (3 - 11 year)"
            control={control}
            type="buttonNumber"
            variant="secondary"
          />
        </div>
      </div>
      <HotelChoosing
        errorMsg={(ERROR_MESSAGES as any)[errors?.["hotelChoice"]?.type]}
        control={control}
        room_options={payment?.hotel_types}
        locale={locale}
        selectedHotel={getValues("hotel") || "Basic"}
      />
      <RomeType
        errorMsg1={(ERROR_MESSAGES as any)[errors?.["roomType"]?.type]}
        control={control}
        room_sharing_options={
          payment?.hotel_types?.filter(
            (hotel: { name: string }) =>
              hotel?.name?.[locale] === getValues("hotelChoice")
          )[0]?.rooms
        }
        locale={locale}
      />
      <OptionalVisits
        control={control}
        data={payment?.extras}
        locale={locale}
      />
      <HelpWithExtras />
    </div>
  );
}

const HotelChoosing = ({
  room_options,
  errorMsg,
  control,
  locale,
  selectedHotel,
}: {
  room_options?: any;

  errorMsg?: string;
  control: Control<any>;
  locale: string;
  selectedHotel: string;
}) => {
  //   const { locale } = useContext(LocaleContext);
  return (
    <div className="bg-darkblue/[0.02] border border-darkblue/10 rounded-2xl overflow-hidden">
      <div className="py-2 bg-[#3FA9F5]">
        <p className="text-center text-white font-bold md:text-[20px] md:leading-8 text-base">
          Hotel choosing
        </p>
      </div>
      <div className="md:py-7 md:px-[38px] py-5 px-6 flex flex-col divide-y divide-[#FFBB0B]">
        {room_options?.map((hotel, index) => (
          <div key={index} className="flex justify-between gap-2 py-[18px]">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-darkblue md:text-[20px] md:leading-8 text-base">
                {hotel.name?.[locale]}
              </p>
              {/* @ts-ignore */}
              <ReactStars
                count={hotel.rating}
                value={hotel.rating}
                edit={false}
                size={16}
              />
              <p className="md:text-sm text-[12px] leading-[18px] font-medium text-gray">
                {hotel.description?.[locale]}
              </p>
            </div>
            <div className="w-[76px] flex flex-col justify-around items-center">
              <Input
                checkboxValue={hotel?.name?.[locale]} // e.g basic
                name="hotelChoice"
                type="checkbox"
                control={control}
                rules={{ required: true }}
                defaultValue={room_options[0]?.name?.[locale]}
              />
              {hotel.price?.discounted_price && (
                <p className="text-primary font-medium text-nowrap max-md:text-[12px] max-md:leading-[18px]">
                  {hotel.price?.currency_symbol?.[locale]}
                  {hotel.price?.discounted_price?.[locale]} Extra
                </p>
              )}
            </div>
          </div>
        ))}
        {errorMsg && (
          <span className="font-thin text-xs text-red">{errorMsg}</span>
        )}
      </div>
    </div>
  );
};

const RomeType = ({
  room_sharing_options,
  control,
  errorMsg,
  locale,
  errorMsg1,
}: {
  room_sharing_options?: any;
  errorMsg?: string;
  errorMsg1?: string;
  locale: string;
  control: Control<any>;
}) => {
  //   const { locale } = useContext(LocaleContext);

  return (
    <div className="bg-darkblue/[0.02] border border-darkblue/10 rounded-2xl overflow-hidden">
      <div className="py-2 bg-[#3FA9F5]">
        <p className="text-center text-white font-bold md:text-[20px] md:leading-8 text-base">
          Room Type
        </p>
      </div>
      <div className="md:py-7 md:px-[38px] py-5 px-6 flex flex-col divide-y divide-[#FFBB0B]">
        {room_sharing_options?.map((option, index) => (
          <div key={index} className="flex justify-between gap-2 py-[18px]">
            <div className="flex gap-5">
              <div className="w-[120px] h-[84px] flex gap-2 border rounded border-blue items-center justify-center relative">
                <Image key={index} alt="" src={urlFor(option.image)} fill />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-darkblue md:text-[20px] md:leading-8 text-base">
                  {option.name?.[locale]}
                </p>
                <p className="md:text-sm text-[12px] leading-5 font-medium text-gray">
                  {option.description?.[locale]}
                </p>
              </div>
            </div>
            <div className="w-[76px] flex flex-col justify-around items-center">
              <Input
                checkboxValue={option.name?.[locale]}
                name="roomType"
                type="checkbox"
                control={control}
                rules={{ required: true }}
                defaultValue={room_sharing_options[1]?.name?.[locale]}
              />
              {option.price?.discounted_price && (
                <p className="text-primary font-medium">
                  {option.price.currency_symbol?.[locale]}
                  {option.price.discounted_price?.[locale]} Extra
                </p>
              )}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-[18px] justify-between py-[18px]">
          <p className="md:text-base md:font-bold font-medium text-[14px] leading-6">
            Sharing room with someone who is not part of this booking?
          </p>
          <Input
            name="Sharing With"
            type="text"
            placeholder="Enter name"
            control={control}
          />
          {errorMsg1 && (
            <span className="font-thin text-xs text-red-200">{errorMsg1}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export const OptionalVisits = ({
  data,
  control,
  locale,
  defaultValues,
}: {
  data: NonNullable<SanityTourPage["payment"]>["extras"];
  control: Control<any>;
  locale: string;
  defaultValues?: any;
  //   NonNullable<
  //     NonNullable<BookingsQuery["user"]>["bookings"]
  //   >[number]["optionalTours"];
}) => {
  const { field } = useController({ control, name: "optionalVisits" });
  const { control: localControl, watch } = useForm();
  const [viewMore, setViewMore] = useState<string>();
  const [fixed, setFixed] = useState<Set<string>>(new Set());
  useEffect(() => {
    const sub = watch((val, info) => {
      field.onChange(val["optionalVisits"]);
    });
    return sub.unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!defaultValues) return;
    const hashmap: Record<string, Set<string>> = {};
    defaultValues?.forEach((val) => {
      if (hashmap[val.cityID]) hashmap[val.cityID].add(val.visitID);
      else hashmap[val.cityID] = new Set([val.visitID]);
      setFixed((o) => {
        o.add(val.cityID + val.visitID);
        return o;
      });
    });
    const newVal: Record<string, Array<string | undefined>> = {};
    data?.forEach((city) => {
      if (city.visits)
        newVal[city._key] = city.visits.map((visitID) =>
          hashmap[city._key]?.has(visitID._key) ? visitID._key : undefined
        );
    });
    field.onChange(newVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, defaultValues]);

  return (
    <div className="bg-darkblue/[0.02] border border-darkblue/10 rounded-2xl overflow-hidden">
      <div className="py-2 bg-[#3FA9F5]">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"/demo/add (1) 1.png"}
            alt="plus"
            className="max-md:w-5 max-md:h-5"
            width={28}
            height={28}
          />
          <p className="text-center text-white font-bold md:text-[20px] md:leading-8 text-base">
            Optional Visit
          </p>
        </div>
      </div>
      {data?.map((place, index) => {
        const count = field.value?.[place._key]?.filter(Boolean).length || 0;
        return (
          <div key={place._key}>
            <div className="flex justify-between items-center md:px-[38px] md:pt-[38px] pt-5 px-6">
              <p className="md:text-[20px] md:leading-[30px] text-base font-bold text-primary">
                {place.city_name?.[locale]}
              </p>
              <p className="md:text-base text-[12px] leading-5 font-bold text-primary">
                Choose up to ({count}/{place.count})
              </p>
            </div>
            <div className="md:px-[38px] px-6 flex flex-col divide-y divide-[#FFBB0B]">
              {place.visits
                ?.slice(0, viewMore === place._key ? 9999 : 2)
                .map((plan, index) => (
                  <div
                    key={place._key + plan._key}
                    className="flex justify-between gap-2 py-[18px]"
                  >
                    <div className="flex gap-5 max-md:gap-2 max-md:items-center">
                      {/* <div className="w-[120px] h-[84px] flex gap-2 border rounded border-blue items-center justify-center"> */}

                      <div className="flex flex-col md:max-w-[102px] md:w-full gap-2">
                        <div className="flex gap-2">
                          {plan.image && (
                            <Image
                              key={index}
                              alt={localizedString(plan.title)}
                              src={urlFor(plan.image)}
                              height={120}
                              width={102}
                              className="rounded-[8px] max-md:w-[69px] w-[120px] h-[102px] max-md:h-12"
                            />
                          )}
                          <p className="font-bold text-darkblue md:text-[20px] md:leading-[30px] text-[14px] md:hidden">
                            {plan.title?.[locale]}
                          </p>
                        </div>
                        <p className="md:text-sm text-[12px] leading-5 font-medium text-gray md:hidden">
                          {plan.description?.[locale]}
                        </p>
                      </div>

                      {/* </div> */}
                      <div className="md:flex hidden md:flex-col gap-1">
                        <p className="font-bold text-darkblue md:text-[20px] md:leading-[30px] text-[14px]">
                          {plan.title?.[locale]}
                        </p>
                        <p className="md:text-sm text-[12px] block max-md:hidden leading-5 font-medium text-gray">
                          {plan.description?.[locale]}
                        </p>
                      </div>
                    </div>
                    <div className="w-[76px] flex flex-col justify-around items-center">
                      <Input
                        defaultValue={field.value?.[place._key]?.[index]}
                        disabled={count >= (place.count || 0)}
                        editable={!fixed.has(place._key + plan._key)}
                        checkboxValue={plan._key}
                        name={`optionalVisits.${place._key}.${index}`}
                        type="checkbox"
                        control={localControl}
                      />
                      {plan.price?.discounted_price && (
                        <p className="text-primary md:text-base text-[12px] leading-[18px] font-medium whitespace-nowrap">
                          {plan.price.currency_symbol?.[locale]}
                          {plan.price?.discounted_price?.[locale]} Extra
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              {(place.visits?.length || 0) > 2 && (
                <div className="px-10 pb-7 pt-4">
                  <button
                    onClick={() =>
                      setViewMore((o) =>
                        o === place._key ? undefined : place._key
                      )
                    }
                    className="text-primary flex items-center gap-3 mx-auto font-bold"
                  >
                    View {viewMore === place._key ? "Less" : "More"}{" "}
                    {viewMore === place._key ? <CaretUp /> : <CaretDown />}
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const HelpWithExtras = () => {
  return (
    <div className="flex flex-col gap-6 p-10 rounded-2xl border border-darkblue/10">
      <h3 className="md:text-2xl text-base font-bold text-darkblue">
        Would you like help with extras?
      </h3>
      <div className="md:text-base text-[12px] leading-5 font-medium text-gray flex flex-col gap-5">
        <p>
          We can help you book transfers, accommodation, insurance and flights
          (note: flights and insurance are only available in some regions).
        </p>
        <p>
          Contact our adventure consultants via phone or live chat to discuss
          your options.
        </p>
      </div>
    </div>
  );
};
