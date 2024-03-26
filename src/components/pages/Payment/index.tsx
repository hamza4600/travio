"use client";
import React, { useEffect, useState } from "react";
// import { GetServerSideProps } from "next";
import { useSearchParams , useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
// import * as yup from "yup";

import {
  localizedNumber,
  localizedString,
} from "../../../../sanity/lib/client";
// import { useYupValidationResolver } from "@/components/pages/TrailYourTour/Input"
// import { urlFor } from "../../../../sanity/lib/client";

import {
  // SanityGlobals,
  // SanityLocale,
  SanityPricingSection,
  // SanityPromoCode,
  // SanityTourPage,
} from "../../../../sanity/lib/types";

// import { getSanitySlugFromSlugs } from "@/utils/utils";

import Layout from "@/components/layout";

// import Page3 from "@/components/sections/Payment/Page3";
import Tabs from "@/components/pages/Payment/Tabs";
import Page1, { IPaymentTourExtras } from "@/components/pages/Payment/Page1";
import Page2, { IContactInfo } from "./Page2";
import Page3 from "./Page3";
// import SEO from "@/components/Seo";

// import { AddBookingMutationVariables } from "../../../../../__generated__/graphql";

// type PageProps = {
//   slug: string;
//   data: SanityTourPage;
//   globals: SanityGlobals;
//   promo: SanityPromoCode[];
//   locale: SanityLocale;
//   from: number;
//   to: number;
// };

// const mockPaymentTourExtras: IPaymentTourExtras = {
//   adultMembers: 2,
//   childrenMembers: 1,
//   hotelChoice: "Standard Room",
//   roomType: "Double Room",
//   sharingRoomWith: "John Doe",
//   optionalVisits: {
//     city1: ["visit1", "visit2"],
//   },
// };

export type PaymentSchema = IPaymentTourExtras & IContactInfo;
export default function Page({ slug, data, locale, globals, promo }) {
  const pricingData: SanityPricingSection = data?.sections?.find(
    (section) => section._type === "pricing_section"
  ) as SanityPricingSection;

  const {
    control,
    setValue,
    handleSubmit,
    getValues,
    trigger,
    watch,
    formState: { errors },
  } = useForm<PaymentSchema>({
    mode: "onChange",
    defaultValues: {
      optionalVisits: {},
      adultMembers: 1,
      childrenMembers: 0,
    },
  });

  const [optionalVisits, setOptionalVisits] = useState(0);
  const [roomTypes, setRoomTypes] = useState(0);
  const [hotelChoice, setHotelChoice] = useState(0);
  console.log(data, "data8585");
  // get url 
  const searchParams = useSearchParams ();
  const from = searchParams?.get('from')
  const to = searchParams?.get('to')
  
  const startDate = new Date(from as string);
  const endDate = new Date(to as string);

  useEffect(() => {
    const unsub = watch((value: any, _info: any) => {
      const info = _info as { name: keyof typeof value };
      //@ts-ignore
      if (info.name?.startsWith("optionalVisits")) {
        let sum = 0;
        for (const cityId in value["optionalVisits"]) {
          const city = data.payment?.extras?.find(
            (city) => city._key === cityId
          );
          for (const visitId of value["optionalVisits"][cityId]) {
            if (visitId) {
              const visit = city?.visits?.find(
                (visit) => visit._key === visitId
              );
              if (visit) {
                sum += localizedNumber(visit.price?.discounted_price, locale);
              }
            }
          }
        }
        setOptionalVisits(sum);
      }
      if (info.name === "roomType") {
        setRoomTypes(
          data?.payment?.room_sharing_options?.reduce(
            (acc, extra) =>
              acc +
              (value["roomType"] === localizedString(extra?.title, locale)
                ? localizedNumber(extra.price?.discounted_price, locale)
                : 0),
            0
          ) || 0
        );
      }
      if (info.name === "hotelChoice") {
        setHotelChoice(
          data?.payment?.room_options?.reduce(
            (acc, extra) =>
              acc +
              (value["hotelChoice"] === localizedString(extra?.title, locale)
                ? localizedNumber(extra.price?.discounted_price, locale)
                : 0),
            0
          ) || 0
        );
      }
    });
    return unsub?.unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<PaymentSchema> = async (_data) => {
    setLoading(true);
    const optionalVisits = Object.keys(_data.optionalVisits).flatMap(
      (cityID) => {
        const city = data.payment?.extras?.find((city) => city._key === cityID);
        return _data.optionalVisits[cityID]
          .filter(Boolean)
          .map((visitID: string) => {
            const visit = city?.visits?.find((visit) => visit._key === visitID);
            return {
              cityID,
              visitID,
              cityName: localizedString(city?.city_name, locale),
              visitName: localizedString(visit?.title, locale),
              price: localizedNumber(visit?.price?.discounted_price, locale),
            };
          });
      }
    );
    const booking: any & { paid: number } = {
      adults: [
        {
          email: _data.email,
          dob: new Date(_data.dob).toString(),
          name: {
            firstName: _data.firstName,
            lastName: _data.lastName,
            middleName: _data.middleName,
            designation: _data.titlePrefix,
          },
          phone: { code: _data.mobileCode, number: _data.mobileNumber },
          nationality: _data.nationality,
          address: {
            country: _data.country,
            town: _data.town,
            state: _data.state,
            line1: _data.address,
          },
        },
        ...(_data?.adultPassenger?.map((passenger) => ({
          email: passenger.email,
          dob: new Date(passenger.dob).toString(),
          name: {
            firstName: passenger.firstName,
            lastName: passenger.lastName,
            middleName: passenger.middleName,
            designation: passenger.titlePrefix,
          },
        })) || []),
      ],
      from: startDate.toDateString(),
      children: parseInt(_data.childrenMembers.toString()),
      guests:
        parseInt(_data.childrenMembers.toString()) +
        parseInt(_data.adultMembers.toString()),
      tour: slug,
      hotelType: _data.hotelChoice,
      roomType: _data.roomType,
      to: endDate.toDateString(),
      paid: paymentMethod === "bank" ? 0 : bookOnly ? 20000 : totalPrice * 100,
      price: totalPrice * 100,
      email: _data.email,
      optionalTours: optionalVisits,
    };
    console.log(booking);
    fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(booking),
    })
      .then(async (res) => {
        if (paymentMethod === "bank") {
          alert("Payment info sent to the bank!");
        }
        const url = await res.text();
        router.replace(url || "/");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookOnly, setBookOnly] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<
    "stripe" | "paypal" | "bank"
  >("stripe");

  return (
    <Layout locale={locale} breadcrumbs={[]} globals={globals}>
      <Tabs
        promo={promo}
        control={control}
        onSubmit={handleSubmit(onSubmit)}
        tour={data}
        startDate={startDate}
        endDate={endDate}
        pricingData={pricingData}
        adultsNumber={watch("adultMembers")}
        childrenNumber={watch("childrenMembers")}
        trigger={trigger}
        setTotalPrice={setTotalPrice}
        loading={loading}
        addons={roomTypes + hotelChoice + optionalVisits}
      >
        <Page1
          locale={locale}
          errors={errors}
          control={control}
          payment={data.payment}
        />
        <Page2
          addPassenger={() =>
            setValue("adultMembers", getValues("adultMembers") + 1)
          }
          removePassenger={() => {
            const len = getValues("adultMembers");
            setValue("adultMembers", len - 1);
            setValue(
              "adultPassenger",
              getValues("adultPassenger").slice(0, len - 1)
            );
          }}
          adultsNumber={watch("adultMembers")}
          control={control}
        />
        <Page3
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
          bookOnly={bookOnly}
          toggleBookOnly={() => setBookOnly((o) => !o)}
          totalPrice={totalPrice}
        />
      </Tabs>
    </Layout>
  );
}
