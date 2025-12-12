import React from 'react';
import { useLocation } from 'react-router-dom';

const pathNameMap = {
    course: 'Course',
    courses: 'Courses',
    blog: 'Blog',
    contact: 'Contact',
};

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className='text-sm text-gray-600 bg-gray-100'>
            <div className="max-w-screen-xl mx-auto py-4 px-6">
                <span>Homepage</span>
                {pathnames.map((segment, index) => {
                    let label = pathNameMap[segment] || segment;
                    if ((pathnames[0] === "course" || pathnames[0] === "courses") && index === 1) {
                        label = "Course Details";
                    }
                    if ((pathnames[0] === "blog" || pathnames[0] === "articles") && index === 1) {
                        label = "Blog Single";
                    }

                    const isLast = index === pathnames.length - 1;
                    const colorClass = isLast ? 'text-gray-400' : 'text-gray-600';

                    return (
                        <span key={index} className="inline-flex items-center">
                            <span className={`mx-2 ${colorClass}`}>›</span>
                            <span className={colorClass}>{label}</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumb;
