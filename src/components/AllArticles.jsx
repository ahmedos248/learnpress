import React from "react";
import Article1 from "./cards/Article1";
import Article2 from "./cards/Article2";
import useData from "./hooks/useData";
import usePagination from "./hooks/usePagination";
import { Pagination } from "./Pagination";

const AllArticles = () => {
    const { filteredArticles, articleSearch, setArticleSearch, active, setActive, loading, error } = useData();
    const { currentData, currentPage, totalPages, goTo, next, prev } = usePagination(filteredArticles, 6);

    if (loading) return <p className="text-center mt-20">Loading articles...</p>;
    if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4">
            <div className="lg:col-span-3">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 space-y-4">
                    <h2 className="text-3xl font-semibold">All Articles</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between space-x-2">
                            <div className="flex justify-between border-b-2 border-black max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={articleSearch}
                                    onChange={(e) => setArticleSearch(e.target.value)}
                                    className="w-full focus:outline-none"
                                />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <div className="w-[14px] h-[22px] bg-white flex items-center justify-center">
                                <svg
                                    onClick={() => setActive("a")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={`w-6 h-6 cursor-pointer ${active === "a" ? "fill-orange-500" : "fill-black"}`}
                                >
                                    <path d="M0 0h10v10H0V0zM12 0h10v10H12V0zM0 12h10v10H0V12zM12 12h10v10H12V12z" />
                                </svg>
                            </div>

                            <div>
                                <i
                                    onClick={() => setActive("b")}
                                    className={`fa-solid fa-list cursor-pointer ${active === "b" ? "text-orange-500" : "text-black"}`}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>

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
