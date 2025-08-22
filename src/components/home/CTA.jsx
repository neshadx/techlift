

"use client";

import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Upskill with <span className="text-green-600">TechLift?</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of learners and unlock your full potential today.
        </p>
        <Link
          href="/courses"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;


