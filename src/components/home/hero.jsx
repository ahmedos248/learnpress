const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-r from-[#FFF5BE] to-[#D0F7EA] overflow-hidden mb-20">
      <img
        src="/images/topHero.png"
        alt=""
        className="absolute top-0 right-0 opacity-20"
      />

      <img
        src="/images/downHero.png"
        alt=""
        className="absolute bottom-0 left-0"
      />
      <img
        src="/images/heroVector.png"
        alt=""
        className="absolute bottom-0 right-0 z-0"
      />
      <div className="container mx-auto px-6 min-h-[90vh] flex items-center justify-between relative z-10">
        <div className="z-30">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Build Skills With <br />
            <span className="text-black">Online Course</span>
          </h1>

          <p className="mt-4 text-gray-600">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized that cannot trouble.
          </p>

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Posts Comment
          </button>
        </div>
        <div className="relative hidden lg:flex justify-center items-center h-[90vh] w-full">
          <img
            src="/images/image.png"
            alt="Student"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto object-cover drop-shadow-xl z-10"
          />

          <img
            src="/images/3aa92c10ac110af36413ad66b44dbdb4193e61f9 (1).png"
            className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-full  opacity-50 z-0"
            alt="background text"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
