
"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 via-white to-white py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Build Your Career with <span className="text-green-600">TechLift</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore interactive courses, expert mentors, and a platform built for future-ready learning.
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link href="/courses">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Right image — clean, no border/shadow */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://i.postimg.cc/vDRyH5m7/riku-lu-wv-Ju-Yr-M5iuw-unsplash.jpg"
            alt="Student learning online"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

