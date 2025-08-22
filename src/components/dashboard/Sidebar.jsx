


// src/components/dashboard/Sidebar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Book,
  User,
  LayoutDashboard,
  ArrowLeftCircle,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Courses", href: "/dashboard/courses", icon: <Book size={18} /> },
  { label: "My Bookings", href: "/dashboard/my-bookings", icon: <Home size={18} /> },
  { label: "Profile", href: "/dashboard/profile", icon: <User size={18} /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const LinkItem = ({ item }) => {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all
          ${
            isActive
              ? "bg-green-100 text-green-800 border-l-4 border-green-500 pl-[14px] font-medium"
              : "hover:bg-gray-100 text-gray-700"
          }`}
      >
        {item.icon}
        {item.label}
      </Link>
    );
  };

  return (
    <>
      {/* Desktop sidebar (unchanged) */}
      <aside className="w-64 hidden md:flex flex-col bg-white border-r border-gray-200 min-h-screen shadow-sm">
        <div className="p-4 font-bold text-xl text-primary border-b">TechLift</div>

        <nav className="flex flex-col p-4 space-y-2 flex-grow">
          {navItems.map((item) => (
            <LinkItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="p-4 border-t mt-auto">
          <Link
            href="/"
            className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition"
          >
            <ArrowLeftCircle size={18} />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Mobile/iPad toggle button */}
      <button
        className="md:hidden fixed top-3 left-3 z-[10001] inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-gray-700 shadow-sm"
        aria-label="Open sidebar"
        onClick={() => setOpen(true)}
      >
        <Menu size={18} />
        Menu
      </button>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[10000] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer panel */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 bg-white border-r border-gray-200 shadow-lg
          transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <div className="font-bold text-lg text-primary">TechLift</div>
            <button
              aria-label="Close sidebar"
              className="rounded-md p-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <LinkItem key={item.href} item={item} />
            ))}
          </nav>

          <div className="p-4 border-t mt-auto">
            <Link
              href="/"
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition"
            >
              <ArrowLeftCircle size={18} />
              Back to Home
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

