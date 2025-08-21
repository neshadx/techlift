


// "use client";

// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 border-t text-gray-600 py-6">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
//         <p className="text-sm">&copy; {new Date().getFullYear()} LearnEdge. All rights reserved.</p>
//         <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
//           <Link href="/about" className="hover:text-green-600 transition">
//             About
//           </Link>
//           <Link href="/contact" className="hover:text-green-600 transition">
//             Contact
//           </Link>
//           <Link href="/dashboard" className="hover:text-green-600 transition">
//             Dashboard
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// "use client";

// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-600 py-6 border-t border-gray-200">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
//         <p className="text-sm">© 2025 LearnEdge. All rights reserved.</p>
//         <div className="flex gap-6 text-sm">
//           <Link href="/about" className="hover:text-green-600 transition">
//             About
//           </Link>
//           <Link href="/contact" className="hover:text-green-600 transition">
//             Contact
//           </Link>
//           <Link href="/dashboard" className="hover:text-green-600 transition">
//             Dashboard
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// "use client";

// import Link from "next/link";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-600 py-6 border-t border-gray-200">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
//         <p className="text-sm">© 2025 LearnEdge. All rights reserved.</p>
//         <div className="flex gap-6 text-lg">
//           <Link
//             href="https://github.com/your-github-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-600 transition"
//           >
//             <FaGithub />
//           </Link>
//           <Link
//             href="https://www.linkedin.com/in/your-linkedin-username"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-600 transition"
//           >
//             <FaLinkedin />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // Hide footer on error page and maybe dashboard
  if (
    pathname === "/error" ||
    pathname === "/404" ||
    pathname.startsWith("/dashboard")
  ) {
    return null;
  }

  return (
    <footer id="site-footer" className="bg-white text-gray-600 py-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2025 TechLift. All rights reserved.</p>
        <div className="flex gap-6 text-lg">
          <Link
            href="https://github.com/neshadx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/neshad-mahmud"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
