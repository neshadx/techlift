

// src/app/dashboard/page.jsx
"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSession } from "next-auth/react";

// tiny count-up for nice UX
function CountUp({ value, duration = 500 }) {
  const [display, setDisplay] = useState(0);
  const start = useRef(0);
  const from = useRef(0);
  const to = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    from.current = display;
    to.current = Number(value) || 0;
    start.current = performance.now();

    const tick = (t) => {
      const progress = Math.min(1, (t - start.current) / duration);
      const next = Math.round(from.current + (to.current - from.current) * progress);
      setDisplay(next);
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [value, duration]); // re-run when value changes

  return <>{display}</>;
}

export default function DashboardHome() {
  const { data: session } = useSession();
  const email = session?.user?.email || "";

  const [coursesCount, setCoursesCount] = useState(0);
  const [bookingsCount, setBookingsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const profilePercent = useMemo(() => {
    // simple completion score based on existing fields
    let score = 0;
    if (session?.user?.name) score += 40;
    if (session?.user?.email) score += 40;
    if (session?.user?.image) score += 20;
    return score;
  }, [session]);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      // Courses
      const cRes = await fetch("/api/courses", { cache: "no-store" });
      const cData = (await cRes.json()) || [];
      setCoursesCount(Array.isArray(cData) ? cData.length : 0);

      // Bookings – try server filter first
      let bCount = 0;
      if (email) {
        const bRes = await fetch(`/api/bookings?email=${encodeURIComponent(email)}`, {
          cache: "no-store",
        });
        if (bRes.ok) {
          const bData = (await bRes.json()) || [];
          bCount = Array.isArray(bData) ? bData.length : 0;
        } else {
          // fallback: fetch all and filter on client
          const allRes = await fetch("/api/bookings", { cache: "no-store" });
          const allData = (await allRes.json()) || [];
          bCount = Array.isArray(allData)
            ? allData.filter((b) => b?.userEmail === email).length
            : 0;
        }
      }
      setBookingsCount(bCount);
    } catch (err) {
      console.error("Failed to load dashboard stats:", err);
    } finally {
      setLoading(false);
    }
  }, [email]);

  useEffect(() => {
    fetchStats();

    // refresh when tab is focused again
    const onFocus = () => fetchStats();
    window.addEventListener("visibilitychange", onFocus);
    window.addEventListener("focus", onFocus);

    // light polling every 15s so create/booking updates reflect quickly
    const iv = setInterval(fetchStats, 15000);

    return () => {
      window.removeEventListener("visibilitychange", onFocus);
      window.removeEventListener("focus", onFocus);
      clearInterval(iv);
    };
  }, [fetchStats]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h1>
          <p className="text-gray-600">
            Use the sidebar to navigate through your courses, bookings, and profile settings.
          </p>
        </div>

        <button
          onClick={fetchStats}
          className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className="mt-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <h3 className="text-lg font-medium text-gray-700">Total Courses</h3>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            {loading ? "—" : <CountUp value={coursesCount} />}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <h3 className="text-lg font-medium text-gray-700">My Bookings</h3>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            {loading ? "—" : <CountUp value={bookingsCount} />}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <h3 className="text-lg font-medium text-gray-700">Profile Completed</h3>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            {loading ? "—" : `${profilePercent}%`}
          </p>
          <div className="mt-3 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-green-600 transition-all"
              style={{ width: `${profilePercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

