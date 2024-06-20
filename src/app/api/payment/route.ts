import { Stripe } from "stripe"
// takes the amount, name, mode,months and subscriptionAmount
const createCheckoutSession = async (
  amount: number,
  name: string,
  mode: "payment" | "subscription",
  // subscriptionAmount?: number,
  // months?: number,
  trip: any
) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const testClock = await stripe.testHelpers.testClocks.create({
    // @ts-ignore
    frozen_time: parseInt(new Date().getTime() / 1000),
  })

  const customer = await stripe.customers.create({
    test_clock: testClock.id,
  })

  const line_items =
    mode === "payment"
      ? [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: name || "Tour",
                description: `Payment amount is $ ${amount}`,
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ]
      : [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: name || "Tour",
                description: `Payment amount is $ ${amount}`,
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ]
  // : [
  //     {
  //       price_data: {
  //         currency: "usd",
  //         product_data: {
  //           name: name || "Tour",
  //           description: `Deposit amount is $ ${
  //             amount / 100
  //           } and remaining amount is $ ${
  //             subscriptionAmount! / 100
  //           } for ${months} months`,
  //         },
  //         unit_amount: amount!,
  //         recurring: {
  //           interval: "month",
  //         },
  //       },

  //       quantity: 1,
  //     },
  //   ]

  console.log(trip)
  // @ts-ignore
  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    mode: mode,
    metadata: {
      name: trip.adults[0].email,
      phone: trip.adults[0].phone.code + trip.adults[0].phone.number,
    },
    line_items: line_items,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  })

  return Response.json(
    { url: session.url, status: session.status, metadata: session.metadata },
    { status: 201 }
  )
}

// generate subscription schedule amount calculation
// const calculateSubscriptionAmount = (price: number, months: number) => {
//   // create subscription for remaining months
//   const subscriptionAmount = price / months
//   return Math.round(subscriptionAmount)
// }

export async function POST(req: Request) {
  const trip = await req.json()

  try {
    console.log("TRIP: ", trip)
    // we have to do these calcuations
    // take the price of tour from trip?.price
    const price = Number(trip.price)
    console.log("PRICE: ", price)
    // generate random trip end date that should be greater than start date
    const randomEndDate = new Date(
      new Date().getTime() + Math.random() * 10000000000
    )

    console.log("RANDOM END DATE: ", randomEndDate)

    // calculate the number of months between start and end date
    const months =
      Math.floor(randomEndDate.getMonth() - new Date().getMonth()) + 4

    console.log("MONTHS: ", months)

    return createCheckoutSession(price, trip.tour, "payment", trip)

    // if the number of months between start and end date is 1-2 then price is full price
    // if (months <= 2) {
    //   return createCheckoutSession(price, trip.tour, "payment")
    // } else {
    //   // if the number of months between start and end date is greater than 2, then take the deposit amount of $200 and remaining amount create subscription for remaining months (like if months are 3 then 2 months subscription)
    //   const depositAmount = 20000
    //   const remainingAmount = price - depositAmount
    //   const subscriptionAmount = calculateSubscriptionAmount(
    //     remainingAmount,
    //     months - 1
    //   )
    //   console.log("SUBSCRIPTION AMOUNT: ", subscriptionAmount)

    //   return createCheckoutSession(
    //     depositAmount,
    //     trip.tour,
    //     "subscription",
    //     subscriptionAmount,
    //     months - 1
    //   )
    // }
  } catch (e: any) {
    console.log("STRIPE ERROR: ", e.message)

    return Response.json(
      {
        error: e.message,
      },
      {
        status: 400,
      }
    )
  }
}
