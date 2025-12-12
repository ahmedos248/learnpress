import React from "react";
import { Link } from "react-router-dom";
const RoutingHeader = ({  breadcrumbs = [], name }) => {
  return (
    <div>
      <div className="bg-gray-100 py-6 mb-10">
        <div className="container mx-auto px-4 md:px-20">
          <div className="text-gray-900 text-sm flex gap-2 items-center font-medium">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <span key={index} className="flex items-center gap-1">
                  {name ? (
                    <Link
                      to={item.href}
                      className="hover:text-orange-500 transition "
                    >
                      {item.label}
                    </Link>
                  ) : isLast ? (
                    <span className="text-gray-500 ">{item.label}</span>
                  ) : (
                    <Link
                      to={item.href}
                      className="hover:text-orange-500 transition"
                    >
                      {item.label}
                    </Link>
                  )}

                  {index < breadcrumbs.length - 1 && ">"}
                </span>
              );
            })}
            {name && (
              <>
                <span>{">"}</span>
                <span className="text-gray-500 font-medium">{name}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutingHeader;
