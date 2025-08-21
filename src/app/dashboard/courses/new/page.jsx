import CourseForm from "@/components/forms/CourseForm";
import { Metadata } from "next";

export const metadata = {
  title: "Create New Course | LearnEdge Dashboard",
};

const NewCoursePage = () => {
  return (
    <div className="p-6">
      <CourseForm />
    </div>
  );
};

export default NewCoursePage;
