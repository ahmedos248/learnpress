import React from 'react'
import { useLocation } from 'react-router-dom';

const FloatingCourse = () => {
    const { state } = useLocation();
    const course = state?.course;
    return (
        <div className="w-fit h-fit rounded-3xl overflow-hidden hidden md:block">
            <img src={course.image} alt="" width={410} />
            <div className="py-6 flex justify-evenly items-center bg-white border rounded-b-3xl">
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

export default FloatingCourse
