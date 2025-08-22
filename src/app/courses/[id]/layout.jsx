

// src/app/courses/[id]/layout.jsx
import { fetchCourseSeo } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  try {
    const seo = await fetchCourseSeo(params.id);
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical: seo.canonical },
      openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.canonical,
        images: [{ url: seo.ogImage, width: 1200, height: 630 }],
        type: "article",
        siteName: "LearnEdge",
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
        images: [seo.ogImage],
      },
    };
  } catch {
    // API  fallback meta
    return {
      title: "Course Details",
      description: "Explore the full details of this course.",
    };
  }
}

export default function CourseLayout({ children }) {
  return <>{children}</>;
}
