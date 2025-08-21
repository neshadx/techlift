// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("/api/courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Failed to fetch courses", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

//       {courses.length === 0 ? (
//         <p>No courses found.</p>
//       ) : (
//         <div className="grid gap-4">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="border rounded-md p-4 shadow-sm flex justify-between items-center"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold">{course.title}</h2>
//                 <p className="text-sm text-gray-500">
//                   Instructor: {course.instructor}
//                 </p>
//                 <p className="text-sm text-gray-500">Price: ${course.price}</p>
//               </div>

//               <Link
//                 href={`/courses/${course._id}`}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//               >
//                 View
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CoursesPage;


// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("/api/courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Failed to fetch courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
//         🎓 Available Courses
//       </h1>

//       {courses.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">No courses found.</p>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="border rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
//             >
//               <div>
//                 <h2 className="text-2xl font-semibold text-green-700 mb-2">
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm mb-1">
//                   Instructor: <span className="font-medium">{course.instructor}</span>
//                 </p>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Price: <span className="font-medium">${course.price}</span>
//                 </p>
//               </div>

//               <Link
//                 href={`/courses/${course._id}`}
//                 className="mt-auto inline-block text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//               >
//                 View Course
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CoursesPage;



// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("/api/courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (error) {
//         console.error("Failed to fetch courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
//         🎓 Available Courses
//       </h1>

//       {courses.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">No courses found.</p>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="border rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
//             >
//               <div>
//                 <h2 className="text-2xl font-semibold text-green-700 mb-2">
//                   {course.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm mb-1">
//                   Instructor: <span className="font-medium">{course.instructor}</span>
//                 </p>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Price: <span className="font-medium">${course.price}</span>
//                 </p>
//               </div>

//               <Link
//                 href={`/courses/${course._id}`}
//                 className="mt-auto inline-block text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
//               >
//                 View Course
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// };

// export default CoursesPage;



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const currency = (n) =>
  typeof n === "number"
    ? n.toLocaleString(undefined, { style: "currency", currency: "USD" })
    : n;

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        const data = await res.json();
        setCourses(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Available Courses
      </h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No courses found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const img = course?.image || course?.imageUrl || "/course-placeholder.jpg";
            return (
              <article
                key={course._id}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={img}
                    alt={course?.title || "Course image"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h2 className="text-xl font-semibold leading-tight text-gray-900 line-clamp-1">
                    {course.title}
                  </h2>

                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">Instructor:</span>{" "}
                    {course.instructor}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base font-semibold text-gray-900">
  Price: {currency(course.price)}
</span>


                    <Link
                      href={`/courses/${course._id}`}
                      className="rounded-xl px-4 py-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default CoursesPage;

