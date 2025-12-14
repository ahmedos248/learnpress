import React from 'react'
const boxs = [
  { tital: "Active Students", num: "25K+" },
  { tital: "Total Courses", num: "899" },
  { tital: "Instructor", num: "158" },
  { tital: "Satisfaction Rate", num: "100%" },
];
const Rate = () => {
  return (
    <section className="py-5 px-6 md:px-20 mb-10">
      <div className="w-full py-16 ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
          {boxs.map((box, index) => (
            <div
              key={index}
              className="bg-neutral-100 rounded-2xl p-10 text-center"
            >
              <h3 className="text-3xl font-bold text-orange-500">{box.num}</h3>
              <p className="text-gray-600 font-semibold">{box.tital}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rate
