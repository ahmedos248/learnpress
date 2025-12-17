import Stagger from "./cards/Stagger";
import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { Pagination } from "./Pagination";
import SearchBar from "./SearchBar";
import SliderArticles from "./SliderArticles";

const AllArticles = () => {
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
    <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4 gap-10">
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
    </section>
  );
};

export default AllArticles;
