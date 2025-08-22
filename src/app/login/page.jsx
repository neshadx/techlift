


// src/app/login/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPw, setShowPw] = useState(false);

  // 🔁 Redirect if already logged in → go Home
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/"); //  Home page
    }
  }, [status, router]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return alert("Please enter email and password.");
    }

    await signIn("credentials", {
      email: form.email,
      password: form.password,
      callbackUrl: "/", //  Home page
      redirect: true,
    });
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" }); //  Home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to <span className="text-green-600">TechLift</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500"
            required
          />

          {/* Password with eye toggle */}
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 pr-10 rounded-md focus:ring-2 focus:ring-green-500"
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

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-md transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-md transition"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-green-600 underline hover:text-green-700"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}


