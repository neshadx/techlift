// export default function AboutPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-green-700 mb-6">About LearnEdge</h1>
//       <p className="text-gray-700 text-lg mb-4 leading-relaxed">
//         LearnEdge is a modern learning platform built to help you master real-world skills through
//         engaging courses, expert mentors, and hands-on projects. Our mission is to make education
//         accessible, affordable, and effective for learners across the globe.
//       </p>
//       <p className="text-gray-700 text-lg mb-4 leading-relaxed">
//         Whether you’re just starting out or looking to advance your career, LearnEdge provides
//         the tools and resources you need to succeed in today’s competitive job market.
//       </p>
//       <p className="text-gray-700 text-lg leading-relaxed">
//         We’re committed to innovation, community, and continuous improvement. Join thousands
//         of learners who trust LearnEdge for their professional growth.
//       </p>
//     </div>
//   );
// }



// // src/app/about/page.jsx
// "use client";

// import Image from "next/image";

// const AboutPage = () => {
//   return (
//     <section className="max-w-6xl mx-auto px-4 py-16">
//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             About <span className="text-green-600">LearnEdge</span>
//           </h1>
//           <p className="text-gray-600 mb-4 text-lg leading-relaxed">
//             LearnEdge is a modern learning platform built for future-ready learners. 
//             Our goal is to provide access to high-quality, interactive, and affordable courses 
//             for everyone, anywhere.
//           </p>
//           <p className="text-gray-600 text-lg">
//             With expert mentors, dynamic content, and real-world projects, we make education practical 
//             and engaging. Whether you're starting your career or advancing your skills, LearnEdge is 
//             your companion in your learning journey.
//           </p>
//         </div>
//         <div>
//           <Image
//             src="/about.jpg" //  put image in public/about.jpg
//             alt="About LearnEdge"
//             width={500}
//             height={350}
//             className="rounded-xl shadow-lg w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPage;



// src/app/about/page.jsx
"use client";

import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">TechLift</span>
          </h1>
          <p className="text-gray-600 mb-5 text-lg leading-relaxed">
            TechLift is a modern learning platform built for future-ready
            learners. Our goal is to provide access to high-quality,
            interactive, and affordable courses for everyone, anywhere.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With expert mentors, dynamic content, and real-world projects, we
            make education practical and engaging. Whether you're starting your
            career or advancing your skills, TechLift is your companion in
            your learning journey.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <Image
            src="https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"
            alt="About LearnEdge"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

