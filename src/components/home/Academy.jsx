import { IoSchoolSharp } from "react-icons/io5";

const Academy = () => {
  return (
    <section className="px-4 md:px-20 py-5 bg-white">
      <div className="w-full py-10 md:py-16 px-4 md:px-6 bg-gradient-to-r from-blue-200 via-purple-200 to-purple-300 relative rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
            <div className="rounded-full bg-white w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-lg">
              <IoSchoolSharp size={35} className="text-black" />
            </div>
            <h1 className="mt-3 sm:mt-0 sm:ml-4 text-lg sm:text-xl md:text-2xl font-bold">
              Let’s Start With Academy LMS
            </h1>
          </div>

          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white px-6 py-2 rounded-full transition">
              I’m a student
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition">
              Become an Instructor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
