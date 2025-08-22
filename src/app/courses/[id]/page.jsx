



"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const currency = (n) =>
  typeof n === "number"
    ? n.toLocaleString(undefined, { style: "currency", currency: "USD" })
    : n;

export default function CourseDetailsPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`/api/courses/${id}`);
        const data = await res.json();
        setCourse(data);
      } catch (error) {
        console.error("Failed to fetch course:", error);
      }
    };
    if (id) fetchCourse();
  }, [id]);

  const handleBooking = async () => {
    // Not logged in → ask to login
    if (!session?.user?.email) {
      const goLogin = await Swal.fire({
        icon: "warning",
        title: "Login required",
        text: "Please login to book this course.",
        confirmButtonText: "Go to Login",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonColor: "#16a34a",
      });
      if (goLogin.isConfirmed) router.push("/login");
      return;
    }

    // 1) Confirm intent
    const confirm = await Swal.fire({
      title: "Confirm booking?",
      text: `You are booking "${course.title}".`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, book it",
      cancelButtonText: "No",
      confirmButtonColor: "#16a34a",
    });
    if (!confirm.isConfirmed) return;

    // 2) Do booking (optional small loader)
    Swal.fire({
      title: "Processing...",
      text: "Creating your booking",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course._id,
          courseTitle: course.title,
          userEmail: session.user.email,
        }),
      });

      Swal.close();

      if (res.ok) {
        toast.success("Booking successful!");
        router.push("/dashboard/my-bookings");
      } else {
        toast.error("Booking failed. Please try again.");
      }
    } catch (error) {
      Swal.close();
      toast.error("Network error. Please try again.");
    }
  };

  if (!course) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-4">
          <div className="h-72 w-full rounded-2xl bg-gray-200" />
          <div className="h-6 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      </main>
    );
  }

  const {
    title,
    instructor,
    price,
    duration,
    description,
    image,
    imageUrl,
    level,
    category,
  } = course || {};
  const banner = image || imageUrl || "/course-placeholder.jpg";

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* Banner */}
      <section className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="relative h-72 w-full">
          <Image
            src={banner}
            alt={title || "Course image"}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-sm">
              {title}
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Left: details */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-3 text-sm">
              {instructor && (
                <span className="rounded-lg border bg-gray-50 px-3 py-1">
                  <span className="font-medium">Instructor:</span> {instructor}
                </span>
              )}
              {duration && (
  <span className="rounded-lg border bg-gray-50 px-3 py-1">
    <span className="font-medium">Duration:</span>{" "}
    {`${duration.toString().replace(/\D/g, "")} Month${parseInt(duration) > 1 ? "s" : ""}`}
  </span>
)}


              {level && (
                <span className="rounded-lg border bg-gray-50 px-3 py-1">
                  <span className="font-medium">Level:</span> {level}
                </span>
              )}
              {category && (
                <span className="rounded-lg border bg-gray-50 px-3 py-1">
                  <span className="font-medium">Category:</span> {category}
                </span>
              )}
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                About this course
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {description || "No description provided."}
              </p>
            </div>
          </div>

          {/* Right: sticky CTA */}
          <aside className="md:col-span-1">
            <div className="sticky top-6 rounded-2xl border bg-white p-5 shadow-sm">
              <div className="mb-4">
                <div className="text-sm text-gray-500">Price</div>
                <div className="text-2xl font-bold text-gray-900">
                  {currency(price)}
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-colors"
              >
                Book Now
              </button>

              <p className="mt-3 text-xs text-gray-500">
                You’ll confirm details in the booking step.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

