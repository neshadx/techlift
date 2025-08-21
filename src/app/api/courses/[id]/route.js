import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const db = await connectDB();
    const course = await db
      .collection("courses")
      .findOne({ _id: new ObjectId(params.id) });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (err) {
    console.error("GET course error:", err);
    return NextResponse.json({ error: "Failed to fetch course" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const body = await req.json();

    const db = await connectDB();
    const result = await db.collection("courses").updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          title: body.title,
          description: body.description,
          instructor: body.instructor,
          image: body.image,
          price: parseFloat(body.price),
          duration: body.duration,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "Update failed" }, { status: 400 });
    }

    return NextResponse.json({ message: "Course updated successfully" });
  } catch (err) {
    console.error("PUT course error:", err);
    return NextResponse.json({ error: "Failed to update course" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const db = await connectDB();
    const result = await db
      .collection("courses")
      .deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Delete failed" }, { status: 400 });
    }

    return NextResponse.json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error("DELETE course error:", err);
    return NextResponse.json({ error: "Failed to delete course" }, { status: 500 });
  }
}
