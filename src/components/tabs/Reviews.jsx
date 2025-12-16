import React from "react";
import RatingStats from "./RatingStats";
import usePagination from "../hooks/usePagination";
import { Pagination } from "../Pagination";
import useData from "../hooks/useData";

const Reviews = () => {
    const { filteredComments } = useData();
    const { currentData, currentPage, totalPages, goTo, next, prev } = usePagination(filteredComments, 3);

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Comments</h2>
            <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">4.0</span>
                <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <span className="text-sm text-gray-500">based on 146,951 ratings</span>
            </div>
            <RatingStats />
            <div className="mt-6 space-y-6">
                {currentData.length > 0 ? (
                    currentData.map((comment) => (
                        <div key={comment.id} className="flex gap-4 border-t pt-4 h-36">
                            <img
                                src={comment.avatar}
                                alt={comment.name}
                                className="w-12 h-12 object-cover"
                            />
                            <div className="flex-1">
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">{comment.name}</span>
                                    <span className="text-sm text-gray-500">{comment.date}</span>
                                </div>
                                <p className="text-gray-700 mt-1">{comment.text}</p>
                                <button className="flex items-center gap-1 text-red-500 text-sm mt-2">
                                    <i className="fas fa-reply"></i> Reply
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No courses found</p>
                )}
            </div>
            <div className="flex justify-center mt-6 gap-2">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    goTo={goTo}
                    next={next}
                    prev={prev}
                />
            </div>
        </div>
    );
};

export default Reviews;
