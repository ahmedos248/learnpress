import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { Pagination } from "./Pagination";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import MobileFilter from "./MobileFilter";
import useCourseFilter from "./hooks/useCourseFilter";
import Stagger from "./cards/Stagger";
import { useState } from "react";

const AllCourses = () => {
  const [open, setOpen] = useState(false);
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
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="lg:hidden text-orange-500 bg-white p-2 rounded shadow float-right"
      >
        <i className="fa-solid fa-filter"></i>
      </button>
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
      <MobileFilter filters={filters} setFilters={setFilters} courses={filteredCoursesLocal}
        className={`backdrop-blur-md bg-white/40 p-4 pb-14 shadow fixed top-14 left-0 w-[50%] h-full z-20 exo-text lg:text-[16px] text-[14px] font-semibold lg:hidden overflow-scroll custom-scroll transition-all duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      />
      <div className="col-span-1 lg:flex flex-col hidden space-y-6 mb-10 " >
        <Filters filters={filters} setFilters={setFilters} courses={filteredCoursesLocal} />
      </div>
      <div
        className={`fixed inset-0 z-10 bg-black bg-opacity-40 w-full h-full lg:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />
    </section>
  );
};

export default AllCourses;
