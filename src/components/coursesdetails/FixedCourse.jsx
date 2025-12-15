import React from 'react'
import { useLocation } from 'react-router-dom';

const FixedCourse = () => {
    const { state } = useLocation();
    const course = state?.course;
    return (
        <div className="text-white w-full lg:w-auto space-y-6 z-10 justify-center flex flex-col items-stretch md:text-left text-center">
            <div className="flex flex-row justify-center md:justify-start items-center space-x-4">
                <button className="bg-[#555555] p-4 py-3 rounded-xl">Photography</button>
                <p><span className="text-gray-400">by </span>Determined-Poitras</p>
            </div>
            <h1 className="lg:text-4xl md:text-2xl text-xl">The Ultimate Guide to the best WordPress LMS Plugin</h1>
            <div className="flex justify-evenly w-full md:justify-start md:space-x-1 lg:space-x-4 md:text-sm text-[12px] md:text-gray-500 text-gray-300 md:mb-14">
                <span className="flex items-center space-x-1">
                    <i className="fa-regular fa-clock text-orange-500"></i>
                    <span>2 Weeks</span>
                </span>
                <span className="flex items-center space-x-1">
                    <i className="fa-solid fa-graduation-cap text-orange-500"></i>
                    <span>156 Students</span>
                </span>
                <span className="flex items-center space-x-1">
                    <i className="fa-solid fa-signal text-orange-500"></i>
                    <span>All levels</span>
                </span>
                <span className="flex items-center space-x-1">
                    <img src="/images/lessons.svg" alt="" />
                    <span>20 Lessons</span>
                </span>
                <span className="flex items-center space-x-1">
                    <img src="/images/Quizzes.svg" alt="" min-width={15} />
                    <span>3 Quizzes</span>
                </span>
            </div>
            <div className="flex justify-evenly items-center rounded-b-3xl md:hidden">
                <span className="font-semibold text-gray-700 space-x-2">
                    {course.disc && (
                        <>
                            <s className="text-gray-400">{course.price}</s>
                            <span className="text-green-500">{course.disc}</span>
                        </>
                    )}
                    {course.disc1 && (
                        <>
                            <s className="text-gray-400">{course.price}</s>
                            <span className="text-red-500">{course.disc1}</span>
                        </>
                    )}
                    {!course.disc && !course.disc1 && (
                        <span className="text-orange-500">{course.price}</span>
                    )}
                </span>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-full">Start Now</button>
            </div>
        </div>
    )
}

export default FixedCourse
