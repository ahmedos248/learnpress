import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const features = [
  "Certification",
  "Certification",
  "Certification",
  "Certification",
  "Certification",
];

const Grow = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-8 py-5 bg-white mb-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20 p-4">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="images/Vector.png"
            alt="Grow Your Skills"
            className="w-full  h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 md:pr-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:w-3/4">
            Grow us your skill with LearnPress LMS
          </h2>

          <p className="text-gray-700 mb-6">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>

          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-3">
              <AiOutlineCheck className="text-emerald-600 mr-2" size={20} />
              <span className="text-gray-800">{feature}</span>
            </div>
          ))}

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full w-40 cursor-pointer mt-4">
            Explore Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default Grow;
