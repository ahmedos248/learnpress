import React from 'react';
import { useLocation } from 'react-router-dom';

const formatLabel = (segment, index, pathnames) => {
    if ((pathnames[0] === 'course' || pathnames[0] === 'courses') && index === 1) return 'Course Details';
    if ((pathnames[0] === 'blog' || pathnames[0] === 'articles') && index === 1) return 'Blog Single';
    return segment;
};


const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    return (
        <div className='text-sm text-gray-600 bg-gray-100'>
            <div className="max-w-screen-xl mx-auto py-4 px-6 flex items-center gap-1">
                <span>Homepage</span>
                {pathnames.map((segment, index) => {
                    const isLast = index === pathnames.length - 1;
                    const label = formatLabel(segment, index, pathnames);
                    const colorClass = isLast ? 'text-gray-400' : 'text-gray-600';

                    return (
                        <span key={index} className="inline-flex items-center">
                            <span className="mx-2" aria-hidden="true">›</span>
                            <span className={colorClass} aria-current={isLast ? 'page' : undefined}>{label}</span>
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumb;
