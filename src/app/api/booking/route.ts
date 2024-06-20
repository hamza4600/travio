import { createClient } from "@/utils/supabase/server"

export async function POST(req: Request) {
  try {
    const supabase = createClient()

    const body = await req.json()

    const { data: bookingData } = await supabase.from("booking").insert([
      {
        optional_tours: body.optionalTours,
        adults: body.adults,
        from: body.from,
        to: body.to,
        children: body.children,
        guests: body.guests,
        tour: body.tour,
        hotel_type: body.hotelType,
        room_type: body.roomType,
        price: body.price,
        email: body.email,
      },
    ])

    return Response.json(bookingData, { status: 201 })
  } catch (error: any) {
    return Response.json(
      {
        message: error.message,
      },
      { status: 500 }
    )
  }
}
