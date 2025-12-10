
const Hero = () => {
  return (
    
    <section className="w-full bg-gradient-to-r from-yellow-100 to-green-200 min-h-[80vh] flex items-center relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 items-center relative z-20">
        <div className="space-y-5">
          <h1 className="text-7xl lg:text-5xl  font-bold leading-tight">
            Build Skills With <br /> Online Course
          </h1>

          <p className="text-gray-600 w-4/5">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 flex items-center gap-2 cursor-pointer">
            Post Comment
          </button>
        </div>

        {/* Image Section */}
        <div className="relative h-full hidden min-h-[80vh] lg:flex justify-center">
          <img
            src="images/3aa92c10ac110af36413ad66b44dbdb4193e61f9 (1).png"
            className="absolute top-40 left-1/2 -translate-x-1/2 w-full object-contain opacity-50 pointer-events-none select-none z-0"
            alt="background text"
          />

          <img
            src="images/image.png"
            alt="student"
            className="relative h-full object-cover drop-shadow-xl z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
