

import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function GET(_req, { params }) {
  const { id } = params;

  // TODO:  DB  course (title, desc, image)
  //  fallback:
  const title = `Course Details`;
  const description =
    "Read the full details, syllabus and instructor info for this course.";
  const canonical = `${BASE}/courses/${id}`;
  const ogImage = `${BASE}/og/learnedge-og.jpg`;

  return NextResponse.json({ title, description, canonical, ogImage });
}
