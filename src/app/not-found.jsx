




// src/app/not-found.jsx
import { fetchSeo } from "@/lib/seo";
import NotFoundClient from "@/components/system/NotFoundClient"; // client UI

export async function generateMetadata() {
  const seo = await fetchSeo("not-found");
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: seo.canonical },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      images: [{ url: seo.ogImage, width: 1200, height: 630 }],
      type: "website",
      siteName: "LearnEdge",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}

export default function NotFound() {
  return <NotFoundClient />;
}
