import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white">
      <h1 className="text-5xl md:text-6xl font-bold py-6 text-gray-900">
        Error
      </h1>

      <div className="flex flex-col items-center">
        <img
          src="/images/erorr.png"
          alt="404 Error"
          className="w-full max-w-sm md:max-w-xl lg:max-w-3xl"
        />
        <Link to="/">
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all shadow-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
