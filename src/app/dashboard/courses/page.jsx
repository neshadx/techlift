

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch("/api/courses");
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       console.error("Failed to fetch courses", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Are you sure you want to delete?");
//     if (!confirm) return;

//     try {
//       await fetch(`/api/courses/${id}`, { method: "DELETE" });
//       fetchCourses(); // refresh list
//     } catch (err) {
//       console.error("Failed to delete course", err);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   if (loading) return <div className="p-6">Loading courses...</div>;

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-semibold">Manage Courses</h1>
//         <Link
//           href="/dashboard/courses/new"
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           + New Course
//         </Link>
//       </div>

//       <table className="w-full border border-gray-300">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 text-left">Title</th>
//             <th className="p-2 text-left">Price</th>
//             <th className="p-2 text-left">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course._id} className="border-t">
//               <td className="p-2">{course.title}</td>
//               <td className="p-2">${course.price}</td>
//               <td className="p-2 flex gap-2">
//                 <Link
//                   href={`/dashboard/courses/${course._id}/edit`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   Edit
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(course._id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CoursesPage;



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// const CoursesPage = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch("/api/courses");
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       console.error("Failed to fetch courses", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Are you sure you want to delete this course?");
//     if (!confirm) return;

//     try {
//       const res = await fetch(`/api/courses/${id}`, { method: "DELETE" });

//       if (!res.ok) {
//         throw new Error("Failed to delete");
//       }

//       // Refresh list
//       fetchCourses();
//     } catch (err) {
//       console.error("Delete error:", err);
//       alert("Failed to delete course");
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   if (loading) return <div className="p-6 text-gray-500">Loading courses...</div>;

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Manage Courses</h1>
//         <Link
//           href="/dashboard/courses/new"
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
//         >
//           + New Course
//         </Link>
//       </div>

//       {courses.length === 0 ? (
//         <div className="text-gray-500">No courses found.</div>
//       ) : (
//         <div className="overflow-x-auto border rounded-md">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100 text-left">
//               <tr>
//                 <th className="p-3">Title</th>
//                 <th className="p-3">Instructor</th>
//                 <th className="p-3">Price</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {courses.map((course) => (
//                 <tr key={course._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">{course.title}</td>
//                   <td className="p-3">{course.instructor || "—"}</td>
//                   <td className="p-3">${course.price}</td>
//                   <td className="p-3 flex gap-4">
//                     <Link
//                       href={`/dashboard/courses/${course._id}/edit`}
//                       className="text-blue-600 hover:underline"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(course._id)}
//                       className="text-red-600 hover:underline"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CoursesPage;




"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const currency = (n) =>
  typeof n === "number"
    ? n.toLocaleString(undefined, { style: "currency", currency: "USD" })
    : n;

export default function DashboardCoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = useCallback(async () => {
    try {
      const res = await fetch("/api/courses", { cache: "no-store" });
      const data = await res.json();
      setCourses(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch courses", err);
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
    // Refresh when tab regains focus
    const onFocus = () => fetchCourses();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [fetchCourses]);

  const handleDelete = async (id, title) => {
    const confirm = await Swal.fire({
      title: "Delete course?",
      text: `Are you sure you want to delete "${title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626", // red-600
    });

    if (!confirm.isConfirmed) return;

    // small loading modal
    Swal.fire({
      title: "Deleting...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch(`/api/courses/${id}`, { method: "DELETE" });
      Swal.close();

      if (!res.ok) throw new Error("Failed to delete");

      toast.success("Course deleted");
      fetchCourses();
    } catch (err) {
      console.error("Delete error:", err);
      Swal.close();
      toast.error("Delete failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-gray-500">Loading courses...</div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Courses</h1>
          <p className="text-sm text-gray-600">Create, edit, and delete your courses.</p>
        </div>
        <Link
          href="/dashboard/courses/new"
          className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
        >
          + New Course
        </Link>
      </div>

      {/* Table */}
      {courses.length === 0 ? (
        <div className="rounded-2xl border bg-white p-8 text-center text-gray-600">
          No courses found. Click <span className="font-medium">“+ New Course”</span> to add one.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600 bg-gray-50">
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Instructor</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {courses.map((course) => (
                <tr key={course._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-900 font-medium">{course.title}</td>
                  <td className="px-4 py-3 text-gray-700">{course.instructor || "—"}</td>
                  <td className="px-4 py-3 text-gray-900">{currency(course.price)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/dashboard/courses/${course._id}/edit`}
                        className="rounded-md px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-50"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(course._id, course.title)}
                        className="rounded-md px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}




