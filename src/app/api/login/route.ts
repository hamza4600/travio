import { supabase } from "@/utils/supabase/client";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    email,
    password,
  }: {
    email: string;
    password: string;
  } = body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return Response.json(error.message, { status: 400 });
  }
  return Response.json(data?.user);
}
