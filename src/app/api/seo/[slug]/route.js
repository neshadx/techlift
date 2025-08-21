// // src/app/api/seo/[slug]/route.js
// import { NextResponse } from "next/server";

// const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// /** Meta conf*/
// const PAGES = {
//   home: {
//     title: "LearnEdge — Learn Smarter",
//     description:
//       "Explore interactive courses, expert mentors, and a platform built for future‑ready learning.",
//     path: "/",
//     image: "/og/learnedge-og.jpg",
//   },
//   about: {
//     title: "About — LearnEdge",
//     description:
//       "LearnEdge is a modern learning platform helping you master skills with expert‑led courses.",
//     path: "/about",
//     image: "/og/learnedge-og.jpg",
//   },
//   contact: {
//     title: "Contact — LearnEdge",
//     description: "Get in touch with the LearnEdge team for support and inquiries.",
//     path: "/contact",
//     image: "/og/learnedge-og.jpg",
//   },
//   courses: {
//     title: "Courses — LearnEdge",
//     description:
//       "Browse our latest courses designed by industry experts to upgrade your skills.",
//     path: "/courses",
//     image: "/og/learnedge-og.jpg",
//   },
// };

// export async function GET(_req, { params }) {
//   const slug = (params?.slug || "").toLowerCase();
//   const meta = PAGES[slug];

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



// // src/app/api/seo/[slug]/route.js
// import { NextResponse } from "next/server";

// const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// /** Meta confiq */
// const PAGES = {
//   home: {
//     title: "LearnEdge — Learn Smarter",
//     description:
//       "Explore interactive courses, expert mentors, and a platform built for future‑ready learning.",
//     path: "/",
//     image: "/og/learnedge-og.jpg",
//   },
//   about: {
//     title: "About — LearnEdge",
//     description:
//       "LearnEdge is a modern learning platform helping you master skills with expert‑led courses.",
//     path: "/about",
//     image: "/og/learnedge-og.jpg",
//   },
//   contact: {
//     title: "Contact — LearnEdge",
//     description: "Get in touch with the LearnEdge team for support and inquiries.",
//     path: "/contact",
//     image: "/og/learnedge-og.jpg",
//   },
//   courses: {
//     title: "Courses — LearnEdge",
//     description:
//       "Browse our latest courses designed by industry experts to upgrade your skills.",
//     path: "/courses",
//     image: "/og/learnedge-og.jpg",
//   },
//   login: {
//     title: "Login — LearnEdge",
//     description: "Sign in to access your dashboard and keep learning.",
//     path: "/login",
//     image: "/og/learnedge-og.jpg",
//   },
//   dashboard: {
//     title: "Dashboard — LearnEdge",
//     description: "Manage your profile, bookings, and enrolled courses.",
//     path: "/dashboard",
//     image: "/og/learnedge-og.jpg",
//   },
//   register: {
//     title: "Register — LearnEdge",
//     description: "Create an account to enroll in courses and manage bookings.",
//     path: "/register",
//     image: "/og/learnedge-og.jpg",
//   },

// };

// export async function GET(_req, { params }) {
//   const slug = (params?.slug || "").toLowerCase();
//   const meta = PAGES[slug];

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



// src/app/api/seo/[slug]/route.js
import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/** Meta config */
const PAGES = {
  home: {
    title: "LearnEdge - Home",
    description:
      "Explore interactive courses, expert mentors, and a platform built for future-ready learning.",
    path: "/",
    image: "/og/learnedge-og.jpg",
  },
  about: {
    title: "About - LearnEdge",
    description:
      "LearnEdge is a modern learning platform helping you master skills with expert-led courses.",
    path: "/about",
    image: "/og/learnedge-og.jpg",
  },
  contact: {
    title: "Contact - LearnEdge",
    description: "Get in touch with the LearnEdge team for support and inquiries.",
    path: "/contact",
    image: "/og/learnedge-og.jpg",
  },
  courses: {
    title: "Courses - LearnEdge",
    description:
      "Browse our latest courses designed by industry experts to upgrade your skills.",
    path: "/courses",
    image: "/og/learnedge-og.jpg",
  },
  login: {
    title: "Login - LearnEdge",
    description: "Sign in to access your dashboard and keep learning.",
    path: "/login",
    image: "/og/learnedge-og.jpg",
  },
  register: {
    title: "Register - LearnEdge",
    description: "Create an account to enroll in courses and manage bookings.",
    path: "/register",
    image: "/og/learnedge-og.jpg",
  },

  //  Dashboard main
  dashboard: {
    title: "Dashboard - LearnEdge",
    description: "Manage your profile, bookings, and enrolled courses.",
    path: "/dashboard",
    image: "/og/learnedge-og.jpg",
  },
  //  Dashboard sub-pages
  "dashboard-courses": {
    title: "Manage Courses - LearnEdge",
    description: "Create, edit, and manage your courses on LearnEdge.",
    path: "/dashboard/courses",
    image: "/og/learnedge-og.jpg",
  },
  "dashboard-my-bookings": {
    title: "My Bookings - LearnEdge",
    description: "View and manage your booked courses on LearnEdge.",
    path: "/dashboard/my-bookings",
    image: "/og/learnedge-og.jpg",
  },
  "dashboard-profile": {
    title: "Profile - LearnEdge",
    description: "Update your profile details and account settings on LearnEdge.",
    path: "/dashboard/profile",
    image: "/og/learnedge-og.jpg",
  },
  "not-found": {
  title: "404 — Page Not Found | LearnEdge",
  description: "Sorry, the page you are looking for could not be found.",
  path: "/not-found",
  image: "/og/learnedge-og.jpg",
},


};

export async function GET(_req, { params }) {
  const slug = (params?.slug || "").toLowerCase();
  const meta = PAGES[slug];

  if (!meta) {
    return NextResponse.json({ error: "SEO not found" }, { status: 404 });
  }

  return NextResponse.json({
    title: meta.title,
    description: meta.description,
    canonical: `${BASE}${meta.path}`,
    ogImage: meta.image.startsWith("http") ? meta.image : `${BASE}${meta.image}`,
  });
}

