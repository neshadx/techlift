


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




