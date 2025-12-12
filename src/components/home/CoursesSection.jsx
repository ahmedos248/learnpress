import React from 'react'
import useData from '../hooks/useData';
import Course1 from '../cards/Course1';
import { Link } from 'react-router-dom';
const CoursesSection = () => {
     const { filteredCourses, loading, error } = useData();
      
    
        if (loading) return <p className="text-center mt-20">Loading courses...</p>;
        if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
    
  return (
    <section className="px-4 md:px-20 py-5 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-semibold">Featured courses</h2>
          <p className="text-zinc-400">
            Explore our top-rated courses designed to help you master new skills
          </p>
        </div>
        <Link to="/courses">
          <button className="border px-5 py-2 rounded-full hover:bg-gray-100">
            All Courses
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 gap-4">
        {filteredCourses.length > 0 ? (
          filteredCourses
            .slice(0, 6)
            .map((course) => <Course1 key={course.id} course={course} />)
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </section>
  );
}

export default CoursesSection
