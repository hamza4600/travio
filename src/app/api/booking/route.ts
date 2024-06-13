import { createClient } from "@/utils/supabase/server"

export async function POST(req: Request) {
  try {
    const supabase = createClient()

    const body = await req.json()

    const { data: bookingData, error: bookingError } = await supabase
      .from("booking")
      .insert([
        {
          email: body?.email,
          data: body,
        },
      ])
    if (bookingError) {
      return Response.json(
        {
          message: bookingError,
        },
        { status: 500 }
      )
    }
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
