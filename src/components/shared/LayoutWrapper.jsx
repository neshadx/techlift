

"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();

  //  Hide Navbar/Footer on dashboard routes
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div className={`flex flex-col min-h-screen ${isDashboard ? "" : "bg-white"}`}>
      {!isDashboard && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default LayoutWrapper;
