import React from 'react'

const Instructor = () => {
    return (
        <div>
            <div className="flex space-x-4">
                <img src="/images/p.svg" alt="" />
                <div>
                    <h2 className="text-lg font-semibold exo-text">ThimPress</h2>
                    <p className="text-gray-600">
                        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                    </p>
                    <div className="mt-4 text-sm text-gray-500 space-y-4">
                        <div className="flex items-center space-x-1">
                            <i className="fa-solid fa-user-graduate text-orange-500"></i>
                            <span>156 Students</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <i className="fa-solid fa-file-lines text-orange-500"></i>
                            <span>20 Lessons</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-4 text-gray-600">
                LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
            </p>
            <div className="flex items-center space-x-3 mt-4">
                <span className="text-gray-500">Follow:</span>
                <i className="fa-brands fa-facebook-f text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-pinterest-p text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-x-twitter text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-instagram text-gray-600 hover:text-orange-500 cursor-pointer"></i>
                <i className="fa-brands fa-youtube text-gray-600 hover:text-orange-500 cursor-pointer"></i>
            </div>
        </div>
    )
}

export default Instructor
