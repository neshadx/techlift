

// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

// const MyBookingsPage = () => {
//   const { data: session } = useSession();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const res = await fetch(`/api/bookings?email=${session?.user?.email}`);
//         const data = await res.json();
//         setBookings(data);
//       } catch (error) {
//         console.error("Error fetching my bookings:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (session?.user?.email) {
//       fetchBookings();
//     }
//   }, [session?.user?.email]);

//   if (loading) return <div className="p-6 text-gray-500">Loading your bookings...</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">My Bookings</h1>

//       {bookings.length === 0 ? (
//         <p className="text-gray-500">You have not booked any courses yet.</p>
//       ) : (
//         <div className="overflow-x-auto border rounded-md">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100 text-left">
//               <tr>
//                 <th className="p-3">Course</th>
//                 <th className="p-3">Booking Date</th>
//                 <th className="p-3">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">{booking.courseTitle}</td>
//                   <td className="p-3">
//                     {new Date(booking.bookingDate || booking.date).toLocaleDateString()}
//                   </td>
//                   <td className="p-3 capitalize">
//                     <span
//                       className={`inline-block px-2 py-1 rounded text-xs font-medium ${
//                         booking.status === "pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-green-100 text-green-800"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
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

// export default MyBookingsPage;


// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";

// const MyBookingsPage = () => {
//   const { data: session, status } = useSession();
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchBookings = async () => {
//     try {
//       console.log("👤 Session email:", session?.user?.email);

//       const res = await fetch(`/api/bookings?email=${session?.user?.email}`);
//       const data = await res.json();
//       console.log("📦 Fetched bookings:", data);
//       setBookings(data);
//     } catch (error) {
//       console.error("❌ Error fetching bookings:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (status === "authenticated" && session?.user?.email) {
//       fetchBookings();
//     }
//   }, [status, session?.user?.email]);

//   const handleCancel = async (id) => {
//     const confirm = window.confirm("Are you sure you want to cancel this booking?");
//     if (!confirm) return;

//     try {
//       const res = await fetch(`/api/bookings/${id}`, {
//         method: "DELETE",
//       });
//       const result = await res.json();

//       if (res.ok) {
//         alert("❎ Booking cancelled.");
//         fetchBookings(); // Refresh list
//       } else {
//         alert(result.error || "Failed to cancel booking.");
//       }
//     } catch (err) {
//       console.error("❌ Error cancelling booking:", err);
//     }
//   };

//   if (status === "loading" || loading) {
//     return <div className="p-6 text-gray-500">Loading your bookings...</div>;
//   }

//   if (!session) {
//     return <div className="p-6 text-red-500">⚠️ You must be logged in to view bookings.</div>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">My Bookings</h1>

//       {bookings.length === 0 ? (
//         <p className="text-gray-500">You have not booked any courses yet.</p>
//       ) : (
//         <div className="overflow-x-auto border rounded-md">
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-100 text-left">
//               <tr>
//                 <th className="p-3">Course</th>
//                 <th className="p-3">Booking Date</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking) => (
//                 <tr key={booking._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">{booking.courseTitle}</td>
//                   <td className="p-3">
//                     {new Date(booking.bookingDate || booking.date).toLocaleDateString()}
//                   </td>
//                   <td className="p-3 capitalize">
//                     <span
//                       className={`inline-block px-2 py-1 rounded text-xs font-medium ${
//                         booking.status === "pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-green-100 text-green-800"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
//                   </td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleCancel(booking._id)}
//                       className="text-red-500 hover:underline"
//                     >
//                       Cancel
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

// export default MyBookingsPage;


"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function MyBookingsPage() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = useCallback(async () => {
    if (!session?.user?.email) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/bookings?email=${encodeURIComponent(session.user.email)}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  }, [session?.user?.email]);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      fetchBookings();
      const onFocus = () => fetchBookings();
      window.addEventListener("focus", onFocus);
      return () => window.removeEventListener("focus", onFocus);
    }
  }, [status, session?.user?.email, fetchBookings]);

  const handleCancel = async (id, title) => {
    const confirm = await Swal.fire({
      title: "Cancel this booking?",
      text: `You are about to cancel "${title}".`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel",
      cancelButtonText: "Keep",
      confirmButtonColor: "#dc2626",
    });
    if (!confirm.isConfirmed) return;

    Swal.fire({
      title: "Cancelling...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      const result = await res.json();
      Swal.close();

      if (!res.ok) {
        toast.error(result?.error || "Cancel failed");
        return;
      }

      toast.success("Booking cancelled");
      fetchBookings();
    } catch (err) {
      Swal.close();
      console.error("Cancel error:", err);
      toast.error("Network error. Try again.");
    }
  };

  if (status === "loading" || loading) {
    return <div className="p-6 text-gray-500">Loading your bookings...</div>;
  }

  if (!session) {
    return <div className="p-6 text-red-500">⚠️ You must be logged in to view bookings.</div>;
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-sm text-gray-600">Track and manage your course bookings.</p>
      </div>

      {/* Empty state */}
      {bookings.length === 0 ? (
        <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-500">🗓️</span>
          </div>
          <p className="text-gray-700 font-medium">You have no bookings yet.</p>
          <p className="text-gray-500 text-sm mt-1">Browse courses and book your first one!</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border bg-white shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600 bg-gray-50">
                <th className="px-4 py-3 font-medium">Course</th>
                <th className="px-4 py-3 font-medium">Booking Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {bookings.map((b) => {
                const dateStr = new Date(b.bookingDate || b.date).toLocaleDateString();
                const isPending = (b.status || "pending").toLowerCase() === "pending";
                return (
                  <tr key={b._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900 font-medium">{b.courseTitle}</td>
                    <td className="px-4 py-3 text-gray-700">{dateStr}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          isPending
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {b.status || "pending"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleCancel(b._id, b.courseTitle)}
                        className="rounded-md px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

