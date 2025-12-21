import { useState } from "react";
import Stagger from "./cards/Stagger";
import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { Pagination } from "./Pagination";
import SearchBar from "./SearchBar";
import SliderArticles from "./SliderArticles";

const AllArticles = () => {
  const [open, setOpen] = useState(false);
  const {
    filteredArticlesLocal,
    articleSearch,
    setArticleSearch,
    active,
    setActive,
    loading,
    error,
  } = useData();

  const { currentData, currentPage, totalPages, goTo, next, prev } =
    usePagination(filteredArticlesLocal, 6);

  if (loading) return <p className="text-center mt-20">Loading articles...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <section className="max-w-screen-xl mx-auto px-8 py-12 bg-white exo-text lg:grid lg:grid-cols-4 gap-10">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="lg:hidden text-orange-500 bg-white p-2 rounded shadow float-right"
      >
        <i class="fa-solid fa-angles-right"></i>
      </button>
      <div className="lg:col-span-3">
        <SearchBar
          title="All Articles"
          searchValue={articleSearch}
          setSearchValue={setArticleSearch}
          active={active}
          setActive={setActive}
        />
        <Stagger data={currentData} type="article" active={active} />
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
      <div className="lg:col-span-1 lg:flex lg:flex-col space-y-6 mb-10 hidden">
        <SliderArticles articles={filteredArticlesLocal} />
      </div>
      <SliderArticles articles={filteredArticlesLocal} className={`backdrop-blur-md p-4 shadow fixed top-14 right-0 w-[50%] h-full z-20 exo-text lg:text-[16px] text-[14px] font-semibold lg:hidden overflow-auto pb-16 transition-all duration-300 ease-in-out ${open ? "left-0" : "-left-full"}`} />
      <div
        className={`
    fixed inset-0 z-10 bg-black bg-opacity-40 w-full h-full lg:hidden
    transition-all duration-300 
    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
        onClick={() => setOpen(false)}
      />
    </section>
  );
};

export default AllArticles;
