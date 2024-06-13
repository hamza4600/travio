import Stripe from "stripe"

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  try {
    let event = await req.json()

    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSession = event.data.object

        let schedule = await stripe.subscriptionSchedules.create({
          from_subscription: checkoutSession.subscription,
        })
        const phases = schedule.phases.map((phase) => ({
          start_date: phase.start_date,
          end_date: phase.end_date,
          items: phase.items,
        }))

        schedule = await stripe.subscriptionSchedules.update(schedule.id, {
          end_behavior: "cancel",
          phases: [
            ...(phases as any),
            {
              items: [
                {
                  price_data: {
                    currency: "usd",
                    product: "prod_PvGrIv9atXO5wq",
                    unit_amount: 10000,
                    recurring: {
                      interval: "month",
                    },
                  },
                },
              ],
              iterations: 2,
              proration_behavior: "none",
            },
          ],
        })
        break
      default:
        // Unexpected event type
        return Response.json({ received: false }, { status: 400 })
    }
    console.log("Payment Recived, send the data to Supabase")
    return Response.json({ received: true })
  } catch (error: any) {
    return Response.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    )
  }
}
