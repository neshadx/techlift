// "use client";

// export default function Error({ error, reset }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center text-center">
//       <div>
//         <h2 className="text-2xl font-bold mb-4 text-red-600">Something went wrong!</h2>
//         <p className="mb-4">{error?.message || "Unknown error occurred."}</p>
//         <button
//           onClick={() => reset()}
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
//         >
//           Try Again
//         </button>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { AlertTriangle } from "lucide-react";

// export default function Error({ error, reset }) {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center border border-gray-200">
//         {/* Icon */}
//         <div className="flex justify-center mb-4">
//           <div className="bg-red-100 p-3 rounded-full">
//             <AlertTriangle className="text-red-500 w-8 h-8" />
//           </div>
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           Something went wrong!
//         </h2>

//         {/* Message */}
//         <p className="text-gray-600 mb-6">
//           {error?.message || "An unexpected error occurred. Please try again."}
//         </p>

//         {/* Retry Button */}
//         <button
//           onClick={() => reset()}
//           className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-md transition-colors duration-200"
//         >
//           Try Again
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="max-w-xl w-full rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600 shadow">
          {/* icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 9v4m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        <h2 className="text-2xl font-semibold text-emerald-800">Something went wrong</h2>
        <p className="mt-2 text-gray-700">
          {error?.message ?? "An unexpected error occurred. Please try again."}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 transition"
          >
            Try again
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="rounded-xl border border-emerald-200 px-4 py-2 text-emerald-700 hover:bg-white transition"
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
}

