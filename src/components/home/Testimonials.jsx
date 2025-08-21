"use client";

const testimonials = [
  {
    name: "Tanzim Hossain",
    role: "Web Developer, Dhaka",
    rating: 5,
    comment:
      "TechLift changed my life. I landed a remote job right after completing the full-stack bootcamp.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Sumaiya Akter",
    role: "Freelancer, Chittagong",
    rating: 4,
    comment:
      "Courses are structured, well explained, and easy to follow. I’m already earning through Upwork.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Hasan Mahmud",
    role: "Student, Rajshahi University",
    rating: 5,
    comment:
      "I was struggling with coding until I joined LearnEdge. Now I’m confident with JavaScript and React.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What <span className="text-green-600">Students Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          See how LearnEdge has impacted the lives of learners across Bangladesh and beyond.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4">"{t.comment}"</p>

              <div className="flex space-x-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300 text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
