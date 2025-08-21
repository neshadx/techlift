// error.jsx
"use client";
export default function Error({ error, reset }) {
  return (
    <div className="p-6">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="text-lg font-semibold text-emerald-800">Dashboard error</h3>
        <p className="mt-1 text-gray-700">{error?.message ?? "Something went wrong."}</p>
        <button onClick={() => reset()} className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
          Retry
        </button>
      </div>
    </div>
  );
}
