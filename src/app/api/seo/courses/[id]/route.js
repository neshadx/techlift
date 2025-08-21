// // src/app/api/seo/courses/[id]/route.js
// import { NextResponse } from "next/server";

// const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// // mock data. 
// const COURSE_SEO = {
//   "101": {
//     title: "React Fundamentals — Course 101",
//     description:
//       "Master React basics: components, props, state, and hooks with hands‑on projects.",
//     image: "/og/learnedge-og.jpg",
//     path: "/courses/101",
//   },
//   "102": {
//     title: "Next.js 15 for Beginners — Course 102",
//     description:
//       "Build production‑ready apps with the App Router, server actions, and metadata API.",
//     image: "/og/learnedge-og.jpg",
//     path: "/courses/102",
//   },
// };

// export async function GET(_req, { params }) {
//   const id = String(params?.id || "").trim();
//   const meta = COURSE_SEO[id];

//   if (!meta) {
//     return NextResponse.json({ error: "SEO not found" }, { status: 404 });
//   }

//   return NextResponse.json({
//     title: meta.title,
//     description: meta.description,
//     canonical: `${BASE}${meta.path}`,
//     ogImage: meta.image.startsWith("http") ? meta.image : `${BASE}${meta.image}`,
//   });
// }



import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function GET(_req, { params }) {
  const { id } = params;

  // TODO: চাইলে এখানে DB থেকে course টেনে আনবে (title, desc, image)
  // ডেমো fallback:
  const title = `Course Details`;
  const description =
    "Read the full details, syllabus and instructor info for this course.";
  const canonical = `${BASE}/courses/${id}`;
  const ogImage = `${BASE}/og/learnedge-og.jpg`;

  return NextResponse.json({ title, description, canonical, ogImage });
}
