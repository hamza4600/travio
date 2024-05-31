"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function pay(formData: FormData) {
  const supabase = createClient();
  const bookingId = formData.get("bookingId");
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/api/payment";
  const { data: user, error } = await supabase.auth.getUser();
  if (error || !user.user) {
    redirect("/login");
  }
  const { data: trip } = await supabase
    .from("booking")
    .select("*")
    .eq("id", bookingId)
    .single();
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      trip: trip,
    }),
  });

  if (res.ok) {
    const { url } = await res.json();
    redirect(url);
  } else {
    redirect("/dashboard");
  }
}