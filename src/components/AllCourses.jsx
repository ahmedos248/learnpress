import React, { useState } from "react";
import Course1 from "./cards/Course1";
import Course2 from "./cards/Course2";
import Courses from "../data/courses.json";

const AllCourses = () => {
    const [active, setActive] = useState("b");
    const [search, setSearch] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(Courses);

    React.useEffect(() => {
        let result = Courses;

        if (search.trim() !== "") {
            result = result.filter((course) =>
                course.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredCourses(result);
    }, [search]);

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white exo-text lg:grid lg:grid-cols-4">
            <div className="lg:col-span-3">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 space-y-4">
                    <div>
                        <h2 className="text-3xl font-semibold">All Courses</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between space-x-2.5">
                            <div className="flex justify-between border-b-2 border-black max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full focus:outline-none"
                                />
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <div className="w-[14px] h-[22px] pt-1 flex items-center justify-center">
                                <svg
                                    onClick={() => setActive("a")}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className={`w-6 h-6 cursor-pointer ${active === "a" ? "fill-orange-500" : "fill-black"
                                        }`}
                                >
                                    <path d="M0 0h10v10H0V0zM12 0h10v10H12V0zM0 12h10v10H0V12zM12 12h10v10H12V12z" />
                                </svg>
                            </div>

                            <div>
                                <i
                                    onClick={() => setActive("b")}
                                    className={`fa-solid fa-list cursor-pointer ${active === "b" ? "text-orange-500" : "text-black"
                                        }`}
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:gap-8 gap-4">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, idx) => (
                            <React.Fragment key={idx}>
                                {active === "a" && <Course1 course={course} />}
                                {active === "b" && <Course2 course={course} />}
                            </React.Fragment>
                        ))
                    ) : (
                        <p>No courses found</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllCourses;
