import { Stripe } from "stripe";

export async function POST(req: Request) {
  try {
    // const { trip } = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 20000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return Response.json(session.url);
  } catch (e: any) {
    console.log("STRIPE ERROR: ", e.message);

    return Response.json(
      {
        error: e.message,
      },
      {
        status: 400,
      }
    );
  }
}
