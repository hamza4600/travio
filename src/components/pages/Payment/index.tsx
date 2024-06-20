"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import { localizedString } from "../../../../sanity/lib/client"

import { SanityPricingSection } from "../../../../sanity/lib/types"

import Layout from "@/components/layout"

import Page1, { IPaymentTourExtras } from "@/components/pages/Payment/Page1"
import Tabs from "@/components/pages/Payment/Tabs"
import Page2, { IContactInfo } from "./Page2"
import Page3 from "./Page3"

export type PaymentSchema = IPaymentTourExtras & IContactInfo
export default function Page({ slug, data, locale, globals, promo }) {
  const pricingData: SanityPricingSection = data?.sections?.find(
    (section) => section._type === "pricing_section"
  ) as SanityPricingSection

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
  })

  const [optionalVisits, setOptionalVisits] = useState<number>(0)
  const [roomTypes, setRoomTypes] = useState<number>(0)
  const [hotelChoice, setHotelChoice] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  // get url

  const searchParams = useSearchParams()
  const from = Number(searchParams?.get("from"))
  const to = Number(searchParams?.get("to"))

  const startDate = new Date(from)
  const endDate = new Date(to)

  const router = useRouter()

  useEffect(() => {
    const unsub = watch((value: any, _info: any) => {
      const info = _info as { name: keyof typeof value; values: any }
      //@ts-ignore
      if (info.name?.startsWith("optionalVisits")) {
        let sum = 0
        for (const cityId in value["optionalVisits"]) {
          const city = data.payment?.extras?.find(
            (city) => city._key === cityId
          )
          for (const visitId of value["optionalVisits"][cityId]) {
            if (visitId) {
              const visit = city?.visits?.find(
                (visit) => visit._key === visitId
              )
              if (visit) {
                sum += Number(visit.price?.discounted_price?.[locale])
              }
            }
          }
        }
        setOptionalVisits(sum)
        setTotalPrice((prev) => Number(prev + sum))
      }
      if (info.name === "roomType") {
        const price =
          Number(
            data?.payment?.hotel_types
              ?.find(
                (hotel) => hotel.name?.[locale] === getValues("hotelChoice")
              )
              ?.rooms?.find(
                (room) => room.name?.[locale] === info.values.roomType
              )?.price?.discounted_price?.[locale]
          ) || 0
        setRoomTypes(price)
        // set total price price variable with existing amounbt
        setTotalPrice((prev) => Number(prev + price))
      }
      if (info.name === "hotelChoice") {
        // dispatch(setHotel(info.values.hotelChoice));
        const price1 =
          Number(
            data?.payment?.hotel_types?.find(
              (hotel) => hotel.name?.[locale] === info.values.hotelChoice
            )?.price?.discounted_price?.[locale]
          ) || 0
        setHotelChoice(price1)
        const price2 =
          Number(
            data?.payment?.hotel_types
              ?.find(
                (hotel) => hotel.name?.[locale] === info.values.hotelChoice
              )
              ?.rooms?.find(
                (room) => room.name?.[locale] === getValues("roomType")
              )?.price?.discounted_price?.[locale]
          ) || 0
        setRoomTypes(price2)
        // set total price price variable with existing amounbt
        setTotalPrice((prev) => Number(prev + price1 + price2))
      }
    })
    return unsub?.unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [loading, setLoading] = useState(false)
  const onSubmit: SubmitHandler<PaymentSchema> = async (_data) => {
    setLoading(true)
    const optionalVisits = Object.keys(_data.optionalVisits).flatMap(
      (cityID) => {
        const city = data.payment?.extras?.find((city) => city._key === cityID)
        return _data.optionalVisits[cityID]
          .filter(Boolean)
          .map((visitID: string) => {
            const visit = city?.visits?.find((visit) => visit._key === visitID)
            return {
              cityID,
              visitID,
              cityName: localizedString(city?.city_name, locale),
              visitName: localizedString(visit?.title, locale),
              price: Number(
                // localizedNumber(visit?.price?.discounted_price, locale)
                visit?.price?.discounted_price?.[locale]
              ),
            }
          })
      }
    )
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
      paid:
        paymentMethod === "bank" ? 0 : bookOnly ? 20000 : Number(totalPrice),
      price: Number(totalPrice),
      email: _data.email,
      optionalTours: optionalVisits,
    }

    console.log(booking)

    await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(booking),
    }).finally(() => {
      setLoading(false)
    })

    // await fetch("/api/payment", {
    //   method: "POST",
    //   body: JSON.stringify(booking),
    // })
    //   .then(async (res) => {
    //     const data = await res.json()
    //     console.log(data)
    //     // router.push(data.url)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }
  const [bookOnly, setBookOnly] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<
    "stripe" | "paypal" | "bank"
  >("stripe")
  return (
    <Layout
      locale={locale}
      breadcrumbs={[]}
      promo_banner={globals?.banner}
      globals={globals}
    >
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
        locale={locale}
        totalPrice={totalPrice}
      >
        <Page1
          locale={locale}
          errors={errors}
          control={control}
          payment={data.payment}
          getValues={getValues}
        />
        <Page2
          addPassenger={() =>
            setValue("adultMembers", getValues("adultMembers") + 1)
          }
          removePassenger={() => {
            const len = getValues("adultMembers")
            setValue("adultMembers", len - 1)
            setValue(
              "adultPassenger",
              getValues("adultPassenger").slice(0, len - 1)
            )
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
  )
}
