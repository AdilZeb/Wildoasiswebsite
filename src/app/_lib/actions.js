"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function UpdateGuest(formData) {
    console.log(formData);
  const session = await auth();
  
  if (!session)
    throw new Error("You must be logged in to update your guest profile");
  const nationalID = formData.get("nationalID");
  const [nationality,countryFlag] = formData.get("nationality").split("%");
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Invalid National ID");
  const updateData = {
    nationalID,
    nationality,
    countryFlag, 
   
  };
  console.log("update data",updateData);
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.id);
  if (error) throw new Error("Guest could not be updated");
  revalidatePath("/accounts/profile");
  
}

export async function deleteReservation(bookingId){
    const session = await auth();
        const guestBookings=await getBookings(session.user.id);
        const bookingsID= guestBookings.map((booking) => booking.id);
        if (!bookingsID.includes(bookingId))
        throw new Error("You do not have a reservation with this ID");
    if (!session)
      throw new Error("You must be logged in to delete your reservation");
    const {  error } = await supabase.from('bookings').delete().eq('id', bookingId);

  if (error) {
    console.error(error);
    throw new Error('Booking could not be deleted');
  }
  revalidatePath("/accounts/reservations");
}

export async function UpdateBooking(formData) {
  const session = await auth();
  if(!session) throw new Error("You must be logged in to update your reservation");
  console.log(formData);
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
  }
  const bookingId= Number(formData.get("reservationId"));
  console.log("update booking",updateData,bookingId);
  const {error } = await supabase
    .from('bookings')
    .update(updateData)
    .eq('id', bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
  revalidatePath("/accounts/reservations/");
  redirect("/accounts/reservations");
}
export async function SignInAcion() {
  await signIn("google", { redirectTo: "/accounts" });
}
export async function SignOutAcion() {
  await signOut({ redirectTo: "/" });
}
