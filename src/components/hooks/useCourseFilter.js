import { useMemo,useState } from "react";

const useCourseFilter = (courses) => {
    const [filters, setFilters] = useState({
        categories: [],
        instructors: [],
        levels: [],
        disc: null,
        rating: null,
    });
  const filtered = useMemo(() => {
    return courses.filter((course) => {
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

      const ratingMatch =
        !filters.rating || course.rating >= filters.rating;

      const levelMatch =
        filters.levels.length === 0 ||
        filters.levels.includes(course.level);

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
  }, [courses, filters]);

  return {
      filtered,
      filters,
      setFilters
  };
};

export default useCourseFilter;
