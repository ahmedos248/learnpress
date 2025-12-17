import React from 'react';
import { useLocation, Link, useOutletContext } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);
  const { courses = [], articles = [], state } = useOutletContext() || {};
  const currentCourse = state?.course || courses.find(c => location.pathname.includes(c.id));
  const currentArticle = state?.article || articles.find(a => location.pathname.includes(a.id));

  const formatLabel = (segment, index) => {
    if ((pathnames[0] === 'courses' || pathnames[0] === 'course') && index === 1) {
      return currentCourse?.title || 'Course Details';
    }
    if ((pathnames[0] === 'blog' || pathnames[0] === 'articles') && index === 1) {
      return currentArticle?.title || 'Blog Single';
    }
    return segment;
  };

  return (
    <div className="text-sm text-gray-600 bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-4 px-6 flex items-center gap-1">
        <Link to="/" className="text-gray-600 hover:underline hover:text-orange-500">
          Homepage
        </Link>

        {pathnames.map((segment, index) => {
          const isLast = index === pathnames.length - 1;
          const label = formatLabel(segment, index);
          const colorClass = isLast ? "text-gray-400" : "text-gray-600";

          return (
            <span key={index} className="inline-flex items-center">
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span
                className={colorClass}
                aria-current={isLast ? "page" : undefined}
              >
                {label}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
