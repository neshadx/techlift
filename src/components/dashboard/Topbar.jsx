



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
        Welcome to TechLift Dashboard
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

