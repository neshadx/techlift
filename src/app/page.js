

// "use client";

// import Navbar from "@/components/shared/Navbar";
// import Hero from "@/components/home/Hero";
// import Features from "@/components/home/Features";
// import HowItWorks from "@/components/home/HowItWorks";
// import CoursesPreview from "@/components/home/CoursesPreview";
// import Testimonials from "@/components/home/Testimonials";
// import FAQ from "@/components/home/FAQ";
// import CTA from "@/components/home/CTA";
// import Footer from "@/components/shared/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen">
//         <Hero />
//         <Features />
//         <HowItWorks />
//         <CoursesPreview />
//         <Testimonials />
//         <FAQ />
//         <CTA />
//       </main>
//       <Footer />
//     </>
//   );
// }



"use client";

import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import CoursesPreview from "@/components/home/CoursesPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CoursesPreview />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}

