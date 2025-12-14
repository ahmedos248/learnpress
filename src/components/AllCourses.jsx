import React, { useState } from "react";
import Course1 from "./cards/Course1";
import Course2 from "./cards/Course2";
import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { Pagination } from "./Pagination";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

const AllCourses = () => {

  const [filters, setFilters] = useState({
    categories: [],
    instructors: [],
    levels: [],
    disc: null,
    rating: null,
  });

  const {
    filteredCourses,
    courseSearch,
    setCourseSearch,
    active,
    setActive,
    loading,
    error,
  } = useData();


  const filtered = filteredCourses.filter((course) => {
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(course.category);

    const priceMatch = !filters.disc
      ? true
      : filters.disc === "Free"
      ? course.disc === "Free"
      : filters.disc === "Paid"
      ? course.disc && course.disc !== "Free"
      : false;

    const ratingMatch = !filters.rating || course.rating >= filters.rating;

    const levelMatch =
      filters.levels.length === 0 || filters.levels.includes(course.level);

    const instructorMatch =
      filters.instructors.length === 0 ||
      filters.instructors.includes(course.instructor);

    return (
      categoryMatch &&
      priceMatch &&
      ratingMatch &&
      levelMatch &&
      instructorMatch
    );
  });


  const { currentData, currentPage, totalPages, goTo, next, prev } =
    usePagination(filtered, 6);

 
  if (loading) return <p className="text-center mt-20">Loading courses...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4 gap-10">
 
      <div className="order-1 lg:order-2 lg:col-span-1 grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-col space-y-6 mb-10">
        <Filters
          filters={filters}
          setFilters={setFilters}
          courses={filteredCourses}
        />
      </div>

    
      <div className="order-2 lg:order-1 lg:col-span-3">
      
        <SearchBar
          title="All Courses"
          searchValue={courseSearch}
          setSearchValue={setCourseSearch}
          active={active}
          setActive={setActive}
        />

      
        <div className="grid grid-cols-2 lg:gap-8 gap-4">
          {currentData.length > 0 ? (
            currentData.map((course) => (
              <React.Fragment key={course.id}>
                {active === "a" && <Course1 course={course} />}
                {active === "b" && <Course2 course={course} />}
              </React.Fragment>
            ))
          ) : (
            <p className="text-center">No courses found</p>
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
