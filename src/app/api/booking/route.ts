import { createClient } from "@/utils/supabase/server"
import { error } from "console"

export async function POST(req: Request) {
  try {
    const supabase = createClient()

    const body = await req.json()

    const { data: bookingData } = await supabase.from("booking").insert([
      {
        email: body?.email,
        data: body,
      },
    ])

    console.log(error)
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
