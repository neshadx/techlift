// // src/app/dashboard/profile/page.jsx
// "use client";

// import { useSession } from "next-auth/react";
// import Image from "next/image";

// const ProfilePage = () => {
//   const { data: session } = useSession();

//   if (!session) {
//     return <div>Loading...</div>;
//   }

//   const { user } = session;

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md border border-gray-200">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">My Profile</h2>

//       <div className="flex items-center gap-4 mb-6">
//         <Image
//           src={user?.image || "/default-avatar.png"}
//           alt="Profile"
//           width={60}
//           height={60}
//           className="rounded-full border"
//         />
//         <div>
//           <p className="text-lg font-medium text-gray-700">{user?.name}</p>
//           <p className="text-sm text-gray-500">{user?.email}</p>
//         </div>
//       </div>

//       {/* Optional: Add editable form later */}
//       <p className="text-gray-600">
//         This is your profile information from Google. Editing profile details will be available soon.
//       </p>
//     </div>
//   );
// };

// export default ProfilePage;


// "use client";

// import { useSession } from "next-auth/react";
// import Image from "next/image";

// const ProfilePage = () => {
//   const { data: session, status } = useSession();

//   if (status === "loading") {
//     return <div className="text-center py-10 text-gray-500">Loading...</div>;
//   }

//   const { user } = session || {};

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md border border-gray-200 mt-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">My Profile</h2>

//       <div className="flex items-center gap-4 mb-6">
//         <Image
//           src={user?.image || "/default-avatar.png"}
//           alt="Profile"
//           width={60}
//           height={60}
//           className="rounded-full border"
//           referrerPolicy="no-referrer"
//         />
//         <div>
//           <p className="text-lg font-semibold text-gray-700">
//             {user?.name || "No name available"}
//           </p>
//           <p className="text-sm text-gray-500">
//             {user?.email || "No email available"}
//           </p>
//         </div>
//       </div>

//       <p className="text-gray-600">
//         This is your profile information from Google. Editing profile details will be available soon.
//       </p>
//     </div>
//   );
// };

// export default ProfilePage;



"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const user = session?.user;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const email = user?.email || "";

  // prefill on load/session change
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  // preview avatar (fallback if broken)
  const previewSrc = useMemo(
    () => (image?.trim() ? image.trim() : "/default-avatar.png"),
    [image]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email missing in session.");

    const confirm = await Swal.fire({
      title: "Save profile changes?",
      text: "Your name and photo will be updated.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#16a34a",
    });
    if (!confirm.isConfirmed) return;

    Swal.fire({
      title: "Updating...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email, // key (unchanged)
          name: name?.trim(),
          image: image?.trim(),
        }),
      });

      Swal.close();

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to update profile");
      }

      toast.success("Profile updated!");

      // Optional: refresh page data or session (if you wire a session update API)
      // router.refresh();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Update failed");
    }
  };

  if (status === "loading") {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-sm rounded-2xl border mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Avatar + Preview */}
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <Image
              src={previewSrc}
              alt="Profile"
              fill
              className="rounded-full object-cover border"
              referrerPolicy="no-referrer"
              onError={() => setImage("/default-avatar.png")}
            />
          </div>

          <div className="text-sm text-gray-600">
            <p className="font-medium text-gray-800">Live preview</p>
            <p>Paste an image URL to update your avatar.</p>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Photo URL
          </label>
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          />
          <p className="mt-1 text-xs text-gray-500">
            Use a direct image link (HTTPS). You can host on Postimages or similar.
          </p>
        </div>

        {/* Email (read-only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (read-only)
          </label>
          <input
            type="email"
            value={email}
            disabled
            className="w-full rounded-xl border px-3 py-2 bg-gray-50 text-gray-600 cursor-not-allowed"
          />
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="submit"
            className="inline-flex items-center rounded-xl bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

