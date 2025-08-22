


// src/app/dashboard/layout.jsx
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import { fetchSeo } from "@/lib/seo";

//  SEO (unchanged)
export async function generateMetadata() {
  const seo = await fetchSeo("dashboard");
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

export default function DashboardLayout({ children }) {
  return (
    //  Mobile uses 100svh to avoid address-bar jump; desktop unchanged
    <div className="flex min-h-[100svh] md:min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar:
          - md+ shows fixed column (as before)
          - mobile uses drawer from Sidebar component */}
      <Sidebar />

      {/* Content column */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar stays on top; spacing tuned for small screens */}
        <Topbar />

        {/* Main content:
            - better responsive padding
            - prevent double scroll, allow content scroll
            - constrain width on large screens without changing desktop look */}
        <main className="flex-1 min-w-0 overflow-y-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4">
          <div className="max-w-screen-2xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
