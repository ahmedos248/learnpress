import React from 'react'
import { 
  FaPaintBrush, FaCode, FaComments, FaVideo,
  FaCamera, FaBullhorn, FaPenNib, FaChartLine,
  FaFlask, FaServer
} from 'react-icons/fa';
 const cats = [
   { icon: <FaPaintBrush size={28} />, title: "Art & Design", num: 38 },
   { icon: <FaCode size={28} />, title: "Development", num: 35 },
   { icon: <FaComments size={28} />, title: "Communication", num: 38 },
   { icon: <FaVideo size={28} />, title: "Videography", num: 38 },
   { icon: <FaCamera size={28} />, title: "Photography", num: 37 },
   { icon: <FaBullhorn size={28} />, title: "Marketing", num: 38 },
   { icon: <FaPenNib size={28} />, title: "Content Writing", num: 38 },
   { icon: <FaChartLine size={28} />, title: "Finance", num: 32 },
   { icon: <FaFlask size={28} />, title: "Science", num: 38 },
   { icon: <FaServer size={28} />, title: "Network", num: 34 },
 ];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-15">
    
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold">Top Categories</h2>
            <p className="text-gray-500">Explore our Popular Categories</p>
          </div>

          <div className="border px-5 py-2 rounded-full hover:bg-gray-100">
            All Categories
          </div>
        </div>

    
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cats.map((c, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer text-center"
            >
              <div className="text-orange-500 flex justify-center mb-4">
                {c.icon}
              </div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-gray-500 text-sm mt-3">{c.num}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
