import React from 'react'
const Amazing = () => {
  return (
    <section className="px-4 py-5 md:px-20 bg-white">
      <div className="w-full py-16 px-6 bg-gradient-to-r from-red-200 via-purple-200 to-blue-200 relative rounded-2xl overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block">
          <img
            src="/images/0026eec299e748c80d7a581e5b670825ce48a123.png"
            className="w-60 rounded-xl shadow-xl rotate-[25deg] translate-x-[-40px] translate-y-[-40px] z-10"
            alt=""
          />

          <img
            src="/images/065454df7a53869cd1298a2716bbca6439ddf65b.png"
            className="w-60 rounded-xl shadow-xl rotate-[25deg] translate-x-[-40px] translate-y-[40px] z-10"
            alt=""
          />

          <img
            src="/images/2f47e7207f5fc91af94633fdde77bec154f6f4b3.png"
            className="w-64 rounded-xl shadow-2xl rotate-[25deg] absolute top-[90px] left-[50px] z-50"
            alt=""
          />
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block">
          
          <img
            src="/images/601032391cdf7810a372b7254f5d1e5903021b79.png"
            className="w-60 rounded-xl shadow-2xl rotate-[10deg] translate-x-[20px] translate-y-[20px]"
            alt=""
          />

        
          <img
            src="/images/bccf72d9ab71dd46daac2cea5b2b705d4b2dd892.png"
            className="w-60 rounded-xl shadow-xl rotate-[-12deg] absolute top-[-70px] right-[80px]"
            alt=""
          />
          <img
            src="/images/fa489c49dab4285535f5811e3c950fed6562d6f9.png"
            className="w-64 rounded-xl shadow-xl rotate-[15deg] absolute top-[100px] right-[100px]"
            alt=""
          />
        </div>

   
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center relative z-10">
            <h2 className="font-bold tracking-wide text-sm md:text-base">
              PROVIDING AMAZING
            </h2>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Education Wordpress Theme
            </h1>

            <p className="text-gray-700 max-w-xl mb-6">
              The next level of LMS WordPress Theme. Learn anytime and anywhere.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer">
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amazing
