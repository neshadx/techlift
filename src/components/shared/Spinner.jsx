"use client";

export default function Spinner({ label = "Loading..." }) {
  return (
    <div role="status" className="flex flex-col items-center justify-center gap-3 p-6">
      <div className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-4 border-t-emerald-600 animate-spin" />
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}
