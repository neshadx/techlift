

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Button } from "@/components/ui/Button";

// const CourseForm = ({ initialData = {}, isEdit = false }) => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     title: initialData.title || "",
//     description: initialData.description || "",
//     instructor: initialData.instructor || "",
//     image: initialData.image || "",
//     price: initialData.price || "",
//     duration: initialData.duration || "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const endpoint = isEdit
//       ? `/api/courses/${initialData._id}`
//       : "/api/courses";

//     const method = isEdit ? "PUT" : "POST";

//     try {
//       const res = await fetch(endpoint, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!res.ok) throw new Error("Failed to save course");

//       toast.success(isEdit ? "Course updated!" : "Course created!");
//       setTimeout(() => {
//         router.push("/dashboard/courses");
//         router.refresh();
//       }, 1500);
//     } catch (err) {
//       console.error("Course error:", err);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto">
//       <ToastContainer position="top-center" />
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded shadow-md"
//       >
//         <h2 className="text-2xl font-semibold mb-4">
//           {isEdit ? "Edit Course" : "Create New Course"}
//         </h2>

//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Course Title"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />

//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Description"
//           className="w-full border p-2 mb-3 rounded"
//           rows={3}
//           required
//         />

//         <input
//           type="text"
//           name="instructor"
//           value={formData.instructor}
//           onChange={handleChange}
//           placeholder="Instructor Name"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />

//         <input
//           type="text"
//           name="image"
//           value={formData.image}
//           onChange={handleChange}
//           placeholder="Course Image URL"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />

//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           placeholder="Price (USD)"
//           className="w-full border p-2 mb-3 rounded"
//           required
//         />

//         <input
//           type="text"
//           name="duration"
//           value={formData.duration}
//           onChange={handleChange}
//           placeholder="Duration (e.g. 6 weeks)"
//           className="w-full border p-2 mb-4 rounded"
//           required
//         />

//         <Button
//           type="submit"
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//         >
//           {isEdit ? "Update Course" : "Create Course"}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default CourseForm;



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/ui/Button"; // ✅ default import (fixed)

const CourseForm = ({ initialData = {}, isEdit = false }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    instructor: initialData.instructor || "",
    image: initialData.image || "",
    price: initialData.price || "",
    duration: initialData.duration || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isEdit
      ? `/api/courses/${initialData._id}`
      : "/api/courses";

    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save course");

      toast.success(isEdit ? "Course updated!" : "Course created!");
      setTimeout(() => {
        router.push("/dashboard/courses");
        router.refresh();
      }, 1500);
    } catch (err) {
      console.error("Course error:", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">
          {isEdit ? "Edit Course" : "Create New Course"}
        </h2>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Course Title"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 mb-3 rounded"
          rows={3}
          required
        />

        <input
          type="text"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          placeholder="Instructor Name"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Course Image URL"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price (USD)"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration (e.g. 6 weeks)"
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <Button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
        >
          {isEdit ? "Update Course" : "Create Course"}
        </Button>
      </form>
    </div>
  );
};

export default CourseForm;


