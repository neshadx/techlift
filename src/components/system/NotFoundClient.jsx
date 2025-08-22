// src/components/system/NotFoundClient.jsx
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFoundClient() {
  //  body scroll 
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600 shadow">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 9v4m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        <h1 className="text-3xl font-semibold text-emerald-800">Page not found</h1>
        <p className="mt-2 text-gray-700">
          The page you’re looking for doesn’t exist or the URL is mistyped.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/" className="rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition">
            Go Home
          </Link>
          <Link href="/contact" className="rounded-xl border border-emerald-200 px-4 py-2 text-emerald-700 hover:bg-white transition">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
