import React from "react";
import Article1 from "./cards/Article1";
import Article2 from "./cards/Article2";
import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { Pagination } from "./Pagination";
import SearchBar from "./SearchBar";

const AllArticles = () => {
    const { filteredArticles, articleSearch, setArticleSearch, active, setActive, loading, error } = useData();
    const { currentData, currentPage, totalPages, goTo, next, prev } = usePagination(filteredArticles, 6);

    if (loading) return <p className="text-center mt-20">Loading articles...</p>;
    if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4">
            <div className="lg:col-span-3">

                <SearchBar
                    title="All Articles"
                    searchValue={articleSearch}
                    setSearchValue={setArticleSearch}
                    active={active}
                    setActive={setActive}
                />


                <div className="grid grid-cols-2 lg:gap-8 gap-4">
                    {currentData.length > 0 ? (
                        currentData.map((article) => (
                            <React.Fragment key={article.id}>
                                {active === "a" && <Article1 article={article} />}
                                {active === "b" && <Article2 article={article} />}
                            </React.Fragment>
                        ))
                    ) : (
                        <p>No articles found</p>
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

export default AllArticles;
