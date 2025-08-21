"use client";

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    instructor: "Jane Doe",
    description: "Master MERN stack from scratch and build real-world apps.",
    // image: "https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8224.jpg",
     image:
    "https://i.postimg.cc/rs5V4f3Z/niclas-illg-FJ5e-2f96h4-unsplash.jpg",
    
  },
//   {
//   id: 1,
//   title: "Full-Stack Web Development Bootcamp",
//   instructor: "Ayesha Rahman",
//   description:
//     "Become a job-ready full-stack developer by mastering React, Node.js, Express, MongoDB, and API integration from scratch.",
//   image:
//     "https://img.freepik.com/free-vector/web-development-concept-illustration_114360-4296.jpg",
// },
  {
    id: 2,
    title: "Digital Marketing Essentials",
    instructor: "John Smith",
    description: "Learn SEO, social media, and content strategy to grow businesses.",
    image: "https://img.freepik.com/free-vector/digital-marketing-concept-landing-page_52683-18541.jpg",
  },
  {
    id: 3,
    title: "Graphic Design Masterclass",
    instructor: "Emily White",
    description: "Design like a pro using Figma, Photoshop, and Canva.",
    image: "https://i.postimg.cc/cJWJcG07/futc-Ut-Jp-KTlg-OKY-unsplash.jpg",
  },
];

const CoursesPreview = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured <span className="text-green-600">Courses</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Get a sneak peek of our most popular and top-rated courses.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-2">by {course.instructor}</p>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
