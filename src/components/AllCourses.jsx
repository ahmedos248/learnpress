import React from "react";
import Course1 from "./cards/Course1";
import Course2 from "./cards/Course2";
import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { useState } from "react";
import { Pagination } from "./Pagination";
import Filters from "./Filters";
const AllCourses = () => {
    {/* Filters and search */}
        const [filters, setFilters] = useState({
          categories: [],
          instructors: [],
          levels: [],
          disc: null,
          rating: null,
        });
    const { filteredCourses, courseSearch, setCourseSearch, active, setActive, loading, error } = useData();
   const filtered = filteredCourses.filter((course) => {
     const categoryMatch =
       filters.categories.length === 0 ||
       filters.categories.includes(course.category);

     const priceMatch =
       !filters.disc || filters.disc === "All"
         ? true
         : filters.disc === "Free" 
         ? course.disc === "Free"
         : filters.disc === "Paid" 
         ? course.disc && course.disc !== "Free"
         : false;

     const ratingMatch = !filters.rating || course.rating >= filters.rating;
     const levelMatch =
       filters.levels.length === 0 ||
       filters.levels.includes(course.level);
     const instructorMatch =
       filters.instructors.length === 0 ||
       filters.instructors.includes(course.instructor);

     return categoryMatch && priceMatch && ratingMatch && levelMatch && instructorMatch;
   });
{/*pagination*/}
    const { currentData, currentPage, totalPages, goTo, next, prev } =
      usePagination(filtered, 6);
{/*loading and error handling*/}
    if (loading) return <p className="text-center mt-20">Loading courses...</p>;
    if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

    return (
      <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4 gap-10">
        <div className="order-1 lg:order-2 lg:col-span-1 grid grid-cols-2 md:grid-cols-4  lg:flex lg:flex-col space-y-6 mb-10">
          <Filters
            filters={filters}
            setFilters={setFilters}
            courses={filteredCourses}
          />
        </div>
        <div className="order-2 lg:order-1 lg:col-span-3">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 space-y-4">
            <h2 className="text-3xl font-semibold">All Courses</h2>

            <div className="space-y-4">
              <div className="flex justify-between space-x-2">
                <div className="flex justify-between border-b-2 border-black max-w-sm">
                  <input
                    type="text"
                    placeholder="Search"
                    value={courseSearch}
                    onChange={(e) => setCourseSearch(e.target.value)}
                    className="w-full focus:outline-none"
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="w-[14px] h-[22px] bg-white flex items-center justify-center">
                  <svg
                    onClick={() => setActive("a")}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={`w-6 h-6 cursor-pointer ${
                      active === "a" ? "fill-orange-500" : "fill-black"
                    }`}
                  >
                    <path d="M0 0h10v10H0V0zM12 0h10v10H12V0zM0 12h10v10H0V12zM12 12h10v10H12V12z" />
                  </svg>
                </div>

                <div>
                  <i
                    onClick={() => setActive("b")}
                    className={`fa-solid fa-list cursor-pointer ${
                      active === "b" ? "text-orange-500" : "text-black"
                    }`}
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:gap-8 gap-4">
            {currentData.length > 0 ? (
              currentData.map((course) => (
                <React.Fragment key={course.id}>
                  {active === "a" && <Course1 course={course} />}
                  {active === "b" && <Course2 course={course} />}
                </React.Fragment>
              ))
            ) : (
              <p>No courses found</p>
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              goTo={goTo}
              next={next}
              prev={prev}
            />
          </div>
        </div>
      </section>
    );
};

export default AllCourses;
