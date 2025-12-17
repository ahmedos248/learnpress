import React, { useState } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Breadcrumb from "../components/Breadcrumb";
const SignPage = () => {
  const [tab, setTab] = useState("login");

  return (
    <>
      <Breadcrumb />
      <div className="min-h-[80vh] flex items-center justify-center  px-8">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-4 text-sm font-semibold transition-all duration-300
              ${tab === "login"
                  ? "text-black border-b-2 border-orange-500 bg-gray-50"
                  : "text-gray-400 hover:text-black"
                }`}
            >
              Login
            </button>

            <button
              onClick={() => setTab("signup")}
              className={`flex-1 py-4 text-sm font-semibold transition-all duration-300
              ${tab === "signup"
                  ? "text-black border-b-2 border-orange-500 bg-gray-50"
                  : "text-gray-400 hover:text-black"
                }`}
            >
              Register
            </button>
          </div>

          <div className="p-6">
            {tab === "login" ? (
              <Login setTab={setTab} />
            ) : (
              <Signup setTab={setTab} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignPage;
