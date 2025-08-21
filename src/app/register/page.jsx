// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSession, signIn } from "next-auth/react";

// const RegisterPage = () => {
//   const router = useRouter();
//   const { data: session } = useSession();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (session?.user) {
//       router.push("/dashboard");
//     }
//   }, [session, router]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ⚠️ This is fake register logic – you'd replace this with API call to save user
//     if (!form.email || !form.password) {
//       return alert("Please fill in both fields.");
//     }

//     // Auto login after "register"
//     signIn("credentials", {
//       email: form.email,
//       password: form.password,
//       callbackUrl: "/dashboard",
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Register to <span className="text-green-600">LearnEdge</span>
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border px-4 py-2 rounded"
//             value={form.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full border px-4 py-2 rounded"
//             value={form.password}
//             onChange={handleChange}
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
//           >
//             Register & Login
//           </button>
//         </form>

//         <p className="text-sm text-center mt-4 text-gray-500">
//           Already have an account?{" "}
//           <a href="/login" className="underline text-green-600">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useSession, signIn } from "next-auth/react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegisterPage = () => {
//   const router = useRouter();
//   const { data: session } = useSession();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     if (session?.user) {
//       router.push("/dashboard");
//     }
//   }, [session, router]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       toast.error("Please fill in all fields.");
//       return;
//     }

//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error || "Registration failed.");
//         return;
//       }

//       toast.success("Registered! Logging in...");

//       const loginResult = await signIn("credentials", {
//         email: form.email,
//         password: form.password,
//         redirect: false,
//       });

//       if (loginResult?.ok) {
//         router.push("/dashboard");
//       } else {
//         toast.error("Login failed after registration.");
//       }

//     } catch (error) {
//       console.error("Register error:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <ToastContainer position="top-center" />
//       <div className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Register to <span className="text-green-600">LearnEdge</span>
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Enter your name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               placeholder="Choose a password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-md transition"
//           >
//             Register & Login
//           </button>
//         </form>

//         <p className="text-sm text-center mt-6 text-gray-500">
//           Already have an account?{" "}
//           <a href="/login" className="text-green-600 underline hover:text-green-700">
//             Login
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



// // src/app/register/page.jsx
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Eye, EyeOff } from "lucide-react";
// import { toast } from "react-toastify";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [showPw, setShowPw] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     photoURL: "", // optional
//     password: "",
//   });

//   const handleChange = (e) =>
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   // must contain upper + lower, min 8
//   const pwOk = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(form.password);
//   const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!emailOk) return toast.error("Please enter a valid email address.");
//     if (!pwOk)
//       return toast.error(
//         "Password must be at least 8 characters and include both uppercase and lowercase letters."
//       );

//     try {
//       setLoading(true);
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name.trim(),
//           email: form.email.trim().toLowerCase(),
//           password: form.password,
//           image: form.photoURL?.trim() || null, // backend optional
//         }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data?.message || "Registration failed");

//       toast.success("Account created! Please login.");
//       router.push("/login");
//     } catch (err) {
//       toast.error(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-md rounded-2xl bg-white shadow-md border border-gray-100 p-6 sm:p-8">
//         <h1 className="text-2xl sm:text-3xl font-bold text-center">
//           Register to <span className="text-emerald-600">LearnEdge</span>
//         </h1>

//         <form onSubmit={onSubmit} className="mt-6 space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               placeholder="Enter your name"
//               className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//               className={`w-full rounded-md border px-3 py-2 outline-none focus:ring-2 ${
//                 emailOk || !form.email ? "focus:ring-emerald-200" : "focus:ring-red-200"
//               }`}
//             />
//           </div>

//           {/* Optional Photo URL */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Photo URL <span className="text-gray-400 text-xs">(optional)</span>
//             </label>
//             <input
//               type="url"
//               name="photoURL"
//               value={form.photoURL}
//               onChange={handleChange}
//               placeholder="https://example.com/avatar.jpg"
//               className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-200"
//             />
//           </div>

//           {/* Password with eye toggle */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPw ? "text" : "password"}
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//                 placeholder="Choose a password"
//                 className={`w-full rounded-md border px-3 py-2 pr-10 outline-none focus:ring-2 ${
//                   pwOk || !form.password ? "focus:ring-emerald-200" : "focus:ring-red-200"
//                 }`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPw((s) => !s)}
//                 className="absolute inset-y-0 right-2 inline-flex items-center text-gray-500 hover:text-gray-700"
//                 aria-label={showPw ? "Hide password" : "Show password"}
//               >
//                 {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>
//             <p className={`mt-1 text-xs ${pwOk || !form.password ? "text-gray-500" : "text-red-600"}`}>
//               Must be 8+ characters with both UPPER & lower case letters.
//             </p>
//           </div>

//           <button
//             disabled={loading}
//             className="w-full rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 transition disabled:opacity-60"
//           >
//             {loading ? "Creating..." : "Register & Login"}
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link href="/home" className="text-emerald-600 hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }




// src/app/register/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    photoURL: "", // optional
    password: "",
  });

  useEffect(() => {
    if (session?.user) router.push("/");
  }, [session, router]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // validations
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const pwOk = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(form.password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailOk) return toast.error("Please enter a valid email address.");
    if (!pwOk)
      return toast.error(
        "Password must be 8+ characters with BOTH uppercase and lowercase letters."
      );

    try {
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
          image: form.photoURL?.trim() || null, // backend optional
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Registration failed.");

      toast.success("Registered! Logging in...");

      const loginResult = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (loginResult?.ok) router.push("/dashboard");
      else toast.error("Login failed after registration.");
    } catch (err) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register to <span className="text-green-600">LearnEdge</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                emailOk || !form.email ? "border-gray-300 focus:ring-green-500" : "border-red-400 focus:ring-red-500"
              }`}
              required
            />
          </div>

          {/* Optional Photo URL */}
          <div>
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL <span className="text-xs text-gray-400">(optional)</span>
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="url"
              placeholder="https://example.com/avatar.jpg"
              value={form.photoURL}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password with eye toggle */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPw ? "text" : "password"}
                placeholder="Choose a password"
                value={form.password}
                onChange={handleChange}
                className={`w-full border px-4 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 ${
                  pwOk || !form.password ? "border-gray-300 focus:ring-green-500" : "border-red-400 focus:ring-red-500"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="absolute inset-y-0 right-2 inline-flex items-center text-gray-500 hover:text-gray-700"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p className={`mt-1 text-xs ${pwOk || !form.password ? "text-gray-500" : "text-red-600"}`}>
              Must be 8+ characters with both UPPER & lower case letters.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-md transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Register & Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 underline hover:text-green-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

