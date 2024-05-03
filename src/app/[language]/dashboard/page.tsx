import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { logout, pay } from "./actions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    redirect("/login");
  }

  const { data: booking } = await supabase
    .from("booking")
    .select(`*`)
    .eq("customer", data.user.id);

  return (
    <div className="min-h-screen max-w-7xl mx-auto my-4">
      <h1 className="font-bold text-4xl">Dashboard</h1>
      <div className="flex items-center gao-4 justify-between">
        <p className="my-4">
          {data ? (
            <span>Welcome, {data.user?.user_metadata?.name}</span>
          ) : (
            <span>Not signed in</span>
          )}
        </p>
        <form action={logout}>
          <Button type="submit">Logout</Button>
        </form>
      </div>
      <h2 className="my-4 text-3xl font-bold">Recent Bookings</h2>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Tour </TableHead>
              <TableHead>Booking Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {booking?.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.data?.tour}</TableCell>
                <TableCell>
                  {new Date(booking.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {booking?.approved ? (
                    <form action={pay} method="POST">
                      <input
                        type="hidden"
                        name="bookingId"
                        value={booking.id}
                      />
                      <Button type="submit">Pay</Button>
                    </form>
                  ) : (
                    "Pending"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
