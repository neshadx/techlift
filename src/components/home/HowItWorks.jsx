"use client";

import { FileText, PlayCircle, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: <FileText className="w-8 h-8 text-green-600" />,
    title: "Browse Courses",
    description: "Explore our vast library of expert-led courses across various fields.",
  },
  {
    icon: <PlayCircle className="w-8 h-8 text-green-600" />,
    title: "Start Learning",
    description: "Watch videos, complete assignments, and follow structured paths.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-green-600" />,
    title: "Earn & Apply",
    description: "Get certified and apply your skills in real-world projects or jobs.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          How <span className="text-green-600">It Works</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Learning with TechLift is simple, intuitive, and effective.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
