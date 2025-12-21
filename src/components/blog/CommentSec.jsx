import React from 'react'
import useData from '../hooks/useData';
import usePagination from '../hooks/usePagination';
import { Pagination } from '../Pagination';

const CommentSec = () => {
    const { filteredComments } = useData();
    const { currentData, currentPage, totalPages, goTo, next, prev } = usePagination(filteredComments, 3);
    return (
        <div className="mt-6 space-y-6 text-xs sm:text-sm md:text-base">
            {currentData.length > 0 ? (
                currentData.map((comment, idx) => (
                    <div key={comment.id} className={`flex flex-wrap h-40 md:h-36 gap-4 border-t pt-4 ${idx === 1 ? "ms-10" : ""}`}>
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
                <p>No comments yet</p>
            )}
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
    )
}

export default CommentSec
