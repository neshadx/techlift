


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CourseForm from "@/components/forms/CourseForm";

const EditCoursePage = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCourse = async () => {
    try {
      const res = await fetch(`/api/courses/${id}`);
      const data = await res.json();

      if (res.ok) {
        setCourseData(data);
      } else {
        setCourseData(null);
      }
    } catch (error) {
      console.error("Failed to load course", error);
      setCourseData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchCourse();
  }, [id]);

  if (loading) return <div className="p-6 text-gray-500">Loading course...</div>;

  if (!courseData) return <div className="p-6 text-red-500">Course not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Course</h1>
      <CourseForm initialData={courseData} isEdit />
    </div>
  );
};

export default EditCoursePage;


