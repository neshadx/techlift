"use client";

import { BookOpen, Users, GraduationCap, Laptop } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-green-600" />,
    title: "Expert-Curated Courses",
    description: "Access in-depth courses designed by industry professionals and academic experts.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Community Support",
    description: "Join a community of learners, collaborate, and grow together through shared learning.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    title: "Flexible Learning",
    description: "Learn at your own pace, anytime, anywhere — your growth, your schedule.",
  },
  {
    icon: <Laptop className="w-8 h-8 text-green-600" />,
    title: "Modern Tech Platform",
    description: "Built with the latest technologies to ensure smooth and responsive learning.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-green-600">TechLift?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          TechLift helps you master skills that matter. Here's what makes us stand out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
