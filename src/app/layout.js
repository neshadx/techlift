
// // src/app/layout.js

// import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import { SessionProviderWrapper } from "@/components/shared/SessionProviderWrapper";
// import LayoutWrapper from "@/components/shared/LayoutWrapper"; // ✅ Wraps with Navbar + Footer

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "LearnEdge",
//   description: "Modern Learning Platform",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SessionProviderWrapper>
//           <LayoutWrapper>
//             <main className="flex-grow">{children}</main>
//           </LayoutWrapper>
//         </SessionProviderWrapper>
//       </body>
//     </html>
//   );
// }


// // src/app/layout.js
// import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";
// import { SessionProviderWrapper } from "@/components/shared/SessionProviderWrapper";
// import LayoutWrapper from "@/components/shared/LayoutWrapper";

// //  React-Toastify
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
// const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// export const metadata = {
//   title: "LearnEdge",
//   description: "Modern Learning Platform",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <SessionProviderWrapper>
//           <LayoutWrapper>
//             <main className="flex-grow">{children}</main>
//           </LayoutWrapper>
//         </SessionProviderWrapper>

//         {/* Toasts available app-wide */}
//         <ToastContainer position="top-center" closeOnClick newestOnTop />
//       </body>
//     </html>
//   );
// }



// src/app/layout.js
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { SessionProviderWrapper } from "@/components/shared/SessionProviderWrapper";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { fetchSeo } from "@/lib/seo"; //  meta fetch

// React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

//  Dynamic SEO for Home (root)
export async function generateMetadata() {
  const seo = await fetchSeo("home");
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
      siteName: "TechLift",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProviderWrapper>
          <LayoutWrapper>
            <main className="flex-grow">{children}</main>
          </LayoutWrapper>
        </SessionProviderWrapper>

        {/* Toasts available app-wide */}
        <ToastContainer position="top-center" closeOnClick newestOnTop />
      </body>
    </html>
  );
}
