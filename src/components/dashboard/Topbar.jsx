

// "use client";

// import { signOut, useSession } from "next-auth/react";
// import { LogOut } from "lucide-react";
// import Image from "next/image";

// const Topbar = () => {
//   const { data: session } = useSession();
//   const user = session?.user;

//   return (
//     <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-white shadow-sm">
//       <div className="text-lg font-semibold text-gray-700">
//         Welcome to LearnEdge Dashboard
//       </div>

//       <div className="flex items-center gap-4">
//         {/*  Profile image */}
//         {user?.image && (
//           <Image
//             src={user.image}
//             alt="Profile"
//             width={36}
//             height={36}
//             className="rounded-full border"
//             referrerPolicy="no-referrer"
//           />
//         )}

//         {/*  Name and Email */}
//         <div className="text-right">
//           <div className="text-sm font-medium text-gray-700">
//             {user?.name || "No name"}
//           </div>
//           <div className="text-xs text-gray-500">
//             {user?.email || "No email"}
//           </div>
//         </div>

//         {/*  Logout Button */}
//         <button
//           onClick={() => signOut()}
//           className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 font-medium"
//         >
//           <LogOut size={16} /> Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Topbar;



// "use client";

// import { useEffect, useState } from "react";
// import { useSession, signOut } from "next-auth/react";
// import Image from "next/image";
// import Link from "next/link";
// import { LogOut } from "lucide-react";

// export default function Topbar() {
//   const { data: session } = useSession();

//   // live profile from DB (reflects profile edits)
//   const [profile, setProfile] = useState({ name: "", image: "" });

//   useEffect(() => {
//     const email = session?.user?.email;
//     if (!email) return;

//     let ignore = false;
//     (async () => {
//       try {
//         const res = await fetch(`/api/users?email=${encodeURIComponent(email)}`, {
//           cache: "no-store",
//         });
//         const data = await res.json();
//         if (!ignore && data) {
//           setProfile({
//             name: data.name || "",
//             image: data.image || "",
//           });
//         }
//       } catch {
//         // ignore; fall back to session
//       }
//     })();

//     return () => {
//       ignore = true;
//     };
//   }, [session?.user?.email]);

//   const nameToShow = profile.name || session?.user?.name || "";
//   const imageToShow =
//     profile.image || session?.user?.image || "/default-avatar.png";
//   const emailToShow = session?.user?.email || "";

//   return (
//     <header className="sticky top-0 z-40 flex items-center justify-between border-b bg-white px-4 py-3">
//       {/* left: page title / breadcrumb placeholder */}
//       <div className="text-sm text-gray-500">
//         <span className="font-medium text-gray-900">Welcome to LearnEdge Dashboard</span>
//       </div>

//       {/* right: user chip */}
//       <div className="flex items-center gap-3">
//         <div className="hidden sm:flex flex-col text-right leading-tight">
//           <span className="text-gray-900 font-medium">{nameToShow}</span>
//           <span className="text-gray-500 text-xs">{emailToShow}</span>
//         </div>

//         <div className="relative h-9 w-9">
//           <Image
//             src={imageToShow}
//             alt={nameToShow || "User"}
//             fill
//             className="rounded-full object-cover border"
//             referrerPolicy="no-referrer"
//             priority
//           />
//         </div>

//         <button
//           onClick={() => signOut()}
//           className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           aria-label="Logout"
//           title="Logout"
//         >
//           <LogOut size={16} />
//           <span className="hidden sm:inline">Logout</span>
//         </button>

//         {/* Optional: back to site */}
//         <Link
//           href="/"
//           className="hidden md:inline rounded-xl border px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
//         >
//           Back to Home
//         </Link>
//       </div>
//     </header>
//   );
// }










// "use client";

// import { signOut, useSession } from "next-auth/react";
// import { LogOut } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Topbar = () => {
//   const { data: session } = useSession();

//   // fetch live profile by email (so edits reflect immediately)
//   const [profile, setProfile] = useState({ name: "", image: "" });

//   useEffect(() => {
//     const email = session?.user?.email;
//     if (!email) return;

//     let ignore = false;
//     (async () => {
//       try {
//         const res = await fetch(`/api/users?email=${encodeURIComponent(email)}`, {
//           cache: "no-store",
//         });
//         const data = await res.json();
//         if (!ignore && data) {
//           setProfile({
//             name: data.name || "",
//             image: data.image || "",
//           });
//         }
//       } catch {
//         // ignore; we'll use session fallback
//       }
//     })();

//     return () => {
//       ignore = true;
//     };
//   }, [session?.user?.email]);

//   // prefer DB values; fallback to session
//   const name = profile.name || session?.user?.name || "No name";
//   const image = profile.image || session?.user?.image || "";
//   const email = session?.user?.email || "No email";

//   return (
//     <header className="flex items-center justify-between px-4 md:px-6 py-3 border-b bg-white shadow-sm">
//       <div className="text-lg font-semibold text-gray-700">
//         Welcome to LearnEdge Dashboard
//       </div>

//       <div className="flex items-center gap-4">
//         {/*  Profile image (design unchanged) */}
//         {image && (
//           <Image
//             src={image}
//             alt="Profile"
//             width={36}
//             height={36}
//             className="rounded-full border"
//             referrerPolicy="no-referrer"
//           />
//         )}

//         {/*  Name and Email (design unchanged) */}
//         <div className="text-right">
//           <div className="text-sm font-medium text-gray-700">{name}</div>
//           <div className="text-xs text-gray-500">{email}</div>
//         </div>

//         {/*  Logout Button (design unchanged) */}
//         <button
//           onClick={() => signOut()}
//           className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 font-medium"
//         >
//           <LogOut size={16} /> Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Topbar;




// src/components/dashboard/Topbar.jsx
"use client";

import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Topbar = () => {
  const { data: session } = useSession();

  // fetch live profile by email (so edits reflect immediately)
  const [profile, setProfile] = useState({ name: "", image: "" });

  useEffect(() => {
    const email = session?.user?.email;
    if (!email) return;

    let ignore = false;
    (async () => {
      try {
        const res = await fetch(`/api/users?email=${encodeURIComponent(email)}`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (!ignore && data) {
          setProfile({
            name: data.name || "",
            image: data.image || "",
          });
        }
      } catch {
        // ignore; we'll use session fallback
      }
    })();

    return () => {
      ignore = true;
    };
  }, [session?.user?.email]);

  // prefer DB values; fallback to session
  const name = profile.name || session?.user?.name || "No name";
  const image = profile.image || session?.user?.image || "";
  const email = session?.user?.email || "No email";

  return (
    //  Mobile: stack, iPad: roomy, Desktop: unchanged
    <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 md:px-6 py-3 border-b bg-white shadow-sm">
      {/* Left: title */}
      <div className="text-base sm:text-lg font-semibold text-gray-700 leading-snug">
        Welcome to LearnEdge Dashboard
      </div>

      {/* Right: profile block */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap justify-between sm:justify-end">
        {image && (
          <Image
            src={image}
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full border shrink-0"
            referrerPolicy="no-referrer"
          />
        )}

        <div className="min-w-0 text-left sm:text-right">
          <div className="text-sm font-medium text-gray-700 truncate max-w-[180px] sm:max-w-[220px]">
            {name}
          </div>
          <div className="text-xs text-gray-500 truncate max-w-[180px] sm:max-w-[240px]">
            {email}
          </div>
        </div>

        <button
          onClick={() => signOut()}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 font-medium shrink-0"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;

