import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = createClient();
  const body = await req.json();
  const {
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  } = body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    return Response.json({
      message: error.message,
    });
  }
  return Response.json(data);
}