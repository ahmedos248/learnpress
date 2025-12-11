import React from "react";
import { FaShoppingCart, FaTools, FaWpforms } from "react-icons/fa";
import { MdPayment, MdSchool, MdSecurity } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import { RiShieldUserFill } from "react-icons/ri"; 
import { SiStripe, SiWoocommerce } from "react-icons/si"; 
import { BsStars } from "react-icons/bs";

const ExploreSection = () => {
  const icons = [

    {
      icon: <FaTools size={35} />,
      color: "bg-purple-500",
      top: "10%",
      left: "63%",
      rotate: "12deg",
    },
    {
      icon: <MdPayment size={32} />,
      color: "bg-yellow-400",
      top: "43%",
      left: "80%",
      rotate: "-8deg",
    },
    {
      icon: <FaShoppingCart size={40} />,
      color: "bg-blue-500",
      top: "18%",
      left: "92%",
      rotate: "18deg",
    },
    {
      icon: <MdSchool size={60} />,
      color: "bg-green-500",
      top: "67%",
      left: "70%",
      rotate: "-15deg",
    },
    {
      icon: <FaWpforms size={36} />,
      color: "bg-pink-500",
      top: "78%",
      left: "89%",
      rotate: "6deg",
    },
    {
      icon: <AiFillApi size={38} />,
      color: "bg-red-500",
      top: "55%",
      left: "58%",
      rotate: "-10deg",
    },
    {
      icon: <RiShieldUserFill size={45} />,
      color: "bg-indigo-500",
      top: "28%",
      left: "72%",
      rotate: "-5deg",
    },
    {
      icon: <SiStripe size={40} />, 
      color: "bg-blue-700",
      top: "40%",
      left: "85%",
      rotate: "10deg",
    },
    {
      icon: <SiWoocommerce size={45} />,
      color: "bg-purple-600",
      top: "35%",
      left: "95%",
      rotate: "-12deg",
    },
    {
      icon: <BsStars size={42} />,
      color: "bg-orange-400",
      top: "12%",
      left: "78%",
      rotate: "14deg",
    },
  ];

  return (
    <section className="px-4 py-5 md:px-20 bg-white">
      <div className="w-full py-16 px-6 bg-gradient-to-r from-green-100 to-red-200 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 pointer-events-none select-none">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`absolute hidden lg:flex rounded-2xl shadow-xl  items-center justify-center text-white`}
              style={{
                width: `${60 + (index % 4) * 10}px`,
                height: `${60 + (index % 4) * 10}px`,
                top: item.top,
                left: item.left,
                backgroundColor: "",
                transform: `rotate(${item.rotate})`,
              }}
            >
              <div
                className={`w-full h-full rounded-2xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            GET MORE POWER FROM
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            LearnPress Add-Ons
          </h2>

          <p className="text-gray-700 max-w-xl mb-6">
            The next level of LearnPress – LMS WordPress Plugin. More powerful,
            flexible and magical inside.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full cursor-pointer">
            Explore Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
