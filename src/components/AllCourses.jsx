import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { Pagination } from "./Pagination";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import MobileFilter from "./MobileFilter";
import useCourseFilter from "./hooks/useCourseFilter";
import Stagger from "./cards/Stagger";

const AllCourses = () => {
  const {
    filteredCoursesLocal,
    courseSearch,
    setCourseSearch,
    active,
    setActive,
    loading,
    error,
  } = useData();

  const { filtered, filters, setFilters } = useCourseFilter(filteredCoursesLocal);
  const { currentData, currentPage, totalPages, goTo, next, prev } =
    usePagination(filtered, 6);

  if (loading) return <p className="text-center mt-20">Loading courses...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <section className="max-w-screen-xl mx-auto px-8 py-12 bg-white exo-text lg:grid lg:grid-cols-4 gap-10">
      <div className="flex justify-end lg:hidden">
        <MobileFilter filters={filters} setFilters={setFilters} courses={filteredCoursesLocal} />
      </div>
      <div className=" lg:col-span-3">
        <SearchBar
          title="All Courses"
          searchValue={courseSearch}
          setSearchValue={setCourseSearch}
          active={active}
          setActive={setActive}
        />
        <Stagger key={currentPage} data={currentData} type="course" active={active} />
        <div className="mt-8 flex justify-center">
          <Pagination currentPage={currentPage} totalPages={totalPages} goTo={goTo} next={next} prev={prev} />
        </div>
      </div>
      <div className="col-span-1 lg:flex flex-col hidden space-y-6 mb-10">
        <Filters filters={filters} setFilters={setFilters} courses={filteredCoursesLocal} />
      </div>
    </section>
  );
};

export default AllCourses;
