import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// ✅ PATCH: Approve a booking
export async function PATCH(req, { params }) {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    const result = await bookingsCollection.findOneAndUpdate(
      { _id: new ObjectId(params.id) },
      { $set: { status: "approved" } },
      { returnDocument: "after" }
    );

    if (!result.value) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Booking approved",
      booking: result.value,
    });
  } catch (err) {
    console.error("PATCH /bookings/[id] error:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// ✅ DELETE: Cancel/Delete a booking
export async function DELETE(req, { params }) {
  try {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");

    const result = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error("DELETE /bookings/[id] error:", err);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
