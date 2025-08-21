import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectDB();
    const courses = await db.collection("courses").find().toArray();
    return NextResponse.json(courses);
  } catch (err) {
    console.error("GET /api/courses error:", err);
    return NextResponse.json({ error: "Failed to load courses" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const newCourse = {
      title: body.title,
      description: body.description,
      instructor: body.instructor,
      image: body.image,
      price: parseFloat(body.price),
      duration: body.duration,
      createdAt: new Date(),
    };

    const db = await connectDB();
    const result = await db.collection("courses").insertOne(newCourse);

    return NextResponse.json({
      message: "Course created successfully",
      courseId: result.insertedId,
    });
  } catch (err) {
    console.error("POST /api/courses error:", err);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}
