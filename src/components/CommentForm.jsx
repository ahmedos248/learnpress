import React from "react";

const CommentForm = ({ className = '', title = 'Leave A Comment', titleClassName = 'text-lg' }) => {
    return (
        <div className={`mt-8 ${className}`}>
            <h3 className={`font-semibold ${titleClassName}`}>{title}</h3>
            <p className="text-sm text-gray-600 my-5">
                Your email address will not be published. Required fields are marked *
            </p>

            <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name*"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500"
                    />
                    <input
                        type="email"
                        placeholder="Email*"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500"
                    />
                </div>
                <textarea
                    placeholder="Comment"
                    rows="4"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-orange-500 resize-none"
                ></textarea>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="saveInfo" className="w-4 h-4" />
                    <label htmlFor="saveInfo" className="text-sm text-gray-700">
                        Save my name, email in this browser for the next time I comment
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default CommentForm;
