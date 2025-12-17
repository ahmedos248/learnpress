
import Course1 from '../cards/Course1';
import { Link } from 'react-router-dom';
const CoursesSection = ({ courses = [] }) => {

  return (
    <section className="px-6 md:px-20 py-5 bg-white mb-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-semibold">Featured courses</h2>
          <p className="text-zinc-400">Explore our Popular Courses</p>
        </div>
        <Link to="/courses">
          <button className="border px-5 py-2 rounded-full hover:bg-gray-100">
            All Courses
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
        {courses.length > 0 ? (
          courses
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
