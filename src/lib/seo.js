// // src/lib/seo.js
// const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// /** Static pages: home, about, contact, courses (list) */
// export async function fetchSeo(slug) {
//   const res = await fetch(`${BASE}/api/seo/${slug}`, {
//     cache: "no-store",
//     //  headers/cookies 
//   });
//   if (!res.ok) {
//     throw new Error(`SEO fetch failed for "${slug}"`);
//   }
//   return res.json(); // { title, description, canonical, ogImage }
// }

// /** Dynamic course details: /courses/[id] */
// export async function fetchCourseSeo(id) {
//   const res = await fetch(`${BASE}/api/seo/courses/${id}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error(`Course SEO fetch failed for id "${id}"`);
//   }
//   return res.json(); // { title, description, canonical, ogImage }
// }



// const BASE = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// export async function fetchSeo(slug) {
//   const res = await fetch(`${BASE}/api/seo/${slug}`, { cache: "no-store" });
//   if (!res.ok) throw new Error("SEO fetch failed");
//   return res.json();
// }

// export async function fetchCourseSeo(id) {
//   const res = await fetch(`${BASE}/api/seo/courses/${id}`, { cache: "no-store" });
//   if (!res.ok) throw new Error("Course SEO fetch failed");
//   return res.json();
// }



// src/lib/seo.js
import { headers } from "next/headers";

/** ---------- helpers ---------- */
function resolveBaseUrl() {
  // Prefer explicit env (set this on Vercel to your live URL)
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;

  // Otherwise infer from request headers (works on Vercel & Node runtime)
  try {
    const h = headers();
    const host = h.get("x-forwarded-host") || h.get("host") || "localhost:3000";
    const proto = h.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
    return `${proto}://${host}`;
  } catch {
    // Fallback for edge cases where headers() isn't available
    return "http://localhost:3000";
  }
}

function absUrl(pathOrUrl, base) {
  if (!pathOrUrl) return "";
  return /^https?:\/\//i.test(pathOrUrl) ? pathOrUrl : `${base}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

async function safeFetchJson(url) {
  const res = await fetch(url, { cache: "no-store", headers: { "x-internal-seo": "1" } });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${url}`);
  return res.json();
}

/** ---------- fallbacks ---------- */
const FALLBACK_SITE = {
  title: "LearnEdge",
  description: "Modern learning platform.",
  canonical: "/",
  ogImage: "/og/learnedge-og.jpg",
};

const FALLBACK_COURSE = (id = "") => ({
  title: `Course — LearnEdge`,
  description: "Explore our industry‑ready courses.",
  canonical: `/courses/${id || ""}`,
  ogImage: "/og/learnedge-og.jpg",
});

/** ---------- public API ---------- */
export async function fetchSeo(slug) {
  const base = resolveBaseUrl();

  try {
    const data = await safeFetchJson(`${base}/api/seo/${encodeURIComponent(slug)}`);

    return {
      title: data.title || FALLBACK_SITE.title,
      description: data.description || FALLBACK_SITE.description,
      canonical: data.canonical || absUrl(FALLBACK_SITE.canonical, base),
      ogImage: absUrl(data.ogImage || FALLBACK_SITE.ogImage, base),
    };
  } catch {
    // never throw in Server Components — return safe values
    return {
      title: FALLBACK_SITE.title,
      description: FALLBACK_SITE.description,
      canonical: absUrl(FALLBACK_SITE.canonical, base),
      ogImage: absUrl(FALLBACK_SITE.ogImage, base),
    };
  }
}

export async function fetchCourseSeo(id) {
  const base = resolveBaseUrl();

  try {
    const data = await safeFetchJson(`${base}/api/seo/courses/${encodeURIComponent(id)}`);

    return {
      title: data.title || FALLBACK_COURSE(id).title,
      description: data.description || FALLBACK_COURSE(id).description,
      canonical: data.canonical || absUrl(FALLBACK_COURSE(id).canonical, base),
      ogImage: absUrl(data.ogImage || FALLBACK_COURSE(id).ogImage, base),
    };
  } catch {
    const fb = FALLBACK_COURSE(id);
    return {
      title: fb.title,
      description: fb.description,
      canonical: absUrl(fb.canonical, base),
      ogImage: absUrl(fb.ogImage, base),
    };
  }
}
