

//  BookingsPage.jsx
"use client";

import { useEffect, useState } from "react";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    try {
      await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "approved" }),
        headers: { "Content-Type": "application/json" },
      });
      fetchBookings();
    } catch (error) {
      console.error("Failed to update booking status");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (loading) return <div className="p-6">Loading bookings...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Manage Bookings</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Course</th>
            <th className="p-2">User</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="border-t">
              <td className="p-2">{booking.courseTitle}</td>
              <td className="p-2">{booking.userEmail}</td>
              <td className="p-2">{new Date(booking.date).toLocaleDateString()}</td>
              <td className="p-2 capitalize">{booking.status}</td>
              <td className="p-2">
                {booking.status === "pending" && (
                  <button
                    onClick={() => handleApprove(booking._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsPage;

