import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      return Response.redirect("/login");
    }

    const body = await req.json();

    console.log("body", body);

    const { data: bookingData, error: bookingError } = await supabase
      .from("booking")
      .insert([
        {
          customer: data.user.id,
          data: body,
        },
      ]);
    if (bookingError) {
      return Response.json(
        {
          message: error,
        },
        { status: 500 }
      );
    }
    return Response.json(bookingData, { status: 201 });
  } catch (error: any) {
    return Response.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
